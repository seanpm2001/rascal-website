"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[55128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),p=l,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(83117),l=(n(67294),n(3905));const i={title:"module lang::sdf2::filters::GeneralInjectionCount"},o=void 0,a={unversionedId:"Library/lang/sdf2/filters/GeneralInjectionCount",id:"Library/lang/sdf2/filters/GeneralInjectionCount",title:"module lang::sdf2::filters::GeneralInjectionCount",description:"Usage",source:"@site/docs/Library/lang/sdf2/filters/GeneralInjectionCount.md",sourceDirName:"Library/lang/sdf2/filters",slug:"/Library/lang/sdf2/filters/GeneralInjectionCount",permalink:"/docs/Library/lang/sdf2/filters/GeneralInjectionCount",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/sdf2/filters/GeneralInjectionCount.md",tags:[],version:"current",frontMatter:{title:"module lang::sdf2::filters::GeneralInjectionCount"},sidebar:"tutorialSidebar",previous:{title:"module lang::sdf2::filters::FilterCycles",permalink:"/docs/Library/lang/sdf2/filters/FilterCycles"},next:{title:"module lang::sdf2::filters::IndirectPreferAvoid",permalink:"/docs/Library/lang/sdf2/filters/IndirectPreferAvoid"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"function injection",id:"lang-sdf2-filters-GeneralInjectionCount-injection",level:2},{value:"function generalInjectionCountFilter",id:"lang-sdf2-filters-GeneralInjectionCount-generalInjectionCountFilter",level:2}],u={toc:s};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::sdf2::filters::GeneralInjectionCount;")),(0,l.kt)("h2",{id:"lang-sdf2-filters-GeneralInjectionCount-injection"},"function injection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default bool injection(Tree _)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool injection(appl(prod(Symbol _,[Symbol _],set[Attr] _), [Tree _]))"))),(0,l.kt)("h2",{id:"lang-sdf2-filters-GeneralInjectionCount-generalInjectionCountFilter"},"function generalInjectionCountFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&T <: Tree generalInjectionCountFilter(amb(set[&T <: Tree] alts))"))))}f.isMDXComponent=!0}}]);