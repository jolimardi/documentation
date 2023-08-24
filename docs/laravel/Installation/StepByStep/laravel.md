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
```

### Configuration du .env
Il faut ensuite éditer le `.env` à la racine, pour qu'il ressemble à ça :
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

## Démarrage du serveur local

On peut exécuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur intégré (basique, mais pratique pour dépanner) :

```bash
php artisan serve
```

Pour les assets et le live reload, lancer Vite.js :
```bash
npm run dev
```