"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[73399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Call Analysis"},s=void 0,i={unversionedId:"Recipes/Common/CallAnalysis/index",id:"Recipes/Common/CallAnalysis/index",title:"Call Analysis",description:"Synopsis",source:"@site/docs/Recipes/Common/CallAnalysis/index.md",sourceDirName:"Recipes/Common/CallAnalysis",slug:"/Recipes/Common/CallAnalysis/",permalink:"/docs/Recipes/Common/CallAnalysis/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Common/CallAnalysis/index.md",tags:[],version:"current",frontMatter:{title:"Call Analysis"},sidebar:"tutorialSidebar",previous:{title:"Ad Hoc Data Exploration",permalink:"/docs/Recipes/Common/AdHocDataExploration/"},next:{title:"Call Lifting",permalink:"/docs/Recipes/Common/CallLifting/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Analyzing the call structure of an application."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Suppose a mystery box ends up on your desk. When you open it, it contains a huge software system with several questions attached to it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many procedure calls occur in this system?"),(0,r.kt)("li",{parentName:"ul"},"How many procedures does it contains?"),(0,r.kt)("li",{parentName:"ul"},"What are the entry points for this system, i.e., procedures that call others but are not called themselves?"),(0,r.kt)("li",{parentName:"ul"},"What are the leaves of this application, i.e., procedures that are called but do not make any calls themselves?"),(0,r.kt)("li",{parentName:"ul"},"Which procedures call each other indirectly?"),(0,r.kt)("li",{parentName:"ul"},"Which procedures are called directly or indirectly from each entry point?"),(0,r.kt)("li",{parentName:"ul"},"Which procedures are called from all entry points?")),(0,r.kt)("p",null,"Let's see how these questions can be answered using Rascal."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the following call graph (a box represents a procedure and an arrow represents a call from one procedure to another procedure):"),(0,r.kt)("p",null,"![null][calls.png]","(/assets/Recipes/Common/CallAnalysis/calls.png)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import Set;\nok\nrascal>import Relation;\nok\nrascal>import analysis::graphs::Graph;\nok\n")),(0,r.kt)("p",null,"Rascal supports basic data types like integers and strings which are sufficient to formulate and answer the questions at hand. However, we\ncan gain readability by introducing separately named types for the items we are describing.\nFirst, we introduce therefore a new type ",(0,r.kt)("inlineCode",{parentName:"p"},"Proc")," (an alias for strings) to denote procedures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>alias Proc = str;\nok\n")),(0,r.kt)("p",null,"Next, we have to represent the call relation as a Rascal datatype, and the relation is the most appropriate for it.\nAs preparation, we also import the libraries ","[$Rascal:Prelude/Set]",", ","[$Rascal:Prelude/Relation]"," and ","[$Rascal:Libraries/analysis/graphs/Graph]"," that will come in handy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>rel[Proc, Proc] Calls = {<"a", "b">, <"b", "c">, <"b", "d">, <"d", "c">, \n>>>>>>>                         <"d", "e">, <"f", "e">, <"f", "g">, <"g", "e">};\nrel[str,str]: {\n  <"a","b">,\n  <"g","e">,\n  <"b","c">,\n  <"b","d">,\n  <"d","c">,\n  <"d","e">,\n  <"f","e">,\n  <"f","g">\n}\n')),(0,r.kt)("p",null,"Now we are in a good position to start asking some questions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How many calls occur in this system?"),"\nWe use the function ","[Rascal:Set/size]"," to determine the number of elements in a set or relation.\nSince each tuple in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Calls")," relation represents a call between procedures, the number of tuples is equal\nto the number of calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>size(Calls);\nint: 8\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How many procedures occur in this system?")," This question is more subtle, since a procedure may call (or be called) by\nseveral others and the number of tuples is therefore not indicative. What we need are the set of procedures that\noccur (as first or second element) in ",(0,r.kt)("em",{parentName:"p"},"any")," tuple. This is precisely what the function ","[$Rascal:Libraries/Prelude/Relation/carrier]"," gives us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>carrier(Calls);\nset[str]: {"a","b","c","d","e","f","g"}\n')),(0,r.kt)("p",null,"and computing the number of procedures is now easy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>size(carrier(Calls));\nint: 7\n")),(0,r.kt)("p",null,"As an aside, functions ","[$Rascal:Prelude/Relation/domain]"," and ","[$Rascal:Prelude/Relation/range]"," do the same for the first, respectively, second element of the pairs in a relation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>domain(Calls);\nset[str]: {"a","b","d","f","g"}\nrascal>range(Calls);\nset[str]: {"b","c","d","e","g"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are the entry points for this system?")),(0,r.kt)("p",null,"The next step in the analysis is to determine which entry points this application has, i.e., procedures which call others but are\nnot called themselves. Entry points are useful since they define the external interface of a system and may also be used as guidance to\nsplit a system in parts. The top of a relation contains those left-hand sides of tuples in a relation that do not occur in any\nright-hand side. When a relation is viewed as a graph, its top corresponds to the root nodes of that graph. Similarly, the bottom of a\nrelation corresponds to the leaf nodes of the graph. See the section called  ","[$Rascal:Libraries/analysis/graphs/Graph]"," for more details. Using this knowledge, the entry\npoints can be computed by determining the top of the Calls relation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>top(Calls);\nset[str]: {"a","f"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are the leaves of this application?")),(0,r.kt)("p",null,"In a similar spirit, we can determine the leaves of this application, i.e., procedures that are being called but do not make any calls\nthemselves:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>bottom(Calls);\nset[str]: {"c","e"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Which procedures call each other indirectly?")),(0,r.kt)("p",null,"We can also determine the indirect calls between procedures, by taking the transitive closure of the Calls relation, written as ",(0,r.kt)("inlineCode",{parentName:"p"},"Calls+"),".\nObserve that the transitive closure will contain both the direct and the indirect calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>closureCalls = Calls+;\nrel[str,str]: {\n  <"g","e">,\n  <"a","b">,\n  <"a","c">,\n  <"a","d">,\n  <"a","e">,\n  <"b","c">,\n  <"b","d">,\n  <"b","e">,\n  <"d","c">,\n  <"d","e">,\n  <"f","e">,\n  <"f","g">\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Which procedures are called directly or indirectly from each entry point?")),(0,r.kt)("p",null,'We now know the entry points for this application ("a" and "f") and the indirect call relations. Combining this information,\nwe can determine which procedures are called from each entry point. This is done by indexing closureCalls with appropriate procedure name.\nThe index operator yields all right-hand sides of tuples that have a given value as left-hand side. This gives the following:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>calledFromA = closureCalls["a"];\nset[str]: {"b","c","d","e"}\nrascal>calledFromF = closureCalls["f"];\nset[str]: {"e","g"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Which procedures are called from all entry points?")),(0,r.kt)("p",null,"Finally, we can determine which procedures are called from both entry points by taking the intersection of the two sets\n",(0,r.kt)("inlineCode",{parentName:"p"},"calledFromA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"calledFromF"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>calledFromA & calledFromF;\nset[str]: {"e"}\n')),(0,r.kt)("p",null,"or if your prefer to write all of the above as a one-liner using a ","[$Rascal:Expressions/Reducer]"," expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>(carrier(Calls) | it & (Calls+)[p] | p <- top(Calls));\nset[str]: {"e"}\n')),(0,r.kt)("p",null,"The reducer is initialized with  all procedures (",(0,r.kt)("inlineCode",{parentName:"p"},"carrier(Calls)"),") and iterates over all entry points (",(0,r.kt)("inlineCode",{parentName:"p"},"p <- top(Calls)"),").\nAt each iteration the current value of the reducer (",(0,r.kt)("inlineCode",{parentName:"p"},"it"),") is intersected (",(0,r.kt)("inlineCode",{parentName:"p"},"&"),") with the procedures called directly or indirectly\nfrom that entry point (",(0,r.kt)("inlineCode",{parentName:"p"},"(Calls+)[p]"),")."),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In small examples, the above results can be easily obtained by a visual inspection of the call graph.\nSuch a visual inspection does ",(0,r.kt)("em",{parentName:"li"},"not")," scale very well to large graphs and this makes the above form of analysis particularly suited for studying large systems.")),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We discuss call analysis in a, intentionally, simplistic fashion that does not take into account how the call relation\nis extracted from actual source code.\nThe above principles are, however, applicable to real cases as well.")))}u.isMDXComponent=!0}}]);