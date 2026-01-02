---
title: Troubleshooting
sidebar_position: 1
---

# Troubleshooting - Erreurs courantes

Guide de résolution des erreurs fréquentes lors de l'installation et du développement Laravel.

## Target class [Controller] does not exist

**Cause :** Laravel ne trouve pas le controller car le namespace n'est pas configuré.

**Solution :** Ajouter le namespace dans `bootstrap/app.php` :

```php title="bootstrap/app.php"
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        commands: __DIR__ . '/../routes/console.php',
        using: function(){
            Route::middleware('web')
                ->namespace('App\Http\Controllers')
                ->group(base_path('routes/web.php'));
        },
    )
```

Puis dans `routes/web.php`, ajouter le namespace en haut :
```php title="routes/web.php"
<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
...
```

Voir : [Routes & Controllers](../Installation/StepByStep/05-routes-controllers)

---

## Vite manifest not found

**Cause :** Les assets Vite n'ont pas été compilés.

**Solutions :**
- **En dev** : Lancer `npm run dev` avant de charger la page
- **En prod** : Lancer `npm run build` pour compiler les assets
- Vérifier que `public/build/manifest.json` existe après le build

Voir : [Vite.js & app.js](../Installation/StepByStep/03-vite-app#troubleshooting)

---

## SQLSTATE[42000]: La clé est trop longue

**Cause :** Certaines configurations MySQL/MariaDB ont une limite de longueur d'index.

**Solution :** Ajouter dans `app/Providers/AppServiceProvider.php` :

```php title="app/Providers/AppServiceProvider.php"
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Schema::defaultStringLength(191);
    }
}
```

---

## Permissions sur storage/ ou bootstrap/cache/

**Cause :** Laravel n'a pas les droits d'écriture sur ces dossiers.

**Solutions :**

```bash
# Sur serveur Linux/Mac
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Ou pour le développement local (moins sécurisé)
chmod -R 777 storage bootstrap/cache
```

**Important** : En production, utiliser `775` avec le bon propriétaire (généralement `www-data`).

---

## Class 'X' not found après composer require

**Cause :** L'autoload de Composer n'est pas à jour.

**Solution :**
```bash
composer dump-autoload
```

---

## Session / Cache ne fonctionne pas

**Causes multiples :**

**Solution 1 - Permissions :**
```bash
php artisan cache:clear
php artisan config:clear
chmod -R 775 storage/framework
```

**Solution 2 - Variables d'environnement :**
Vérifier dans `.env` :
```bash
CACHE_DRIVER=file
SESSION_DRIVER=file
```

**Solution 3 - Après modif du .env :**
```bash
php artisan config:cache
```

---

## APP_KEY manquant

**Erreur :** "No application encryption key has been specified"

**Solution :**
```bash
php artisan key:generate
```

---

## Submodule Git vide (jolimardi-css)

**Cause :** Le submodule n'a pas été initialisé après le clone.

**Solution :**
```bash
git submodule update --init --recursive
```

Pour mettre à jour le submodule :
```bash
git submodule update --remote --merge
```

---

## Migration failed / Database does not exist

**Vérifications :**
1. Database existe bien dans MySQL/MariaDB
2. Credentials corrects dans `.env` (DB_DATABASE, DB_USERNAME, DB_PASSWORD)
3. MySQL/MariaDB est démarré

```bash
# Créer la database manuellement
mysql -u root -p
CREATE DATABASE nom_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

---

## "Please provide a valid cache path" (Blade)

**Cause :** Le dossier de cache des vues n'existe pas ou n'a pas les bonnes permissions.

**Solution :**
```bash
mkdir -p storage/framework/views
chmod -R 775 storage/framework
```
