"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6137],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5229:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={authors:["jvinju"],title:"From imperative programming to functional programming"},s=void 0,u={permalink:"/blog/2015/03/02/from-imperative-to-functional",editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/blog/blog/2015-03-02-from-imperative-to-functional.md",source:"@site/blog/2015-03-02-from-imperative-to-functional.md",title:"From imperative programming to functional programming",description:'Rascal features immutable data, but at the same time a number of language constructs which are a lot like "traditional" structured imperative programming: while, if, etc. Without going into the full power of these constructs in Rascal (featuring lexically scoped backtracking, for example) in this post we go into how in the same language we can program imperatively and functionally at the same time.',date:"2015-03-02T00:00:00.000Z",formattedDate:"March 2, 2015",tags:[],readingTime:3.47,hasTruncateMarker:!1,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"}],frontMatter:{authors:["jvinju"],title:"From imperative programming to functional programming"},prevItem:{title:"Optimizing Hash Tries",permalink:"/blog/2015/10/30/optimizing-hash-tries"},nextItem:{title:"The Language Interaction Design of Concrete Syntax",permalink:"/blog/2013/08/02/the-language-interaction-design-of-concrete-syntax"}},c={authorsImageUrls:[void 0]},p=[{value:"A story about even numbers",id:"a-story-about-even-numbers",level:3},{value:"What just happened?",id:"what-just-happened",level:3},{value:"The usefulness of imperative control flow constructs",id:"the-usefulness-of-imperative-control-flow-constructs",level:3},{value:"The benefit of functional abstraction over imperative control flow",id:"the-benefit-of-functional-abstraction-over-imperative-control-flow",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Rascal features immutable data, but at the same time a number of language constructs which are a lot like "traditional" structured imperative programming: ',(0,i.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", etc. Without going into the full power of these constructs in Rascal (featuring lexically scoped backtracking, for example) in this post we go into how ",(0,i.kt)("em",{parentName:"p"},"in the same language")," we can program imperatively and functionally at the same time."),(0,i.kt)("p",null,"The reason Rascal features these two styles is that we want to make it easy for programmers who are used to the imperative paradigm to step into the language. More importantly, we want to make it easy to type classical textbook examples of program analysis and transformations pseudocode rather directly into Rascal syntax. "),(0,i.kt)("h3",{id:"a-story-about-even-numbers"},"A story about even numbers"),(0,i.kt)("p",null,"Let's write a function that generates all the even numbers in a list up to a certain maximum. We will do it in a few alternative\nways: from very imperative to very declarative and some steps in between."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even0(int max) {\n  list[int] result = [];\n  for (int i <- [0..max])\n    if (i % 2 == 0)\n      result += i;\n  return result;\n}\n")),(0,i.kt)("p",null,"Now lets remove the temporary type declarations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even1(int max) {\n  result = [];\n  for (i <- [0..max])\n    if (i % 2 == 0)\n      result += i;\n  return result;\n}\n")),(0,i.kt)("p",null,"To make the code shorter, we can inline the condition in the for loop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even2(int max) {\n  result = [];\n  for (i <- [0..max], i % 2 == 0)\n    result += i;\n  return result;\n}\n")),(0,i.kt)("p",null,"In fact, for loops may produce lists as values, using the append statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even3(int max) {\n  result = for (i <- [0..max], i % 2 == 0)\n    append i;\n  return result;\n}\n")),(0,i.kt)("p",null,"So now, the result temporary is not necessary anymore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even4(int max) {\n  return for (i <- [0..max], i % 2 == 0)\n           append i;\n}\n")),(0,i.kt)("p",null,"This code is actually very close to a list comprehension already:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even5(int max) {\n  return [ i | i <- [0..max], i % 2 == 0];\n}\n")),(0,i.kt)("p",null,"And now we can just define even using an expression only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"list[int] even6(int max) = [i | i <- [0..max], i % 2 == 0];\n")),(0,i.kt)("p",null,"Or, perhaps we like a set instead of a list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set[int] even7(int max) = {i | i <- [0..max], i % 2 == 0};\n")),(0,i.kt)("h3",{id:"what-just-happened"},"What just happened?"),(0,i.kt)("p",null,"In summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We went from 5 lines of code to 1"),(0,i.kt)("li",{parentName:"ul"},"We went from 3 control flow constructs (for, if, return) to 0"),(0,i.kt)("li",{parentName:"ul"},"We introduced a list comprehension"),(0,i.kt)("li",{parentName:"ul"},"All expressions have remained equal"),(0,i.kt)("li",{parentName:"ul"},"Intermediate temporary variables dissappeared")),(0,i.kt)("p",null,'What did not happen is any magic. The code still executes the same "algorithm" if you will. The functional programming style in Rascal can be seen as a shorter notation for a more bloated use of imperative control flow constructs.'),(0,i.kt)("h3",{id:"the-usefulness-of-imperative-control-flow-constructs"},"The usefulness of imperative control flow constructs"),(0,i.kt)("p",null,"Up front, Rascal's control flow constructs are more powerful than general purpose programming languages control flow constructs. They feature lexically scoped backtracking, lists of conditions, etc."),(0,i.kt)("p",null,"Even without those advanced features, it is sometimes very handy to split a computation in parts without having to introduce another function abstraction. While exploring a new algorithm, temporary variables can be printed and inspected at debug time, etc."),(0,i.kt)("p",null,"In Rascal, people often use imperative control flow to ",(0,i.kt)("em",{parentName:"p"},"explore")," solutions or ",(0,i.kt)("em",{parentName:"p"},"copy")," them from text books, and when they are happy with the algorithm they try and improve the formulation by finding the right functional abstractions. "),(0,i.kt)("h3",{id:"the-benefit-of-functional-abstraction-over-imperative-control-flow"},"The benefit of functional abstraction over imperative control flow"),(0,i.kt)("p",null,"The real benefits, above brevity and elegance, of the functional style over the imperative style are reusability and extensibility. Smaller functional abstractions are easier to reuse and easier to override. Also, using Rascal's dynamic dispatch using pattern matching (a.k.a. term rewriting) adding new options to algebraic data types can be complemented with adding new cases for functions. In the imperative style such an extension would imply editing existing code, while in the functional style this would not be necessary. See also this other ",(0,i.kt)("a",{parentName:"p",href:"http://www.rascal-mpl.org/from-functions-to-term-rewriting-and-back"},"post"),"."))}f.isMDXComponent=!0}}]);