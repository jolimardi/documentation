---
title: Ajouter des form-component
---

# Installation de laravel-form-component

```bash title="console"
composer require protonemedia/laravel-form-components

php artisan vendor:publish --provider="ProtoneMedia\LaravelFormComponents\Support\ServiceProvider" --tag="config
```

## Setup le package

**Ajouter au dossier `resources/view/vendor` le dossier `form-components` puis `jolimardi` dans celui-ci.**

:::info
Si le publish du package à été fait sans ` --tag="config"` , alors le dossier `vendor/form-components` sera déjà présent avec les components pour bootstrap, tailwind...

Dans ce cas, pour utiliser jolimardi, il est préférable de supprimer le contenu de `form-components` et de garder le dossier `jolimardi` uniquement.
:::

```php title="arborescence"
my-website/
|-- resources/
|   |-- components/
|   |-- view/
|   |   |-- vendor/
// highlight-start
|   |   |   |-- form-components/
|   |   |   |   |-- jolimardi/
|   |   |   |   |   |-- mes-components.blade.php
|   |   |   |   |   |-- ...
// highlight-end
|   |   |-- homepage.blade.php
|   |   |-- ...
|   |-- ...
```

:::info
Si le dossier `vendor` n'est pas présent, il faut également le créer.
:::

### Modifier la config

```php title="config/form-components.php"
<?php

return [
    'framework' => 'jolimardi',
];

```

:::info
La modification de la ligne 9 : `'framework' => 'jolimardi',` permet de reconnaître les composants personnalisé
:::

## Ajouter les components Jolimardi

**Ajout des composants jolimardi, fichiers à récupérer sur le dépot de Sati pour l'instant ici : https://github.com/jolimardi/sati/tree/master/resources/views/vendor/form-components/jolimardi**

*Liste exhaustive des components jolimardi (22/08/23)*: 

- form-checkbox.blade.php
- form-errors.blade.php
- form-group.blade.php
- form-input-group-text.blade.php
- form-input-group.blade.php
- form-input.blade.php
- form-label.blade.php
- form-radio.blade.php
- form-range.blade.php
- form-select.blade.php
- form-submit.blade.php
- form-textarea.blade.php
- form.blade.php
