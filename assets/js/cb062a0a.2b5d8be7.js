"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63651],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},16063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7896),a=(r(2784),r(30876));const n={title:"\u270f\ufe0f Practice: forEach loops",id:"practice-foreach-loops",slug:"practice-foreach-loops",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1g_classwork_practice_foreach.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/practice-foreach-loops",id:"introduction-to-programming/arrays-and-looping/practice-foreach-loops",title:"\u270f\ufe0f Practice: forEach loops",description:"Goal:  Practice using Array.prototype.forEach() to solve the problems below.",source:"@site/docs/introduction-to-programming/3_arrays-and-looping/1g-classwork-practice-foreach.md",sourceDirName:"introduction-to-programming/3_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/practice-foreach-loops",permalink:"/introduction-to-programming/arrays-and-looping/practice-foreach-loops",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"\u270f\ufe0f Practice: forEach loops",id:"practice-foreach-loops",slug:"practice-foreach-loops",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1g_classwork_practice_foreach.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Gathering Data with Checkboxes",permalink:"/introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes"},next:{title:"\u270f\ufe0f Journal #3 Discussion",permalink:"/introduction-to-programming/arrays-and-looping/journal-3-discussion"}},s={},p=[{value:"Code",id:"code",level:2},{value:"Groceries",id:"groceries",level:3},{value:"Word Play",id:"word-play",level:3},{value:"Build a Deck",id:"build-a-deck",level:3},{value:"Word Order",id:"word-order",level:3},{value:"Additional Challenges",id:"additional-challenges",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),":  Practice using ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to solve the problems below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember, understanding is the goal here. You're absolutely not expected to complete everything listed on this page. In fact, often we intentionally include ",(0,a.kt)("em",{parentName:"strong"},"more")," content than can reasonably be completed in a single day. This allows students an opportunity to later review concepts without having to repeat exercises they've previously done. Focus on understanding the concepts, not on speed.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Work through as many of the following exercises that you have time for during class."),(0,a.kt)("h3",{id:"groceries"},"Groceries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a form that allows a user to input items they need at the store. Use whatever input type that you prefer."),(0,a.kt)("li",{parentName:"ul"},"When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.")),(0,a.kt)("p",null,"Hints: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"<ul>"),". Explore ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"the MDN documentation on arrays")," to research what method might be used to sort arrays."),(0,a.kt)("h3",{id:"word-play"},"Word Play"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a form where users may enter a sentence."),(0,a.kt)("li",{parentName:"ul"},"Turn that sentence into an array using the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.split()")," method"),"."),(0,a.kt)("li",{parentName:"ul"},"Then, loop through this array to build a ",(0,a.kt)("em",{parentName:"li"},"new")," array out of every word in the sentence that is 3 or more characters in length."),(0,a.kt)("li",{parentName:"ul"},"Finally, reverse the order of the new array, ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"},(0,a.kt)("inlineCode",{parentName:"a"},"Array.prototype.join()"))," it back together into a string, and display it to the user.")),(0,a.kt)("h3",{id:"build-a-deck"},"Build a Deck"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use a ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loop within another ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loop to build an array representing a deck of cards. A deck consists of 52 cards \u2014 13 ranks in each of 4 suits."),(0,a.kt)("li",{parentName:"ul"},'Then display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts".)')),(0,a.kt)("p",null,"The start of your output should look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/deck.png",alt:"This image shows a bullet point list of cards names. This is what the output of this webpage should look like."})),(0,a.kt)("h3",{id:"word-order"},"Word Order"),(0,a.kt)("p",null,"Create a website that lets users input a block of text. The application will then return a list of all the unique words and how many times they appeared."),(0,a.kt)("p",null,'For example, if the user inputs "hello world world", the page should show:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- hello 1\n- world 2\n")),(0,a.kt)("h4",{id:"additional-challenges"},"Additional Challenges"),(0,a.kt)("p",null,"If you finish, and feel comfortable with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loops, try to complete the above exercise but instead order the list by the number of appearances \u2014 greatest to least. This is challenging \u2014 but a great way to exercise your problem-solving skills."),(0,a.kt)("p",null,"Another challenge: for words that appear the same amount of times, order by which word appeared first."),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is the JavaScript business logic separate from the user interface logic?"),(0,a.kt)("li",{parentName:"ul"},"Are variable names descriptive and easy to understand?"),(0,a.kt)("li",{parentName:"ul"},"Is code properly indented throughout?"),(0,a.kt)("li",{parentName:"ul"},"Are loops being used correctly?")))}u.isMDXComponent=!0}}]);