"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[50377],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),u=l,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?n.createElement(k,i(i({ref:a},c),{},{components:t})):n.createElement(k,i({ref:a},c))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15398:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(83117),l=(t(67294),t(3905));const r={title:"Datatypes"},i=void 0,s={unversionedId:"RascalConcepts/Datatypes/index",id:"RascalConcepts/Datatypes/index",title:"Datatypes",description:"Synopsis",source:"@site/docs/RascalConcepts/Datatypes/index.md",sourceDirName:"RascalConcepts/Datatypes",slug:"/RascalConcepts/Datatypes/",permalink:"/docs/RascalConcepts/Datatypes/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RascalConcepts/Datatypes/index.md",tags:[],version:"current",frontMatter:{title:"Datatypes"},sidebar:"tutorialSidebar",previous:{title:"Control Structures",permalink:"/docs/RascalConcepts/ControlStructures/"},next:{title:"Enumerating",permalink:"/docs/RascalConcepts/Enumerating/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:o};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Built-in and user-defined datatypes."),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"Rascal provides a rich set of datatypes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Boolean"},"Boolean")," (",(0,l.kt)("inlineCode",{parentName:"li"},"bool"),")."),(0,l.kt)("li",{parentName:"ul"},"Infinite precision ",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Integer"},"Integer")," (",(0,l.kt)("inlineCode",{parentName:"li"},"int"),"),\n",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Real"},"Real")," (",(0,l.kt)("inlineCode",{parentName:"li"},"real"),"), and ",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Number"},"Number")," (",(0,l.kt)("inlineCode",{parentName:"li"},"num"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/String"},"String"),"s (",(0,l.kt)("inlineCode",{parentName:"li"},"str"),") that can act as templates with embedded expressions and statements. "),(0,l.kt)("li",{parentName:"ul"},"Source code ",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Location"},"Location"),"s (",(0,l.kt)("inlineCode",{parentName:"li"},"loc"),") based on an extension of Universal Resource Identifiers (URI) that allow precise description of text areas in local and remote files."),(0,l.kt)("li",{parentName:"ul"},"Date and time values (",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/DateTime"},"DateTime"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"datetime"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/List"},"List")," (",(0,l.kt)("inlineCode",{parentName:"li"},"list"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Tuple"},"Tuple")," (",(0,l.kt)("inlineCode",{parentName:"li"},"tuple"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Set"},"Set")," (",(0,l.kt)("inlineCode",{parentName:"li"},"set"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Map"},"Map")," (",(0,l.kt)("inlineCode",{parentName:"li"},"map"),") "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Relation"},"Relation")," (",(0,l.kt)("inlineCode",{parentName:"li"},"rel"),"). "),(0,l.kt)("li",{parentName:"ul"},"Untyped tree structures (",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Node"},"Node"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"node"),").  "),(0,l.kt)("li",{parentName:"ul"},"User-defined algebraic datatypes (",(0,l.kt)("a",{parentName:"li",href:"../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"data"),") allow the introduction of problem-specific types and are a subtype of node.\nThis makes it possible to have typed\nand untyped views on the same data.\nA special case are syntax trees that are the result of parsing source files are represented\nas datatypes (",(0,l.kt)("inlineCode",{parentName:"li"},"Tree"),").")),(0,l.kt)("p",null,"There is a wealth of built-in operators and library functions available on the standard datatypes. "),(0,l.kt)("p",null,"These built-in datatypes are closely related to each other:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In a list all elements have the same static type and the order of elements matters. A list may contain the same value more than once."),(0,l.kt)("li",{parentName:"ul"},"In a set all elements have the same static type and the order of elements does not matter.\nA set contains an element only once. In other words, duplicate elements are eliminated\nand no matter how many times an element is added to a set, it will occur in it only once."),(0,l.kt)("li",{parentName:"ul"},"In a tuple all elements (may) have a different static type. Each element of a tuple may have a label that can be used to select that",(0,l.kt)("br",{parentName:"li"}),"element of the tuple."),(0,l.kt)("li",{parentName:"ul"},"A relation is a set of tuples which all have the same static tuple type."),(0,l.kt)("li",{parentName:"ul"},"A map is an associative table of (key, value) pairs. Key and value (may) have different static\ntype and a key can only be associated with a value once.")),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Here are some examples of the built-in data types:\n| ",(0,l.kt)("em",{parentName:"p"},"Type"),"                    | ",(0,l.kt)("em",{parentName:"p"},"Examples")," |\n| --- | --- |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),"                    | ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"                     | ",(0,l.kt)("inlineCode",{parentName:"p"},"11, 101, 1-11, 1123456789")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"real"),"                    | ",(0,l.kt)("inlineCode",{parentName:"p"},"1.01, 11.0232e201, 1-25.5")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"str"),"                     | ",(0,l.kt)("inlineCode",{parentName:"p"},'"abc"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"first\\nnext"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"result: <X>"')," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"loc"),"                     | ",(0,l.kt)("inlineCode",{parentName:"p"},"\\|file:///etc/passwd\\|")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"dateTime"),"                | ",(0,l.kt)("inlineCode",{parentName:"p"},"$2101-09-05T07:16:19.714+0200$")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"tuple[_T<sub>1</sub>,...,T~n~]"),"\t| ",(0,l.kt)("inlineCode",{parentName:"p"},"<1,2>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'<"john", 43, true>')," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"list[T]"),"               | ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[1]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[1,2,3]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'[true, 2, "abc"]')," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"set[T]"),"                | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{1,2,3,5,7}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"john", 4.0}')," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"rel[_T<sub>1</sub>,...,T~n~]"),"   | ",(0,l.kt)("inlineCode",{parentName:"p"},"{<1,2>,<2,3>,<1,3>}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{<1,10,100>, <2,20,200>}")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"map[T, U]"),"           | ",(0,l.kt)("inlineCode",{parentName:"p"},"()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"(1:true, 2:false)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'("a":1, "b":2)')," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"node"),"                    | ",(0,l.kt)("inlineCode",{parentName:"p"},"f()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"add(x,y)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'g("abc", [2,3,4])')," |"),(0,l.kt)("p",null,"A fragment of the datatype that defines the abstract syntax for statements (assignment, if, while) in a programming language would look as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data STAT = asgStat(Id name, EXP exp)\n          | ifStat(EXP exp,list[STAT] thenpart,\n                           list[STAT] elsepart) \n          | whileStat(EXP exp, list[STAT] body)\n          ;\n")),(0,l.kt)("p",null,"Here are some examples how Rascal responds to values of the above built-in datatypes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>true;\nbool: true\nrascal>101;\nint: 101\nrascal>3.14;\nreal: 3.14\nrascal>"Rascal";\nstr: "Rascal"\nrascal>|file:///etc/passwd|;\nloc: |file:///etc/passwd|\nrascal>$2101-09-05$;\ndatetime: $2101-09-05$\nrascal>[30, 20, 10];\nlist[int]: [30,20,10]\nrascal><"Rascal", 100000>;\ntuple[str,int]: <"Rascal",100000>\nrascal>{"apples", "oranges", "bananas"};\nset[str]: {"oranges","bananas","apples"}\nrascal>{<"apples", 10, 15>, <"oranges", 5, 7>, <"bananas", 9, 11>};\nrel[str,int,int]: {\n  <"apples",10,15>,\n  <"bananas",9,11>,\n  <"oranges",5,7>\n}\nrascal>("apples" : 100, "oranges": 150, "bananas": 75);\nmap[str, int]: ("oranges":150,"bananas":75,"apples":100)\nrascal>"abc"(1, 2, 3);\nnode: "abc"(1,2,3)\n')))}m.isMDXComponent=!0}}]);