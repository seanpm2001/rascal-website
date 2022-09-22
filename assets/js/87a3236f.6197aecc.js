"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[90566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=s,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(83117),s=(n(67294),n(3905));const a={title:"List SubList",keywords:["<="]},i=void 0,l={unversionedId:"Rascal/Expressions/Values/List/SubList/index",id:"Rascal/Expressions/Values/List/SubList/index",title:"List SubList",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/List/SubList/index.md",sourceDirName:"Rascal/Expressions/Values/List/SubList",slug:"/Rascal/Expressions/Values/List/SubList/",permalink:"/docs/Rascal/Expressions/Values/List/SubList/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/List/SubList/index.md",tags:[],version:"current",frontMatter:{title:"List SubList",keywords:["<="]},sidebar:"tutorialSidebar",previous:{title:"List StrictSuperList",permalink:"/docs/Rascal/Expressions/Values/List/StrictSuperList/"},next:{title:"List Subscription",permalink:"/docs/Rascal/Expressions/Values/List/Subscription/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"The sublist operator on lists."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> <= Exp<sub>2</sub>")),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> <= Exp<sub>2</sub>")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"list[T<sub>1</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"list[T<sub>2</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Yields ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if the value of Exp",(0,s.kt)("sub",null,"1")," is equal to or a sublist of the value of Exp",(0,s.kt)("sub",null,"2"),",  and ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[1, 2, 3] <= [1, 2, 3, 4];\nbool: true\nrascal>[1, 2, 3] <= [1, 2, 3];\nbool: true\nrascal>[1, 3, 5] <= [1, 2, 3, 4, 5];\nbool: true\n")))}c.isMDXComponent=!0}}]);