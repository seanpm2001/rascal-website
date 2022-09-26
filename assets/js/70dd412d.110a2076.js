"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[94450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"Tuple GreaterThanOrEqual",keywords:[">="]},s=void 0,p={unversionedId:"Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/index",id:"Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/index",title:"Tuple GreaterThanOrEqual",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple/GreaterThanOrEqual",slug:"/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/index.md",tags:[],version:"current",frontMatter:{title:"Tuple GreaterThanOrEqual",keywords:[">="]},sidebar:"tutorialSidebar",previous:{title:"Tuple GreaterThan",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThan/"},next:{title:"Tuple LessThan",permalink:"/docs/Rascal/Expressions/Values/Tuple/LessThan/"}},i={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Greater than or equal operator on tuple values."),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Exp\u2081 >= Exp\u2082")),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2081 >= Exp\u2082")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"tuple[ T\u2081\u2081, T\u2081\u2082, ... ]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"tuple[ T\u2082\u2081, T\u2082\u2082, ... ]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Yields ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"both tuples are equal, or"),(0,n.kt)("li",{parentName:"ul"},"the left-most element in the tuple value of ",(0,n.kt)("em",{parentName:"li"},"Exp\u2081")," that differs from the corresponding element in the tuple\nvalue of ",(0,n.kt)("em",{parentName:"li"},"Exp"),"\u2082 is greater than that element in ",(0,n.kt)("em",{parentName:"li"},"Exp"),"\u2082.")),(0,n.kt)("p",null,"Otherwise the result if ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal><1, "abc", true> > <1, "abc", true>;\nbool: false\nrascal><1, "def", true> > <1, "abc", true>;\nbool: true\n')))}c.isMDXComponent=!0}}]);