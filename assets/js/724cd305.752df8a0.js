"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[22433],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(83117),s=(a(67294),a(3905));const o={title:"Solution Strategies",details:["Extraction","Analysis","Synthesis"]},i=void 0,r={unversionedId:"WhyRascal/SolutionStrategies/index",id:"WhyRascal/SolutionStrategies/index",title:"Solution Strategies",description:"Synopsis",source:"@site/docs/WhyRascal/SolutionStrategies/index.md",sourceDirName:"WhyRascal/SolutionStrategies",slug:"/WhyRascal/SolutionStrategies/",permalink:"/docs/WhyRascal/SolutionStrategies/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/WhyRascal/SolutionStrategies/index.md",tags:[],version:"current",frontMatter:{title:"Solution Strategies",details:["Extraction","Analysis","Synthesis"]},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/docs/WhyRascal/Motivation/"},next:{title:"Analysis",permalink:"/docs/WhyRascal/SolutionStrategies/Analysis/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Strategies to solve problems in various domains using Rascal."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("h4",{id:"function"},"Function"),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Problem-solving workflow",src:a(19210).Z,width:"458",height:"725"})),(0,s.kt)("p",null,"Before you study more complicated examples, it is useful to discuss some general problem solving\nstrategies that are relevant in Rascal's application domain."),(0,s.kt)("p",null,"To appreciate these general strategies, it is good to keep some specific problem areas in mind:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Documentation generation"),": extract facts from source code and use them to generate textual documentation.\nA typical example is generating web-based documentation for legacy languages like Cobol and PL/I.\n")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Metrics calculation"),": extract facts from source code (and possibly other sources like test runs) and use\nthem to calculate code metrics. Examples are cohesion and coupling of modules and test coverage.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Model extraction"),": extract facts from source code and use them to build an abstract model of the source code.\nAn example is extracting lock and unlock calls from source code and to build an automaton that guarantees\nthat lock/unlock occurs in pairs along every control flow path.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Model-based code generation"),": given a high-level model of a software system, described in UML or some other modelling language, transform this model into executable code. UML-to-Java code generation falls in this category.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Source-to-source transformation"),": large-scale, fully automated, source code transformation with certain objectives like removing deprecated language features, upgrading to newer APIs and the like.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Interactive refactoring"),": given known ",(0,s.kt)("em",{parentName:"p"},"code smells")," a user can interactively indicate how these smells should be removed. The refactoring features in Eclipse and Visual Studio are examples."))),(0,s.kt)("p",null,"With these examples in mind, we can study the overall problem solving workflow as shown\nin the figure above.\nIt consists of three optional phases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Is extraction needed to solve the problem, then define the extraction phase, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/WhyRascal/SolutionStrategies/Extraction"},"Extraction"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Is analysis needed, then define the analysis phase, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/WhyRascal/SolutionStrategies/Analysis"},"Analysis"),". ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Is synthesis needed, then define the synthesis phase, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/WhyRascal/SolutionStrategies/Synthesis"},"Synthesis"),"."))),(0,s.kt)("p",null,"[","[Validation-Workflow]","]\n",(0,s.kt)("img",{alt:"Validation Workflow",src:a(92094).Z,width:"553",height:"436"})),(0,s.kt)("p",null,"Each phase is subject to a validation and improvement workflow as shown in the second figure.\nEach individual phase as well as the combination of phases may introduce errors and has thus to be carefully validated.\nIn combination with the detailed strategies for each phase, this forms a complete approach for problem solving and validation\nusing Rascal."),(0,s.kt)("p",null,"[","[Requirements-Workflow]","]\n",(0,s.kt)("img",{alt:"Requirements Workflow",src:a(46010).Z,width:"515",height:"355"})),(0,s.kt)("p",null,"A major question in every problem solving situation is how to determine the requirements for each phase of the solution.\nFor instance, how do we know what to extract from the source code if we do not know what the desired end results of the project are?\nThe standard solution is to use a workflow for requirements gathering that is the inverse of the phases needed to solve\nthe complete problem.\nThis is shown in the third figure and amounts to the phases: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Requirements of the synthesis phase.\nThis amounts to making an inventory of the desired results of the whole project and may include generated source code,\nabstract models, or visualizations. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Requirements of the analysis phase. Once these results of the synthesis phase are known, it is possible to list the analysis results that are needed to synthesize desired results. Possible results of the analysis phase include type information, structural information of the original source.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Requirements of the extraction phase. As a last step, one can make an inventory of the facts that have to be extracted to form the starting point for the analysis phase. Typical facts include method calls, inheritance relations, control flow graphs, usage patterns of specific library functions or language constructs."))),(0,s.kt)("p",null,"You will have no problem in identifying requirements for each phase when you apply them to a specific\nexample from the list given earlier."),(0,s.kt)("p",null,"When these requirements have been established, it becomes much easier to actually carry out the project using the three phases\nof the first figure above."),(0,s.kt)("p",null,"We will discuss:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/WhyRascal/SolutionStrategies/Extraction"},"Extraction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/WhyRascal/SolutionStrategies/Analysis"},"Analysis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/WhyRascal/SolutionStrategies/Synthesis"},"Synthesis"))),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"benefits"},"Benefits"))}u.isMDXComponent=!0},19210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/problem-solving-e29c50811d2d2b35826e529643e1931c.png"},46010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/requirements-bac17528df86b048ac961830abe79ba0.png"},92094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/validation-9d9656edaf7509c7eeeba74043f09382.png"}}]);