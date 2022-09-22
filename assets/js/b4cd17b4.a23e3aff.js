"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[51160],{3905:(e,a,s)=>{s.d(a,{Zo:()=>c,kt:()=>d});var n=s(67294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function t(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?t(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function l(e,a){if(null==e)return{};var s,n,r=function(e,a){if(null==e)return{};var s,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),s=a;return e&&(s="function"==typeof e?e(a):i(i({},a),e)),s},c=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},j=n.forwardRef((function(e,a){var s=e.components,r=e.mdxType,t=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),j=m(s),d=r,p=j["".concat(o,".").concat(d)]||j[d]||v[d]||t;return s?n.createElement(p,i(i({ref:a},c),{},{components:s})):n.createElement(p,i({ref:a},c))}));function d(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=s.length,i=new Array(t);i[0]=j;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<t;m++)i[m]=s[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}j.displayName="MDXCreateElement"},24365:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var n=s(83117),r=(s(67294),s(3905));const t={title:"Measuring Java"},i=void 0,l={unversionedId:"Recipes/Metrics/MeasuringJava/index",id:"Recipes/Metrics/MeasuringJava/index",title:"Measuring Java",description:"Synopsis",source:"@site/docs/Recipes/Metrics/MeasuringJava/index.md",sourceDirName:"Recipes/Metrics/MeasuringJava",slug:"/Recipes/Metrics/MeasuringJava/",permalink:"/docs/Recipes/Metrics/MeasuringJava/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Metrics/MeasuringJava/index.md",tags:[],version:"current",frontMatter:{title:"Measuring Java"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/docs/Recipes/Metrics/"},next:{title:"Measuring Classes",permalink:"/docs/Recipes/Metrics/MeasuringJava/MeasuringClasses/"}},o={},m=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],c={toc:m};function v(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"A few steps using the M3 model to compute basic metrics for a Java project in Eclipse."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"This is a recipe for computing basic or more advanced metrics from a Java project in Eclipse. We assume:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have Rascal installed in an Eclipse instance."),(0,r.kt)("li",{parentName:"ul"},"You have a Java project in your Eclipse workspace that compiles without errors. Let's call it ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld"),".")),(0,r.kt)("p",null,"Now we will follow the ","[EASY][EASY]","(../../../WhyRascal/EASY) paradigm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a library will be used to ",(0,r.kt)("em",{parentName:"li"},"parse")," the Java code generating ","[Rascalopedia:AbstractSyntaxTree]"),(0,r.kt)("li",{parentName:"ul"},"the same library will generate a ","[Rascal:Values/Relation]","al model to represent interesting facts between Java source code artifacts"),(0,r.kt)("li",{parentName:"ul"},"then we can write queries over the generated trees and relations using ","[Rascal:Expressions]",".")),(0,r.kt)("p",null,"These are a number of recipes for measuring different things about Java:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringClasses"},"Measuring classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringMethods"},"Measuring methods"))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"First we import the basic data types for representing Java. The model is called ",(0,r.kt)("em",{parentName:"p"},"M3"),", and its definition is split acros a generic\nlanguage independent module called ","[Rascal:analysis/m3/Core]"," and a Java specific part called ","[Rascal:lang/java/m3/Core]",". Have a look at the documentation\nof these modules later. For now we will go through using them in a few examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import lang::java::m3::Core;\nok\nrascal>import lang::java::m3::AST;\nok\n")),(0,r.kt)("p",null,'"Snakes and Ladders" is an example Java project of which we have stored the source code in ',(0,r.kt)("inlineCode",{parentName:"p"},"|tmp:///snakes-and-ladders/src|")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>|tmp:///snakes-and-ladders/src/snakes/|.ls\nlist[loc]: [\n  |tmp:///snakes-and-ladders/src/snakes/Die.java|,\n  |tmp:///snakes-and-ladders/src/snakes/SimpleGameTest.java|,\n  |tmp:///snakes-and-ladders/src/snakes/LastSquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Snake.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Ladder.java|,\n  |tmp:///snakes-and-ladders/src/snakes/FirstSquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/DieTest.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Player.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Game.java|,\n  |tmp:///snakes-and-ladders/src/snakes/ISquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|\n]\n")),(0,r.kt)("p",null,"Now we can extract our overview model, using the classpath we derived:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|);\nM3: m3(\n  |tmp:///snakes-and-ladders/src|,\n  annotations={\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testInRange()|,|java+class:///Test|>,\n    <|java+method:///snakes/DieTest/testMinReached()|,|java+class:///Test|>,\n    <|java+class:///snakes/SimpleGameTest|,|java+class:///RunWith|>,\n    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testMaxReached()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>\n  },\n  typeDependency={\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,\n    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,\n    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+interface:///snakes/ISquare|>,\n    ...\n")),(0,r.kt)("p",null,"Some projects have extensive classpaths which the M3 extractor requires for accurate Java analysis.\nYou can use this code to extract a classpath if the project is a Maven project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import util::Reflective;\nok\nrascal>cp = getProjectPathConfig(|tmp:///snakes-and-ladders|).javaCompilerPath;\nlist[loc]: [\n  |file:///Users/jurgenv/git/rascal/target/classes|,\n  |file:///Users/jurgenv/.m2/repository/org/rascalmpl/rascal-p2-dependencies-repackaged/0.6.0/rascal-p2-dependencies-repackaged-0.6.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/junit/junit/4.13.1/junit-4.13.1.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar|,\n  |file:///Users/jurgenv/.m2/repository/io/usethesource/vallang/0.14.6/vallang-0.14.6.jar|,\n  |file:///Users/jurgenv/.m2/repository/io/usethesource/capsule/0.7.1/capsule-0.7.1.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/tukaani/xz/1.9/xz-1.9.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/github/luben/zstd-jni/1.5.2-3/zstd-jni-1.5.2-3.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/github/ben-manes/caffeine/caffeine/3.0.4/caffeine-3.0.4.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/google/errorprone/error_prone_annotations/2.9.0/error_prone_annotations-2.9.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/checkerframework/checker-qual/3.24.0/checker-qual-3.24.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/ow2/asm/asm/9.2/asm-9.2.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/ow2/asm/asm-tree/9.2/asm-tree-9.2.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/commons/commons-math/2.2/commons-math-2.2.jar|,\n  |file:///Users/jurgenv/.m2/repository/commons-lang/commons-lang/2.6/commons-lang-2.6.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar|,\n  |file:///Users/jurgenv/.m2/repository/jline/jline/2.14.6/jline-2.14.6.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/yaml/snakeyaml/1.31/snakeyaml-1.31.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/jdom/jdom2/2.0.6/jdom2-2.0.6.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-core/7.5.0/lucene-core-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-highlighter/7.5.0/lucene-highlighter-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-join/7.5.0/lucene-join-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-memory/7.5.0/lucene-memory-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-queries/7.5.0/lucene-queries-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-analyzers-common/7.5.0/lucene-analyzers-common-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-queryparser/7.5.0/lucene-queryparser-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-sandbox/7.5.0/lucene-sandbox-7.5.0.jar|,\n  |file:///Users/jurgenv/.m2/repository/org/nanohttpd/nanohttpd/2.3.1/nanohttpd-2.3.1.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/ibm/icu/icu4j/69.1/icu4j-69.1.jar|,\n  |file:///Users/jurgenv/.m2/repository/com/beust/jcommander/1.72/jcommander-1.72.jar|\n]\n")),(0,r.kt)("p",null,"and then pass it into the M3 extractor (this project does not have dependencies)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|, classPath=cp);\nM3: m3(\n  |tmp:///snakes-and-ladders/src|,\n  annotations={\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+interface:///org/junit/Test|>,\n    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testInRange()|,|java+interface:///org/junit/Test|>,\n    <|java+method:///snakes/DieTest/testMinReached()|,|java+interface:///org/junit/Test|>,\n    <|java+class:///snakes/SimpleGameTest|,|java+interface:///org/junit/runner/RunWith|>,\n    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testMaxReached()|,|java+interface:///org/junit/Test|>,\n    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>\n  },\n  typeDependency={\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,\n    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,\n    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///org/junit/Assert|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)...\n")),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notice that ",(0,r.kt)("em",{parentName:"li"},"all")," these ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Location"},"Location")," literals are hyperlinks and you can click on them to go the source code that they point to. Try it!"),(0,r.kt)("li",{parentName:"ul"},"M3 models are great for metrics, but also they are the basis for many other static analyses"),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringClasses"},"Measuring classes")," and ",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringMethods"},"Measuring methods")," for more benefits")),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringClasses"},"Measuring classes")," and ",(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Metrics/MeasuringJava/MeasuringMethods"},"Measuring methods")," for more pitfalls")))}v.isMDXComponent=!0}}]);