"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70274],{3905:(e,t,l)=>{l.d(t,{Zo:()=>v,kt:()=>g});var a=l(67294);function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,s=function(e,t){if(null==e)return{};var l,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(s[l]=e[l]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(s[l]=e[l])}return s}var c=a.createContext({}),o=function(e){var t=a.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},v=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var l=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,v=i(e,["components","mdxType","originalType","parentName"]),p=o(l),g=s,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||n;return l?a.createElement(d,r(r({ref:t},v),{},{components:l})):a.createElement(d,r({ref:t},v))}));function g(e,t){var l=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=l.length,r=new Array(n);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var o=2;o<n;o++)r[o]=l[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},26675:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=l(83117),s=(l(67294),l(3905));const n={title:"module lang::rascal::tests::library::lang::csv::CSVIOTests"},r=void 0,i={unversionedId:"Library/lang/rascal/tests/library/lang/csv/CSVIOTests",id:"Library/lang/rascal/tests/library/lang/csv/CSVIOTests",title:"module lang::rascal::tests::library::lang::csv::CSVIOTests",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/library/lang/csv/CSVIOTests.md",sourceDirName:"Library/lang/rascal/tests/library/lang/csv",slug:"/Library/lang/rascal/tests/library/lang/csv/CSVIOTests",permalink:"/docs/Library/lang/rascal/tests/library/lang/csv/CSVIOTests",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/library/lang/csv/CSVIOTests.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::library::lang::csv::CSVIOTests"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::library::lang::csv",permalink:"/docs/Library/lang/rascal/tests/library/lang/csv/"},next:{title:"lang::rascal::tests::library::lang::java",permalink:"/docs/Library/lang/rascal/tests/library/lang/java/"}},c={},o=[{value:"Usage",id:"usage",level:4},{value:"function readWrite",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-readWrite",level:2},{value:"function fixAmbStrings",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-fixAmbStrings",level:2},{value:"function csvBooleanInfer",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvBooleanInfer",level:2},{value:"function csvBoolean",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvBoolean",level:2},{value:"function csvDateTime",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvDateTime",level:2},{value:"function csvWithLoc",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithLoc",level:2},{value:"function csvWithStr",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithStr",level:2},{value:"function csvWithList",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithList",level:2},{value:"function csvWithSet",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithSet",level:2},{value:"function csvWithMap",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithMap",level:2},{value:"function csvWithNode",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithNode",level:2},{value:"function csvMoreTuples",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreTuples",level:2},{value:"function csvMoreRandomTypes",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreRandomTypes",level:2},{value:"function checkType",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-checkType",level:2},{value:"function csvTypeInference1",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference1",level:2},{value:"function csvTypeInference2",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference2",level:2},{value:"function csvTypeInference3",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference3",level:2},{value:"function createString",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-createString",level:2},{value:"function normalData",id:"lang-rascal-tests-library-lang-csv-CSVIOTests-normalData",level:2}],v={toc:o};function u(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,a.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::library::lang::csv::CSVIOTests;")),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-readWrite"},"function readWrite"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool readWrite(set[&T] dt)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool readWrite(type[&T] returnType, set[&T1] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-fixAmbStrings"},"function fixAmbStrings"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"&T fixAmbStrings(&T v)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvBooleanInfer"},"function csvBooleanInfer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvBooleanInfer()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvBoolean"},"function csvBoolean"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvBoolean()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvDateTime"},"function csvDateTime"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvDateTime()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithLoc"},"function csvWithLoc"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithLoc(rel[loc first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithStr"},"function csvWithStr"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithStr(rel[str first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithList"},"function csvWithList"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithList(rel[list[&T] first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithSet"},"function csvWithSet"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithSet(rel[set[&T] first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithMap"},"function csvWithMap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithMap(rel[map[&T, &Y] first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithNode"},"function csvWithNode"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvWithNode(rel[node first, int second] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreTuples"},"function csvMoreTuples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvMoreTuples(rel[str a, str b, int c, bool d, real e] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreRandomTypes"},"function csvMoreRandomTypes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvMoreRandomTypes(rel[loc a, loc b, int c, str d, loc e] dt)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-checkType"},"function checkType"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool checkType(type[value] expected, str input)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference1"},"function csvTypeInference1"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvTypeInference1()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference2"},"function csvTypeInference2"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvTypeInference2()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference3"},"function csvTypeInference3"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool csvTypeInference3()"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-createString"},"function createString"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"str createString(int j)"))),(0,s.kt)("h2",{id:"lang-rascal-tests-library-lang-csv-CSVIOTests-normalData"},"function normalData"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test bool normalData()"))))}u.isMDXComponent=!0}}]);