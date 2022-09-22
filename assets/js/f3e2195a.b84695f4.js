"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53162],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=c(a),b=l,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?n.createElement(m,s(s({ref:e},u),{},{components:a})):n.createElement(m,s({ref:e},u))}));function b(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=a.length,s=new Array(i);s[0]=p;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r.mdxType="string"==typeof t?t:l,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40695:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(83117),l=(a(67294),a(3905));const i={title:"module lang::rascal::tests::basic::Relations"},s=void 0,r={unversionedId:"Library/lang/rascal/tests/basic/Relations",id:"Library/lang/rascal/tests/basic/Relations",title:"module lang::rascal::tests::basic::Relations",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Relations.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Relations",permalink:"/docs/Library/lang/rascal/tests/basic/Relations",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/basic/Relations.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Relations"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::Overloading",permalink:"/docs/Library/lang/rascal/tests/basic/Overloading"},next:{title:"module lang::rascal::tests::basic::Sets",permalink:"/docs/Library/lang/rascal/tests/basic/Sets"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function product",id:"lang-rascal-tests-basic-Relations-product",level:2},{value:"function composition",id:"lang-rascal-tests-basic-Relations-composition",level:2},{value:"function selection",id:"lang-rascal-tests-basic-Relations-selection",level:2},{value:"function join",id:"lang-rascal-tests-basic-Relations-join",level:2},{value:"function subscription",id:"lang-rascal-tests-basic-Relations-subscription",level:2},{value:"function tclosure",id:"lang-rascal-tests-basic-Relations-tclosure",level:2},{value:"function rtclosure",id:"lang-rascal-tests-basic-Relations-rtclosure",level:2},{value:"function sample",id:"lang-rascal-tests-basic-Relations-sample",level:2},{value:"function tst_carrier",id:"lang-rascal-tests-basic-Relations-tst_carrier",level:2},{value:"function tst_carrierR",id:"lang-rascal-tests-basic-Relations-tst_carrierR",level:2},{value:"function tst_carrierX",id:"lang-rascal-tests-basic-Relations-tst_carrierX",level:2},{value:"function tst_complement",id:"lang-rascal-tests-basic-Relations-tst_complement",level:2},{value:"function tst_domain",id:"lang-rascal-tests-basic-Relations-tst_domain",level:2},{value:"function tst_domainR",id:"lang-rascal-tests-basic-Relations-tst_domainR",level:2},{value:"function tst_domainX",id:"lang-rascal-tests-basic-Relations-tst_domainX",level:2},{value:"function tst_ident",id:"lang-rascal-tests-basic-Relations-tst_ident",level:2},{value:"function tst_invert",id:"lang-rascal-tests-basic-Relations-tst_invert",level:2},{value:"function tst_range",id:"lang-rascal-tests-basic-Relations-tst_range",level:2},{value:"function tst_rangeR",id:"lang-rascal-tests-basic-Relations-tst_rangeR",level:2},{value:"function tst_rangeX",id:"lang-rascal-tests-basic-Relations-tst_rangeX",level:2}],u={toc:c};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Relations;")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-product"},"function product"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool product(set[&A]X, set[&B] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-composition"},"function composition"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool composition(rel[int, str]X, rel[str, int] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-selection"},"function selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool selection(rel[&A fa, &B fb] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-\\join"},"function \\join"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool \\join(rel[&A, &B]X, rel[&B, &C, &D] Y)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-subscription"},"function subscription"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription(rel[&A, &B, &C] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tclosure"},"function tclosure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tclosure(rel[&A, &A] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-rtclosure"},"function rtclosure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool rtclosure(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-sample"},"function sample"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[int] sample(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_carrier"},"function tst_carrier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrier(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_carrierR"},"function tst_carrierR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrierR(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_carrierX"},"function tst_carrierX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_carrierX(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_complement"},"function tst_complement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_complement(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_domain"},"function tst_domain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domain(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_domainR"},"function tst_domainR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domainR(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_domainX"},"function tst_domainX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_domainX(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_ident"},"function tst_ident"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_ident(set[int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_invert"},"function tst_invert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_invert(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_range"},"function tst_range"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_range(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_rangeR"},"function tst_rangeR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_rangeR(rel[int, int] X)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Relations-tst_rangeX"},"function tst_rangeX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tst_rangeX(rel[int, int] X)"))))}d.isMDXComponent=!0}}]);