"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={title:"ListRelation Subscription",keywords:["[","]"]},l=void 0,s={unversionedId:"Rascal/Expressions/Values/ListRelation/Subscription/index",id:"Rascal/Expressions/Values/ListRelation/Subscription/index",title:"ListRelation Subscription",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation/Subscription",slug:"/Rascal/Expressions/Values/ListRelation/Subscription/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Subscription/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/ListRelation/Subscription/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"ListRelation Reflexive Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/"},next:{title:"ListRelation Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/TransitiveClosure/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Variant 1",id:"variant-1",level:2},{value:"Variant 2",id:"variant-2",level:2},{value:"Description",id:"description",level:4},{value:"Variant 1",id:"variant-1-1",level:2},{value:"Variant 2",id:"variant-2-1",level:2},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Indexing of a list relation via tuple values."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Exp\u2080 [ Exp\u2081, Exp\u2082, ... Exp\u2099]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Exp\u2080 [ Exp\u2081]")))),(0,i.kt)("h2",{id:"variant-1"},"Variant 1"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2080")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,i.kt)("th",{parentName:"tr",align:null},"..."),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2080 [ Exp\u2081, Exp\u2082, ... ]")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lrel[T\u2081, T\u2082, ... T\u2098]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lrel[T\u2099, _T\u2099\u208a\u2081_, ... T\u2098]"))))),(0,i.kt)("h2",{id:"variant-2"},"Variant 2"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2080")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp\u2080 [ Exp\u2081 ]"))))),(0,i.kt)("p",null,"|\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"lrel[T\u2081, T\u2082, ... T\u2098]"),"    | ",(0,i.kt)("inlineCode",{parentName:"p"},"list[T\u2081]")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"lrel[T\u2082, T\u2083, ... T\u2098]"),"   |"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"ListRelation resulting from subscription of a ListRelation ",(0,i.kt)("em",{parentName:"p"},"Exp"),"\u2080."),(0,i.kt)("h2",{id:"variant-1-1"},"Variant 1"),(0,i.kt)("p",null,"Subscription with the index values of ",(0,i.kt)("em",{parentName:"p"},"Exp"),"\u2081, ",(0,i.kt)("em",{parentName:"p"},"Exp"),"\u2082, ....\nThe result is a ListRelation with all tuples that have these index values as first elements\nwith the index values removed from the tuple.\nIf the resulting tuple has only a single element, a list is returned instead of a relation.\nA wildcard ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," as index value matches all possible values at that index position."),(0,i.kt)("h2",{id:"variant-2-1"},"Variant 2"),(0,i.kt)("p",null,"Subscription with a set of the index values of ",(0,i.kt)("em",{parentName:"p"},"Exp"),"\u2081.\nThe result is a ListRelation with all tuples that have these index values as first element\nwith the index values removed from the tuple. "),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>R = [<1,10>, <2,20>, <1,11>, <3,30>, <2,21>];\nlrel[int,int]: [\n  <1,10>,\n  <2,20>,\n  <1,11>,\n  <3,30>,\n  <2,21>\n]\nrascal>R[1];\ntuple[int,int]: <2,20>\nrascal>R[{1}];\nlist[int]: [10,11]\nrascal>R[{1, 2}];\nlist[int]: [10,20,11,21]\nrascal>RR = [<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,\n>>>>>>>              <3,30,300>];\nlrel[int,int,int]: [\n  <1,10,100>,\n  <1,11,101>,\n  <2,20,200>,\n  <2,22,202>,\n  <3,30,300>\n]\nrascal>RR[1];\ntuple[int,int,int]: <1,11,101>\nrascal>RR[1,_];\nlist[int]: [100,101]\n")),(0,i.kt)("p",null,"Introduce a relation with economic data and assign it to ",(0,i.kt)("inlineCode",{parentName:"p"},"GDP"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>lrel[str country, int year, int amount] GDP =\n>>>>>>>[<"US", 2008, 14264600>, <"EU", 2008, 18394115>,\n>>>>>>> <"Japan", 2008, 4923761>, <"US", 2007, 13811200>, \n>>>>>>> <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>];\nlrel[str country,int year,int amount]: [\n  <"US",2008,14264600>,\n  <"EU",2008,18394115>,\n  <"Japan",2008,4923761>,\n  <"US",2007,13811200>,\n  <"EU",2007,13811200>,\n  <"Japan",2007,4376705>\n]\n')),(0,i.kt)("p",null,"and then retrieve the information for the index ",(0,i.kt)("inlineCode",{parentName:"p"},'"Japan"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>GDP["Japan"];\nlrel[int,int]: [\n  <2008,4923761>,\n  <2007,4376705>\n]\n')),(0,i.kt)("p",null,"or rather for the indices ",(0,i.kt)("inlineCode",{parentName:"p"},'"Japan"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2008"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>GDP["Japan", 2008];\nlist[int]: [4923761]\n')))}c.isMDXComponent=!0}}]);