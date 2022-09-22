"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[28065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Relation"},i=void 0,o={unversionedId:"Rascalopedia/Relation/index",id:"Rascalopedia/Relation/index",title:"Relation",description:"Synopsis",source:"@site/docs/Rascalopedia/Relation/index.md",sourceDirName:"Rascalopedia/Relation",slug:"/Rascalopedia/Relation/",permalink:"/docs/Rascalopedia/Relation/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascalopedia/Relation/index.md",tags:[],version:"current",frontMatter:{title:"Relation"},sidebar:"tutorialSidebar",previous:{title:"Refactoring",permalink:"/docs/Rascalopedia/Refactoring/"},next:{title:"Scope",permalink:"/docs/Rascalopedia/Scope/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Relations in Daily Life",id:"relations-in-daily-life",level:2},{value:"Relations in computer science",id:"relations-in-computer-science",level:2},{value:"Relations in Rascal",id:"relations-in-rascal",level:2}],m={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"An unordered set of tuples."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"In mathematics, given sets ",(0,r.kt)("em",{parentName:"p"},"D"),(0,r.kt)("sub",null,"1"),", ",(0,r.kt)("em",{parentName:"p"},"D"),(0,r.kt)("sub",null,"2"),", ... ",(0,r.kt)("em",{parentName:"p"},"D"),"~n~, a\n",(0,r.kt)("em",{parentName:"p"},"n"),"-ary relation ",(0,r.kt)("em",{parentName:"p"},"R")," is characterized by ",(0,r.kt)("em",{parentName:"p"},"R")," ","\u2286","  ",(0,r.kt)("em",{parentName:"p"},"D"),(0,r.kt)("sub",null,"1")," ","\xd7"," ",(0,r.kt)("em",{parentName:"p"},"D"),(0,r.kt)("sub",null,"2")," ","\xd7"," ... ","\xd7"," ",(0,r.kt)("em",{parentName:"p"},"D"),"~n~.\nIn other words, ",(0,r.kt)("em",{parentName:"p"},"R")," consists of a set of tuples < ",(0,r.kt)("em",{parentName:"p"},"V",(0,r.kt)("sub",null,"1")),", ..., ",(0,r.kt)("em",{parentName:"p"},"V~n~")," > where each ",(0,r.kt)("em",{parentName:"p"},"V"),"~i~ is an element of\nthe set ",(0,r.kt)("em",{parentName:"p"},"D"),"~i~. When ",(0,r.kt)("em",{parentName:"p"},"n")," = 2, we call the relation a ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Relation_(mathematics)%5Bbinary"},"http://en.wikipedia.org/wiki/Relation_(mathematics)[binary")," relation]."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Relational_algebra"},"database theory"),", a relation is a table with a heading and an unordered set of tuples:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"D",(0,r.kt)("sub",null,"1")," Name",(0,r.kt)("sub",null,"1"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"D",(0,r.kt)("sub",null,"2")," Name",(0,r.kt)("sub",null,"2"))),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"D~n~ Name~n~")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"11"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"12"))),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V~1n~"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"21"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"22"))),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V~2n~"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"31"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V",(0,r.kt)("sub",null,"32"))),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"V~3n~"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"In Rascal, a relation is a set of tuples and is characterized by the type:\n",(0,r.kt)("inlineCode",{parentName:"p"},"rel[D<sub>1</sub> Name<sub>1</sub>, D<sub>2</sub> Name<sub>2</sub>, ..., D~n~ Name~n~]"),"\nSee ",(0,r.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Relation"},"Relation Values")," and  for a description of relations and their operators\n(since relations are sets all set operators also apply to them, see ",(0,r.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Set"},"Set Values"),")\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/Relation"},"functions on relations"),"\n(and here again, since relations are sets all set operators also apply to them,\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/Set"},"functions on sets"),")."),(0,r.kt)("h2",{id:"relations-in-daily-life"},"Relations in Daily Life"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"parent-of")," or ",(0,r.kt)("em",{parentName:"li"},"friend-of")," relation between people.\n",(0,r.kt)("img",{src:a(68407).Z,width:"1071",height:"809"}),(0,r.kt)("a",{parentName:"li",href:"http://www.translatedmemories.com/bookpgs/Pg10-11CharRelation.jpg"},"credit")),(0,r.kt)("li",{parentName:"ul"},"A character relation map, describing the relations between the characters in a play or soap series."),(0,r.kt)("li",{parentName:"ul"},"A listing of the top 2000 songs of all times including the position, artist name, song title, the year the song was published.\n",(0,r.kt)("img",{src:a(36807).Z,width:"640",height:"438"}),(0,r.kt)("a",{parentName:"li",href:"http://top2011.radio2.nl/lijst/2010"},"credit"))),(0,r.kt)("h2",{id:"relations-in-computer-science"},"Relations in computer science"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A relational data base."),(0,r.kt)("li",{parentName:"ul"},"Login information including user name, password, home directory, etc.")),(0,r.kt)("h2",{id:"relations-in-rascal"},"Relations in Rascal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A parent child relation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'rel[str parent, str child] = {\n<"Paul", "Eva">,\n<"Paul", "Thomas">,\n<"Jurgen", "Simon">,\n<"Jurgen", "David">,\n<"Tijs", "Mats">\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A fragment of the top 2000 relation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'rel[int position, str artist, str title, int year] Top2000 = {\n<1, "Eagles", "Hotel California",1977>,\n<2, "Queen", "Bohemian rhapsody", 1975>,\n<3, "Boudewijn de Groot", "Avond", 1997>,\n...\n};\n')))}u.isMDXComponent=!0},68407:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/char-relation-565dd1c100ef562391b5e30b8b2e84cb.jpg"},36807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/top2000-2010-2df277e16e9861ccd68c096bd4f938e8.jpg"}}]);