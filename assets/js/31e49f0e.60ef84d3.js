"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[57988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(83117),l=(n(67294),n(3905));const r={title:"List Splice",keywords:["*"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/List/Splice/index",id:"Rascal/Expressions/Values/List/Splice/index",title:"List Splice",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/List/Splice/index.md",sourceDirName:"Rascal/Expressions/Values/List/Splice",slug:"/Rascal/Expressions/Values/List/Splice/",permalink:"/docs/Rascal/Expressions/Values/List/Splice/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/List/Splice/index.md",tags:[],version:"current",frontMatter:{title:"List Splice",keywords:["*"]},sidebar:"tutorialSidebar",previous:{title:"List Slice",permalink:"/docs/Rascal/Expressions/Values/List/Slice/"},next:{title:"List StrictSubList",permalink:"/docs/Rascal/Expressions/Values/List/StrictSubList/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Splice the elements of a list in an enclosing list."),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("p",null,"//"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp~n~")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"[Exp<sub>1</sub>, ..., Exp, ..., Exp~n~]")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T<sub>1</sub>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T~n~")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list[lub(T<sub>1</sub>, ..., T, ...,T~n~)]"))))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The operator ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," splices the elements of a list in an enclosing list."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Consider the following list in which the list ",(0,l.kt)("inlineCode",{parentName:"p"},"[10, 20, 30]")," occurs as list element. It has as type ",(0,l.kt)("inlineCode",{parentName:"p"},"list[value]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[1, 2, [10, 20, 30], 3, 4];\nlist[value]: [\n  1,\n  2,\n  [10,20,30],\n  3,\n  4\n]\n")),(0,l.kt)("p",null,"The effect of splicing the same list element in the enclosing list gives a flat list of type ",(0,l.kt)("inlineCode",{parentName:"p"},"list[int]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[1, 2, *[10, 20, 30], 3, 4];\nlist[int]: [1,2,10,20,30,3,4]\n")),(0,l.kt)("p",null,"The same example can be written as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>L = [10, 20, 30];\nlist[int]: [10,20,30]\nrascal>[1, 2, *L, 3, 4];\nlist[int]: [1,2,10,20,30,3,4]\n")),(0,l.kt)("h4",{id:"benefits"},"Benefits"),(0,l.kt)("p",null,"in which nested lists are handled."))}u.isMDXComponent=!0}}]);