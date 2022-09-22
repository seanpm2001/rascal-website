"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6257],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var o=r.createContext({}),c=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=c(a),g=s,f=p["".concat(o,".").concat(g)]||p[g]||u[g]||n;return a?r.createElement(f,l(l({ref:e},m),{},{components:a})):r.createElement(f,l({ref:e},m))}));function g(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,l=new Array(n);l[0]=p;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:s,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37940:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(83117),s=(a(67294),a(3905));const n={title:"lang::rascal::grammar::tests::CharactersTests"},l=void 0,i={unversionedId:"Library/lang/rascal/grammar/tests/CharactersTests",id:"Library/lang/rascal/grammar/tests/CharactersTests",title:"lang::rascal::grammar::tests::CharactersTests",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/tests/CharactersTests.md",sourceDirName:"Library/lang/rascal/grammar/tests",slug:"/Library/lang/rascal/grammar/tests/CharactersTests",permalink:"/docs/Library/lang/rascal/grammar/tests/CharactersTests",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/grammar/tests/CharactersTests.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::grammar::tests::CharactersTests"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::grammar::tests::CGrammar",permalink:"/docs/Library/lang/rascal/grammar/tests/CGrammar"},next:{title:"lang::rascal::grammar::tests::Compare",permalink:"/docs/Library/lang/rascal/grammar/tests/Compare"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function testFlip",id:"lang-rascal-grammar-tests-CharactersTests-testFlip",level:2},{value:"function testMerge",id:"lang-rascal-grammar-tests-CharactersTests-testMerge",level:2},{value:"function testEnvelop",id:"lang-rascal-grammar-tests-CharactersTests-testEnvelop",level:2},{value:"function testEnvelop2",id:"lang-rascal-grammar-tests-CharactersTests-testEnvelop2",level:2},{value:"function testComp",id:"lang-rascal-grammar-tests-CharactersTests-testComp",level:2},{value:"function testComp2",id:"lang-rascal-grammar-tests-CharactersTests-testComp2",level:2},{value:"function testComp3",id:"lang-rascal-grammar-tests-CharactersTests-testComp3",level:2},{value:"function testComp4",id:"lang-rascal-grammar-tests-CharactersTests-testComp4",level:2},{value:"function testComp5",id:"lang-rascal-grammar-tests-CharactersTests-testComp5",level:2},{value:"function testUnion1",id:"lang-rascal-grammar-tests-CharactersTests-testUnion1",level:2},{value:"function testUnion2",id:"lang-rascal-grammar-tests-CharactersTests-testUnion2",level:2},{value:"function testInter1",id:"lang-rascal-grammar-tests-CharactersTests-testInter1",level:2},{value:"function testInter2",id:"lang-rascal-grammar-tests-CharactersTests-testInter2",level:2},{value:"function testDiff1",id:"lang-rascal-grammar-tests-CharactersTests-testDiff1",level:2},{value:"function testDiff2",id:"lang-rascal-grammar-tests-CharactersTests-testDiff2",level:2}],m={toc:c};function u(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::tests::CharactersTests;")),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testFlip"},"function testFlip"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testFlip()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testMerge"},"function testMerge"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testMerge()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testEnvelop"},"function testEnvelop"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testEnvelop()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testEnvelop2"},"function testEnvelop2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testEnvelop2()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testComp"},"function testComp"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testComp()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testComp2"},"function testComp2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testComp2()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testComp3"},"function testComp3"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testComp3()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testComp4"},"function testComp4"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testComp4()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testComp5"},"function testComp5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testComp5()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testUnion1"},"function testUnion1"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testUnion1()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testUnion2"},"function testUnion2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testUnion2()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testInter1"},"function testInter1"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testInter1()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testInter2"},"function testInter2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testInter2()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testDiff1"},"function testDiff1"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testDiff1()"))),(0,s.kt)("h2",{id:"lang-rascal-grammar-tests-CharactersTests-testDiff2"},"function testDiff2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool testDiff2()"))))}u.isMDXComponent=!0}}]);