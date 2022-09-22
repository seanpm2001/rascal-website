"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[69695],{3905:(a,t,e)=>{e.d(t,{Zo:()=>r,kt:()=>k});var n=e(67294);function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function c(a,t){if(null==a)return{};var e,n,l=function(a,t){if(null==a)return{};var e,n,l={},i=Object.keys(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(l[e]=a[e]);return l}(a,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(l[e]=a[e])}return l}var o=n.createContext({}),u=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):s(s({},t),a)),e},r=function(a){var t=u(a.components);return n.createElement(o.Provider,{value:t},a.children)},p={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(a,t){var e=a.components,l=a.mdxType,i=a.originalType,o=a.parentName,r=c(a,["components","mdxType","originalType","parentName"]),m=u(e),k=l,d=m["".concat(o,".").concat(k)]||m[k]||p[k]||i;return e?n.createElement(d,s(s({ref:t},r),{},{components:e})):n.createElement(d,s({ref:t},r))}));function k(a,t){var e=arguments,l=t&&t.mdxType;if("string"==typeof a||l){var i=e.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=a,c.mdxType="string"==typeof a?a:l,s[1]=c;for(var u=2;u<i;u++)s[u]=e[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},24054:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=e(83117),l=(e(67294),e(3905));const i={title:"lang::rascal::tests::basic::Maps"},s=void 0,c={unversionedId:"Library/lang/rascal/tests/basic/Maps",id:"Library/lang/rascal/tests/basic/Maps",title:"lang::rascal::tests::basic::Maps",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Maps.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Maps",permalink:"/docs/Library/lang/rascal/tests/basic/Maps",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/basic/Maps.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tests::basic::Maps"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::basic::Locations",permalink:"/docs/Library/lang/rascal/tests/basic/Locations"},next:{title:"lang::rascal::tests::basic::Matching",permalink:"/docs/Library/lang/rascal/tests/basic/Matching"}},o={},u=[{value:"Usage",id:"usage",level:4},{value:"function emptyMap",id:"lang-rascal-tests-basic-Maps-emptyMap",level:2},{value:"function emptyList",id:"lang-rascal-tests-basic-Maps-emptyList",level:2},{value:"function up",id:"lang-rascal-tests-basic-Maps-up",level:2},{value:"function composition1",id:"lang-rascal-tests-basic-Maps-composition1",level:2},{value:"function composition2",id:"lang-rascal-tests-basic-Maps-composition2",level:2},{value:"function composition3",id:"lang-rascal-tests-basic-Maps-composition3",level:2},{value:"function composition4",id:"lang-rascal-tests-basic-Maps-composition4",level:2},{value:"function comprehension1",id:"lang-rascal-tests-basic-Maps-comprehension1",level:2},{value:"function comprehension2",id:"lang-rascal-tests-basic-Maps-comprehension2",level:2},{value:"function comprehension3",id:"lang-rascal-tests-basic-Maps-comprehension3",level:2},{value:"function difference1",id:"lang-rascal-tests-basic-Maps-difference1",level:2},{value:"function difference2",id:"lang-rascal-tests-basic-Maps-difference2",level:2},{value:"function difference3",id:"lang-rascal-tests-basic-Maps-difference3",level:2},{value:"function difference4",id:"lang-rascal-tests-basic-Maps-difference4",level:2},{value:"function difference5",id:"lang-rascal-tests-basic-Maps-difference5",level:2},{value:"function equal1",id:"lang-rascal-tests-basic-Maps-equal1",level:2},{value:"function equal2",id:"lang-rascal-tests-basic-Maps-equal2",level:2},{value:"function equal3",id:"lang-rascal-tests-basic-Maps-equal3",level:2},{value:"function equal4",id:"lang-rascal-tests-basic-Maps-equal4",level:2},{value:"function equal5",id:"lang-rascal-tests-basic-Maps-equal5",level:2},{value:"function equal6",id:"lang-rascal-tests-basic-Maps-equal6",level:2},{value:"function in1",id:"lang-rascal-tests-basic-Maps-in1",level:2},{value:"function in2",id:"lang-rascal-tests-basic-Maps-in2",level:2},{value:"function in3",id:"lang-rascal-tests-basic-Maps-in3",level:2},{value:"function in4",id:"lang-rascal-tests-basic-Maps-in4",level:2},{value:"function in5",id:"lang-rascal-tests-basic-Maps-in5",level:2},{value:"function in6",id:"lang-rascal-tests-basic-Maps-in6",level:2},{value:"function intersection1",id:"lang-rascal-tests-basic-Maps-intersection1",level:2},{value:"function intersection2",id:"lang-rascal-tests-basic-Maps-intersection2",level:2},{value:"function intersection3",id:"lang-rascal-tests-basic-Maps-intersection3",level:2},{value:"function intersection4",id:"lang-rascal-tests-basic-Maps-intersection4",level:2},{value:"function intersection5",id:"lang-rascal-tests-basic-Maps-intersection5",level:2},{value:"function intersection6",id:"lang-rascal-tests-basic-Maps-intersection6",level:2},{value:"function intersection7",id:"lang-rascal-tests-basic-Maps-intersection7",level:2},{value:"function notequal1",id:"lang-rascal-tests-basic-Maps-notequal1",level:2},{value:"function notequal2",id:"lang-rascal-tests-basic-Maps-notequal2",level:2},{value:"function notequal3",id:"lang-rascal-tests-basic-Maps-notequal3",level:2},{value:"function notequal4",id:"lang-rascal-tests-basic-Maps-notequal4",level:2},{value:"function notequal5",id:"lang-rascal-tests-basic-Maps-notequal5",level:2},{value:"function notequal6",id:"lang-rascal-tests-basic-Maps-notequal6",level:2},{value:"function notequal7",id:"lang-rascal-tests-basic-Maps-notequal7",level:2},{value:"function notequal8",id:"lang-rascal-tests-basic-Maps-notequal8",level:2},{value:"function notin1",id:"lang-rascal-tests-basic-Maps-notin1",level:2},{value:"function notin2",id:"lang-rascal-tests-basic-Maps-notin2",level:2},{value:"function pm1",id:"lang-rascal-tests-basic-Maps-pm1",level:2},{value:"function pm2",id:"lang-rascal-tests-basic-Maps-pm2",level:2},{value:"function pm3",id:"lang-rascal-tests-basic-Maps-pm3",level:2},{value:"function pm4",id:"lang-rascal-tests-basic-Maps-pm4",level:2},{value:"function strictsubmap1",id:"lang-rascal-tests-basic-Maps-strictsubmap1",level:2},{value:"function strictsubmap2",id:"lang-rascal-tests-basic-Maps-strictsubmap2",level:2},{value:"function strictsupermap1",id:"lang-rascal-tests-basic-Maps-strictsupermap1",level:2},{value:"function strictsupermap2",id:"lang-rascal-tests-basic-Maps-strictsupermap2",level:2},{value:"function submap1",id:"lang-rascal-tests-basic-Maps-submap1",level:2},{value:"function submap2",id:"lang-rascal-tests-basic-Maps-submap2",level:2},{value:"function submap3",id:"lang-rascal-tests-basic-Maps-submap3",level:2},{value:"function submap4",id:"lang-rascal-tests-basic-Maps-submap4",level:2},{value:"function subscription1",id:"lang-rascal-tests-basic-Maps-subscription1",level:2},{value:"function subscription2",id:"lang-rascal-tests-basic-Maps-subscription2",level:2},{value:"function subscription3",id:"lang-rascal-tests-basic-Maps-subscription3",level:2},{value:"function subscription4",id:"lang-rascal-tests-basic-Maps-subscription4",level:2},{value:"function supermap1",id:"lang-rascal-tests-basic-Maps-supermap1",level:2},{value:"function supermap2",id:"lang-rascal-tests-basic-Maps-supermap2",level:2},{value:"function supermap3",id:"lang-rascal-tests-basic-Maps-supermap3",level:2},{value:"function supermap4",id:"lang-rascal-tests-basic-Maps-supermap4",level:2},{value:"function union1",id:"lang-rascal-tests-basic-Maps-union1",level:2},{value:"function union2",id:"lang-rascal-tests-basic-Maps-union2",level:2},{value:"function union3",id:"lang-rascal-tests-basic-Maps-union3",level:2},{value:"function union4",id:"lang-rascal-tests-basic-Maps-union4",level:2},{value:"function increment1",id:"lang-rascal-tests-basic-Maps-increment1",level:2},{value:"function keyIsInRange",id:"lang-rascal-tests-basic-Maps-keyIsInRange",level:2},{value:"function rightValIsUsedForKey",id:"lang-rascal-tests-basic-Maps-rightValIsUsedForKey",level:2},{value:"function isUnion",id:"lang-rascal-tests-basic-Maps-isUnion",level:2},{value:"function union",id:"lang-rascal-tests-basic-Maps-union",level:2},{value:"function isDiff",id:"lang-rascal-tests-basic-Maps-isDiff",level:2},{value:"function diff",id:"lang-rascal-tests-basic-Maps-diff",level:2},{value:"function intersection",id:"lang-rascal-tests-basic-Maps-intersection",level:2},{value:"function lesseq",id:"lang-rascal-tests-basic-Maps-lesseq",level:2},{value:"function less",id:"lang-rascal-tests-basic-Maps-less",level:2},{value:"function greatereq",id:"lang-rascal-tests-basic-Maps-greatereq",level:2},{value:"function greater",id:"lang-rascal-tests-basic-Maps-greater",level:2},{value:"function intKeyHandling1",id:"lang-rascal-tests-basic-Maps-intKeyHandling1",level:2},{value:"function intKeyHandling2",id:"lang-rascal-tests-basic-Maps-intKeyHandling2",level:2},{value:"function intKeyHandling3",id:"lang-rascal-tests-basic-Maps-intKeyHandling3",level:2},{value:"function intKeyHandling4",id:"lang-rascal-tests-basic-Maps-intKeyHandling4",level:2},{value:"function intKeyHandling5",id:"lang-rascal-tests-basic-Maps-intKeyHandling5",level:2},{value:"function intKeyHandling6",id:"lang-rascal-tests-basic-Maps-intKeyHandling6",level:2}],r={toc:u};function p(a){let{components:t,...e}=a;return(0,l.kt)("wrapper",(0,n.Z)({},r,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Maps;")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-emptyMap"},"function emptyMap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K,&V] emptyMap(type[map[&K,&V]] _)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-emptyList"},"function emptyList"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list[&T] emptyList(type[&T] _)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-up"},"function up"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[value,value] up(map[&K,&V] m)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-composition1"},"function composition1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-composition2"},"function composition2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-composition3"},"function composition3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition3(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-composition4"},"function composition4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition4(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-comprehension1"},"function comprehension1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool comprehension1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-comprehension2"},"function comprehension2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool comprehension2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-comprehension3"},"function comprehension3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool comprehension3(set[&K] xs)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-difference1"},"function difference1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool difference1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-difference2"},"function difference2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool difference2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-difference3"},"function difference3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool difference3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-difference4"},"function difference4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool difference4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-difference5"},"function difference5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool difference5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal1"},"function equal1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal2"},"function equal2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal3"},"function equal3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal3(map[&K,&V] M1, map[&K,&V] M2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal4"},"function equal4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal5"},"function equal5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-equal6"},"function equal6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool equal6()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in1"},"function in1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in2"},"function in2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in2(&K k)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in3"},"function in3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in3(&K k, &V v, map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in4"},"function in4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in4(&K k, &V v, map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in5"},"function in5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in5(&K k, &V v, map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-in6"},"function in6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool in6(&K k, &V v, map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection1"},"function intersection1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection2"},"function intersection2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection3"},"function intersection3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection4"},"function intersection4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection5"},"function intersection5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection6"},"function intersection6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection6(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection7"},"function intersection7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection7(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal1"},"function notequal1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal2"},"function notequal2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal3"},"function notequal3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal3(map[&K,&V] M1, map[&K,&V] M2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal4"},"function notequal4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal5"},"function notequal5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal6"},"function notequal6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal6()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal7"},"function notequal7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal7()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notequal8"},"function notequal8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notequal8(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notin1"},"function notin1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notin1(&K k)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-notin2"},"function notin2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool notin2(&K k, map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-pm1"},"function pm1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool pm1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-pm2"},"function pm2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool pm2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-pm3"},"function pm3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool pm3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-pm4"},"function pm4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool pm4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-strictsubmap1"},"function strictsubmap1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool strictsubmap1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-strictsubmap2"},"function strictsubmap2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool strictsubmap2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-strictsupermap1"},"function strictsupermap1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool strictsupermap1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-strictsupermap2"},"function strictsupermap2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool strictsupermap2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-submap1"},"function submap1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool submap1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-submap2"},"function submap2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool submap2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-submap3"},"function submap3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool submap3(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-submap4"},"function submap4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool submap4(map[&K,&V] M1, map[&K,&V] M2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-subscription1"},"function subscription1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription1(&K k)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-subscription2"},"function subscription2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-subscription3"},"function subscription3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-subscription4"},"function subscription4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-supermap1"},"function supermap1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool supermap1(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-supermap2"},"function supermap2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool supermap2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-supermap3"},"function supermap3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool supermap3(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-supermap4"},"function supermap4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool supermap4(map[&K,&V] M1, map[&K,&V] M2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-union1"},"function union1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool union1(map[&K,&V] M1, map[&K,&V] M2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-union2"},"function union2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool union2(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-union3"},"function union3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool union3(map[&K,&V] M)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-union4"},"function union4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool union4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-increment1"},"function increment1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool increment1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-keyIsInRange"},"function keyIsInRange"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool keyIsInRange(&K x, map[&K, &V] A, map[&K, &V] B, map[&K, &V] C)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-rightValIsUsedForKey"},"function rightValIsUsedForKey"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool rightValIsUsedForKey(&K x, map[&K, &V] A, map[&K, &V] B, map[&K, &V] C)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-isUnion"},"function isUnion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool isUnion(map[&K, &V] A, map[&K, &V] B, map[&K, &V] C)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-union"},"function union"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool union(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-isDiff"},"function isDiff"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool isDiff(map[&K, &V] A, map[&K, &V] B, map[&K, &V] C)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-diff"},"function diff"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool diff(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intersection"},"function intersection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intersection(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-lesseq"},"function lesseq"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool lesseq(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-less"},"function less"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool less(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-greatereq"},"function greatereq"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool greatereq(map[&K, &V] A, map[&K, &V] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-greater"},"function greater"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool greater(map[int, str] A, map[int, str] B)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling1"},"function intKeyHandling1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling2"},"function intKeyHandling2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling3"},"function intKeyHandling3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling4"},"function intKeyHandling4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling5"},"function intKeyHandling5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Maps-intKeyHandling6"},"function intKeyHandling6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool intKeyHandling6()"))))}p.isMDXComponent=!0}}]);