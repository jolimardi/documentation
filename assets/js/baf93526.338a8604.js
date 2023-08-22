"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8178],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return t?n.createElement(v,i(i({ref:a},u),{},{components:t})):n.createElement(v,i({ref:a},u))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5201:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={title:"Step by step"},i="Installer une application laravel jolimardi",s={unversionedId:"laravel/Installation/Setup",id:"laravel/Installation/Setup",title:"Step by step",description:"Dans cette page, nous allons cr\xe9er une application Laravel compl\xe8te avec un bon nombre de fonctionnalit\xe9. Du point de vue de la console d'abord, et si besoin nous modifierons l\xe9g\xe8rement le code.",source:"@site/docs/laravel/Installation/Setup.md",sourceDirName:"laravel/Installation",slug:"/laravel/Installation/Setup",permalink:"/documentation/docs/laravel/Installation/Setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/Setup.md",tags:[],version:"current",frontMatter:{title:"Step by step"},sidebar:"laravelSidebar",previous:{title:"Intro",permalink:"/documentation/docs/laravel/intro"},next:{title:"Packages (commandes)",permalink:"/documentation/docs/laravel/Installation/package-laravel"}},o={},p=[{value:"Installer Laravel",id:"installer-laravel",level:2},{value:"Projet de base Laravel",id:"projet-de-base-laravel",level:3},{value:"Configuration du .env",id:"configuration-du-env",level:3},{value:"D\xe9marrage du serveur local",id:"d\xe9marrage-du-serveur-local",level:2},{value:"Installation des packages Composer",id:"installation-des-packages-composer",level:2},{value:"Basiques",id:"basiques",level:3},{value:"Blade Icons",id:"blade-icons",level:3},{value:"CSS JoliMardi",id:"css-jolimardi",level:3},{value:"Menu JoliMardi",id:"menu-jolimardi",level:3},{value:"Sections JoliMardi",id:"sections-jolimardi",level:3},{value:"Flash",id:"flash",level:3},{value:"Cr\xe9ation du Layout Blade",id:"cr\xe9ation-du-layout-blade",level:2},{value:"Vite.js",id:"vitejs",level:2},{value:"Vite.js",id:"vitejs-1",level:4},{value:"Compilation CSS avec Vite.js",id:"compilation-css-avec-vitejs",level:5},{value:"Chargement des assets dans le HTML avec Vite.js",id:"chargement-des-assets-dans-le-html-avec-vitejs",level:5},{value:"Laravel Nova",id:"laravel-nova",level:2},{value:"Il faut d&#39;abord ajouter le repo priv\xe9 et ses credentials :",id:"il-faut-dabord-ajouter-le-repo-priv\xe9-et-ses-credentials-",level:3},{value:"Ensuite, installer Nova",id:"ensuite-installer-nova",level:3},{value:"Ajouter le premier utilisateur",id:"ajouter-le-premier-utilisateur",level:3},{value:"Important, ajouter les emails autoris\xe9s",id:"important-ajouter-les-emails-autoris\xe9s",level:3},{value:"Installation de plugins JS fr\xe9quents",id:"installation-de-plugins-js-fr\xe9quents",level:2},{value:"jQuery",id:"jquery",level:3},{value:"Fancybox",id:"fancybox",level:3},{value:"Plugins Laravel",id:"plugins-laravel",level:2},{value:"Nova helpers",id:"nova-helpers",level:3},{value:"Jolimardi plugins",id:"jolimardi-plugins",level:2},{value:"@TODO",id:"todo",level:2}],u={toc:p},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installer-une-application-laravel-jolimardi"},"Installer une application laravel jolimardi"),(0,r.kt)("p",null,"Dans cette page, nous allons cr\xe9er une application Laravel compl\xe8te avec un bon nombre de fonctionnalit\xe9. Du point de vue de la console d'abord, et si besoin nous modifierons l\xe9g\xe8rement le code. "),(0,r.kt)("h2",{id:"installer-laravel"},"Installer Laravel"),(0,r.kt)("h3",{id:"projet-de-base-laravel"},"Projet de base Laravel"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remplacer ",(0,r.kt)("inlineCode",{parentName:"p"},"nom-du-site")," par le nom du projet. Le projet sera cr\xe9\xe9 dans un sous-dossier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel nom-du-site\ncd nom-du-site\ncomposer update\nnpm install\nphp artisan key:generate\n")),(0,r.kt)("h3",{id:"configuration-du-env"},"Configuration du .env"),(0,r.kt)("p",null,"Il faut ensuite \xe9diter le ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \xe0 la racine, pour qu'il ressemble \xe0 \xe7a :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/.env"',title:'"/.env"'},"APP_NAME=\"Mon Site\"\nAPP_ENV=local\nAPP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=\nAPP_DEBUG=true\nAPP_URL=http://mon-site.local\n\n# NOVA_AUTHORIZED_EMAILS='romain.cherot@gmail.com, hodeeemilien@gmail.com, yohan.sati@gmail.com' # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :\n# protected function gate() {\n#        Gate::define('viewNova', function ($user) {\n#            $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'romain.cherot@gmail.com, hodeeemilien@gmail.com');\n#            $authorized_emails = explode(',', $authorized_emails_str);\n#            $authorized_emails = array_map('trim', $authorized_emails);\n#            return in_array($user->email, $authorized_emails);\n#        });\n#    }\n\n# SENDINBLUE_KEY=\"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\"\n# SENDINBLUE_FROM_ADDRESS=\"contact@yohansati.com\"\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=monsite\nDB_USERNAME=root\nDB_PASSWORD=\"motdepasseDB\"\n\n\n## REDIS - Used for Cache and Sessions (available on Forge)\n## Comment if no redis available on your server\n\n# CACHE_DRIVER=redis\n# SESSION_DRIVER=redis\n# SESSION_LIFETIME=1440 # 1 jour en minutes\n\n# REDIS_HOST=127.0.0.1\n# REDIS_PASSWORD=null\n# REDIS_PORT=6379\n\n# FILESYSTEM_DISK=local\n\n")),(0,r.kt)("h2",{id:"d\xe9marrage-du-serveur-local"},"D\xe9marrage du serveur local"),(0,r.kt)("p",null,"On peut ex\xe9cuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur int\xe9gr\xe9 (basique, mais pratique pour d\xe9panner) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan serve\n")),(0,r.kt)("p",null,"Pour les assets et le live reload, lancer Vite.js :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("h2",{id:"installation-des-packages-composer"},"Installation des packages Composer"),(0,r.kt)("h3",{id:"basiques"},"Basiques"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require barryvdh/laravel-debugbar\n")),(0,r.kt)("h3",{id:"blade-icons"},"Blade Icons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require blade-ui-kit/blade-icons\ncomposer require codeat3/blade-coolicons\n\nphp artisan vendor:publish --tag=blade-icons\nphp artisan vendor:publish --tag=blade-coolicons-config\n")),(0,r.kt)("p",null,"Permet l'utilisation de la directive ",(0,r.kt)("inlineCode",{parentName:"p"},"@svg('icon-name')"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Retrouver tout les nom d'ic\xf4ne sur la page ",(0,r.kt)("a",{parentName:"p",href:"https://blade-ui-kit.com/blade-icons?set=53"},"Blade-icons"))),(0,r.kt)("h3",{id:"css-jolimardi"},"CSS JoliMardi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ressources/css\ngit clone https://github.com/jolimardi/jolimardi-css\n")),(0,r.kt)("p",null,"Puis importer le CSS dans le projet :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="resources/css/app.css"',title:'"resources/css/app.css"'},'@import "jolimardi-css/jolimardi.css";\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Pour mettre \xe0 jour ce CSS, ex\xe9cuter ",(0,r.kt)("inlineCode",{parentName:"p"},"git submodule update --remote --merge")," (pratique \xe0 mettre dans le Deploy Script de Forge par exemple, apr\xe8s le ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),").")),(0,r.kt)("h3",{id:"menu-jolimardi"},"Menu JoliMardi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'composer require jolimardi/laravel-menu:dev-master\nphp artisan vendor:publish --provider="JoliMardi\\Menu\\MenuServiceProvider" --tag=config\n')),(0,r.kt)("p",null,"Ajouter le component ",(0,r.kt)("inlineCode",{parentName:"p"},"<x-menu/>")," dans un template blade, l\xe0 o\xf9 vous voulez afficher le menu.\nModifier ",(0,r.kt)("inlineCode",{parentName:"p"},"config/menu.yml")," pour ajouter des routes au composant."),(0,r.kt)("h3",{id:"sections-jolimardi"},"Sections JoliMardi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require jolimardi/laravel-mysections:dev-main\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},":dev-main")," permet d'outre-passer la v\xe9rification de stabilit\xe9 pour le moment.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Il est d\xe9j\xe0 possible d'utiliser le composant ",(0,r.kt)("inlineCode",{parentName:"li"},"<x-section><x-section />")," ici.")),(0,r.kt)("p",null,"Acc\xe9der \xe0 la cr\xe9ation de sections, \xe9x\xe9cuter :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="JoliMardi\\MySections\\MySectionsServiceProvider"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\n")),(0,r.kt)("p",null,"Importer le css des sections dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css/app.css")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@import "../../public/vendor/mysections/sections.css";\n')),(0,r.kt)("p",null,"Utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"@mySection($data, $key)")," pour afficher la section apr\xe8s l'avoir cr\xe9er dans nova. "),(0,r.kt)("h3",{id:"flash"},"Flash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require jolimardi/laravel-flash:dev-master\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},":dev-main")," permet d'outre-passer la v\xe9rification de stabilit\xe9 pour le moment.")),(0,r.kt)("p",null,"Ajouter l'alias personnalis\xe9 dans ",(0,r.kt)("inlineCode",{parentName:"p"},"config/app.php")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'MyFlash' => JoliMardi\\Flash\\Flash::class,\n")),(0,r.kt)("p",null,"Utiliser dans un controlleur ",(0,r.kt)("inlineCode",{parentName:"p"},"Flash::success('Ceci est un message de succ\xe8s');"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Retrouvez tout les types de message dans la documentation du package : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jolimardi/laravel-flash"},"https://github.com/jolimardi/laravel-flash"))),(0,r.kt)("h2",{id:"cr\xe9ation-du-layout-blade"},"Cr\xe9ation du Layout Blade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php artisan make:component Layout\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Views/Components/Layout.php"',title:'"/app/Views/Components/Layout.php"'},"public function render(): View|Closure|string {\n    // highlight-start\n    return view('layout');\n    // highlight-end\n}\n")),(0,r.kt)("p",null,"Puis cr\xe9er le template principal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/ressources/views/layout.blade.php"',title:'"/ressources/views/layout.blade.php"'},"")),(0,r.kt)("h2",{id:"vitejs"},"Vite.js"),(0,r.kt)("h4",{id:"vitejs-1"},"Vite.js"),(0,r.kt)("p",null,"Vite.js est le builder js utilis\xe9 par Laravel. Cela permet d'ajouter des plugins au projet via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", de compiler les assets (js, scss, images...) et de live-reload les pages pendant le dev."),(0,r.kt)("h5",{id:"compilation-css-avec-vitejs"},"Compilation CSS avec Vite.js"),(0,r.kt)("p",null,"Installation de quelques plugins pour PostCSS, PostCSS-Nesting et Autoprefixer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install postcss --save-dev\nnpm install postcss-nesting --save-dev\nnpm install autoprefixer --save-dev\n")),(0,r.kt)("p",null,"Puis configuration \xe0 la racine du projet, dans ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/vite.config.js"',title:'"/vite.config.js"'},"import { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\n\n// CSS\nimport postcssNesting from 'postcss-nesting';\nimport autoprefixer from 'autoprefixer';\n\nexport default defineConfig({\n    plugins: [\n        laravel({\n            input: ['resources/css/app.css', 'resources/js/app.js'], // Ajouter ici les ressources \xe0 compiler\n            refresh: true,\n        }),\n    ],\n    css: {\n        postcss: {\n            plugins: [\n                postcssNesting,\n                autoprefixer\n            ],\n            map: { inline: true }\n        },\n    },\n});\n")),(0,r.kt)("h5",{id:"chargement-des-assets-dans-le-html-avec-vitejs"},"Chargement des assets dans le HTML avec Vite.js"),(0,r.kt)("p",null,"Il faut ensuite charger ces fichiers compil\xe9s dans le Layout blade principal ",(0,r.kt)("inlineCode",{parentName:"p"},"/ressources/views/layout.blade.php")," grace \xe0 la directive sp\xe9ciale ",(0,r.kt)("inlineCode",{parentName:"p"},"@vite"),"."),(0,r.kt)("p",null,"Par exemple, pour les deux fichiers pr\xe9sents dans le ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js")," ci-dessus, on peut les charger dans le ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," avec ",(0,r.kt)("inlineCode",{parentName:"p"},"@vite('resources/css/app.css')")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"@vite('resources/css/app.js')"),". Ca remplace le ",(0,r.kt)("inlineCode",{parentName:"p"},"<style src=...></style>")," pour permettre le live reload pendant le dev, le changement de nom \xe0 chaque nouveau build (\xe9vite d'avoir de vieux fichiers obsol\xe8tes en cache) etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/ressources/views/layout.blade.php"',title:'"/ressources/views/layout.blade.php"'},"<head>\n    <meta charset=\"utf-8\">\n    <title>{{ $title ?? env('APP_NAME') }}</title>\n    <meta name=\"description\" content=\"{{ $description }}\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n    ...\n\n    {{-- Chargement du CSS --}}\n    // highlight-start\n    @vite('resources/css/app.css')\n    // highlight-end\n\n    @stack('styles')\n\n    @stack('js_vars')\n</head>\n<body>\n\n    ...\n\n    {{-- Chargement des js --}}\n    // highlight-start\n    @vite('resources/js/app.js')\n    // highlight-end\n</body>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Pour ajouter de nouveaux fichiers CSS au projet projet, vous pouvez soit les ajouter dans ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js"),", soit dans le fichier CSS de base (",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css/app.css")," par exemple) avec un ",(0,r.kt)("inlineCode",{parentName:"p"},'@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";')," par exemple.")),(0,r.kt)("h2",{id:"laravel-nova"},"Laravel Nova"),(0,r.kt)("h3",{id:"il-faut-dabord-ajouter-le-repo-priv\xe9-et-ses-credentials-"},"Il faut d'abord ajouter le repo priv\xe9 et ses credentials :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"composer config repositories.nova composer https://nova.laravel.com\n")),(0,r.kt)("p",null,"Puis entrer ses credentials pour ne pas avoir \xe0 les entrer \xe0 chaque fois (adresse mail et cl\xe9 d'api), cette commande va ajouter auth.json \xe0 la racine avec les credentials (ne pas versionner ce fichier)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY\n")),(0,r.kt)("h3",{id:"ensuite-installer-nova"},"Ensuite, installer Nova"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Assurez-vous d'avoir les bonnes infos de connexion \xe0 la base de donn\xe9es dans le fichier .env avant le ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/nova\nphp artisan nova:install\nphp artisan migrate\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Certaines configuration de database peuvent sortir une erreur ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLSTATE[42000]: Syntax error or access violation: 1071 La cl\xe9 est trop longue.")," Dans ce cas, ajouter dans ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Service/AppServiceProvider.php")," la ligne suivante dans la fonction boot :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Service/AppServiceProvider.php"',title:'"/app/Service/AppServiceProvider.php"'},"public function boot(): void {\n    Schema::defaultStringLength(191);\n}\n"))),(0,r.kt)("h3",{id:"ajouter-le-premier-utilisateur"},"Ajouter le premier utilisateur"),(0,r.kt)("p",null,"Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (",(0,r.kt)("inlineCode",{parentName:"p"},"http://mon-url.com/nova"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan nova:user\n")),(0,r.kt)("p",null,"Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour cr\xe9er l'utilisateur)."),(0,r.kt)("h3",{id:"important-ajouter-les-emails-autoris\xe9s"},"Important, ajouter les emails autoris\xe9s"),(0,r.kt)("p",null,"Lorsque l'on n'est plus en environnement ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", Nova v\xe9rifie les adresses mail autoris\xe9es, en plus des Nova Users cr\xe9\xe9s. Pour cela, il faut ajouter les emails autoris\xe9s dans ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Providers/NovaServiceProvider.php"),", dans la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"gate()")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Service/NovaServiceProvider.php"',title:'"/app/Service/NovaServiceProvider.php"'},"protected function gate(){\n    Gate::define('viewNova', function ($user) {\n        $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'romain.cherot@gmail.com, hodeeemilien@gmail.com');\n        $authorized_emails = explode(',', $authorized_emails_str);\n        $authorized_emails = array_map('trim', $authorized_emails);\n        return in_array($user->email, $authorized_emails);\n    });\n}\n")),(0,r.kt)("p",null,"et en ajoutant dans le ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="/.env"'},"NOVA_AUTHORIZED_EMAILS='romain.cherot@gmail.com, hodeeemilien@gmail.com, yohan.sati@gmail.com'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pour plus de d\xe9tails sur Laravel nova, retrouvez la documentation officielle ici : ",(0,r.kt)("a",{parentName:"strong",href:"https://nova.laravel.com/docs/4.0/installation.html"},"https://nova.laravel.com/docs/4.0/installation.html"))),(0,r.kt)("h2",{id:"installation-de-plugins-js-fr\xe9quents"},"Installation de plugins JS fr\xe9quents"),(0,r.kt)("h3",{id:"jquery"},"jQuery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install jquery --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/ressources/js/bootstrap.js"',title:'"/ressources/js/bootstrap.js"'},"import axios from 'axios';\nwindow.axios = axios;\n\nwindow.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n\n// highlight-start\n/* -------   jQuery   ------- */\n// npm install jquery --save-dev\nimport $ from 'jquery';\nwindow.$ = $;\n// highlight-end\n")),(0,r.kt)("h3",{id:"fancybox"},"Fancybox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @fancyapps/ui --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="resources/css/app.css"',title:'"resources/css/app.css"'},'@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/ressources/js/bootstrap.js"',title:'"/ressources/js/bootstrap.js"'},'/* -------   jQuery   ------- */\nimport $ from \'jquery\';\nwindow.$ = $;\n\n// highlight-start\n/* -------   Fancybox   ------- */\n// npm install @fancyapps/ui --save-dev\n// pour le css : @import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";\nimport { Fancybox } from "@fancyapps/ui";\nFancybox.bind();\n// highlight-end\n')),(0,r.kt)("h2",{id:"plugins-laravel"},"Plugins Laravel"),(0,r.kt)("p",null,"Suite de plugin, r\xe9f\xe9rez vous \xe0 notre documentation dans la cat\xe9gorie ",(0,r.kt)("inlineCode",{parentName:"p"},"Packages")," pour avoir plus \xe0 leur propos."),(0,r.kt)("h3",{id:"nova-helpers"},"Nova helpers"),(0,r.kt)("p",null,"Tout les packages concernant Nova."),(0,r.kt)("p",null,"Gestion de media avec : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require ebess/advanced-nova-media-library\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Gestion de field multi relationnel avec : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require benjacho/belongs-to-many-field\n")),(0,r.kt)("p",null,"Puis "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --tag=nova-media-library\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Ajout d'autres langues pour Nova avec :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require coderello/laravel-nova-lang\n")),(0,r.kt)("p",null,"Et "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan nova-lang:publish fr\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Am\xe9liore la gestion vid\xe9o : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require m-a-k-o/youtube-field\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Editeur de texte dans Nova :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require mostafaznv/nova-ckeditor\n")),(0,r.kt)("p",null,"Et "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="Mostafaznv\\NovaCkEditor\\FieldServiceProvider"\n')),(0,r.kt)("h2",{id:"jolimardi-plugins"},"Jolimardi plugins"),(0,r.kt)("p",null,"Les plugins ajouter par JoliMardi, rendez-vous sur la documentation du package pour plus d'informations."),(0,r.kt)("h2",{id:"todo"},"@TODO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supprimer Images et Videos related avec ckeditor, g\xe9rer par media-librairy"),(0,r.kt)("li",{parentName:"ul"},"Am\xe9liorer laravel-mysections erreur stabilit\xe9, ajouter une version"),(0,r.kt)("li",{parentName:"ul"},"AJouter publishables pour jolimardi/laravel-flash pour le composant ",(0,r.kt)("inlineCode",{parentName:"li"},"<x-flash-messages />"))))}d.isMDXComponent=!0}}]);