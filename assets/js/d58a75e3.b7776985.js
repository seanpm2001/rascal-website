"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[60337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),i=(r(67294),r(3905));const o={title:"ModuleNameMismatch"},a=void 0,l={unversionedId:"CompileTimeErrors/ModuleNameMismatch/index",id:"CompileTimeErrors/ModuleNameMismatch/index",title:"ModuleNameMismatch",description:"Synopsis",source:"@site/docs/CompileTimeErrors/ModuleNameMismatch/index.md",sourceDirName:"CompileTimeErrors/ModuleNameMismatch",slug:"/CompileTimeErrors/ModuleNameMismatch/",permalink:"/docs/CompileTimeErrors/ModuleNameMismatch/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/ModuleNameMismatch/index.md",tags:[],version:"current",frontMatter:{title:"ModuleNameMismatch"},sidebar:"tutorialSidebar",previous:{title:"ModuleImport",permalink:"/docs/CompileTimeErrors/ModuleImport/"},next:{title:"NoKeywordParameters",permalink:"/docs/CompileTimeErrors/NoKeywordParameters/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Module name and file name are different."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"A Rascal module has a name (the name that follows the ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," keyword) and it is stored in a file.\nThe (enforced) convention is that the name of the module (say ",(0,i.kt)("inlineCode",{parentName:"p"},"MyModule"),") and the name of the file should be the same\n(except fo the Rascal extension ",(0,i.kt)("inlineCode",{parentName:"p"},".rsc"),"). Module ",(0,i.kt)("inlineCode",{parentName:"p"},"MyModule")," should be stored in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"MyModule.rsc"),".\nThis error signals that this convention is violated."),(0,i.kt)("p",null,"Remedies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rename the module."),(0,i.kt)("li",{parentName:"ul"},"Rename the file.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"benefits"},"Benefits"))}p.isMDXComponent=!0}}]);