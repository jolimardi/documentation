"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6910],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(b,l(l({ref:n},u),{},{components:t})):a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const o={title:"Ajouter Blade-icons"},l=void 0,c={unversionedId:"laravel/Features/blade-icons",id:"laravel/Features/blade-icons",title:"Ajouter Blade-icons",description:"Blade icons avec coolicons",source:"@site/docs/laravel/Features/blade-icons.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/blade-icons",permalink:"/documentation/docs/laravel/Features/blade-icons",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/blade-icons.md",tags:[],version:"current",frontMatter:{title:"Ajouter Blade-icons"},sidebar:"laravelSidebar",previous:{title:"Ajouter Fancybox",permalink:"/documentation/docs/laravel/Features/fancybox"},next:{title:"Ajouter des form-component",permalink:"/documentation/docs/laravel/Features/laravel-form-components"}},i={},s=[{value:"Blade icons avec coolicons",id:"blade-icons-avec-coolicons",level:2},{value:"Config de base",id:"config-de-base",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"blade-icons-avec-coolicons"},"Blade icons avec coolicons"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Nom des packages :")," blade-ui-kit/blade-icons - codeat3/blade-coolicons"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"composer require blade-ui-kit/blade-icons\n\nphp artisan vendor:publish --tag=blade-icons\n")),(0,r.yg)("p",null,"Et "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"composer require codeat3/blade-coolicons\n\nphp artisan vendor:publish --tag=blade-coolicons-config\n")),(0,r.yg)("h2",{id:"config-de-base"},"Config de base"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="/config/blade-icons.php"',title:'"/config/blade-icons.php"'},"<?php\n\nreturn [\n    'sets' => [\n        'default' => [\n            'path' => 'resources/icons',\n            'prefix' => '',\n        ],\n        // Coolicon est automatiquement dispo en plus de default s'il est install\xe9\n    ],\n\n    // Global Default Classes - applied to all icons by default\n    'class' => 'icon',\n\n    'attributes' => [\n        'width' => 24,\n        'height' => 24,\n    ],\n\n    'components' => [\n        // Disable the component, only use directive @svg(...) -> perf boost\n        'disabled' => true,\n    ],\n];\n")),(0,r.yg)("p",null,"Permet l'utilisation de la directive ",(0,r.yg)("inlineCode",{parentName:"p"},"@svg('icon-name')"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Retrouver tout les nom d'ic\xf4ne sur la page ",(0,r.yg)("a",{parentName:"p",href:"https://blade-ui-kit.com/blade-icons?set=53"},"Blade-icons"))))}d.isMDXComponent=!0}}]);