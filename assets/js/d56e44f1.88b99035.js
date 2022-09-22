"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const s={title:"Type Constraints",keywords:["<:","&"]},i=void 0,o={unversionedId:"Rascal/Declarations/StaticTyping/TypeConstraints/index",id:"Rascal/Declarations/StaticTyping/TypeConstraints/index",title:"Type Constraints",description:"Synopsis",source:"@site/docs/Rascal/Declarations/StaticTyping/TypeConstraints/index.md",sourceDirName:"Rascal/Declarations/StaticTyping/TypeConstraints",slug:"/Rascal/Declarations/StaticTyping/TypeConstraints/",permalink:"/docs/Rascal/Declarations/StaticTyping/TypeConstraints/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Declarations/StaticTyping/TypeConstraints/index.md",tags:[],version:"current",frontMatter:{title:"Type Constraints",keywords:["<:","&"]},sidebar:"tutorialSidebar",previous:{title:"Reified Types",permalink:"/docs/Rascal/Declarations/StaticTyping/ReifiedTypes/"},next:{title:"Type Parameters",permalink:"/docs/Rascal/Declarations/StaticTyping/TypeParameters/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Type constraints restrict the acceptable type for parameters."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"& Name <: Type")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Constraints can be imposed on the actual types to which a type parameter may be bound.\nThis is expressed by a subtype constraint which expresses that\nactual types bound to ",(0,r.kt)("em",{parentName:"p"},"Name")," should be a subtype of ",(0,r.kt)("em",{parentName:"p"},"Type"),". "),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is the definition of the absolute value function ",(0,r.kt)("inlineCode",{parentName:"p"},"abs")," from the ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Values/Number"},"./Number")," library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"public &T <: num abs(&T <: num N)\n{\n    return N >= 0 ? N : -N;\n}\n")),(0,r.kt)("p",null,"The argument ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is constrained to be at most of type ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import util::Math;\nok\nrascal>abs(-3);\nint: 3\nrascal>abs(-3.5);\nreal: 3.5\n")),(0,r.kt)("p",null,"Here is an example from the ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Values/Node"},"Node")," library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"&T <: node setAnnotations(&T <: node x, map[str, value] annotations);\n")),(0,r.kt)("p",null,"(we don't give the body of this function since it has been implemented in Java).\n",(0,r.kt)("inlineCode",{parentName:"p"},"setAnnotations")," takes a value of any type that is at most ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and adds annotations to it.\nThis makes it possible to set annotations on any ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>nd = "f"(10, "abc");\nnode: "f"(10,"abc")\n')),(0,r.kt)("p",null,"First we apply ",(0,r.kt)("inlineCode",{parentName:"p"},"setAnnotations")," to a node value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>setAnnotations(nd, ("color" : "red", "size" : "large"));\nnode: "f"(10,"abc",\n  size="large",\n  color="red")\n')),(0,r.kt)("p",null,"Next, we introduce a new data type ",(0,r.kt)("inlineCode",{parentName:"p"},"Suite"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data Suite = hearts() | diamonds() | clubs() | spades();\nok\nrascal>st = diamonds();\nSuite: diamonds()\n")),(0,r.kt)("p",null,"And apply ",(0,r.kt)("inlineCode",{parentName:"p"},"setAnnotations")," to a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Suite"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>setAnnotations(st, ("player" : "Hossein", "gain" : "120"));\nSuite: diamonds(player="Hossein",gain="120")\n')))}u.isMDXComponent=!0}}]);