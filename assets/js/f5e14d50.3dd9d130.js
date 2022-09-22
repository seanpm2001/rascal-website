"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[40427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||c[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},18663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(83117),i=(n(67294),n(3905));const a={title:"ListRelation Join",keywords:["join"]},s=void 0,l={unversionedId:"Rascal/Expressions/Values/ListRelation/Join/index",id:"Rascal/Expressions/Values/ListRelation/Join/index",title:"ListRelation Join",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/Join/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation/Join",slug:"/Rascal/Expressions/Values/ListRelation/Join/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Join/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/ListRelation/Join/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation Join",keywords:["join"]},sidebar:"tutorialSidebar",previous:{title:"ListRelation FieldSelection",permalink:"/docs/Rascal/Expressions/Values/ListRelation/FieldSelection/"},next:{title:"ListRelation Reflexive Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/"}},o={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Join two list relation values."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> join Exp<sub>2</sub>")),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("p",null,"//"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> join Exp<sub>2</sub>")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lrel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ... ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lrel[ T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lrel[ T<sub>11</sub>, T<sub>12</sub>, T<sub>13</sub>, ..., T<sub>21</sub>, T<sub>22</sub>, T<sub>23</sub>, ... ]"))))),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"ListRelation resulting from the natural join of the list relation values of the two arguments.\nThis list relation contains tuples that are the result from concatenating the elements from both arguments."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[<1,2>, <10,20>] join [<2,3>];\nlrel[int,int,int,int]: [\n  <1,2,2,3>,\n  <10,20,2,3>\n]\nrascal>[<1,2>] join [3, 4];\nlrel[int,int,int]: [\n  <1,2,3>,\n  <1,2,4>\n]\nrascal>[<1,2>, <10,20>] join [<2,3>, <20,30>];\nlrel[int,int,int,int]: [\n  <1,2,2,3>,\n  <1,2,20,30>,\n  <10,20,2,3>,\n  <10,20,20,30>\n]\n")))}c.isMDXComponent=!0}}]);