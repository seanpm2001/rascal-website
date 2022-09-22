"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[88289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(n),N=l,k=m["".concat(p,".").concat(N)]||m[N]||u[N]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(83117),l=(n(67294),n(3905));const r={title:"Node Slice",keywords:["[","..","]"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/Node/Slice/index",id:"Rascal/Expressions/Values/Node/Slice/index",title:"Node Slice",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Node/Slice/index.md",sourceDirName:"Rascal/Expressions/Values/Node/Slice",slug:"/Rascal/Expressions/Values/Node/Slice/",permalink:"/docs/Rascal/Expressions/Values/Node/Slice/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Node/Slice/index.md",tags:[],version:"current",frontMatter:{title:"Node Slice",keywords:["[","..","]"]},sidebar:"tutorialSidebar",previous:{title:"Node NotEqual",permalink:"/docs/Rascal/Expressions/Values/Node/NotEqual/"},next:{title:"Node Subscription",permalink:"/docs/Rascal/Expressions/Values/Node/Subscription/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Retrieve a slice of a node's argument list."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub>]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp3 .. Exp<sub>4</sub>]"))),(0,l.kt)("p",null,"where ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," and ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"4")," are optional."),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>3</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>4</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub> ]"),"   or  ",(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list[value]"))))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"A Node slice is similar to a list ",(0,l.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/List/Slice"},"Slice")," and uses the integer values of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," and ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"4")," to determine the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," (",(0,l.kt)("em",{parentName:"p"},"inclusive"),") and ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," (",(0,l.kt)("em",{parentName:"p"},"exclusive"),")\nof a slice from the children of the node value ",(0,l.kt)("em",{parentName:"p"},"ND")," of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"1"),". Negative indices count from the end of the list of children backwards.\nUsing the second form, an extra index ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"3")," is given that determines the\nindex of the second element in the slice and establishes the ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," between\nsuccessive elements in the slice. The default ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," is 1.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," is smaller than ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", the slice is constructed backwards."),(0,l.kt)("p",null,"Let ",(0,l.kt)("inlineCode",{parentName:"p"},"Len")," be the number of children of ",(0,l.kt)("em",{parentName:"p"},"ND")," and let ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"2"),", ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"3")," and ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"4")," be the respective values of the expressions\n",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2"),", ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," and ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," when they are present."),(0,l.kt)("p",null,"The slice parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," are determined as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"2")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"2"))," is absent, then ",(0,l.kt)("inlineCode",{parentName:"strong"},"begin = 0"),".\n"),"  Otherwise, if ",(0,l.kt)("em",{parentName:"li"},"N",(0,l.kt)("sub",null,"2"))," >= 0 then ",(0,l.kt)("inlineCode",{parentName:"li"},"begin = N<sub>2</sub>")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"begin = N<sub>2</sub> + Len"),". "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"4")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"4"))," is absent, then ",(0,l.kt)("inlineCode",{parentName:"strong"},"end = Len"),".\n"),"  Otherwise, if ",(0,l.kt)("em",{parentName:"li"},"N",(0,l.kt)("sub",null,"4"))," >= 0, then ",(0,l.kt)("inlineCode",{parentName:"li"},"end = N<sub>4</sub>")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"end = N<sub>4</sub> + Len"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"3")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"3"))," is absent, then if ",(0,l.kt)("inlineCode",{parentName:"strong"},"begin < end")," then ",(0,l.kt)("inlineCode",{parentName:"strong"},"step = 1")," else ",(0,l.kt)("inlineCode",{parentName:"strong"},"step = -1"),".\n"),"  Otherwise, if ",(0,l.kt)("inlineCode",{parentName:"li"},"begin < end"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"step = N<sub>3</sub> - begin")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"step = begin - N<sub>3</sub>"),".")),(0,l.kt)("p",null,"Now, the constraints ",(0,l.kt)("inlineCode",{parentName:"p"},"0 <= begin < Len")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"0 < end < Len")," should hold,\notherwise the exception ",(0,l.kt)("inlineCode",{parentName:"p"},"IndexOutOfBounds")," is thrown."),(0,l.kt)("p",null,"The slice consists of the children ",(0,l.kt)("inlineCode",{parentName:"p"},"ND[begin]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ND[begin+step]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ND[end - step]"),".\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"begin >= end"),", the elements are listed in reverse order."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Consider the list ",(0,l.kt)("inlineCode",{parentName:"p"},'ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);')," as running example."),(0,l.kt)("p",null,"Here is a view on the children of ",(0,l.kt)("em",{parentName:"p"},"ND")," that will help to correlate positive and negative indices:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"i")),(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[i]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"abc"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[3,4,5]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"a", "b"}')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-i")),(0,l.kt)("td",{parentName:"tr",align:null},"-9"),(0,l.kt)("td",{parentName:"tr",align:null},"-8"),(0,l.kt)("td",{parentName:"tr",align:null},"-7"),(0,l.kt)("td",{parentName:"tr",align:null},"-6"),(0,l.kt)("td",{parentName:"tr",align:null},"-5"),(0,l.kt)("td",{parentName:"tr",align:null},"-4"),(0,l.kt)("td",{parentName:"tr",align:null},"-3"),(0,l.kt)("td",{parentName:"tr",align:null},"-2"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")))),(0,l.kt)("p",null,"Some common use cases (with ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," <= ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slice"),(0,l.kt)("th",{parentName:"tr",align:null},"Means:"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[begin..end]")),(0,l.kt)("td",{parentName:"tr",align:null},"children with indices ",(0,l.kt)("inlineCode",{parentName:"td"},"begin")," through ",(0,l.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[begin..]")),(0,l.kt)("td",{parentName:"tr",align:null},"children with indices ",(0,l.kt)("inlineCode",{parentName:"td"},"begin")," through the rest of the list of children")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[..end]")),(0,l.kt)("td",{parentName:"tr",align:null},"children with indices from the beginning through ",(0,l.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[..]")),(0,l.kt)("td",{parentName:"tr",align:null},"the whole list of children")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[-1]")),(0,l.kt)("td",{parentName:"tr",align:null},"last child of the list of children")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[-2..]")),(0,l.kt)("td",{parentName:"tr",align:null},"the last two children of the list of children")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ND[..-2]")),(0,l.kt)("td",{parentName:"tr",align:null},"all children except the last two.")))),(0,l.kt)("p",null,"Let's put this into practice now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);\nnode: "f"(\n  0,\n  "abc",\n  20,\n  false,\n  40,\n  [3,4,5],\n  60,\n  {"a","b"},\n  80)\n')),(0,l.kt)("p",null,"Slices with begin < end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>ND[1..3];\nlist[value]: ["abc",20]\nrascal>ND[1..];       // empty end => end of list of children\nlist[value]: [\n  "abc",\n  20,\n  false,\n  40,\n  [3,4,5],\n  60,\n  {"a","b"},\n  80\n]\nrascal>ND[..3];       // empty begin => first child of list\nlist[value]: [0,"abc",20]\nrascal>ND[..];        // both empty => whole list of children\nlist[value]: [\n  0,\n  "abc",\n  20,\n  false,\n  40,\n  [3,4,5],\n  60,\n  {"a","b"},\n  80\n]\n')),(0,l.kt)("p",null,"Slices with  begin >= end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>ND[3..1];      // slice contains children with indices 3 and 2 (in that order)\nlist[value]: [false,20]\nrascal>ND[3..3];      // empty slice when begin == end\nlist[value]: []\n")),(0,l.kt)("p",null,"Slices with negative begin or end:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>ND[2..-2];     // equivalent to ND[2..7]\nlist[value]: [\n  20,\n  false,\n  40,\n  [3,4,5],\n  60\n]\nrascal>ND[2..7];\nlist[value]: [\n  20,\n  false,\n  40,\n  [3,4,5],\n  60\n]\nrascal>ND[-4..-2];    // equivalent to ND[5..7]\nlist[value]: [\n  [3,4,5],\n  60\n]\nrascal>ND[5..7];\nlist[value]: [\n  [3,4,5],\n  60\n]\n")),(0,l.kt)("p",null,"Slices with an explicit second index:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>ND[1,3..6];\nlist[value]: [\n  "abc",\n  false,\n  [3,4,5]\n]\nrascal>ND[5,3..];\nlist[value]: [\n  [3,4,5],\n  false,\n  "abc"\n]\n')),(0,l.kt)("p",null,"Explore error cases:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>ND[..10];\nlist[value]: [\n  0,\n  "abc",\n  20,\n  false,\n  40,\n  [3,4,5],\n  60,\n  {"a","b"},\n  80\n]\nrascal>ND[1..20];\nlist[value]: [\n  "abc",\n  20,\n  false,\n  40,\n  [3,4,5],\n  60,\n  {"a","b"},\n  80\n]\n')))}u.isMDXComponent=!0}}]);