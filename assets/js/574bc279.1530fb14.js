"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const l={title:"Tuple GreaterThan",keywords:[">"]},s=void 0,i={unversionedId:"Rascal/Expressions/Values/Tuple/GreaterThan/index",id:"Rascal/Expressions/Values/Tuple/GreaterThan/index",title:"Tuple GreaterThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/GreaterThan/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple/GreaterThan",slug:"/Rascal/Expressions/Values/Tuple/GreaterThan/",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThan/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Tuple/GreaterThan/index.md",tags:[],version:"current",frontMatter:{title:"Tuple GreaterThan",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"Tuple FieldSelection",permalink:"/docs/Rascal/Expressions/Values/Tuple/FieldSelection/"},next:{title:"Tuple GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Tuple/GreaterThanOrEqual/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Greater than operator on tuple values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> > Exp<sub>2</sub>")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> > Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tuple[ T<sub>11</sub>, T<sub>12</sub>, ... ]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tuple[ T<sub>21</sub>, T<sub>22</sub>, ... ]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Yields ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"both tuples are not equal, and"),(0,a.kt)("li",{parentName:"ul"},"the left-most element in the tuple value of ",(0,a.kt)("em",{parentName:"li"},"Exp",(0,a.kt)("sub",null,"1"))," that differs from the corresponding element in the tuple\nvalue of ",(0,a.kt)("em",{parentName:"li"},"Exp"),(0,a.kt)("sub",null,"2")," is greater than that element in ",(0,a.kt)("em",{parentName:"li"},"Exp"),(0,a.kt)("sub",null,"2"),".")),(0,a.kt)("p",null,"Otherwise the result if ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal><1, "def", true> > <1, "abc", true>;\nbool: true\n')))}c.isMDXComponent=!0}}]);