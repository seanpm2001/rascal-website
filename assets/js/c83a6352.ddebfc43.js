"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[98013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Tuple",keywords:["<",">"]},s=void 0,p={unversionedId:"Rascal/Expressions/Values/Tuple/index",id:"Rascal/Expressions/Values/Tuple/index",title:"Tuple",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple",slug:"/Rascal/Expressions/Values/Tuple/",permalink:"/docs/Rascal/Expressions/Values/Tuple/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Tuple/index.md",tags:[],version:"current",frontMatter:{title:"Tuple",keywords:["<",">"]},sidebar:"tutorialSidebar",previous:{title:"String Subscription",permalink:"/docs/Rascal/Expressions/Values/String/Subscription/"},next:{title:"Tuple Concatenation",permalink:"/docs/Rascal/Expressions/Values/Tuple/Concatenation/"}},i={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Tuple values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"< Exp\u2081, Exp\u2082, ... >")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"< Exp\u2081, Exp\u2082, ... >")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2081")),(0,r.kt)("td",{parentName:"tr",align:null},"T\u2082"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tuple[T\u2081, T\u2082, ... ]"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A tuple is a sequence of elements with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each element in a tuple (may) have a different type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each element of a tuple may have a label that can be used to select that element of the tuple.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each tuple is fixed-width, i.e., has the same number of elements."))),(0,r.kt)("p",null,"Tuples are represented by the type ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple[T\u2081 L\u2081, T\u2082 L\u2082, ...]"),",\nwhere ",(0,r.kt)("em",{parentName:"p"},"T"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"T"),"\u2082, ... are arbitrary types and ",(0,r.kt)("em",{parentName:"p"},"L"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"L"),"\u2082, ... are optional labels. "),(0,r.kt)("p",null,"The following operators are provided for tuples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/Concatenation/"},"Concatenation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/Equal/"},"Equal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/FieldSelection/"},"FieldSelection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/GreaterThan/"},"GreaterThan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/"},"GreaterThanOrEqual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/LessThan/"},"LessThan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/LessThanOrEqual/"},"LessThanOrEqual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/NotEqual/"},"NotEqual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/Subscription/"},"Subscription"))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>tuple[str first, str last, int age] P = <"Jo","Jones",35>;\ntuple[str first,str last,int age]: <"Jo","Jones",35>\nrascal>P.first;\nstr: "Jo"\nrascal>P.first = "Bo";\ntuple[str first,str last,int age]: <"Bo","Jones",35>\n')))}c.isMDXComponent=!0}}]);