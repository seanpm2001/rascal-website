"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53770],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),u=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(i),v=r,f=p["".concat(a,".").concat(v)]||p[v]||d[v]||s;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,l=new Array(s);l[0]=p;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},46775:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=i(83117),r=(i(67294),i(3905));const s={title:"module util::IDEServices"},l=void 0,o={unversionedId:"Library/util/IDEServices",id:"Library/util/IDEServices",title:"module util::IDEServices",description:"Usage",source:"@site/docs/Library/util/IDEServices.md",sourceDirName:"Library/util",slug:"/Library/util/IDEServices",permalink:"/docs/Library/util/IDEServices",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/util/IDEServices.md",tags:[],version:"current",frontMatter:{title:"module util::IDEServices"},sidebar:"tutorialSidebar",previous:{title:"module util::Highlight",permalink:"/docs/Library/util/Highlight"},next:{title:"module util::Math",permalink:"/docs/Library/util/Math"}},a={},u=[{value:"Usage",id:"usage",level:4},{value:"function browse",id:"util-IDEServices-browse",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"function edit",id:"util-IDEServices-edit",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function applyDocumentsEdits",id:"util-IDEServices-applyDocumentsEdits",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description",level:4},{value:"function showInteractiveContent",id:"util-IDEServices-showInteractiveContent",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function showMessage",id:"util-IDEServices-showMessage",level:2},{value:"function logMessage",id:"util-IDEServices-logMessage",level:2},{value:"function registerDiagnostics",id:"util-IDEServices-registerDiagnostics",level:2},{value:"function unregisterDiagnostics",id:"util-IDEServices-unregisterDiagnostics",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import util::IDEServices;")),(0,r.kt)("h2",{id:"util-IDEServices-browse"},"function browse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void browse(loc uri)"))),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Open a browser for a given location."),(0,r.kt)("h2",{id:"util-IDEServices-edit"},"function edit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void edit(loc uri)"))),(0,r.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("p",null,"Open an editor for file at a given location."),(0,r.kt)("h2",{id:"util-IDEServices-applyDocumentsEdits"},"function applyDocumentsEdits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void applyDocumentsEdits(list[DocumentEdit] edits)"))),(0,r.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,r.kt)("p",null,"Let the IDE apply a list of document edits."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,'Asks the IDE to apply document edits as defined in the standard library module\nanalysis::diff::edits::TextEdits, according to the semantics defined in\nanalysis::diff::edits::ExecuteTextEdits. However, the IDE can take care of these\nchanges in order to provide important UI experience features such as "preview"\nand "undo". '),(0,r.kt)("p",null,"Typically a call to this IDE service method is included in the implementation\nof refactoring and quick-fix features of the language service protocol."),(0,r.kt)("h2",{id:"util-IDEServices-showInteractiveContent"},"function showInteractiveContent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void showInteractiveContent(Content content)"))),(0,r.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,r.kt)("p",null,'Asks the IDE to show a "browser window" with the given interactive Content.'),(0,r.kt)("h2",{id:"util-IDEServices-showMessage"},"function showMessage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void showMessage(Message message)"))),(0,r.kt)("h2",{id:"util-IDEServices-logMessage"},"function logMessage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void logMessage(Message message)"))),(0,r.kt)("h2",{id:"util-IDEServices-registerDiagnostics"},"function registerDiagnostics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void registerDiagnostics(list[Message] messages)"))),(0,r.kt)("h2",{id:"util-IDEServices-unregisterDiagnostics"},"function unregisterDiagnostics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void unregisterDiagnostics(list[loc] resources)"))))}d.isMDXComponent=!0}}]);