"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[54238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const l={title:"Rascal Language Reference",details:["Declarations","Patterns","Expressions","Statements"]},i=void 0,s={unversionedId:"Rascal/index",id:"Rascal/index",title:"Rascal Language Reference",description:"Synopsis",source:"@site/docs/Rascal/index.md",sourceDirName:"Rascal",slug:"/Rascal/",permalink:"/docs/Rascal/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/index.md",tags:[],version:"current",frontMatter:{title:"Rascal Language Reference",details:["Declarations","Patterns","Expressions","Statements"]},sidebar:"tutorialSidebar",previous:{title:"module util::tasks::Manager",permalink:"/docs/Library/util/tasks/Manager"},next:{title:"Declarations",permalink:"/docs/Rascal/Declarations/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Reference manual for the Rascal meta-programming language. "),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Here we describe ",(0,n.kt)("em",{parentName:"p"},"all")," features of the Rascal language in detail, for reference purposes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../Rascal/Declarations"},"Declarations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../Rascal/Patterns"},"Patterns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../Rascal/Expressions"},"Expressions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../Rascal/Statements"},"Statements"))),(0,n.kt)("p",null,"You can find more (accessible) information related to Rascal here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../WhyRascal/"},"Why Rascal"),": gives the motivation for the Rascal language and describes various usage scenarios."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../GettingStarted/"},"Getting Started")," describes how to download, install and start Rascal."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../GettingHelp/"},"Getting Help")," shows how to use the help facilties and search the documentation.\nSee ","[Further Reading][Getting help:Further reading]","(../GettingHelp/FurtherReading) for a reading guide."),(0,n.kt)("li",{parentName:"ul"},"Library functies are described in ",(0,n.kt)("a",{parentName:"li",href:"../Library/lang/rascal/tutor/examples/Test/Libraries"},"Rascal Libraries"),"."),(0,n.kt)("li",{parentName:"ul"},"We do not maintain a list of frequently asked questions (faq) but\nuse ",(0,n.kt)("a",{parentName:"li",href:"http://stackoverflow.com/questions/tagged/rascal"},"StackOverflow")," instead.")),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We show examples for each Rascal language construct described here."),(0,n.kt)("li",{parentName:"ul"},"You can find many simple code examples in ",(0,n.kt)("a",{parentName:"li",href:"../Recipes/"},"Recipes"),". "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"../Library/lang/rascal/tutor/examples/Test/Libraries"},"Rascal Libraries")," contain examples for most functions. ")),(0,n.kt)("h4",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rascal has everything you need for any kind of (meta-)program you want to write. See ",(0,n.kt)("a",{parentName:"li",href:"../WhyRascal/"},"Why Rascal"),".")),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rascal is a procedural/functional language with immutable data. Do not confuse this with object-oriented programming."),(0,n.kt)("li",{parentName:"ul"},"Rascal allows you to write highly imperative code, but it has declarative constructs that lead to shorter and more readable code.")))}p.isMDXComponent=!0}}]);