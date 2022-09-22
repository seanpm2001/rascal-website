"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[34141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const l={title:"Node pattern"},o=void 0,s={unversionedId:"Rascal/Patterns/Node/index",id:"Rascal/Patterns/Node/index",title:"Node pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Node/index.md",sourceDirName:"Rascal/Patterns/Node",slug:"/Rascal/Patterns/Node/",permalink:"/docs/Rascal/Patterns/Node/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Patterns/Node/index.md",tags:[],version:"current",frontMatter:{title:"Node pattern"},sidebar:"tutorialSidebar",previous:{title:"MultiVariable Pattern",permalink:"/docs/Rascal/Patterns/MultiVariable/"},next:{title:"Regular Expression Pattern",permalink:"/docs/Rascal/Patterns/Regular/"}},i={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Node in abstract pattern."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A node pattern matches a node value or a datatype value, provided that ",(0,a.kt)("em",{parentName:"p"},"Name")," matches with the constructor symbol of that value\nand ",(0,a.kt)("em",{parentName:"p"},"Pat"),(0,a.kt)("sub",null,"1"),", ",(0,a.kt)("em",{parentName:"p"},"Pat"),(0,a.kt)("sub",null,"2"),", ..., ",(0,a.kt)("em",{parentName:"p"},"Pat"),"~n~  match the children of that value in order."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")),(0,a.kt)("p",null,"Match on node values (recall that the function symbol of a node has to be quoted, see ","[Values/Node]","):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>if("f"(A,13,B) := "f"("abc", 13, false))\n>>>>>>>   println("A = <A>, B = <B>");\n   println("A = <A>, B = <B>");\nA = abc, B = false\nok\n')),(0,a.kt)("p",null,"Define a data type and use it to match:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data Color = red(int N) | black(int N);\nok\nrascal>if(red(K) := red(13))\n>>>>>>>   println("K = <K>");\n   println("K = <K>");\nK = 13\nok\n')))}u.isMDXComponent=!0}}]);