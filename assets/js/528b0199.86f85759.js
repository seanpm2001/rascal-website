"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[73909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=l,f=u["".concat(c,".").concat(s)]||u[s]||d[s]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(83117),l=(n(67294),n(3905));const r={title:"module demo::common::WordReplacement"},a=void 0,i={unversionedId:"Library/demo/common/WordReplacement",id:"Library/demo/common/WordReplacement",title:"module demo::common::WordReplacement",description:"Usage",source:"@site/docs/Library/demo/common/WordReplacement.md",sourceDirName:"Library/demo/common",slug:"/Library/demo/common/WordReplacement",permalink:"/docs/Library/demo/common/WordReplacement",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/demo/common/WordReplacement.md",tags:[],version:"current",frontMatter:{title:"module demo::common::WordReplacement"},sidebar:"tutorialSidebar",previous:{title:"demo::common::WordCount",permalink:"/docs/Library/demo/common/WordCount/"},next:{title:"demo::lang",permalink:"/docs/Library/demo/lang/"}},c={},m=[{value:"Usage",id:"usage",level:4},{value:"function capitalize",id:"demo-common-WordReplacement-capitalize",level:2},{value:"function capitalize1",id:"demo-common-WordReplacement-capitalize1",level:2},{value:"function capitalize2",id:"demo-common-WordReplacement-capitalize2",level:2},{value:"function capAll1",id:"demo-common-WordReplacement-capAll1",level:2},{value:"function tstCapAll1",id:"demo-common-WordReplacement-tstCapAll1",level:2},{value:"function capAll2",id:"demo-common-WordReplacement-capAll2",level:2},{value:"function tstCapAll2",id:"demo-common-WordReplacement-tstCapAll2",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import demo::common::WordReplacement;")),(0,l.kt)("h2",{id:"demo-common-WordReplacement-capitalize"},"function capitalize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str capitalize(str word)"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-capitalize1"},"function capitalize1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool capitalize1()"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-capitalize2"},"function capitalize2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool capitalize2()"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-capAll1"},"function capAll1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str capAll1(str S)"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-tstCapAll1"},"function tstCapAll1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstCapAll1()"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-capAll2"},"function capAll2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str capAll2(str S)"))),(0,l.kt)("h2",{id:"demo-common-WordReplacement-tstCapAll2"},"function tstCapAll2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstCapAll2()"))))}d.isMDXComponent=!0}}]);