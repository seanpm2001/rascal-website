"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[95688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={title:"DateTime Field Selection",keywords:["."]},l=void 0,s={unversionedId:"Rascal/Expressions/Values/DateTime/FieldSelection/index",id:"Rascal/Expressions/Values/DateTime/FieldSelection/index",title:"DateTime Field Selection",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/DateTime/FieldSelection/index.md",sourceDirName:"Rascal/Expressions/Values/DateTime/FieldSelection",slug:"/Rascal/Expressions/Values/DateTime/FieldSelection/",permalink:"/docs/Rascal/Expressions/Values/DateTime/FieldSelection/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/DateTime/FieldSelection/index.md",tags:[],version:"current",frontMatter:{title:"DateTime Field Selection",keywords:["."]},sidebar:"tutorialSidebar",previous:{title:"DateTime Equal",permalink:"/docs/Rascal/Expressions/Values/DateTime/Equal/"},next:{title:"DateTime GreaterThan",permalink:"/docs/Rascal/Expressions/Values/DateTime/GreaterThan/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Select a field from a datetime value."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp . Name")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp . Name")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"depends on field")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Field selection applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," values.\n",(0,r.kt)("em",{parentName:"p"},"Name")," should be one of the supported fields listed in ",(0,r.kt)("a",{parentName:"p",href:"../../../../../Rascal/Expressions/Values/DateTime"},"Date time")," and returns the value of that field.\nName stands for itself and is not evaluated."))}d.isMDXComponent=!0}}]);