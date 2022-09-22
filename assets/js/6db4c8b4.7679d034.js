"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[69662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const s={title:"Abstract"},i=void 0,o={unversionedId:"Recipes/Languages/Exp/Abstract/index",id:"Recipes/Languages/Exp/Abstract/index",title:"Abstract",description:"Synopsis",source:"@site/docs/Recipes/Languages/Exp/Abstract/index.md",sourceDirName:"Recipes/Languages/Exp/Abstract",slug:"/Recipes/Languages/Exp/Abstract/",permalink:"/docs/Recipes/Languages/Exp/Abstract/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Exp/Abstract/index.md",tags:[],version:"current",frontMatter:{title:"Abstract"},sidebar:"tutorialSidebar",previous:{title:"Exp",permalink:"/docs/Recipes/Languages/Exp/"},next:{title:"Combined",permalink:"/docs/Recipes/Languages/Exp/Combined/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"A version of Exp based on abstract syntax."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Abstract_syntax"},"abstract syntax")," for a language is a\ndata type that is used to represent programs in the language in an ",(0,r.kt)("em",{parentName:"p"},"abstract")," form.\nAbstract syntax has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'It is "abstract" in the sense that it does not contain textual details such as parentheses,\nlayout, and the like.'),(0,r.kt)("li",{parentName:"ul"},"While a language has one grammar (also known as, ",(0,r.kt)("em",{parentName:"li"},"concrete syntax"),") it may have several abstract syntaxes\nfor different purposes: type analysis, code generation, etc.")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The abstract syntax for Exp looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Exp::Abstract::Syntax\n\n\n\ndata Exp = con(int n)          // <1>\n         | mul(Exp e1, Exp e2) // <2>\n         | add(Exp e1, Exp e2) // <3>\n         ;\n// end::module[]\n\n")),(0,r.kt)("p",null,"<1> Defines integer constants, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"con(123)"),".\n<2> Defines multiplication, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mul(con(2),con(3))"),".\n<3> Defines addition, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"add(con(2),con(3))"),"."),(0,r.kt)("p",null,"Given the abstract syntax for Exp, we can define an interpreter that evaluates\nexpressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Exp::Abstract::Eval\nimport demo::lang::Exp::Abstract::Syntax;\n\nint eval(con(int n)) = n;                            // <1>\nint eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); // <2>\nint eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2);\ntest bool tstEval2() = eval(mul(con(7), con(3))) == 21;\ntest bool tstEval3() = eval(add(con(7), con(3))) == 10;\ntest bool tstEval4() = eval(add(con(3), mul(con(4), con(5)))) == 23;\n\n")),(0,r.kt)("p",null,"Here we see Rascal's ",(0,r.kt)("em",{parentName:"p"},"pattern-directed invocation")," in action (see ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Declarations/Function"},"Function Declaration"),").\nThe essence is this: in other languages the formal parameters in a function declaration\nare just that: formal parameters, i.e., single names that can be used inside the function and\nthat are bound when the function is called.\nIn Rascal, however, the formal parameters are actually a ",(0,r.kt)("em",{parentName:"p"},"pattern")," and functions\ncan have arbitrarily complex patterns as (single) formal parameter.\nThese patterns may bind variables and thus introduce variables that can be used in tthe function body."),(0,r.kt)("p",null,"The big advantage of pattern-directed invocation is modularity and extensibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The treatment of the cases in the abstract syntax is decoupled."),(0,r.kt)("li",{parentName:"ul"},"If the abstract is extended later on with new cases, the functions for the old cases can be reused.")),(0,r.kt)("p",null,"In this example we use this mechanism to define separate functions for each case in the abstract syntax."),(0,r.kt)("p",null,"<1> Defines the case for evaluating integer constants: they evaluate to themselves.\n<2> Defines the case for evaluating multiplication: first evaluate the arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"e1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"e2"),"\nand return the multiplication of their values.\n<3> Defines the case for evaluating addition: first evaluate the arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"e1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"e2"),"\nand return the addition of their values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::lang::Exp::Abstract::Syntax;\nok\nrascal>import demo::lang::Exp::Abstract::Eval;\nok\nrascal>eval(mul(con(7), con(3)));\nint: 21\nrascal>eval(add(con(3), mul(con(4), con(5))));\nint: 23\n")),(0,r.kt)("p",null,"Entering expressions in abstract syntax form is no fun, and this is where concrete syntax comes to the rescue."))}u.isMDXComponent=!0}}]);