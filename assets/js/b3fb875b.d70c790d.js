"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[35819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),v=i,d=m["".concat(s,".").concat(v)]||m[v]||u[v]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const a={title:"lang::rascal::tutor::conversions::ADtoMD"},o=void 0,l={unversionedId:"Library/lang/rascal/tutor/conversions/ADtoMD",id:"Library/lang/rascal/tutor/conversions/ADtoMD",title:"lang::rascal::tutor::conversions::ADtoMD",description:"Usage",source:"@site/docs/Library/lang/rascal/tutor/conversions/ADtoMD.md",sourceDirName:"Library/lang/rascal/tutor/conversions",slug:"/Library/lang/rascal/tutor/conversions/ADtoMD",permalink:"/docs/Library/lang/rascal/tutor/conversions/ADtoMD",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tutor/conversions/ADtoMD.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tutor::conversions::ADtoMD"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tutor::conversions",permalink:"/docs/Library/lang/rascal/tutor/conversions/"},next:{title:"lang::rascal::tutor::conversions::ConvertSections",permalink:"/docs/Library/lang/rascal/tutor/conversions/ConvertSections"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"function ad2md",id:"lang-rascal-tutor-conversions-ADtoMD-ad2md",level:2},{value:"function isSourceFile",id:"lang-rascal-tutor-conversions-ADtoMD-isSourceFile",level:2},{value:"function convertFile",id:"lang-rascal-tutor-conversions-ADtoMD-convertFile",level:2},{value:"function convertLine",id:"lang-rascal-tutor-conversions-ADtoMD-convertLine",level:2},{value:"function extractTitle",id:"lang-rascal-tutor-conversions-ADtoMD-extractTitle",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tutor::conversions::ADtoMD;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Temporary utility conversions for evolving the tutor syntax from AsciiDoc to Docusaurus Markdown"),(0,i.kt)("h2",{id:"lang-rascal-tutor-conversions-ADtoMD-ad2md"},"function ad2md"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void ad2md()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void ad2md(loc root)"))),(0,i.kt)("h2",{id:"lang-rascal-tutor-conversions-ADtoMD-isSourceFile"},"function isSourceFile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool isSourceFile(loc f)"))),(0,i.kt)("h2",{id:"lang-rascal-tutor-conversions-ADtoMD-convertFile"},"function convertFile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void convertFile(loc file)"))),(0,i.kt)("h2",{id:"lang-rascal-tutor-conversions-ADtoMD-convertLine"},"function convertLine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/<prefix:.*>link:\\/<course:[A-Za-z0-9]+>#<concept:[A-Za-z0-9\\-]+>\\[<title:[^\\]]*>\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/<prefix:.*>link:\\/<course:[A-Za-z0-9]+>\\[<title:[^\\]]*>\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/<prefix:.*>\\<\\<<concept:[A-Za-z0-9\\-]+>\\>\\><postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>image:[:]*<filename:[A-Za-z\\-0-9]+>\\.<ext:png|jpeg|jpg|svg>\\[<properties:[^\\]]*>\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\<\\<<concept:[A-Za-z\\-0-9\\ ]+>,<title:[A-Za-z\\-0-9\\ ]+>\\>\\><postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\<\\<<concept:[A-Za-z\\-0-9\\ ]+>\\>\\><postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>loctoc::\\[[0-9]+\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>kbd:\\[<keys:.*?>\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^\\ \\ \\ \\ \\*\\*<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(Libraries:<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(Library:Libraries-<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(Library:Prelude-<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(<pre:[^\\)]+>-Prelude-<lst:[^\\)\\-]+>\\)\\)<postfix:.*>$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(<pre:[^\\)]+>-<fst:[^\\)\\-]+>-<lst:[^\\)\\-]+>\\)\\)<postfix:.*>$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>\\(\\(Rascal:Concepts-<rest:[^)]+>\\)\\)<postfix:.*>$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>`<prequote:[^`]*>_<italics:[A-Za-z0-9~]+>_<postquote:[^`]*>`<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^<prefix:.*>http\\:\\/\\/<url:[^\\[\\(\\)]+>\\[<label:[^\\]\\(\\)]+>\\]<postfix:.*$>/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'str convertLine(/^keywords: \\"<stuff:.*>\\"\\s*$/)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^details: <stuff:.*>\\s*$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'str convertLine(/^title: \\"<stuff:.*>\\"\\s*$/)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'str convertLine(/^\\ \\ \\-\\ \\"\\"<thing:[^A-Za-z0-9\\-\\_\\ \\t\\"]+>\\"\\"\\s*$/)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^\\ \\ \\-\\ true\\s*$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str convertLine(/^\\ \\ \\-\\ false\\s*$/)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default str convertLine(str line)"))),(0,i.kt)("h2",{id:"lang-rascal-tutor-conversions-ADtoMD-extractTitle"},"function extractTitle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'str extractTitle(/title=\\"<t:[^\\"]+>\\"/)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default str extractTitle(str x)"))))}u.isMDXComponent=!0}}]);