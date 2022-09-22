"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const a={title:"Edit Command"},o=void 0,l={unversionedId:"RascalShell/Commands/Edit/index",id:"RascalShell/Commands/Edit/index",title:"Edit Command",description:"Synopsis",source:"@site/docs/RascalShell/Commands/Edit/index.md",sourceDirName:"RascalShell/Commands/Edit",slug:"/RascalShell/Commands/Edit/",permalink:"/docs/RascalShell/Commands/Edit/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RascalShell/Commands/Edit/index.md",tags:[],version:"current",frontMatter:{title:"Edit Command"},sidebar:"tutorialSidebar",previous:{title:"Clear Command",permalink:"/docs/RascalShell/Commands/Clear/"},next:{title:"Help Command",permalink:"/docs/RascalShell/Commands/Help/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Open an editor for a Rascal module"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":edit ModuleName"),"  ")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"This opens an editor for the given module name. For every context of running Rascal, this could\nmean different things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the Unix commandline the ",(0,i.kt)("inlineCode",{parentName:"li"},"${EDITOR}")," environment variable will be used to open a file. If that file is present in the local file system, it is opened by running ",(0,i.kt)("inlineCode",{parentName:"li"},"${EDITOR} /absolute/path/to/module.rsc"),", but if the file is hidden behind an opaque ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Location"},"Location")," scheme, then it is first copied to a temporary file on the local file system, and then opened."),(0,i.kt)("li",{parentName:"ul"},'In Eclipse, the eclipse editor framework is used to open an editor for the file. If it is a so called "resource" in the eclipse file system, and editable file is opened with all the Rascal language support. If the file is from an embedded library (inside a jar) then the contents of the file are shown in a similar editor, but read-only.'),(0,i.kt)("li",{parentName:"ul"},"In VScode a similar experience is provided as in Eclipse, but the editor for library files does not know it is read-only.")))}p.isMDXComponent=!0}}]);