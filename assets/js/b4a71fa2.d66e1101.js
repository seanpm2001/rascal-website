"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[52473],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||n;return t?r.createElement(f,l(l({ref:a},c),{},{components:t})):r.createElement(f,l({ref:a},c))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,l=new Array(n);l[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<n;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=t(87462),s=(t(67294),t(3905));const n={title:"Values"},l=void 0,i={unversionedId:"Rascal/Expressions/Values/index",id:"Rascal/Expressions/Values/index",title:"Values",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/index.md",sourceDirName:"Rascal/Expressions/Values",slug:"/Rascal/Expressions/Values/",permalink:"/docs/Rascal/Expressions/Values/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/index.md",tags:[],version:"current",frontMatter:{title:"Values"},sidebar:"tutorialSidebar",previous:{title:"Statement as Expression",permalink:"/docs/Rascal/Expressions/StatementAsExpression/"},next:{title:"Boolean",permalink:"/docs/Rascal/Expressions/Values/Boolean/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"The different types of values."),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Boolean/"},"Boolean")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Constructor/"},"Constructor")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/DateTime/"},"DateTime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Integer/"},"Integer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/List/"},"List")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/ListRelation/"},"ListRelation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Location/"},"Location")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Map/"},"Map")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Node/"},"Node")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Number/"},"Number")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Range/"},"Range")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Real/"},"Real")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/ReifiedTypes/"},"ReifiedTypes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/"},"Relation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Set/"},"Set")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/String/"},"String")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Tuple/"},"Tuple")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Value/"},"Value")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Void/"},"Void"))))}u.isMDXComponent=!0}}]);