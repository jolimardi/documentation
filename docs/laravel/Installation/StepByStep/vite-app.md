---
title: Vite.js & app.js
---

Vite.js est le builder js utilisé par Laravel. Cela permet d'ajouter des plugins au projet via `npm`, de compiler les assets (js, scss, images...) et de live-reload les pages pendant le dev.

## Compilation CSS avec Vite.js

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


## Chargement des assets dans le HTML avec Vite.js

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



# JS commun à tous les sites JoliMardi
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
