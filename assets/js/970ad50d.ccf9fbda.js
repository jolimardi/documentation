"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5071],{5680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>v});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?t.createElement(v,l(l({ref:n},u),{},{components:a})):t.createElement(v,l({ref:n},u))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7810:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=a(8168),r=(a(6540),a(5680));const o={title:"Installer Laravel"},l=void 0,i={unversionedId:"laravel/Installation/StepByStep/laravel",id:"laravel/Installation/StepByStep/laravel",title:"Installer Laravel",description:"Projet de base Laravel",source:"@site/docs/laravel/Installation/StepByStep/laravel.md",sourceDirName:"laravel/Installation/StepByStep",slug:"/laravel/Installation/StepByStep/laravel",permalink:"/documentation/docs/laravel/Installation/StepByStep/laravel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/StepByStep/laravel.md",tags:[],version:"current",frontMatter:{title:"Installer Laravel"},sidebar:"laravelSidebar",previous:{title:"Packages (commandes)",permalink:"/documentation/docs/laravel/Installation/package-laravel"},next:{title:"Laravel Nova",permalink:"/documentation/docs/laravel/Installation/StepByStep/laravel-nova"}},s={},p=[{value:"Projet de base Laravel",id:"projet-de-base-laravel",level:3},{value:"Configuration du .env",id:"configuration-du-env",level:3},{value:"Ajout de quelques lignes de config",id:"ajout-de-quelques-lignes-de-config",level:2},{value:"D\xe9marrage du serveur local",id:"d\xe9marrage-du-serveur-local",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"projet-de-base-laravel"},"Projet de base Laravel"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Remplacer ",(0,r.yg)("inlineCode",{parentName:"p"},"nom-du-site")," par le nom du projet. Le projet sera cr\xe9\xe9 dans un sous-dossier.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel nom-du-site\ncd nom-du-site\ncomposer update\nnpm install\nphp artisan key:generate\nphp artisan storage:link\n")),(0,r.yg)("h3",{id:"configuration-du-env"},"Configuration du .env"),(0,r.yg)("p",null,"Il faut ensuite \xe9diter le ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," \xe0 la racine, pour qu'il ressemble \xe0 \xe7a :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="/.env"',title:'"/.env"'},'APP_NAME="Mon Site"\nAPP_ENV=local\nAPP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=\nAPP_DEBUG=true\nAPP_URL=http://mon-site.local\n\n# NOVA_AUTHORIZED_EMAILS="mon-email@gmail.com, deuxieme-email@gmail.com" # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :\n# protected function gate() {\n#        Gate::define(\'viewNova\', function ($user) {\n#            $authorized_emails_str = ENV(\'NOVA_AUTHORIZED_EMAILS\', \'romain.cherot@gmail.com, hodeeemilien@gmail.com\');\n#            $authorized_emails = explode(\',\', $authorized_emails_str);\n#            $authorized_emails = array_map(\'trim\', $authorized_emails);\n#            return in_array($user->email, $authorized_emails);\n#        });\n#    }\n\n# SENDINBLUE_KEY="xkeysib-A_COMPLETER"\n# SENDINBLUE_FROM_ADDRESS="contact@mon-site.com"\n\n# YOUTUBE_API_KEY="{youtube_api_key}"\n# VIMEO_TOKEN="{vimeo_token}"\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=monsite\nDB_USERNAME=root\nDB_PASSWORD="motdepasseDB"\n\n\n## REDIS - Used for Cache and Sessions (available on Forge)\n## Comment if no redis available on your server\n\n# CACHE_DRIVER=redis\n# SESSION_DRIVER=redis\n# SESSION_LIFETIME=1440 # 1 jour en minutes\n\n# REDIS_HOST=127.0.0.1\n# REDIS_PASSWORD=null\n# REDIS_PORT=6379\n\n# FILESYSTEM_DISK=local\n\n')),(0,r.yg)("h2",{id:"ajout-de-quelques-lignes-de-config"},"Ajout de quelques lignes de config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/config/app.php"',title:'"/app/config/app.php"'},"<?php\n\nuse Illuminate\\Support\\Facades\\Facade;\nuse Illuminate\\Support\\ServiceProvider;\n\nreturn [\n\n    /* -------  Config commune \xe0 l'environnement de dev et de prod, non s\xe9curis\xe9e (pas de mots de passes ou cl\xe9s d'api) ------- */\n\n    'phone' => [\n        'formatted' => '06\xa006\xa006\xa006\xa006',\n        'number' => '0606060606',\n    ],\n    'email' => 'monsite@gmail.com',\n    'instagram_link' => 'https://www.instagram.com/monsite/',\n    'facebook_link' => 'https://www.facebook.com/monsite',\n    'linkedin_link' => 'https://www.linkedin.com/in/monsite/',\n    'youtube_link' => 'https://www.linkedin.com/in/monsite/',\n    'name' => 'Title de mon site',\n    'send_from' => [\n        'email' => 'contact@monsite.com',\n        'name' => 'Nom exp\xe9diteur'\n    ],\n    'send_to' => [\n        'email' => (ENV('APP_ENV') == 'local' ? 'romain.cherot@free.fr' : 'contact@monsite.com'),\n        'name' => 'Recipient name'\n    ],\n    'admin_slug' => ENV('ADMIN_SLUG', 'brain'),\n\n    [...]\n")),(0,r.yg)("h2",{id:"d\xe9marrage-du-serveur-local"},"D\xe9marrage du serveur local"),(0,r.yg)("p",null,"On peut ex\xe9cuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur int\xe9gr\xe9 (basique, mais pratique pour d\xe9panner) :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"php artisan serve\n")),(0,r.yg)("p",null,"Pour les assets et le live reload, lancer Vite.js :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")))}m.isMDXComponent=!0}}]);