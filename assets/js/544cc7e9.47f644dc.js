"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71132],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(n),f=i,y=m["".concat(o,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(y,l(l({ref:e},u),{},{components:n})):a.createElement(y,l({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91972:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));const r={title:"module lang::rascal::tests::functionality::SimpleVisit"},l=void 0,s={unversionedId:"Library/lang/rascal/tests/functionality/SimpleVisit",id:"Library/lang/rascal/tests/functionality/SimpleVisit",title:"module lang::rascal::tests::functionality::SimpleVisit",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/functionality/SimpleVisit.md",sourceDirName:"Library/lang/rascal/tests/functionality",slug:"/Library/lang/rascal/tests/functionality/SimpleVisit",permalink:"/docs/Library/lang/rascal/tests/functionality/SimpleVisit",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/functionality/SimpleVisit.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::functionality::SimpleVisit"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::functionality::Scoping",permalink:"/docs/Library/lang/rascal/tests/functionality/Scoping"},next:{title:"module lang::rascal::tests::functionality::Statement",permalink:"/docs/Library/lang/rascal/tests/functionality/Statement"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"data B",id:"lang-rascal-tests-functionality-SimpleVisit-B",level:2},{value:"function visitTest",id:"lang-rascal-tests-functionality-SimpleVisit-visitTest",level:2},{value:"function matchTest",id:"lang-rascal-tests-functionality-SimpleVisit-matchTest",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::functionality::SimpleVisit;")),(0,i.kt)("h2",{id:"lang-rascal-tests-functionality-SimpleVisit-B"},"data B"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data B  \n     = and(B lhs, B rhs)\n     | t()\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-functionality-SimpleVisit-visitTest"},"function visitTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool visitTest()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-functionality-SimpleVisit-matchTest"},"function matchTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool matchTest()"))))}p.isMDXComponent=!0}}]);