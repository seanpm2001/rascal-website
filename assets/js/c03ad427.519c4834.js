"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[58084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const i={title:"Empty Map"},p=void 0,o={unversionedId:"RunTimeErrors/RuntimeExceptions/EmptyMap/index",id:"RunTimeErrors/RuntimeExceptions/EmptyMap/index",title:"Empty Map",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/EmptyMap/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/EmptyMap",slug:"/RunTimeErrors/RuntimeExceptions/EmptyMap/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptyMap/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RunTimeErrors/RuntimeExceptions/EmptyMap/index.md",tags:[],version:"current",frontMatter:{title:"Empty Map"},sidebar:"tutorialSidebar",previous:{title:"Empty List",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptyList/"},next:{title:"Empty Set",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptySet/"}},s={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Illegal operation on an empty map."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = EmptyMap();")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"EmptyMap")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Rascal provides many operations and functions on maps, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Map"},"map values"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/Map"},"map functions"),".\nThis error is generated when a function or operations cannot handle the empty map case."),(0,a.kt)("p",null,"Remedies: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guard the function or operation with a test on the empty map (",(0,a.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-isEmpty"},"isEmpty"),") and\ntake alternative action in that case."),(0,a.kt)("li",{parentName:"ul"},"Catch the ",(0,a.kt)("inlineCode",{parentName:"li"},"EmptyMap")," yourself, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/TryCatch"},"try catch"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," library and introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," with an empty map as value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import Map;\nok\nrascal>M = ();\nmap[void, void]: ()\n")),(0,a.kt)("p",null,"Trying to get an arbitrary value from it gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>getOneFrom(M);\n|std:///Map.rsc|(2033,403,<103,0>,<122,41>): EmptyMap()\n    at *** somewhere ***(|std:///Map.rsc|(2033,403,<103,0>,<122,41>))\n    at getOneFrom(|prompt:///|(11,1,<1,11>,<1,12>))\nok\n")),(0,a.kt)("p",null,"We can also catch the ",(0,a.kt)("inlineCode",{parentName:"p"},"EmptyMap")," error. First import the Rascal exceptions (which are also included in ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude"),")\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Exception;\nok\nrascal>import IO;\nok\nrascal>try \n>>>>>>>  println(getOneFrom(M)); \n>>>>>>>catch EmptyMap(): \n>>>>>>>  println("Cannot use getOneFrom on empty map");\n  println("Cannot use getOneFrom on empty map");\nCannot use getOneFrom on empty map\nok\n')),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}m.isMDXComponent=!0}}]);