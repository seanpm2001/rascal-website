"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={title:"MissingReturn"},s=void 0,a={unversionedId:"CompileTimeErrors/MissingReturn/index",id:"CompileTimeErrors/MissingReturn/index",title:"MissingReturn",description:"Synopsis",source:"@site/docs/CompileTimeErrors/MissingReturn/index.md",sourceDirName:"CompileTimeErrors/MissingReturn",slug:"/CompileTimeErrors/MissingReturn/",permalink:"/docs/CompileTimeErrors/MissingReturn/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/MissingReturn/index.md",tags:[],version:"current",frontMatter:{title:"MissingReturn"},sidebar:"tutorialSidebar",previous:{title:"MissingModifier",permalink:"/docs/CompileTimeErrors/MissingModifier/"},next:{title:"ModuleImport",permalink:"/docs/CompileTimeErrors/ModuleImport/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"A return statement is missing from a function body."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Functions return some value (except functions that have return type ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),").\nThis error is generated when a function body does not return a value."),(0,i.kt)("p",null,"Remedies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a ","[Rascal:Return]"," statement to the function body."),(0,i.kt)("li",{parentName:"ul"},"Rewrite the function so that the function body becomes a single expression and you can use the abbreviated function format, see ","[$Rascal:Declarations/Function]",".")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here is an incorrect definition of function ",(0,i.kt)("inlineCode",{parentName:"p"},"triple"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int triple(int x) {\n>>>>>>>   x * 3;\n>>>>>>>}\nint (int): function(|prompt:///|(0,31,<1,0>,<3,1>))\nrascal>triple(5)\n|prompt:///|(0,31,<1,0>,<3,1>): Missing return statement\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/MissingReturn/MissingReturn.html|\nok\n")),(0,i.kt)("p",null,"It should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int triple(int x) {\n>>>>>>>   return x * 3;\n>>>>>>>}\nint (int): function(|prompt:///|(0,38,<1,0>,<3,1>))\nrascal>triple(5)\nint: 15\n")),(0,i.kt)("p",null,"This is another solution using the abbreviated function format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int triple(int x) = x * 3;\nint (int): function(|prompt:///|(0,26,<1,0>,<1,26>))\nrascal>triple(5)\nint: 15\n")))}u.isMDXComponent=!0}}]);