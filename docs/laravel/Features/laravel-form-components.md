---
title: Protonemedia/laravel-form-component
---

# Installation de laravel-form-component

```bash title="console"
composer require protonemedia/laravel-form-components

php artisan vendor:publish --provider="ProtoneMedia\LaravelFormComponents\ServiceProvider" --tag="config"
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

use ProtoneMedia\LaravelFormComponents\Components;

return [
    'prefix' => '',

    // highlight-start
    /** tailwind | tailwind-2 | tailwind-forms-simple | bootstrap-4 | bootstrap-5 */
    'framework' => 'jolimardi',
    // highlight-end
    'use_eloquent_date_casting' => false,

    /** bool | string */
    'default_wire' => false,

    'components' => [
        'form' => [
            'view'  => 'form-components::{framework}.form',
            'class' => Components\Form::class,
        ],

        'form-checkbox' => [
            'view'  => 'form-components::{framework}.form-checkbox',
            'class' => Components\FormCheckbox::class,
        ],

        'form-errors' => [
            'view'  => 'form-components::{framework}.form-errors',
            'class' => Components\FormErrors::class,
        ],

        'form-group' => [
            'view'  => 'form-components::{framework}.form-group',
            'class' => Components\FormGroup::class,
        ],

        'form-input' => [
            'view'  => 'form-components::{framework}.form-input',
            'class' => Components\FormInput::class,
        ],

        'form-input-group' => [
            'view'  => 'form-components::{framework}.form-input-group',
            'class' => Components\FormInputGroup::class,
        ],

        'form-input-group-text' => [
            'view'  => 'form-components::{framework}.form-input-group-text',
            'class' => Components\FormInputGroupText::class,
        ],

        'form-label' => [
            'view'  => 'form-components::{framework}.form-label',
            'class' => Components\FormLabel::class,
        ],

        'form-radio' => [
            'view'  => 'form-components::{framework}.form-radio',
            'class' => Components\FormRadio::class,
        ],

        'form-range' => [
            'view'  => 'form-components::{framework}.form-range',
            'class' => Components\FormRange::class,
        ],

        'form-select' => [
            'view'  => 'form-components::{framework}.form-select',
            'class' => Components\FormSelect::class,
        ],

        'form-submit' => [
            'view'  => 'form-components::{framework}.form-submit',
            'class' => Components\FormSubmit::class,
        ],

        'form-textarea' => [
            'view'  => 'form-components::{framework}.form-textarea',
            'class' => Components\FormTextarea::class,
        ],
    ],
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
