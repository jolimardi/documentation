"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2286],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(8168),n=(r(6540),r(5680));const l={},o="Max-widths",i={unversionedId:"Layout/max-widths",id:"Layout/max-widths",title:"Max-widths",description:"Ces classes CSS permettent de contr\xf4ler la largeur maximale des \xe9l\xe9ments.",source:"@site/docs/Layout/max-widths.md",sourceDirName:"Layout",slug:"/Layout/max-widths",permalink:"/documentation/docs/Layout/max-widths",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Layout/max-widths.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sections",permalink:"/documentation/docs/Layout/sections"},next:{title:"Topbar",permalink:"/documentation/docs/Layout/topbar"}},s={},c=[{value:"Classe de base",id:"classe-de-base",level:2},{value:"D\xe9tails",id:"d\xe9tails",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"max-widths"},"Max-widths"),(0,n.yg)("p",null,"Ces classes CSS permettent de contr\xf4ler la largeur maximale des \xe9l\xe9ments."),(0,n.yg)("h2",{id:"classe-de-base"},"Classe de base"),(0,n.yg)("p",null,"La classe ",(0,n.yg)("inlineCode",{parentName:"p"},".max-width")," d\xe9fini une largeur maximale pour un \xe9l\xe9ment."),(0,n.yg)("div",{className:"html-preview"},(0,n.yg)("div",{className:"max-width",style:{background:"lightblue"}},(0,n.yg)("p",null,"Max-width")),(0,n.yg)("div",{className:"max-width-small",style:{background:"lightblue"}},(0,n.yg)("p",null,"Max-width-small"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="max-width">\n    <p>Ce texte est contenu dans une div avec une largeur maximale.</p>\n</div>\n')),(0,n.yg)("h3",{id:"d\xe9tails"},"D\xe9tails"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-css"},":root{\n    --max-width: 95ch;\n    --max-width-small: 78ch;\n    --max-width-large: 130ch;\n}\n")))}m.isMDXComponent=!0}}]);