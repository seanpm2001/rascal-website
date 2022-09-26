"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[8852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Architecture"},l=void 0,o={unversionedId:"Tutor/Architecture/index",id:"Tutor/Architecture/index",title:"Architecture",description:"Synopsis",source:"@site/docs/Tutor/Architecture/index.md",sourceDirName:"Tutor/Architecture",slug:"/Tutor/Architecture/",permalink:"/docs/Tutor/Architecture/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Architecture/index.md",tags:[],version:"current",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"API documentation",permalink:"/docs/Tutor/API/"},next:{title:"Authoring",permalink:"/docs/Tutor/Authoring/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"The global architecture of the Rascal Tutor"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"The Rascal Tutor is a Markdown and Rascal source file pre-processor. As input it takes ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/"},"Docusaurus Markdown"),' files organized in hierarchical folders, and Rascal modules organized in hierarchical packages. One root folder is called a "course". As output the pre-processor produces per course\na folder hierarchy again, where each folder has its own ',(0,i.kt)("inlineCode",{parentName:"p"},"index.md")," file (generated or written). After the tutor\ncompiler has generated such a consistent folder of interconnected markdown files, other downstream processors can turn them into (static) html websites, pdf files or otherwise. The standard way of processing is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," static website generator."),(0,i.kt)("p",null,'The important features of the pre-processor, "compiler", are:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The compiler is configured via ",(0,i.kt)("a",{parentName:"li",href:"/docs/Library/util/Reflective#util::Reflective-PathConfig"},"PathConfig"),", where:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"each entry in the ",(0,i.kt)("inlineCode",{parentName:"li"},"srcs")," list is a single ",(0,i.kt)("em",{parentName:"li"},"course")),(0,i.kt)("li",{parentName:"ul"},"each entry in the ",(0,i.kt)("inlineCode",{parentName:"li"},"libs")," list, be it a jar file or not, is searched for an ",(0,i.kt)("inlineCode",{parentName:"li"},"index.value")," file to augment the current index. "))),(0,i.kt)("li",{parentName:"ol"},"Concept hierarchy - each folder ",(0,i.kt)("inlineCode",{parentName:"li"},"/X")," has its own index file, called either ",(0,i.kt)("inlineCode",{parentName:"li"},"X/X.md")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"X/index.md"),". Nested folders equal nested concepts."),(0,i.kt)("li",{parentName:"ol"},"Indexing - to help in easy cross-linking between concepts:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each concept of course ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"X/Y/Z/Z.md")," may be linked via ",(0,i.kt)("inlineCode",{parentName:"li"},"Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Y-Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Y-Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:Y-Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:X-Y-Z")),(0,i.kt)("li",{parentName:"ul"},"Each Rascal module of course ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," named ",(0,i.kt)("inlineCode",{parentName:"li"},"a::b::C")," may be linked via ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"b-C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"a::b::C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"module:a::b::C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:b-C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:a::b::C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:module:a::b::C")),(0,i.kt)("li",{parentName:"ul"},"Each Rascal package of course ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," named ",(0,i.kt)("inlineCode",{parentName:"li"},"a::b")," may be linked via ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"a::b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"package:a::b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:a::b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A:module:a::b")),(0,i.kt)("li",{parentName:"ul"},"Each image ",(0,i.kt)("inlineCode",{parentName:"li"},"x.{png,svg,jpg,jpeg}")," stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"X/Y/Z")," may be linked as though it were a concept file."),(0,i.kt)("li",{parentName:"ul"},"The index is a ",(0,i.kt)("inlineCode",{parentName:"li"},"rel[str,str]")," from the above described links to the ",(0,i.kt)("inlineCode",{parentName:"li"},"index.md")," files in the generated hierarchy."),(0,i.kt)("li",{parentName:"ul"},"The compiler reports missing links and ambiguous links as errors."),(0,i.kt)("li",{parentName:"ul"},"A single ",(0,i.kt)("inlineCode",{parentName:"li"},"index.value")," file is written in the output folder for future reference by depending projects."))),(0,i.kt)("li",{parentName:"ol"},"Code execution ensures lively demonstrations which are checked for correctness. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Code blocks marked ",(0,i.kt)("inlineCode",{parentName:"li"},"rascal-shell")," are executed line-by-line on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/RascalShell/"},"rascal shell")," prompt. Each prompt starts with a fresh environment. All error and standard output is captured and printed back. ",(0,i.kt)("a",{parentName:"li",href:"/docs/Library/Content"},"Content")," that serves HTML or any other file is also inlined in the output Markdown file."),(0,i.kt)("li",{parentName:"ul"},"Code blocks marked ",(0,i.kt)("inlineCode",{parentName:"li"},"rascal-shell,continue")," are executed in the previously constructed environment (from top to bottom in the Markdown file) and behave the same otherwise."),(0,i.kt)("li",{parentName:"ul"},"Code blocks marked ",(0,i.kt)("inlineCode",{parentName:"li"},"rascal-prepare")," with or without ",(0,i.kt)("inlineCode",{parentName:"li"},"continue")," behave the same as above, except that no output or input is printed back into the output file."))),(0,i.kt)("li",{parentName:"ol"},"Links written between ",(0,i.kt)("inlineCode",{parentName:"li"},"((")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"))")," are resolved using the previously described index. "),(0,i.kt)("li",{parentName:"ol"},"Table of contents are generated for the word TOC between three ",(0,i.kt)("inlineCode",{parentName:"li"},"(((")," brackets ",(0,i.kt)("inlineCode",{parentName:"li"},")))"),"; the content of each concept is the concept nested under it in the hierarchy."),(0,i.kt)("li",{parentName:"ol"},"Each Rascal file is indexed to list the declarations it contains and information is extracted:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"data declarations with their ",(0,i.kt)("inlineCode",{parentName:"li"},"doc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"synopsis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"examples")," etc. tags"),(0,i.kt)("li",{parentName:"ul"},"(overloaded) function declarations with their ",(0,i.kt)("inlineCode",{parentName:"li"},"doc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"synopsis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"examples")," etc. tags"),(0,i.kt)("li",{parentName:"ul"},"alias declarations with their ",(0,i.kt)("inlineCode",{parentName:"li"},"doc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"synopsis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"examples")," etc. tags")))),(0,i.kt)("p",null,"Features on the TODO list are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Interactive Questions (have to be revived)"),(0,i.kt)("li",{parentName:"ol"},"Screenshots of interactive ((Library:module:Content) visualizations")),(0,i.kt)("p",null,"To implement these featues the following components are relevant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang::rascal::tutor::Indexer")," implements indexing and lookup"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang::rascal::tutor::Compiler")," implements linking, code execution, toc, and the generation of index files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang::rascal::tutor::apidoc::ExtractInfo")," parses Rascal code and generates an intermediate overview"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang::rascal::tutor::apidoc::GenerateMarkdown")," generates a single Markdown file for each Rascal module, and also reuses ",(0,i.kt)("inlineCode",{parentName:"li"},"Compiler")," to process embedded markdown with code examples, links, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang::rascal::tutor::repl::TutorCommandExecutor")," encapsulates a Rascal REPL as a set of closures (",(0,i.kt)("inlineCode",{parentName:"li"},"eval"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reset"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"prompt"),") ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for efficiency's sake a single executor is shared among all Markdown and Rascal files that are compiled in a single run. Between every file the executor is reset for a new environment, but previously loaded modules remain in the heap available for reuse. ")))),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Index creation is modular: an index is created per course and these indices are combined at runtime."),(0,i.kt)("li",{parentName:"ul"},"Code execution is reasonably time efficient, although it may require quite some memory because eventually an entire course will be loaded.")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Courses are compiled on a per-course basis. Support for incremental courses compilation is not yet available."),(0,i.kt)("li",{parentName:"ul"},"Badly balanced code block quotes are not detected by this pre-processor but will fail HTML compilation downstream."),(0,i.kt)("li",{parentName:"ul"},"Manual links are not checked at compile-time by this pre-processor but fill fail HTML compilation downstream.")))}d.isMDXComponent=!0}}]);