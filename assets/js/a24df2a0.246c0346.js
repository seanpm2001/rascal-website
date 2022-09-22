"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71059],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7924:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(83117),o=(t(67294),t(3905));const i={title:"Compiler Error"},l=void 0,a={unversionedId:"RunTimeErrors/OtherRuntimeErrors/CompilerError/index",id:"RunTimeErrors/OtherRuntimeErrors/CompilerError/index",title:"Compiler Error",description:"Synopsis",source:"@site/docs/RunTimeErrors/OtherRuntimeErrors/CompilerError/index.md",sourceDirName:"RunTimeErrors/OtherRuntimeErrors/CompilerError",slug:"/RunTimeErrors/OtherRuntimeErrors/CompilerError/",permalink:"/docs/RunTimeErrors/OtherRuntimeErrors/CompilerError/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RunTimeErrors/OtherRuntimeErrors/CompilerError/index.md",tags:[],version:"current",frontMatter:{title:"Compiler Error"},sidebar:"tutorialSidebar",previous:{title:"Other Runtime Errors",permalink:"/docs/RunTimeErrors/OtherRuntimeErrors/"},next:{title:"Runtime Exceptions",permalink:"/docs/RunTimeErrors/RuntimeExceptions/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"An internal error in the Rascal compiler"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"An internal error condition occurred while running the Rascal compiler.\nThis exception may be generated due to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An actual internal inconsistency."),(0,o.kt)("li",{parentName:"ul"},"Incorrect information as computed by the type checker."),(0,o.kt)("li",{parentName:"ul"},"Incorrect configuration of paths (PathConfig) when calling the compiler."),(0,o.kt)("li",{parentName:"ul"},"Causes outside control of the compiler.")),(0,o.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"At the moment this error category is too wide and should be narrowed."))}p.isMDXComponent=!0}}]);