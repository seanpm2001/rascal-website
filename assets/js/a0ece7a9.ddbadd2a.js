"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[22177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(r),b=n,d=y["".concat(o,".").concat(b)]||y[b]||u[b]||l;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},90925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const l={title:"lang::rascal::tests::library::Type"},s=void 0,i={unversionedId:"Library/lang/rascal/tests/library/Type",id:"Library/lang/rascal/tests/library/Type",title:"lang::rascal::tests::library::Type",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/library/Type.md",sourceDirName:"Library/lang/rascal/tests/library",slug:"/Library/lang/rascal/tests/library/Type",permalink:"/docs/Library/lang/rascal/tests/library/Type",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/library/Type.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tests::library::Type"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::library::String",permalink:"/docs/Library/lang/rascal/tests/library/String"},next:{title:"lang::rascal::tests::library::ValueIO",permalink:"/docs/Library/lang/rascal/tests/library/ValueIO"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"data D",id:"lang-rascal-tests-library-Type-D",level:2},{value:"function tstMake1",id:"lang-rascal-tests-library-Type-tstMake1",level:2},{value:"function tstMake2",id:"lang-rascal-tests-library-Type-tstMake2",level:2},{value:"function tstMake3",id:"lang-rascal-tests-library-Type-tstMake3",level:2},{value:"function tstMake4",id:"lang-rascal-tests-library-Type-tstMake4",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::library::Type;")),(0,n.kt)("h2",{id:"lang-rascal-tests-library-Type-D"},"data D"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},'data D  \n     = a(bool b)\n     | a(str s1, str s2)\n     | a(int n, str color = "blue")\n     | a(str s, int sz = 10)\n     ;\n')),(0,n.kt)("h2",{id:"lang-rascal-tests-library-Type-tstMake1"},"function tstMake1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstMake1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-Type-tstMake2"},"function tstMake2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstMake2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-Type-tstMake3"},"function tstMake3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstMake3()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-Type-tstMake4"},"function tstMake4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool tstMake4()"))))}u.isMDXComponent=!0}}]);