"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[98013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(b,s(s({ref:t},o),{},{components:a})):n.createElement(b,s({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(83117),l=(a(67294),a(3905));const r={title:"Tuple",keywords:["<",">"]},s=void 0,i={unversionedId:"Rascal/Expressions/Values/Tuple/index",id:"Rascal/Expressions/Values/Tuple/index",title:"Tuple",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple",slug:"/Rascal/Expressions/Values/Tuple/",permalink:"/docs/Rascal/Expressions/Values/Tuple/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Tuple/index.md",tags:[],version:"current",frontMatter:{title:"Tuple",keywords:["<",">"]},sidebar:"tutorialSidebar",previous:{title:"String Subscription",permalink:"/docs/Rascal/Expressions/Values/String/Subscription/"},next:{title:"Tuple Concatenation",permalink:"/docs/Rascal/Expressions/Values/Tuple/Concatenation/"}},p={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],o={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Tuple values."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"< Exp<sub>1</sub>, Exp<sub>2</sub>, ... >")),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},"..."),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"< Exp<sub>1</sub>, Exp<sub>2</sub>, ... >")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T<sub>1</sub>")),(0,l.kt)("td",{parentName:"tr",align:null},"T",(0,l.kt)("sub",null,"2")),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tuple[T<sub>1</sub>, T<sub>2</sub>, ... ]"))))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"A tuple is a sequence of elements with the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Each element in a tuple (may) have a different type.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Each element of a tuple may have a label that can be used to select that element of the tuple.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Each tuple is fixed-width, i.e., has the same number of elements."))),(0,l.kt)("p",null,"Tuples are represented by the type ",(0,l.kt)("inlineCode",{parentName:"p"},"tuple[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ...]"),",\nwhere ",(0,l.kt)("em",{parentName:"p"},"T"),(0,l.kt)("sub",null,"1"),", ",(0,l.kt)("em",{parentName:"p"},"T"),(0,l.kt)("sub",null,"2"),", ... are arbitrary types and ",(0,l.kt)("em",{parentName:"p"},"L"),(0,l.kt)("sub",null,"1"),", ",(0,l.kt)("em",{parentName:"p"},"L"),(0,l.kt)("sub",null,"2"),", ... are optional labels. "),(0,l.kt)("p",null,"The following operators are provided for tuples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/Concatenation))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/Equal))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/FieldSelection))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/GreaterThan))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/GreaterThanOrEqual))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/LessThan))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/LessThanOrEqual))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/NotEqual))"),(0,l.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/Tuple/Subscription))")),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>tuple[str first, str last, int age] P = <"Jo","Jones",35>;\ntuple[str first,str last,int age]: <"Jo","Jones",35>\nrascal>P.first;\nstr: "Jo"\nrascal>P.first = "Bo";\ntuple[str first,str last,int age]: <"Bo","Jones",35>\n')),(0,l.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);