"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"Performance Modeling of Maximal Sharing - Experience Report",authors:["msteindorfer"]},l=void 0,s={permalink:"/blog/2016/03/12/performance-modeling-of-maximal-sharing",editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/blog/blog/2016-03-12-performance-modeling-of-maximal-sharing.md",source:"@site/blog/2016-03-12-performance-modeling-of-maximal-sharing.md",title:"Performance Modeling of Maximal Sharing - Experience Report",description:"This paper won a Best Paper award at ICPE 2016 in Delft.",date:"2016-03-12T00:00:00.000Z",formattedDate:"March 12, 2016",tags:[],readingTime:1.135,truncated:!1,authors:[{name:"Micheal Steindorfer",title:"Researcher @ TU Delft, Rascal Contributor",url:"https://github.com/msteindorfer",imageURL:"https://avatars.githubusercontent.com/u/1998004?v=4",key:"msteindorfer"}],frontMatter:{title:"Performance Modeling of Maximal Sharing - Experience Report",authors:["msteindorfer"]},prevItem:{title:"Navigating the WordPress Plugin Landscape",permalink:"/blog/2016/05/16/navigating-the-wordpress-plugin-landscape"},nextItem:{title:"Empirical analysis of the relationship between CC and SLOC",permalink:"/blog/2016/01/01/empirical-analysis-of-the-relationship-between-CC-and-SLOC"}},p={authorsImageUrls:[void 0]},m=[],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This paper won a Best Paper award at ICPE 2016 in Delft. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@inproceedings{icpe2016-steindorfer,\n author = {Michael Steindorfer and Jurgen J. Vinju.},\n title = {Performance Modeling of Maximal Sharing},\n booktitle = {7th ACM/SPEC International Conference on Performance Engineering (ICPE)},\n year = 2016,\n fulltext = "http://homepages.cwi.nl/~jurgenv/papers/ICPE16.pdf"\n}\n')),(0,o.kt)("p",null,"It is noticeably hard to predict the effect of optimization strategies in Java without implementing them. \u201cMaximal sharing\u201d (a.k.a. \u201chash-consing\u201d) is one of these strategies that may have great benefit in terms of time and space, or may have detrimental overhead. It all depends on the redundancy of data and the use of equality. We used a combination of new techniques to predict the impact of maximal sharing on existing code: Object Re- dundancy Profiling (ORP) to model the effect on memory when sharing all immutable objects, and Equals-Call Profil- ing (ECP) to reason about how removing redundancy impacts runtime performance. With comparatively low effort, using the MAximal SHaring Oracle (MASHO), a prototype pro- filer based on ORP and ECP, we can uncover optimization opportunities that otherwise would remain hidden. We report on the experience of applying MASHO to real and complex case: we conclude that ORP and ECP combined can accurately predict gains and losses of maximal sharing, and also that (by isolating variables) a cheap predictive model can sometimes provide more accurate information than an expensive experiment can."))}f.isMDXComponent=!0}}]);