"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[23882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={title:"Append",keywords:["append"]},s=void 0,p={unversionedId:"Rascal/Statements/Append/index",id:"Rascal/Statements/Append/index",title:"Append",description:"Synopsis",source:"@site/docs/Rascal/Statements/Append/index.md",sourceDirName:"Rascal/Statements/Append",slug:"/Rascal/Statements/Append/",permalink:"/docs/Rascal/Statements/Append/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Statements/Append/index.md",tags:[],version:"current",frontMatter:{title:"Append",keywords:["append"]},sidebar:"tutorialSidebar",previous:{title:"Statements",permalink:"/docs/Rascal/Statements/"},next:{title:"Assert",permalink:"/docs/Rascal/Statements/Assert/"}},i={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Append an element to the list value produced by various loop statements."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"append Exp")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"An append statement may only occur in the body of a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/While"},"While"),", ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Do"},"Do")," or ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/For"},"For")," statement.\nIt appends the value of ",(0,a.kt)("em",{parentName:"p"},"Exp")," to the resulting list value of the loop construct in which it occurs."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>for(int i <- [1..5]) append i*i;\nlist[int]: [1,4,9,16]\nrascal>L = for(int i <- [1..5]) append i*i;\nlist[int]: [1,4,9,16]\n")))}d.isMDXComponent=!0}}]);