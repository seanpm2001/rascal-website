"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[27961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(83117),n=(r(67294),r(3905));const a={title:"demo::lang::logic::ast::Propositions"},i=void 0,l={unversionedId:"Library/demo/lang/logic/ast/Propositions",id:"Library/demo/lang/logic/ast/Propositions",title:"demo::lang::logic::ast::Propositions",description:"Usage",source:"@site/docs/Library/demo/lang/logic/ast/Propositions.md",sourceDirName:"Library/demo/lang/logic/ast",slug:"/Library/demo/lang/logic/ast/Propositions",permalink:"/docs/Library/demo/lang/logic/ast/Propositions",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/demo/lang/logic/ast/Propositions.md",tags:[],version:"current",frontMatter:{title:"demo::lang::logic::ast::Propositions"},sidebar:"tutorialSidebar",previous:{title:"demo::lang::logic::ast::Booleans",permalink:"/docs/Library/demo/lang/logic/ast/Booleans"},next:{title:"demo::lang::logic::syntax",permalink:"/docs/Library/demo/lang/logic/syntax/"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"data Formula",id:"demo-lang-logic-ast-Propositions-Formula",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::lang::logic::ast::Propositions;")),(0,n.kt)("h2",{id:"demo-lang-logic-ast-Propositions-Formula"},"data Formula"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data Formula  \n     = id(str x)\n     ;\n")))}u.isMDXComponent=!0}}]);