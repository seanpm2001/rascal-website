"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"module lang::rascal::tutor::Names"},o=void 0,s={unversionedId:"Library/lang/rascal/tutor/Names",id:"Library/lang/rascal/tutor/Names",title:"module lang::rascal::tutor::Names",description:"Usage",source:"@site/docs/Library/lang/rascal/tutor/Names.md",sourceDirName:"Library/lang/rascal/tutor",slug:"/Library/lang/rascal/tutor/Names",permalink:"/docs/Library/lang/rascal/tutor/Names",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tutor/Names.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tutor::Names"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tutor::Indexer",permalink:"/docs/Library/lang/rascal/tutor/Indexer"},next:{title:"module lang::rascal::tutor::Output",permalink:"/docs/Library/lang/rascal/tutor/Output"}},i={},c=[{value:"Usage",id:"usage",level:4},{value:"data PathConfig",id:"lang-rascal-tutor-Names-PathConfig",level:2},{value:"data Message",id:"lang-rascal-tutor-Names-Message",level:2},{value:"function fragment",id:"lang-rascal-tutor-Names-fragment",level:2},{value:"function moduleFragment",id:"lang-rascal-tutor-Names-moduleFragment",level:2},{value:"function removeSpaces",id:"lang-rascal-tutor-Names-removeSpaces",level:2},{value:"function addSpaces",id:"lang-rascal-tutor-Names-addSpaces",level:2},{value:"function pathToRoot",id:"lang-rascal-tutor-Names-pathToRoot",level:2},{value:"Synopsis",id:"synopsis",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tutor::Names;")),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-PathConfig"},"data PathConfig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data PathConfig (loc currentRoot = |unknown:///|, loc currentFile = |unknown:///|)\n")),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-Message"},"data Message"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},'data Message (str cause="")\n')),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-fragment"},"function fragment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default str fragment(loc root, loc concept)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str fragment(loc root, loc concept)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str fragment(loc root, loc concept)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-moduleFragment"},"function moduleFragment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str moduleFragment(str moduleName)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-removeSpaces"},"function removeSpaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str removeSpaces(/^<prefix:.*><spaces:\\s+><postfix:.*>$/)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default str removeSpaces(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-addSpaces"},"function addSpaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str addSpaces(/^<prefix:[^:]+>:<postfix:[^:].*>$/)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str addSpaces(/^<prefix:.+>::<name:[^:]+>$/)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str addSpaces(/^<prefix:[A-Za-z0-9\\ ]+[a-z0-9]><postfix:[A-Z].+>/)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default str addSpaces(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Names-pathToRoot"},"function pathToRoot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str pathToRoot(loc root, loc src)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str pathToRoot(loc root, loc src)"))),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"produces ",(0,n.kt)("inlineCode",{parentName:"p"},'"../../.."')," for pathToRoot(|aap:///a/b|, |aap:///a/b/c/d|)"))}p.isMDXComponent=!0}}]);