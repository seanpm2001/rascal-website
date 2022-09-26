"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[77140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"List Subscription",keywords:["[","]"]},s=void 0,l={unversionedId:"Rascal/Expressions/Values/List/Subscription/index",id:"Rascal/Expressions/Values/List/Subscription/index",title:"List Subscription",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/List/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/List/Subscription",slug:"/Rascal/Expressions/Values/List/Subscription/",permalink:"/docs/Rascal/Expressions/Values/List/Subscription/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/List/Subscription/index.md",tags:[],version:"current",frontMatter:{title:"List Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"List SubList",permalink:"/docs/Rascal/Expressions/Values/List/SubList/"},next:{title:"List SuperList",permalink:"/docs/Rascal/Expressions/Values/List/SuperList/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Retrieve a list element via its index."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp\u2081 [ Exp\u2082 ]")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,"//"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081 [ Exp\u2082 ]")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"list[T\u2081]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"T\u2081"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"List subscription uses the integer value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2082 as index in the list value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2081.\nThe value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2082 should be greater or equal 0 and less than the number of elements in the list.\nIf this is not the case, the exception ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexOutOfBounds")," is thrown."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Introduce a list, assign it to L and retrieve the element with index 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},"rascal>L = [10, 20, 30];\nlist[int]: [10,20,30]\nrascal>L[1];\nint: 20\n")),(0,a.kt)("p",null,"Explore an error case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},"rascal>L[5];\n|prompt:///|(2,1,<1,2>,<1,3>): IndexOutOfBounds(5)\n    at $shell$(|prompt:///|(0,5,<1,0>,<1,5>))\nok\n")))}u.isMDXComponent=!0}}]);