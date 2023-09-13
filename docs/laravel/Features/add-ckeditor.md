---
title: Ajouter Nova CKEditor
---

Plus d'information sur la documentation officiel : https://mostafaznv.gitbook.io/nova-ckeditor/getting-started/installation

## Installer le package

```bash title='console'
composer require mostafaznv/nova-ckeditor

php artisan vendor:publish --provider="Mostafaznv\NovaCkEditor\FieldServiceProvider"
```

## Préparer l'utilisation

Ici nous utiliserons d'autre package pour gérer les images et vidéos, il va donc falloir enlever quelques fichier fourni avec CKEditor pour ne pas surcharger le projet ou créer de conflit.

### Supprimer ou modifier les relatifs aux images/videos

Supprimer les deux migrations :

```php title='arborescence'
...
|-- database/
|   |-- migrations/
// highlight-start
|   |   |-- 2021_01_01_000000_create_images_table.php
|   |   |-- 2021_01_01_000000_create_videos_table.php
// highlight-end
...
```

Modification du fichier `config/nova-ckeditor.php` pour enlever tout se qui relate aux images/vidéos. 

```php title='config/nova-ckeditor.php'
<?php
return [

    /*
     |--------------------------------------------------------------------------
     | Toolbar
     |--------------------------------------------------------------------------
     |
     | Customize Settings
     |
     */

    'toolbars' => [
        'default' => 'toolbar-1',

        'toolbar-1' => [
            'height' => 400,

            'content-lang' => 'fr',

            'ui-language' => [
                'name'   => 'fr',

                /**
                 * Example 1: asset('js/ckeditor-fa.js')
                 * Example 2: 'https://cdn.ckeditor.com/ckeditor5/34.0.0/decoupled-document/translations/fa.js'
                 */
                'script' => null
            ],

            'should-not-group-when-full' => false,

            'browser' => [
                'image' => false,
                'video' => false
            ],

            // Permet d'ajouter des bouts de template blade situés dans views/ckeditor/test.blade.php par exemple
            'snippets' => [
                ['name' => 'Test Inclusion blade', 'html' => 'ckeditor.table'],
            ],

            'items' => [
                //'textPartLanguage',
                'heading',
                'removeFormat',
                /*'|',
                'fontSize',
                'fontFamily',
                'fontColor',
                'fontBackgroundColor',
                '|',*/
                /*'insertTable',
                'imageBrowser',
                'videoBrowser',
                '|',*/
                'bold',
                'italic',
                'bulletedList',
                'numberedList',
                'link',
                'snippetBrowser',
                'blockQuote',
                'horizontalLine',
                '|',
                //'alignment',
                'subscript',
                'superscript',
                'mediaEmbed',
                //'underline',
                //'strikethrough',
                'code',
                'codeBlock',
                /*'|',
                'outdent',
                'indent',*/
                '|',
                'undo',
                'redo',
                '|',
                'elementIdAttributes',
                'htmlEmbed',
                'sourceEditing'
            ],

            'options' => [
                'headings' => [
                    [
                        'model' => 'paragraph',
                        'title' => 'Paragraphe',
                        'class' => 'ck-heading_paragraph',
                    ],
                    [
                        'model' => 'heading1',
                        'view'  => 'h1',
                        'title' => 'Titre 1',
                        'class' => 'ck-heading_heading1',
                    ],
                    [
                        'model' => 'heading2',
                        'view'  => 'h2',
                        'title' => 'Titre 2',
                        'class' => 'ck-heading_heading2',
                    ],
                    [
                        'model' => 'heading3',
                        'view'  => 'h3',
                        'title' => 'Titre 3',
                        'class' => 'ck-heading_heading3',
                    ],
                    [
                        'model' => 'heading4',
                        'view'  => 'h4',
                        'title' => 'Titre 4',
                        'class' => 'ck-heading_heading4',
                    ],
                    /*[
                        'model' => 'heading5',
                        'view'  => 'h5',
                        'title' => 'Heading 5',
                        'class' => 'ck-heading_heading5',
                    ],
                    [
                        'model' => 'heading6',
                        'view'  => 'h6',
                        'title' => 'Heading 6',
                        'class' => 'ck-heading_heading6',
                    ]*/
                ],

                'fontFamily' => [
                    'supportAllValues' => false,
                    'options'          => [
                        'default',
                        'Arial, Helvetica, sans-serif',
                        'Courier New, Courier, monospace',
                        'Georgia, serif',
                        'Lucida Sans Unicode, Lucida Grande, sans-serif',
                        'Tahoma, Geneva, sans-serif',
                        'Times New Roman, Times, serif',
                        'Trebuchet MS, Helvetica, sans-serif',
                        'Verdana, Geneva, sans-serif'
                    ]
                ],

                'fontSize' => [
                    'options' => [
                        'tiny',
                        'small',
                        'default',
                        'big',
                        'huge'
                    ]
                ],

                'fontColor' => [
                    'columns' => 5,
                    'colors'  => [
                        [
                            'color' => 'hsl(0, 0%, 0%)',
                            'label' => 'Black'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 30%)',
                            'label' => 'Dim grey'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 60%)',
                            'label' => 'Grey'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 90%)',
                            'label' => 'Light grey'
                        ],
                        [
                            'color'     => 'hsl(0, 0%, 100%)',
                            'label'     => 'White',
                            'hasBorder' => true
                        ],
                        [
                            'color' => 'hsl(0, 75%, 60%)',
                            'label' => 'Red'
                        ],
                        [
                            'color' => 'hsl(30, 75%, 60%)',
                            'label' => 'Orange'
                        ],
                        [
                            'color' => 'hsl(60, 75%, 60%)',
                            'label' => 'Yellow'
                        ],
                        [
                            'color' => 'hsl(90, 75%, 60%)',
                            'label' => 'Light green'
                        ],
                        [
                            'color' => 'hsl(120, 75%, 60%)',
                            'label' => 'Green'
                        ],
                        [
                            'color' => 'hsl(150, 75%, 60%)',
                            'label' => 'Aquamarine'
                        ],
                        [
                            'color' => 'hsl(180, 75%, 60%)',
                            'label' => 'Turquoise'
                        ],
                        [
                            'color' => 'hsl(210, 75%, 60%)',
                            'label' => 'Light blue'
                        ],
                        [
                            'color' => 'hsl(240, 75%, 60%)',
                            'label' => 'Blue'
                        ],
                        [
                            'color' => 'hsl(270, 75%, 60%)',
                            'label' => 'Purple'
                        ]
                    ]
                ],

                'fontBackgroundColor' => [
                    'columns' => 5,
                    'colors'  => [
                        [
                            'color' => 'hsl(0, 0%, 0%)',
                            'label' => 'Black'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 30%)',
                            'label' => 'Dim grey'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 60%)',
                            'label' => 'Grey'
                        ],
                        [
                            'color' => 'hsl(0, 0%, 90%)',
                            'label' => 'Light grey'
                        ],
                        [
                            'color'     => 'hsl(0, 0%, 100%)',
                            'label'     => 'White',
                            'hasBorder' => true
                        ],
                        [
                            'color' => 'hsl(0, 75%, 60%)',
                            'label' => 'Red'
                        ],
                        [
                            'color' => 'hsl(30, 75%, 60%)',
                            'label' => 'Orange'
                        ],
                        [
                            'color' => 'hsl(60, 75%, 60%)',
                            'label' => 'Yellow'
                        ],
                        [
                            'color' => 'hsl(90, 75%, 60%)',
                            'label' => 'Light green'
                        ],
                        [
                            'color' => 'hsl(120, 75%, 60%)',
                            'label' => 'Green'
                        ],
                        [
                            'color' => 'hsl(150, 75%, 60%)',
                            'label' => 'Aquamarine'
                        ],
                        [
                            'color' => 'hsl(180, 75%, 60%)',
                            'label' => 'Turquoise'
                        ],
                        [
                            'color' => 'hsl(210, 75%, 60%)',
                            'label' => 'Light blue'
                        ],
                        [
                            'color' => 'hsl(240, 75%, 60%)',
                            'label' => 'Blue'
                        ],
                        [
                            'color' => 'hsl(270, 75%, 60%)',
                            'label' => 'Purple'
                        ]
                    ]
                ],

                'mediaEmbed' => []
            ],
        ]
    ],
];
```

Supprimer les models Image et Video : 

```php title='arborescence'
|-- app/
|   |-- Models/
// highlight-start
|   |   |-- Image.php
|   |   |-- Video.php
// highlight-end
...
```

Et enfin supprimer le dossier `Resources/` de Nova.

```php title='arborescence'
|-- app/
|   |-- Nova/
|   |   |-- Dashboards/
// highlight-start
|   |   |-- Resources/
|   |   |   |-- ...
// highlight-end
|   |   |-- Resource.php
|   |   |-- ...
```
## Utiliser le package

Pour une simple utilisation, on ajoute un nouveau field à la resources Nova.

Exemple :

```php title='app/Nova/Ma-resource.php'
use Mostafaznv\NovaCkEditor\CkEditor;

...
class MaResource extends Resource { 
    ...
    public function fields(NovaRequest $request) {
        ...
        CkEditor::make('Paragraphe', 'p')->stacked()->fullwidth()->hideFromIndex(),
        ...
    }
    ...
}
```

