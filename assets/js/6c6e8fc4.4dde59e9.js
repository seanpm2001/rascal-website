"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[56148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={title:"lang::rascal::tutor::apidoc::GenerateMarkdown"},l=void 0,i={unversionedId:"Library/lang/rascal/tutor/apidoc/GenerateMarkdown",id:"Library/lang/rascal/tutor/apidoc/GenerateMarkdown",title:"lang::rascal::tutor::apidoc::GenerateMarkdown",description:"Usage",source:"@site/docs/Library/lang/rascal/tutor/apidoc/GenerateMarkdown.md",sourceDirName:"Library/lang/rascal/tutor/apidoc",slug:"/Library/lang/rascal/tutor/apidoc/GenerateMarkdown",permalink:"/docs/Library/lang/rascal/tutor/apidoc/GenerateMarkdown",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tutor/apidoc/GenerateMarkdown.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tutor::apidoc::GenerateMarkdown"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tutor::apidoc::ExtractInfo",permalink:"/docs/Library/lang/rascal/tutor/apidoc/ExtractInfo"},next:{title:"lang::rascal::tutor::conversions",permalink:"/docs/Library/lang/rascal/tutor/conversions/"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"function generateAPIMarkdown",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-generateAPIMarkdown",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function declInfo2Doc",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-declInfo2Doc",level:2},{value:"function tags2Markdown",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-tags2Markdown",level:2},{value:"function basename",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-basename",level:2},{value:"function fragment",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-fragment",level:2},{value:"function removeNewlines",id:"lang-rascal-tutor-apidoc-GenerateMarkdown-removeNewlines",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tutor::apidoc::GenerateMarkdown;")),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-generateAPIMarkdown"},"function generateAPIMarkdown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] generateAPIMarkdown(str parent, loc moduleLoc, PathConfig pcfg, CommandExecutor exec, Index ind)"))),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Generate markdown documentation from the declarations extracted from a Rascal module."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This function takes Rascal files as input, first extracts all declarations including their\nembedded (markdown) documentation tags, and then generates on-the-fly the output markdown\nas a list of lines and error messages. \n\nThis generator reuses the markdown compiler \nto implement Rascal shell execution and concept linking, etc. This compilation is applied inside of the\ndocumentation tags that are written by the author of the Rascal code. The trick is to track the\ncurrent line number inside those documentation tags to provide valuable feedback to the user\nof the tutor compiler.\n")),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-declInfo2Doc"},"function declInfo2Doc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] declInfo2Doc(str parent, d:moduleInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] declInfo2Doc(str parent, d:functionInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] declInfo2Doc(str parent, constructorInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] declInfo2Doc(str parent, d:dataInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] declInfo2Doc(str parent, d:aliasInfo(), list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default list[Output] declInfo2Doc(str parent, DeclarationInfo d, list[str] overloads, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-tags2Markdown"},"function tags2Markdown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Output] tags2Markdown(list[DocTag] tags, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-basename"},"function basename"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str basename(str cn)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-fragment"},"function fragment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str fragment(str moduleName)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-apidoc-GenerateMarkdown-removeNewlines"},"function removeNewlines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str removeNewlines(str x)"))))}u.isMDXComponent=!0}}]);