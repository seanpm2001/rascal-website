"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[58197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=o(t),d=r,m=v["".concat(p,".").concat(d)]||v[d]||c[d]||l;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=v;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(83117),r=(t(67294),t(3905));const l={title:"Eval0"},s=void 0,i={unversionedId:"Recipes/Languages/Func/Eval0/index",id:"Recipes/Languages/Func/Eval0/index",title:"Eval0",description:"Synopsis",source:"@site/docs/Recipes/Languages/Func/Eval0/index.md",sourceDirName:"Recipes/Languages/Func/Eval0",slug:"/Recipes/Languages/Func/Eval0/",permalink:"/docs/Recipes/Languages/Func/Eval0/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Func/Eval0/index.md",tags:[],version:"current",frontMatter:{title:"Eval0"},sidebar:"tutorialSidebar",previous:{title:"Concrete Syntax",permalink:"/docs/Recipes/Languages/Func/ConcreteSyntax/"},next:{title:"Eval1",permalink:"/docs/Recipes/Languages/Func/Eval1/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],u={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"A Func interpreter that does not support let-expressions and pointers."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("h4",{id:"function"},"Function"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Interpreter Eval0 supports the following features of Func:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Eval0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer constant"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arithmetic operators"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comparison operators"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"call"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if"),(0,r.kt)("td",{parentName:"tr",align:null},"y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"let"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequence"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assignment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address operator"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dereference operator"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is the code for Eval0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Func::Eval0\n\n// No let\n\nimport demo::lang::Func::AST;\nimport List;\n\nalias PEnv = map[str, Func]; // <1>\n\nvalue eval0(str main, list[int] args, Prog prog) { // <2>\n  penv = ( f.name: f | f <- prog.funcs );\n  f = penv[main];\n  return eval0(subst(f.body, f.formals, args), penv);\n}\n\n\nExp subst(Exp exp, list[str] vars, list[int] values) { // <3>\n  env = ( vars[i]: values[i] | i <- index(vars) );\n  return visit (exp) {\n    case var(str name) => nat(env[name])\n  };\n}\n\nint eval0(nat(int nat), PEnv penv)  = nat; // <4>\n\nint eval0(mul(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) * eval0(rhs, penv);\n    \nint eval0(div(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) / eval0(rhs, penv);\n    \nint eval0(add(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) + eval0(rhs, penv);\n    \nint eval0(sub(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) - eval0(rhs, penv);\n    \nint eval0(gt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) > eval0(rhs, penv) ? 1 : 0;\n    \nint eval0(lt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) < eval0(rhs, penv) ? 1 : 0;\n    \nint eval0(geq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) >= eval0(rhs, penv) ? 1 : 0;\n    \nint eval0(leq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) <= eval0(rhs, penv) ? 1 : 0;\n  \nint eval0(cond(Exp cond, Exp then, Exp otherwise), PEnv penv) =  // <5>\n    (eval0(cond, penv) != 0) ? eval0(then, penv) : eval0(otherwise, penv);\n               \nint eval0(call(str name, list[Exp] args), PEnv penv) =  // <6>\n    eval0(subst(penv[name].body, penv[name].formals, [ eval0(a, penv) | a <- args]), penv);\n\n")),(0,r.kt)("p",null,"Some points to note:"),(0,r.kt)("p",null,"<1> ",(0,r.kt)("inlineCode",{parentName:"p"},"PEnv")," is used as an alias for a map from names to functions. Such maps are used to represent the function definitions in the program.\n<2> Here the top level interpreter ",(0,r.kt)("inlineCode",{parentName:"p"},"eval0")," is defined. It takes the name of the main function, a list of actual parameters, and the complete Func program. Binding of variables is done by substitution.\n<3> The substitution function is defined. It takes an expression, a list of variables, and a list of integer values to be substituted for them. Note how a ","[Rascal:Visit]"," is used to find all the variables in the expression and to replace them.\n<4> The versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"eval0")," for each implemented construct. They all have a ",(0,r.kt)("inlineCode",{parentName:"p"},"PEnv")," argument that is needed\nto resolve calls.\n<5> The if expression is defined: the then-branch is taken when the test evaluates to a non-zero integer.\n<6> The call expression is interpreted. It contains the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*  The actual parameters are evaluated.\n*  A substitution is made in the body of the called function, replacing formal parameters by actual values.\n*  The result of this substitution is evaluated.\n")),(0,r.kt)("p",null,"Let's try this on example ",(0,r.kt)("inlineCode",{parentName:"p"},"F0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"fact(n) = if n <= 1 then\n             1 \n          else \n             n * fact(n-1)\n          end\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Func::Load;\nok\nrascal>import demo::lang::Func::Eval0;\nok\nrascal>import demo::lang::Func::programs::F0;\nok\nrascal>eval0("fact", [10], load(F0));\nvalue: 3628800\n')),(0,r.kt)("h4",{id:"benefits"},"Benefits"))}c.isMDXComponent=!0}}]);