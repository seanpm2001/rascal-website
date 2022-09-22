"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[88201],{3905:(e,l,a)=>{a.d(l,{Zo:()=>c,kt:()=>y});var t=a(67294);function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){i(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function s(e,l){if(null==e)return{};var a,t,i=function(e,l){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(i[a]=e[a]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=t.createContext({}),o=function(e){var l=t.useContext(u),a=l;return e&&(a="function"==typeof e?e(l):n(n({},l),e)),a},c=function(e){var l=o(e.components);return t.createElement(u.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},b=t.forwardRef((function(e,l){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=o(a),y=i,k=b["".concat(u,".").concat(y)]||b[y]||d[y]||r;return a?t.createElement(k,n(n({ref:l},c),{},{components:a})):t.createElement(k,n({ref:l},c))}));function y(e,l){var a=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=b;var s={};for(var u in l)hasOwnProperty.call(l,u)&&(s[u]=l[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var o=2;o<r;o++)n[o]=a[o];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},25569:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=a(83117),i=(a(67294),a(3905));const r={title:"lang::rascal::tests::library::ValueIO"},n=void 0,s={unversionedId:"Library/lang/rascal/tests/library/ValueIO",id:"Library/lang/rascal/tests/library/ValueIO",title:"lang::rascal::tests::library::ValueIO",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/library/ValueIO.md",sourceDirName:"Library/lang/rascal/tests/library",slug:"/Library/lang/rascal/tests/library/ValueIO",permalink:"/docs/Library/lang/rascal/tests/library/ValueIO",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/library/ValueIO.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tests::library::ValueIO"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::library::Type",permalink:"/docs/Library/lang/rascal/tests/library/Type"},next:{title:"lang::rascal::tests::library::analysis",permalink:"/docs/Library/lang/rascal/tests/library/analysis/"}},u={},o=[{value:"Usage",id:"usage",level:4},{value:"data Bool",id:"lang-rascal-tests-library-ValueIO-Bool",level:2},{value:"data C",id:"lang-rascal-tests-library-ValueIO-C",level:2},{value:"data Maybe",id:"lang-rascal-tests-library-ValueIO-Maybe",level:2},{value:"alias X&T {#lang-rascal-tests-library-ValueIO-X&T}",id:"lang-rascal-tests-library-ValueIO-X&T",level:2},{value:"alias Y",id:"lang-rascal-tests-library-ValueIO-Y",level:2},{value:"function binaryWriteRead",id:"lang-rascal-tests-library-ValueIO-binaryWriteRead",level:2},{value:"function binBool",id:"lang-rascal-tests-library-ValueIO-binBool",level:2},{value:"function binInt",id:"lang-rascal-tests-library-ValueIO-binInt",level:2},{value:"function binReal",id:"lang-rascal-tests-library-ValueIO-binReal",level:2},{value:"function binStr1",id:"lang-rascal-tests-library-ValueIO-binStr1",level:2},{value:"function binStr2",id:"lang-rascal-tests-library-ValueIO-binStr2",level:2},{value:"function binLoc",id:"lang-rascal-tests-library-ValueIO-binLoc",level:2},{value:"function binList",id:"lang-rascal-tests-library-ValueIO-binList",level:2},{value:"function binSet",id:"lang-rascal-tests-library-ValueIO-binSet",level:2},{value:"function binMap",id:"lang-rascal-tests-library-ValueIO-binMap",level:2},{value:"function binTuple",id:"lang-rascal-tests-library-ValueIO-binTuple",level:2},{value:"function binAdt",id:"lang-rascal-tests-library-ValueIO-binAdt",level:2},{value:"function binParametrizedAdt1",id:"lang-rascal-tests-library-ValueIO-binParametrizedAdt1",level:2},{value:"function binParametrizedAdt2",id:"lang-rascal-tests-library-ValueIO-binParametrizedAdt2",level:2},{value:"function binParamAliasListInt",id:"lang-rascal-tests-library-ValueIO-binParamAliasListInt",level:2},{value:"function binParamAliasInt",id:"lang-rascal-tests-library-ValueIO-binParamAliasInt",level:2},{value:"function textWriteRead",id:"lang-rascal-tests-library-ValueIO-textWriteRead",level:2},{value:"function textParametrizedAdt1",id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt1",level:2},{value:"function textParametrizedAdt2",id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt2",level:2},{value:"function textParametrizedAdt3",id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt3",level:2},{value:"function textBool",id:"lang-rascal-tests-library-ValueIO-textBool",level:2},{value:"function textInt",id:"lang-rascal-tests-library-ValueIO-textInt",level:2},{value:"function textReal",id:"lang-rascal-tests-library-ValueIO-textReal",level:2},{value:"function textStr1",id:"lang-rascal-tests-library-ValueIO-textStr1",level:2},{value:"function textStr2",id:"lang-rascal-tests-library-ValueIO-textStr2",level:2},{value:"function textLoc",id:"lang-rascal-tests-library-ValueIO-textLoc",level:2},{value:"function textList",id:"lang-rascal-tests-library-ValueIO-textList",level:2},{value:"function textSet",id:"lang-rascal-tests-library-ValueIO-textSet",level:2},{value:"function textMap",id:"lang-rascal-tests-library-ValueIO-textMap",level:2},{value:"function textTuple",id:"lang-rascal-tests-library-ValueIO-textTuple",level:2},{value:"function textAdt",id:"lang-rascal-tests-library-ValueIO-textAdt",level:2},{value:"function valueText",id:"lang-rascal-tests-library-ValueIO-valueText",level:2},{value:"function nodeText",id:"lang-rascal-tests-library-ValueIO-nodeText",level:2},{value:"function strText",id:"lang-rascal-tests-library-ValueIO-strText",level:2},{value:"function mapText",id:"lang-rascal-tests-library-ValueIO-mapText",level:2},{value:"function setText",id:"lang-rascal-tests-library-ValueIO-setText",level:2},{value:"function listText",id:"lang-rascal-tests-library-ValueIO-listText",level:2},{value:"function tupleText",id:"lang-rascal-tests-library-ValueIO-tupleText",level:2},{value:"function numText",id:"lang-rascal-tests-library-ValueIO-numText",level:2},{value:"function valueBinary",id:"lang-rascal-tests-library-ValueIO-valueBinary",level:2},{value:"function nodeBinary",id:"lang-rascal-tests-library-ValueIO-nodeBinary",level:2},{value:"function strBinary",id:"lang-rascal-tests-library-ValueIO-strBinary",level:2},{value:"function mapBinary",id:"lang-rascal-tests-library-ValueIO-mapBinary",level:2},{value:"function setBinary",id:"lang-rascal-tests-library-ValueIO-setBinary",level:2},{value:"function listBinary",id:"lang-rascal-tests-library-ValueIO-listBinary",level:2},{value:"function tupleBinary",id:"lang-rascal-tests-library-ValueIO-tupleBinary",level:2},{value:"function numBinary",id:"lang-rascal-tests-library-ValueIO-numBinary",level:2},{value:"function disablingCompressionWorks",id:"lang-rascal-tests-library-ValueIO-disablingCompressionWorks",level:2},{value:"data NestedValue",id:"lang-rascal-tests-library-ValueIO-NestedValue",level:2},{value:"function disablingCompressionWorksWithSharedValues",id:"lang-rascal-tests-library-ValueIO-disablingCompressionWorksWithSharedValues",level:2},{value:"function writingParseTreeWorks",id:"lang-rascal-tests-library-ValueIO-writingParseTreeWorks",level:2},{value:"function writingParseTreeWorksWithoutCompression",id:"lang-rascal-tests-library-ValueIO-writingParseTreeWorksWithoutCompression",level:2},{value:"alias XX",id:"lang-rascal-tests-library-ValueIO-XX",level:2},{value:"data ExtraAliases",id:"lang-rascal-tests-library-ValueIO-ExtraAliases",level:2},{value:"function aliasesNested",id:"lang-rascal-tests-library-ValueIO-aliasesNested",level:2},{value:"function binaryWriteRead",id:"lang-rascal-tests-library-ValueIO-binaryWriteRead",level:2},{value:"function reifyBool",id:"lang-rascal-tests-library-ValueIO-reifyBool",level:2},{value:"function reifyStr",id:"lang-rascal-tests-library-ValueIO-reifyStr",level:2},{value:"function reifyInt",id:"lang-rascal-tests-library-ValueIO-reifyInt",level:2},{value:"function reifyReal",id:"lang-rascal-tests-library-ValueIO-reifyReal",level:2},{value:"function reifyRat",id:"lang-rascal-tests-library-ValueIO-reifyRat",level:2},{value:"function reifyNum",id:"lang-rascal-tests-library-ValueIO-reifyNum",level:2},{value:"function reifyNode",id:"lang-rascal-tests-library-ValueIO-reifyNode",level:2},{value:"function reifyVoid",id:"lang-rascal-tests-library-ValueIO-reifyVoid",level:2},{value:"function reifyValue",id:"lang-rascal-tests-library-ValueIO-reifyValue",level:2},{value:"function reifyList",id:"lang-rascal-tests-library-ValueIO-reifyList",level:2},{value:"function reifySet",id:"lang-rascal-tests-library-ValueIO-reifySet",level:2},{value:"function reifyLrel1",id:"lang-rascal-tests-library-ValueIO-reifyLrel1",level:2},{value:"function reifyLrel2",id:"lang-rascal-tests-library-ValueIO-reifyLrel2",level:2},{value:"function reifyRel1",id:"lang-rascal-tests-library-ValueIO-reifyRel1",level:2},{value:"function reifyRel2",id:"lang-rascal-tests-library-ValueIO-reifyRel2",level:2},{value:"function reifyMap1",id:"lang-rascal-tests-library-ValueIO-reifyMap1",level:2},{value:"function reifyMap2",id:"lang-rascal-tests-library-ValueIO-reifyMap2",level:2},{value:"function reifyFun1",id:"lang-rascal-tests-library-ValueIO-reifyFun1",level:2},{value:"function reifyFun2",id:"lang-rascal-tests-library-ValueIO-reifyFun2",level:2},{value:"function reifyPar1",id:"lang-rascal-tests-library-ValueIO-reifyPar1",level:2},{value:"function reifyPar2",id:"lang-rascal-tests-library-ValueIO-reifyPar2",level:2},{value:"alias A&T {#lang-rascal-tests-library-ValueIO-A&T}",id:"lang-rascal-tests-library-ValueIO-A&T",level:2},{value:"alias B&T {#lang-rascal-tests-library-ValueIO-B&T}",id:"lang-rascal-tests-library-ValueIO-B&T",level:2},{value:"function reifyAlias1",id:"lang-rascal-tests-library-ValueIO-reifyAlias1",level:2},{value:"function reifyAlias2",id:"lang-rascal-tests-library-ValueIO-reifyAlias2",level:2}],c={toc:o};function d(e){let{components:l,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::library::ValueIO;")),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-Bool"},"data Bool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},'data Bool (str def = "2") \n     = btrue()\n     | bfalse(bool falsity = true)\n     | band(Bool left, Bool right)\n     | bor(Bool left, Bool right)\n     ;\n')),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-C"},"data C"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data C  \n     = c(Maybe[int] i)\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-Maybe"},"data Maybe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data Maybe[&T]  \n     = none()\n     | some(&T t)\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-X&T"},"alias X","[&T]"," {#lang-rascal-tests-library-ValueIO-X","[&T]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[&T]"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-Y"},"alias Y"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binaryWriteRead"},"function binaryWriteRead"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool  binaryWriteRead(type[&T] _, value exp)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binBool"},"function binBool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binBool()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binInt"},"function binInt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binInt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binReal"},"function binReal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binReal()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binStr1"},"function binStr1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binStr1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binStr2"},"function binStr2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binStr2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binLoc"},"function binLoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binLoc()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binList"},"function binList"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binList()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binSet"},"function binSet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binSet()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binMap"},"function binMap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binMap()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binTuple"},"function binTuple"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binTuple()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binAdt"},"function binAdt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binAdt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binParametrizedAdt1"},"function binParametrizedAdt1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binParametrizedAdt1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binParametrizedAdt2"},"function binParametrizedAdt2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binParametrizedAdt2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binParamAliasListInt"},"function binParamAliasListInt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binParamAliasListInt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binParamAliasInt"},"function binParamAliasInt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool binParamAliasInt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textWriteRead"},"function textWriteRead"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool textWriteRead(type[&T] g, value exp)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt1"},"function textParametrizedAdt1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textParametrizedAdt1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt2"},"function textParametrizedAdt2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textParametrizedAdt2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textParametrizedAdt3"},"function textParametrizedAdt3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textParametrizedAdt3()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textBool"},"function textBool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textBool()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textInt"},"function textInt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textInt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textReal"},"function textReal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textReal()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textStr1"},"function textStr1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textStr1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textStr2"},"function textStr2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textStr2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textLoc"},"function textLoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textLoc()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textList"},"function textList"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textList()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textSet"},"function textSet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textSet()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textMap"},"function textMap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textMap()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textTuple"},"function textTuple"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textTuple()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-textAdt"},"function textAdt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool textAdt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-valueText"},"function valueText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool valueText(value v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-nodeText"},"function nodeText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool nodeText(node v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-strText"},"function strText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool strText(str v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-mapText"},"function mapText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool mapText(map[value, value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-setText"},"function setText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool setText(set[value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-listText"},"function listText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool listText(list[value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-tupleText"},"function tupleText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool tupleText(tuple[value,value,value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-numText"},"function numText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool numText(num v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-valueBinary"},"function valueBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool valueBinary(value v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-nodeBinary"},"function nodeBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool nodeBinary(node v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-strBinary"},"function strBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool strBinary(str v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-mapBinary"},"function mapBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool mapBinary(map[value, value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-setBinary"},"function setBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool setBinary(set[value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-listBinary"},"function listBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool listBinary(list[value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-tupleBinary"},"function tupleBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool tupleBinary(tuple[value,value,value] v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-numBinary"},"function numBinary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool numBinary(num v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-disablingCompressionWorks"},"function disablingCompressionWorks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool disablingCompressionWorks(value v)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-NestedValue"},"data NestedValue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data NestedValue  \n     = inAList(list[value] lvs)\n     | inASet(set[value] svs)\n     | inItself(NestedValue nv)\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-disablingCompressionWorksWithSharedValues"},"function disablingCompressionWorksWithSharedValues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool disablingCompressionWorksWithSharedValues(set[NestedValue] a, set[NestedValue] b, NestedValue c, value d)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-writingParseTreeWorks"},"function writingParseTreeWorks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writingParseTreeWorks()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-writingParseTreeWorksWithoutCompression"},"function writingParseTreeWorksWithoutCompression"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writingParseTreeWorksWithoutCompression()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-XX"},"alias XX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loc"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-ExtraAliases"},"data ExtraAliases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data ExtraAliases  \n     = al0(int x)\n     | al1(rel[XX, str, ExtraAliases] dt)\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-aliasesNested"},"function aliasesNested"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool aliasesNested(ExtraAliases e)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-binaryWriteRead"},"function binaryWriteRead"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool  binaryWriteRead(type[&T] typ)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyBool"},"function reifyBool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyBool()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyStr"},"function reifyStr"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyStr()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyInt"},"function reifyInt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyInt()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyReal"},"function reifyReal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyReal()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyRat"},"function reifyRat"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyRat()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyNum"},"function reifyNum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyNum()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyNode"},"function reifyNode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyNode()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyVoid"},"function reifyVoid"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyVoid()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyValue"},"function reifyValue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyValue()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyList"},"function reifyList"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyList()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifySet"},"function reifySet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifySet()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyLrel1"},"function reifyLrel1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyLrel1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyLrel2"},"function reifyLrel2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyLrel2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyRel1"},"function reifyRel1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyRel1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyRel2"},"function reifyRel2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyRel2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyMap1"},"function reifyMap1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyMap1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyMap2"},"function reifyMap2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyMap2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyFun1"},"function reifyFun1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyFun1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyFun2"},"function reifyFun2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyFun2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyPar1"},"function reifyPar1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyPar1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyPar2"},"function reifyPar2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyPar2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-A&T"},"alias A","[&T]"," {#lang-rascal-tests-library-ValueIO-A","[&T]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[&T]"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-B&T"},"alias B","[&T]"," {#lang-rascal-tests-library-ValueIO-B","[&T]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[A[&T]]"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyAlias1"},"function reifyAlias1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyAlias1()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-library-ValueIO-reifyAlias2"},"function reifyAlias2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool reifyAlias2()"))))}d.isMDXComponent=!0}}]);