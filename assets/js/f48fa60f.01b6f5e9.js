"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[45533],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(67294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,r)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function c(a,e){if(null==a)return{};var n,r,t=function(a,e){if(null==a)return{};var n,r,t={},i=Object.keys(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var o=r.createContext({}),s=function(a){var e=r.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},m=function(a){var e=s(a.components);return r.createElement(o.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,m=c(a,["components","mdxType","originalType","parentName"]),g=s(n),d=t,f=g["".concat(o,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(f,l(l({ref:e},m),{},{components:n})):r.createElement(f,l({ref:e},m))}));function d(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,l=new Array(i);l[0]=g;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=a,c.mdxType="string"==typeof a?a:t,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60509:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(83117),t=(n(67294),n(3905));const i={title:"module lang::rascal::grammar::definition::Characters"},l=void 0,c={unversionedId:"Library/lang/rascal/grammar/definition/Characters",id:"Library/lang/rascal/grammar/definition/Characters",title:"module lang::rascal::grammar::definition::Characters",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/definition/Characters.md",sourceDirName:"Library/lang/rascal/grammar/definition",slug:"/Library/lang/rascal/grammar/definition/Characters",permalink:"/docs/Library/lang/rascal/grammar/definition/Characters",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/grammar/definition/Characters.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::definition::Characters"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::definition::Attributes",permalink:"/docs/Library/lang/rascal/grammar/definition/Attributes"},next:{title:"module lang::rascal::grammar::definition::Keywords",permalink:"/docs/Library/lang/rascal/grammar/definition/Keywords"}},o={},s=[{value:"Usage",id:"usage",level:4},{value:"data CharRange",id:"lang-rascal-grammar-definition-Characters-CharRange",level:2},{value:"function \new-range",id:"lang-rascal-grammar-definition-Characters-\new-range",level:2},{value:"function \new-char-class",id:"lang-rascal-grammar-definition-Characters-\new-char-class",level:2},{value:"function complement",id:"lang-rascal-grammar-definition-Characters-complement",level:2},{value:"function difference",id:"lang-rascal-grammar-definition-Characters-difference",level:2},{value:"function union",id:"lang-rascal-grammar-definition-Characters-union",level:2},{value:"function intersection",id:"lang-rascal-grammar-definition-Characters-intersection",level:2},{value:"function lessThan",id:"lang-rascal-grammar-definition-Characters-lessThan",level:2},{value:"function difference",id:"lang-rascal-grammar-definition-Characters-difference",level:2},{value:"function intersect",id:"lang-rascal-grammar-definition-Characters-intersect",level:2},{value:"function complement",id:"lang-rascal-grammar-definition-Characters-complement",level:2},{value:"function intersection",id:"lang-rascal-grammar-definition-Characters-intersection",level:2},{value:"function union",id:"lang-rascal-grammar-definition-Characters-union",level:2},{value:"function difference",id:"lang-rascal-grammar-definition-Characters-difference",level:2},{value:"function cc2ranges",id:"lang-rascal-grammar-definition-Characters-cc2ranges",level:2},{value:"function range",id:"lang-rascal-grammar-definition-Characters-range",level:2},{value:"function charToInt",id:"lang-rascal-grammar-definition-Characters-charToInt",level:2}],m={toc:s};function u(a){let{components:e,...n}=a;return(0,t.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::definition::Characters;")),(0,t.kt)("p",null,"  In this module character classes are normalized."),(0,t.kt)("p",null,"  It also provides a number of convenience functions on character classes."),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-CharRange"},"data CharRange"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal"},"data CharRange  \n     = \\empty-range()\n     ;\n")),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-\\new-range"},"function \\new-range"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"CharRange \\new-range(int from, int to)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-\\new-char-class"},"function \\new-char-class"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol \\new-char-class(list[CharRange] ranges)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-complement"},"function complement"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol complement(\\char-class(list[CharRange] r1))")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"default Symbol  complement(Symbol s)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-difference"},"function difference"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol difference(\\char-class(list[CharRange] r1), \\char-class(list[CharRange] r2))")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"default Symbol  difference(Symbol s, Symbol t)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-union"},"function union"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol union(\\char-class(list[CharRange] r1), \\char-class(list[CharRange] r2))")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"default Symbol  union(Symbol s, Symbol t)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-intersection"},"function intersection"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol intersection(\\char-class(list[CharRange] r1), \\char-class(list[CharRange] r2))")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"default Symbol  intersection(Symbol s, Symbol t)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-lessThan"},"function lessThan"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"bool lessThan(CharRange r1, CharRange r2)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-difference"},"function difference"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"CharRange difference(CharRange l, CharRange r)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-intersect"},"function intersect"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"CharRange intersect(CharRange r1, CharRange r2)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-complement"},"function complement"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"list[CharRange] complement(list[CharRange] s)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-intersection"},"function intersection"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"list[CharRange] intersection(list[CharRange] l, list[CharRange] r)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-union"},"function union"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"list[CharRange] union(list[CharRange] l, list[CharRange] r)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-difference"},"function difference"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"list[CharRange] difference(list[CharRange] l, list[CharRange] r)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-cc2ranges"},"function cc2ranges"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Symbol cc2ranges(Class cc)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-range"},"function range"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"CharRange range(Range r)"))),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Characters-charToInt"},"function charToInt"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"int charToInt(Char c)"))))}u.isMDXComponent=!0}}]);