---
title: Installer Laravel
---

### Projet de base Laravel

:::info
Remplacer `nom-du-site` par le nom du projet. Le projet sera créé dans un sous-dossier.
:::
```bash
composer create-project laravel/laravel nom-du-site
cd nom-du-site
composer update
npm install
php artisan key:generate
php artisan storage:link
```

### Configuration du .env
Il faut ensuite éditer le `.env` à la racine, pour qu'il ressemble à ça :
```bash title="/.env"
APP_NAME="Mon Site"
APP_ENV=local
APP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=
APP_DEBUG=true
APP_URL=http://mon-site.local

# SENDINBLUE_KEY="xkeysib-A_COMPLETER"
# SENDINBLUE_FROM_ADDRESS="contact@mon-site.com"

# YOUTUBE_API_KEY="{youtube_api_key}"
# VIMEO_TOKEN="{vimeo_token}"

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

## Ajout de quelques lignes de config
```php title="/app/config/app.php"
<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [

    /* -------  Config commune à l'environnement de dev et de prod, non sécurisée (pas de mots de passes ou clés d'api) ------- */

    'phone' => [
        'formatted' => '06 06 06 06 06',
        'number' => '0606060606',
    ],
    'email' => 'monsite@gmail.com',
    'instagram_link' => 'https://www.instagram.com/monsite/',
    'facebook_link' => 'https://www.facebook.com/monsite',
    'linkedin_link' => 'https://www.linkedin.com/in/monsite/',
    'youtube_link' => 'https://www.linkedin.com/in/monsite/',
    'name' => 'Title de mon site',
    'send_from' => [
        'email' => 'contact@monsite.com',
        'name' => 'Nom expéditeur'
    ],
    'send_to' => [
        'email' => (ENV('APP_ENV') == 'local' ? 'romain.cherot@free.fr' : 'contact@monsite.com'),
        'name' => 'Recipient name'
    ],
    'admin_slug' => ENV('ADMIN_SLUG', 'brain'),

    [...]
```

## Démarrage du serveur local

On peut exécuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur intégré (basique, mais pratique pour dépanner) :

```bash
php artisan serve
```

Pour les assets et le live reload, lancer Vite.js :
```bash
npm run dev
```

---

**Étape suivante :** [2. Packages Composer](./02-packages-composer)