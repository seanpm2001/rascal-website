"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[79645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,N=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(83117),o=(n(67294),n(3905));const r={title:"module Node"},l=void 0,i={unversionedId:"Library/Node",id:"Library/Node",title:"module Node",description:"Usage",source:"@site/docs/Library/Node.md",sourceDirName:"Library",slug:"/Library/Node",permalink:"/docs/Library/Node",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/Node.md",tags:[],version:"current",frontMatter:{title:"module Node"},sidebar:"tutorialSidebar",previous:{title:"module Message",permalink:"/docs/Library/Message"},next:{title:"module ParseTree",permalink:"/docs/Library/ParseTree"}},s={},d=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function arity",id:"Node-arity",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Examples",id:"examples",level:4},{value:"function getChildren",id:"Node-getChildren",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"function getKeywordParameters",id:"Node-getKeywordParameters",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Examples",id:"examples-2",level:4},{value:"function getAnnotations",id:"Node-getAnnotations",level:2},{value:"function setKeywordParameters",id:"Node-setKeywordParameters",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Examples",id:"examples-3",level:4},{value:"function setAnnotations",id:"Node-setAnnotations",level:2},{value:"function getName",id:"Node-getName",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Examples",id:"examples-4",level:4},{value:"function makeNode",id:"Node-makeNode",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Examples",id:"examples-5",level:4},{value:"function unset",id:"Node-unset",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"function delAnnotation",id:"Node-delAnnotation",level:2},{value:"function unset",id:"Node-unset",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"function delAnnotations",id:"Node-delAnnotations",level:2},{value:"function unsetRec",id:"Node-unsetRec",level:2},{value:"Synopsis",id:"synopsis-9",level:4},{value:"function delAnnotationsRec",id:"Node-delAnnotationsRec",level:2},{value:"function unsetRec",id:"Node-unsetRec",level:2},{value:"Synopsis",id:"synopsis-10",level:4},{value:"function arbNode",id:"Node-arbNode",level:2},{value:"function toString",id:"Node-toString",level:2},{value:"Synopsis",id:"synopsis-11",level:4},{value:"Examples",id:"examples-6",level:4},{value:"function itoString",id:"Node-itoString",level:2},{value:"Synopsis",id:"synopsis-12",level:4},{value:"Examples",id:"examples-7",level:4}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import Node;")),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Library functions for nodes."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"For operators on nodes see ",(0,o.kt)("a",{parentName:"p",href:"../Rascal/Expressions/Values/Node"},"Node")," in the Rascal Language Reference."),(0,o.kt)("p",null,"The following functions are defined for nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-arbNode"},"Library:function:Node::arb node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-arity"},"Library:function:Node::arity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-delAnnotation"},"Library:function:Node::del annotation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-delAnnotations"},"Library:function:Node::del annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-delAnnotationsRec"},"Library:function:Node::del annotations rec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-getAnnotations"},"Library:function:Node::get annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-getChildren"},"Library:function:Node::get children")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-getKeywordParameters"},"Library:function:Node::get keyword parameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-getName"},"Library:function:Node::get name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-itoString"},"Library:function:Node::ito string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-makeNode"},"Library:function:Node::make node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-setAnnotations"},"Library:function:Node::set annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-setKeywordParameters"},"Library:function:Node::set keyword parameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-toString"},"Library:function:Node::to string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-unset"},"Library:function:Node::unset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Library/Node#Node-unsetRec"},"Library:function:Node::unset rec"))),(0,o.kt)("h2",{id:"Node-arity"},"function arity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int arity(node T)"))),(0,o.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,o.kt)("p",null,"Determine the number of children of a node."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>arity("f"(10, "abc"));\nint: 2\nrascal>arity("f"(10, "abc", false));\nint: 3\n')),(0,o.kt)("h2",{id:"Node-getChildren"},"function getChildren"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list[value] getChildren(node T)"))),(0,o.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,o.kt)("p",null,"Get the children of a node."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>getChildren("f"(10, "abc"));\nlist[value]: [10,"abc"]\n')),(0,o.kt)("h2",{id:"Node-getKeywordParameters"},"function getKeywordParameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"map[str,value] getKeywordParameters(node T)"))),(0,o.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,o.kt)("p",null,"Get the keyword parameters of a node."),(0,o.kt)("h4",{id:"examples-2"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>getKeywordParameters("f"(10, "abc", height=0));\nmap[str, value]: ("height":0)\n')),(0,o.kt)("h2",{id:"Node-getAnnotations"},"function getAnnotations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"map[str, value] getAnnotations(node T)"))),(0,o.kt)("h2",{id:"Node-setKeywordParameters"},"function setKeywordParameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node setKeywordParameters(&T <: node x, map[str,value] keywordParameters)"))),(0,o.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,o.kt)("p",null,"Set the keyword parameters of a node."),(0,o.kt)("h4",{id:"examples-3"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>setKeywordParameters("f"(10, "abc"), ("height":0));\nnode: "f"(10,"abc",\n  height=0)\n')),(0,o.kt)("h2",{id:"Node-setAnnotations"},"function setAnnotations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node setAnnotations(&T <: node x, map[str,value] keywordParameters)"))),(0,o.kt)("h2",{id:"Node-getName"},"function getName"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"str getName(node T)"))),(0,o.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,o.kt)("p",null,"Determine the name of a node."),(0,o.kt)("h4",{id:"examples-4"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>getName("f"(10, "abc"));\nstr: "f"\n')),(0,o.kt)("h2",{id:"Node-makeNode"},"function makeNode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node makeNode(str N, value V..., map[str, value] keywordParameters = ())"))),(0,o.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,o.kt)("p",null,"Create a node given its function name and arguments."),(0,o.kt)("h4",{id:"examples-5"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>makeNode("f", [10, "abc"]);\nnode: "f"(10,"abc")\n')),(0,o.kt)("h2",{id:"Node-unset"},"function unset"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node unset(&T <: node x, str keywordParameter)"))),(0,o.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,o.kt)("p",null,"Reset a specific keyword parameter back to their default on a node."),(0,o.kt)("h2",{id:"Node-delAnnotation"},"function delAnnotation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node delAnnotation(&T <:  node x, str keywordParameter)"))),(0,o.kt)("h2",{id:"Node-unset"},"function unset"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node unset(&T <: node x, set[str] keywordParameters)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node unset(&T <: node x)"))),(0,o.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,o.kt)("p",null,"Reset a set of keyword parameters back to their default on a node."),(0,o.kt)("h2",{id:"Node-delAnnotations"},"function delAnnotations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node delAnnotations(&T <: node x)"))),(0,o.kt)("h2",{id:"Node-unsetRec"},"function unsetRec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T unsetRec(&T x)"))),(0,o.kt)("h4",{id:"synopsis-9"},"Synopsis"),(0,o.kt)("p",null,"Recursively reset all keyword parameters of the node and its children back to their default."),(0,o.kt)("h2",{id:"Node-delAnnotationsRec"},"function delAnnotationsRec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T delAnnotationsRec(&T x)"))),(0,o.kt)("h2",{id:"Node-unsetRec"},"function unsetRec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T unsetRec(&T x, str keywordParameter)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&T <: node unsetRec(&T <: node x, set[str] keywordParameters)"))),(0,o.kt)("h4",{id:"synopsis-10"},"Synopsis"),(0,o.kt)("p",null,"Recursively reset a specific keyword parameter of the node and its children back to its default."),(0,o.kt)("h2",{id:"Node-arbNode"},"function arbNode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node arbNode()"))),(0,o.kt)("h2",{id:"Node-toString"},"function toString"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"str toString(node T)"))),(0,o.kt)("h4",{id:"synopsis-11"},"Synopsis"),(0,o.kt)("p",null,"Convert a node to a string."),(0,o.kt)("h4",{id:"examples-6"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>F = "f"(10, "abc", color="red", size="large");\nnode: "f"(10,"abc",\n  size="large",\n  color="red")\nrascal>toString(F);\nstr: "\\"f\\"(10,\\"abc\\",size=\\"large\\",color=\\"red\\")"\n')),(0,o.kt)("h2",{id:"Node-itoString"},"function itoString"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"str itoString(node T)"))),(0,o.kt)("h4",{id:"synopsis-12"},"Synopsis"),(0,o.kt)("p",null,"Convert a node to an indented string."),(0,o.kt)("h4",{id:"examples-7"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Node;\nok\nrascal>F = "f"(10, "abc", color="red", size="large");\nnode: "f"(10,"abc",\n  size="large",\n  color="red")\nrascal>itoString(F);\nstr: "\\"f\\"(10,\\"abc\\",\\n  size=\\"large\\",\\n  color=\\"red\\")"\n')))}p.isMDXComponent=!0}}]);