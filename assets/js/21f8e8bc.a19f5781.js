"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[82937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Getting Started with Rascal",keywords:["help"]},i=void 0,l={unversionedId:"GettingStarted/index",id:"GettingStarted/index",title:"Getting Started with Rascal",description:"Synopsis",source:"@site/docs/GettingStarted/index.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/",permalink:"/docs/GettingStarted/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/GettingStarted/index.md",tags:[],version:"current",frontMatter:{title:"Getting Started with Rascal",keywords:["help"]},sidebar:"tutorialSidebar",previous:{title:"Help in the Integrated Development Environment (IDE)",permalink:"/docs/GettingHelp/IDE/"},next:{title:"Rascal Standard Library",permalink:"/docs/Library/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"First steps using Rascal"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"You can start using Rascal by following these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Download and Install")," Rascal by carefully following the instructions at the ",(0,a.kt)("a",{parentName:"li",href:"http://www.rascal-mpl.org/start/"},"Rascal Website"),".")),(0,a.kt)("p",null,"CAUTION: Please respect the recommended versions of Java (JDK) and Eclipse (Eclipse for RCP Developers).\nIn case of installation problems you can consult the ",(0,a.kt)("a",{parentName:"p",href:"http://www.rascal-mpl.org/help/troubleshooting.html"},"trouble shooting")," page\nor ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/tagged/rascal"},"StackOverflow"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Start")," Rascal. The Rascal system comes in two flavours: a command line version and a version integrated in Eclipse.")),(0,a.kt)("p",null,"At the command line the Rascal system can be invoked by typing the command ",(0,a.kt)("inlineCode",{parentName:"p"},"*rascal*"),".\nNext, the Rascal prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"*rascal>*")," appears and you can start typing commands (declarations, statements, expressions).\nTo simplify interactive use, semicolons (",(0,a.kt)("inlineCode",{parentName:"p"},";"),") that end commands may be omitted at the top level."),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"rascal")," command is not yet standard installed"),(0,a.kt)("p",null,"NOTE: Add a screenshot"),(0,a.kt)("p",null,"In the Eclipse version, Rascal modules can be edited and a command console is also available."),(0,a.kt)("p",null,"NOTE: Add a screenshot"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'There is a "TODO" in the documentation source:\nmsg\n(((TODO-this is not up-to-date)))')),(0,a.kt)("p",null,"Where to go from here:\nhave a look at ",(0,a.kt)("a",{parentName:"p",href:"../GettingHelp/"},"Getting Help")," and in particular\n","[further reading][Getting help:Further reading]","(../GettingHelp/FurtherReading)"))}d.isMDXComponent=!0}}]);