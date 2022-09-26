"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[56893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Set Pattern",keywords:["{","}"]},s=void 0,i={unversionedId:"Rascal/Patterns/Set/index",id:"Rascal/Patterns/Set/index",title:"Set Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/Set/index.md",sourceDirName:"Rascal/Patterns/Set",slug:"/Rascal/Patterns/Set/",permalink:"/docs/Rascal/Patterns/Set/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Patterns/Set/index.md",tags:[],version:"current",frontMatter:{title:"Set Pattern",keywords:["{","}"]},sidebar:"tutorialSidebar",previous:{title:"Regular Expression Pattern",permalink:"/docs/Rascal/Patterns/Regular/"},next:{title:"Tuple Pattern",permalink:"/docs/Rascal/Patterns/Tuple/"}},c={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Set in abstract pattern."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A set pattern matches a set value (the subject), provided that ",(0,r.kt)("em",{parentName:"p"},"Pat"),"\u2081, ",(0,r.kt)("em",{parentName:"p"},"Pat"),"\u2082, ..., ",(0,r.kt)("em",{parentName:"p"},"Pat"),"\u2099 match the elements of that set in ",(0,r.kt)("em",{parentName:"p"},"any")," order\n(recall that the elements of a set are unordered and do not contain duplicates).\nCompletely analogous to list patterns, there are special cases when one of the patterns ",(0,r.kt)("em",{parentName:"p"},"Pat"),"\u1d62 is"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/VariableDeclaration/"},"VariableDeclaration")," with a type that is identical to the element type of the subject set: the variable is matched with one value  in the subject set.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/MultiVariable/"},"MultiVariable"),", with an optional element type that is identical to the element type of the subject set: set matching is applied and the variable can match an arbitrary number (in arbitrary order) of elements of the subject set.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/Variable/"},"Variable"),", where the variable has been declared with a set type, but not initialized, outside the pattern: set matching is applied and the variable can match an arbitrary number (in arbitrary order) of elements of the subject set.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/Variable/"},"Variable"),", where the variable has been declared with a type equal to the element type of the subject, but not initialized, outside the pattern: the variable is matched with one value in the subject set."))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>if({10, 30, 40, 50, int N} := {10, 20, 30, 40, 50})\n>>>>>>>   println("Match succeeded, N = <N>");\n   println("Match succeeded, N = <N>");\nMatch succeeded, N = 20\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An untyped multi-variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>if({10, *S, 50} := {50, 40, 30, 20, 10})\n>>>>>>>   println("Match succeeded, S = <S>");\n   println("Match succeeded, S = <S>");\nMatch succeeded, S = {40,20,30}\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A typed multi-variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>if({10, *int S, 50} := {50, 40, 30, 20, 10})\n>>>>>>>   println("Match succeeded, S = <S>");\n   println("Match succeeded, S = <S>");\nMatch succeeded, S = {40,20,30}\nok\n')),(0,r.kt)("p",null,"Here we see an example, where all possible splits of a set in two subsets are printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>for({*S1, *S2} :={30, 20, 10})\n>>>>>>>    println("<S1> and <S2>");\n    println("<S1> and <S2>");\n{10,20,30} and {}\n{10,20} and {30}\n{10,30} and {20}\n{10} and {20,30}\n{20,30} and {10}\n{20} and {10,30}\n{30} and {10,20}\n{} and {10,20,30}\nlist[void]: []\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Already declared set variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>set[int] S;\nok\nrascal>if({10, *S, 50} := {10, 20, 30, 40, 50})\n>>>>>>>   println("Match succeeded, S = <S>");\n   println("Match succeeded, S = <S>");\nMatch succeeded, S = {40,20,30}\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Already declared element variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>int N;\nok\nrascal>if({10, N, 30, 40, 50} := {50, 40, 30, 20, 10})\n>>>>>>>   println("Match succeeded, N = <N>");\n   println("Match succeeded, N = <N>");\nMatch succeeded, N = 20\nok\n')))}u.isMDXComponent=!0}}]);