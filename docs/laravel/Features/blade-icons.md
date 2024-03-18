---
title: Ajouter Blade-icons
---

## Blade icons avec coolicons

**Nom des packages :** blade-ui-kit/blade-icons - codeat3/blade-coolicons

```bash
composer require blade-ui-kit/blade-icons

php artisan vendor:publish --tag=blade-icons
```
Et 
```bash
composer require codeat3/blade-coolicons

php artisan vendor:publish --tag=blade-coolicons-config
```

## Config de base

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

    'attributes' => [
        'width' => 24,
        'height' => 24,
    ],

    'components' => [
        // Disable the component, only use directive @svg(...) -> perf boost
        'disabled' => true,
    ],
];
```

Permet l'utilisation de la directive `@svg('icon-name')`.

> Retrouver tout les nom d'icône sur la page [Blade-icons](https://blade-ui-kit.com/blade-icons?set=53)