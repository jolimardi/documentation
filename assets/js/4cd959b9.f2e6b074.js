"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8828],{5680:(e,l,n)=>{n.d(l,{xA:()=>o,yg:()=>p});var t=n(6540);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function i(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?i(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function s(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),c=function(e){var l=t.useContext(d),n=l;return e&&(n="function"==typeof e?e(l):a(a({},l),e)),n},o=function(e){var l=c(e.components);return t.createElement(d.Provider,{value:l},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},g=t.forwardRef((function(e,l){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=r,p=f["".concat(d,".").concat(g)]||f[g]||m[g]||i;return n?t.createElement(p,a(a({ref:l},o),{},{components:n})):t.createElement(p,a({ref:l},o))}));function p(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var d in l)hasOwnProperty.call(l,d)&&(s[d]=l[d]);s.originalType=e,s[f]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8409:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(8168),r=(n(6540),n(5680));const i={},a="Flex",s={unversionedId:"Helpers/flex-et-inline-flex",id:"Helpers/flex-et-inline-flex",title:"Flex",description:"Les classes CSS suivantes sont utilis\xe9es pour configurer les propri\xe9t\xe9s flex.",source:"@site/docs/Helpers/flex-et-inline-flex.md",sourceDirName:"Helpers",slug:"/Helpers/flex-et-inline-flex",permalink:"/documentation/docs/Helpers/flex-et-inline-flex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Helpers/flex-et-inline-flex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spacing",permalink:"/documentation/docs/Helpers/spacing"},next:{title:"Text",permalink:"/documentation/docs/Helpers/text"}},d={},c=[{value:"Centrer les \xe9l\xe9ments",id:"centrer-les-\xe9l\xe9ments",level:2},{value:"Direction des \xe9l\xe9ments flex",id:"direction-des-\xe9l\xe9ments-flex",level:2},{value:"Alignement et justification des \xe9l\xe9ments flex",id:"alignement-et-justification-des-\xe9l\xe9ments-flex",level:2},{value:"Affichage",id:"affichage",level:2},{value:"Propri\xe9t\xe9s suppl\xe9mentaires",id:"propri\xe9t\xe9s-suppl\xe9mentaires",level:2},{value:"Liste d&#39;alternatives",id:"liste-dalternatives",level:3}],o={toc:c},f="wrapper";function m(e){let{components:l,...n}=e;return(0,r.yg)(f,(0,t.A)({},o,n,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"flex"},"Flex"),(0,r.yg)("p",null,"Les classes CSS suivantes sont utilis\xe9es pour configurer les propri\xe9t\xe9s flex."),(0,r.yg)("h2",{id:"centrer-les-\xe9l\xe9ments"},"Centrer les \xe9l\xe9ments"),(0,r.yg)("div",{className:"html-preview"},(0,r.yg)("div",{className:"flex-center flex-border"},(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 1"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 2"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 3"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="flex-center">\n  <div>\xc9l\xe9ment 1</div>\n  <div>\xc9l\xe9ment 2</div>\n  <div>\xc9l\xe9ment 3</div>\n</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"title='CSS'",title:"'CSS'"},".flex-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n")),(0,r.yg)("h2",{id:"direction-des-\xe9l\xe9ments-flex"},"Direction des \xe9l\xe9ments flex"),(0,r.yg)("div",{className:"html-preview"},(0,r.yg)("div",{className:"flex flex-row flex-border"},(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 1"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 2")),(0,r.yg)("div",{className:"flex flex-row-reverse flex-border"},(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 1"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 2")),(0,r.yg)("div",{className:"flex flex-column flex-border"},(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 1"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 2")),(0,r.yg)("div",{className:"flex flex-column-reverse flex-border"},(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 1"),(0,r.yg)("div",{className:"flex-border"},"\xc9l\xe9ment 2"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <div class="flex flex-row">\xc9l\xe9ment en flex row</div>\n    <div class="flex flex-row-reverse">\xc9l\xe9ment en flex row reverse</div>\n    <div class="flex flex-column">\xc9l\xe9ment en flex column</div>\n    <div class="flex flex-column-reverse">\xc9l\xe9ment en flex column reverse</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"title='CSS'",title:"'CSS'"},".flex {\n  display: flex !important;\n}\n.flex-row-reverse {\n    flex-direction: row-reverse;\n}\n.flex-row {\n    flex-direction: row;\n}\n.flex-column-reverse {\n    flex-direction: column-reverse;\n}\n.flex-column {\n    flex-direction: column;\n}\n")),(0,r.yg)("h2",{id:"alignement-et-justification-des-\xe9l\xe9ments-flex"},"Alignement et justification des \xe9l\xe9ments flex"),(0,r.yg)("div",{className:"html-preview"},(0,r.yg)("div",{className:"flex justify-center align-center flex-border"},(0,r.yg)("div",{className:"flex-border"},"Centre"),(0,r.yg)("div",{className:"flex-border"},"Centre")),(0,r.yg)("div",{className:"flex justify-start align-start flex-border"},(0,r.yg)("div",{className:"flex-border"},"D\xe9but"),(0,r.yg)("div",{className:"flex-border"},"D\xe9but")),(0,r.yg)("div",{className:"flex justify-end align-end flex-border"},(0,r.yg)("div",{className:"flex-border"},"Fin"),(0,r.yg)("div",{className:"flex-border"},"Fin")),(0,r.yg)("div",{className:"flex justify-stretch align-stretch flex-border",style:{height:"200px"}},(0,r.yg)("div",{className:"flex-border"},"\xc9tir\xe9"),(0,r.yg)("div",{className:"flex-border"},"\xc9tir\xe9"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <div class="flex justify-center align-center">\n        <div>Centre</div>\n        <div>Centre</div>\n    </div>\n    <div class="flex justify-start align-start">\n        <div>D\xe9but</div>\n        <div>D\xe9but</div>\n    </div>\n    <div class="flex justify-end align-end">\n        <div>Fin</div>\n        <div>Fin</div>\n    </div>\n    <div class="flex justify-stretch align-stretch">\n        <div>\xc9tir\xe9</div>\n        <div>\xc9tir\xe9</div>\n    </div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"title='CSS'",title:"'CSS'"},".justify-center {\n    justify-content: center;\n}\n.justify-start {\n    justify-content: start;\n}\n.justify-end {\n    justify-content: flex-end;\n}\n.justify-stretch {\n    justify-content: stretch;\n}\n.align-center {\n    align-items: center;\n}\n.align-start {\n    align-items: start;\n}\n.align-end {\n    align-items: flex-end;\n}\n.stretch, .align-stretch {\n    align-items: stretch;\n}\n")),(0,r.yg)("h2",{id:"affichage"},"Affichage"),(0,r.yg)("div",{className:"html-preview"},(0,r.yg)("div",{className:"flex flex-border"},"\xc9l\xe9ment flex"),(0,r.yg)("div",{className:"inline flex-border"},"\xc9l\xe9ment inline"),(0,r.yg)("div",{className:"inline-block flex-border"},"\xc9l\xe9ment inline-block"),(0,r.yg)("div",{className:"inline-flex flex-border"},"\xc9l\xe9ment inline-flex"),(0,r.yg)("div",{className:"block flex-border"},"\xc9l\xe9ment block")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <div class="flex">\xc9l\xe9ment en flex</div>\n    <div class="inline">\xc9l\xe9ment inline</div>\n    <div class="inline-block">\xc9l\xe9ment inline-block</div>\n    <div class="inline-flex">\xc9l\xe9ment inline-flex</div>\n    <div class="block">\xc9l\xe9ment block</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"title='CSS'",title:"'CSS'"},".inline {\n    display: inline !important;\n}\n.inline-block {\n    display: inline-block !important;\n}\n.inline-flex {\n    display: inline-flex !important;\n}\n.block {\n    display: block !important;\n}\n")),(0,r.yg)("h2",{id:"propri\xe9t\xe9s-suppl\xe9mentaires"},"Propri\xe9t\xe9s suppl\xe9mentaires"),(0,r.yg)("div",{className:"html-preview"},(0,r.yg)("div",{className:"flex flex-border"},(0,r.yg)("div",{className:"flex-fill flex-border"},"Fill"),(0,r.yg)("div",{className:"flex-border"},"Pas de fill")),(0,r.yg)("div",{className:"flex flex-border"},(0,r.yg)("div",{className:"flex-fill flex-border"},"Fill"),(0,r.yg)("div",{className:"flex-fill flex-border"},"Fill aussi")),(0,r.yg)("div",{className:"flex flex-border"},(0,r.yg)("div",{className:"flex-grow flex-border"},"Grow"),(0,r.yg)("div",{className:"flex-border"},"Pas de grow")),(0,r.yg)("div",{className:"flex flex-wrap flex-border",style:{width:"200px"}},(0,r.yg)("div",{className:"flex-border",style:{width:"100px"}},"Wrap 1"),(0,r.yg)("div",{className:"flex-border",style:{width:"100px"}},"Wrap 2"),(0,r.yg)("div",{className:"flex-border",style:{width:"100px"}},"Wrap 3")),(0,r.yg)("div",{className:"flex flex-gap flex-border"},(0,r.yg)("div",{className:"flex-border"},"Gap 1"),(0,r.yg)("div",{className:"flex-border"},"Gap 2"),(0,r.yg)("div",{className:"flex-border"},"Gap 3"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'    <div class="flex-fill">\xc9l\xe9ment flex-fill</div>\n    <div class="grow">\xc9l\xe9ment grow</div>\n    <div class="wrap">\xc9l\xe9ment wrap</div>\n    <div class="gap">\xc9l\xe9ment gap</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"title='CSS'",title:"'CSS'"},".flex-fill {\n    flex: 1 1 auto !important;\n}\n.grow, .flex-grow {\n    flex-grow: 1;\n}\n.wrap, .flex-wrap {\n    flex-wrap: wrap;\n}\n.gap, .flex-gap {\n    gap: 2px 16px;\n}\n")),(0,r.yg)("h3",{id:"liste-dalternatives"},"Liste d'alternatives"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"gap")," ou ",(0,r.yg)("inlineCode",{parentName:"li"},"flex-gap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"grow")," ou ",(0,r.yg)("inlineCode",{parentName:"li"},"flex-grow")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"wrap")," ou ",(0,r.yg)("inlineCode",{parentName:"li"},"flex-wrap"))))}m.isMDXComponent=!0}}]);