"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[94023],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(i),p=n,y=u["".concat(d,".").concat(p)]||u[p]||f[p]||a;return i?r.createElement(y,s(s({ref:t},c),{},{components:i})):r.createElement(y,s({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<a;o++)s[o]=i[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},53021:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(83117),n=(i(67294),i(3905));const a={title:"analysis::diff::edits::TextEdits"},s=void 0,l={unversionedId:"Library/analysis/diff/edits/TextEdits",id:"Library/analysis/diff/edits/TextEdits",title:"analysis::diff::edits::TextEdits",description:"Usage",source:"@site/docs/Library/analysis/diff/edits/TextEdits.md",sourceDirName:"Library/analysis/diff/edits",slug:"/Library/analysis/diff/edits/TextEdits",permalink:"/docs/Library/analysis/diff/edits/TextEdits",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/analysis/diff/edits/TextEdits.md",tags:[],version:"current",frontMatter:{title:"analysis::diff::edits::TextEdits"},sidebar:"tutorialSidebar",previous:{title:"analysis::diff::edits::ExecuteTextEdits",permalink:"/docs/Library/analysis/diff/edits/ExecuteTextEdits"},next:{title:"analysis::flow",permalink:"/docs/Library/analysis/flow/"}},d={},o=[{value:"Usage",id:"usage",level:4},{value:"data DocumentEdit",id:"analysis-diff-edits-TextEdits-DocumentEdit",level:2},{value:"data TextEdit",id:"analysis-diff-edits-TextEdits-TextEdit",level:2},{value:"function delete",id:"analysis-diff-edits-TextEdits-delete",level:2}],c={toc:o};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import analysis::diff::edits::TextEdits;")),(0,n.kt)("h2",{id:"analysis-diff-edits-TextEdits-DocumentEdit"},"data DocumentEdit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data DocumentEdit  \n     = removed(loc file)\n     | created(loc file)\n     | renamed(loc from, loc to)\n     | changed(loc file, list[TextEdit] edits)\n     ;\n")),(0,n.kt)("h2",{id:"analysis-diff-edits-TextEdits-TextEdit"},"data TextEdit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data TextEdit  \n     = replace(loc range, str replacement)\n     ;\n")),(0,n.kt)("h2",{id:"analysis-diff-edits-TextEdits-delete"},"function delete"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TextEdit delete(loc range)"))))}f.isMDXComponent=!0}}]);