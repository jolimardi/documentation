"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Ajouter Jquery"},s="Installation de Jquery",u={unversionedId:"laravel/Features/jquery",id:"laravel/Features/jquery",title:"Ajouter Jquery",description:"Puis ajouter dans le fichier ci-dessous :",source:"@site/docs/laravel/Features/jquery.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/jquery",permalink:"/documentation/docs/laravel/Features/jquery",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/jquery.md",tags:[],version:"current",frontMatter:{title:"Ajouter Jquery"},sidebar:"laravelSidebar",previous:{title:"Pr\xe9parer web.php",permalink:"/documentation/docs/laravel/Features/web-php"},next:{title:"Ajouter Nova + helpers",permalink:"/documentation/docs/laravel/Features/nova"}},i={},l=[],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-de-jquery"},"Installation de Jquery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install jquery --save-dev\n")),(0,a.kt)("p",null,"Puis ajouter dans le fichier ci-dessous :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ressources/js/bootstrap.js"',title:'"ressources/js/bootstrap.js"'},"import axios from 'axios';\nwindow.axios = axios;\n\nwindow.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n\n// highlight-start\n/* -------   jQuery   ------- */\n// npm install jquery --save-dev\nimport $ from 'jquery';\nwindow.$ = $;\n// highlight-end\n")))}d.isMDXComponent=!0}}]);