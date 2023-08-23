---
title: Step by step
---


# Installer une application laravel jolimardi

Dans cette page, nous allons créer une application Laravel complète avec un bon nombre de fonctionnalité. Du point de vue de la console d'abord, et si besoin nous modifierons légèrement le code. 






## Installer Laravel 

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

# NOVA_AUTHORIZED_EMAILS='mon-email@gmail.com, deuxieme-email@gmail.com' # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :
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




## Installation des packages Composer

### Basiques
```bash
composer require barryvdh/laravel-debugbar --dev
```


### Blade Icons
```bash
composer require blade-ui-kit/blade-icons
composer require codeat3/blade-coolicons
# Créer le dossier qui contiendra les icones "custom" pour le projet
mkdir ressources/icons

php artisan vendor:publish --tag=blade-icons
php artisan view:clear
```

```php title="/config/blade-icons.php"
<?php

return [
    'sets' => [
        'default' => [
            'path' => 'resources/icons',
            'prefix' => '',
        ],
        // Coolicon est automatiquement dispo en plus de default s'il est installé
    ],

    // Global Default Classes - applied to all icons by default
    'class' => 'icon',

    'components' => [
        // Disable the component, only use directive @svg(...) -> perf boost
        'disabled' => true,
    ],
];
```

```php title="example.blade.php"
<body>

    // Pour afficher l'icone custom du projet /ressources/icons/icon-perso.svg
    @svg('icon-perso')

    // Pour afficher l'icone Coolicons Hamburger
    @svg('coolicon-hamburger-md')

    // Pour ajouter une classe, c'est le 2nd argument
    @svg('coolicon-hamburger-md', 'ma-classe-pour-cette-icone')

    // Rendu dans le HTML :
    <svg class="icon ma-classe-pour-cette-icone" viewBox="0 0 24 24" fill="none"><g>...</g></svg>

</body>
```

[La liste des icônes ici.](https://blade-ui-kit.com/blade-icons?set=53)


### CSS JoliMardi

```bash
cd ressources/css
git clone https://github.com/jolimardi/jolimardi-css
```
Puis importer le CSS dans le projet :
```css title="resources/css/app.css"
@import "jolimardi-css/jolimardi.css";
```
:::info
Pour mettre à jour ce CSS, exécuter `git submodule update --remote --merge` (pratique à mettre dans le Deploy Script de Forge par exemple, après le `git pull`).
:::

### Menu JoliMardi

```bash
composer require jolimardi/laravel-menu:dev-master
php artisan vendor:publish --provider="JoliMardi\Menu\MenuServiceProvider" --tag=config
```

Ajouter le component `<x-menu/>` dans un template blade, là où vous voulez afficher le menu.
Modifier `config/menu.yml` pour ajouter des routes au composant.

### Sections JoliMardi

```bash
composer require jolimardi/laravel-sections:dev-main
php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"
php artisan migrate
```
Il est maintenant possible d'utiliser le composant `<x-section><x-section />`.

#### Importer le CSS
```css title="resources/css/app.css"
@import "../../public/vendor/mysections/sections.css";
```

#### Utilisation dans les Views

```php 
<body>
    @mySection($all_sections_from_db, $key_of_the_section_to_display)
</body>

```

#### Ajout d'une nouvelle section via Nova

Se connecter à Nova pour ajouter une section. La clé est importante pour afficher la section (c'est son *machine name*). Il est possible d'ajouter des types de section (via Nova), puis de créer le nouveau template dans `/ressources/views/components/vendor/laravel-sections/ma-nouvelle-section.blade.php`

### Flash

```bash
composer require jolimardi/laravel-flash:dev-master
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.

Ajouter l'alias personnalisé dans `config/app.php` -> `aliases`:

```php title="/config/app.php"
<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [
    ...
    // Tout en bas du fichier

    'aliases' => Facade::defaultAliases()->merge([
        //highlight-start
        'MyFlash' => JoliMardi\Flash\Flash::class,
        //highlight-end
    ])->toArray(),
];
```

Utiliser dans un controlleur `Flash::success('Ceci est un message de succès');`.

> Retrouvez tout les types de message dans la documentation du package : https://github.com/jolimardi/laravel-flash


## Création du Layout Blade

```
php artisan make:component Layout
```
```php title="/app/Views/Components/Layout.php"
public function render(): View|Closure|string {
    // highlight-start
    return view('layout');
    // highlight-end
}
```
Puis créer le template principal
```php title="/ressources/views/layout.blade.php"
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>{{ $title ?? env('APP_NAME') }}</title>
    {{-- <meta name="description" content="{{ $description }}">--}}
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:url" content="{{ url()->full() }}" />
    <meta property="og:title" content="{{ $title ?? env('APP_NAME') }}" />
    <meta property="og:site_name" content="{{ env('APP_NAME') }}" />
    {{-- <meta property="og:description" content="{{ $description }}" />--}}
    <meta property="og:type" content="website" />
    {{-- <meta property="og:image" content="{{ og_image }}" /> --}}

    <meta property="og:locale" content="fr-FR" />
    <meta http-equiv="content-language" content="fr">
    <meta name="language" content="fr">

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <!-- GOOGLE FONTS -->
    @php($google_fonts = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap')
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="{{ $google_fonts }}" />
    <link rel="stylesheet" href="{{ $google_fonts }}" media="print" onload="this.media='all'" />
    <noscript>
        <link rel="stylesheet" href="{{ $google_fonts }}" />
    </noscript>

    @vite('resources/css/app.css')

    @stack('styles')

    @stack('js_vars')

    {{-- <livewire:styles /> --}}
</head>



<body class="page-{{ str_replace('.', '-', Route::currentRouteName()) }}">

    {{-- Topbar et menu mobile --}}
    <div class="topbar">
        <div class="max-width-large">
            <a href="{{ env('APP_URL') }}" class="logo"><span>Mon</span> Site</a>
            {{--<x-menu />--}}
            <div class="menu-bars" aria-label="Menu">
                <span>menu</span>
                @svg('coolicon-hamburger-md', 'menu-bars')
            </div>
        </div>
    </div>
    <div class="mobile-menu">
        @svg('coolicon-close-md', 'menu-close')
        {{--<x-menu />--}}
    </div>
    <div class="menu-overlay"></div>




    <div class="main">

        <x-flash-messages />

        {{ $slot }}

    </div>


    <x-section class="footer text-white">
        <a href="{{ env('APP_URL') }}" class="logo"><span>Mon</span> Site</a>

        <div class="footer-menu">
            {{--<p><a href="{{ route('admin.dashboard') }}">Dashboard</a></p>
            <p><a href="{{ route('nova.login') }}">Panneau de bord Nova</a></p>
            <p><a href="{{ route('realisations.list') }}">Réalisations</a></p>
            <p><a href="{{ route('posts.list') }}">Conseils</a></p>
            <p><a href="{{ route('test') }}">Test</a></p>--}}
        </div>

        [sections réseaux sociaux]

    </x-section>

    <div class="footer-line">
        <p class="copyright">Copyright ©{{ date('Y') }} mon-site.com</p>
        {{--<a href="{{ route('mentions-legales') }}">Mentions légales</a>--}}
    </div>

    {{-- Chargement des js --}}
    @vite('resources/js/app.js')

    @stack('scripts')
    {{-- <livewire:scripts /> --}}
</body>

```

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