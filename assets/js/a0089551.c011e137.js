"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[95848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={title:"Combined"},i=void 0,s={unversionedId:"Recipes/Languages/Exp/Combined/index",id:"Recipes/Languages/Exp/Combined/index",title:"Combined",description:"Synopsis",source:"@site/docs/Recipes/Languages/Exp/Combined/index.md",sourceDirName:"Recipes/Languages/Exp/Combined",slug:"/Recipes/Languages/Exp/Combined/",permalink:"/docs/Recipes/Languages/Exp/Combined/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Exp/Combined/index.md",tags:[],version:"current",frontMatter:{title:"Combined"},sidebar:"tutorialSidebar",previous:{title:"Abstract",permalink:"/docs/Recipes/Languages/Exp/Abstract/"},next:{title:"Automatic",permalink:"/docs/Recipes/Languages/Exp/Combined/Automatic/"}},c={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Combine concrete syntax with abstract syntax."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Concrete syntax gives full control over the textual appearance of a language and leads to parse trees\nin a standard format (i.e., values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Tree"),")."),(0,a.kt)("p",null,"Abstract syntax can be designed by the Rascal programmer according to his/her needs regarding\nthe type checking, code generation, transformation, or optimization to be done on the abstract syntax trees."),(0,a.kt)("p",null,"How can we bridge this gap? We discuss two approaches:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../../Recipes/Languages/Exp/Combined/Manual"},"Manual"),": a transformation is written manually to convert parse trees to abstract syntax trees."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../../Recipes/Languages/Exp/Combined/Automatic"},"Automatic"),": the library function ","[Rascal:implode]"," is used to automate this transformation.")))}u.isMDXComponent=!0}}]);