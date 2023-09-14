"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={title:"Jolimardi/Laravel-flash"},l=void 0,i={unversionedId:"laravel/Features/jm-flash",id:"laravel/Features/jm-flash",title:"Jolimardi/Laravel-flash",description:"Facade Flash",source:"@site/docs/laravel/Features/jm-flash.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/jm-flash",permalink:"/documentation/docs/laravel/Features/jm-flash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/jm-flash.md",tags:[],version:"current",frontMatter:{title:"Jolimardi/Laravel-flash"},sidebar:"laravelSidebar",previous:{title:"Jolimardi/Laravel-sections",permalink:"/documentation/docs/laravel/Features/jm-sections"},next:{title:"Jolimardi/Laravel-metas",permalink:"/documentation/docs/laravel/Features/jm-metas"}},o={},p=[{value:"Facade Flash",id:"facade-flash",level:2},{value:"Installer notiflix",id:"installer-notiflix",level:2},{value:"Render les messages sur le site",id:"render-les-messages-sur-le-site",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"facade-flash"},"Facade Flash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="console"',title:'"console"'},'composer require jolimardi/laravel-flash:dev-master\n\nphp artisan vendor:publish --provider="JoliMardi\\Flash\\FlashServiceProvider"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},":dev-main")," permet d'outre-passer la v\xe9rification de stabilit\xe9 pour le moment.\n",(0,r.kt)("inlineCode",{parentName:"p"},"vendor:publish")," permet d'avoir acc\xe8s au template qui affiche les messages dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/views/vendor/flash-messages/")," ")),(0,r.kt)("p",null,"Ajouter l'alias personnalis\xe9 dans ",(0,r.kt)("inlineCode",{parentName:"p"},"config/app.php")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/app.php"',title:'"config/app.php"'},"    'aliases' => Facade::defaultAliases()->merge([\n        // highlight-start\n        'MyFlash' => JoliMardi\\Flash\\Flash::class,\n        // highlight-end\n    ])->toArray(),\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On \xe9vite d'avoir Flash comme alias \xe0 cause de la facade Flash de Laravel par d\xe9faut"),(0,r.kt)("p",{parentName:"admonition"},"Cet alias s'utilise dans la vue uniquement. Il n'y a pas besoin de la modifier par d\xe9faut")),(0,r.kt)("p",null,"Apr\xe8s avoir publish on retrouvera la vue qui display les messages, ",(0,r.kt)("strong",{parentName:"p"},"ne pas modifier par d\xe9faut :")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="resources/view/vendor/flash-messages/message.blade.php"',title:'"resources/view/vendor/flash-messages/message.blade.php"'},"@props([\n    'types_notify_mapping' => [\n        'success' => 'success',\n        'error' => 'failure',\n        'notice' => 'info',\n        'warning' => 'warning',\n    ],\n])\n\n@if (MyFlash::has())\n\n    {{-- Config initiale de Notify --}}\n    @pushOnce('scripts')\n        <script type=\"text/javascript\">\n            window.addEventListener('DOMContentLoaded', function() {\n                Notify.init({\n                    position: 'center-top',\n                    distance: '82px'\n                });\n            });\n        <\/script>\n    @endPushOnce\n\n    @foreach (MyFlash::getMessages() as $type => $messages)\n        @foreach ($messages as $message)\n            @push('scripts')\n                <script type=\"text/javascript\">\n                    {{-- cas particulier pour error --}}\n                    @if ($type == 'error')\n                        window.addEventListener('DOMContentLoaded', function() {\n                            Notify.failure(\"{{ $message }}\", {\n                                backOverlay: true,\n                                closeButton: true\n                            });\n                        });\n                    @else\n                        window.addEventListener('DOMContentLoaded', function() {\n                            Notify.{{ $types_notify_mapping[$type] ?? 'info' }}(\"{{ $message }}\", {});\n                        });\n                    @endif\n                <\/script>\n            @endpush\n        @endforeach\n    @endforeach\n@endif\n")),(0,r.kt)("p",null,"Puis utiliser la facade dans un controller, exemple : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Http/Controller/IndexController.php"',title:'"app/Http/Controller/IndexController.php"'},"use JoliMardi\\Flash\\Flash;\n\nclass IndexController extends Controller {\n\n    public function test() {\n\n        Flash::message('success', 'Ceci est un message de type succ\xe8s');\n        Flash::success('Ceci est un message de succ\xe8sssssss');\n        Flash::error('Ceci est un autre message d\\'erreur');\n        Flash::notice('Ceci est un message de notification');\n\n        return view('test');\n    }\n\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"La facade Flash de jolimardi utilise le package notiflix pour display les messages, il n'y a donc pas besoin de l'ins\xe9rer dans la vue. Tout est pris en charge par d\xe9faut.")),(0,r.kt)("h2",{id:"installer-notiflix"},"Installer notiflix"),(0,r.kt)("p",null,"Installer le package : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="console"',title:'"console"'},"npm install notiflix --save-dev\n")),(0,r.kt)("p",null,"Puis ajouter : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resources/js/bootstrap.js"',title:'"resources/js/bootstrap.js"'},"...\n/* -------   Notiflix   ------- */\n// npm install notiflix --save-dev\n// pour le css : pas besoin, c'est du all in one\n\nimport { Notify } from 'notiflix/build/notiflix-notify-aio';\nwindow.Notify = Notify;\n")),(0,r.kt)("h3",{id:"render-les-messages-sur-le-site"},"Render les messages sur le site"),(0,r.kt)("p",null,"Ajouter la directive ",(0,r.kt)("inlineCode",{parentName:"p"},"@push(scripts)")," au layout du site, exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="resources/view/layout.blade.php"',title:'"resources/view/layout.blade.php"'},"<head>\n    ...\n</head>\n<body>\n    ...\n    {{-- Chargement des js --}}\n    @vite('resources/js/app.js')\n\n    @stack('scripts')\n</body>\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Retrouvez tout les types de message dans la documentation du package : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jolimardi/laravel-flash"},"https://github.com/jolimardi/laravel-flash"))))}d.isMDXComponent=!0}}]);