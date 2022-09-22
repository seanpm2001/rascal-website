"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[84073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=s,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(83117),s=(n(67294),n(3905));const l={title:"ListRelation",keywords:["[","]","<",">"]},r=void 0,i={unversionedId:"Rascal/Expressions/Values/ListRelation/index",id:"Rascal/Expressions/Values/ListRelation/index",title:"ListRelation",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation",slug:"/Rascal/Expressions/Values/ListRelation/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/ListRelation/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation",keywords:["[","]","<",">"]},sidebar:"tutorialSidebar",previous:{title:"List notin",permalink:"/docs/Rascal/Expressions/Values/List/notin/"},next:{title:"ListRelation CartesianProduct",permalink:"/docs/Rascal/Expressions/Values/ListRelation/CartesianProduct/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"List relations are lists of tuples with relational calculus operators defined on them."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"[ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , < Exp<sub>21</sub>, Exp<sub>22</sub>, ... > , ... ]")),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>11</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>12</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},"..."),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"{ < Exp<sub>11</sub>, Exp<sub>12</sub>, ... > , ... }")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"T<sub>1</sub>")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"T<sub>2</sub>")),(0,s.kt)("td",{parentName:"tr",align:null},"..."),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"lrel[T<sub>1</sub>, T<sub>2</sub>, ... ]"))))),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("h4",{id:"function"},"Function"),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"A list relation is a list of elements with the following property:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All elements have the same static tuple type.")),(0,s.kt)("p",null,"ListRelations are thus nothing more than lists of tuples, but since they are used so often we provide a shorthand notation for them.\nListRelations are represented by the type ",(0,s.kt)("inlineCode",{parentName:"p"},"lrel[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]"),", where ",(0,s.kt)("em",{parentName:"p"},"T"),(0,s.kt)("sub",null,"1"),", ",(0,s.kt)("em",{parentName:"p"},"T"),(0,s.kt)("sub",null,"2"),", ... are arbitrary types and\n",(0,s.kt)("em",{parentName:"p"},"L"),(0,s.kt)("sub",null,"1"),", ",(0,s.kt)("em",{parentName:"p"},"L"),(0,s.kt)("sub",null,"2"),", ... are optional labels. It is a shorthand for ",(0,s.kt)("inlineCode",{parentName:"p"},"list[tuple[T<sub>1</sub> L<sub>1</sub>, T<sub>2</sub> L<sub>2</sub>, ... ]]"),"."),(0,s.kt)("p",null,"An n-ary list relation with m tuples is denoted by\n",(0,s.kt)("inlineCode",{parentName:"p"},"[< E<sub>11</sub>, E<sub>12</sub>, ..., E~1n~>,< E<sub>21</sub>, E<sub>22</sub>, ..., E~2n~>, ..., < E~m1~, E~m2~, ..., E~mn~>]"),",\nwhere the ",(0,s.kt)("em",{parentName:"p"},"E"),"~ij~ are expressions that yield the desired element type ",(0,s.kt)("em",{parentName:"p"},"T"),"~i~."),(0,s.kt)("p",null,"Since list relations are a form of list all operations (see ",(0,s.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/List"},"List"),") and functions\n(see ",(0,s.kt)("a",{parentName:"p",href:"/docs/Library/List"},"Library:module:List"),") are also applicable to relations."),(0,s.kt)("p",null,"The following additional operators are provided for list relations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/CartesianProduct))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/Composition))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/FieldSelection))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/Join))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/ReflexiveTransitiveClosure))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/Subscription))"),(0,s.kt)("li",{parentName:"ul"},"((Rascal:Expressions/Values/ListRelation/TransitiveClosure))")),(0,s.kt)("p",null,"There are also ",(0,s.kt)("a",{parentName:"p",href:"/docs/Library/ListRelation"},"library functions")," available for list relations."),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[<1,10>, <2,20>, <3,30>]\nlrel[int,int]: [\n  <1,10>,\n  <2,20>,\n  <3,30>\n]\n")),(0,s.kt)("p",null,"Instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"lrel[int,int]")," we can also give ",(0,s.kt)("inlineCode",{parentName:"p"},"list[tuple[int,int]]")," as type of the above expression\nremember that these types are interchangeable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>[<"a",10>, <"b",20>, <"c",30>]\nlrel[str,int]: [\n  <"a",10>,\n  <"b",20>,\n  <"c",30>\n]\nrascal>[<"a", 1, "b">, <"c", 2, "d">]\nlrel[str,int,str]: [\n  <"a",1,"b">,\n  <"c",2,"d">\n]\n')),(0,s.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);