"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59425],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>b});var s=i(67294);function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if(null==t)return{};var i,s,l=function(t,e){if(null==t)return{};var i,s,l={},a=Object.keys(t);for(s=0;s<a.length;s++)i=a[s],e.indexOf(i)>=0||(l[i]=t[i]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)i=a[s],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(l[i]=t[i])}return l}var o=s.createContext({}),c=function(t){var e=s.useContext(o),i=e;return t&&(i="function"==typeof t?t(e):n(n({},e),t)),i},u=function(t){var e=c(t.components);return s.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var i=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),d=c(i),b=l,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return i?s.createElement(m,n(n({ref:e},u),{},{components:i})):s.createElement(m,n({ref:e},u))}));function b(t,e){var i=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=i.length,n=new Array(a);n[0]=d;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r.mdxType="string"==typeof t?t:l,n[1]=r;for(var c=2;c<a;c++)n[c]=i[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,i)}d.displayName="MDXCreateElement"},60455:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(83117),l=(i(67294),i(3905));const a={title:"lang::rascal::tests::basic::ListRelations"},n=void 0,r={unversionedId:"Library/lang/rascal/tests/basic/ListRelations",id:"Library/lang/rascal/tests/basic/ListRelations",title:"lang::rascal::tests::basic::ListRelations",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/ListRelations.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/ListRelations",permalink:"/docs/Library/lang/rascal/tests/basic/ListRelations",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/basic/ListRelations.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tests::basic::ListRelations"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::basic::IsDefined",permalink:"/docs/Library/lang/rascal/tests/basic/IsDefined"},next:{title:"lang::rascal::tests::basic::Lists",permalink:"/docs/Library/lang/rascal/tests/basic/Lists"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function product",id:"lang-rascal-tests-basic-ListRelations-product",level:2},{value:"function composition",id:"lang-rascal-tests-basic-ListRelations-composition",level:2},{value:"function selection",id:"lang-rascal-tests-basic-ListRelations-selection",level:2},{value:"function join",id:"lang-rascal-tests-basic-ListRelations-join",level:2},{value:"function subscription1",id:"lang-rascal-tests-basic-ListRelations-subscription1",level:2},{value:"function subscription2",id:"lang-rascal-tests-basic-ListRelations-subscription2",level:2},{value:"function tclosure",id:"lang-rascal-tests-basic-ListRelations-tclosure",level:2},{value:"function squeeze",id:"lang-rascal-tests-basic-ListRelations-squeeze",level:2},{value:"function rtclosure",id:"lang-rascal-tests-basic-ListRelations-rtclosure",level:2},{value:"function sample",id:"lang-rascal-tests-basic-ListRelations-sample",level:2},{value:"function tst_carrier",id:"lang-rascal-tests-basic-ListRelations-tst_carrier",level:2},{value:"function tst_carrierR",id:"lang-rascal-tests-basic-ListRelations-tst_carrierR",level:2},{value:"function tst_carrierX",id:"lang-rascal-tests-basic-ListRelations-tst_carrierX",level:2},{value:"function tst_complement",id:"lang-rascal-tests-basic-ListRelations-tst_complement",level:2},{value:"function tst_domain",id:"lang-rascal-tests-basic-ListRelations-tst_domain",level:2},{value:"function tst_domainR",id:"lang-rascal-tests-basic-ListRelations-tst_domainR",level:2},{value:"function tst_domainX",id:"lang-rascal-tests-basic-ListRelations-tst_domainX",level:2},{value:"function tst_ident",id:"lang-rascal-tests-basic-ListRelations-tst_ident",level:2},{value:"function tst_invert",id:"lang-rascal-tests-basic-ListRelations-tst_invert",level:2},{value:"function tst_range",id:"lang-rascal-tests-basic-ListRelations-tst_range",level:2},{value:"function tst_rangeR",id:"lang-rascal-tests-basic-ListRelations-tst_rangeR",level:2},{value:"function tst_rangeX",id:"lang-rascal-tests-basic-ListRelations-tst_rangeX",level:2}],u={toc:c};function p(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,s.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::ListRelations;")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-product"},"function product"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool product(list[&A]X, list[&B] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-composition"},"function composition"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition(lrel[int, str]X, lrel[str, int] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-selection"},"function selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool selection(lrel[&A fa, &B fb] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-\\join"},"function \\join"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool \\join(lrel[&A, &B]X, lrel[&B, &C, &D] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-subscription1"},"function subscription1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription1(lrel[&A, &B, &C] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-subscription2"},"function subscription2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription2(lrel[int,str] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tclosure"},"function tclosure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tclosure(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-squeeze"},"function squeeze"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list[&T] squeeze(list[&T] xs)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-rtclosure"},"function rtclosure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool rtclosure(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-sample"},"function sample"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[int] sample(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_carrier"},"function tst_carrier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrier(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_carrierR"},"function tst_carrierR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrierR(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_carrierX"},"function tst_carrierX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrierX(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_complement"},"function tst_complement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_complement(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_domain"},"function tst_domain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domain(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_domainR"},"function tst_domainR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domainR(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_domainX"},"function tst_domainX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domainX(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_ident"},"function tst_ident"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_ident(list[int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_invert"},"function tst_invert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_invert(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_range"},"function tst_range"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_range(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_rangeR"},"function tst_rangeR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_rangeR(lrel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-ListRelations-tst_rangeX"},"function tst_rangeX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_rangeX(lrel[int, int] X)"))))}p.isMDXComponent=!0}}]);