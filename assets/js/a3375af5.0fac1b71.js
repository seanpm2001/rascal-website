"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[85946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(83117),o=(n(67294),n(3905));const i={title:"Browsing Documentation",keywords:["help"]},a=void 0,s={unversionedId:"GettingHelp/Browsing/index",id:"GettingHelp/Browsing/index",title:"Browsing Documentation",description:"Synopsis",source:"@site/docs/GettingHelp/Browsing/index.md",sourceDirName:"GettingHelp/Browsing",slug:"/GettingHelp/Browsing/",permalink:"/docs/GettingHelp/Browsing/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/GettingHelp/Browsing/index.md",tags:[],version:"current",frontMatter:{title:"Browsing Documentation",keywords:["help"]},sidebar:"tutorialSidebar",previous:{title:"Getting Help",permalink:"/docs/GettingHelp/"},next:{title:"Help at the command line",permalink:"/docs/GettingHelp/CommandLine/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Browsing the Rascal documentation"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"All Rascal documentation has been indexed and cross-referenced\nand can be accessed via a single browser interface."),(0,o.kt)("p",null,"Suppose we want to learn about ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," statement in Rascal and\nthe type ",(0,o.kt)("inlineCode",{parentName:"p"},"help while")," at the command line. This will show the following\nresults (actual results may differ):"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90866).Z,width:"1102",height:"795"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'There is a "TODO" in the documentation source:\nmsg\n(((TODO-this is not up-to-date)))')),(0,o.kt)("p",null,"In the right pane you find the search results,\nmost relevant first (this happpens to be the\ndescription of the ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," statement).\nEach result consists of a clickable link and\na synopsis of the information to be found there."),(0,o.kt)("p",null,"In the top left corner, you find a search box\nfor new searches and the RascalTutor logo\nwill bring you back to the Tutor home page."),(0,o.kt)("p",null,"All Rascal documentation is organized\nin ",(0,o.kt)("em",{parentName:"p"},"courses"),", each course consist of\na hierarchy of ",(0,o.kt)("em",{parentName:"p"},"concepts"),".\nThe documentation for ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," is found in the\ncourse named ",(0,o.kt)("a",{parentName:"p",href:"/docs/Rascal/"},"Rascal"),"\nand the complete name is ","[Rascal/Statements/While][While]","(/docs/Rascal/Statements/While)."),(0,o.kt)("p",null,"There are other courses like ",(0,o.kt)("a",{parentName:"p",href:"/docs/RascalShell/Commands/Help"},"Help")," (this course)\nand ",(0,o.kt)("a",{parentName:"p",href:"/docs/Recipes/"},"Recipes")," and the search for while\nfound uses of while in various courses (like this one, since we are mentioning\n",(0,o.kt)("inlineCode",{parentName:"p"},"while")," quite a lot)."))}u.isMDXComponent=!0},90866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/search-results-while-da3009a2dca567565959eb34f3414c93.png"}}]);