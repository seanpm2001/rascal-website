"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[60626],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>y});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(l),y=n,C=u["".concat(i,".").concat(y)]||u[y]||m[y]||a;return l?r.createElement(C,s(s({ref:t},p),{},{components:l})):r.createElement(C,s({ref:t},p))}));function y(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<a;o++)s[o]=l[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,l)}u.displayName="MDXCreateElement"},30818:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=l(83117),n=(l(67294),l(3905));const a={title:"module lang::rascal::tests::imports::CyclicImports1"},s=void 0,c={unversionedId:"Library/lang/rascal/tests/imports/CyclicImports1",id:"Library/lang/rascal/tests/imports/CyclicImports1",title:"module lang::rascal::tests::imports::CyclicImports1",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/imports/CyclicImports1.md",sourceDirName:"Library/lang/rascal/tests/imports",slug:"/Library/lang/rascal/tests/imports/CyclicImports1",permalink:"/docs/Library/lang/rascal/tests/imports/CyclicImports1",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/imports/CyclicImports1.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::imports::CyclicImports1"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::imports::C2",permalink:"/docs/Library/lang/rascal/tests/imports/C2"},next:{title:"module lang::rascal::tests::imports::IMP1",permalink:"/docs/Library/lang/rascal/tests/imports/IMP1"}},i={},o=[{value:"Usage",id:"usage",level:4},{value:"function Cycle1",id:"lang-rascal-tests-imports-CyclicImports1-Cycle1",level:2},{value:"function Cycle2",id:"lang-rascal-tests-imports-CyclicImports1-Cycle2",level:2},{value:"function Cycle3",id:"lang-rascal-tests-imports-CyclicImports1-Cycle3",level:2},{value:"function Cycle4",id:"lang-rascal-tests-imports-CyclicImports1-Cycle4",level:2},{value:"function Cycle5",id:"lang-rascal-tests-imports-CyclicImports1-Cycle5",level:2},{value:"function Cycle6",id:"lang-rascal-tests-imports-CyclicImports1-Cycle6",level:2},{value:"function Cycle7",id:"lang-rascal-tests-imports-CyclicImports1-Cycle7",level:2},{value:"function Cycle8",id:"lang-rascal-tests-imports-CyclicImports1-Cycle8",level:2}],p={toc:o};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::imports::CyclicImports1;")),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle1"},"function Cycle1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle2"},"function Cycle2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle3"},"function Cycle3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle3()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle4"},"function Cycle4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle4()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle5"},"function Cycle5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle5()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle6"},"function Cycle6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle6()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle7"},"function Cycle7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle7()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle8"},"function Cycle8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool Cycle8()"))))}m.isMDXComponent=!0}}]);