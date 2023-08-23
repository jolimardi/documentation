"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(v,i(i({ref:t},u),{},{components:a})):r.createElement(v,i({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Laravel Nova"},i=void 0,l={unversionedId:"laravel/Installation/StepByStep/laravel-nova",id:"laravel/Installation/StepByStep/laravel-nova",title:"Laravel Nova",description:"Il faut d'abord ajouter le repo priv\xe9 et ses credentials :",source:"@site/docs/laravel/Installation/StepByStep/laravel-nova.md",sourceDirName:"laravel/Installation/StepByStep",slug:"/laravel/Installation/StepByStep/laravel-nova",permalink:"/documentation/docs/laravel/Installation/StepByStep/laravel-nova",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/StepByStep/laravel-nova.md",tags:[],version:"current",frontMatter:{title:"Laravel Nova"},sidebar:"laravelSidebar",previous:{title:"JQuery, FancyBox...",permalink:"/documentation/docs/laravel/Installation/StepByStep/jquery-et-plugins"},next:{title:"Routes et Base Controller",permalink:"/documentation/docs/laravel/Installation/StepByStep/route-controller"}},s={},p=[{value:"Il faut d&#39;abord ajouter le repo priv\xe9 et ses credentials :",id:"il-faut-dabord-ajouter-le-repo-priv\xe9-et-ses-credentials-",level:2},{value:"Ensuite, installer Nova",id:"ensuite-installer-nova",level:2},{value:"Ajouter le premier utilisateur",id:"ajouter-le-premier-utilisateur",level:2},{value:"Important, ajouter les emails autoris\xe9s",id:"important-ajouter-les-emails-autoris\xe9s",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"il-faut-dabord-ajouter-le-repo-priv\xe9-et-ses-credentials-"},"Il faut d'abord ajouter le repo priv\xe9 et ses credentials :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"composer config repositories.nova composer https://nova.laravel.com\n")),(0,n.kt)("p",null,"Puis entrer ses credentials pour ne pas avoir \xe0 les entrer \xe0 chaque fois (adresse mail et cl\xe9 d'api), cette commande va ajouter auth.json \xe0 la racine avec les credentials (ne pas versionner ce fichier)."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Il ne faut pas versionner ce fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"auth.json")," sur Git, il contient la cl\xe9 d'api.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY\n")),(0,n.kt)("h2",{id:"ensuite-installer-nova"},"Ensuite, installer Nova"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Assurez-vous d'avoir les bonnes infos de connexion \xe0 la base de donn\xe9es dans le fichier .env avant le ",(0,n.kt)("inlineCode",{parentName:"p"},"migrate"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/nova\nphp artisan nova:install\nphp artisan migrate\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"}," Certaines configuration de database peuvent sortir une erreur ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLSTATE[42000]: Syntax error or access violation: 1071 La cl\xe9 est trop longue.")," Dans ce cas, ajouter dans ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Service/AppServiceProvider.php")," la ligne suivante dans la fonction boot :"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Service/AppServiceProvider.php"',title:'"/app/Service/AppServiceProvider.php"'},"public function boot(): void {\n    Schema::defaultStringLength(191);\n}\n"))),(0,n.kt)("h2",{id:"ajouter-le-premier-utilisateur"},"Ajouter le premier utilisateur"),(0,n.kt)("p",null,"Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (",(0,n.kt)("inlineCode",{parentName:"p"},"http://mon-url.com/nova"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan nova:user\n")),(0,n.kt)("p",null,"Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour cr\xe9er l'utilisateur)."),(0,n.kt)("h2",{id:"important-ajouter-les-emails-autoris\xe9s"},"Important, ajouter les emails autoris\xe9s"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Nova ne v\xe9rifie pas les adresses mail en environnement local, mais le fera en prod (risque de bug lors du passage en prod, difficile \xe0 d\xe9bugguer si pas pris en compte d\xe8s le d\xe9part)."),(0,n.kt)("p",{parentName:"admonition"},"Lorsque l'on n'est plus en environnement ",(0,n.kt)("inlineCode",{parentName:"p"},"local"),", Nova v\xe9rifie les adresses mail autoris\xe9es, en plus des Nova Users cr\xe9\xe9s. Pour cela, il faut ajouter les emails autoris\xe9s dans ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Providers/NovaServiceProvider.php"),", dans la fonction ",(0,n.kt)("inlineCode",{parentName:"p"},"gate()"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Service/NovaServiceProvider.php"',title:'"/app/Service/NovaServiceProvider.php"'},"protected function gate(){\n    Gate::define('viewNova', function ($user) {\n        $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'mon-email@gmail.com, deuxieme-email@gmail.com');\n        $authorized_emails = explode(',', $authorized_emails_str);\n        $authorized_emails = array_map('trim', $authorized_emails);\n        return in_array($user->email, $authorized_emails);\n    });\n}\n")),(0,n.kt)("p",null,"et en ajoutant dans le ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:'language-title="/.env"'},"NOVA_AUTHORIZED_EMAILS='mon-email@gmail.com, deuxieme-email@gmail.com'\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pour plus de d\xe9tails sur Laravel nova, retrouvez la documentation officielle ici : ",(0,n.kt)("a",{parentName:"strong",href:"https://nova.laravel.com/docs/4.0/installation.html"},"https://nova.laravel.com/docs/4.0/installation.html"))))}m.isMDXComponent=!0}}]);