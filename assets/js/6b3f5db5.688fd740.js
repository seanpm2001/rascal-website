"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[68693],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>g});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),m=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=m(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),g=n,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return t?r.createElement(d,l(l({ref:a},s),{},{components:t})):r.createElement(d,l({ref:a},s))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64362:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=t(83117),n=(t(67294),t(3905));const o={title:"MetaProgramming"},l=void 0,i={unversionedId:"Rascalopedia/MetaProgramming/index",id:"Rascalopedia/MetaProgramming/index",title:"MetaProgramming",description:"Synopsis",source:"@site/docs/Rascalopedia/MetaProgramming/index.md",sourceDirName:"Rascalopedia/MetaProgramming",slug:"/Rascalopedia/MetaProgramming/",permalink:"/docs/Rascalopedia/MetaProgramming/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascalopedia/MetaProgramming/index.md",tags:[],version:"current",frontMatter:{title:"MetaProgramming"},sidebar:"tutorialSidebar",previous:{title:"List",permalink:"/docs/Rascalopedia/List/"},next:{title:"ParseTree",permalink:"/docs/Rascalopedia/ParseTree/"}},p={},m=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],s={toc:m};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Analysis or transformation of one program by another program."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"All programs have data as input and produce other data as output.\nA typical example is a desktop calculator program:\nafter entering some numbers and operators, the program displays an answer.\nFor most programs the data are numeric (calculator, spreadsheet)\nor textual (text editor, word processor)."),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"metaprogram")," is a program that uses programs as data. Writing\nmetaprograms is called ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Metaprogramming"},"metaprogramming"),"."),(0,n.kt)("p",null,"A metaprogram has to be written in some programming language itself.\nThis is called the ",(0,n.kt)("em",{parentName:"p"},"metalanguage"),"."),(0,n.kt)("p",null,"The program that is manipulated by the metaprogram is called the ",(0,n.kt)("em",{parentName:"p"},"source program")," (also: ",(0,n.kt)("em",{parentName:"p"},"object program"),")\nand is written in the ",(0,n.kt)("em",{parentName:"p"},"source language")," (also: ",(0,n.kt)("em",{parentName:"p"},"object language"),")."),(0,n.kt)("p",null,"In some cases the metaprogram transforms the source program into a ",(0,n.kt)("em",{parentName:"p"},"target program")," in a ",(0,n.kt)("em",{parentName:"p"},"target language"),". "),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/Refactoring"},"Refactoring")," tool for restructuring Java code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metaprogram: the refactoring tool."),(0,n.kt)("li",{parentName:"ul"},"Metalanguage: in most cases Java."),(0,n.kt)("li",{parentName:"ul"},"Source program: the user's Java program to be refactored."),(0,n.kt)("li",{parentName:"ul"},"Source language: Java."),(0,n.kt)("li",{parentName:"ul"},"Target program: the refactored user's program."),(0,n.kt)("li",{parentName:"ul"},"Target language: Java.")),(0,n.kt)("p",null,"A Java ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/Compiler"},"Compiler"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metaprogram: the Java compiler."),(0,n.kt)("li",{parentName:"ul"},"Metalanguage: in most cases Java."),(0,n.kt)("li",{parentName:"ul"},"Source program: the user's Java program to be compiled."),(0,n.kt)("li",{parentName:"ul"},"Source language: Java."),(0,n.kt)("li",{parentName:"ul"},"Target program: the code that is generated by the compiler."),(0,n.kt)("li",{parentName:"ul"},"Target language: instructions for the JVM (Java Virtual Machine) or machine code, depending on the hardware platform.")),(0,n.kt)("p",null,"A tool to compute ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/SoftwareMetric"},"Software Metric"),"s of Java programs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metaprogram: the metrics tool."),(0,n.kt)("li",{parentName:"ul"},"Metalanguage: varies per tool: Java, Rascal."),(0,n.kt)("li",{parentName:"ul"},"Source program: the user's Java program for metrics will be computed."),(0,n.kt)("li",{parentName:"ul"},"Source language Java."),(0,n.kt)("li",{parentName:"ul"},"Target program: the value of the computed metric."),(0,n.kt)("li",{parentName:"ul"},"Target language: number.")))}c.isMDXComponent=!0}}]);