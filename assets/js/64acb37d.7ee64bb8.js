"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[12092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=o(r),g=n,f=c["".concat(i,".").concat(g)]||c[g]||u[g]||l;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,s[1]=d;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},61776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(83117),n=(r(67294),r(3905));const l={title:"module lang::rascal::upgrade::UpdateNestedListAndSetPatterns"},s=void 0,d={unversionedId:"Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns",id:"Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns",title:"module lang::rascal::upgrade::UpdateNestedListAndSetPatterns",description:"Usage",source:"@site/docs/Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns.md",sourceDirName:"Library/lang/rascal/upgrade",slug:"/Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns",permalink:"/docs/Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::upgrade::UpdateNestedListAndSetPatterns"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::upgrade",permalink:"/docs/Library/lang/rascal/upgrade/"},next:{title:"module lang::rascal::upgrade::UpgradePostfixStarAndPlusToPrefix",permalink:"/docs/Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix"}},i={},o=[{value:"Usage",id:"usage",level:4},{value:"function report",id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-report",level:2},{value:"function update",id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-update",level:2},{value:"function report",id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-report",level:2},{value:"function updateTree",id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-updateTree",level:2}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::upgrade::UpdateNestedListAndSetPatterns;")),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-report"},"function report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] report(loc root)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-update"},"function update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void update(loc root)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-report"},"function report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] report(Tree m)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpdateNestedListAndSetPatterns-updateTree"},"function updateTree"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Tree updateTree(Tree m)"))))}u.isMDXComponent=!0}}]);