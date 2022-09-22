"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[47547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=o(n),p=i,b=f["".concat(c,".").concat(p)]||f[p]||u[p]||l;return n?a.createElement(b,s(s({ref:t},d),{},{components:n})):a.createElement(b,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=n(83117),i=(n(67294),n(3905));const l={title:"lang::rascal::tests::basic::IO"},s=void 0,r={unversionedId:"Library/lang/rascal/tests/basic/IO",id:"Library/lang/rascal/tests/basic/IO",title:"lang::rascal::tests::basic::IO",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/IO.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/IO",permalink:"/docs/Library/lang/rascal/tests/basic/IO",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/tests/basic/IO.md",tags:[],version:"current",frontMatter:{title:"lang::rascal::tests::basic::IO"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::basic::Generics",permalink:"/docs/Library/lang/rascal/tests/basic/Generics"},next:{title:"lang::rascal::tests::basic::Integers",permalink:"/docs/Library/lang/rascal/tests/basic/Integers"}},c={},o=[{value:"Usage",id:"usage",level:4},{value:"function writeReadFile",id:"lang-rascal-tests-basic-IO-writeReadFile",level:2},{value:"function writeReadValue",id:"lang-rascal-tests-basic-IO-writeReadValue",level:2},{value:"data Encoding",id:"lang-rascal-tests-basic-IO-Encoding",level:2},{value:"function correctEncoding",id:"lang-rascal-tests-basic-IO-correctEncoding",level:2},{value:"function correctEncodingImplicit",id:"lang-rascal-tests-basic-IO-correctEncodingImplicit",level:2},{value:"function removeZeroIAmbBOM",id:"lang-rascal-tests-basic-IO-removeZeroIAmbBOM",level:2},{value:"function appendWorksCorrectly",id:"lang-rascal-tests-basic-IO-appendWorksCorrectly",level:2},{value:"function appendWorksCorrectlyImplicit",id:"lang-rascal-tests-basic-IO-appendWorksCorrectlyImplicit",level:2},{value:"function readOffsetStart",id:"lang-rascal-tests-basic-IO-readOffsetStart",level:2},{value:"function readOffsetEnd",id:"lang-rascal-tests-basic-IO-readOffsetEnd",level:2},{value:"function readOffsetMiddle",id:"lang-rascal-tests-basic-IO-readOffsetMiddle",level:2},{value:"function md5Hash",id:"lang-rascal-tests-basic-IO-md5Hash",level:2},{value:"data Compression",id:"lang-rascal-tests-basic-IO-Compression",level:2},{value:"function compressionWorks",id:"lang-rascal-tests-basic-IO-compressionWorks",level:2},{value:"function compressionWorksWithEncoding",id:"lang-rascal-tests-basic-IO-compressionWorksWithEncoding",level:2},{value:"function writeFileOffsetNonExistingFile",id:"lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile",level:2},{value:"function writeFileOffsetNonExistingFile2",id:"lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile2",level:2},{value:"function writeFileOffsetEnd",id:"lang-rascal-tests-basic-IO-writeFileOffsetEnd",level:2},{value:"function writeFileOffsetEndInvalidLength",id:"lang-rascal-tests-basic-IO-writeFileOffsetEndInvalidLength",level:2},{value:"function writeFileOffsetEnd2",id:"lang-rascal-tests-basic-IO-writeFileOffsetEnd2",level:2},{value:"function writeFileOffsetMiddle",id:"lang-rascal-tests-basic-IO-writeFileOffsetMiddle",level:2},{value:"function writeFileOffsetMiddle2",id:"lang-rascal-tests-basic-IO-writeFileOffsetMiddle2",level:2},{value:"function writeFileOffsetStart",id:"lang-rascal-tests-basic-IO-writeFileOffsetStart",level:2}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::IO;")),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeReadFile"},"function writeReadFile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeReadFile(str content)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeReadValue"},"function writeReadValue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeReadValue(value x)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-Encoding"},"data Encoding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data Encoding  \n     = utf8()\n     | utf16le()\n     | utf16be()\n     | utf16()\n     | utf32le()\n     | utf32be()\n     | utf32()\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-correctEncoding"},"function correctEncoding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool correctEncoding(Encoding enc, str content)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-correctEncodingImplicit"},"function correctEncodingImplicit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool correctEncodingImplicit(Encoding enc, str content)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-removeZeroIAmbBOM"},"function removeZeroIAmbBOM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str removeZeroIAmbBOM(Encoding enc, str s)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-appendWorksCorrectly"},"function appendWorksCorrectly"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool appendWorksCorrectly(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-appendWorksCorrectlyImplicit"},"function appendWorksCorrectlyImplicit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool appendWorksCorrectlyImplicit(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-readOffsetStart"},"function readOffsetStart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool readOffsetStart(str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-readOffsetEnd"},"function readOffsetEnd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool readOffsetEnd(str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-readOffsetMiddle"},"function readOffsetMiddle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool readOffsetMiddle(str a, str b, str c)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-md5Hash"},"function md5Hash"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool md5Hash()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-Compression"},"data Compression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},"data Compression  \n     = gzip()\n     | xz()\n     | bzip2()\n     | zstd()\n     ;\n")),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-compressionWorks"},"function compressionWorks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool compressionWorks(str a, Compression comp)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-compressionWorksWithEncoding"},"function compressionWorksWithEncoding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool compressionWorksWithEncoding(str a, Compression comp, Encoding enc)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile"},"function writeFileOffsetNonExistingFile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetNonExistingFile()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile2"},"function writeFileOffsetNonExistingFile2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetNonExistingFile2()"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetEnd"},"function writeFileOffsetEnd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetEnd(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetEndInvalidLength"},"function writeFileOffsetEndInvalidLength"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetEndInvalidLength(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetEnd2"},"function writeFileOffsetEnd2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetEnd2(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetMiddle"},"function writeFileOffsetMiddle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetMiddle(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetMiddle2"},"function writeFileOffsetMiddle2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetMiddle2(Encoding enc, str a, str b)"))),(0,i.kt)("h2",{id:"lang-rascal-tests-basic-IO-writeFileOffsetStart"},"function writeFileOffsetStart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool writeFileOffsetStart(Encoding enc, str a, str b)"))))}u.isMDXComponent=!0}}]);