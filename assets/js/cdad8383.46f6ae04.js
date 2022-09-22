"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[48477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(83117),s=(n(67294),n(3905));const r={title:"Set Product",keywords:["*"]},l=void 0,o={unversionedId:"Rascal/Expressions/Values/Set/Product/index",id:"Rascal/Expressions/Values/Set/Product/index",title:"Set Product",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Set/Product/index.md",sourceDirName:"Rascal/Expressions/Values/Set/Product",slug:"/Rascal/Expressions/Values/Set/Product/",permalink:"/docs/Rascal/Expressions/Values/Set/Product/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Set/Product/index.md",tags:[],version:"current",frontMatter:{title:"Set Product",keywords:["*"]},sidebar:"tutorialSidebar",previous:{title:"Set NotEqual",permalink:"/docs/Rascal/Expressions/Values/Set/NotEqual/"},next:{title:"Set Splice",permalink:"/docs/Rascal/Expressions/Values/Set/Splice/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"The product of two set values."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> * Exp<sub>2</sub>")),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> * Exp<sub>2</sub>")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"set[T<sub>1</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"set[T<sub>2</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"rel[T<sub>1</sub>,T<sub>2</sub>]"))))),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Yields a relation resulting from the product of the values of ",(0,s.kt)("em",{parentName:"p"},"Exp"),(0,s.kt)("sub",null,"1")," and ",(0,s.kt)("em",{parentName:"p"},"Exp"),(0,s.kt)("sub",null,"2"),". It contains a tuple for each combination of values from both arguments."),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{1, 2, 3} * {4, 5, 6};\nrel[int,int]: {\n  <1,5>,\n  <1,4>,\n  <1,6>,\n  <3,5>,\n  <3,4>,\n  <3,6>,\n  <2,5>,\n  <2,4>,\n  <2,6>\n}\n")),(0,s.kt)("p",null,"A card deck can be created as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>{"clubs", "hearts", "diamonds", "spades"} * {1,2,3,4,5,6,7,8,9,10,11,12,13};\nrel[str,int]: {\n  <"hearts",10>,\n  <"hearts",7>,\n  <"hearts",1>,\n  <"hearts",3>,\n  <"hearts",13>,\n  <"hearts",9>,\n  <"hearts",2>,\n  <"hearts",4>,\n  <"hearts",11>,\n  <"hearts",6>,\n  <"hearts",12>,\n  <"hearts",5>,\n  <"hearts",8>,\n  <"spades",10>,\n  <"spades",7>,\n  <"spades",1>,\n  <"spades",3>,\n  <"spades",13>,\n  <"spades",9>,\n  <"spades",2>,\n  <"spades",4>,\n  <"spades",11>,\n  <"spades",6>,\n  <"spades",12>,\n  <"spades",5>,\n  <"spades",8>,\n  <"clubs",10>,\n  <"clubs",7>,\n  <"clubs",1>,\n  <"clubs",3>,\n  <"clubs",13>,\n  <"clubs",9>,\n  <"clubs",2>,\n  <"clubs",4>,\n  <"clubs",11>,\n  <"clubs",6>,\n  <"clubs",12>,\n  <"clubs",5>,\n  <"clubs",8>,\n  <"diamonds",10>,\n  <"diamonds",7>,\n  <"diamonds",1>,\n  <"diamonds",3>,\n  <"diamonds",13>,\n  <"diamonds",9>,\n  <"diamonds",2>,\n  <"diamonds",4>,\n  <"diamonds",11>,\n  <"diamonds",6>,\n  <"diamonds",12>,\n  <"diamonds",5>,\n  <"diamonds",8>\n}\n')))}c.isMDXComponent=!0}}]);