"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[61449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>x});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),c=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),x=n,f=p["".concat(o,".").concat(x)]||p[x]||m[x]||r;return a?s.createElement(f,l(l({ref:t},u),{},{components:a})):s.createElement(f,l({ref:t},u))}));function x(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(83117),n=(a(67294),a(3905));const r={title:"lang::rascal::syntax::tests::ExpressionGrammars"},l=void 0,i={unversionedId:"Library/lang/rascal/syntax/tests/ExpressionGrammars",id:"Library/lang/rascal/syntax/tests/ExpressionGrammars",title:"lang::rascal::\\syntax::tests::ExpressionGrammars",description:"Usage",source:"@site/docs/Library/lang/rascal/syntax/tests/ExpressionGrammars.md",sourceDirName:"Library/lang/rascal/syntax/tests",slug:"/Library/lang/rascal/syntax/tests/ExpressionGrammars",permalink:"/docs/Library/lang/rascal/syntax/tests/ExpressionGrammars",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/syntax/tests/ExpressionGrammars.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::\\syntax::tests::ExpressionGrammars"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::\\syntax::tests::ConcreteSyntax",permalink:"/docs/Library/lang/rascal/syntax/tests/ConcreteSyntax"},next:{title:"lang::rascal::\\syntax::tests::ImplodeTestGrammar",permalink:"/docs/Library/lang/rascal/syntax/tests/ImplodeTestGrammar"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"function removeBrackets",id:"lang-rascal-syntax-tests-ExpressionGrammars-removeBrackets",level:2},{value:"function ext1",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext1",level:2},{value:"function ext2",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext2",level:2},{value:"function ext3",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext3",level:2},{value:"function ext4",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext4",level:2},{value:"function ext5",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext5",level:2},{value:"function ext6",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext6",level:2},{value:"function ext7",id:"lang-rascal-syntax-tests-ExpressionGrammars-ext7",level:2},{value:"function safeLeft",id:"lang-rascal-syntax-tests-ExpressionGrammars-safeLeft",level:2},{value:"function safeRight",id:"lang-rascal-syntax-tests-ExpressionGrammars-safeRight",level:2},{value:"function safeGroupLeft",id:"lang-rascal-syntax-tests-ExpressionGrammars-safeGroupLeft",level:2},{value:"function safeGroupRight",id:"lang-rascal-syntax-tests-ExpressionGrammars-safeGroupRight",level:2},{value:"function noBrackets",id:"lang-rascal-syntax-tests-ExpressionGrammars-noBrackets",level:2},{value:"function hasAmb",id:"lang-rascal-syntax-tests-ExpressionGrammars-hasAmb",level:2},{value:"function assoc",id:"lang-rascal-syntax-tests-ExpressionGrammars-assoc",level:2},{value:"function mutualAssoc1",id:"lang-rascal-syntax-tests-ExpressionGrammars-mutualAssoc1",level:2},{value:"function mutualAssoc2",id:"lang-rascal-syntax-tests-ExpressionGrammars-mutualAssoc2",level:2},{value:"function prio",id:"lang-rascal-syntax-tests-ExpressionGrammars-prio",level:2},{value:"function safePrio1",id:"lang-rascal-syntax-tests-ExpressionGrammars-safePrio1",level:2},{value:"function safePrio2",id:"lang-rascal-syntax-tests-ExpressionGrammars-safePrio2",level:2},{value:"function safePrio3",id:"lang-rascal-syntax-tests-ExpressionGrammars-safePrio3",level:2},{value:"function safePrio4",id:"lang-rascal-syntax-tests-ExpressionGrammars-safePrio4",level:2},{value:"function \transPrio",id:"lang-rascal-syntax-tests-ExpressionGrammars-\transPrio",level:2},{value:"function exceptNormal",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptNormal",level:2},{value:"function exceptInList",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptInList",level:2},{value:"function exceptInOpt",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptInOpt",level:2},{value:"function exceptInSeq1",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptInSeq1",level:2},{value:"function exceptInSeq2",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptInSeq2",level:2},{value:"function exceptInAlt",id:"lang-rascal-syntax-tests-ExpressionGrammars-exceptInAlt",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::\\syntax::tests::ExpressionGrammars;")),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-removeBrackets"},"function removeBrackets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exp removeBrackets(Exp e)"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext1"},"function ext1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext2"},"function ext2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext2()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext3"},"function ext3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext3()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext4"},"function ext4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext4()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext5"},"function ext5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext5()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext6"},"function ext6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext6()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-ext7"},"function ext7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool ext7()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-safeLeft"},"function safeLeft"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool safeLeft()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-safeRight"},"function safeRight"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool safeRight()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-safeGroupLeft"},"function safeGroupLeft"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool safeGroupLeft()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-safeGroupRight"},"function safeGroupRight"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool safeGroupRight()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-noBrackets"},"function noBrackets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exp noBrackets(Exp e)"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-hasAmb"},"function hasAmb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool hasAmb(Tree x)"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\assoc"},"function \\assoc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\assoc()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\mutualAssoc1"},"function \\mutualAssoc1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\mutualAssoc1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\mutualAssoc2"},"function \\mutualAssoc2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\mutualAssoc2()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\prio"},"function \\prio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\prio()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\safePrio1"},"function \\safePrio1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\safePrio1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\safePrio2"},"function \\safePrio2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\safePrio2()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\safePrio3"},"function \\safePrio3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\safePrio3()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\safePrio4"},"function \\safePrio4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\safePrio4()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\transPrio"},"function \\transPrio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\transPrio()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptNormal"},"function \\exceptNormal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptNormal()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptInList"},"function \\exceptInList"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptInList()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptInOpt"},"function \\exceptInOpt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptInOpt()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptInSeq1"},"function \\exceptInSeq1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptInSeq1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptInSeq2"},"function \\exceptInSeq2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptInSeq2()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ExpressionGrammars-\\exceptInAlt"},"function \\exceptInAlt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool \\exceptInAlt()"))))}m.isMDXComponent=!0}}]);