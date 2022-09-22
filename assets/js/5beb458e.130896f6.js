"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[98760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(83117),r=(t(67294),t(3905));const l={title:"Type Constrained Pattern",keywords:["[","]"]},s=void 0,o={unversionedId:"Rascal/Patterns/TypeConstrained/index",id:"Rascal/Patterns/TypeConstrained/index",title:"Type Constrained Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/TypeConstrained/index.md",sourceDirName:"Rascal/Patterns/TypeConstrained",slug:"/Rascal/Patterns/TypeConstrained/",permalink:"/docs/Rascal/Patterns/TypeConstrained/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Patterns/TypeConstrained/index.md",tags:[],version:"current",frontMatter:{title:"Type Constrained Pattern",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Tuple Pattern",permalink:"/docs/Rascal/Patterns/Tuple/"},next:{title:"Typed and Labelled Pattern",permalink:"/docs/Rascal/Patterns/TypedLabelled/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Type constrained abstract pattern."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A type constrained pattern matches provided that the subject has type ",(0,r.kt)("em",{parentName:"p"},"Type")," and ",(0,r.kt)("em",{parentName:"p"},"Pat")," matches. This can be handy in case of ambiguity (say more than one constructor with the same name), or in case the pattern is completely general. See an example below:"),(0,r.kt)("p",null,"Warning: This does not seem to work properly. There is a bug."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\n")),(0,r.kt)("p",null,"Some example data type which contains generic values as well as specific expressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data Exp = val(value v) | add(Exp l, Exp r) | sub(Exp l, Exp r);\nok\nrascal>ex = add(add(val("hello"(1,2)),val("bye")), sub(val(1),val(2)));\nExp: add(\n  add(\n    val("hello"(1,2)),\n    val("bye")),\n  sub(\n    val(1),\n    val(2)))\n')),(0,r.kt)("p",null,"Here we constrain the match to find only Exps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>visit (ex) {\n>>>>>>>  case [Exp] str name(_,_) : println("node name is <name>");\n>>>>>>>}\n}\nnode name is hello\nnode name is add\nnode name is sub\nnode name is add\nExp: add(\n  add(\n    val("hello"(1,2)),\n    val("bye")),\n  sub(\n    val(1),\n    val(2)))\n')),(0,r.kt)("p",null,"Here we do not constrain the same pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>visit (ex) {\n>>>>>>>  case str name(_,_) : println("node name is <name>");\n>>>>>>>}\n}\nnode name is hello\nnode name is add\nnode name is sub\nnode name is add\nExp: add(\n  add(\n    val("hello"(1,2)),\n    val("bye")),\n  sub(\n    val(1),\n    val(2)))\n')),(0,r.kt)("h4",{id:"benefits"},"Benefits"))}d.isMDXComponent=!0}}]);