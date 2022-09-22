"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[1110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=l,k=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(83117),l=(r(67294),r(3905));const a={title:"Callout"},o=void 0,i={unversionedId:"Tutor/Markup/InlineMarkup/Callout/index",id:"Tutor/Markup/InlineMarkup/Callout/index",title:"Callout",description:"Synopsis",source:"@site/docs/Tutor/Markup/InlineMarkup/Callout/index.md",sourceDirName:"Tutor/Markup/InlineMarkup/Callout",slug:"/Tutor/Markup/InlineMarkup/Callout/",permalink:"/docs/Tutor/Markup/InlineMarkup/Callout/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Tutor/Markup/InlineMarkup/Callout/index.md",tags:[],version:"current",frontMatter:{title:"Callout"},sidebar:"tutorialSidebar",previous:{title:"Bold",permalink:"/docs/Tutor/Markup/InlineMarkup/Bold/"},next:{title:"Code",permalink:"/docs/Tutor/Markup/InlineMarkup/Code/"}},u={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Create a numeric callout for the digits 1--9."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"< _Digit_ >\n")),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"Callouts are used to attach numeric labels to a source code ",(0,l.kt)("a",{parentName:"p",href:"../../../../Tutor/Markup/InlineMarkup/Listing"},"Listing")," for later discussion in the text."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```\nThis code contains the callout <1> \n```\n")),(0,l.kt)("p",null,"Will produce:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"This code contains the callout <1>\n")),(0,l.kt)("p",null,"By including ",(0,l.kt)("inlineCode",{parentName:"p"},"<1>")," in an enumeration or text, for instance, "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<1> refers to the callout.")," "),(0,l.kt)("p",null,"will give:"),(0,l.kt)("p",null,"<1> refers to the callout."),(0,l.kt)("h4",{id:"benefits"},"Benefits"),(0,l.kt)("p",null,"Callout are most usefull to place markers in code fragments for later reference in explanatory text."))}s.isMDXComponent=!0}}]);