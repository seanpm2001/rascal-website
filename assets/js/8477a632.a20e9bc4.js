"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[51768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Map Comprehension",keywords:["(","|",")"]},i=void 0,o={unversionedId:"Rascal/Expressions/Values/Map/Comprehension/index",id:"Rascal/Expressions/Values/Map/Comprehension/index",title:"Map Comprehension",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Map/Comprehension/index.md",sourceDirName:"Rascal/Expressions/Values/Map/Comprehension",slug:"/Rascal/Expressions/Values/Map/Comprehension/",permalink:"/docs/Rascal/Expressions/Values/Map/Comprehension/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Map/Comprehension/index.md",tags:[],version:"current",frontMatter:{title:"Map Comprehension",keywords:["(","|",")"]},sidebar:"tutorialSidebar",previous:{title:"Map Composition",permalink:"/docs/Rascal/Expressions/Values/Map/Composition/"},next:{title:"Map Difference",permalink:"/docs/Rascal/Expressions/Values/Map/Difference/"}},p={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"A map comprehension generates a map value."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"( Exp\u2081 : Exp\u2082 | Gen\u2081, Gen\u2082, ... )")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"( Exp\u2081 : Exp\u2082 \\| Gen\u2081, Gen\u2082, ... )")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2081")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2082")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[T\u2081, T\u2082]")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A map comprehension consists of a number of two contributing expressions ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081 (for key values),\nand ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 (the values associated with those key values) and a number of\ngenerators ",(0,r.kt)("em",{parentName:"p"},"Gen"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"Gen"),"\u2082, ",(0,r.kt)("em",{parentName:"p"},"Gen"),"\u2083, ... that are evaluated as described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Comprehensions/"},"Comprehensions"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")),(0,r.kt)("p",null,"Introduce a map of ",(0,r.kt)("inlineCode",{parentName:"p"},"fruits"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);\nmap[str, int]: ("banana":0,"pear":1,"orange":35,"berry":25,"apple":3)\nrascal>import String;\nok\n')),(0,r.kt)("p",null,"Use a map comprehension to filter fruits with a name of at most 5 characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>(fruit : fruits[fruit] | fruit <- fruits, size(fruit) <= 5);\nmap[str, int]: ("pear":1,"berry":25,"apple":3)\n')),(0,r.kt)("p",null,"Use a map comprehension to filter fruits with an associated value larger than 10:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);\nmap[str, int]: ("orange":35,"berry":25)\n')))}u.isMDXComponent=!0}}]);