"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[13213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=f(r),p=i,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var f=2;f<l;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>f});var n=r(83117),i=(r(67294),r(3905));const l={title:"lang::sdf2::filters::DirectThenCountPreferAvoid"},a=void 0,o={unversionedId:"Library/lang/sdf2/filters/DirectThenCountPreferAvoid",id:"Library/lang/sdf2/filters/DirectThenCountPreferAvoid",title:"lang::sdf2::filters::DirectThenCountPreferAvoid",description:"Usage",source:"@site/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid.md",sourceDirName:"Library/lang/sdf2/filters",slug:"/Library/lang/sdf2/filters/DirectThenCountPreferAvoid",permalink:"/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/sdf2/filters/DirectThenCountPreferAvoid.md",tags:[],version:"current",frontMatter:{title:"lang::sdf2::filters::DirectThenCountPreferAvoid"},sidebar:"tutorialSidebar",previous:{title:"lang::sdf2::filters::DetectCycles",permalink:"/docs/Library/lang/sdf2/filters/DetectCycles"},next:{title:"lang::sdf2::filters::FilterCycles",permalink:"/docs/Library/lang/sdf2/filters/FilterCycles"}},s={},f=[{value:"Usage",id:"usage",level:4},{value:"function directThenCountPreferAvoidFilter",id:"lang-sdf2-filters-DirectThenCountPreferAvoid-directThenCountPreferAvoidFilter",level:2},{value:"function getTags",id:"lang-sdf2-filters-DirectThenCountPreferAvoid-getTags",level:2}],c={toc:f};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::sdf2::filters::DirectThenCountPreferAvoid;")),(0,i.kt)("h2",{id:"lang-sdf2-filters-DirectThenCountPreferAvoid-directThenCountPreferAvoidFilter"},"function directThenCountPreferAvoidFilter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&T <:Tree directThenCountPreferAvoidFilter(amb(set[&T <:Tree] alternatives))"))),(0,i.kt)("p",null,"Import his module if you want prefer/avoid filtering with counting enabled for your grammar. Use @prefer and @avoid to\nlabel alternatives."),(0,i.kt)("h2",{id:"lang-sdf2-filters-DirectThenCountPreferAvoid-getTags"},"function getTags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[list[value]] getTags(list[Tree] ts)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[value] getTags(Tree t)"))))}u.isMDXComponent=!0}}]);