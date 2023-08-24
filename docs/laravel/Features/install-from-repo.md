---
title: Installation depuis un dépôt
slug: installation-depuis-un-depot
---

## Récuperer le projet sur github

Se rendre sur la page d'un dépôt, dans cet exemple nous utiliserons : https://github.com/jolimardi/bethmann

Cloner le dépôt dans le dossier de son choix, depuis la console :

```bash title='console'
git clone https://github.com/jolimardi/bethmann
```

:::danger
Pour avoir accès à la database et pouvoir run les migrations, ne pas oublier de démarrer Wampserver ou tout autre logiciel permettant la gestion de database. 
:::

## Installer les dépendances

```bash title='console'
cd bethmann

composer install 

npm install 

php artisan migrate 
```

:::info
 Certaines configuration de database peuvent sortir une erreur `SQLSTATE[42000]: Syntax error or access violation: 1071 La clé est trop longue.` Dans ce cas, ajouter dans `app/Service/AppServiceProvider.php` la ligne suivante dans la fonction boot :
```php title="/app/Service/AppServiceProvider.php"
use Illuminate\Support\ServiceProvider;

...

public function boot(): void {
    Schema::defaultStringLength(191);
}
```
:::


## Préparer le .env 

```bash title="/.env"
APP_NAME="Mon Site"
APP_ENV=local
APP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=
APP_DEBUG=true
APP_URL=http://mon-site.local

# NOVA_AUTHORIZED_EMAILS="mon-email@gmail.com, deuxieme-email@gmail.com" # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :
# protected function gate() {
#        Gate::define('viewNova', function ($user) {
#            $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'romain.cherot@gmail.com, hodeeemilien@gmail.com');
#            $authorized_emails = explode(',', $authorized_emails_str);
#            $authorized_emails = array_map('trim', $authorized_emails);
#            return in_array($user->email, $authorized_emails);
#        });
#    }

# SENDINBLUE_KEY="xkeysib-A_COMPLETER"
# SENDINBLUE_FROM_ADDRESS="contact@mon-site.com"

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=monsite
DB_USERNAME=root
DB_PASSWORD="motdepasseDB"


## REDIS - Used for Cache and Sessions (available on Forge)
## Comment if no redis available on your server

# CACHE_DRIVER=redis
# SESSION_DRIVER=redis
# SESSION_LIFETIME=1440 # 1 jour en minutes

# REDIS_HOST=127.0.0.1
# REDIS_PASSWORD=null
# REDIS_PORT=6379

# FILESYSTEM_DISK=local

```

### Ne pas oublier 

- Vérifier les informations de connection à la database.
- Décommenté la ligne `# NOVA_AUTHORIZED_EMAILS="mon-email@gmail.com, deuxieme-email@gmail.com"`
- Modifier `app/Providers/NovaServiceProvider.php` comme indiqué dans le `./env`
- Sauvegarder le `./env`

## Ajouter les fichiers ignoré par .gitignore

### Nova
```
composer config repositories.nova composer https://nova.laravel.com
```

Puis entrer ses credentials pour ne pas avoir à les entrer à chaque fois (adresse mail et clé d'api), cette commande va ajouter auth.json à la racine avec les credentials (ne pas versionner ce fichier).
:::warning
Il ne faut pas versionner ce fichier `auth.json` sur Git, il contient la clé d'api.
:::
```
composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY
```

#### Ajouter le premier utilisateur

Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (`http://mon-url.com/nova`) :

```bash
php artisan nova:user
```
Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour créer l'utilisateur).

<details>
<summary>Bonus : Ajouter un utilisateur jolimardi par défaut (Via une migration)</summary>

Ajouter dans `database/migrations`: 

```php title='2023_06_27_160507_add_nova_user_jolimardi.php'
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        // Quelques valeurs pré-remplies
        DB::table('users')->insert([
            "name" => "Joli Mardi",
            "email" => "romain.cherot@gmail.com",
            "email_verified_at" => NULL,
            "password" => '$2y$10$flJKeNiiWe57txt1eCk9deNCwQ4xShzf85kquM.1oqS5j.TcRstf2',
            "remember_token" => NULL,
            "created_at" => "2023-06-24 16:09:35",
            "updated_at" => "2023-06-24 16:11:03",
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        DB::table('users')->where('email', 'romain.cherot@gmail.com')->delete();
    }
};
```
</details>

### Icons 

On utilisera un dossier icons spécifique en conjonction avec le package blade-icons. 

Si on retrouver l'erreur suivante : 

```php title='error'
BladeUI\Icons\Exceptions\CannotRegisterIconSet

The [C:\mon-chemin\bethmann\resources/icons] path for the "default" set does not exist.
```

Alors ajouter le dossier icons aux resources :

```php title='arborescence'
...
|-- resources/
|   |-- css/
// highlight-start
|   |-- icons/
// highlight-end
|   |-- js/
|   |-- view/
|-- routes/
...
```


## Démarrer le site web

On peut maintenant accéder au site de plusieurs façon

### Créer un virtual host avec Wamp

- Lancer Wampserver
- Se rendre sur localhost dans son navigateur
- Cliquer sur "Ajouter un virtual host"
- Donner un nom, exemple : bethmann.local
- Lié le dossier public du projet, exemple : C:\mon-chemin\bethmann\public
- Ajouter le virtual host
- Se rendre sur l'adresse du vitural host

### Démarrer depuis Laravel

Ouvrez deux terminal et se rendre à la racine du projet pour chacun d'eux :

```bash title='console'
cd C:\mon-chemin\bethmann
```

Lancer une commande par terminal : 

```bash title='console'
# Runtime pour les assets js/css avec Vite
npm run dev
```

```bash title='console'
# Lancement du serveur de développement laravel 
php artisan serve
```

Puis vous rendre sur l'adresse indiqué dans votre console, http://127.0.0.1:8000/ par défaut. 



