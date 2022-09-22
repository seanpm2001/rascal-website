"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[84613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Syntax Definition",keywords:["start","lexical","layout","keyword","assoc","left","right","non-assoc"]},o=void 0,s={unversionedId:"Rascal/Declarations/SyntaxDefinition/index",id:"Rascal/Declarations/SyntaxDefinition/index",title:"Syntax Definition",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition",slug:"/Rascal/Declarations/SyntaxDefinition/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Declarations/SyntaxDefinition/index.md",tags:[],version:"current",frontMatter:{title:"Syntax Definition",keywords:["start","lexical","layout","keyword","assoc","left","right","non-assoc"]},sidebar:"tutorialSidebar",previous:{title:"Type Parameters",permalink:"/docs/Rascal/Declarations/StaticTyping/TypeParameters/"},next:{title:"Action",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Action/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Syntax Definitions allow the definition of parsers for programming languages, domain-specific languages and data formats."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Start syntax Nonterminal = Alternatives;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lexical Nonterminal = Alternatives;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"layout Nonterminal = Alternatives;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyword Nonterminal = Alternatives;"))),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"Start")," is either ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," or nothing, and ",(0,i.kt)("em",{parentName:"p"},"Alternatives")," are one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tags Associativity Symbols")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tags Associativity Name : Symbols")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Associativity ( Alternatives )")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Alternatives<sub>1</sub> | Alternatives<sub>2</sub>"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Alternatives<sub>1</sub> > Alternatives<sub>2</sub>"),"  ")),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"Associativity")," is nothing, or one of ",(0,i.kt)("inlineCode",{parentName:"p"},"assoc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"non-assoc"),", and ",(0,i.kt)("em",{parentName:"p"},"Tags")," are a possibly empty list of tags."),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Rascal supports full context-free grammars for syntax definition. It generates scannerless parsers from these definitions.\nThese parsers produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/ParseTrees"},"Parse Trees")," that can be further processed by Rascal using ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/ConcreteSyntax"},"./Concrete Syntax")," fragments\nin ",(0,i.kt)("a",{parentName:"p",href:"/docs//Rascal/Patterns"},"Patterns")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs//Rascal/Expressions"},"Expressions"),", or they can be ",(0,i.kt)("em",{parentName:"p"},"imploded")," to ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),"s."),(0,i.kt)("p",null,"There are four kinds of non-terminals that can be defined with slightly different characteristics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Syntax")," non-terminals are general context-free non-terminals. This mean left-recursion, right-recursion, any of the regular expression ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol"},"./Symbol"),"s and all kinds of ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation")," can be used to define it.\nIt is important to note that in between the ",(0,i.kt)("em",{parentName:"p"},"Symbols")," that define a syntax non-terminal the locally defined layout non-terminal will be interleaved.\nFor example, if you define ",(0,i.kt)("inlineCode",{parentName:"p"},"layout ML = [\\ ]*;")," and ",(0,i.kt)("inlineCode",{parentName:"p"},'syntax A = "a" "a"'),", Rascal will modify the definition of A to ",(0,i.kt)("inlineCode",{parentName:"p"},'syntax A = "a" ML "a";')," before generating a parser.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Lexical")," non-terminals are just like ",(0,i.kt)("em",{parentName:"p"},"syntax")," non-terminals, very much like ",(0,i.kt)("em",{parentName:"p"},"syntax")," non-terminals.\nHowever, the definition of a lexical is ",(0,i.kt)("em",{parentName:"p"},"not")," modified with interleaved layout non-terminals.\nAnd, the structure of lexicals is not traversed by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Visit"},"visit statement")," and equality is checked between lexicals\nby checking the characters (not its structure) for equality. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Layout")," non-terminals are just like ",(0,i.kt)("em",{parentName:"p"},"syntax")," non-terminals as well. However, they are used to preprocess all ",(0,i.kt)("em",{parentName:"p"},"syntax")," definitions in the same module scope (see above).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Keyword")," non-terminals are ",(0,i.kt)("em",{parentName:"p"},"not")," like ",(0,i.kt)("em",{parentName:"p"},"syntax")," non-terminals. These only allow definition of enumeration of literal\nsymbols and single character classes. Keyword non-terminals play an important role in the semantics of ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation"),"\nwhere some disambiguation constructs require finite, non-empty enumeration of strings.\nThe prime example is the definition of reserved keywords."))),(0,i.kt)("p",null,"Each alternative of a syntax definition is defined by a list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol"},"./Symbol"),"s. Each of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol"},"./Symbol"),"s can be labeled or not.\nThe alternative of a defined syntax type may be labeled or not as well. With the label additional operations are activated on the corresponding parse trees:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"is")," operator is defined for labeled alternatives (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Operators"},"Operators"),")."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"has")," operator is defined for labeled ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol"},"./Symbol"),"s in the right-hand side (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Operators"},"Operators"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/Action"},"Action")," functions can be written to override the construction of a parse tree, using the label of an alternative as the function name"),(0,i.kt)("li",{parentName:"ul"},"[implode]"," uses labeled alternatives to map to an ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"))),(0,i.kt)("p",null,"Alternatives can be combined in a single ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition"},"Syntax Definition")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">")," and associativity combinators.\nThe latter two represent ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation")," constructs that you should read more about. The ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," is a short-hand for not having to repeat ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax A =")," for every alternative of ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("p",null,"Alternatives can be named or not. The names are essential only if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you need to ",(0,i.kt)("a",{parentName:"li",href:"/docs/Library/ParseTree#ParseTree-implode"},"implode")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/ParseTrees"},"Parse Trees")),(0,i.kt)("li",{parentName:"ul"},"you need to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"is")," expression, as in ",(0,i.kt)("inlineCode",{parentName:"li"},"myStatement is ifThenElse")," instead of using concrete pattern matching."),(0,i.kt)("li",{parentName:"ul"},"you want to write ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/Action"},"Action"),"s that triggers on the construction of the alternative.")),(0,i.kt)("p",null,'However, it is generally a good idea to name your rules even if you do not need them.\nNote that a name may be reused for different alternatives for a single non-terminal,\nprovided that the lists of symbols for these "overloaded" alternatives use ',(0,i.kt)("em",{parentName:"p"},"different non-terminal symbols"),".\nThis implies that alternatives for lexicals generally do not use overloaded names because they are often\ndefined only by regular expressions over terminal ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol"},"Symbol"),"s (literals and character classes)."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"start")," modifier identifies the start of a grammar.\nThe effect of a start modifier is that Rascal will generate an extra syntax definition before generating a parser\nthat allows layout to before and after the start non-terminal.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"layout L = [\\ ]*; start Program = Statement*;`\n")),(0,i.kt)("p",null,"will produce ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax start[Program] = L Program top L;"),".\nNote that the ",(0,i.kt)("inlineCode",{parentName:"p"},"start[Program]")," type is now available in your program, and ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/ParseTrees"},"Parse Trees")," assigned to variable of that\ntype will allow access to the ",(0,i.kt)("em",{parentName:"p"},"top")," field."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following example makes use of practically all of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition"},"Syntax Definition")," features, except parse actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},'// layout is lists of whitespace characters\nlayout MyLayout = [\\t\\n\\ \\r\\f]*;\n\n// identifiers are characters of lowercase alphabet letters, \n// not immediately preceded or followed by those (longest match)\n// and not any of the reserved keywords\nlexical Identifier = [a-z] !<< [a-z]+ !>> [a-z] \\ MyKeywords;\n\n// this defines the reserved keywords used in the definition of Identifier\nkeyword MyKeywords = "if" | "then" | "else" | "fi";\n\n// here is a recursive definition of expressions \n// using priority and associativity groups.\nsyntax Expression \n  = id: Identifier id\n  | null: "null"\n  | left multi: Expression l "*" Expression r\n  > left ( add: Expression l "+" Expression r\n         | sub: Expression l "-" Expression r\n         )\n  | bracket "(" Expression ")"\n  ;\n')),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modular and compositional."),(0,i.kt)("li",{parentName:"ul"},"No grammar normalization or grammar factoring necessary."),(0,i.kt)("li",{parentName:"ul"},"Generate a parser for any context-free grammar."),(0,i.kt)("li",{parentName:"ul"},"Generate parsers are really fast (for general parsers)."),(0,i.kt)("li",{parentName:"ul"},"Powerful disambiguation constructs for common programming language disambiguation patterns."),(0,i.kt)("li",{parentName:"ul"},"Data-dependent (context-sensitive) disambiguation via arbitrary functions."),(0,i.kt)("li",{parentName:"ul"},"Embedding of concrete syntax fragments in Rascal programs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s follow the syntax and semantics of ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),"s quite closely.")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grammars may be ambiguous, so read about ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDetection"},"Ambiguity Detection")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/AmbiguityDiagnosis"},"Ambiguity Diagnosis"),"."),(0,i.kt)("li",{parentName:"ul"},"Static grammar checker is not implemented yet.")))}m.isMDXComponent=!0}}]);