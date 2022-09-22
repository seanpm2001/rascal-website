"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97279],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62563:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(83117),a=(t(67294),t(3905));const i={title:"UnguardedInsert"},s=void 0,l={unversionedId:"CompileTimeErrors/UnguardedInsert/index",id:"CompileTimeErrors/UnguardedInsert/index",title:"UnguardedInsert",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UnguardedInsert/index.md",sourceDirName:"CompileTimeErrors/UnguardedInsert",slug:"/CompileTimeErrors/UnguardedInsert/",permalink:"/docs/CompileTimeErrors/UnguardedInsert/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/UnguardedInsert/index.md",tags:[],version:"current",frontMatter:{title:"UnguardedInsert"},sidebar:"tutorialSidebar",previous:{title:"UnguardedFail",permalink:"/docs/CompileTimeErrors/UnguardedFail/"},next:{title:"UnguardedIt",permalink:"/docs/CompileTimeErrors/UnguardedIt/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," occurs outside a ",(0,a.kt)("inlineCode",{parentName:"p"},"visit")," expression."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"An insert statement may only occur in the action part of a ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Visit/PatternWithAction"},"pattern with action"),",\nmore precisely in a case in a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Visit"},"visit")," expression. "),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use an auxiliary variable and list or set operations to insert the value where you want."),(0,a.kt)("li",{parentName:"ul"},"Place the insert statement inside a visit.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is an example of the use of insert to swap the arguments of red nodes:"),(0,a.kt)("p",null,"Our favorite data type, colored trees:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);\nok\n")),(0,a.kt)("p",null,"An example tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));\nCTree: red(\n  green(\n    leaf(1),\n    red(\n      leaf(2),\n      leaf(3))),\n  red(\n    leaf(4),\n    leaf(5)))\n")),(0,a.kt)("p",null,"A visit to swap the arguments of red nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>visit(T){ case red(CTree l, CTree r): insert red(r,l); }\nCTree: red(\n  red(\n    leaf(5),\n    leaf(4)),\n  green(\n    leaf(1),\n    red(\n      leaf(3),\n      leaf(2))))\n")),(0,a.kt)("p",null,"An error occurs when insert is used outside a visit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>insert red(leaf(1), leaf(2));\n|prompt:///|(0,29,<1,0>,<1,29>): Insert statement outside a visit statement\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedInsert/UnguardedInsert.html|\nok\n")),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);