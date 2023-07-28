"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>v});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=s,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(v,l(l({ref:t},o),{},{components:r})):a.createElement(v,l({ref:t},o))}));function v(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=r(7462),s=(r(7294),r(3905));const n={},l="Card",i={unversionedId:"Components/card",id:"Components/card",title:"Card",description:"Ces classes CSS sont utilis\xe9es pour cr\xe9er des mises en page de cartes et de listes.",source:"@site/docs/Components/card.md",sourceDirName:"Components",slug:"/Components/card",permalink:"/docs/Components/card",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/card.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"badge",permalink:"/docs/Components/badge"},next:{title:"dropdowns-selectize",permalink:"/docs/Components/dropdowns-selectize"}},c={},d=[{value:"Classe Listing",id:"classe-listing",level:2},{value:"Classes de Grilles Suppl\xe9mentaires",id:"classes-de-grilles-suppl\xe9mentaires",level:2},{value:"Classe Card",id:"classe-card",level:2}],o={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"card"},"Card"),(0,s.kt)("p",null,"Ces classes CSS sont utilis\xe9es pour cr\xe9er des mises en page de cartes et de listes."),(0,s.kt)("h2",{id:"classe-listing"},"Classe Listing"),(0,s.kt)("p",null,"La classe .listing est utilis\xe9e pour organiser les \xe9l\xe9ments en grille. Par d\xe9faut, elle cr\xe9e une grille de trois colonnes."),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("div",{className:"listing"},(0,s.kt)("div",{className:"card"},"Carte 1"),(0,s.kt)("div",{className:"card"},"Carte 2"),(0,s.kt)("div",{className:"card"},"Carte 3"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="listing">\n    <div class="card">Carte 1</div>\n    <div class="card">Carte 2</div>\n    <div class="card">Carte 3</div>\n</div>\n')),(0,s.kt)("h2",{id:"classes-de-grilles-suppl\xe9mentaires"},"Classes de Grilles Suppl\xe9mentaires"),(0,s.kt)("p",null,"Deux autres classes, .listing-4 et .listing-2, sont utilis\xe9es pour cr\xe9er des grilles de quatre et deux colonnes respectivement."),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("div",{className:"listing listing-4"},(0,s.kt)("div",{className:"card"},"Carte 1"),(0,s.kt)("div",{className:"card"},"Carte 2"),(0,s.kt)("div",{className:"card"},"Carte 3"),(0,s.kt)("div",{className:"card"},"Carte 4"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="listing listing-4">\n    <div class="card">Carte 1</div>\n    <div class="card">Carte 2</div>\n    <div class="card">Carte 3</div>\n    <div class="card">Carte 4</div>\n</div>\n')),(0,s.kt)("h2",{id:"classe-card"},"Classe Card"),(0,s.kt)("p",null,"La classe .card est utilis\xe9e pour cr\xe9er une carte avec une ombre, un arrondi et un fond blanc."),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("div",{className:"listing listing-2"},(0,s.kt)("div",{className:"card"},(0,s.kt)("div",{className:"card-body"},(0,s.kt)("div",{className:"title"},"Titre de la Carte"),(0,s.kt)("p",null,"Contenu de la carte..."))),(0,s.kt)("div",{className:"card"},(0,s.kt)("div",{className:"card-body"},(0,s.kt)("div",{className:"title"},"Titre de la Carte"),(0,s.kt)("p",null,"Contenu de la carte..."))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="card">\n    <div class="listing listing-2">\n        <div class="card">\n            <div class="card-body">\n                <div class="title">Titre de la Carte</div>\n                <p>Contenu de la carte...</p>\n            </div>\n        </div>\n        <div class="card">\n            <div class="card-body">\n                <div class="title">Titre de la Carte</div>\n                <p>Contenu de la carte...</p>\n            </div>\n        </div>\n    </div>\n</div>\n')))}u.isMDXComponent=!0}}]);