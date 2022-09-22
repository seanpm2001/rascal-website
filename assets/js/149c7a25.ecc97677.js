"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[36246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=o.createContext({}),m=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),y=l,p=d["".concat(a,".").concat(y)]||d[y]||u[y]||r;return n?o.createElement(p,c(c({ref:t},s),{},{components:n})):o.createElement(p,c({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,c[1]=i;for(var m=2;m<r;m++)c[m]=n[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(83117),l=(n(67294),n(3905));const r={title:"module demo::common::Cycles"},c=void 0,i={unversionedId:"Library/demo/common/Cycles",id:"Library/demo/common/Cycles",title:"module demo::common::Cycles",description:"Usage",source:"@site/docs/Library/demo/common/Cycles.md",sourceDirName:"Library/demo/common",slug:"/Library/demo/common/Cycles",permalink:"/docs/Library/demo/common/Cycles",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/demo/common/Cycles.md",tags:[],version:"current",frontMatter:{title:"module demo::common::Cycles"},sidebar:"tutorialSidebar",previous:{title:"module demo::common::Crawl",permalink:"/docs/Library/demo/common/Crawl"},next:{title:"module demo::common::Derivative",permalink:"/docs/Library/demo/common/Derivative"}},a={},m=[{value:"Usage",id:"usage",level:4},{value:"function cycles",id:"demo-common-Cycles-cycles",level:2},{value:"function isProperCycle",id:"demo-common-Cycles-isProperCycle",level:2},{value:"function subCycles",id:"demo-common-Cycles-subCycles",level:2},{value:"function allSubCycles",id:"demo-common-Cycles-allSubCycles",level:2},{value:"function t1",id:"demo-common-Cycles-t1",level:2},{value:"function t2",id:"demo-common-Cycles-t2",level:2},{value:"function t3",id:"demo-common-Cycles-t3",level:2}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import demo::common::Cycles;")),(0,l.kt)("h2",{id:"demo-common-Cycles-cycles"},"function cycles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[int, set[int]] cycles(rel[int,int] Graph)"))),(0,l.kt)("h2",{id:"demo-common-Cycles-isProperCycle"},"function isProperCycle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool isProperCycle(rel[int,int] Graph, int N, set[int] C)"))),(0,l.kt)("h2",{id:"demo-common-Cycles-subCycles"},"function subCycles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[set[int]] subCycles (rel[int,int] Graph, int N, set[int] Cycle)"))),(0,l.kt)("h2",{id:"demo-common-Cycles-allSubCycles"},"function allSubCycles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[int, set[set[int]]] allSubCycles(rel[int,int] Graph, rel[int, set[int]] Cycles)"))),(0,l.kt)("h2",{id:"demo-common-Cycles-t1"},"function t1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool t1()"))),(0,l.kt)("h2",{id:"demo-common-Cycles-t2"},"function t2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool t2()"))),(0,l.kt)("h2",{id:"demo-common-Cycles-t3"},"function t3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool t3()"))))}u.isMDXComponent=!0}}]);