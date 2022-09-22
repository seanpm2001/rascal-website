"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[14976],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>p});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(i),p=a,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||n;return i?r.createElement(g,o(o({ref:t},d),{},{components:i})):r.createElement(g,o({ref:t},d))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},68091:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(83117),a=(i(67294),i(3905));const n={title:"lang::rascal::grammar::definition::Priorities"},o=void 0,l={unversionedId:"Library/lang/rascal/grammar/definition/Priorities",id:"Library/lang/rascal/grammar/definition/Priorities",title:"lang::rascal::grammar::definition::Priorities",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/definition/Priorities.md",sourceDirName:"Library/lang/rascal/grammar/definition",slug:"/Library/lang/rascal/grammar/definition/Priorities",permalink:"/docs/Library/lang/rascal/grammar/definition/Priorities",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/grammar/definition/Priorities.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::grammar::definition::Priorities"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::grammar::definition::Parameters",permalink:"/docs/Library/lang/rascal/grammar/definition/Parameters"},next:{title:"lang::rascal::grammar::definition::Productions",permalink:"/docs/Library/lang/rascal/grammar/definition/Productions"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"data Associativity",id:"lang-rascal-grammar-definition-Priorities-Associativity",level:2},{value:"alias Extracted",id:"lang-rascal-grammar-definition-Priorities-Extracted",level:2},{value:"alias DoNotNest",id:"lang-rascal-grammar-definition-Priorities-DoNotNest",level:2},{value:"function doNotNest",id:"lang-rascal-grammar-definition-Priorities-doNotNest",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function extract",id:"lang-rascal-grammar-definition-Priorities-extract",level:2},{value:"function except",id:"lang-rascal-grammar-definition-Priorities-except",level:2},{value:"function isdef",id:"lang-rascal-grammar-definition-Priorities-isdef",level:2},{value:"function find",id:"lang-rascal-grammar-definition-Priorities-find",level:2},{value:"function except",id:"lang-rascal-grammar-definition-Priorities-except",level:2},{value:"function same",id:"lang-rascal-grammar-definition-Priorities-same",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::definition::Priorities;")),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-Associativity"},"data Associativity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Associativity  \n     = prio()\n     ;\n")),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-Extracted"},"alias Extracted"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rel[Production father, Associativity rule, Production child]"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-DoNotNest"},"alias DoNotNest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rel[Production father, int position, Production child]"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-doNotNest"},"function doNotNest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DoNotNest doNotNest(Grammar g)"))),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Extract which productions are not to be nested under which other productions, at given\nrecursive positions in the parents' defining symbols list."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"This DoNotNest relation is generated from the grammar using the > priority definitions,\nthe associativity groups and the ! restriction operator. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The > generates a partial order among production rules, which is transitively closed"),(0,a.kt)("li",{parentName:"ul"},"The associativity groups fit into this partial order as equivalence classes on the same\nlevel in the priority ordering. Within these groups left and right recursive rules are\nlimited according to the associativity declaration of the given group."),(0,a.kt)("li",{parentName:"ul"},"The DoNotNest relation contains eventually only restrictions in case between two\nrelated productions an ambiguity can be \"proven\" to exist between the outermost (left-most\nand right-most) recursive occurences of the defined non-terminal. This is such that\nthe disambiguation by priority and associativity remains 'syntax-safe'"),(0,a.kt)("li",{parentName:"ul"},"the non-assoc groups and ! are notably not 'syntax-safe', they remove sentences from non-terminals.")),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-extract"},"function extract"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default Extracted extract(Production _)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(choice(Symbol s, set[Production] alts))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(associativity(Symbol s, Associativity a, set[Production] alts))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(priority(Symbol s, list[Production] levels))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(high:prod(_,_,_), low:prod(_,_,_))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(choice(_, set[Production] alts), Production low)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(Production high, choice(_, set[Production] alts))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(Production a:associativity(_, _, set[Production] alts), Production low)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(Production high, Production a:associativity(_, _, set[Production] alts))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(Production p:priority(Symbol _, list[Production] alts), Production low)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extracted extract(Production high, Production p:priority(Symbol _, list[Production] alts))"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-except"},"function except"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DoNotNest except(Production p:prod(Symbol _, list[Symbol] lhs, set[Attr] _), Grammar g)"))),(0,a.kt)("p",null,"This one-liner searches a given production for \"except restrictions\".\nFor every position in the production that is restricted, and for every restriction it finds\nat this position, it adds a 'do-not-nest' tuple to the result."),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-isdef"},"function isdef"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool isdef(Grammar g, Symbol s)"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-find"},"function find"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Maybe[Production] find(str c, Symbol s, Symbol t, Grammar g)"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-except"},"function except"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DoNotNest except(Production p:regular(Symbol s), Grammar g)"))),(0,a.kt)("h2",{id:"lang-rascal-grammar-definition-Priorities-same"},"function same"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool same(Symbol x, Symbol ref)"))))}m.isMDXComponent=!0}}]);