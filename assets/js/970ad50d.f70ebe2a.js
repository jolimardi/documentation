"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3037],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?n.createElement(v,o(o({ref:a},u),{},{components:t})):n.createElement(v,o({ref:a},u))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5721:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={title:"Installer Laravel"},o=void 0,i={unversionedId:"laravel/Installation/StepByStep/laravel",id:"laravel/Installation/StepByStep/laravel",title:"Installer Laravel",description:"Projet de base Laravel",source:"@site/docs/laravel/Installation/StepByStep/laravel.md",sourceDirName:"laravel/Installation/StepByStep",slug:"/laravel/Installation/StepByStep/laravel",permalink:"/documentation/docs/laravel/Installation/StepByStep/laravel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/StepByStep/laravel.md",tags:[],version:"current",frontMatter:{title:"Installer Laravel"},sidebar:"laravelSidebar",previous:{title:"Packages (commandes)",permalink:"/documentation/docs/laravel/Installation/package-laravel"},next:{title:"Packages Composer",permalink:"/documentation/docs/laravel/Installation/StepByStep/package-composer"}},s={},p=[{value:"Projet de base Laravel",id:"projet-de-base-laravel",level:3},{value:"Configuration du .env",id:"configuration-du-env",level:3},{value:"D\xe9marrage du serveur local",id:"d\xe9marrage-du-serveur-local",level:2}],u={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"projet-de-base-laravel"},"Projet de base Laravel"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remplacer ",(0,r.kt)("inlineCode",{parentName:"p"},"nom-du-site")," par le nom du projet. Le projet sera cr\xe9\xe9 dans un sous-dossier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel nom-du-site\ncd nom-du-site\ncomposer update\nnpm install\nphp artisan key:generate\n")),(0,r.kt)("h3",{id:"configuration-du-env"},"Configuration du .env"),(0,r.kt)("p",null,"Il faut ensuite \xe9diter le ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \xe0 la racine, pour qu'il ressemble \xe0 \xe7a :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/.env"',title:'"/.env"'},"APP_NAME=\"Mon Site\"\nAPP_ENV=local\nAPP_KEY=base64:M5qwgNN9c3kAR3aoQkCKwKzLb/oZbbtub2HNvcvlJpc=\nAPP_DEBUG=true\nAPP_URL=http://mon-site.local\n\n# NOVA_AUTHORIZED_EMAILS=\"mon-email@gmail.com, deuxieme-email@gmail.com\" # Modifier app/Providers/NovaServiceProvider.php dans la fonction gate() pour ajouter :\n# protected function gate() {\n#        Gate::define('viewNova', function ($user) {\n#            $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'romain.cherot@gmail.com, hodeeemilien@gmail.com');\n#            $authorized_emails = explode(',', $authorized_emails_str);\n#            $authorized_emails = array_map('trim', $authorized_emails);\n#            return in_array($user->email, $authorized_emails);\n#        });\n#    }\n\n# SENDINBLUE_KEY=\"xkeysib-A_COMPLETER\"\n# SENDINBLUE_FROM_ADDRESS=\"contact@mon-site.com\"\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=monsite\nDB_USERNAME=root\nDB_PASSWORD=\"motdepasseDB\"\n\n\n## REDIS - Used for Cache and Sessions (available on Forge)\n## Comment if no redis available on your server\n\n# CACHE_DRIVER=redis\n# SESSION_DRIVER=redis\n# SESSION_LIFETIME=1440 # 1 jour en minutes\n\n# REDIS_HOST=127.0.0.1\n# REDIS_PASSWORD=null\n# REDIS_PORT=6379\n\n# FILESYSTEM_DISK=local\n\n")),(0,r.kt)("h2",{id:"d\xe9marrage-du-serveur-local"},"D\xe9marrage du serveur local"),(0,r.kt)("p",null,"On peut ex\xe9cuter Laravel via PHP (Wamp avec un VirtualHost et une ligne dans le fichier Hosts de Widnows, par exemple), ou via le serveur int\xe9gr\xe9 (basique, mais pratique pour d\xe9panner) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan serve\n")),(0,r.kt)("p",null,"Pour les assets et le live reload, lancer Vite.js :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")))}m.isMDXComponent=!0}}]);