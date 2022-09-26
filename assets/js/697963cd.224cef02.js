"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[3475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Relation",keywords:["{","}","rel"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/Relation/index",id:"Rascal/Expressions/Values/Relation/index",title:"Relation",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Relation/index.md",sourceDirName:"Rascal/Expressions/Values/Relation",slug:"/Rascal/Expressions/Values/Relation/",permalink:"/docs/Rascal/Expressions/Values/Relation/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Relation/index.md",tags:[],version:"current",frontMatter:{title:"Relation",keywords:["{","}","rel"]},sidebar:"tutorialSidebar",previous:{title:"ReifiedTypes",permalink:"/docs/Rascal/Expressions/Values/ReifiedTypes/"},next:{title:"Relation CartesianProduct",permalink:"/docs/Rascal/Expressions/Values/Relation/CartesianProduct/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Relation values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{ < Exp\u2081\u2081, Exp\u2081\u2082, ... > , < Exp\u2082\u2081, Exp\u2082\u2082, ... > , ... }")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"{ < Exp\u2081\u2081, Exp\u2081\u2082, ... > , ... }")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2081")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2082")),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rel[T\u2081, T\u2082, ... ]"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A relation is a set of elements with the following property:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All elements have the same static tuple type.")),(0,r.kt)("p",null,"Relations are thus nothing more than sets of tuples, but since they are used so often we provide a shorthand notation for them.\nRelations are represented by the type ",(0,r.kt)("inlineCode",{parentName:"p"},"rel[T\u2081 L\u2081, T\u2082 L\u2082, ... ]"),", where ",(0,r.kt)("em",{parentName:"p"},"T"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"T"),"\u2082, ... are arbitrary types and\n",(0,r.kt)("em",{parentName:"p"},"L"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"L"),"\u2082, ... are optional labels. It is a shorthand for ",(0,r.kt)("inlineCode",{parentName:"p"},"set[tuple[T\u2081 L\u2081, T\u2082 L\u2082, ... ]]"),"."),(0,r.kt)("p",null,"An n-ary relations with m tuples is denoted by\n",(0,r.kt)("inlineCode",{parentName:"p"},"{< E\u2081\u2081, E\u2081\u2082, ..., E\u2081\u2099 >,< E\u2082\u2081, E\u2082\u2082, ..., E\u2082\u2099 >, ..., < E\u2098\u2081, E\u2098\u2082, ..., E\u2098\u2099 >}"),",\nwhere the ",(0,r.kt)("em",{parentName:"p"},"E"),"\u1d62\u2c7c are expressions that yield the desired element type ",(0,r.kt)("em",{parentName:"p"},"T"),"\u1d62."),(0,r.kt)("p",null,"Since relations are a form of set all operations (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Set/"},"Set"),") and functions\n(see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/Set"},"Set"),") are also applicable to relations."),(0,r.kt)("p",null,"The following additional operators are provided for relations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/CartesianProduct/"},"CartesianProduct")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/Composition/"},"Composition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/FieldSelection/"},"FieldSelection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/Join/"},"Join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure/"},"ReflexiveTransitiveClosure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/Subscription/"},"Subscription")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/TransitiveClosure/"},"TransitiveClosure"))),(0,r.kt)("p",null,"There are also ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/Relation"},"library functions")," available for Relations."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{<1,10>, <2,20>, <3,30>}\nrel[int,int]: {\n  <1,10>,\n  <3,30>,\n  <2,20>\n}\n")),(0,r.kt)("p",null,"instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"rel[int,int]")," we can also give ",(0,r.kt)("inlineCode",{parentName:"p"},"set[tuple[int,int]]")," as type of the above expression\nremember that these types are interchangeable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>{<"a",10>, <"b",20>, <"c",30>}\nrel[str,int]: {\n  <"a",10>,\n  <"b",20>,\n  <"c",30>\n}\nrascal>{<"a", 1, "b">, <"c", 2, "d">}\nrel[str,int,str]: {\n  <"c",2,"d">,\n  <"a",1,"b">\n}\n')))}u.isMDXComponent=!0}}]);