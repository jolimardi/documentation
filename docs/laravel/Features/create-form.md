---
title: Créer un formulaire basique de A à Z
slug: creer-un-formulaire
---

Ici, nous allons ajouter un formulaire de contact à un projet laravel neuf, de A à Z. 
- Display du formulaire
- Ajout de protonemedia/laravel-form-components
- Ajout de Brevo pour l'envoi de mail
- Migration pour stocker les messages
- ...

:::note
Si vous avez suivi l'ajout d'autre `Features` de cette documentation, il se peut que vous ayez déjà effectuer un partie de ce tutoriel. 

Notament en ayant suivi `Features/Protonemedia/laravel-form-components`
:::

## Préparation 

### Préparer le Model 

On commence par ajouter le model qui nous servira à stocker les messages : 

```bash title='console'
php artisan make:model ContactMessage
```

```php title='app/Models/ContactMessage.php'
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model {
    use HasFactory;
}
```

### Ajouter la migration 

La migration permettra de stocker les messages envoyé même si il y a eu une erreur lors de l'utilisation du service.

```bash title='console'
php artisan make:migration create_contact_messages_table
```

Puis ajouter les colonnes de la table :

```php title='database/migrations/YYYY_MM_DD_hhmmss_create_contact_messages_table.php'
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->text('message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('contact_messages');
    }
};
```

Exécutez : 

```bash title='console'
php artisan migrate
```

:::info
Vérifier bien que votre .env est bien réglé pour vous connecter à votre base de données.
:::

### Installer Guzzle

Retrouver les détails du package sur sa page dédié : https://packagist.org/packages/guzzlehttp/guzzle

```bash title='console'
composer require guzzlehttp/guzzle
```

Puis l'importer dans le fichier de service :

```php title='app/Services/SendInBlueService.php'
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
```

### Installer jolimardi/laravel-flash 

```bash title="console"
composer require jolimardi/laravel-flash:dev-master

php artisan vendor:publish --provider="JoliMardi\Flash\FlashServiceProvider"
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.
> `vendor:publish` permet d'avoir accès au template qui affiche les messages dans `resources/views/vendor/flash-messages/` 

Ajouter l'alias personnalisé dans `config/app.php` -> `aliases`:

```php title="config/app.php"
    'aliases' => Facade::defaultAliases()->merge([
        // highlight-start
        'MyFlash' => JoliMardi\Flash\Flash::class,
        // highlight-end
    ])->toArray(),
```
:::info
On évite d'avoir Flash comme alias à cause de la facade Flash de Laravel par défaut

Cet alias s'utilise dans la vue uniquement. Il n'y a pas besoin de la modifier par défaut
:::

:::note 
Plus de détails sur la page dédié à ce package : [jolimardi/laravel-flash](jm-flash.md)
:::

### Installer Protonemedia/laravel-form-components

:::info
Se rendre sur la page dédié au packages et suivre l'installation complète cette fois-ci, ici : **[Protonemedia/laravel-form-components](laravel-form-components.md)**
:::

Vous devriez maintenant avoir :
- Vos composants de formulaire dans `resources/views/vendor/form-components/jolimardi/mes-fichiers.blade.php` 
- `'framework' => 'jolimardi'` setup dans `config/form-components.php`

:::note
Il n'est pas conseiller de modifier les composants sans avoir connaissance du dépôt : **[jolimardi/jolimardi-css](https://github.com/jolimardi/jolimardi-css)**
:::

### Importer le css lié aux composants

Ayant installer des composants blade pour formulaire custom, on utilisera également du custom css de la "librairie" **[jolimardi/jolimardi-css](https://github.com/jolimardi/jolimardi-css)**

#### Ajouter les fichiers au projet 

1. Première méthode 

Download le zip du repo et extraire le dossier dans `resources/css`

2. Deuxième méthode 

Cloner le repo dans `resources/css`

3. Troisième méthode 

Ajouter en tant que submodule dans `resources/css`, avec Fork par exemple ou en ajoutant un .gitmodules à la racine du projet : 

```git title='.gitmodules'
[submodule "resources/css/jolimardi-css"]
	path = resources/css/jolimardi-css
	url = https://github.com/jolimardi/jolimardi-css/
	update = rebase
	branch = main
```

#### Importer le css dans le projet

Dnas ce tutoriel nos utilisons Vite.js pour gérer les assets frontend, et qui importe dans le head notre layout notre fichier `app.css`. Il faut donc simplement ajouter un import dans celui-ci.

```js title='resources/css/app.css'
...
/* Joli Mardi Base CSS */
@import "jolimardi-css/jolimardi.css";
...
```

:::info
Vite est fourni par défaut dans tout les nouveaux projets Laravel, rendez-vous dans `Installation -> StepByStep -> Vite.js et app.js` pour retrouver notre configuration de Vite.
:::

### Ajouter le service Brevo (SendInBlue)

On ajoute Brevo qui sera notre gestionnaire externe d'envoi de mail pour ce tutoriel. 

Déroulement :
- Se rendre sur : https://www.brevo.com/fr/
- Créer un compte
- Puis se rendre dans le menu du compte en haut a droite
- SMTP et API -> Clés API
- Générer un nouvelle clef
- Enregistrer la clef dans le .env

```bash title='.env'
...
SENDINBLUE_KEY="MY_API_KEY" # Remplacer par sa propre clef
SENDINBLUE_FROM_ADDRESS="mon-mail@gmail.com" # On profite d'être dans le .env pour ajouter cette ligne également.
...
```

- Créer le dossier `Services` dans `app/`
- Ajouter un fichier `SendInBlue.php` qui contiendra une simple classe Php
- Ajouter les lignes ci-dessous au fichier

```php title='app/Services/SendInBlueService.php'
<?php

namespace App\Services;

use GuzzleHttp\Client;
use JoliMardi\Flash\Flash;
use GuzzleHttp\Exception\RequestException;

class SendInBlueService {
    protected $client;

    public function __construct(Client $client) {
        $this->client = $client;
    }

    public function sendEmail($to, $to_name, $params, $template_id) {

        if (!env('SENDINBLUE_KEY') || !env('SENDINBLUE_FROM_ADDRESS')) {
            Flash::message('error', 'Les paramètres SendinBlue ne sont pas configurés.');
            return false;
        }

        $data = [
            "sender" => [
                "name" => "Yohan sati",
                "email" => env('SENDINBLUE_FROM_ADDRESS'),
            ],
            "to" => [
                [
                    "email" => $to,
                    "name" => $to_name
                ]
            ],
            "templateId" => $template_id,
            "params" => $params
        ];

        try {
            $response = $this->client->request('POST', 'https://api.sendinblue.com/v3/smtp/email', [
                'headers' => [
                    'api-key' => env('SENDINBLUE_KEY'),
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ],
                'json' => $data
            ]);

            $statusCode = $response->getStatusCode();
            $content = $response->getBody();

            return $content;
        } catch (RequestException $e) {
            // Guzzle throws a RequestException for HTTP protocol errors
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                $responseBodyAsString = $response->getBody()->getContents();
                Flash::message('error', 'Erreur de requête HTTP. Détails : ' . $responseBodyAsString); // Example : Api key is invalid
            } else {
                Flash::message('error', 'Erreur de requête HTTP sans réponse du serveur. Détails : ' . $e->getMessage()); // Example : cURL error 6: Could not resolve host: api.sendinblue.com
            }
            return false;
        } catch (\Exception $e) {
            // Catch other exceptions
            Flash::message('error', 'Erreur Brevo : ' . $e->getMessage()); // Example : variable $data is not defined
            return false;
        }
    }
}
```

:::info
Le fichier ne fonctionnera pas encore correctement, nous allons ajouter les packages qu'il utilise par la suite.
:::

Le fichier fonctionne de la manière suivante :
> Vérifie si il y a bien une clef api et une adresse mail d'envoi
> Prépare les data du mail
> Essaie d'envoyer le mail en utilisant l'api SendInBlue (Brevo)
> Récupère les potentiels erreur grâce au package GuzzleHTTP/guzzle
> Sinon affiche différent type d'erreur en utilisant le packages Jolimardi/Laravel-flash 



## Utiliser le service

### Préparer les routes 

```php title='routes/web.php'
// Ajouter ces deux routes pour gérer la vue et l'envoi du formulaire
Route::get('/contact', 'IndexController@contact')->name('contact');
Route::post('/contact', 'IndexController@send')->name('contact.send');
```

### Créer le formulaire 

On ajoute maintenant une nouvelle vue dans notre dossier dédié : 

```php title='resources/views/contact.blade.php'
<div class="container">
    <h1>Contactez-moi</h1>

    <x-form :action="route('contact.send')">

        <x-form-input name="name" label="Prénom & nom" class="first" required />

        <x-form-input type="email" name="email" label="Email" required />

        <x-form-textarea name="message" label="Message" placeholder="Date et heure envisagées, le nombre de personnes, toute info utile !" required />


        <div class="btns">
            <x-form-submit class="btn-large" />
        </div>
    </x-form>
</div>
```



### Paramétrer le controlleur 

On prépare le controlleur : 

```php title='app/Https/Controllers/MonController.php'
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactMessage;
use App\Services\SendinBlueService;
use JoliMardi\Flash\Flash;

class MonController extends Controller {
    public function contact() {
        return view('contact'); // view() = resources/view/
    }

    public function send(Request $request) {
        // Validation
        $request->validate([
            'name' => 'required|min:3|max:255',
            'email' => 'required|email',
            'message' => 'required|min:5'
        ]);

        $params = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ];

        $contactMessage = new ContactMessage;
        $contactMessage->name = $request->name;
        $contactMessage->email = $request->email;
        $contactMessage->message = $request->message;

        if ($contactMessage->save()) {
            // Redirection avec flash message

            $sendinBlueService = app(SendinBlueService::class);

            if ($sendinBlueService->sendEmail($request->email, $request->name, $params, 3)) {
                Flash::message('success', 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
                return back()->withInput();
            } else {
                return back()->withInput();
            }
        } else {
            Flash::message('error', 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
            return back()->withInput();
        }
    }
}
```

:::note
Attention à bien importer les différents services
:::

## Fin

Et voici, maintenant vous devriez pouvoir utiliser envoyer et recevoir des mails depuis ce formulaire. 

@TODO : 

- Cas fréquents de problème ? .env pas configurer, pas de clef api, erreur de validation ...


