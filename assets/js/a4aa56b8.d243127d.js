"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const l={title:"Literal Pattern"},s=void 0,o={unversionedId:"Rascal/Patterns/Literal/index",id:"Rascal/Patterns/Literal/index",title:"Literal Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Literal/index.md",sourceDirName:"Rascal/Patterns/Literal",slug:"/Rascal/Patterns/Literal/",permalink:"/docs/Rascal/Patterns/Literal/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Patterns/Literal/index.md",tags:[],version:"current",frontMatter:{title:"Literal Pattern"},sidebar:"tutorialSidebar",previous:{title:"List Pattern",permalink:"/docs/Rascal/Patterns/List/"},next:{title:"MultiVariable Pattern",permalink:"/docs/Rascal/Patterns/MultiVariable/"}},i={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Literal in abstract pattern."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A literal of one of the basic types ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Boolean"},"Boolean"),", ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Integer"},"Integer"),", ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Real"},"Real"),", ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Number"},"Number"),", ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/String"},"String"),", ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Location"},"Location"),", or ",(0,n.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/DateTime"},"Date time"),"\ncan be used as abstract pattern.\nA literal pattern matches with a value that is identical to the literal."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"A literal pattern matches with a value that is equal to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>123 := 123\nbool: true\nrascal>"abc" := "abc"\nbool: true\n')),(0,n.kt)("p",null,"A literal pattern does not match with a value that is not equal to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>123 := 456\nbool: false\nrascal>"abc" := "def"\nbool: false\n')),(0,n.kt)("p",null,"If the type of the literal pattern is ",(0,n.kt)("em",{parentName:"p"},"incomparable")," to the subject's type, a static type error is produced\nto announce that the match is guaranteed to fail:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>123 := "abc";\nok\n')),(0,n.kt)("p",null,"However, a literal pattern can be used to filter among other values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>value x = "abc";\nvalue: "abc"\nrascal>123 := x;\nbool: false\nrascal>x = 123;\nvalue: 123\nrascal>123 := x;\nbool: true\n')))}u.isMDXComponent=!0}}]);