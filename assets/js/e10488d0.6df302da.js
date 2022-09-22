"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const i={title:"Authoring"},a=void 0,l={unversionedId:"Tutor/Authoring/index",id:"Tutor/Authoring/index",title:"Authoring",description:"Synopsis",source:"@site/docs/Tutor/Authoring/index.md",sourceDirName:"Tutor/Authoring",slug:"/Tutor/Authoring/",permalink:"/docs/Tutor/Authoring/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Tutor/Authoring/index.md",tags:[],version:"current",frontMatter:{title:"Authoring"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/Tutor/Architecture/"},next:{title:"Concept",permalink:"/docs/Tutor/Concept/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Creating and writing a course for the Rascal Tutor."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"The life cycle of a course consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A new course, say ",(0,o.kt)("inlineCode",{parentName:"li"},"MyCourse"),", is created. This is achieved by:\n",(0,o.kt)("strong",{parentName:"li"}," Creating a subdirectory named ",(0,o.kt)("inlineCode",{parentName:"strong"},"MyCourse")," in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"courses")," directory of the current Rascal project.\n")," Creating a file ",(0,o.kt)("inlineCode",{parentName:"li"},"MyCourse/MyCourse.concept"),". This is the root concept of the new course."),(0,o.kt)("li",{parentName:"ul"},"The contents of the course are created by populating the course with subconcepts of the root concept."),(0,o.kt)("li",{parentName:"ul"},"A subconcept, say ",(0,o.kt)("inlineCode",{parentName:"li"},"CoolIdea")," is created by:\n",(0,o.kt)("strong",{parentName:"li"}," Creating a subdirectory ",(0,o.kt)("inlineCode",{parentName:"strong"},"CoolIdea")," of its parent concept.\n")," Creating a file ",(0,o.kt)("inlineCode",{parentName:"li"},"CoolIdea/CoolIdea.concept")," that describes the concept."),(0,o.kt)("li",{parentName:"ul"},"Renaming/moving/deleting concepts is done at the directory/file level.")),(0,o.kt)("p",null,"Concepts are represented as directories for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To represent subconcepts as subdirectories."),(0,o.kt)("li",{parentName:"ul"},"To contain all figures and other files that are included in the concept. In this way:\n",(0,o.kt)("strong",{parentName:"li"}," A complete concept can be easily moved or renamed as a single unit.\n")," Name clashes between included files per concept are avoided.")),(0,o.kt)("h4",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"You can use your favourite editor and standard system command to author a course."),(0,o.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"There is no editing support or incremental course compilation available (yet)."))}p.isMDXComponent=!0}}]);