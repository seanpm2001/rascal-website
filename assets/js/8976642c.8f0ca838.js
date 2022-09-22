"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[10191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const i={title:"Admonition"},o=void 0,l={unversionedId:"Tutor/Markup/StructureMarkup/Admonition/index",id:"Tutor/Markup/StructureMarkup/Admonition/index",title:"Admonition",description:"Synopsis",source:"@site/docs/Tutor/Markup/StructureMarkup/Admonition/index.md",sourceDirName:"Tutor/Markup/StructureMarkup/Admonition",slug:"/Tutor/Markup/StructureMarkup/Admonition/",permalink:"/docs/Tutor/Markup/StructureMarkup/Admonition/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Tutor/Markup/StructureMarkup/Admonition/index.md",tags:[],version:"current",frontMatter:{title:"Admonition"},sidebar:"tutorialSidebar",previous:{title:"Structure Markup",permalink:"/docs/Tutor/Markup/StructureMarkup/"},next:{title:"Bullet Lists",permalink:"/docs/Tutor/Markup/StructureMarkup/BulletLists/"}},p={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Mark up for admonitions."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The general scheme is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":::label\u2424 MarkedText \u2424:::"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"\u2424")," represents a newline character and label is one of:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"note")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"caution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"danger"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"An admonition is remark that should draw the reader's attention."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::note \nThis is a note\n:::\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is a note")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::tip \nMarkedText\n:::\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"what a great tip!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::info \nMarkedText\n:::\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Some more information here.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::caution \nMarkedText\n:::\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Careful now..")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::danger \nMarkedText\n:::\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::danger \nalarm!\n:::\n")),(0,a.kt)("h4",{id:"benefits"},"Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If used sparingly admonitions can draw the user's attention to important parts in your documentation."),(0,a.kt)("li",{parentName:"ul"},"The tutor compiler uses admonitions to mark problems (errors and warnings) with the links or the code contents of the documentations.")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Too many admonitions clutters the documentation and inspires "alarm fatique"'),(0,a.kt)("li",{parentName:"ul"},"Better use the ",(0,a.kt)("inlineCode",{parentName:"li"},"#### Pitfalls")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"#### Benefits")," sections to group information that is meant to alert the reader to positive/negative information.")))}c.isMDXComponent=!0}}]);