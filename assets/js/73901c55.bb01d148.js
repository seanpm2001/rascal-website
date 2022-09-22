"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[2059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const s={title:"Field",keywords:["."]},i=void 0,l={unversionedId:"Rascal/Statements/Assignment/Field/index",id:"Rascal/Statements/Assignment/Field/index",title:"Field",description:"Synopsis",source:"@site/docs/Rascal/Statements/Assignment/Field/index.md",sourceDirName:"Rascal/Statements/Assignment/Field",slug:"/Rascal/Statements/Assignment/Field/",permalink:"/docs/Rascal/Statements/Assignment/Field/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Statements/Assignment/Field/index.md",tags:[],version:"current",frontMatter:{title:"Field",keywords:["."]},sidebar:"tutorialSidebar",previous:{title:"Constructor",permalink:"/docs/Rascal/Statements/Assignment/Constructor/"},next:{title:"IsDefined",permalink:"/docs/Rascal/Statements/Assignment/IsDefined/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Assign to a field of a tuple, relation or datatype."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("h4",{id:"function"},"Function"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The value ",(0,a.kt)("inlineCode",{parentName:"p"},"V")," of ",(0,a.kt)("em",{parentName:"p"},"Assignable")," is determined and should be of a type that has a field ",(0,a.kt)("em",{parentName:"p"},"Name"),".\nThe value of that field is replaced in ",(0,a.kt)("em",{parentName:"p"},"V")," by the value of ",(0,a.kt)("em",{parentName:"p"},"Exp")," resulting in a new value ",(0,a.kt)("em",{parentName:"p"},"V"),"' that is assigned to ",(0,a.kt)("em",{parentName:"p"},"Assignable"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data FREQ = wf(str word, int freq);\nok\nrascal>W = wf("rascal", 1000);\nFREQ: wf("rascal",1000)\nrascal>W.freq = 100000;\nFREQ: wf("rascal",100000)\n')),(0,a.kt)("h4",{id:"benefits"},"Benefits"))}d.isMDXComponent=!0}}]);