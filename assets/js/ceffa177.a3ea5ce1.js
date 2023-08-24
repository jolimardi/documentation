"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[246],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var o=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,s=function(t,e){if(null==t)return{};var n,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=o.createContext({}),u=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},c="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=s,d=c["".concat(i,".").concat(m)]||c[m]||b[m]||a;return n?o.createElement(d,r(r({ref:e},p),{},{components:n})):o.createElement(d,r({ref:e},p))}));function d(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[c]="string"==typeof t?t:s,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9732:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),s=(n(7294),n(3905));const a={},r="Boutons",l={unversionedId:"Components/boutons",id:"Components/boutons",title:"Boutons",description:"Ces classes CSS sont utilis\xe9es pour la mise en page et le style des boutons.",source:"@site/docs/Components/boutons.md",sourceDirName:"Components",slug:"/Components/boutons",permalink:"/documentation/docs/Components/boutons",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/boutons.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flash-messages",permalink:"/documentation/docs/Components/flash-messages"},next:{title:"Icons",permalink:"/documentation/docs/Components/icones"}},i={},u=[{value:"Classe Btn",id:"classe-btn",level:2},{value:"Classes de Boutons Suppl\xe9mentaires",id:"classes-de-boutons-suppl\xe9mentaires",level:3},{value:"Classe Btns",id:"classe-btns",level:2}],p={toc:u},c="wrapper";function b(t){let{components:e,...n}=t;return(0,s.kt)(c,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"boutons"},"Boutons"),(0,s.kt)("p",null,"Ces classes CSS sont utilis\xe9es pour la mise en page et le style des boutons."),(0,s.kt)("h2",{id:"classe-btn"},"Classe Btn"),(0,s.kt)("p",null,"La classe .btn est la classe de base pour les boutons. Elle d\xe9finit les propri\xe9t\xe9s de base pour tous les boutons, comme le padding, la taille..."),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("button",{className:"btn"},"Bouton")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <button class="btn">Bouton</button>\n')),(0,s.kt)("h3",{id:"classes-de-boutons-suppl\xe9mentaires"},"Classes de Boutons Suppl\xe9mentaires"),(0,s.kt)("p",null,"En plus de la classe .btn, nous avons des classes suppl\xe9mentaires qui peuvent \xeatre utilis\xe9es pour appliquer diff\xe9rents styles aux boutons."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},".btn-primary")," : Ce style de bouton est g\xe9n\xe9ralement utilis\xe9 pour les actions principales sur la page.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},".btn-secondary")," : Ce style de bouton est g\xe9n\xe9ralement utilis\xe9 pour les actions secondaires sur la page.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},".btn-gradient")," : Ce style de bouton a un gradient lin\xe9aire en tant qu'arri\xe8re-plan."))),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("button",{className:"btn btn-primary"},"Bouton Principal"),(0,s.kt)("button",{className:"btn btn-secondary"},"Bouton Secondaire"),(0,s.kt)("button",{className:"btn btn-gradient"},"Bouton Gradient"),(0,s.kt)("p",null),(0,s.kt)("button",{className:"btn btn-large btn-gradient"},"Bouton Large")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <button class="btn btn-primary">Bouton Principal</button>\n    <button class="btn btn-secondary">Bouton Secondaire</button>\n    <button class="btn btn-gradient">Bouton Gradient</button>\n    <button className="btn btn-large btn-gradient">Bouton Large</button>\n')),(0,s.kt)("h2",{id:"classe-btns"},"Classe Btns"),(0,s.kt)("p",null,"La classe .btns est utilis\xe9e pour g\xe9rer la disposition des groupes de boutons. Elle d\xe9finit un margin-top, et organise les boutons en flexbox."),(0,s.kt)("div",{className:"html-preview"},(0,s.kt)("div",{className:"btns"},(0,s.kt)("button",{className:"btn btn-primary"},"Bouton Principal"),(0,s.kt)("button",{className:"btn btn-secondary"},"Bouton Secondaire"),(0,s.kt)("button",{className:"btn btn-gradient"},"Bouton Gradient"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="btns">\n    <button class="btn btn-primary">Bouton Principal</button>\n    <button class="btn btn-secondary">Bouton Secondaire</button>\n    <button class="btn btn-gradient">Bouton Gradient</button>\n</div>\n')))}b.isMDXComponent=!0}}]);