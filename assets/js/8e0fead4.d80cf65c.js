"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[46302],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(83117),r=(a(67294),a(3905));const i={title:"Language"},o=void 0,s={unversionedId:"Rascalopedia/Language/index",id:"Rascalopedia/Language/index",title:"Language",description:"Synopsis",source:"@site/docs/Rascalopedia/Language/index.md",sourceDirName:"Rascalopedia/Language",slug:"/Rascalopedia/Language/",permalink:"/docs/Rascalopedia/Language/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascalopedia/Language/index.md",tags:[],version:"current",frontMatter:{title:"Language"},sidebar:"tutorialSidebar",previous:{title:"Interpreter",permalink:"/docs/Rascalopedia/Interpreter/"},next:{title:"Language Definition",permalink:"/docs/Rascalopedia/LanguageDefinition/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The set of strings defined by a ",(0,r.kt)("a",{parentName:"p",href:"/docs//Rascalopedia/Grammar"},"Rascalopedia:Grammar"),"."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs//Rascalopedia/Grammar"},"Rascalopedia:Grammar")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs//Rascalopedia/Syntax"},"Rascalopedia:Syntax")," defines the formation rules for a language.\nA language is the (possible infinite) set of strings that are defined by a grammar."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The language of strings of at most 5 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," 's: the finite set ",(0,r.kt)("inlineCode",{parentName:"li"},'{"a",  "aa", "aaa", "aaaa", "aaaaa"}'),"."),(0,r.kt)("li",{parentName:"ul"},"The language of strings that correspond to even numbers: the infinite set ",(0,r.kt)("inlineCode",{parentName:"li"},'{"0", "2", "4", "6", ...}')),(0,r.kt)("li",{parentName:"ul"},"The Java language: the infinite set of syntactically correct Java programs.")),(0,r.kt)("h4",{id:"benefits"},"Benefits"))}u.isMDXComponent=!0}}]);