"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={title:"ListRelation Composition",keywords:["o"]},s=void 0,o={unversionedId:"Rascal/Expressions/Values/ListRelation/Composition/index",id:"Rascal/Expressions/Values/ListRelation/Composition/index",title:"ListRelation Composition",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/Composition/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation/Composition",slug:"/Rascal/Expressions/Values/ListRelation/Composition/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Composition/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/ListRelation/Composition/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation Composition",keywords:["o"]},sidebar:"tutorialSidebar",previous:{title:"ListRelation CartesianProduct",permalink:"/docs/Rascal/Expressions/Values/ListRelation/CartesianProduct/"},next:{title:"ListRelation FieldSelection",permalink:"/docs/Rascal/Expressions/Values/ListRelation/FieldSelection/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Composition of two list relation values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> o Exp<sub>2</sub>")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,"//"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> o Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lrel[T<sub>1</sub>, T<sub>2</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lrel[T<sub>2</sub>, T<sub>3</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lrel[T<sub>1</sub>, T<sub>3</sub>]"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Returns the composition of two binary list relations."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[<1,10>, <2,20>, <3,15>] o [<10,100>, <20,200>];\nlrel[int,int]: [\n  <1,100>,\n  <2,200>\n]\n")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("p",null,"We use the letter ",(0,a.kt)("inlineCode",{parentName:"p"},"o")," as operator and this may conflict other defined names."))}c.isMDXComponent=!0}}]);