"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[33278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<p;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={title:"Map StrictSuperMap",keywords:[">"]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/Map/StrictSuperMap/index",id:"Rascal/Expressions/Values/Map/StrictSuperMap/index",title:"Map StrictSuperMap",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Map/StrictSuperMap/index.md",sourceDirName:"Rascal/Expressions/Values/Map/StrictSuperMap",slug:"/Rascal/Expressions/Values/Map/StrictSuperMap/",permalink:"/docs/Rascal/Expressions/Values/Map/StrictSuperMap/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Map/StrictSuperMap/index.md",tags:[],version:"current",frontMatter:{title:"Map StrictSuperMap",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"Map StrictSubMap",permalink:"/docs/Rascal/Expressions/Values/Map/StrictSubMap/"},next:{title:"Map SubMap",permalink:"/docs/Rascal/Expressions/Values/Map/SubMap/"}},s={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Strict supermap operator on map values."),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Exp\u2081 > Exp\u2082")),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"Exp\u2081 > Exp\u2082")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"map[TK\u2081,TV\u2082]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"map[TK\u2082, TV\u2082]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Yields ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if all key/value pairs in the map value of ",(0,n.kt)("em",{parentName:"p"},"Exp"),"\u2082 occur in the map value ",(0,n.kt)("em",{parentName:"p"},"Exp"),"\u2081\nand the values of ",(0,n.kt)("em",{parentName:"p"},"Exp"),"\u2081 and ",(0,n.kt)("em",{parentName:"p"},"EXp"),"\u2082 are not equal, and ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>("pear": 2, "apple": 1, "banana" : 3) > ("apple": 1, "pear": 2);\nbool: true\nrascal>("apple": 1, "banana" : 3) > ("apple": 1, "pear": 2);\nbool: false\n')))}u.isMDXComponent=!0}}]);