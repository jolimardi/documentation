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
composer require jolimardi/laravel-sections:dev-main
php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"
php artisan migrate
```
Il est maintenant possible d'utiliser le composant `<x-section><x-section />`.

### Importer le CSS
```css title="resources/css/app.css"
@import "../../public/vendor/mysections/sections.css";
```

### Utilisation dans les Views

```php 
<body>
    @mySection($all_sections_from_db, $key_of_the_section_to_display)
</body>

```

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