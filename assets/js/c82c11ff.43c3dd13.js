"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[50465],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),u=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},d=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?t.createElement(b,i(i({ref:r},d),{},{components:a})):t.createElement(b,i({ref:r},d))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21096:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(83117),n=(a(67294),a(3905));const l={title:"demo::lang::Lisra::Parse"},i=void 0,o={unversionedId:"Library/demo/lang/Lisra/Parse",id:"Library/demo/lang/Lisra/Parse",title:"demo::lang::Lisra::Parse",description:"Usage",source:"@site/docs/Library/demo/lang/Lisra/Parse.md",sourceDirName:"Library/demo/lang/Lisra",slug:"/Library/demo/lang/Lisra/Parse",permalink:"/docs/Library/demo/lang/Lisra/Parse",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/demo/lang/Lisra/Parse.md",tags:[],version:"current",frontMatter:{title:"demo::lang::Lisra::Parse"},sidebar:"tutorialSidebar",previous:{title:"demo::lang::Lisra::Eval",permalink:"/docs/Library/demo/lang/Lisra/Eval"},next:{title:"demo::lang::Lisra::Pretty",permalink:"/docs/Library/demo/lang/Lisra/Pretty"}},s={},u=[{value:"Usage",id:"usage",level:4},{value:"function parse",id:"demo-lang-Lisra-Parse-parse",level:2},{value:"function build",id:"demo-lang-Lisra-Parse-build",level:2},{value:"function build1",id:"demo-lang-Lisra-Parse-build1",level:2},{value:"function build2",id:"demo-lang-Lisra-Parse-build2",level:2},{value:"function build3",id:"demo-lang-Lisra-Parse-build3",level:2},{value:"function parse1",id:"demo-lang-Lisra-Parse-parse1",level:2},{value:"function parse2",id:"demo-lang-Lisra-Parse-parse2",level:2},{value:"function parse3",id:"demo-lang-Lisra-Parse-parse3",level:2},{value:"function parse4",id:"demo-lang-Lisra-Parse-parse4",level:2},{value:"function parse5",id:"demo-lang-Lisra-Parse-parse5",level:2}],d={toc:u};function p(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::lang::Lisra::Parse;")),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse"},"function parse"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Lval parse(str txt)"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-build"},"function build"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Lval build((LispExp)`<IntegerLiteral il>`)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Lval build((LispExp)`<AtomExp at>`)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Lval build((LispExp)`( <LispExp* lst> )`)"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-build1"},"function build1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool build1()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-build2"},"function build2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool build2()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-build3"},"function build3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool build3()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse1"},"function parse1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parse1()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse2"},"function parse2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parse2()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse3"},"function parse3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parse3()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse4"},"function parse4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parse4()"))),(0,n.kt)("h2",{id:"demo-lang-Lisra-Parse-parse5"},"function parse5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool parse5()"))))}p.isMDXComponent=!0}}]);