"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const s={title:"DateTime LessThan",keywords:["<"]},i=void 0,l={unversionedId:"Rascal/Expressions/Values/DateTime/LessThan/index",id:"Rascal/Expressions/Values/DateTime/LessThan/index",title:"DateTime LessThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/DateTime/LessThan/index.md",sourceDirName:"Rascal/Expressions/Values/DateTime/LessThan",slug:"/Rascal/Expressions/Values/DateTime/LessThan/",permalink:"/docs/Rascal/Expressions/Values/DateTime/LessThan/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/DateTime/LessThan/index.md",tags:[],version:"current",frontMatter:{title:"DateTime LessThan",keywords:["<"]},sidebar:"tutorialSidebar",previous:{title:"DateTime GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/DateTime/GreaterThanOrEqual/"},next:{title:"DateTime LessThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/DateTime/LessThanOrEqual/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Less than operator on datetime values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> < Exp<sub>2</sub>")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> < Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Yields ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," value of Exp",(0,r.kt)("sub",null,"1")," is earlier in time than the ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," value\nof ",(0,r.kt)("em",{parentName:"p"},"Exp",(0,r.kt)("sub",null,"2")),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>$2010-07-14$ < $2010-07-15$;\nbool: true\nrascal>$2011-07-15$ < $2010-07-14$;\nbool: false\n")),(0,r.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);