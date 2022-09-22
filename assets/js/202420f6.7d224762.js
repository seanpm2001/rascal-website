"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[61621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const a={title:"NotEnumerable"},i=void 0,l={unversionedId:"CompileTimeErrors/NotEnumerable/index",id:"CompileTimeErrors/NotEnumerable/index",title:"NotEnumerable",description:"Synopsis",source:"@site/docs/CompileTimeErrors/NotEnumerable/index.md",sourceDirName:"CompileTimeErrors/NotEnumerable",slug:"/CompileTimeErrors/NotEnumerable/",permalink:"/docs/CompileTimeErrors/NotEnumerable/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/NotEnumerable/index.md",tags:[],version:"current",frontMatter:{title:"NotEnumerable"},sidebar:"tutorialSidebar",previous:{title:"NonWellformedType",permalink:"/docs/CompileTimeErrors/NonWellformedType/"},next:{title:"PartiallyLabeledFields",permalink:"/docs/CompileTimeErrors/PartiallyLabeledFields/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"A value that cannot be enumerated is used in an enumerator."),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("h4",{id:"types"},"Types"),(0,o.kt)("h4",{id:"function"},"Function"),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Comprehensions/Enumerator"},"enumerator")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"int n <- V")," is used in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Comprehensions"},"comprehensions")," to enumerate the values in ",(0,o.kt)("inlineCode",{parentName:"p"},"V"),".\nThis error is produced when ",(0,o.kt)("inlineCode",{parentName:"p"},"V")," is a value that does not support enumeration.\nThis is typically the case for atomic values like numbers, Booleans and Strings,"),(0,o.kt)("p",null,"Remedy: modify the expression in the enumerator to return a value that supports enumeration."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int x <- 17\nok\nrascal>b <- true\n|prompt:///|(5,4,<1,5>,<1,9>): bool is not enumerable\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/NotEnumerable/NotEnumerable.html|\nok\n")),(0,o.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);