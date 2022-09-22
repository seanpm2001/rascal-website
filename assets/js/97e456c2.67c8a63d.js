"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[73636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(83117),o=(t(67294),t(3905));const r={title:"Doc Annotations"},i=void 0,l={unversionedId:"Tutor/Markup/SourceCodeMarkup/DocAnnotations/index",id:"Tutor/Markup/SourceCodeMarkup/DocAnnotations/index",title:"Doc Annotations",description:"Synopsis",source:"@site/docs/Tutor/Markup/SourceCodeMarkup/DocAnnotations/index.md",sourceDirName:"Tutor/Markup/SourceCodeMarkup/DocAnnotations",slug:"/Tutor/Markup/SourceCodeMarkup/DocAnnotations/",permalink:"/docs/Tutor/Markup/SourceCodeMarkup/DocAnnotations/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Tutor/Markup/SourceCodeMarkup/DocAnnotations/index.md",tags:[],version:"current",frontMatter:{title:"Doc Annotations"},sidebar:"tutorialSidebar",previous:{title:"Source Code Markup",permalink:"/docs/Tutor/Markup/SourceCodeMarkup/"},next:{title:"Structure Markup",permalink:"/docs/Tutor/Markup/StructureMarkup/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Module Declaration",id:"module-declaration",level:2},{value:"Function Declaration",id:"function-declaration",level:2},{value:"Data Declaration",id:"data-declaration",level:2},{value:"Annotation Declaration",id:"annotation-declaration",level:2},{value:"now {/Markup/SourceCodeMarkup/DocAnnotations}",id:"now-markupsourcecodemarkupdocannotations",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," annotation attaches an inline concept description to a Rascal declaration."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"All Rascal declarations can be preceeded by an annotation of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"@doc{ ... }")," where ... may be arbitrary text,\nprovided that ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"}")," characters are balanced and that unbalanced braces are escaped like ",(0,o.kt)("inlineCode",{parentName:"p"},"\\{")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\}"),".\nThis text is expanded to a full concept definition when the concept is processed. "),(0,o.kt)("p",null,"The Tutor supports and expands inline concept descriptions for the following declarations types."),(0,o.kt)("h2",{id:"module-declaration"},"Module Declaration"),(0,o.kt)("p",null,"The name of this module is extracted.\nThe header of the concept definition is automatically generated and consists of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\ntitle: _Module name_\n---\n#### Usage\n\n_Import declaration needed to use this module_\n")),(0,o.kt)("h2",{id:"function-declaration"},"Function Declaration"),(0,o.kt)("p",null,"The signatures of this function and of all directly following functions with the same name are collected.\nThe signatures are placed in an itemized list (unless there is only one).\nThe header of the concept definition is automatically generated and consists of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\ntitle: _Function name_\n---\n.Function\n_Function signature_\n.Usage\n_Import declaration needed to use this module_\n")),(0,o.kt)("h2",{id:"data-declaration"},"Data Declaration"),(0,o.kt)("p",null,"The signatures of this data declaration and of all directly following data declarations without their own ",(0,o.kt)("inlineCode",{parentName:"p"},"@doc")," annotation\nare collected.\nThe header of the concept definition is automatically generated and consists of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## _Data declaration name_ {/Markup/SourceCodeMarkup/DocAnnotations}\n.Type\n_Data declarations_\n.Usage\n_Import declaration needed to use this module_\n")),(0,o.kt)("h2",{id:"annotation-declaration"},"Annotation Declaration"),(0,o.kt)("p",null,"The signature of this annotation declaration is collected.\nThe header of the concept definition is automatically generated and consists of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## _Annotation declaration name_ {/Markup/SourceCodeMarkup/DocAnnotations}\n.Type\n_Annotation declarations_\n.Usage\n_Import declaration needed to use this module_\n")),(0,o.kt)("p",null,".Examples\nWe only give an example of documenting a simple function. Read the source code of Rascal library files for other ones. "),(0,o.kt)("p",null,"Consider the source code of the now function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTime")," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  @doc{\n  .Synopsis\n  Get the current datetime.\n\n  .Examples\n\n```rascal-shell\nrascal>  import DateTime;\nok\nrascal>  now();\ndatetime: $2022-09-22T11:19:51.119+00:00$\n")),(0,o.kt)("p",null,"  }\n@javaClass{org.rascalmpl.library.DateTime}\npublic java datetime now();"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  \n  \nThis will be expanded to\n\n")),(0,o.kt)("h2",{id:"now-markupsourcecodemarkupdocannotations"},"now {/Markup/SourceCodeMarkup/DocAnnotations}"),(0,o.kt)("p",null,"  .Function\n",(0,o.kt)("inlineCode",{parentName:"p"},"datetime now()"),"\n.Usage\n",(0,o.kt)("inlineCode",{parentName:"p"},"import DateTime;")),(0,o.kt)("p",null,"  .Synopsis\nGet the current datetime."),(0,o.kt)("p",null,"  .Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>  import DateTime;\nok\nrascal>  now();\ndatetime: $2022-09-22T11:19:51.184+00:00$\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nand the final result is link:/Libraries#Prelude-DateTime#now[now].\n\n.Benefits\nA (small) part of documentation writing is automated.\nThe information about the name of a function, data or annotation declaration, or its signature is always consistent.\n\n.Pitfalls \n* This approach requires that functions with the same name are grouped together in the source file.\n* We do not (yet) provide direct editing of `@doc{ ... }` in Rascal source files. We should!\n")))}u.isMDXComponent=!0}}]);