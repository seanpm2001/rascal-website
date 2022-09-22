"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[81565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),y=u(a),p=l,h=y["".concat(c,".").concat(p)]||y[p]||d[p]||r;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},38998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(83117),l=(a(67294),a(3905));const r={title:"analysis::text::search::LuceneTest"},i=void 0,s={unversionedId:"Library/analysis/text/search/LuceneTest",id:"Library/analysis/text/search/LuceneTest",title:"analysis::text::search::LuceneTest",description:"Usage",source:"@site/docs/Library/analysis/text/search/LuceneTest.md",sourceDirName:"Library/analysis/text/search",slug:"/Library/analysis/text/search/LuceneTest",permalink:"/docs/Library/analysis/text/search/LuceneTest",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/analysis/text/search/LuceneTest.md",tags:[],version:"current",frontMatter:{title:"analysis::text::search::LuceneTest"},sidebar:"tutorialSidebar",previous:{title:"analysis::text::search::Lucene",permalink:"/docs/Library/analysis/text/search/Lucene"},next:{title:"analysis::text::search::StandardAnalyzers",permalink:"/docs/Library/analysis/text/search/StandardAnalyzers"}},c={},u=[{value:"Usage",id:"usage",level:4},{value:"data Document",id:"analysis-text-search-LuceneTest-Document",level:2},{value:"data Analyzer",id:"analysis-text-search-LuceneTest-Analyzer",level:2},{value:"function abFilter",id:"analysis-text-search-LuceneTest-abFilter",level:2},{value:"function utFilter",id:"analysis-text-search-LuceneTest-utFilter",level:2},{value:"function lauSplitDanda",id:"analysis-text-search-LuceneTest-lauSplitDanda",level:2},{value:"function an",id:"analysis-text-search-LuceneTest-an",level:2},{value:"function commentAnalyzer",id:"analysis-text-search-LuceneTest-commentAnalyzer",level:2},{value:"function wordSplitFilter",id:"analysis-text-search-LuceneTest-wordSplitFilter",level:2},{value:"function extraAnalyzer",id:"analysis-text-search-LuceneTest-extraAnalyzer",level:2},{value:"function indexAnalyzer",id:"analysis-text-search-LuceneTest-indexAnalyzer",level:2},{value:"function picoIndex",id:"analysis-text-search-LuceneTest-picoIndex",level:2},{value:"function picoSearch",id:"analysis-text-search-LuceneTest-picoSearch",level:2},{value:"function extraSearch",id:"analysis-text-search-LuceneTest-extraSearch",level:2},{value:"function extraTermsTest",id:"analysis-text-search-LuceneTest-extraTermsTest",level:2},{value:"function identifierTest",id:"analysis-text-search-LuceneTest-identifierTest",level:2},{value:"function analyzerTest1",id:"analysis-text-search-LuceneTest-analyzerTest1",level:2},{value:"function analyzerTest2",id:"analysis-text-search-LuceneTest-analyzerTest2",level:2},{value:"function searchDocTest1",id:"analysis-text-search-LuceneTest-searchDocTest1",level:2},{value:"function searchDocTest2",id:"analysis-text-search-LuceneTest-searchDocTest2",level:2},{value:"function searchDocTest3",id:"analysis-text-search-LuceneTest-searchDocTest3",level:2},{value:"function main",id:"analysis-text-search-LuceneTest-main",level:2}],o={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import analysis::text::search::LuceneTest;")),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-Document"},"data Document"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},'data Document (loc comments = |unknown:///|, str extra = "")\n')),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-Analyzer"},"data Analyzer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Analyzer (Analyzer comments = standardAnalyzer(), Analyzer extra = standardAnalyzer())\n")),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-abFilter"},"function abFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str abFilter(str token)"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-utFilter"},"function utFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool utFilter(str token)"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-lauSplitDanda"},"function lauSplitDanda"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'list[str] lauSplitDanda("laudanda")'))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-an"},"function an"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer  an()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-commentAnalyzer"},"function commentAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer  commentAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-wordSplitFilter"},"function wordSplitFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Filter wordSplitFilter()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-extraAnalyzer"},"function extraAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer  extraAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-indexAnalyzer"},"function indexAnalyzer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Analyzer indexAnalyzer()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-picoIndex"},"function picoIndex"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void picoIndex()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-picoSearch"},"function picoSearch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void picoSearch(str term)"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-extraSearch"},"function extraSearch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void extraSearch()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-extraTermsTest"},"function extraTermsTest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool extraTermsTest()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-identifierTest"},"function identifierTest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool identifierTest()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-analyzerTest1"},"function analyzerTest1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool analyzerTest1()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-analyzerTest2"},"function analyzerTest2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool analyzerTest2()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-searchDocTest1"},"function searchDocTest1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool searchDocTest1()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-searchDocTest2"},"function searchDocTest2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool searchDocTest2()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-searchDocTest3"},"function searchDocTest3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool searchDocTest3()"))),(0,l.kt)("h2",{id:"analysis-text-search-LuceneTest-main"},"function main"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void main()"))))}d.isMDXComponent=!0}}]);