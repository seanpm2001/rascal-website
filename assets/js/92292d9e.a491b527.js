"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[32248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=l,y=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(y,c(c({ref:t},f),{},{components:r})):n.createElement(y,c({ref:t},f))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},73808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(83117),l=(r(67294),r(3905));const i={title:"lang::sdf2::filters::DetectCycles"},c=void 0,a={unversionedId:"Library/lang/sdf2/filters/DetectCycles",id:"Library/lang/sdf2/filters/DetectCycles",title:"lang::sdf2::filters::DetectCycles",description:"Usage",source:"@site/docs/Library/lang/sdf2/filters/DetectCycles.md",sourceDirName:"Library/lang/sdf2/filters",slug:"/Library/lang/sdf2/filters/DetectCycles",permalink:"/docs/Library/lang/sdf2/filters/DetectCycles",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/sdf2/filters/DetectCycles.md",tags:[],version:"current",frontMatter:{title:"lang::sdf2::filters::DetectCycles"},sidebar:"tutorialSidebar",previous:{title:"lang::sdf2::filters::CountPreferAvoid",permalink:"/docs/Library/lang/sdf2/filters/CountPreferAvoid"},next:{title:"lang::sdf2::filters::DirectThenCountPreferAvoid",permalink:"/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid"}},o={},s=[{value:"Usage",id:"usage",level:4},{value:"function cycleDetectionFilter",id:"lang-sdf2-filters-DetectCycles-cycleDetectionFilter",level:2}],f={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::sdf2::filters::DetectCycles;")),(0,l.kt)("h2",{id:"lang-sdf2-filters-DetectCycles-cycleDetectionFilter"},"function cycleDetectionFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&T<:Tree cycleDetectionFilter(amb(set[&T<:Tree] alts))"))))}u.isMDXComponent=!0}}]);