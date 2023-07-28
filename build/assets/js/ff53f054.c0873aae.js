"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3421],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>v});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=i.createContext({}),c=function(e){var t=i.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,v=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return o?i.createElement(v,r(r({ref:t},p),{},{components:o})):i.createElement(v,r({ref:t},p))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<s;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9247:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const s={},r="Position & Overflow",l={unversionedId:"Helpers/position-overflow",id:"Helpers/position-overflow",title:"Position & Overflow",description:"Les classes de d\xe9bordement vous permettent de contr\xf4ler le comportement d'overflow d'un \xe9l\xe9ment.",source:"@site/docs/Helpers/position-overflow.md",sourceDirName:"Helpers",slug:"/Helpers/position-overflow",permalink:"/docs/Helpers/position-overflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Helpers/position-overflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object Fit",permalink:"/docs/Helpers/object-fit"},next:{title:"shadow",permalink:"/docs/Helpers/shadow"}},a={},c=[{value:"Overflow",id:"overflow",level:2},{value:"D\xe9tails des classes",id:"d\xe9tails-des-classes",level:3},{value:"Positionnement",id:"positionnement",level:2},{value:"Classes de positionnement",id:"classes-de-positionnement",level:3},{value:"D\xe9tails des classes",id:"d\xe9tails-des-classes-1",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"position--overflow"},"Position & Overflow"),(0,n.kt)("p",null,"Les classes de d\xe9bordement vous permettent de contr\xf4ler le comportement d'overflow d'un \xe9l\xe9ment."),(0,n.kt)("h2",{id:"overflow"},"Overflow"),(0,n.kt)("div",{className:"html-preview"},(0,n.kt)("div",{className:"overflow-hidden flex-border",style:{height:"50px",width:"200px"}},(0,n.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. ")),(0,n.kt)("div",{className:"overflow-x flex-border",style:{height:"50px",width:"200px"}},(0,n.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. ")),(0,n.kt)("div",{className:"overflow-y flex-border",style:{height:"50px",width:"200px"}},(0,n.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. "))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'  <div class="overflow-hidden">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>\n  </div>\n  <div class="overflow-x">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>\n  </div>\n  <div class="overflow-y">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>\n  </div>\n')),(0,n.kt)("h3",{id:"d\xe9tails-des-classes"},"D\xe9tails des classes"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".oh, .overflow-hidden {\n    overflow: hidden;\n}\n.overflow-x {\n    overflow-x: auto;\n}\n.overflow-y {\n    overflow-y: auto;\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"positionnement"},"Positionnement"),(0,n.kt)("p",null,"Les classes de positionnement vous permettent de contr\xf4ler la position d'un \xe9l\xe9ment sur la page."),(0,n.kt)("h3",{id:"classes-de-positionnement"},"Classes de positionnement"),(0,n.kt)("div",{className:"html-preview",style:{position:"relative",height:"200px"}},(0,n.kt)("div",{className:"position-relative flex-border",style:{background:"lightblue"}},(0,n.kt)("p",null,"Element avec position relative")),(0,n.kt)("div",{className:"position-absolute flex-border",style:{background:"lightcoral",top:"50px",left:"50px",opacity:"0.7"}},(0,n.kt)("p",null,"El\xe9ment avec position absolute")),(0,n.kt)("div",{className:"position-initial flex-border",style:{background:"lightgreen"}},(0,n.kt)("p",null,"El\xe9ment avec position initial"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'  <div class="position-relative">\n    <p>Element avec position relative</p>\n  </div>\n  <div class="position-absolute">\n    <p>El\xe9ment avec position absolute</p>\n  </div>\n  <div class="position-initial">\n    <p>El\xe9ment avec position initial</p>\n  </div>\n')),(0,n.kt)("h3",{id:"d\xe9tails-des-classes-1"},"D\xe9tails des classes"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".relative, .position-relative {\n    position: relative;\n}\n.absolute, .position-absolute {\n    position: absolute;\n}\n.position-initial {\n    position: initial;\n}\n")))}u.isMDXComponent=!0}}]);