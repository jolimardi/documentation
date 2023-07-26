---
title: Setup d'application
---


# Installer une application laravel jolimardi

Dans cette page, nous allons créer une application Laravel complète avec un bon nombre de fonctionnalité. Du point de vue de la console d'abord, et si besoin nous modifierons légèrement le code. 

## Installer Laravel 

### Application Laravel

Commençon par l'application avec Laravel par défaut : 

```bash
composer create-project laravel/laravel mon-appication
```

*Note :* Remplacer `mon-application` par le nom de votre projet.

Lancer ces commandes pour bien initialiser le projet : 

```bash
composer update
npm install
```

### Laravel Nova

Ajouter indépendament à `composer.json` : 

```json
"repositories": [
    {
        "type": "composer",
        "url": "https://nova.laravel.com"
    }
],
```
Et 
```json
"require": {
    "php": "^8.1",
    "laravel/framework": "^10.0",
    "laravel/nova": "^4.0"
},
```
**Note :** Uniquement `"laravel/nova": "^4.0"` est à ajouter, `php` et `laravel/framework` devrait déjà être là avec une version potentiellement différente.

Créer un nouveau fichier à la racine du projet nommée `auth.json` qui comprend vos credentials Nova, ce fichier ressemble à : 

```json
{
    "http-basic": {
        "nova.laravel.com": {
            "username": "{MAIL_ADDRESS}",
            "password": "{API-KEY}"
        }
    }
}
```

Cela vous permettra de ne pas à avoir a les entré lors de l'installation du package. 

Puis lancer la commande pour télécharger le package :

```bash
composer update --prefer-dist
```

Et enfin, installer Nova grâce aux commandes

```bash
php artisan nova:install
```
Et
```bash
php artisan migrate
```
> Certaines configuration de database peuvent sortir une erreur `SQLSTATE[42000]: Syntax error or access violation: 1071 La clé est trop longue.` Dans ce cas, ajouter dans `app/Service/AppServiceProvider.php` la ligne suivante dans la fonction boot :
```php
public function boot(): void {
    Schema::defaultStringLength(191);
}
```

**Remarque :** Assurez-vous d'avoir mis à jour le fichier .env avec les informations correctes de la base de données. J'utiliserais WAMP pour la base de données. [Site officiel de WAMP](https://www.wampserver.com/) et `php artisan serve` pour le serveur php.

Exemple du fichier .env : 
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=mon-application
DB_USERNAME=root
DB_PASSWORD=
```

Pour finaliser, penser à ajouter un utilisateur pour se connecter à Nova avec la commande et suivez les instructions : 
> *Info* : Parfois la console n'affiche pas l'écriture du mot de passe mais il sera bien enregistré.

```bash
php artisan nova:user
```

**Pour plus de détails sur Laravel nova, retrouvez la documentation officiel ici : https://nova.laravel.com/docs/4.0/installation.html**

### Frontend avec Vite

##### Vite.js 

Vite.js est une nouvelle génération de build tool qui offre un environnement de développement rapide et des performances de construction optimisées. En outre, Vite.js prend en charge des plugins tels que jQuery, Fancybox, PostCSS, PostCSS-Nesting et Autoprefixer pour améliorer la fonctionnalité et la compatibilité de votre projet.

##### Ajouter des plugins

Tout d'abord, Vite est déjà pré-installer avec Laravel.

On va donc directement ajouter les plugins à notre projet pour étendre les fonctionnalités de Vite.js, vérifier les documentation respective pour plus d'informations à propos des plugins. 

1. jQuery

```bash
npm install jquery --save-dev
```

2. PostCSS

```bash
npm install postcss
```

3. PostCSS-Nesting

```bash
npm install postcss-nesting
```

4. Autoprefixer

```bash
npm install autoprefixer
```

5. Bonus: Fancybox 

```bash
npm install @fancyapps/ui --save-dev
```

Puis ajouter à `resources/css/app.css` la ligne suivant pour charger le css : 

```css
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```
Ainsi qu'ajouter au fichier `resources/js/bootstrap.js`
```js
/* -------   jQuery   ------- */
import $ from 'jquery';
window.$ = $;
/* -------   Fancybox   ------- */
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind();
```
Afin de faire fonctionner les plugins.


##### Configurer Vite avec ses plugins

Pour cela, il faut modifier le fichier `vite.config.js` à la racine du projet, pour arriver à : 


```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// CSS
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    css: {
        postcss: {
            plugins: [
                postcssNesting,
                autoprefixer
            ],
            map: { inline: true }
        },
    },
});
```

### Démarage du serveur local

Après avoir mis en place l'environnement de développement avec Vite.js et les plugins nécessaires, l'étape suivante consiste à lancer et tester l'application.

L'exécution du serveur de développement Vite.js peut être effectuée grâce à la commande :

```bash
npm run dev
```

En parallèle au serveur Vite.js, le serveur PHP local peut être lancé. Que ce soit via PHP Artisan ou WAMP dépend de la configuration choisie.

```bash
php artisan serve
```

À ce stade, vous devriez pouvoir accéder à votre application via le navigateur et voir les modifications en temps réel à mesure que vous les apportez.

Notez que si vous ajoutez de nouveaux fichiers CSS à votre projet, vous devrez les importer dans le fichier resources/css/app.css pour qu'ils soient pris en compte. Cela garantira que votre CSS est correctement inclus et appliqué à votre application.

## Plugins Laravel

Suite de plugin, référez vous à notre documentation dans `Installation/Utilisation` pour avoir plus à leur propos.

### Génériques

---

```bash
composer require barryvdh/laravel-debugbar
```

Permet d'avoir un meilleur insight sur l'application directement dans le navigateur.

--- 

```bash
composer require blade-ui-kit/blade-icons

php artisan vendor:publish --tag=blade-icons
```
Et 
```bash
composer require codeat3/blade-coolicons

php artisan vendor:publish --tag=blade-coolicons-config
```

Permet l'utilisation de la directive @svg('icon-name').
> Retrouver tout les nom d'icône sur la page [Blade-icons](https://blade-ui-kit.com/blade-icons?set=53)

--- 

```bash
composer require guzzlehttp/guzzle
```

Permet la gestion de requête PHP HTTP, utilisé avec Brevo pour le mailing.

--- 

### Nova helpers

Tout les packages concernant Nova.

Gestion de media avec : 
```bash
composer require ebess/advanced-nova-media-library
```

---

Gestion de field multi relationnel avec : 
```bash
composer require benjacho/belongs-to-many-field
```
Puis 
```bash
php artisan vendor:publish --tag=nova-media-library
```

--- 

Ajout d'autres langues pour Nova avec :
```bash
composer require coderello/laravel-nova-lang
```

---

Améliore la gestion vidéo : 
```bash
composer require m-a-k-o/youtube-field
```

---

Editeur de texte dans Nova :
```bash
composer require mostafaznv/nova-ckeditor
```
Et 
```bash
php artisan vendor:publish --provider="Mostafaznv\NovaCkEditor\FieldServiceProvider"
```

## @TODO 
- Supprimer Images et Videos related avec ckeditor, gérer par media-librairy
- Ajouter les packages jolimardi sections/menu/flashmessage
- 