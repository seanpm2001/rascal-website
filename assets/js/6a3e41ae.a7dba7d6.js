"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[37636],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=p;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93207:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(83117),l=(t(67294),t(3905));const o={title:"UndeclaredModule"},i=void 0,a={unversionedId:"CompileTimeErrors/UndeclaredModule/index",id:"CompileTimeErrors/UndeclaredModule/index",title:"UndeclaredModule",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UndeclaredModule/index.md",sourceDirName:"CompileTimeErrors/UndeclaredModule",slug:"/CompileTimeErrors/UndeclaredModule/",permalink:"/docs/CompileTimeErrors/UndeclaredModule/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/UndeclaredModule/index.md",tags:[],version:"current",frontMatter:{title:"UndeclaredModule"},sidebar:"tutorialSidebar",previous:{title:"UndeclaredKeywordParameter",permalink:"/docs/CompileTimeErrors/UndeclaredKeywordParameter/"},next:{title:"UndeclaredModuleProvider",permalink:"/docs/CompileTimeErrors/UndeclaredModuleProvider/"}},d={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Reference to a non-existing module."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"This can, for example, occur in a qualified name."),(0,l.kt)("p",null,"Remedies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check that the offending module name is spelled correctly."),(0,l.kt)("li",{parentName:"ul"},"Create a module of that name.")),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Referring to the non-existing module ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," gives errors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>M::x = 3;\nok\nrascal>M::f(3);\n|prompt:///|(0,4,<1,0>,<1,4>): Undeclared module: M\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredModule/UndeclaredModule.html|\nok\n")),(0,l.kt)("h4",{id:"benefits"},"Benefits"))}u.isMDXComponent=!0}}]);