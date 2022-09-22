"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>E});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),E=l,d=u["".concat(s,".").concat(E)]||u[E]||v[E]||r;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function E(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(83117),l=(t(67294),t(3905));const r={title:"Evaluate"},i=void 0,o={unversionedId:"Recipes/Languages/Pico/Evaluate/index",id:"Recipes/Languages/Pico/Evaluate/index",title:"Evaluate",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/Evaluate/index.md",sourceDirName:"Recipes/Languages/Pico/Evaluate",slug:"/Recipes/Languages/Pico/Evaluate/",permalink:"/docs/Recipes/Languages/Pico/Evaluate/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Pico/Evaluate/index.md",tags:[],version:"current",frontMatter:{title:"Evaluate"},sidebar:"tutorialSidebar",previous:{title:"ControlFlow",permalink:"/docs/Recipes/Languages/Pico/ControlFlow/"},next:{title:"IDE",permalink:"/docs/Recipes/Languages/Pico/IDE/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function v(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Evaluate a Pico program."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"A complete evaluator (interpreter) for Pico is defined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Pico::Eval\n\nimport demo::lang::Pico::Abstract;\nimport demo::lang::Pico::Load;\n\ndata PicoValue = natval(int n) | strval(str s) | errorval(loc l, str msg); // <1>\n\nalias VENV = map[PicoId, PicoValue]; // <2>\n\n// Evaluate Expressions.\n\nPicoValue evalExp(exp:natCon(int N), VENV env) = natval(N);\n\nPicoValue evalExp(exp:strCon(str S), VENV env) = strval(S);\n\nPicoValue evalExp(exp:id(PicoId Id), VENV env)  = \n    env[Id]?  ? env[Id] : errorval(exp@location, "Uninitialized variable <Id>");\n\nPicoValue evalExp(exp:add(EXP E1, EXP E2), VENV env) = \n   (natval(n1) := evalExp(E1, env) && \n    natval(n2) := evalExp(E2, env)) ? natval(n1 + n2)\n                                    : errorval(exp@location, "+ requires natural arguments");\n  \nPicoValue evalExp(exp:sub(EXP E1, EXP E2), VENV env) = \n   (natval(n1) := evalExp(E1, env) && \n    natval(n2) := evalExp(E2, env)) ? natval(n1 - n2)\n                                    : errorval(exp@location, "- requires natural arguments");\n                                                                     \nPicoValue evalExp(exp:conc(EXP E1, EXP E2), VENV env) = \n   (strval(s1) := evalExp(E1, env) && \n    strval(s2) := evalExp(E2, env)) ? strval(s1 + s2)\n                                    : errorval(exp@location, "|| requires string arguments");\n\n// Evaluate a statement\n\nVENV evalStat(stat:asgStat(PicoId Id, EXP Exp), VENV env) {\n  env[Id] = evalExp(Exp, env);\n  return env;\n}\n    \nVENV evalStat(stat:ifElseStat(EXP Exp, \n                              list[STATEMENT] Stats1,\n                              list[STATEMENT] Stats2),\n              VENV env) =\n  evalStats(evalExp(Exp, env) != natval(0) ? Stats1 : Stats2, env);\n\nVENV evalStat(stat:whileStat(EXP Exp, \n                             list[STATEMENT] Stats1),\n              VENV env) {\n    while(evalExp(Exp, env) != natval(0)){\n       env = evalStats(Stats1, env);\n    }\n    return env;\n}\n\n// Evaluate a list of statements\nVENV evalStats(list[STATEMENT] Stats1, VENV env) {\n  for(S <- Stats1){\n      env = evalStat(S, env);\n  }\n  return env;\n}\n  \n// Eval declarations\n\nVENV evalDecls(list[DECL] Decls) =\n    ( Id : (tp == demo::lang::Pico::Abstract::natural() ? natval(0) : strval(""))  \n    | decl(PicoId Id, TYPE tp) <- Decls\n    );\n\n// Evaluate a Pico program\n\npublic VENV evalProgram(PROGRAM P){\n  if(program(list[DECL] Decls, list[STATEMENT] Series) := P){\n     VENV env = evalDecls(Decls);\n     return evalStats(Series, env);\n  } else\n    throw "Cannot happen";\n}\n\npublic VENV evalProgram(str txt) = evalProgram(load(txt));\n// end::module[]\n    \n\n')),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("p",null,"<1> First we introduce a data type ",(0,l.kt)("inlineCode",{parentName:"p"},"PicoValue")," that wraps all possible values that can occur at run-time.\n<2> Compared to ","[Pico/Typecheck]",", we use ",(0,l.kt)("inlineCode",{parentName:"p"},"VENV"),", a value environment (a map from Pico identifiers to Pico values)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The actual evaluator consists of the functions ",(0,l.kt)("inlineCode",{parentName:"li"},"evalExp"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"evalStat"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"evalStats"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"evalDecls")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"evalProgram"),".\nThey are written in a similar style as the typechecker."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"evalProgram")," evaluates a given Pico program.")),(0,l.kt)("p",null,"Here is how to evaluate a Pico program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Pico::Eval;\nok\nrascal>evalProgram("begin declare x : natural, y : natural; x := 1; y := x + 5 end");\nmap[str, PicoValue]: (\n  "x":natval(1),\n  "y":natval(6)\n)\n')),(0,l.kt)("h4",{id:"benefits"},"Benefits"))}v.isMDXComponent=!0}}]);