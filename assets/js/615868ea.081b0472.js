"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[68736],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?t.createElement(g,o(o({ref:n},p),{},{components:a})):t.createElement(g,o({ref:n},p))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57641:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=a(83117),l=(a(67294),a(3905));const r={title:"lang::xml::DOM"},o=void 0,i={unversionedId:"Library/lang/xml/DOM",id:"Library/lang/xml/DOM",title:"lang::xml::DOM",description:"Usage",source:"@site/docs/Library/lang/xml/DOM.md",sourceDirName:"Library/lang/xml",slug:"/Library/lang/xml/DOM",permalink:"/docs/Library/lang/xml/DOM",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/xml/DOM.md",tags:[],version:"current",frontMatter:{title:"lang::xml::DOM"},sidebar:"tutorialSidebar",previous:{title:"lang::xml",permalink:"/docs/Library/lang/xml/"},next:{title:"lang::xml::IO",permalink:"/docs/Library/lang/xml/IO"}},s={},m=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"data Node",id:"lang-xml-DOM-Node",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"data Namespace",id:"lang-xml-DOM-Namespace",level:2},{value:"function implode",id:"lang-xml-DOM-implode",level:2},{value:"function toXML",id:"lang-xml-DOM-toXML",level:2},{value:"function attribute",id:"lang-xml-DOM-attribute",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function element",id:"lang-xml-DOM-element",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function parseXMLDOM",id:"lang-xml-DOM-parseXMLDOM",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-1",level:4},{value:"Examples",id:"examples",level:4},{value:"function parseXMLDOMTrim",id:"lang-xml-DOM-parseXMLDOMTrim",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Examples",id:"examples-1",level:4},{value:"function xmlRaw",id:"lang-xml-DOM-xmlRaw",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Examples",id:"examples-2",level:4},{value:"function xmlCompact",id:"lang-xml-DOM-xmlCompact",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"Examples",id:"examples-3",level:4},{value:"function xmlPretty",id:"lang-xml-DOM-xmlPretty",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"Examples",id:"examples-4",level:4}],p={toc:m};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::xml::DOM;")),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,'Functions for reading and writing XML files to and from a "DOM" representation.'),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/XML"},"XML")," is a widely used markup language for encoding and exchanging documents."),(0,l.kt)("p",null,"The Document Object Model ",(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Document_Object_Model"},"DOM")," is a cross-platform and language-independent\nway of representing and manipulating HTML, XHTML and XML documents. In this module we represent the DOM as a\nRascal ",(0,l.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/AlgebraicDataType"},"Algebraic data type")," using ",(0,l.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Function"},"keyword parameters")," for the optional attributes."),(0,l.kt)("p",null,"In ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/xml/IO"},"lang::xml::IO")," a different approach is taken, where each XML document is mapped to an instance of\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"node")," class, which gives a more direct one-to-ony mapping as opposed to the DOM encoding here.\nIf you are studying XML documents in general, then the current module is the place to be. If you\nare reading in specific data which is only accidentally encoded as XML, then have a look at ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/xml/IO"},"lang::xml::IO"),"."),(0,l.kt)("p",null,"The following functions are provided:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-attribute"},"Libraryconstructorlang::xml::DOM::attribute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-cdata"},"Libraryconstructorlang::xml::DOM::cdata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-charData"},"Libraryconstructorlang::xml::DOM::char data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-charRef"},"Libraryconstructorlang::xml::DOM::char ref")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-comment"},"Libraryconstructorlang::xml::DOM::comment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-document"},"Libraryconstructorlang::xml::DOM::document")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-element"},"Libraryconstructorlang::xml::DOM::element")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-entityRef"},"Libraryconstructorlang::xml::DOM::entity ref")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-namespace"},"Libraryconstructorlang::xml::DOM::namespace")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-none"},"Libraryconstructorlang::xml::DOM::none")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-pi"},"Libraryconstructorlang::xml::DOM::pi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-Namespace"},"Library:data:lang::xml::DOM::Namespace")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-Node"},"Library:data:lang::xml::DOM::Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-attribute"},"Library:function:lang::xml::DOM::attribute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-element"},"Library:function:lang::xml::DOM::element")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-implode"},"Library:function:lang::xml::DOM::implode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-parseXMLDOM"},"Library:function:lang::xml::DOM::parse x m l d oM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-parseXMLDOMTrim"},"Library:function:lang::xml::DOM::parse x m l d o m trim")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-toXML"},"Library:function:lang::xml::DOM::to x mL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-xmlCompact"},"Library:function:lang::xml::DOM::xml compact")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-xmlPretty"},"Library:function:lang::xml::DOM::xml pretty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-xmlRaw"},"Library:function:lang::xml::DOM::xml raw"))),(0,l.kt)("h2",{id:"lang-xml-DOM-Node"},"data Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Node  \n     = document(Node root)\n     | attribute(Namespace namespace, str name, str text)\n     | element(Namespace namespace, str name, list[Node] children)\n     | charData(str text)\n     | cdata(str text)\n     | comment(str text)\n     | pi(str target, str text)\n     | entityRef(str name)\n     | charRef(int code)\n     ;\n")),(0,l.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,l.kt)("p",null,"Datatypes for representing an instance of the DOM."),(0,l.kt)("h2",{id:"lang-xml-DOM-Namespace"},"data Namespace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},"data Namespace  \n     = namespace(str prefix, str uri)\n     | none()\n     ;\n")),(0,l.kt)("h2",{id:"lang-xml-DOM-implode"},"function implode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value implode(document(Node root))")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value implode(element(Namespace _, str name, list[Node] kids))")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value implode(charData(str t))")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value implode(cdata(str t))")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default value implode(Node x)"))),(0,l.kt)("h2",{id:"lang-xml-DOM-toXML"},"function toXML"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Node toXML(node x)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default Node toXML(value x)"))),(0,l.kt)("h2",{id:"lang-xml-DOM-attribute"},"function attribute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Node attribute(str name, str text)"))),(0,l.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,l.kt)("p",null,"Auxiliary constructor for XML attribute without namespace."),(0,l.kt)("h2",{id:"lang-xml-DOM-element"},"function element"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Node element(str name, list[Node] kids)"))),(0,l.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,l.kt)("p",null,"Auxiliary constructor for XML element without namespace."),(0,l.kt)("h2",{id:"lang-xml-DOM-parseXMLDOM"},"function parseXMLDOM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Node parseXMLDOM(str src)"))),(0,l.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,l.kt)("p",null,"Parse an XML document and return a DOM instance."),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Read the sample note file, parse it, and construct a DOM instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>import lang::xml::DOM;\nok\nrascal>N = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);\nstr: "\\<note\\>\\n\\<to\\>Jurgen\\</to\\>\\n\\<to\\>Tijs\\</to\\>\\n\\<from\\>Paul\\</from\\>\\n\\<date\\>2012-04-01\\</date\\>\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\n\\</note\\>"\nrascal>parseXMLDOM(N);\nNode: document(element(\n    none(),\n    "note",\n    [\n      charData("\\n"),\n      element(\n        none(),\n        "to",\n        [charData("Jurgen")]),\n      charData("\\n"),\n      element(\n        none(),\n        "to",\n        [charData("Tijs")]),\n      charData("\\n"),\n      element(\n        none(),\n        "from",\n        [charData("Paul")]),\n      charData("\\n"),\n      element(\n        none(),\n        "date",\n        [charData("2012-04-01")]),\n      charData("\\n"),\n      element(\n        none(),\n        "heading",\n        [\n          attribute(\n            none(),\n            "font",\n            "bold"),\n          charData("Reminder")\n        ]),\n      charData("\\n"),\n      element(\n        none(),\n        "body",\n        [charData("Don\\\'t forget to run the Rascal tests!")]),\n      charData("\\n")\n    ]))\n')),(0,l.kt)("p",null,"The DOM instance contains every single character (including spaces and newlines)\nas they appear in the source file.\nAs expected, the result is of type ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-Node"},"lang::xml::DOM::Node"),"."),(0,l.kt)("h2",{id:"lang-xml-DOM-parseXMLDOMTrim"},"function parseXMLDOMTrim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Node parseXMLDOMTrim(str src)"))),(0,l.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,l.kt)("p",null,"Parse an XML document and trim it (remove layout)."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Read the sample note file, parse it, and construct a DOM instance (using ",(0,l.kt)("inlineCode",{parentName:"p"},"parseXMLDOMTrim"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>import lang::xml::DOM;\nok\nrascal>N = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);\nstr: "\\<note\\>\\n\\<to\\>Jurgen\\</to\\>\\n\\<to\\>Tijs\\</to\\>\\n\\<from\\>Paul\\</from\\>\\n\\<date\\>2012-04-01\\</date\\>\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\n\\</note\\>"\nrascal>parseXMLDOMTrim(N);\nNode: document(element(\n    none(),\n    "note",\n    [\n      element(\n        none(),\n        "to",\n        [charData("Jurgen")]),\n      element(\n        none(),\n        "to",\n        [charData("Tijs")]),\n      element(\n        none(),\n        "from",\n        [charData("Paul")]),\n      element(\n        none(),\n        "date",\n        [charData("2012-04-01")]),\n      element(\n        none(),\n        "heading",\n        [\n          attribute(\n            none(),\n            "font",\n            "bold"),\n          charData("Reminder")\n        ]),\n      element(\n        none(),\n        "body",\n        [charData("Don\\\'t forget to run the Rascal tests!")])\n    ]))\n')),(0,l.kt)("p",null,"All whitespace characters have been removed and do not occur in the trimmed DOM instance.\nCompare this with the output of ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/lang/xml/DOM#lang::xml::DOM-parseXMLDOM"},"parse x m l d oM"),"."),(0,l.kt)("h2",{id:"lang-xml-DOM-xmlRaw"},"function xmlRaw"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str xmlRaw(Node x)"))),(0,l.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,l.kt)("p",null,"Convert a DOM instance to a raw XML string."),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("p",null,"Read the sample note file, parse it, construct a DOM instance, and convert it to a string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>import lang::xml::DOM;\nok\nrascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);\nstr: "\\<note\\>\\n\\<to\\>Jurgen\\</to\\>\\n\\<to\\>Tijs\\</to\\>\\n\\<from\\>Paul\\</from\\>\\n\\<date\\>2012-04-01\\</date\\>\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\n\\</note\\>"\nrascal>println(F);\nprintln(F);\n<note>\n<to>Jurgen</to>\n<to>Tijs</to>\n<from>Paul</from>\n<date>2012-04-01</date>\n<heading font="bold">Reminder</heading>\n<body>Don\'t forget to run the Rascal tests!</body>\n</note>\nok\nrascal>S = xmlRaw(parseXMLDOM(F));\nstr: "\\<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?\\>\\r\\n\\<note\\>\\r\\n\\<to\\>Jurgen\\</to\\>\\r\\n\\<to\\>Tijs\\</to\\>\\r\\n\\<from\\>Paul\\</from\\>\\r\\n\\<date\\>2012-04-01\\</date\\>\\r\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\r\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\r\\n\\</note\\>\\r\\n"\nrascal>println(S);\nprintln(S);\n<?xml version="1.0" encoding="UTF-8"?>\n<note>\n<to>Jurgen</to>\n<to>Tijs</to>\n<from>Paul</from>\n<date>2012-04-01</date>\n<heading font="bold">Reminder</heading>\n<body>Don\'t forget to run the Rascal tests!</body>\n</note>\nok\n')),(0,l.kt)("p",null,"Apart from an extra XML header, the original source file ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," and the output ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"xmlRaw")," are identical."),(0,l.kt)("h2",{id:"lang-xml-DOM-xmlCompact"},"function xmlCompact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str xmlCompact(Node x)"))),(0,l.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,l.kt)("p",null,"Convert a DOM instance to a compact XML string (with minimal white space)."),(0,l.kt)("h4",{id:"examples-3"},"Examples"),(0,l.kt)("p",null,"Read the sample note file, parse it, construct a DOM instance, and convert it to a string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>import lang::xml::DOM;\nok\nrascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);\nstr: "\\<note\\>\\n\\<to\\>Jurgen\\</to\\>\\n\\<to\\>Tijs\\</to\\>\\n\\<from\\>Paul\\</from\\>\\n\\<date\\>2012-04-01\\</date\\>\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\n\\</note\\>"\nrascal>println(F);\nprintln(F);\n<note>\n<to>Jurgen</to>\n<to>Tijs</to>\n<from>Paul</from>\n<date>2012-04-01</date>\n<heading font="bold">Reminder</heading>\n<body>Don\'t forget to run the Rascal tests!</body>\n</note>\nok\nrascal>S = xmlCompact(parseXMLDOM(F));\nstr: "\\<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?\\>\\r\\n\\<note\\>\\<to\\>Jurgen\\</to\\>\\<to\\>Tijs\\</to\\>\\<from\\>Paul\\</from\\>\\<date\\>2012-04-01\\</date\\>\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\</note\\>\\r\\n"\nrascal>println(S);\nprintln(S);\n<?xml version="1.0" encoding="UTF-8"?>\n<note><to>Jurgen</to><to>Tijs</to><from>Paul</from><date>2012-04-01</date><heading font="bold">Reminder</heading><body>Don\'t forget to run the Rascal tests!</body></note>\nok\n')),(0,l.kt)("p",null,"The output ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"xmlCompact")," is a version of the original source file ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," with all white space removed."),(0,l.kt)("h2",{id:"lang-xml-DOM-xmlPretty"},"function xmlPretty"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str xmlPretty(Node x)"))),(0,l.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,l.kt)("p",null,"Convert a DOM instance to a pretty printed XML string."),(0,l.kt)("h4",{id:"examples-4"},"Examples"),(0,l.kt)("p",null,"Read the sample note file, parse it, construct a DOM instance, and convert it to a string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>import lang::xml::DOM;\nok\nrascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);\nstr: "\\<note\\>\\n\\<to\\>Jurgen\\</to\\>\\n\\<to\\>Tijs\\</to\\>\\n\\<from\\>Paul\\</from\\>\\n\\<date\\>2012-04-01\\</date\\>\\n\\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\n\\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\n\\</note\\>"\nrascal>println(F);\nprintln(F);\n<note>\n<to>Jurgen</to>\n<to>Tijs</to>\n<from>Paul</from>\n<date>2012-04-01</date>\n<heading font="bold">Reminder</heading>\n<body>Don\'t forget to run the Rascal tests!</body>\n</note>\nok\nrascal>S = xmlPretty(parseXMLDOM(F));\nstr: "\\<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?\\>\\r\\n\\<note\\>\\r\\n  \\<to\\>Jurgen\\</to\\>\\r\\n  \\<to\\>Tijs\\</to\\>\\r\\n  \\<from\\>Paul\\</from\\>\\r\\n  \\<date\\>2012-04-01\\</date\\>\\r\\n  \\<heading font=\\"bold\\"\\>Reminder\\</heading\\>\\r\\n  \\<body\\>Don\\\'t forget to run the Rascal tests!\\</body\\>\\r\\n\\</note\\>\\r\\n"\nrascal>println(S);\nprintln(S);\n<?xml version="1.0" encoding="UTF-8"?>\n<note>\n  <to>Jurgen</to>\n  <to>Tijs</to>\n  <from>Paul</from>\n  <date>2012-04-01</date>\n  <heading font="bold">Reminder</heading>\n  <body>Don\'t forget to run the Rascal tests!</body>\n</note>\nok\n')),(0,l.kt)("p",null,"The output ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"xmlPretty")," is a pretty printed version of the original source file ",(0,l.kt)("inlineCode",{parentName:"p"},"F"),".\nObserve that the elements inside ",(0,l.kt)("inlineCode",{parentName:"p"},"<note> ... </note>")," are indented."))}d.isMDXComponent=!0}}]);