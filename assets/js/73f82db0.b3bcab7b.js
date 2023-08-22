"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6151],{3905:(e,a,l)=>{l.d(a,{Zo:()=>s,kt:()=>v});var r=l(7294);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function n(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?n(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function i(e,a){if(null==e)return{};var l,r,t=function(e,a){if(null==e)return{};var l,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var u=r.createContext({}),c=function(e){var a=r.useContext(u),l=a;return e&&(l="function"==typeof e?e(a):o(o({},a),e)),l},s=function(e){var a=c(e.components);return r.createElement(u.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var l=e.components,t=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(l),m=t,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return l?r.createElement(v,o(o({ref:a},s),{},{components:l})):r.createElement(v,o({ref:a},s))}));function v(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=l.length,o=new Array(n);o[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:t,o[1]=i;for(var c=2;c<n;c++)o[c]=l[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},6589:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=l(7462),t=(l(7294),l(3905));const n={id:"package-laravel",title:"Installation de Laravel et Ajout de Packages",sidebar_label:"Packages (commandes)"},o="Cr\xe9ation d'un Nouveau Projet Laravel",i={unversionedId:"laravel/Installation/package-laravel",id:"laravel/Installation/package-laravel",title:"Installation de Laravel et Ajout de Packages",description:"Ce fichier fournit les commandes d'installation d'un nouveau projet Laravel et d'y ajouter divers packages gr\xe2ce \xe0 l'\xe9x\xe9cution dans votre terminal.",source:"@site/docs/laravel/Installation/Package-laravel.md",sourceDirName:"laravel/Installation",slug:"/laravel/Installation/package-laravel",permalink:"/documentation/docs/laravel/Installation/package-laravel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/Package-laravel.md",tags:[],version:"current",frontMatter:{id:"package-laravel",title:"Installation de Laravel et Ajout de Packages",sidebar_label:"Packages (commandes)"},sidebar:"laravelSidebar",previous:{title:"Step by step",permalink:"/documentation/docs/laravel/Installation/Setup"},next:{title:"Configuration",permalink:"/documentation/docs/laravel/Installation/Configuration"}},u={},c=[{value:"benjacho/belongs-to-many-field",id:"benjachobelongs-to-many-field",level:3},{value:"blade-ui-kit/blade-icons",id:"blade-ui-kitblade-icons",level:3},{value:"codeat3/blade-coolicons",id:"codeat3blade-coolicons",level:3},{value:"coderello/laravel-nova-lang",id:"coderellolaravel-nova-lang",level:3},{value:"ebess/advanced-nova-media-library",id:"ebessadvanced-nova-media-library",level:3},{value:"guzzlehttp/guzzle",id:"guzzlehttpguzzle",level:3},{value:"jolimardi/laravel-menu",id:"jolimardilaravel-menu",level:3},{value:"laravel/framework",id:"laravelframework",level:3},{value:"laravel/nova",id:"laravelnova",level:3},{value:"laravel/sanctum",id:"laravelsanctum",level:3},{value:"laravel/tinker",id:"laraveltinker",level:3},{value:"m-a-k-o/youtube-field",id:"m-a-k-oyoutube-field",level:3},{value:"mostafaznv/nova-ckeditor",id:"mostafaznvnova-ckeditor",level:3},{value:"jolimardi/laravel-mysections",id:"jolimardilaravel-mysections",level:3},{value:"barryvdh/laravel-debugbar",id:"barryvdhlaravel-debugbar",level:3},{value:"fakerphp/faker",id:"fakerphpfaker",level:3},{value:"laravel/pint",id:"laravelpint",level:3},{value:"laravel/sail",id:"laravelsail",level:3},{value:"mockery/mockery",id:"mockerymockery",level:3},{value:"nunomaduro/collision",id:"nunomadurocollision",level:3},{value:"phpunit/phpunit",id:"phpunitphpunit",level:3},{value:"spatie/laravel-ignition",id:"spatielaravel-ignition",level:3}],s={toc:c},p="wrapper";function d(e){let{components:a,...l}=e;return(0,t.kt)(p,(0,r.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"cr\xe9ation-dun-nouveau-projet-laravel"},"Cr\xe9ation d'un Nouveau Projet Laravel"),(0,t.kt)("p",null,"Ce fichier fournit les commandes d'installation d'un nouveau projet Laravel et d'y ajouter divers packages gr\xe2ce \xe0 l'\xe9x\xe9cution dans votre terminal."),(0,t.kt)("p",null,"Vous pouvez cr\xe9er un nouveau projet Laravel \xe0 l'aide de la ligne de commande suivante :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel nom-du-projet\n")),(0,t.kt)("p",null,'Remplacez "nom-du-projet" par le nom que vous voulez donner \xe0 votre projet.'),(0,t.kt)("admonition",{type:"tip"},(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre"},"Ce fichier permet de retrouver tout les commande d'installation \ndes packages composant la stack de d\xe9veloppement Jolimardi\n"))),(0,t.kt)("p",null,"Retrouvez comment utilisez chaque packages ",(0,t.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/laravel/Installation/Utilisation"},"sur la page d'utilisation")),(0,t.kt)("h1",{id:"ajout-de-packages"},"Ajout de Packages"),(0,t.kt)("h3",{id:"benjachobelongs-to-many-field"},"benjacho/belongs-to-many-field"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require benjacho/belongs-to-many-field\n")),(0,t.kt)("h3",{id:"blade-ui-kitblade-icons"},"blade-ui-kit/blade-icons"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require blade-ui-kit/blade-icons\n")),(0,t.kt)("h3",{id:"codeat3blade-coolicons"},"codeat3/blade-coolicons"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require codeat3/blade-coolicons\n")),(0,t.kt)("h3",{id:"coderellolaravel-nova-lang"},"coderello/laravel-nova-lang"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require coderello/laravel-nova-lang\n")),(0,t.kt)("h3",{id:"ebessadvanced-nova-media-library"},"ebess/advanced-nova-media-library"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require ebess/advanced-nova-media-library\n")),(0,t.kt)("h3",{id:"guzzlehttpguzzle"},"guzzlehttp/guzzle"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require guzzlehttp/guzzle\n")),(0,t.kt)("h3",{id:"jolimardilaravel-menu"},"jolimardi/laravel-menu"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require jolimardi/laravel-menu\n")),(0,t.kt)("h3",{id:"laravelframework"},"laravel/framework"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/framework\n")),(0,t.kt)("h3",{id:"laravelnova"},"laravel/nova"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/nova\n")),(0,t.kt)("h3",{id:"laravelsanctum"},"laravel/sanctum"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/sanctum\n")),(0,t.kt)("h3",{id:"laraveltinker"},"laravel/tinker"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/tinker\n")),(0,t.kt)("h3",{id:"m-a-k-oyoutube-field"},"m-a-k-o/youtube-field"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require m-a-k-o/youtube-field\n")),(0,t.kt)("h3",{id:"mostafaznvnova-ckeditor"},"mostafaznv/nova-ckeditor"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require mostafaznv/nova-ckeditor\n")),(0,t.kt)("h3",{id:"jolimardilaravel-mysections"},"jolimardi/laravel-mysections"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require jolimardi/laravel-mysections\n")),(0,t.kt)("h3",{id:"barryvdhlaravel-debugbar"},"barryvdh/laravel-debugbar"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require barryvdh/laravel-debugbar\n")),(0,t.kt)("h3",{id:"fakerphpfaker"},"fakerphp/faker"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require fakerphp/faker\n")),(0,t.kt)("h3",{id:"laravelpint"},"laravel/pint"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/pint\n")),(0,t.kt)("h3",{id:"laravelsail"},"laravel/sail"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require laravel/sail\n")),(0,t.kt)("h3",{id:"mockerymockery"},"mockery/mockery"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require mockery/mockery\n")),(0,t.kt)("h3",{id:"nunomadurocollision"},"nunomaduro/collision"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require nunomaduro/collision\n")),(0,t.kt)("h3",{id:"phpunitphpunit"},"phpunit/phpunit"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require phpunit/phpunit\n")),(0,t.kt)("h3",{id:"spatielaravel-ignition"},"spatie/laravel-ignition"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"composer require spatie/laravel-ignition\n")))}d.isMDXComponent=!0}}]);