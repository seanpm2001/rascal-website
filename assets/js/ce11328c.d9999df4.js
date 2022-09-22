"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=s,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(83117),s=(n(67294),n(3905));const a={title:"Statement as Expression"},o=void 0,i={unversionedId:"Rascal/Expressions/StatementAsExpression/index",id:"Rascal/Expressions/StatementAsExpression/index",title:"Statement as Expression",description:"Synopsis",source:"@site/docs/Rascal/Expressions/StatementAsExpression/index.md",sourceDirName:"Rascal/Expressions/StatementAsExpression",slug:"/Rascal/Expressions/StatementAsExpression/",permalink:"/docs/Rascal/Expressions/StatementAsExpression/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/StatementAsExpression/index.md",tags:[],version:"current",frontMatter:{title:"Statement as Expression"},sidebar:"tutorialSidebar",previous:{title:"Reducer",permalink:"/docs/Rascal/Expressions/Reducer/"},next:{title:"Values",permalink:"/docs/Rascal/Expressions/Values/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Statements that have a value and can be used as expressions."),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Several forms of statements produce a value and can be used as expression.\nThis is further explained in the sections for the relevant statements, see ",(0,s.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/If"},"If"),", ",(0,s.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/While"},"While"),", ",(0,s.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Do"},"Do")," and ",(0,s.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/For"},"For"),"."),(0,s.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,s.kt)("p",null,"It is likely that the design of Rascal will evolve into completely merging expressions and statements."))}u.isMDXComponent=!0}}]);