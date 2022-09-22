"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[58302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const i={title:"Abstract Syntax Tree"},s=void 0,o={unversionedId:"Rascalopedia/AbstractSyntaxTree/index",id:"Rascalopedia/AbstractSyntaxTree/index",title:"Abstract Syntax Tree",description:"Synopsis",source:"@site/docs/Rascalopedia/AbstractSyntaxTree/index.md",sourceDirName:"Rascalopedia/AbstractSyntaxTree",slug:"/Rascalopedia/AbstractSyntaxTree/",permalink:"/docs/Rascalopedia/AbstractSyntaxTree/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascalopedia/AbstractSyntaxTree/index.md",tags:[],version:"current",frontMatter:{title:"Abstract Syntax Tree"},sidebar:"tutorialSidebar",previous:{title:"AbstractDataType",permalink:"/docs/Rascalopedia/AbstractDataType/"},next:{title:"Compiler",permalink:"/docs/Rascalopedia/Compiler/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Representation of the abstract syntactic structure of a program."),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("h4",{id:"function"},"Function"),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/docs/Rascalopedia/ParseTree"},"Parse tree")," is a detailed and very precise represention of the concrete syntactic structure of a program.\nIt may even be so detailed that it contains every space, comment and parenthesis in the original source text.\nIn many cases a less detailed representation is sufficient and an abstract syntax tree (or AST for short) is used."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"For the input sentence"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(98996).Z,width:"476",height:"22"})),(0,n.kt)("p",null,"the parse tree (left) and abstract syntax tree (right) may look as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30867).Z,width:"825",height:"246"})),(0,n.kt)("p",null,"Note that the parse tree on the left did not preserve the spaces in the original text but there\nare parse tree formats (including the one used by Rascal) that preserve all textual information."),(0,n.kt)("h4",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"parse trees are nice for grammar debugging, because they are an executing trace of the parsing algorithm."),(0,n.kt)("li",{parentName:"ul"},'parse trees are good for source-to-source transformation, because they do not a priori remove important details such as whitespace indentation and source code comments. A transformation based on parse trees is sometimes called "high fidelity" because of this.')),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"parse trees are sometimes hard to read in abstract form, due to their inherent low-level of detail and complexity. When confronted with a large one, it's best to first try and minimize the input sentence before trying to debug a parse tree.")))}d.isMDXComponent=!0},30867:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/parse-ast-301354e9dad44b9889a2fef72fda1094.png"},98996:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);