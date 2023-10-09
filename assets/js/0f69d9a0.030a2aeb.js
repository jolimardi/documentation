"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2143],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={title:"Ajouter Nova CKEditor"},o=void 0,i={unversionedId:"laravel/Features/add-ckeditor",id:"laravel/Features/add-ckeditor",title:"Ajouter Nova CKEditor",description:"Plus d'information sur la documentation officiel//mostafaznv.gitbook.io/nova-ckeditor/getting-started/installation",source:"@site/docs/laravel/Features/add-ckeditor.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/add-ckeditor",permalink:"/documentation/docs/laravel/Features/add-ckeditor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/add-ckeditor.md",tags:[],version:"current",frontMatter:{title:"Ajouter Nova CKEditor"},sidebar:"laravelSidebar",previous:{title:"Cr\xe9er un formulaire basique de A \xe0 Z",permalink:"/documentation/docs/laravel/Features/creer-un-formulaire"},next:{title:"Pagination",permalink:"/documentation/docs/laravel/Features/pagination"}},s={},c=[{value:"Installer le package",id:"installer-le-package",level:2},{value:"Pr\xe9parer l&#39;utilisation",id:"pr\xe9parer-lutilisation",level:2},{value:"Supprimer ou modifier les relatifs aux images/videos",id:"supprimer-ou-modifier-les-relatifs-aux-imagesvideos",level:3},{value:"Utiliser le package",id:"utiliser-le-package",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Plus d'information sur la documentation officiel : ",(0,a.kt)("a",{parentName:"p",href:"https://mostafaznv.gitbook.io/nova-ckeditor/getting-started/installation"},"https://mostafaznv.gitbook.io/nova-ckeditor/getting-started/installation")),(0,a.kt)("h2",{id:"installer-le-package"},"Installer le package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},'composer require mostafaznv/nova-ckeditor\n\nphp artisan vendor:publish --provider="Mostafaznv\\NovaCkEditor\\FieldServiceProvider"\n')),(0,a.kt)("h2",{id:"pr\xe9parer-lutilisation"},"Pr\xe9parer l'utilisation"),(0,a.kt)("p",null,"Ici nous utiliserons d'autre package pour g\xe9rer les images et vid\xe9os, il va donc falloir enlever quelques fichier fourni avec CKEditor pour ne pas surcharger le projet ou cr\xe9er de conflit."),(0,a.kt)("h3",{id:"supprimer-ou-modifier-les-relatifs-aux-imagesvideos"},"Supprimer ou modifier les relatifs aux images/videos"),(0,a.kt)("p",null,"Supprimer les deux migrations :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='arborescence'",title:"'arborescence'"},"...\n|-- database/\n|   |-- migrations/\n// highlight-start\n|   |   |-- 2021_01_01_000000_create_images_table.php\n|   |   |-- 2021_01_01_000000_create_videos_table.php\n// highlight-end\n...\n")),(0,a.kt)("p",null,"Modification du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config/nova-ckeditor.php")," pour enlever tout se qui relate aux images/vid\xe9os. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='config/nova-ckeditor.php'",title:"'config/nova-ckeditor.php'"},"<?php\nreturn [\n\n    /*\n     |--------------------------------------------------------------------------\n     | Toolbar\n     |--------------------------------------------------------------------------\n     |\n     | Customize Settings\n     |\n     */\n\n    'toolbars' => [\n        'default' => 'toolbar-1',\n\n        'toolbar-1' => [\n            'height' => 400,\n\n            'content-lang' => 'fr',\n\n            'ui-language' => [\n                'name'   => 'fr',\n\n                /**\n                 * Example 1: asset('js/ckeditor-fa.js')\n                 * Example 2: 'https://cdn.ckeditor.com/ckeditor5/34.0.0/decoupled-document/translations/fa.js'\n                 */\n                'script' => null\n            ],\n\n            'should-not-group-when-full' => false,\n\n            'browser' => [\n                'image' => false,\n                'video' => false\n            ],\n\n            // Permet d'ajouter des bouts de template blade situ\xe9s dans views/ckeditor/test.blade.php par exemple\n            'snippets' => [\n                ['name' => 'Test Inclusion blade', 'html' => 'ckeditor.table'],\n            ],\n\n            'items' => [\n                //'textPartLanguage',\n                'heading',\n                'removeFormat',\n                /*'|',\n                'fontSize',\n                'fontFamily',\n                'fontColor',\n                'fontBackgroundColor',\n                '|',*/\n                /*'insertTable',\n                'imageBrowser',\n                'videoBrowser',\n                '|',*/\n                'bold',\n                'italic',\n                'bulletedList',\n                'numberedList',\n                'link',\n                'snippetBrowser',\n                'blockQuote',\n                'horizontalLine',\n                '|',\n                //'alignment',\n                'subscript',\n                'superscript',\n                'mediaEmbed',\n                //'underline',\n                //'strikethrough',\n                'code',\n                'codeBlock',\n                /*'|',\n                'outdent',\n                'indent',*/\n                '|',\n                'undo',\n                'redo',\n                '|',\n                'elementIdAttributes',\n                'htmlEmbed',\n                'sourceEditing'\n            ],\n\n            'options' => [\n                'headings' => [\n                    [\n                        'model' => 'paragraph',\n                        'title' => 'Paragraphe',\n                        'class' => 'ck-heading_paragraph',\n                    ],\n                    [\n                        'model' => 'heading1',\n                        'view'  => 'h1',\n                        'title' => 'Titre 1',\n                        'class' => 'ck-heading_heading1',\n                    ],\n                    [\n                        'model' => 'heading2',\n                        'view'  => 'h2',\n                        'title' => 'Titre 2',\n                        'class' => 'ck-heading_heading2',\n                    ],\n                    [\n                        'model' => 'heading3',\n                        'view'  => 'h3',\n                        'title' => 'Titre 3',\n                        'class' => 'ck-heading_heading3',\n                    ],\n                    [\n                        'model' => 'heading4',\n                        'view'  => 'h4',\n                        'title' => 'Titre 4',\n                        'class' => 'ck-heading_heading4',\n                    ],\n                    /*[\n                        'model' => 'heading5',\n                        'view'  => 'h5',\n                        'title' => 'Heading 5',\n                        'class' => 'ck-heading_heading5',\n                    ],\n                    [\n                        'model' => 'heading6',\n                        'view'  => 'h6',\n                        'title' => 'Heading 6',\n                        'class' => 'ck-heading_heading6',\n                    ]*/\n                ],\n\n                'fontFamily' => [\n                    'supportAllValues' => false,\n                    'options'          => [\n                        'default',\n                        'Arial, Helvetica, sans-serif',\n                        'Courier New, Courier, monospace',\n                        'Georgia, serif',\n                        'Lucida Sans Unicode, Lucida Grande, sans-serif',\n                        'Tahoma, Geneva, sans-serif',\n                        'Times New Roman, Times, serif',\n                        'Trebuchet MS, Helvetica, sans-serif',\n                        'Verdana, Geneva, sans-serif'\n                    ]\n                ],\n\n                'fontSize' => [\n                    'options' => [\n                        'tiny',\n                        'small',\n                        'default',\n                        'big',\n                        'huge'\n                    ]\n                ],\n\n                'fontColor' => [\n                    'columns' => 5,\n                    'colors'  => [\n                        [\n                            'color' => 'hsl(0, 0%, 0%)',\n                            'label' => 'Black'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 30%)',\n                            'label' => 'Dim grey'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 60%)',\n                            'label' => 'Grey'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 90%)',\n                            'label' => 'Light grey'\n                        ],\n                        [\n                            'color'     => 'hsl(0, 0%, 100%)',\n                            'label'     => 'White',\n                            'hasBorder' => true\n                        ],\n                        [\n                            'color' => 'hsl(0, 75%, 60%)',\n                            'label' => 'Red'\n                        ],\n                        [\n                            'color' => 'hsl(30, 75%, 60%)',\n                            'label' => 'Orange'\n                        ],\n                        [\n                            'color' => 'hsl(60, 75%, 60%)',\n                            'label' => 'Yellow'\n                        ],\n                        [\n                            'color' => 'hsl(90, 75%, 60%)',\n                            'label' => 'Light green'\n                        ],\n                        [\n                            'color' => 'hsl(120, 75%, 60%)',\n                            'label' => 'Green'\n                        ],\n                        [\n                            'color' => 'hsl(150, 75%, 60%)',\n                            'label' => 'Aquamarine'\n                        ],\n                        [\n                            'color' => 'hsl(180, 75%, 60%)',\n                            'label' => 'Turquoise'\n                        ],\n                        [\n                            'color' => 'hsl(210, 75%, 60%)',\n                            'label' => 'Light blue'\n                        ],\n                        [\n                            'color' => 'hsl(240, 75%, 60%)',\n                            'label' => 'Blue'\n                        ],\n                        [\n                            'color' => 'hsl(270, 75%, 60%)',\n                            'label' => 'Purple'\n                        ]\n                    ]\n                ],\n\n                'fontBackgroundColor' => [\n                    'columns' => 5,\n                    'colors'  => [\n                        [\n                            'color' => 'hsl(0, 0%, 0%)',\n                            'label' => 'Black'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 30%)',\n                            'label' => 'Dim grey'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 60%)',\n                            'label' => 'Grey'\n                        ],\n                        [\n                            'color' => 'hsl(0, 0%, 90%)',\n                            'label' => 'Light grey'\n                        ],\n                        [\n                            'color'     => 'hsl(0, 0%, 100%)',\n                            'label'     => 'White',\n                            'hasBorder' => true\n                        ],\n                        [\n                            'color' => 'hsl(0, 75%, 60%)',\n                            'label' => 'Red'\n                        ],\n                        [\n                            'color' => 'hsl(30, 75%, 60%)',\n                            'label' => 'Orange'\n                        ],\n                        [\n                            'color' => 'hsl(60, 75%, 60%)',\n                            'label' => 'Yellow'\n                        ],\n                        [\n                            'color' => 'hsl(90, 75%, 60%)',\n                            'label' => 'Light green'\n                        ],\n                        [\n                            'color' => 'hsl(120, 75%, 60%)',\n                            'label' => 'Green'\n                        ],\n                        [\n                            'color' => 'hsl(150, 75%, 60%)',\n                            'label' => 'Aquamarine'\n                        ],\n                        [\n                            'color' => 'hsl(180, 75%, 60%)',\n                            'label' => 'Turquoise'\n                        ],\n                        [\n                            'color' => 'hsl(210, 75%, 60%)',\n                            'label' => 'Light blue'\n                        ],\n                        [\n                            'color' => 'hsl(240, 75%, 60%)',\n                            'label' => 'Blue'\n                        ],\n                        [\n                            'color' => 'hsl(270, 75%, 60%)',\n                            'label' => 'Purple'\n                        ]\n                    ]\n                ],\n\n                'mediaEmbed' => []\n            ],\n        ]\n    ],\n];\n")),(0,a.kt)("p",null,"Supprimer les models Image et Video : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='arborescence'",title:"'arborescence'"},"|-- app/\n|   |-- Models/\n// highlight-start\n|   |   |-- Image.php\n|   |   |-- Video.php\n// highlight-end\n...\n")),(0,a.kt)("p",null,"Et enfin supprimer le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources/")," de Nova."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='arborescence'",title:"'arborescence'"},"|-- app/\n|   |-- Nova/\n|   |   |-- Dashboards/\n// highlight-start\n|   |   |-- Resources/\n|   |   |   |-- ...\n// highlight-end\n|   |   |-- Resource.php\n|   |   |-- ...\n")),(0,a.kt)("h2",{id:"utiliser-le-package"},"Utiliser le package"),(0,a.kt)("p",null,"Pour une simple utilisation, on ajoute un nouveau field \xe0 la resources Nova."),(0,a.kt)("p",null,"Exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Nova/Ma-resource.php'",title:"'app/Nova/Ma-resource.php'"},"use Mostafaznv\\NovaCkEditor\\CkEditor;\n\n...\nclass MaResource extends Resource { \n    ...\n    public function fields(NovaRequest $request) {\n        ...\n        CkEditor::make('Paragraphe', 'p')->stacked()->fullwidth()->hideFromIndex(),\n        ...\n    }\n    ...\n}\n")))}p.isMDXComponent=!0}}]);