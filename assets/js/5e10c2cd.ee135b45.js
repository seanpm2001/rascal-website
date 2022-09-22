"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97934],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(y,i(i({ref:r},d),{},{components:t})):n.createElement(y,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22629:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(83117),a=(t(67294),t(3905));const l={title:"UndeclaredKeywordParameter"},i=void 0,o={unversionedId:"CompileTimeErrors/UndeclaredKeywordParameter/index",id:"CompileTimeErrors/UndeclaredKeywordParameter/index",title:"UndeclaredKeywordParameter",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UndeclaredKeywordParameter/index.md",sourceDirName:"CompileTimeErrors/UndeclaredKeywordParameter",slug:"/CompileTimeErrors/UndeclaredKeywordParameter/",permalink:"/docs/CompileTimeErrors/UndeclaredKeywordParameter/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/UndeclaredKeywordParameter/index.md",tags:[],version:"current",frontMatter:{title:"UndeclaredKeywordParameter"},sidebar:"tutorialSidebar",previous:{title:"UndeclaredJavaMethod",permalink:"/docs/CompileTimeErrors/UndeclaredJavaMethod/"},next:{title:"UndeclaredModule",permalink:"/docs/CompileTimeErrors/UndeclaredModule/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A function is called with a keyword parameter that was not declared in the function's declaration."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Rascal functions may have keyword parameters. This error is generated when a function call uses an undeclared keyword parameter."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename the keyword parameter in the call."),(0,a.kt)("li",{parentName:"ul"},"Add a new keyword parameter to the function.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int incr(int n, int delta=1) = n + delta;\nint (int, int delta = ...): function(|prompt:///|(0,41,<1,0>,<1,41>))\n")),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"incr")," with a wrong keyword parameter gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>incr(3, diff=5);\nint: 4\n")),(0,a.kt)("p",null,"This can be fixed by using the correct name for the keyword parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>incr(3, delta=5);\nint: 8\n")),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}p.isMDXComponent=!0}}]);