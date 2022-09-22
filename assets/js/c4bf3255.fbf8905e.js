"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[49257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Node Subscription",keywords:["[","]"]},l=void 0,o={unversionedId:"Rascal/Expressions/Values/Node/Subscription/index",id:"Rascal/Expressions/Values/Node/Subscription/index",title:"Node Subscription",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Node/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/Node/Subscription",slug:"/Rascal/Expressions/Values/Node/Subscription/",permalink:"/docs/Rascal/Expressions/Values/Node/Subscription/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Node/Subscription/index.md",tags:[],version:"current",frontMatter:{title:"Node Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Node Slice",permalink:"/docs/Rascal/Expressions/Values/Node/Slice/"},next:{title:"Number",permalink:"/docs/Rascal/Expressions/Values/Number/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Retrieve an argument of a node via its index."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> [ Exp<sub>2</sub> ]")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> [ Exp<sub>2</sub> ]")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"value"))))),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Node subscription uses the integer value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2")," as index in the argument list of the node value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1"),".\nThe value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2")," should be greater or equal 0 and less than the number of arguments of the node.\nIf this is not the case, the exception ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexOutOfBounds")," is thrown."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")),(0,a.kt)("p",null,"Introduce a node, assign it to F and retrieve the various arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>F = "f"(1, "abc", false);\nnode: "f"(1,"abc",false)\nrascal>F[0]\nvalue: 1\nrascal>F[1]\nvalue: "abc"\nrascal>F[2]\nvalue: false\n')),(0,a.kt)("p",null,"Explore an error case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>F[3];\n|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(3)\n    at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))\nok\n")))}c.isMDXComponent=!0}}]);