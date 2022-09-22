"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[44467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return a?r.createElement(b,i(i({ref:t},m),{},{components:a})):r.createElement(b,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const l={title:"module lang::rascal::tests::basic::Memoization"},i=void 0,o={unversionedId:"Library/lang/rascal/tests/basic/Memoization",id:"Library/lang/rascal/tests/basic/Memoization",title:"module lang::rascal::tests::basic::Memoization",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Memoization.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Memoization",permalink:"/docs/Library/lang/rascal/tests/basic/Memoization",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/basic/Memoization.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Memoization"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::Matching",permalink:"/docs/Library/lang/rascal/tests/basic/Matching"},next:{title:"module lang::rascal::tests::basic::Nodes",permalink:"/docs/Library/lang/rascal/tests/basic/Nodes"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function call",id:"lang-rascal-tests-basic-Memoization-call",level:2},{value:"function memoCalledCorrectly",id:"lang-rascal-tests-basic-Memoization-memoCalledCorrectly",level:2},{value:"function memoCalledCorrectly2",id:"lang-rascal-tests-basic-Memoization-memoCalledCorrectly2",level:2},{value:"function memoExpire",id:"lang-rascal-tests-basic-Memoization-memoExpire",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Memoization;")),(0,n.kt)("p",null,"This module test the memoization feature"),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Memoization-call"},"function call"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void call(value _)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Memoization-memoCalledCorrectly"},"function memoCalledCorrectly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool memoCalledCorrectly(set[value] x)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Memoization-memoCalledCorrectly2"},"function memoCalledCorrectly2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool memoCalledCorrectly2(set[value] x)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Memoization-memoExpire"},"function memoExpire"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool memoExpire()"))))}u.isMDXComponent=!0}}]);