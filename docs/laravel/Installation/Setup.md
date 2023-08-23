---
title: Step by step
---


# Installer une application laravel jolimardi

Dans cette page, nous allons créer une application Laravel complète avec un bon nombre de fonctionnalité. Du point de vue de la console d'abord, et si besoin nous modifierons légèrement le code. 



## Vite.js

Vite.js est le builder js utilisé par Laravel. Cela permet d'ajouter des plugins au projet via `npm`, de compiler les assets (js, scss, images...) et de live-reload les pages pendant le dev.

### Compilation CSS avec Vite.js

Installation de quelques plugins pour PostCSS, PostCSS-Nesting et Autoprefixer

```bash
npm install postcss --save-dev
npm install postcss-nesting --save-dev
npm install autoprefixer --save-dev
```

Puis configuration à la racine du projet, dans `vite.config.js` :

```js title="/vite.config.js"
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


### Chargement des assets dans le HTML avec Vite.js

Il faut ensuite charger ces fichiers compilés dans le Layout blade principal `/ressources/views/layout.blade.php` grace à la directive spéciale `@vite`.

Par exemple, pour les deux fichiers présents dans le `input` de `vite.config.js` ci-dessus, on peut les charger dans le `<head>` avec `@vite('resources/css/app.css')` et `@vite('resources/css/app.js')`. Ca remplace le `<style src=...></style>` pour permettre le live reload pendant le dev, le changement de nom à chaque nouveau build (évite d'avoir de vieux fichiers obsolètes en cache) etc.

```html title="/ressources/views/layout.blade.php"
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



## JS commun à tous les sites JoliMardi
```js title="/ressources/js/app.js"
import './bootstrap';

/* ---------------    ci-dessous : JS commun à tous les sites, à déplacer   ---------------------- */

$(function () {

    //--------- Menu mobile ------------*/
    $('.menu-bars, .menu-close, .home-menu-bars, .mobile-menu .menu a, .menu-overlay').click(function (e) {
        e.stopPropagation();
        $('body').toggleClass('mobile-menu-opened');
    });


    // Click on card [data-href]
    $('[data-href]').on('click', function (e) {
        if (!$(e.target).is('a, a *, .dropdown, .dropdown *')) {
            e.preventDefault();
            window.location = $(this).data('href');
        }
    });


    /* ---------     Custom Scroll To (add data-anchor=#id)   ------------------------ */
    $('[data-anchor]').on('click', function (e) {
        var anchor = $(this).data('anchor');
        if (anchor.charAt(0) != '#') {
            anchor = '#' + anchor;
        }
        if ($(anchor).length > 0) {
            myScrollTo(anchor); // Définie en bas du fichier
        }
    });
    /* ----------------------------    Scroll To si hash    ------------------------ */
    if (window.location.hash) {
        var anchor = window.location.hash;
        myScrollTo(anchor);
        scrollAction();
    }

    /* --------- Scroll ------------- */
    function scrollAction() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 200) {
            $('body').addClass('topbar-small');
        } else {
            $('body').removeClass('topbar-small');
        }
    }
    $(window).on('scroll', throttle(scrollAction, 40));
    $(window).on('load', scrollAction);
});


function myScrollTo(anchor) {
    var $elem;
    if (anchor instanceof jQuery) {
        $elem = anchor;
    } else {
        var id = anchor;
        $elem = $(id);
    }
    if ($elem.length == 0) {
        return;
    }
    $("html, body").animate({ scrollTop: $elem.offset().top - 75 }, 200);
}


 

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
            deferTimer;
    return function () {
        var context = scope || this;
        var now = +new Date,
                args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}
```


## Laravel Nova

### Il faut d'abord ajouter le repo privé et ses credentials :
```
composer config repositories.nova composer https://nova.laravel.com
```

Puis entrer ses credentials pour ne pas avoir à les entrer à chaque fois (adresse mail et clé d'api), cette commande va ajouter auth.json à la racine avec les credentials (ne pas versionner ce fichier).
```
composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY
```

### Ensuite, installer Nova

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
public function boot(): void {
    Schema::defaultStringLength(191);
}
```
:::


### Ajouter le premier utilisateur

Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (`http://mon-url.com/nova`) :

```bash
php artisan nova:user
```
Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour créer l'utilisateur).


### Important, ajouter les emails autorisés

Lorsque l'on n'est plus en environnement `local`, Nova vérifie les adresses mail autorisées, en plus des Nova Users créés. Pour cela, il faut ajouter les emails autorisés dans `app/Providers/NovaServiceProvider.php`, dans la fonction `gate()` :

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




## Installation de plugins JS fréquents

### jQuery

```bash
npm install jquery --save-dev
```
```js title="/ressources/js/bootstrap.js"
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

```css  title="resources/css/app.css"
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```

```js title="/ressources/js/bootstrap.js"
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

Suite de plugin, référez vous à notre documentation dans la catégorie `Packages` pour avoir plus à leur propos.


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



## @TODO 
- Supprimer Images et Videos related avec ckeditor, gérer par media-librairy
- Améliorer laravel-mysections erreur stabilité, ajouter une version
- AJouter publishables pour jolimardi/laravel-flash pour le composant `<x-flash-messages />`