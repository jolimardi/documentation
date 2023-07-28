"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Topbar",l={unversionedId:"Layout/topbar",id:"Layout/topbar",title:"Topbar",description:"Les classes CSS suivantes vous aident \xe0 cr\xe9er une barre de navigation.",source:"@site/docs/Layout/topbar.md",sourceDirName:"Layout",slug:"/Layout/topbar",permalink:"/documentation/docs/Layout/topbar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Layout/topbar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Max-widths",permalink:"/documentation/docs/Layout/max-widths"},next:{title:"Menu",permalink:"/documentation/docs/Layout/menu-submenu"}},c={},s=[{value:"Barre de navigation principale",id:"barre-de-navigation-principale",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topbar"},"Topbar"),(0,a.kt)("p",null,"Les classes CSS suivantes vous aident \xe0 cr\xe9er une barre de navigation."),(0,a.kt)("h2",{id:"barre-de-navigation-principale"},"Barre de navigation principale"),(0,a.kt)("p",null,"La classe ",(0,a.kt)("inlineCode",{parentName:"p"},"topbar")," d\xe9finit le style de base pour la barre de navigation principale de votre application. Position: fixed par d\xe9faut. "),(0,a.kt)("div",{className:"html-preview"},(0,a.kt)("div",{className:"topbar",style:{position:"initial"}},(0,a.kt)("div",{className:"max-width"},(0,a.kt)("a",{href:"#",className:"logo"},(0,a.kt)("img",{src:"https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",alt:"Logo"})),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Accueil"),(0,a.kt)("li",null,"Contact"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="topbar">\n    <div class="max-width">\n        <a href="#" class="logo">\n            <img src="logo.png" alt="Logo" />\n        </a>\n        <ul>\n            <li>Accueil</li>\n            <li>Contact</li>\n        </ul>\n    </div>\n</div>\n')))}d.isMDXComponent=!0}}]);