"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7989],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Installation depuis un d\xe9p\xf4t",slug:"installation-depuis-un-depot"},l=void 0,o={unversionedId:"laravel/Features/install-from-repo",id:"laravel/Features/install-from-repo",title:"Installation depuis un d\xe9p\xf4t",description:"R\xe9cuperer le projet sur github",source:"@site/docs/laravel/Features/install-from-repo.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/installation-depuis-un-depot",permalink:"/documentation/docs/laravel/Features/installation-depuis-un-depot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/install-from-repo.md",tags:[],version:"current",frontMatter:{title:"Installation depuis un d\xe9p\xf4t",slug:"installation-depuis-un-depot"},sidebar:"laravelSidebar",previous:{title:"Ajouter Nova CKEditor",permalink:"/documentation/docs/laravel/Features/add-ckeditor"},next:{title:"NovaYoutubeField",permalink:"/documentation/docs/laravel/Features/nova-youtube-field"}},s={},u=[{value:"R\xe9cuperer le projet sur github",id:"r\xe9cuperer-le-projet-sur-github",level:2},{value:"Installer les d\xe9pendances",id:"installer-les-d\xe9pendances",level:2},{value:"Pr\xe9parer le .env",id:"pr\xe9parer-le-env",level:2},{value:"Ne pas oublier",id:"ne-pas-oublier",level:3},{value:"Ajouter les fichiers ignor\xe9 par .gitignore",id:"ajouter-les-fichiers-ignor\xe9-par-gitignore",level:2},{value:"Nova",id:"nova",level:3},{value:"Ajouter le premier utilisateur",id:"ajouter-le-premier-utilisateur",level:4},{value:"Icons",id:"icons",level:3},{value:"D\xe9marrer le site web",id:"d\xe9marrer-le-site-web",level:2},{value:"Cr\xe9er un virtual host avec Wamp",id:"cr\xe9er-un-virtual-host-avec-wamp",level:3},{value:"D\xe9marrer depuis Laravel",id:"d\xe9marrer-depuis-laravel",level:3}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"r\xe9cuperer-le-projet-sur-github"},"R\xe9cuperer le projet sur github"),(0,a.kt)("p",null,"Se rendre sur la page d'un d\xe9p\xf4t, dans cet exemple nous utiliserons : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jolimardi/bethmann"},"https://github.com/jolimardi/bethmann")),(0,a.kt)("p",null,"Cloner le d\xe9p\xf4t dans le dossier de son choix, depuis la console :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"git clone https://github.com/jolimardi/bethmann\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Pour avoir acc\xe8s \xe0 la database et pouvoir run les migrations, ne pas oublier de d\xe9marrer Wampserver ou tout autre logiciel permettant la gestion de database. ")),(0,a.kt)("h2",{id:"installer-les-d\xe9pendances"},"Installer les d\xe9pendances"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"cd bethmann\n\ncomposer install \n\nnpm install \n\nphp artisan migrate \n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," Certaines configuration de database peuvent sortir une erreur ",(0,a.kt)("inlineCode",{parentName:"p"},"SQLSTATE[42000]: Syntax error or access violation: 1071 La cl\xe9 est trop longue.")," Dans ce cas, ajouter dans ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Service/AppServiceProvider.php")," la ligne suivante dans la fonction boot :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Service/AppServiceProvider.php"',title:'"/app/Service/AppServiceProvider.php"'},"use Illuminate\\Support\\ServiceProvider;\n\n...\n\npublic function boot(): void {\n    Schema::defaultStringLength(191);\n}\n"))),(0,a.kt)("h2",{id:"pr\xe9parer-le-env"},"Pr\xe9parer le .env"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/.env"',title:'"/.env"'},"APP_NAME=\"Mon Site\"\nAPP_ENV=local\nAPP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=\nAPP_DEBUG=true\nAPP_URL=http://mon-site.local\n\n# NOVA_AUTHORIZED_EMAILS=\"mon-email@gmail.com, deuxieme-email@gmail.com\" # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :\n# protected function gate() {\n#        Gate::define('viewNova', function ($user) {\n#            $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'romain.cherot@gmail.com, hodeeemilien@gmail.com');\n#            $authorized_emails = explode(',', $authorized_emails_str);\n#            $authorized_emails = array_map('trim', $authorized_emails);\n#            return in_array($user->email, $authorized_emails);\n#        });\n#    }\n\n# SENDINBLUE_KEY=\"xkeysib-A_COMPLETER\"\n# SENDINBLUE_FROM_ADDRESS=\"contact@mon-site.com\"\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=monsite\nDB_USERNAME=root\nDB_PASSWORD=\"motdepasseDB\"\n\n\n## REDIS - Used for Cache and Sessions (available on Forge)\n## Comment if no redis available on your server\n\n# CACHE_DRIVER=redis\n# SESSION_DRIVER=redis\n# SESSION_LIFETIME=1440 # 1 jour en minutes\n\n# REDIS_HOST=127.0.0.1\n# REDIS_PASSWORD=null\n# REDIS_PORT=6379\n\n# FILESYSTEM_DISK=local\n\n")),(0,a.kt)("h3",{id:"ne-pas-oublier"},"Ne pas oublier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe9rifier les informations de connection \xe0 la database."),(0,a.kt)("li",{parentName:"ul"},"D\xe9comment\xe9 la ligne ",(0,a.kt)("inlineCode",{parentName:"li"},'# NOVA_AUTHORIZED_EMAILS="mon-email@gmail.com, deuxieme-email@gmail.com"')),(0,a.kt)("li",{parentName:"ul"},"Modifier ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Providers/NovaServiceProvider.php")," comme indiqu\xe9 dans le ",(0,a.kt)("inlineCode",{parentName:"li"},"./env")),(0,a.kt)("li",{parentName:"ul"},"Sauvegarder le ",(0,a.kt)("inlineCode",{parentName:"li"},"./env"))),(0,a.kt)("h2",{id:"ajouter-les-fichiers-ignor\xe9-par-gitignore"},"Ajouter les fichiers ignor\xe9 par .gitignore"),(0,a.kt)("h3",{id:"nova"},"Nova"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"composer config repositories.nova composer https://nova.laravel.com\n")),(0,a.kt)("p",null,"Puis entrer ses credentials pour ne pas avoir \xe0 les entrer \xe0 chaque fois (adresse mail et cl\xe9 d'api), cette commande va ajouter auth.json \xe0 la racine avec les credentials (ne pas versionner ce fichier)."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Il ne faut pas versionner ce fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.json")," sur Git, il contient la cl\xe9 d'api.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY\n")),(0,a.kt)("h4",{id:"ajouter-le-premier-utilisateur"},"Ajouter le premier utilisateur"),(0,a.kt)("p",null,"Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (",(0,a.kt)("inlineCode",{parentName:"p"},"http://mon-url.com/nova"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan nova:user\n")),(0,a.kt)("p",null,"Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour cr\xe9er l'utilisateur)."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Bonus : Ajouter un utilisateur jolimardi par d\xe9faut (Via une migration)"),(0,a.kt)("p",null,"Ajouter dans ",(0,a.kt)("inlineCode",{parentName:"p"},"database/migrations"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='2023_06_27_160507_add_nova_user_jolimardi.php'",title:"'2023_06_27_160507_add_nova_user_jolimardi.php'"},'<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\DB;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration {\n    /**\n     * Run the migrations.\n     */\n    public function up(): void {\n        // Quelques valeurs pr\xe9-remplies\n        DB::table(\'users\')->insert([\n            "name" => "Joli Mardi",\n            "email" => "romain.cherot@gmail.com",\n            "email_verified_at" => NULL,\n            "password" => \'$2y$10$flJKeNiiWe57txt1eCk9deNCwQ4xShzf85kquM.1oqS5j.TcRstf2\',\n            "remember_token" => NULL,\n            "created_at" => "2023-06-24 16:09:35",\n            "updated_at" => "2023-06-24 16:11:03",\n        ]);\n    }\n\n    /**\n     * Reverse the migrations.\n     */\n    public function down(): void {\n        DB::table(\'users\')->where(\'email\', \'romain.cherot@gmail.com\')->delete();\n    }\n};\n'))),(0,a.kt)("h3",{id:"icons"},"Icons"),(0,a.kt)("p",null,"On utilisera un dossier icons sp\xe9cifique en conjonction avec le package blade-icons. "),(0,a.kt)("p",null,"Si on retrouver l'erreur suivante : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='error'",title:"'error'"},'BladeUI\\Icons\\Exceptions\\CannotRegisterIconSet\n\nThe [C:\\mon-chemin\\bethmann\\resources/icons] path for the "default" set does not exist.\n')),(0,a.kt)("p",null,"Alors ajouter le dossier icons aux resources :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='arborescence'",title:"'arborescence'"},"...\n|-- resources/\n|   |-- css/\n// highlight-start\n|   |-- icons/\n// highlight-end\n|   |-- js/\n|   |-- view/\n|-- routes/\n...\n")),(0,a.kt)("h2",{id:"d\xe9marrer-le-site-web"},"D\xe9marrer le site web"),(0,a.kt)("p",null,"On peut maintenant acc\xe9der au site de plusieurs fa\xe7on"),(0,a.kt)("h3",{id:"cr\xe9er-un-virtual-host-avec-wamp"},"Cr\xe9er un virtual host avec Wamp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lancer Wampserver"),(0,a.kt)("li",{parentName:"ul"},"Se rendre sur localhost dans son navigateur"),(0,a.kt)("li",{parentName:"ul"},'Cliquer sur "Ajouter un virtual host"'),(0,a.kt)("li",{parentName:"ul"},"Donner un nom, exemple : bethmann.local"),(0,a.kt)("li",{parentName:"ul"},"Li\xe9 le dossier public du projet, exemple : C:\\mon-chemin\\bethmann\\public"),(0,a.kt)("li",{parentName:"ul"},"Ajouter le virtual host"),(0,a.kt)("li",{parentName:"ul"},"Se rendre sur l'adresse du vitural host")),(0,a.kt)("h3",{id:"d\xe9marrer-depuis-laravel"},"D\xe9marrer depuis Laravel"),(0,a.kt)("p",null,"Ouvrez deux terminal et se rendre \xe0 la racine du projet pour chacun d'eux :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"cd C:\\mon-chemin\\bethmann\n")),(0,a.kt)("p",null,"Lancer une commande par terminal : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"# Runtime pour les assets js/css avec Vite\nnpm run dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"# Lancement du serveur de d\xe9veloppement laravel \nphp artisan serve\n")),(0,a.kt)("p",null,"Puis vous rendre sur l'adresse indiqu\xe9 dans votre console, ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/"},"http://127.0.0.1:8000/")," par d\xe9faut."))}m.isMDXComponent=!0}}]);