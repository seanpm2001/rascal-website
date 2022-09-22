"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[99403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),f=r,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||l;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<l;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(83117),r=(n(67294),n(3905));const l={title:"Descendant Pattern",keywords:["/"]},c=void 0,s={unversionedId:"Rascal/Patterns/Descendant/index",id:"Rascal/Patterns/Descendant/index",title:"Descendant Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Descendant/index.md",sourceDirName:"Rascal/Patterns/Descendant",slug:"/Rascal/Patterns/Descendant/",permalink:"/docs/Rascal/Patterns/Descendant/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Patterns/Descendant/index.md",tags:[],version:"current",frontMatter:{title:"Descendant Pattern",keywords:["/"]},sidebar:"tutorialSidebar",previous:{title:"Concrete Patterns",permalink:"/docs/Rascal/Patterns/Concrete/"},next:{title:"Labelled Pattern",permalink:"/docs/Rascal/Patterns/Labelled/"}},o={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Deep match in an abstract pattern."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A descendant pattern\nperforms a deep match of the pattern ",(0,r.kt)("em",{parentName:"p"},"Pat"),". In other words, it matches when any element of the subject at any depth\nthat matches ",(0,r.kt)("em",{parentName:"p"},"Pat")," and is used to match, for instance, tree nodes at an arbitrary distance from the root."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\nrascal>data ColoredTree = leaf(int N)\n>>>>>>>                 | red(ColoredTree left, ColoredTree right) \n>>>>>>>                 | black(ColoredTree left, ColoredTree right);\nok\nrascal>T = red(red(black(leaf(1), leaf(2)), black(leaf(3), leaf(4))), black(leaf(5), leaf(4)));\nColoredTree: red(\n  red(\n    black(\n      leaf(1),\n      leaf(2)),\n    black(\n      leaf(3),\n      leaf(4))),\n  black(\n    leaf(5),\n    leaf(4)))\n")),(0,r.kt)("p",null,"Now we match for ",(0,r.kt)("inlineCode",{parentName:"p"},"black")," nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"leaf(4)")," as second argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for(/black(_,leaf(4)) := T)\n>>>>>>>    println("Match!");\n    println("Match!");\nMatch!\nMatch!\nlist[void]: []\n')),(0,r.kt)("p",null,"We use an ",(0,r.kt)("strong",{parentName:"p"},"anonymous variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," at a position where we don't care about the actual value that is matched.\nIn order to print the actual values of the matches, we would need an ","[Abstract/Labelled]"," pattern."),(0,r.kt)("p",null,"Here we match all leaves that occur as second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"black"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for(/black(_,leaf(int N)) := T)\n>>>>>>>    println("Match <N>");\n    println("Match <N>");\nMatch 2\nMatch 4\nMatch 4\nlist[void]: []\n')),(0,r.kt)("p",null,"Here we list all integers that occur in any leaf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for(/int N := T)\n>>>>>>>    println("Match <N>");\n    println("Match <N>");\nMatch 1\nMatch 2\nMatch 3\nMatch 4\nMatch 5\nMatch 4\nlist[void]: []\n')),(0,r.kt)("p",null,"Rather than printing, we can also collect them in a list using ","[$Statements/Append]",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>for(/int N := T)\n>>>>>>>    append N;\nlist[int]: [1,2,3,4,5,4]\n")),(0,r.kt)("h4",{id:"benefits"},"Benefits"))}d.isMDXComponent=!0}}]);