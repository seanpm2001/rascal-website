"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[55758],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return t?n.createElement(f,i(i({ref:a},m),{},{components:t})):n.createElement(f,i({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71459:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const l={authors:["jvinju"],title:"Rascal 0.9.x release notes"},i=void 0,o={permalink:"/release-notes/2017/12/12/rascal-0-9-x-release-notes",source:"@site/release-notes/2017-12-12-rascal-0-9-x-release-notes.md",title:"Rascal 0.9.x release notes",description:"In this post we report on the Rascal release 0.9.0, which includes all changes since the 0.7.x releases. We have not written release notes for the 0.8.x series (the details are included here). We expect a number of patch releases for 0.9.x, which we report on by updating this post (at its end) when necessary until we move on to 0.10.x.",date:"2017-12-12T00:00:00.000Z",formattedDate:"December 12, 2017",tags:[],readingTime:4.905,hasTruncateMarker:!0,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"}],frontMatter:{authors:["jvinju"],title:"Rascal 0.9.x release notes"},prevItem:{title:"Rascal 0.17.x release notes",permalink:"/release-notes/2020/03/09/rascal-0-17-x-release-notes"},nextItem:{title:"Rascal 0.7.x release notes",permalink:"/release-notes/2014/10/27/rascal-0-7-x-release-notes"}},s={authorsImageUrls:[void 0]},p=[{value:"Contributors to the 0.8.x and 0.9.x releases",id:"contributors-to-the-08x-and-09x-releases",level:3},{value:"Patch releases",id:"patch-releases",level:3}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post we report on the Rascal release 0.9.0, which includes all changes since the 0.7.x releases. We have not written release notes for the 0.8.x series (the details are included here). We expect a number of patch releases for 0.9.x, which we report on by updating this post (at its end) when necessary until we move on to 0.10.x. "),(0,r.kt)("p",null,"The Rascal release 0.9.x includes the following main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parser and interpreter: parsing and running Rascal programs"),(0,r.kt)("li",{parentName:"ul"},"Parser generator: generating parsers for programming languages and domain specific languages"),(0,r.kt)("li",{parentName:"ul"},"Eclipse plugin: an IDE for Rascal, partially supported by the new type checker and compiler"),(0,r.kt)("li",{parentName:"ul"},"Eclipse plugin generator for DSLs: an IDE generator based on Rascal programs"),(0,r.kt)("li",{parentName:"ul"},"Rascal commandline shell: to run Rascal independently from Eclipse"),(0,r.kt)("li",{parentName:"ul"},"Standard library: utilities for programming in Rascal, including several (stable) programming language front-ends and general analysis facilities."),(0,r.kt)("li",{parentName:"ul"},"Rascal compiler: the experimental compiler for Rascal"),(0,r.kt)("li",{parentName:"ul"},"Rascal type checker: the experimental type checker for Rascal"),(0,r.kt)("li",{parentName:"ul"},"TypePal: experimental generic name and type analysis framework"),(0,r.kt)("li",{parentName:"ul"},"Salix: a html5-based GUI interaction framework for Rascal"),(0,r.kt)("li",{parentName:"ul"},"Shapes: a html5 back-end for the Figure library"),(0,r.kt)("li",{parentName:"ul"},"Capsule: the hash-trie set, map and multimap Java library supporting the implementation of Rascal's maps, sets and relations"),(0,r.kt)("li",{parentName:"ul"},"Clair: a C++ analysis framework based on the CDT parser"),(0,r.kt)("li",{parentName:"ul"},"Split main Rascal Eclipse plugin release from a number of additional libraries, located at a new update site: ",(0,r.kt)("a",{parentName:"li",href:"https://update.rascal-mpl.org/libs/"},"https://update.rascal-mpl.org/libs/"))),(0,r.kt)("p",null,"The 0.9 release is a landmark release, including a big number of bug fixes and mainly preparations towards releasing a compiled version of Rascal. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The most notable new features are:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Rascal type checker"),(0,r.kt)("li",{parentName:"ol"},"Experimental Rascal compiler"),(0,r.kt)("li",{parentName:"ol"},"Faster and leaner implementations of maps and relations under-the-hood, based on hash-tries (unfinished)"),(0,r.kt)("li",{parentName:"ol"},"Fully lazy and streaming string templates"),(0,r.kt)("li",{parentName:"ol"},"TypePal: a powerful generic type and name analysis framework"),(0,r.kt)("li",{parentName:"ol"},"Re-implementation of the M3 java Jar extractor"),(0,r.kt)("li",{parentName:"ol"},"Very fast streamed binary value (de)serialization"),(0,r.kt)("li",{parentName:"ol"},"Full re-implementation of the tutor documentation generator based on asciidoctor (unfinished)"),(0,r.kt)("li",{parentName:"ol"},"Typed import/export of JSON data"),(0,r.kt)("li",{parentName:"ol"},'New "common keyword parameters" support; ',(0,r.kt)("inlineCode",{parentName:"li"},"data X(int x = 0)")," where the field ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," with default ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," is made available to all constructors of the data-type ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," in the current scope."),(0,r.kt)("li",{parentName:"ol"},"Calling compiled Rascal functions from Java code using simple Java interface proxy. "),(0,r.kt)("li",{parentName:"ol"},"M3 models now use keyword fields instead of annotations"))),(0,r.kt)("li",{parentName:"ul"},"Temporarily disabled features:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"syntax highlighting of concrete syntax fragments in the Eclipse Rascal editor is currently turned off"))),(0,r.kt)("li",{parentName:"ul"},"Deprecated features:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"annotations as in ",(0,r.kt)("inlineCode",{parentName:"li"},"anno int X@name;")," and their usage ",(0,r.kt)("inlineCode",{parentName:"li"},"x()@name")," is deprecated. Please start using keyword parameters as in: ",(0,r.kt)("inlineCode",{parentName:"li"},'data X(str name = "")')," and ",(0,r.kt)("inlineCode",{parentName:"li"},"x.name")),(0,r.kt)("li",{parentName:"ol"},"asType: ",(0,r.kt)("inlineCode",{parentName:"li"},'[Type] "string"')," in patterns and expressions. Please use the ",(0,r.kt)("inlineCode",{parentName:"li"},"parse")," function for now.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other things that were added, improved or fixed:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"subscript on lrels added"),(0,r.kt)("li",{parentName:"ol"},"many, many tests added"),(0,r.kt)("li",{parentName:"ol"},"refactoring of the REPL api to enable reuse in notebook implementations (see Bacata)"),(0,r.kt)("li",{parentName:"ol"},"windows compatibility improved"),(0,r.kt)("li",{parentName:"ol"},"Pattern matchin a bound variable now ignores keyword fields of constructors unless explicitly mentioned"),(0,r.kt)("li",{parentName:"ol"},"steps towards less dependency on the annotation feature"),(0,r.kt)("li",{parentName:"ol"},"several bugs around the annotion feature and map indexing fixed"),(0,r.kt)("li",{parentName:"ol"},"faster field access in the interpreter"),(0,r.kt)("li",{parentName:"ol"},"compiler is automatically and continuously bootstrapped and validated (no binary code needs committing in the repository)"),(0,r.kt)("li",{parentName:"ol"},"rationalization and consistency improvement of all the input and output parameters of the compiler and the interpreter via the PathConfig data-type. "),(0,r.kt)("li",{parentName:"ol"},"quickcheck random value generator also simplified and made consistent and reusable"),(0,r.kt)("li",{parentName:"ol"},"clear separation of REPL functionalities and reuse of Eclipse tm.terminal "),(0,r.kt)("li",{parentName:"ol"},"clarified and fixed UTF8 encoding details in I/O functions"),(0,r.kt)("li",{parentName:"ol"},"clarified and fixed URI encoding details in I/O functions"),(0,r.kt)("li",{parentName:"ol"},"optimized reading from (nested) jar files"),(0,r.kt)("li",{parentName:"ol"},"much improved efficiency of function calling by the Rascal compiler"),(0,r.kt)("li",{parentName:"ol"},"additional API for managing external processes"),(0,r.kt)("li",{parentName:"ol"},"compiler and type-checker support incremental compilation"),(0,r.kt)("li",{parentName:"ol"},"much faster comparison of source locations"),(0,r.kt)("li",{parentName:"ol"},'rename of rascal.values (used to be pdb.values) to independent project called "vallang"'),(0,r.kt)("li",{parentName:"ol"},"support for Java NIO File Channels for (some of the) location schemes."),(0,r.kt)("li",{parentName:"ol"},"modular re-implementation of type reification"),(0,r.kt)("li",{parentName:"ol"},"new modular subsystem to generate classloader instances from URI source locations, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"|system:///|"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"|classpath:///|")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"|file:///path/to/jarFile.jar|")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"|file:///path/to/classFolder|")),(0,r.kt)("li",{parentName:"ol"},"interpreter and compiler made maximally code-independent"),(0,r.kt)("li",{parentName:"ol"},'all projects fully "mavenized"'),(0,r.kt)("li",{parentName:"ol"},"advanced interactive debugging features of compiled Rascal"),(0,r.kt)("li",{parentName:"ol"},"REPL and IDE features based on compiled Rascal"),(0,r.kt)("li",{parentName:"ol"},"integrated compiled Rascal modules as JUnit test runners. "),(0,r.kt)("li",{parentName:"ol"},"several fixes in datetime behavior"),(0,r.kt)("li",{parentName:"ol"},"full implementation of JVM bytecode generation by compiler"),(0,r.kt)("li",{parentName:"ol"},'parsing ambiguity is now by default an "error" (an exception is raised by the parse function). Using the ',(0,r.kt)("inlineCode",{parentName:"li"},"allowAmbiguity=true")," flag an ambiguous parse forest can still be produced."),(0,r.kt)("li",{parentName:"ol"},"added syntax highlighting of parsed source code fragments in the REPL"),(0,r.kt)("li",{parentName:"ol"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"jar+<scheme>:///path/to/jar!/path/in/jar")," scheme supports files in jars.")))),(0,r.kt)("h3",{id:"contributors-to-the-08x-and-09x-releases"},"Contributors to the 0.8.x and 0.9.x releases"),(0,r.kt)("p",null,"Thanks! In no particular order the following people have contributed to the 0.9.x releases of Rascal and its supporting libraries or the libraries it supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paul Klint"),(0,r.kt)("li",{parentName:"ul"},"Davy Landman"),(0,r.kt)("li",{parentName:"ul"},"Bert Lisser"),(0,r.kt)("li",{parentName:"ul"},"Michael Steindorfer"),(0,r.kt)("li",{parentName:"ul"},"Mark Hills"),(0,r.kt)("li",{parentName:"ul"},"Jurgen Vinju"),(0,r.kt)("li",{parentName:"ul"},"Ferry Rietveld"),(0,r.kt)("li",{parentName:"ul"},"Tijs van der Storm"),(0,r.kt)("li",{parentName:"ul"},"Thomas Degueule"),(0,r.kt)("li",{parentName:"ul"},"Lina Maria Ochoa Venegas"),(0,r.kt)("li",{parentName:"ul"},"Mauricio Verano"),(0,r.kt)("li",{parentName:"ul"},"Rodin Aarssen"),(0,r.kt)("li",{parentName:"ul"},"Anya Helene Bagge"),(0,r.kt)("li",{parentName:"ul"},"Tim Soethout"),(0,r.kt)("li",{parentName:"ul"},"Aiko Yamashita"),(0,r.kt)("li",{parentName:"ul"},"Nick Lodewijks"),(0,r.kt)("li",{parentName:"ul"},"Jouke Stoel"),(0,r.kt)("li",{parentName:"ul"},"Rodrigo Bonifacio"),(0,r.kt)("li",{parentName:"ul"},"Yoan-Alexander Grigorov"),(0,r.kt)("li",{parentName:"ul"},"Vadim Zaytsev"),(0,r.kt)("li",{parentName:"ul"},"Mats Stijlaart"),(0,r.kt)("li",{parentName:"ul"},"Magiel Bruntink"),(0,r.kt)("li",{parentName:"ul"},"Kevin van der Vlist")),(0,r.kt)("p",null,"Also thanks to all the people who have (clearly) reported bugs and provided smaller pull requests! Your help is much appreciated. "),(0,r.kt)("h3",{id:"patch-releases"},"Patch releases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Patch 0.9.1. bootstrap release to introduce new pattern match semantics for ",(0,r.kt)("inlineCode",{parentName:"li"},"var1 := var2")),(0,r.kt)("li",{parentName:"ul"},"Patch 0.9.2. bootstrap release to fix version number reporting in generated kernels")))}c.isMDXComponent=!0}}]);