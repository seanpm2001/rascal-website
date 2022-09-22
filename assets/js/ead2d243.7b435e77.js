"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[75994],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),u=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54598:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(83117),a=(r(67294),r(3905));const s={title:"Squares"},i=void 0,l={unversionedId:"Recipes/Basic/Squares/index",id:"Recipes/Basic/Squares/index",title:"Squares",description:"Synopsis",source:"@site/docs/Recipes/Basic/Squares/index.md",sourceDirName:"Recipes/Basic/Squares",slug:"/Recipes/Basic/Squares/",permalink:"/docs/Recipes/Basic/Squares/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Basic/Squares/index.md",tags:[],version:"current",frontMatter:{title:"Squares"},sidebar:"tutorialSidebar",previous:{title:"Quine",permalink:"/docs/Recipes/Basic/Quine/"},next:{title:"Common",permalink:"/docs/Recipes/Common/"}},o={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],p={toc:u};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Print a list of squares"),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"How can we print a list of squares? Here is a solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},'\n//START\n// tag::module[]\nmodule demo::basic::Squares\n\nimport IO;\n\nvoid squares(int N){\n  println("Table of squares from 1 to <N>\\n"); // <2>\n  for(int I <- [1 .. N + 1])\n      println("<I> squared = <I * I>");        // <3>\n}\n\n// a solution with a multi line string template:\n\nstr squaresTemplate(int N) // <4>\n  = "Table of squares from 1 to <N>\n    \'<for (int I <- [1 .. N + 1]) {>\n    \'  <I> squared = <I * I><}>";\n// end::module[]\n\n')),(0,a.kt)("p",null,"<1> The ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/IO"},"IO")," module is imported since we want to print things using ",(0,a.kt)("inlineCode",{parentName:"p"},"println"),"."),(0,a.kt)("p",null,"<2> ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/String"},"String")," interpolation is used several times.\nHere the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," is inserted in the header message."),(0,a.kt)("p",null,"<3> The values of ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"I * I")," are inserted in each line that is printed."),(0,a.kt)("p",null,"<4> Define an alternative implementation ",(0,a.kt)("inlineCode",{parentName:"p"},"squareTemplate")," that is based on string templates\nand returns a string value instead of printing the results itself."),(0,a.kt)("p",null,"Here is how ",(0,a.kt)("inlineCode",{parentName:"p"},"square")," can be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::basic::Squares;\nok\nrascal>squares(9);\nsquares(9);\nTable of squares from 1 to 9\n\n1 squared = 1\n2 squared = 4\n3 squared = 9\n4 squared = 16\n5 squared = 25\n6 squared = 36\n7 squared = 49\n8 squared = 64\n9 squared = 81\nok\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"squaresTemplate")," gives a similar result but now as a string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>squaresTemplate(9);\nstr: "Table of squares from 1 to 9\\n\\n  1 squared = 1\\n  2 squared = 4\\n  3 squared = 9\\n  4 squared = 16\\n  5 squared = 25\\n  6 squared = 36\\n  7 squared = 49\\n  8 squared = 64\\n  9 squared = 81"\n')),(0,a.kt)("p",null,"To get a truly identical result we have to import the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/IO"},"IO")," module\nand print the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"squaresTemplate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\nrascal>println(squaresTemplate(9));\nprintln(squaresTemplate(9));\nTable of squares from 1 to 9\n\n  1 squared = 1\n  2 squared = 4\n  3 squared = 9\n  4 squared = 16\n  5 squared = 25\n  6 squared = 36\n  7 squared = 49\n  8 squared = 64\n  9 squared = 81\nok\n")))}c.isMDXComponent=!0}}]);