"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),p=l,v=c["".concat(s,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(83117),l=(n(67294),n(3905));const r={title:"module demo::lang::MissGrant::AST"},i=void 0,o={unversionedId:"Library/demo/lang/MissGrant/AST",id:"Library/demo/lang/MissGrant/AST",title:"module demo::lang::MissGrant::AST",description:"Usage",source:"@site/docs/Library/demo/lang/MissGrant/AST.md",sourceDirName:"Library/demo/lang/MissGrant",slug:"/Library/demo/lang/MissGrant/AST",permalink:"/docs/Library/demo/lang/MissGrant/AST",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/demo/lang/MissGrant/AST.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::MissGrant::AST"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::MissGrant::MissGrant",permalink:"/docs/Library/demo/lang/MissGrant/"},next:{title:"module demo::lang::MissGrant::CheckController",permalink:"/docs/Library/demo/lang/MissGrant/CheckController"}},s={},d=[{value:"Usage",id:"usage",level:4},{value:"data Controller",id:"demo-lang-MissGrant-AST-Controller",level:2},{value:"data State",id:"demo-lang-MissGrant-AST-State",level:2},{value:"data Command",id:"demo-lang-MissGrant-AST-Command",level:2},{value:"data Event",id:"demo-lang-MissGrant-AST-Event",level:2},{value:"data Transition",id:"demo-lang-MissGrant-AST-Transition",level:2},{value:"data ControllerState",id:"demo-lang-MissGrant-AST-ControllerState",level:2},{value:"alias StateEnv",id:"demo-lang-MissGrant-AST-StateEnv",level:2},{value:"function initial",id:"demo-lang-MissGrant-AST-initial",level:2},{value:"function final",id:"demo-lang-MissGrant-AST-final",level:2},{value:"function consumes",id:"demo-lang-MissGrant-AST-consumes",level:2},{value:"function stateGraph",id:"demo-lang-MissGrant-AST-stateGraph",level:2},{value:"function stateEnv",id:"demo-lang-MissGrant-AST-stateEnv",level:2},{value:"function eventEnv",id:"demo-lang-MissGrant-AST-eventEnv",level:2},{value:"function commandEnv",id:"demo-lang-MissGrant-AST-commandEnv",level:2},{value:"function usedEvents",id:"demo-lang-MissGrant-AST-usedEvents",level:2},{value:"function usedActions",id:"demo-lang-MissGrant-AST-usedActions",level:2},{value:"function definedCommands",id:"demo-lang-MissGrant-AST-definedCommands",level:2},{value:"function definedEvents",id:"demo-lang-MissGrant-AST-definedEvents",level:2},{value:"function definedStates",id:"demo-lang-MissGrant-AST-definedStates",level:2},{value:"function initialControllerState",id:"demo-lang-MissGrant-AST-initialControllerState",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import demo::lang::MissGrant::AST;")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-Controller"},"data Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Controller  \n     = controller(list[Event] events, \n                      list[str] resets, \n                      list[Command] commands,\n                      list[State] states)\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-State"},"data State"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data State  \n     = state(str name, list[str] actions, list[Transition] transitions)\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-Command"},"data Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Command  \n     = command(str name, str token)\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-Event"},"data Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Event  \n     = event(str name, str token)\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-Transition"},"data Transition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Transition  \n     = transition(str event, str state)\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-ControllerState"},"data ControllerState"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data ControllerState  \n     = controllerState(\n        Controller ctl,\n        str curStateName, \n        StateEnv stateEnv,\n        map[str,str] eventNameToToken,\n        map[str,str]  commandNameToToken,\n        map[str,str]  eventTokenToName,\n        map[str,str]  commandTokenToName\n    )\n     ;\n")),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-StateEnv"},"alias StateEnv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[str, State]"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-initial"},"function initial"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"State initial(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-final"},"function final"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"State final(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-consumes"},"function consumes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list[str] consumes(State s)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-stateGraph"},"function stateGraph"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Graph[str] stateGraph(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-stateEnv"},"function stateEnv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StateEnv stateEnv(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-eventEnv"},"function eventEnv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[str,str] eventEnv(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-commandEnv"},"function commandEnv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[str,str] commandEnv(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-usedEvents"},"function usedEvents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[str] usedEvents(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-usedActions"},"function usedActions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[str] usedActions(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-definedCommands"},"function definedCommands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[str] definedCommands(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-definedEvents"},"function definedEvents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[str] definedEvents(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-definedStates"},"function definedStates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[str] definedStates(Controller ctl)"))),(0,l.kt)("h2",{id:"demo-lang-MissGrant-AST-initialControllerState"},"function initialControllerState"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ControllerState initialControllerState(Controller ctl)"))))}u.isMDXComponent=!0}}]);