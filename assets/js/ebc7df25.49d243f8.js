"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[43593],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>h});var o=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=o.createContext({}),c=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},p=function(n){var t=c(n.components);return o.createElement(l.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(e),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return e?o.createElement(d,i(i({ref:t},p),{},{components:e})):o.createElement(d,i({ref:t},p))}));function h(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var c=2;c<r;c++)i[c]=e[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},79238:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=e(83117),a=(e(67294),e(3905));const r={title:"ControlFlow"},i=void 0,s={unversionedId:"Recipes/Languages/Pico/ControlFlow/index",id:"Recipes/Languages/Pico/ControlFlow/index",title:"ControlFlow",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/ControlFlow/index.md",sourceDirName:"Recipes/Languages/Pico/ControlFlow",slug:"/Recipes/Languages/Pico/ControlFlow/",permalink:"/docs/Recipes/Languages/Pico/ControlFlow/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Pico/ControlFlow/index.md",tags:[],version:"current",frontMatter:{title:"ControlFlow"},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/docs/Recipes/Languages/Pico/Compile/"},next:{title:"Evaluate",permalink:"/docs/Recipes/Languages/Pico/Evaluate/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function m(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Compute the control flow graph for a Pico program."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"A control flow graph shows how the entry and exit points of a program are connected with each other via all\ndecision points and statements in the program. Typically, an assignment statement is a single node in the graph\nand an if-then-else statement creates a decision point (its test) that connects the then branch and the else branch.\nThe exits of each branch are connected to the exit of the if-then-else statement as a whole."),(0,a.kt)("p",null,"A control flow graph for Pico programs can be created as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Pico::ControlFlow\n\nimport analysis::graphs::Graph;\nimport demo::lang::Pico::Abstract;\nimport demo::lang::Pico::Load;\nimport List;\n\npublic data CFNode // <1>\n    = entry(loc location)\n    | exit()\n    | choice(loc location, EXP exp)\n    | statement(loc location, STATEMENT stat);\n\nalias CFGraph = tuple[set[CFNode] entry, Graph[CFNode] graph, set[CFNode] exit]; // <2>\n\nCFGraph cflowStat(s:asgStat(PicoId Id, EXP Exp)) { // <3>\n   S = statement(s@location, s);\n   return <{S}, {}, {S}>;\n}\n\nCFGraph cflowStat(ifElseStat(EXP Exp,                  // <4>\n                              list[STATEMENT] Stats1,\n                              list[STATEMENT] Stats2)){\n   CF1 = cflowStats(Stats1); \n   CF2 = cflowStats(Stats2); \n   E = {choice(Exp@location, Exp)}; \n   return < E, (E * CF1.entry) + (E * CF2.entry) + CF1.graph + CF2.graph, CF1.exit + CF2.exit >;\n}\n\nCFGraph cflowStat(whileStat(EXP Exp, list[STATEMENT] Stats)) { // <5>\n   CF = cflowStats(Stats); \n   E = {choice(Exp@location, Exp)}; \n   return < E, (E * CF.entry) + CF.graph + (CF.exit * E), E >;\n}\n\nCFGraph cflowStats(list[STATEMENT] Stats){ // <6>\n  if(size(Stats) == 1) {\n     return cflowStat(Stats[0]);\n  }\n  \n  CF1 = cflowStat(Stats[0]);\n  CF2 = cflowStats(tail(Stats));\n  \n  return < CF1.entry, CF1.graph + CF2.graph + (CF1.exit * CF2.entry), CF2.exit >;\n}\n\nCFGraph cflowProgram(PROGRAM P:program(list[DECL] _, list[STATEMENT] Series)){ // <7>\n   CF = cflowStats(Series);\n   Entry = entry(P@location);\n   Exit  = exit();\n   \n   return <{Entry}, ({Entry} * CF.entry) + CF.graph + (CF.exit * {Exit}), {Exit}>;\n}\n\npublic CFGraph cflowProgram(str txt) = cflowProgram(load(txt)); // <8>\n// end::module[]\n\n")),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("p",null,"<1> First we define a data type ",(0,a.kt)("inlineCode",{parentName:"p"},"CFNODE")," that represents the various elements of a control flow graph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*  `entry`: the entry point of the program.\n*  `exit` the exit point of the program.\n*  `choice`: a decision point in the control flow.\n*  `statement`: a statement in the control flow.\n")),(0,a.kt)("p",null,"<2> Next we define ",(0,a.kt)("inlineCode",{parentName:"p"},"CFGRAPH")," , an alias for a tuple consisting of the following three elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*  `entry`: the set of entry nodes of the graph.\n*  `graph`: the actual graph of `CFNODE`s.\n*  `exit`: the set of exit nodes.\n")),(0,a.kt)("p",null,"   The computation of the control flow graph is defined by the functions\n",(0,a.kt)("inlineCode",{parentName:"p"},"cflowStat"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cflowStats"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cflowDecls")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cflowProgram"),"."),(0,a.kt)("p",null,"<3> The control flow of an assignment statement is computed by wrapping\nthe assignment statement as a ",(0,a.kt)("inlineCode",{parentName:"p"},"CFNODE")," and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"CFGRAPH")," with the assignment\nstatement as entry and exit node, and no internal connections."),(0,a.kt)("p",null,"<4> The control flow of an if-then-else statement is computed as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*  First the control flows of the then part and the else part are computed,\n    yielding `CF1` and `CF2`.\n*  Next a set `E` is created that consist of a the test of the if-then-else statement\n    wrapped as choice node.\n*  Finally, a `CFGRAPH` is returned consisting of the followng three elements:\n    ***  The entry point set `E`.\n    ***  A graph consisting of the connections between the entry point and both\n         branches (`E * CF1.entry + E * CF2.entry`) and the internal graphs of both branches\n         (`CF1.graph + CF2.graph`).\n    ***  The union of exit nodes of both branches (`CF1.exit + CF2.exit`).\n")),(0,a.kt)("p",null,"<5> The control flow of  while-statement is computed in a similar fashion,\nexcept that the exit of the loop body has to be connected with the entry\nof the while loop."),(0,a.kt)("p",null,"<6> The control flow graph for a series of statements is obtained by connecting\nthe exits and entries of consecutive statements."),(0,a.kt)("p",null,"<7> The control flow graph of a complete program is obtained by\ncreating an entry and an exit node and connecting them to the graph of\nthe statements of the program."),(0,a.kt)("p",null,"<8> Shows the steps from text to control flow graph."),(0,a.kt)("p",null,"We can now create a CFG for a small Pico program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Pico::ControlFlow;\nok\nrascal>cflowProgram("begin declare n : natural, s : string; n := 10; s := \\"a\\"; while n do s := s + \\"a\\"; n := n - 1 od end");\ntuple[set[CFNode] entry,Graph[CFNode] graph,set[CFNode] exit]: <{entry(|unknown:///|(0,100,<1,0>,<1,100>))},{\n  <statement(\n    |unknown:///|(48,8,<1,48>,<1,56>),\n    asgStat(\n      "s",\n      strCon(\n        "\\"a\\"",\n        location=|unknown:///|(53,3,<1,53>,<1,56>),\n        comments=()),\n      location=|unknown:///|(48,8,<1,48>,<1,56>),\n      comments=())),choice(\n    |unknown:///|(64,1,<1,64>,<1,65>),\n    id(\n      "n",\n      location=|unknown:///|(64,1,<1,64>,<1,65>),\n      comments=()))>,\n  <statement(\n    |unknown:///|(69,12,<1,69>,<1,81>),\n    asgStat(\n      "s",\n      add(\n        id(\n          "s",\n          location=|unknown:///|(74,1,<1,74>,<1,75>),\n          comments=()),\n        strCon(\n          "\\"a\\"",\n          location=|unknown:///|(78,3,<1,78>,<1,81>),\n          comments=()),\n        location=|unknown:///|(74,7,<1,74>,<1,81>),\n        comments=()),\n      location=|unknown:///|(69,12,<1,69>,<1,81>),\n      comments=())),statement(\n    |unknown:///|(83,10,<1,83>,<1,93>),\n    asgStat(\n      "n",\n      sub(\n        id(\n          "n",\n          location=|unknown:///|(88,1,<1,88>,<1,89>),\n          comments=()),\n        natCon(\n          1,\n          location=|unknown:///|(92,1,<1,92>,<1,93>),\n          comments=()),\n        location=|unknown:///|(88,5,<1,88>,<1,93>),\n        comments=()),\n      location=|unknown:///|(83,10,<1,83>,<1,93>),\n      comments=()))>,\n  <statement(\n    |unknown:///|(39,7,<1,39>,<1,46>),\n    asgStat(\n      "n",\n      natCon(\n        10,\n        location=|unknown:///|(44,2,<1,44>,<1,46>),\n        comments=()),\n      location=|unknown:///|(39,7,<1,39>,<1,46>),\n      comments=())),statement(\n    |unknown:///|(48,8,<1,48>,<1,56>),\n    asgStat(\n      "s",\n      strCon(\n        "\\"a\\"",\n        location=|unknown:///|(53,3,<1,53>,<1,56>),\n        comments=()),\n      location=|unknown:///|(48,8,<1,48>,<1,56>),\n      comments=()))>,\n  <statement(\n    |unknown:///|(83,10,<1,83>,<1,93>),\n    asgStat(\n      "n",\n      sub(\n        id(\n          "n",\n          location=|unknown:///|(88,1,<1,88>,<1,89>),\n          comments=()),\n        natCon(\n          1,\n          location=|unknown:///|(92,1,<1,92>,<1,93>),\n          comments=()),\n        location=|unknown:///|(88,5,<1,88>,<1,93>),\n        comments=()),\n      location=|unknown:///|(83,10,<1,83>,<1,93>),\n      comments=())),choice(\n    |unknown:///|(64,1,<1,64>,<1,65>),\n    id(\n      "n",\n      location=|unknown:///|(64,1,<1,64>,<1,65>),\n      comments=()))>,\n  <entry(|unknown:///|(0,100,<1,0>,<1,100>)),statement(\n    |unknown:///|(39,7,<1,39>,<1,46>),\n    asgStat(\n      "n",\n      natCon(\n        10,\n        location=|unknown:///|(44,2,<1,44>,<1,46>),\n        comments=()),\n      location=|unknown:///|(39,7,<1,39>,<1,46>),\n      comments=()))>,\n  <choice(\n    |unknown:///|(64,1,<1,64>,<1,65>),\n    id(\n      "n",\n      location=|unknown:///|(64,1,<1,64>,<1,65>),\n      comments=())),exit()>,\n  <choice(\n    |unknown:///|(64,1,<1,64>,<1,65>),\n    id(\n      "n",\n      location=|unknown:///|(64,1,<1,64>,<1,65>),\n      comments=())),statement(\n    |unknown:///|(69,12,<1,69>,<1,81>),\n    asgStat(\n      "s",\n      add(\n        id(\n          "s",\n          location=|unknown:///|(74,1,<1,74>,<1,75>),\n          comments=()),\n        strCon(\n          "\\"a\\"",\n          location=|unknown:///|(78,3,<1,78>,<1,81>),\n          comments=()),\n        location=|unknown:///|(74,7,<1,74>,<1,81>),\n        comments=()),\n      location=|unknown:///|(69,12,<1,69>,<1,81>),\n      comments=()))>\n},{exit()}>\n')),(0,a.kt)("p",null,"Is the above not very motivating to move on to ",(0,a.kt)("a",{parentName:"p",href:"/docs/Recipes/Languages/Pico/Visualize"},"Visualize"),"?"),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}m.isMDXComponent=!0}}]);