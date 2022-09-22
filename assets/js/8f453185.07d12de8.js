"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[73133],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73814:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Patterns"},i=void 0,s={unversionedId:"Rascal/Patterns/index",id:"Rascal/Patterns/index",title:"Patterns",description:"Synopsis",source:"@site/docs/Rascal/Patterns/index.md",sourceDirName:"Rascal/Patterns",slug:"/Rascal/Patterns/",permalink:"/docs/Rascal/Patterns/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Patterns/index.md",tags:[],version:"current",frontMatter:{title:"Patterns"},sidebar:"tutorialSidebar",previous:{title:"Pattern With Action",permalink:"/docs/Rascal/Expressions/Visit/PatternWithAction/"},next:{title:"Concrete Patterns",permalink:"/docs/Rascal/Patterns/Concrete/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Patterns are a notation for pattern matching used to detect if a value has a certain shape,\nand then to bind variables to parts of the matched value. "),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"For most of the ",(0,r.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values"},"Values"),', there is a corresponding pattern matching operator. Then there are\nsome "higher-order" matching operators which make complex patterns out of simpler ones.\nThis is the complete list:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Literal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/Boolean"},"Boolean"),", ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/Integer"},"Integer"),", ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/Real"},"Real"),", ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/Number"},"Number"),", ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/String"},"String"),", ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/Location"},"Location"),", or ",(0,r.kt)("a",{parentName:"td",href:"../../Rascal/Expressions/Values/DateTime"},"Date time"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Regular Expression"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<Regular Expression>/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variable declaration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Type Var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi-variable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*Var"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*Type Var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[ Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ ]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Set"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"< Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ >"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Name ( Pat<sub>1</sub>, Pat<sub>2</sub>, ..., Pat~n~ )"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descendant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/ Pat"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Labelled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Var : Pat"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TypedLabelled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Type Var : Pat"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TypeConstrained"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[Type] Pat"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Concrete"),(0,r.kt)("td",{parentName:"tr",align:null},"(Symbol) ",(0,r.kt)("inlineCode",{parentName:"td"},"Token<sub>1</sub> Token<sub>2</sub> ... Token~n~"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Patterns are used to ",(0,r.kt)("em",{parentName:"p"},"dispatch")," functions and conditional control flow, to ",(0,r.kt)("em",{parentName:"p"},"extract")," information\nfrom values and to conditionally ",(0,r.kt)("em",{parentName:"p"},"filter")," values. The pattern following pattern kinds can be arbitrarily nested, following\nthe above syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Patterns"},"Rascal:Patterns")),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Concrete))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Descendant))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Labelled))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/List))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Literal))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/MultiVariable))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Node))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Regular))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Set))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Tuple))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/TypeConstrained))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/TypedLabelled))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/Variable))"),(0,r.kt)("li",{parentName:"ul"},"((Rascal:Patterns/VariableDeclaration))")),(0,r.kt)("p",null,"All these patterns may be used in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cases of a ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Statements/Switch"},"Switch")," or ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Statements/Visit"},"visit statements")," or ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Visit"},"visit expressions"),", "),(0,r.kt)("li",{parentName:"ul"},"on the left of the ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Values/Boolean/Match"},"Match")," operator (",(0,r.kt)("inlineCode",{parentName:"li"},":="),"),"),(0,r.kt)("li",{parentName:"ul"},"on the left of the ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Expressions/Comprehensions/Enumerator"},"Enumerator")," operator (",(0,r.kt)("inlineCode",{parentName:"li"},"<-"),"), and"),(0,r.kt)("li",{parentName:"ul"},"as formal parameters of ",(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Declarations/Function"},"Function"),"s. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../Rascal/Statements/TryCatch"},"Try catch")," statements to match thrown exceptions.")),(0,r.kt)("p",null,"Each pattern binds variables in a conditional scope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in further patterns to the right of the name which is bound in the same pattern"),(0,r.kt)("li",{parentName:"ul"},"in the body of case statement (either a replacement or a statement body) "),(0,r.kt)("li",{parentName:"ul"},"in the conditions and bodies of ",(0,r.kt)("inlineCode",{parentName:"li"},"<If>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<For>"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"<While>")," control flow statements"),(0,r.kt)("li",{parentName:"ul"},"in the yielding expressions of comprehensions and in furter conditions of the comprehensions")),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a pattern does not match, then it may be hard to find out why. A small test case is the best thing to create. Often a default alternative\nwhich ",(0,r.kt)("inlineCode",{parentName:"li"},"<Throw>"),"s an exception with the value which is not matched can be used to find out why this is happening."),(0,r.kt)("li",{parentName:"ul"},"If a variable is bound in the scope of a pattern, then it acts as an ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," test, so make sure to use fresh variables\nto avoid such accidental collisions.")))}u.isMDXComponent=!0}}]);