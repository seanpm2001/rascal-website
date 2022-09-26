"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[15202],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(k,l(l({ref:r},s),{},{components:t})):n.createElement(k,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12444:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={title:"Variable"},l=void 0,o={unversionedId:"Tutor/Markup/InlineMarkup/Variable/index",id:"Tutor/Markup/InlineMarkup/Variable/index",title:"Variable",description:"Synopsis",source:"@site/docs/Tutor/Markup/InlineMarkup/Variable/index.md",sourceDirName:"Tutor/Markup/InlineMarkup/Variable",slug:"/Tutor/Markup/InlineMarkup/Variable/",permalink:"/docs/Tutor/Markup/InlineMarkup/Variable/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Markup/InlineMarkup/Variable/index.md",tags:[],version:"current",frontMatter:{title:"Variable"},sidebar:"tutorialSidebar",previous:{title:"Reference to Concept",permalink:"/docs/Tutor/Markup/InlineMarkup/ReferenceToConcept/"},next:{title:"QuestionMarkup",permalink:"/docs/Tutor/Markup/QuestionMarkup/"}},p={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],s={toc:u};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Markup for a variable."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"We use subscript syntax for variable indices. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\VarName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\VarName\\\u2090"))),(0,a.kt)("p",null,"Watch out, only characters in this class are supported ",(0,a.kt)("inlineCode",{parentName:"p"},"[aeh-pr-vx0-9()+-]"),"."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Variables in text and code are represented by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Tutor/Markup/InlineMarkup/Italic/"},"Italic")," markup.\nThey may be followed by one or more subscripts (enclosed by tildes)."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"\\Var")," gives ",(0,a.kt)("em",{parentName:"p"},"Var"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"\\Var\\\u2081")," gives ",(0,a.kt)("em",{parentName:"p"},"Var"),"\u2081."))),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This feature is broken currently. The italics do not work in code fragments and subscripts are broken as well."),(0,a.kt)("li",{parentName:"ul"},"We only support a limited set of characters currently: ",(0,a.kt)("inlineCode",{parentName:"li"},"[aeh-pr-vx0-9()+-]"))))}c.isMDXComponent=!0}}]);