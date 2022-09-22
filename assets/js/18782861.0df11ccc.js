"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[67514],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(a),f=i,p=u["".concat(s,".").concat(f)]||u[f]||d[f]||n;return a?r.createElement(p,o(o({ref:e},m),{},{components:a})):r.createElement(p,o({ref:e},m))}));function f(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84328:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(83117),i=(a(67294),a(3905));const n={title:"module lang::rascal::grammar::definition::Attributes"},o=void 0,l={unversionedId:"Library/lang/rascal/grammar/definition/Attributes",id:"Library/lang/rascal/grammar/definition/Attributes",title:"module lang::rascal::grammar::definition::Attributes",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/definition/Attributes.md",sourceDirName:"Library/lang/rascal/grammar/definition",slug:"/Library/lang/rascal/grammar/definition/Attributes",permalink:"/docs/Library/lang/rascal/grammar/definition/Attributes",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/rascal/grammar/definition/Attributes.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::definition::Attributes"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::grammar::definition",permalink:"/docs/Library/lang/rascal/grammar/definition/"},next:{title:"module lang::rascal::grammar::definition::Characters",permalink:"/docs/Library/lang/rascal/grammar/definition/Characters"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function attribute",id:"lang-rascal-grammar-definition-Attributes-attribute",level:2},{value:"function mods2attrs",id:"lang-rascal-grammar-definition-Attributes-mods2attrs",level:2},{value:"function mod2attr",id:"lang-rascal-grammar-definition-Attributes-mod2attr",level:2},{value:"function testAssoc",id:"lang-rascal-grammar-definition-Attributes-testAssoc",level:2},{value:"function mods2assoc",id:"lang-rascal-grammar-definition-Attributes-mods2assoc",level:2},{value:"function mod2assoc",id:"lang-rascal-grammar-definition-Attributes-mod2assoc",level:2}],m={toc:c};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::definition::Attributes;")),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-attribute"},"function attribute"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Production attribute(Production p, Attr a)"))),(0,i.kt)("p",null,"adds an attribute to all productions it can find"),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-mods2attrs"},"function mods2attrs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[Attr] mods2attrs(ProdModifier* mods)"))),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-mod2attr"},"function mod2attr"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Attr] mod2attr(ProdModifier m)"))),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-testAssoc"},"function testAssoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] testAssoc(str m)"))),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-mods2assoc"},"function mods2assoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] mods2assoc(ProdModifier* mods)"))),(0,i.kt)("h2",{id:"lang-rascal-grammar-definition-Attributes-mod2assoc"},"function mod2assoc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] mod2assoc(ProdModifier _:\\associativity(\\left()))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] mod2assoc(ProdModifier _:\\associativity(\\right()))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] mod2assoc(ProdModifier _:\\associativity(\\associative()))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maybe[Associativity] mod2assoc(ProdModifier _:\\associativity(\\nonAssociative()))")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default Maybe[Associativity] mod2assoc(ProdModifier _)"))))}d.isMDXComponent=!0}}]);