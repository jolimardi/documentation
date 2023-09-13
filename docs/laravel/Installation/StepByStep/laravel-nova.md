---
title: Laravel Nova
---

## Il faut d'abord ajouter le repo privé et ses credentials :
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

## Ensuite, installer Nova

:::info
Assurez-vous d'avoir les bonnes infos de connexion à la base de données dans le fichier .env avant le `migrate`
:::

```bash
composer require laravel/nova
php artisan nova:install
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


## Ajouter le premier utilisateur

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


## Important, ajouter les emails autorisés

:::warning
Nova ne vérifie pas les adresses mail en environnement local, mais le fera en prod (risque de bug lors du passage en prod, difficile à débugguer si pas pris en compte dès le départ).

Lorsque l'on n'est plus en environnement `local`, Nova vérifie les adresses mail autorisées, en plus des Nova Users créés. Pour cela, il faut ajouter les emails autorisés dans `app/Providers/NovaServiceProvider.php`, dans la fonction `gate()`.
:::

```php title="/app/Service/NovaServiceProvider.php"
protected function gate(){
    Gate::define('viewNova', function ($user) {
        $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'mon-email@gmail.com, deuxieme-email@gmail.com');
        $authorized_emails = explode(',', $authorized_emails_str);
        $authorized_emails = array_map('trim', $authorized_emails);
        return in_array($user->email, $authorized_emails);
    });
}
```
et en ajoutant dans le `.env` :
``` title="/.env"
NOVA_AUTHORIZED_EMAILS='mon-email@gmail.com, deuxieme-email@gmail.com'
```

**Pour plus de détails sur Laravel nova, retrouvez la documentation officielle ici : https://nova.laravel.com/docs/4.0/installation.html**


