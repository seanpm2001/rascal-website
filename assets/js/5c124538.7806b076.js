"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[5642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?l.createElement(v,i(i({ref:t},p),{},{components:a})):l.createElement(v,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(83117),r=(a(67294),a(3905));const n={title:"util::Eval"},i=void 0,o={unversionedId:"Library/util/Eval",id:"Library/util/Eval",title:"util::Eval",description:"Usage",source:"@site/docs/Library/util/Eval.md",sourceDirName:"Library/util",slug:"/Library/util/Eval",permalink:"/docs/Library/util/Eval",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/util/Eval.md",tags:[],version:"current",frontMatter:{title:"util::Eval"},sidebar:"tutorialSidebar",previous:{title:"util::Benchmark",permalink:"/docs/Library/util/Benchmark"},next:{title:"util::FileSystem",permalink:"/docs/Library/util/FileSystem"}},s={},u=[{value:"Usage",id:"usage",level:4},{value:"data Result",id:"util-Eval-Result",level:2},{value:"data Exception",id:"util-Eval-Exception",level:2},{value:"function eval",id:"util-Eval-eval",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"function evalType",id:"util-Eval-evalType",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Examples",id:"examples-1",level:4}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import util::Eval;")),(0,r.kt)("h2",{id:"util-Eval-Result"},"data Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Result[&T]  \n     = ok()\n     | result(&T val)\n     ;\n")),(0,r.kt)("h2",{id:"util-Eval-Exception"},"data Exception"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Exception  \n     = StaticError(str message, loc location)\n     ;\n")),(0,r.kt)("h2",{id:"util-Eval-eval"},"function eval"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[&T] eval(type[&T] typ, str command) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[value] eval(str command)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[&T] eval(type[&T] typ, list[str] commands) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[value] eval(list[str] commands)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[&T] eval(type[&T] typ, str command, int duration) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[value] eval(str command, int duration)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[&T] eval(type[&T] typ, list[str] commands, int duration) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result[value] eval(list[str] commands, int duration)"))),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Evaluate a (list of) Rascal commands and return the value of the last command."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Evaluate a command or a list of commands and return the value of the last command that is executed."),(0,r.kt)("p",null,"Note that a command can be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Statement"),(0,r.kt)("li",{parentName:"ul"},"Declaration"),(0,r.kt)("li",{parentName:"ul"},"Import"),(0,r.kt)("li",{parentName:"ul"},"Extend"),(0,r.kt)("li",{parentName:"ul"},"SyntaxDefinition")),(0,r.kt)("p",null,"The notable exclusion are ",(0,r.kt)("a",{parentName:"p",href:"/docs//Rascal/Expressions"},"Expressions"),". An Expression is not allowed as a command to the eval function. You can easily make\na Statement from an Expression by adding a semi-colon."),(0,r.kt)("p",null,"An optional ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," argument may be present to limit the time\n(in milliseconds) the execution may take. By default, the duration is set to 1000 ms."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import util::Eval;\nok\nrascal>eval("2 * 3;");\nResult[value]: result(6)\nrascal>eval(["X = 2 * 3;", "X + 5;"]);\nResult[value]: result(11)\n')),(0,r.kt)("h2",{id:"util-Eval-evalType"},"function evalType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str evalType(str command) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str evalType(list[str] commands) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str evalType(str command, int duration) throws Timeout, StaticError, ParseError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str evalType(list[str] commands, int duration) throws Timeout, StaticError, ParseError"))),(0,r.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("p",null,"Evaluate a (list of) Rascal commands and return the type of the last command."),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Evaluate a command or a list of commands and return the type of the value of the last command that is executed.\nAn optional ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," argument may be present to limit the time\n(in milliseconds) the execution may take. By default, the duration is set to 1000 ms."),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import util::Eval;\nok\nrascal>evalType("2 * 3;");\nstr: "int"\nrascal>evalType("[1, 2, 3];");\nstr: "list[int]"\n')))}m.isMDXComponent=!0}}]);