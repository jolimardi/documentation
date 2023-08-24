"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Jolimardi/Laravel-menu"},l=void 0,i={unversionedId:"laravel/Features/jm-menu",id:"laravel/Features/jm-menu",title:"Jolimardi/Laravel-menu",description:"Menu",source:"@site/docs/laravel/Features/jm-menu.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/jm-menu",permalink:"/documentation/docs/laravel/Features/jm-menu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/jm-menu.md",tags:[],version:"current",frontMatter:{title:"Jolimardi/Laravel-menu"},sidebar:"laravelSidebar",previous:{title:"Ajouter Nova + helpers",permalink:"/documentation/docs/laravel/Features/nova"},next:{title:"Jolimardi/Laravel-sections",permalink:"/documentation/docs/laravel/Features/jm-sections"}},u={},c=[{value:"Menu",id:"menu",level:3}],s={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"menu"},"Menu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require jolimardi/laravel-menu\n")),(0,a.kt)("p",null,"Puis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="JoliMardi\\Menu\\MenuServiceProvider"\n')),(0,a.kt)("p",null,"Ajouter le component ",(0,a.kt)("inlineCode",{parentName:"p"},"<x-menu/>")," dans un template blade, l\xe0 o\xf9 vous voulez afficher le menu.\nModifier ",(0,a.kt)("inlineCode",{parentName:"p"},"config/menu.yml")," pour ajouter des routes au composant."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Attention, les routes (les cl\xe9s dans le yaml) doivent exister dans les routes Laravel. ")),(0,a.kt)("p",null,"Plus d'information sur la documentation du package : ",(0,a.kt)("a",{parentName:"p",href:"https://packagist.org/packages/jolimardi/laravel-menu"},"https://packagist.org/packages/jolimardi/laravel-menu")))}m.isMDXComponent=!0}}]);