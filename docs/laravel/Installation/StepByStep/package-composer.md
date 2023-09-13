---
title: Packages Composer
---


## Blade Icons
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


## CSS JoliMardi

```bash
cd ressources/css
git clone https://github.com/jolimardi/jolimardi-css
```
Puis importer le CSS dans le projet :
```css title="resources/css/app.css"
@import "jolimardi-css/jolimardi.css";
```

#### Ajouter le submodule au projet
Créer `.gitmodules` à la racine du projet :

```git title='/.gitmodules'
[submodule "resources/css/jolimardi-css"]
	path = resources/css/jolimardi-css
	url = https://github.com/jolimardi/jolimardi-css/
	update = rebase
	branch = main
```


:::info
Pour mettre à jour ce CSS, exécuter `git submodule update --remote --merge` (pratique à mettre dans le Deploy Script de Forge par exemple, après le `git pull`).
:::

## Menu JoliMardi

```bash
composer require jolimardi/laravel-menu:dev-master
php artisan vendor:publish --provider="JoliMardi\Menu\MenuServiceProvider" --tag=config
```

Ajouter le component `<x-menu/>` dans un template blade, là où vous voulez afficher le menu.
Modifier `config/menu.yml` pour ajouter des routes au composant.

## Sections JoliMardi

```bash
composer require ebess/advanced-nova-media-library
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
php artisan migrate
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="config"
php artisan vendor:publish --tag=nova-media-library

php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"
composer require jolimardi/laravel-sections:dev-main
php artisan migrate
```
Il est maintenant possible d'utiliser le composant `<x-section><x-section />`.

### Importer le CSS
```css title="resources/css/app.css"
@import "../../vendor/jolimardi/laravel-sections/dist/sections.css";
```

### Utilisation dans les Views

```php 
<body>
    @mySection($all_sections_from_db, $key_of_the_section_to_display)
</body>

```

<details>   
<summary> Option vidéo youtube</summary>

Si vos sections text-with-image ne comprendront pas de vidéo à la place de l'image. Alors il faut modifier la sections text-with-image en enlevant les partie surligné.

```php title='resources/views/vendor/laravel-sections/text-with-image.blade.php'
...
<div class="section-image">
    // highlight-start
    @if (isset($section->video_url))
        <div class="video-container">
            {{-- <x-youtube :youtube='$section->video_url' :youtube-thumbnail-media="$section->getFirstMedia('video_thumbnail')" /> --}}
            <x-youtube-inline :youtube='$section->video_url' />
        </div>
    @else
    // highlight-end
        {{ $section->getFirstMedia('image')->img('', ['alt' => $section->title]) }}
        // highlight-start
    @endif
    // highlight-end
</div>
...
```

Sinon, il faut ajouter le composant youtube-inline.blade.php dans `resources/views/components` : 

```php title='resources/views/components/youtube-inline.blade.php'
@if (isset($youtube))
    <div class="video-thumbnail ratio-16x9">

        <iframe src="https://www.youtube.com/embed/{{ $youtube }}?&loop=1&playlist={{ $youtube }}&rel=0&controls=1&autoplay=1&mute=1&start=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

    </div>
@endif
```

</details>



#### Ajout d'une nouvelle section via Nova

**Prérequis : avoir installé Laravel Nova (voir plus loin)**

Se connecter à Nova pour ajouter une section. La clé est importante pour afficher la section (c'est son *machine name*). Il est possible d'ajouter des types de section (via Nova), puis de créer le nouveau template dans `/ressources/views/components/vendor/laravel-sections/ma-nouvelle-section.blade.php`

## Flash

```bash
composer require jolimardi/laravel-flash:dev-master
php artisan vendor:publish --provider="JoliMardi\Flash\FlashServiceProvider" --tag="views"
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


## Debugbar
```bash
composer require barryvdh/laravel-debugbar --dev
```