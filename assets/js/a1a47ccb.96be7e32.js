"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[63890],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||l;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60650:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(83117),r=(t(67294),t(3905));const l={title:"lang::rascal::scaffold::GenOperators"},i=void 0,s={unversionedId:"Library/lang/rascal/scaffold/GenOperators",id:"Library/lang/rascal/scaffold/GenOperators",title:"lang::rascal::scaffold::GenOperators",description:"Usage",source:"@site/docs/Library/lang/rascal/scaffold/GenOperators.md",sourceDirName:"Library/lang/rascal/scaffold",slug:"/Library/lang/rascal/scaffold/GenOperators",permalink:"/docs/Library/lang/rascal/scaffold/GenOperators",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/scaffold/GenOperators.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::scaffold::GenOperators"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::scaffold",permalink:"/docs/Library/lang/rascal/scaffold/"},next:{title:"lang::rascal::scrap",permalink:"/docs/Library/lang/rascal/scrap/"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function numOfCases",id:"lang-rascal-scaffold-GenOperators-numOfCases",level:2},{value:"function type2iface",id:"lang-rascal-scaffold-GenOperators-type2iface",level:2},{value:"function genClasses",id:"lang-rascal-scaffold-GenOperators-genClasses",level:2},{value:"function genBinClass",id:"lang-rascal-scaffold-GenOperators-genBinClass",level:2},{value:"function classNameForOp",id:"lang-rascal-scaffold-GenOperators-classNameForOp",level:2},{value:"function genMethod",id:"lang-rascal-scaffold-GenOperators-genMethod",level:2}],p={toc:c};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::rascal::scaffold::GenOperators;")),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-numOfCases"},"function numOfCases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int numOfCases()"))),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-type2iface"},"function type2iface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("fun")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("list")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("real")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("map")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("datetime")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("rel")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("cons")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("str")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("value")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("int")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("bool")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("tuple")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("num")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("rat")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("set")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("node")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str type2iface("loc")'))),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-genClasses"},"function genClasses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str genClasses()"))),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-genBinClass"},"function genBinClass"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str genBinClass(str op, rel[str,str] args)"))),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-classNameForOp"},"function classNameForOp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str classNameForOp(str op)"))),(0,r.kt)("h2",{id:"lang-rascal-scaffold-GenOperators-genMethod"},"function genMethod"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str genMethod(str op, list[str] types)"))))}f.isMDXComponent=!0}}]);