"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"module demo::vis::StaticSite"},l=void 0,o={unversionedId:"Library/demo/vis/StaticSite",id:"Library/demo/vis/StaticSite",title:"module demo::vis::StaticSite",description:"Usage",source:"@site/docs/Library/demo/vis/StaticSite.md",sourceDirName:"Library/demo/vis",slug:"/Library/demo/vis/StaticSite",permalink:"/docs/Library/demo/vis/StaticSite",draft:!1,tags:[],version:"current",frontMatter:{title:"module demo::vis::StaticSite"},sidebar:"tutorialSidebar",previous:{title:"demo::vis",permalink:"/docs/Library/demo/vis/"},next:{title:"lang",permalink:"/docs/Library/lang/"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function table",id:"demo-vis-StaticSite-table",level:2},{value:"Synopsis",id:"synopsis-1",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::vis::StaticSite;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Demonstrates HTML generation and viewing in Rascal"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"In the current module we have a function ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," which transforms\nany binary relation into an HTML table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},'\nmodule demo::vis::StaticSite\n\nimport lang::html::IO;\n\n\nHTMLElement table(rel[&T, &U] r)\n    = table([\n        tr([\n            td([text("<a>")]),\n            td([text("<b>")])\n        ])\n    | <a, b> <- r    \n    ]);\n\n')),(0,a.kt)("p",null,"When we try this out on the commandline, the REPL will pop-up\na browser window such that we can visualize the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::vis::StaticSite;\nok\nrascal>import lang::html::IO;\nok\nrascal>characters = {"Sneezy", "Sleepy", "Dopey", "Doc", "Happy", "Bashful", "Grumpy"};\nset[str]: {"Happy","Sleepy","Bashful","Grumpy","Doc","Dopey","Sneezy"}\nrascal>serve(table(characters * characters));\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(75593).Z,width:"1317",height:"3416"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")),(0,a.kt)("p",null,"To get this effect we used the following library modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/lang/html/AST"},"AST")," contains the HTML abstract syntax tree definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/lang/html/IO"},"IO")," knows how to pretty-print HTML"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Library/Content"},"Content")," provides access to the builtin application server of the Rascal REPL")),(0,a.kt)("h2",{id:"demo-vis-StaticSite-table"},"function table"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement table(rel[&T, &U] r)"))),(0,a.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,a.kt)("p",null,"Translates a binary relation to an HTML table element"))}u.isMDXComponent=!0},75593:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/StaticSite_screenshot_22-a20df09b7f7e06665ab9021bb8f0afe4.png"}}]);