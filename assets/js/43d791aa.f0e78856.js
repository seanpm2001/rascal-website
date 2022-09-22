"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59266],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>w});var a=t(67294);function o(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){o(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,a,o=function(e,l){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var l=a.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):n(n({},l),e)),t},p=function(e){var l=c(e.components);return a.createElement(s.Provider,{value:l},e.children)},u={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},d=a.forwardRef((function(e,l){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),w=o,m=d["".concat(s,".").concat(w)]||d[w]||u[w]||r;return t?a.createElement(m,n(n({ref:l},p),{},{components:t})):a.createElement(m,n({ref:l},p))}));function w(e,l){var t=arguments,o=l&&l.mdxType;if("string"==typeof e||o){var r=t.length,n=new Array(r);n[0]=d;var i={};for(var s in l)hasOwnProperty.call(l,s)&&(i[s]=l[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var c=2;c<r;c++)n[c]=t[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28405:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(83117),o=(t(67294),t(3905));const r={title:"module analysis::flow::ObjectFlow"},n=void 0,i={unversionedId:"Library/analysis/flow/ObjectFlow",id:"Library/analysis/flow/ObjectFlow",title:"module analysis::flow::ObjectFlow",description:"Usage",source:"@site/docs/Library/analysis/flow/ObjectFlow.md",sourceDirName:"Library/analysis/flow",slug:"/Library/analysis/flow/ObjectFlow",permalink:"/docs/Library/analysis/flow/ObjectFlow",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/analysis/flow/ObjectFlow.md",tags:[],version:"current",frontMatter:{title:"module analysis::flow::ObjectFlow"},sidebar:"tutorialSidebar",previous:{title:"module analysis::flow::ControlFlow",permalink:"/docs/Library/analysis/flow/ControlFlow"},next:{title:"analysis::formalconcepts",permalink:"/docs/Library/analysis/formalconcepts/"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"data FlowProgram",id:"analysis-flow-ObjectFlow-FlowProgram",level:2},{value:"data FlowDecl",id:"analysis-flow-ObjectFlow-FlowDecl",level:2},{value:"data FlowStm",id:"analysis-flow-ObjectFlow-FlowStm",level:2},{value:"alias OFG",id:"analysis-flow-ObjectFlow-OFG",level:2},{value:"function buildFlowGraph",id:"analysis-flow-ObjectFlow-buildFlowGraph",level:2},{value:"function propagate",id:"analysis-flow-ObjectFlow-propagate",level:2}],p={toc:c};function u(e){let{components:l,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import analysis::flow::ObjectFlow;")),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Intermediate Language and Basic Algorithms for object flow analysis"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,'The object flow language from the Tonella and Potrich book\n"Reverse Engineering Object Oriented Code" is an intermediate\nrepresentation for object flow. We may translate for example\nJava to this intermediate language and then analyze object flow\nbased on the simpler language.'),(0,o.kt)("p",null,"The implementation in this file is intended to work with ",(0,o.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Core#analysis::m3::Core-M3"},"M3")," models"),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-FlowProgram"},"data FlowProgram"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data FlowProgram  \n     = flowProgram(set[FlowDecl] decls, set[FlowStm] statements)\n     ;\n")),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-FlowDecl"},"data FlowDecl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data FlowDecl  \n     = attribute(loc id)\n     | method(loc id, list[loc] formalParameters)\n     | constructor(loc id, list[loc] formalParameters)\n     ;\n")),(0,o.kt)("p",null,"Figure 2.1"),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-FlowStm"},"data FlowStm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data FlowStm  \n     = newAssign(loc target, loc class, loc ctor, list[loc] actualParameters)\n     | assign(loc target, loc cast, loc source)\n     | call(loc target, loc cast, loc receiver, loc method, list[loc] actualParameters)\n     ;\n")),(0,o.kt)("p",null,"Figure 2.1"),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-OFG"},"alias OFG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rel[loc from, loc to]"))),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-buildFlowGraph"},"function buildFlowGraph"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OFG buildFlowGraph(FlowProgram p)"))),(0,o.kt)("p",null,"Figure 2.2"),(0,o.kt)("h2",{id:"analysis-flow-ObjectFlow-propagate"},"function propagate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rel[loc,&T] propagate(OFG g, rel[loc,&T] gen, rel[loc,&T] kill, bool back)"))),(0,o.kt)("p",null,"Section 2.4"))}u.isMDXComponent=!0}}]);