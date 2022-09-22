"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[79110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(83117),r=(n(67294),n(3905));const l={title:"Block",keywords:["{","}",";"]},o=void 0,s={unversionedId:"Rascal/Statements/Block/index",id:"Rascal/Statements/Block/index",title:"Block",description:"Synopsis",source:"@site/docs/Rascal/Statements/Block/index.md",sourceDirName:"Rascal/Statements/Block",slug:"/Rascal/Statements/Block/",permalink:"/docs/Rascal/Statements/Block/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Statements/Block/index.md",tags:[],version:"current",frontMatter:{title:"Block",keywords:["{","}",";"]},sidebar:"tutorialSidebar",previous:{title:"Variable",permalink:"/docs/Rascal/Statements/Assignment/Variable/"},next:{title:"Break",permalink:"/docs/Rascal/Statements/Break/"}},c={},i=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Group statements into a block."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{ Statement<sub>1</sub>; ... ; Statement~n~ }")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"block")," consists of a sequence of statements separated by semi-colons."),(0,r.kt)("p",null,"Since a block is itself a statement, it may be used in all places where a statement is required.\nA block also introduces a new scope and variables that are declared in the block are local to that block.\nThe value produced by a block is the value produced by its last statement (if any)."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is a contrived block of three expressions (be aware of the last semi-colon):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{1;2;3;}\nint: 3\n")),(0,r.kt)("p",null,"its value is ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",null,"The effect of a local variable declared in a block can be seen as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{int x = 3; x*x;}\nint: 9\n")),(0,r.kt)("p",null,"After the block we cannot refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>x;\n|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|\nok\n")))}u.isMDXComponent=!0}}]);