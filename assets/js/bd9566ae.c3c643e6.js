"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Configure Eclipse for rascal"},c=void 0,s={unversionedId:"EditIni",id:"EditIni",title:"Configure Eclipse for rascal",description:"To configure Eclipse properly for running Rascal, you may have to edit the eclipse.ini file:",source:"@site/docs/EditIni.md",sourceDirName:".",slug:"/EditIni",permalink:"/docs/EditIni",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/EditIni.md",tags:[],version:"current",frontMatter:{title:"Configure Eclipse for rascal"},sidebar:"tutorialSidebar",previous:{title:"-- Syntax Highlighting Demo --",permalink:"/docs/syntax-demo"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To configure Eclipse properly for running Rascal, you may have to edit the eclipse.ini file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"find it first",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"on MacOSX it may be in\n",(0,a.kt)("inlineCode",{parentName:"li"},"/Applications/Eclipse.app/Contents/MacOS/eclipse.ini")),(0,a.kt)("li",{parentName:"ul"},"on Windows it may be in ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\eclipse\\eclipse.ini")),(0,a.kt)("li",{parentName:"ul"},"on Linux its where you extracted the eclipse tarball."))),(0,a.kt)("li",{parentName:"ul"},"then find the line that starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"-vm")," and add on the next ",(0,a.kt)("em",{parentName:"li"},"separate")," line\nthe path to the java run-time binary, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/bin/java")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program\nFiles\\Java SDK 1.8\\bin\\javaw")," (note there is no ",(0,a.kt)("inlineCode",{parentName:"li"},".exe"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you can't find the line that starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"-vm")," you should add it before\nthe line starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"-vmargs")))),(0,a.kt)("li",{parentName:"ul"},"to have enough memory to run Rascal please",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"set the stacksize using the command line arguments of eclipse ",(0,a.kt)("inlineCode",{parentName:"li"},"-vmargs -Xss8m"),","),(0,a.kt)("li",{parentName:"ul"},"or you might set this in the ",(0,a.kt)("inlineCode",{parentName:"li"},"eclipse.ini")," file.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"find the line that starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"-vmargs")," and add on a separate line ",(0,a.kt)("inlineCode",{parentName:"li"},"-Xss8m"))))))))}f.isMDXComponent=!0}}]);