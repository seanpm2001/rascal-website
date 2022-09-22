"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[14707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const l={title:"Boolean And",keywords:["&&"]},i=void 0,o={unversionedId:"Rascal/Expressions/Values/Boolean/And/index",id:"Rascal/Expressions/Values/Boolean/And/index",title:"Boolean And",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Boolean/And/index.md",sourceDirName:"Rascal/Expressions/Values/Boolean/And",slug:"/Rascal/Expressions/Values/Boolean/And/",permalink:"/docs/Rascal/Expressions/Values/Boolean/And/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Boolean/And/index.md",tags:[],version:"current",frontMatter:{title:"Boolean And",keywords:["&&"]},sidebar:"tutorialSidebar",previous:{title:"Boolean All",permalink:"/docs/Rascal/Expressions/Values/Boolean/All/"},next:{title:"Boolean Any",permalink:"/docs/Rascal/Expressions/Values/Boolean/Any/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Boolean ",(0,r.kt)("em",{parentName:"p"},"and")," operator."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> && Exp<sub>2</sub>")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> && Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"and")," operator on Boolean values defined as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> && Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"Boolean operators have ",(0,r.kt)("em",{parentName:"p"},"short circuit")," semantics:  only those operands are evaluated that are needed to compute the result. In the case of the ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," operator, the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub>")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>2</sub>")," is evaluated to determine the result."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," backtracks over its argument expressions until it can find an evaluation that yields ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," unless there is none. This may happen if the left or right expression is a non-deterministic pattern match or a value generator."),(0,r.kt)("p",null,"Variable assignments as a result of matching or generator expressions under a ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," are visible outside the context of the operator, but only if the context is conditional, such as an if-then-else or a for loop. Note that if one of the argument expressions evaluates to false, then no binding is done either."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>true && false;\nbool: false\nrascal>i <- [1,2,3] && (i % 2 == 0)\nbool: true\nrascal>import IO;\nok\nrascal>if (i <- [1,2,3] && (i % 2 == 0))\n>>>>>>>  println("<i> % 2 == 0");\n  println("<i> % 2 == 0");\n2 % 2 == 0\nok\nrascal>for (i <- [1,2,3,4] && (i % 2 == 0)) \n>>>>>>>  println("<i> % 2 == 0");\n  println("<i> % 2 == 0");\n2 % 2 == 0\n4 % 2 == 0\nlist[void]: []\n')),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The backtracking ",(0,r.kt)("inlineCode",{parentName:"li"},"&&")," allows one to express searching for a computational solution in concise manner.")),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Side effects to global variables or IO in the context of a backtracking ",(0,r.kt)("inlineCode",{parentName:"li"},"&&")," can lead to more effects than you bargained for.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>int i = 0;\nint: 0\nrascal>bool incr() { i += 1; return true; }\nbool (): function(|prompt:///|(0,36,<1,0>,<1,36>))\nrascal>for (int j <- [1,2,3] && incr() && (i % 2 == 0)) \n>>>>>>>  println("once true for <j>");\n  println("once true for <j>");\nonce true for 2\nlist[void]: []\nrascal>i;\nint: 3\n')))}d.isMDXComponent=!0}}]);