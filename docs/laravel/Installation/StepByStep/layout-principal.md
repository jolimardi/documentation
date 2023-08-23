---
title: Layout Principal
---

## Création du component Blade Layout

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

`{{ $slot }}` sera automatiquement remplacé par le contenu des vues.

Quelques lignes sont commentées, elles serviront plus tard, mais déclencheraient une erreur tant que tout n'est pas configuré.

## Utilisation du layout

:::info
Il faut mettre l'ensemble du contenu des vues (html, js etc.) entre les balises <x-layout></x-layout>
:::

```html title="/ressources/views/home.blade.php"
<x-layout>
    <h1>Hello World</h1>
</x-layout>
```