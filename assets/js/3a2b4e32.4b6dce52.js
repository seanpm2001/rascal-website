"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,f=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(83117),i=(a(67294),a(3905));const l={title:"module analysis::m3::Core"},s=void 0,r={unversionedId:"Library/analysis/m3/Core",id:"Library/analysis/m3/Core",title:"module analysis::m3::Core",description:"Usage",source:"@site/docs/Library/analysis/m3/Core.md",sourceDirName:"Library/analysis/m3",slug:"/Library/analysis/m3/Core",permalink:"/docs/Library/analysis/m3/Core",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/analysis/m3/Core.md",tags:[],version:"current",frontMatter:{title:"module analysis::m3::Core"},sidebar:"tutorialSidebar",previous:{title:"module analysis::m3::AST",permalink:"/docs/Library/analysis/m3/AST"},next:{title:"module analysis::m3::FlowGraph",permalink:"/docs/Library/analysis/m3/FlowGraph"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"data M3",id:"analysis-m3-Core-M3",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"data Language",id:"analysis-m3-Core-Language",level:2},{value:"function emptyM3",id:"analysis-m3-Core-emptyM3",level:2},{value:"function composeM3",id:"analysis-m3-Core-composeM3",level:2},{value:"function diffM3",id:"analysis-m3-Core-diffM3",level:2},{value:"function modifyM3",id:"analysis-m3-Core-modifyM3",level:2},{value:"function isEmpty",id:"analysis-m3-Core-isEmpty",level:2},{value:"function relToFileSystem",id:"analysis-m3-Core-relToFileSystem",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function files",id:"analysis-m3-Core-files",level:2},{value:"function containmentToFileSystem",id:"analysis-m3-Core-containmentToFileSystem",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Benefits",id:"benefits-1",level:4},{value:"Pitfalls",id:"pitfalls-1",level:4},{value:"function checkM3",id:"analysis-m3-Core-checkM3",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::m3::Core;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"M3 common source code model represent facts extracted from source code for use in downstream metrics or other analyses."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"The M3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Core"},"Library:analysis::m3::Core")," defines basic concepts such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"qualified names: we use ","[$Values/Location]","s to model qualified names for each programming language"),(0,i.kt)("li",{parentName:"ul"},"containment: which artifacts are contained in which other artifacts"),(0,i.kt)("li",{parentName:"ul"},"declarations: where artifacts are defined"),(0,i.kt)("li",{parentName:"ul"},"uses: where declared artifacts are used"),(0,i.kt)("li",{parentName:"ul"},"types: which artifacts has which types")),(0,i.kt)("p",null,"From this ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Core"},"Library:analysis::m3::Core")," is supposed to be extended with features specific for a programming language. See for example ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/lang/java/m3/Core"},"Java M3"),"."),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Qualified names in the shape of ","[$Values/Location]","s are a uniform and generic way of identifying source code artifacts, that can be extended across languages, projects, and versions."),(0,i.kt)("li",{parentName:"ul"},"M3 helps standardizing the shape of facts we extract from source code for all different languages, limiting the element of surprise."),(0,i.kt)("li",{parentName:"ul"},"When we use M3 for many languages, common IDE features are made reusable (such as clicking from an extracted fact to the code that generated it)."),(0,i.kt)("li",{parentName:"ul"},"Some downstream analyses may be reusable between different languages if they all map to M3.")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Even though different languages may map to the same M3 model, this does not mean that the semantics is the same. Downstream\nmetrics or other analysis tools should still take semantic differences between programming languages into account.")),(0,i.kt)("h2",{id:"analysis-m3-Core-M3"},"data M3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data M3 (\n    rel[loc name, loc src] declarations = {},   // maps declarations to where they are declared. contains any kind of data or type or code declaration (classes, fields, methods, variables, etc. etc.)\n    rel[loc name, TypeSymbol typ] types = {},   // assigns types to declared source code artifacts\n    rel[loc src, loc name] uses = {},           // maps source locations of usages to the respective declarations\n    rel[loc from, loc to] containment = {},     // what is logically contained in what else (not necessarily physically, but usually also)\n    list[Message] messages = [],                // error messages and warnings produced while constructing a single m3 model\n    rel[str simpleName, loc qualifiedName] names = {},      // convenience mapping from logical names to end-user readable (GUI) names, and vice versa\n    rel[loc definition, loc comments] documentation = {},   // comments and javadoc attached to declared things\n    rel[loc definition, Modifier modifier] modifiers = {}   // modifiers associated with declared things\n) \n     = m3(\n    loc id)\n     ;\n")),(0,i.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,i.kt)("p",null,"m3 model constructor"),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"This constructor holds all information to an m3 model. It is identified by the ",(0,i.kt)("em",{parentName:"p"},"id")," field,\nwhich should be a unique name for the project or file that the m3 model was constructor for."),(0,i.kt)("p",null,"Attached to this m3 model will be annotations with the specific information."),(0,i.kt)("h2",{id:"analysis-m3-Core-Language"},"data Language"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},'data Language (str version = "") \n     = generic()\n     ;\n')),(0,i.kt)("h2",{id:"analysis-m3-Core-emptyM3"},"function emptyM3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M3 emptyM3(loc id)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Create an empty m3 term with empty annotations\n")),(0,i.kt)("h2",{id:"analysis-m3-Core-composeM3"},"function composeM3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M3 composeM3(loc id, set[M3] models)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Generic function to compose the annotations of a set of M3s.\n")),(0,i.kt)("h2",{id:"analysis-m3-Core-diffM3"},"function diffM3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M3 diffM3(loc id, list[M3] models)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Generic function to apply a difference over the annotations of a list of M3s.\n")),(0,i.kt)("h2",{id:"analysis-m3-Core-modifyM3"},"function modifyM3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M3 modifyM3(loc id, list[M3] models, value (&T,&T) fun)"))),(0,i.kt)("h2",{id:"analysis-m3-Core-isEmpty"},"function isEmpty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool isEmpty(M3 model)"))),(0,i.kt)("h2",{id:"analysis-m3-Core-relToFileSystem"},"function relToFileSystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[FileSystem] relToFileSystem(rel[loc parent, loc child] r)"))),(0,i.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,i.kt)("p",null,"constructs a recursive FileSystem from a binary ","[Location]"," relation."),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("h2",{id:"analysis-m3-Core-files"},"function files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[loc] files(M3 model)"))),(0,i.kt)("h2",{id:"analysis-m3-Core-containmentToFileSystem"},"function containmentToFileSystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[FileSystem] containmentToFileSystem(M3 model)"))),(0,i.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,i.kt)("p",null,"transform the containment relation to a recursive tree model"),(0,i.kt)("h4",{id:"benefits-1"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transforming the containment relation to a tree model allows further analysis using operators\nsuch as ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/Visit"},"Visit")," and ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Patterns/Descendant"},"Descendant")," which is sometimes more convenient.")),(0,i.kt)("h4",{id:"pitfalls-1"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not forget that the relational operators such as ","[TransitiveClosure]",", ","[Comprehension]"," and ","[Composition]"," may be just\nas effective and perhaps more efficient, as applied directly on the containment relation. ")),(0,i.kt)("h2",{id:"analysis-m3-Core-checkM3"},"function checkM3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[Message] checkM3(M3 model)"))))}d.isMDXComponent=!0}}]);