"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[52228],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59789:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const l={title:"module lang::rascal::tests::imports::C1"},i=void 0,s={unversionedId:"Library/lang/rascal/tests/imports/C1",id:"Library/lang/rascal/tests/imports/C1",title:"module lang::rascal::tests::imports::C1",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/imports/C1.md",sourceDirName:"Library/lang/rascal/tests/imports",slug:"/Library/lang/rascal/tests/imports/C1",permalink:"/docs/Library/lang/rascal/tests/imports/C1",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/imports/C1.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::imports::C1"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::imports",permalink:"/docs/Library/lang/rascal/tests/imports/"},next:{title:"module lang::rascal::tests::imports::C2",permalink:"/docs/Library/lang/rascal/tests/imports/C2"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"data D",id:"lang-rascal-tests-imports-C1-D",level:2},{value:"alias C1Alias",id:"lang-rascal-tests-imports-C1-C1Alias",level:2},{value:"function isDint",id:"lang-rascal-tests-imports-C1-isDint",level:2},{value:"function C1func",id:"lang-rascal-tests-imports-C1-C1func",level:2},{value:"function C1function",id:"lang-rascal-tests-imports-C1-C1function",level:2},{value:"function C1testFunction",id:"lang-rascal-tests-imports-C1-C1testFunction",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::imports::C1;")),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-D"},"data D"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data D  \n     = d(int n)\n     ;\n")),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-C1Alias"},"alias C1Alias"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-isDint"},"function isDint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool isDint(d(int _))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default bool isDint(D _)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-C1func"},"function C1func"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C1Alias C1func(C2Alias i)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-C1function"},"function C1function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int C1function()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-C1-C1testFunction"},"function C1testFunction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int C1testFunction(int () f = C2function)"))))}p.isMDXComponent=!0}}]);