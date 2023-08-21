---
title: Step by step
---


# Installer une application laravel jolimardi

Dans cette page, nous allons créer une application Laravel complète avec un bon nombre de fonctionnalité. Du point de vue de la console d'abord, et si besoin nous modifierons légèrement le code. 

## Installer Laravel 

### Projet de base Laravel

:::info
Remplacer `mon-application` par le nom du projet. Le projet sera créé dans un sous-dossier.
:::
```bash
composer create-project laravel/laravel mon-application
composer update
npm install
```

### Laravel Nova

#### Il faut d'abord ajouter le repo privé et ses credentials :
```
composer config repositories.nova '{"type": "composer", "url": "https://nova.laravel.com"}' --file composer.json
```

Puis entrer ses credentials pour ne pas avoir à les entrer à chaque fois (adresse mail et clé d'api), cette commande va ajouter auth.json à la racine avec les credentials (ne pas versionner ce fichier).
```
composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY
```

#### Ensuite, installer Nova

```bash
composer update --prefer-dist
php artisan nova:install
php artisan migrate
```
:::info
 Certaines configuration de database peuvent sortir une erreur `SQLSTATE[42000]: Syntax error or access violation: 1071 La clé est trop longue.` Dans ce cas, ajouter dans `app/Service/AppServiceProvider.php` la ligne suivante dans la fonction boot :
```php
public function boot(): void {
    Schema::defaultStringLength(191);
}
```
:::

:::info
Assurez-vous d'avoir les bonnes infos de connexion à la base de données dans le fichier .env avant le `migrate`
:::

#### Ajouter le premier utilisateur

Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (`http://mon-url.com/nova`) :

```bash
php artisan nova:user
```
Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour créer l'utilisateur).

**Pour plus de détails sur Laravel nova, retrouvez la documentation officielle ici : https://nova.laravel.com/docs/4.0/installation.html**

### Vite.js

##### Vite.js 

Vite.js est le builder js utilisé par Laravel. Cela permet d'ajouter des plugins au projet via `npm`, de compiler les assets (js, scss, images...) et de live-reload les pages pendant le dev.

##### Compilation CSS avec Vite.js

Installation de quelques plugins pour PostCSS, PostCSS-Nesting et Autoprefixer

```bash
npm install postcss --save-dev
npm install postcss-nesting --save-dev
npm install autoprefixer --save-dev
```

Puis configuration à la racine du projet, dans `vite.config.js` :

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// CSS
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'], // Ajouter ici les ressources à compiler
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


##### Chargement des assets dans le HTML avec Vite.js

Il faut ensuite charger ces fichiers compilés dans le Layout blade principal `/ressources/views/loayout.blade.php` grace à la directive spéciale `@vite`.

Par exemple, pour les deux fichiers présents dans le `input` de `vite.config.js` ci-dessus, on peut les charger dans le `<head>` avec `@vite('resources/css/app.css')` et `@vite('resources/css/app.js')`. Ca remplace le `<style src=...></style>` pour permettre le live reload pendant le dev, le changement de nom à chaque nouveau build (évite d'avoir de vieux fichiers obsolètes en cache) etc.

```html
<head>
    <meta charset="utf-8">
    <title>{{ $title ?? env('APP_NAME') }}</title>
    <meta name="description" content="{{ $description }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    ...

    {{-- Chargement du CSS --}}
    // highlight-start
    @vite('resources/css/app.css')
    // highlight-end

    @stack('styles')

    @stack('js_vars')
</head>
<body>

    ...

    {{-- Chargement des js --}}
    // highlight-start
    @vite('resources/js/app.js')
    // highlight-end
</body>
```

:::info
Pour ajouter de nouveaux fichiers CSS au projet projet, vous pouvez soit les ajouter dans `vite.config.js`, soit dans le fichier CSS de base (`resources/css/app.css` par exemple) avec un `@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";` par exemple.
:::

## Démarrage du serveur local

On peut exécuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur intégré (basique, mais pratique pour dépanner) :

```bash
php artisan serve
```

Pour les assets et le live reload, lancer Vite.js :
```bash
npm run dev
```




## Installation de plugins JS fréquents

### jQuery

```bash
npm install jquery --save-dev
```
Puis dans `ressources/js/bootstrap.js`
```js
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// highlight-start
/* -------   jQuery   ------- */
// npm install jquery --save-dev
import $ from 'jquery';
window.$ = $;
// highlight-end
```

### Fancybox 

```bash
npm install @fancyapps/ui --save-dev
```

`resources/css/app.css`
```css
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```

`resources/js/bootstrap.js`
```js
/* -------   jQuery   ------- */
import $ from 'jquery';
window.$ = $;

// highlight-start
/* -------   Fancybox   ------- */
// npm install @fancyapps/ui --save-dev
// pour le css : @import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind();
// highlight-end
```




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
Et 
```bash
php artisan nova-lang:publish fr
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

## Jolimardi plugins

Les plugins ajouter par JoliMardi, rendez-vous sur la documentation du package pour plus d'informations.

### CSS

Pour ajouter le css de JoliMardi, récupérer le zip du dépot https://github.com/jolimardi/jolimardi-css, puis décompresser dans votre projet dans `resources/css`.
Et enfin, importer dans `resources/css/app.css` :
```css
@import "jolimardi-css/jolimardi.css";
```

### Menu

```bash
composer require jolimardi/laravel-menu
```
Puis
```bash
php artisan vendor:publish --provider="JoliMardi\Menu\MenuServiceProvider"
```

Ajouter le component `<x-menu/>` dans un template blade, là où vous voulez afficher le menu.
Modifier `config/menu.yml` pour ajouter des routes au composant.

### Sections

```bash
composer require jolimardi/laravel-mysections:dev-main
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.

- Il est déjà possible d'utiliser le composant `<x-section><x-section />` ici.

Accéder à la création de sections, éxécuter :

```bash
php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"
```
```bash
php artisan migrate
```

Importer le css des sections dans `resources/css/app.css` : 

```css
@import "../../public/vendor/mysections/sections.css";
```

Utiliser `@mySection($data, $key)` pour afficher la section après l'avoir créer dans nova. 

### Flash

```bash
composer require jolimardi/laravel-flash:dev-master
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.

Ajouter l'alias personnalisé dans `config/app.php` -> `aliases`:

```php
'MyFlash' => JoliMardi\Flash\Flash::class,
```

Utiliser dans un controlleur `Flash::success('Ceci est un message de succès');`.

> Retrouvez tout les types de message dans la documentation du package : https://github.com/jolimardi/laravel-flash


## @TODO 
- Supprimer Images et Videos related avec ckeditor, gérer par media-librairy
- Ajouter les packages jolimardi sections/menu/flashmessage
- Améliorer laravel-mysections erreur stabilité, ajouter une version
- AJouter publishables pour jolimardi/laravel-flash pour le composant `<x-flash-messages />`