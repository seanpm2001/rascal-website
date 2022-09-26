"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[79753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Solve",keywords:["solve"]},i=void 0,s={unversionedId:"Rascal/Statements/Solve/index",id:"Rascal/Statements/Solve/index",title:"Solve",description:"Synopsis",source:"@site/docs/Rascal/Statements/Solve/index.md",sourceDirName:"Rascal/Statements/Solve",slug:"/Rascal/Statements/Solve/",permalink:"/docs/Rascal/Statements/Solve/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/Solve/index.md",tags:[],version:"current",frontMatter:{title:"Solve",keywords:["solve"]},sidebar:"tutorialSidebar",previous:{title:"Return",permalink:"/docs/Rascal/Statements/Return/"},next:{title:"Switch",permalink:"/docs/Rascal/Statements/Switch/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Solve a set of equalities by fixed-point iteration."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"solve(Var\u2081, Var\u2082, ..., Var\u2099; Exp) Statement;")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Rascal provides a solve statement for performing arbitrary fixed-point computations. This means, repeating a certain computation as long as it causes changes. This can, for instance, be used for the solution of sets of simultaneous\nlinear equations but has much wider applicability."),(0,r.kt)("p",null,"The solve statement consists of the variables for which a fixed point will be computed and a statement.\nOptionally, an expression ",(0,r.kt)("em",{parentName:"p"},"Exp")," directly following the list of variables gives an upper bound on the number of iterations."),(0,r.kt)("p",null,"Statement can use and modify the listed variables ",(0,r.kt)("em",{parentName:"p"},"Var"),"\u1d62.\nThe statement is executed, assigning new values to the variables ",(0,r.kt)("em",{parentName:"p"},"Var"),"\u1d62, and this is repeated as long as the value\nof any of the variables was changed compared to the previous repetition.\nNote that this computation will only terminate if the variables range over a so-called ",(0,r.kt)("em",{parentName:"p"},"bounded monotonic lattice"),",\nin which values can only become larger until a fixed upper bound or become smaller until a fixed lower bound."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's consider transitive closure as an example (transitive closure is already available as built-in operator,\nwe use it here just as a simple illustration). Transitive closure of a relation is usually defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"R+ = R + (R o R) + (R o R o R) + ...\n")),(0,r.kt)("p",null,"In other words, it is the union of successive ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Relation/Composition/"},"Composition"),"s of ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," with itself.\nFor a given relation ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," this can be expressed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>rel[int,int] R = {<1,2>, <2,3>, <3,4>};\nrel[int,int]: {\n  <1,2>,\n  <3,4>,\n  <2,3>\n}\nrascal>T = R;\nrel[int,int]: {\n  <1,2>,\n  <3,4>,\n  <2,3>\n}\nrascal>solve (T) {\n>>>>>>>          T = T + (T o R);\n>>>>>>>        }\nrel[int,int]: {\n  <3,4>,\n  <1,3>,\n  <1,2>,\n  <1,4>,\n  <2,3>,\n  <2,4>\n}\n")))}u.isMDXComponent=!0}}]);