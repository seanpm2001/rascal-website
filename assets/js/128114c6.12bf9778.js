"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[94960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"Try Catch",keywords:["try","catch","finally"]},s=void 0,c={unversionedId:"Rascal/Statements/TryCatch/index",id:"Rascal/Statements/TryCatch/index",title:"Try Catch",description:"Synopsis",source:"@site/docs/Rascal/Statements/TryCatch/index.md",sourceDirName:"Rascal/Statements/TryCatch",slug:"/Rascal/Statements/TryCatch/",permalink:"/docs/Rascal/Statements/TryCatch/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/TryCatch/index.md",tags:[],version:"current",frontMatter:{title:"Try Catch",keywords:["try","catch","finally"]},sidebar:"tutorialSidebar",previous:{title:"Throw",permalink:"/docs/Rascal/Statements/Throw/"},next:{title:"Visit",permalink:"/docs/Rascal/Statements/Visit/"}},l={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Try to execute a statement and catch resulting exceptions."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"try\n   _Statement\u2081_;\ncatch _PatternWithAction\u2081_;\ncatch _PatternWithAction\u2082_;\n...\ncatch: _Statement\u2082_;\nfinally: _Statement\u2083_;\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A try catch statement has as purpose to catch any ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/Exception"},"Exceptions")," that are raised\nduring the execution of ",(0,r.kt)("em",{parentName:"p"},"Statement"),"\u2081.\nThese exceptions may caused by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The execution of an explicit ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Throw/"},"Throw")," statement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Rascal system that discovers an abnormal condition, e.g., an out of bounds error when accessing a list element."))),(0,r.kt)("p",null,"Note that all elements of the try catch statement are optional but that at least one has to be present.\nTheir meaning is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a pattern of some ",(0,r.kt)("em",{parentName:"p"},"PatternWithAction\u1d62")," matches, the corresponding action is executed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise, ",(0,r.kt)("em",{parentName:"p"},"Statement\u2082")," is executed (when present).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before leaving the try catch statement ",(0,r.kt)("em",{parentName:"p"},"Statement\u2083")," is always executed (when present)."))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's define a variant of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/List#List-head"},"head")," function that returns the first element of a list,\nbut throws an exception when the list is empty. Our variant will return ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," for an empty list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import List;\nok\nrascal>import Exception;\nok\nrascal>int hd(list[int] x) { try return head(x); catch: return 0; }\nint (list[int]): function(|prompt:///|(0,60,<1,0>,<1,60>))\nrascal>hd([1,2,3]);\nint: 1\nrascal>hd([]);\nint: 0\n")),(0,r.kt)("p",null,"We can also be more specific and catch the ",(0,r.kt)("inlineCode",{parentName:"p"},"EmptyList")," exception\n(which is available here since we have imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," module):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>int hd2(list[int] x) { try return head(x); catch EmptyList(): return 0; }\nint (list[int]): function(|prompt:///|(0,73,<1,0>,<1,73>))\nrascal>hd2([]);\nint: 0\n")))}m.isMDXComponent=!0}}]);