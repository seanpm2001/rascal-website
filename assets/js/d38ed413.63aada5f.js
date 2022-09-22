"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[8775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const l={title:"Node GreaterThan",keywords:[">"]},o=void 0,i={unversionedId:"Rascal/Expressions/Values/Node/GreaterThan/index",id:"Rascal/Expressions/Values/Node/GreaterThan/index",title:"Node GreaterThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Node/GreaterThan/index.md",sourceDirName:"Rascal/Expressions/Values/Node/GreaterThan",slug:"/Rascal/Expressions/Values/Node/GreaterThan/",permalink:"/docs/Rascal/Expressions/Values/Node/GreaterThan/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Node/GreaterThan/index.md",tags:[],version:"current",frontMatter:{title:"Node GreaterThan",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"Node Equal",permalink:"/docs/Rascal/Expressions/Values/Node/Equal/"},next:{title:"Node GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Node/GreaterThanOrEqual/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Greater than operator on node values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> > Exp<sub>2</sub>")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> > Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Comparison on nodes is defined by a lexicographic ordering. Node ",(0,a.kt)("inlineCode",{parentName:"p"},"N = F(N<sub>1</sub>, ..., N~n~)")," is greater than node\n",(0,a.kt)("inlineCode",{parentName:"p"},"N = G(M<sub>1</sub>, ..., M~m~)")," when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"N")," is not equal to ",(0,a.kt)("em",{parentName:"li"},"M"),", and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"F")," is lexicographically greater than ",(0,a.kt)("em",{parentName:"li"},"G"),", or ",(0,a.kt)("em",{parentName:"li"},"F")," is equal to ",(0,a.kt)("em",{parentName:"li"},"G")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"n > m"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>"g"(3) > "f"(10, "abc");\nbool: true\nrascal>"f"(10, "abc") > "f"(10);\nbool: true\n')),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);