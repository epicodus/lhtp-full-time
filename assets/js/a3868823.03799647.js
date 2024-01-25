"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45756],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Introduction to Stacks and Queues",id:"introduction-to-stacks-and-queues",slug:"introduction-to-stacks-and-queues",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/5_stacks_and_queues.md"},s=void 0,i={unversionedId:"capstone/capstone-week-1/introduction-to-stacks-and-queues",id:"capstone/capstone-week-1/introduction-to-stacks-and-queues",title:"\ud83d\udcd3 Introduction to Stacks and Queues",description:"In this lesson, we're going to learn about stacks and queues. We'll start by covering a brief overview of each. Then we'll write basic stack and queue functions.",source:"@site/docs/capstone/1_capstone-week-1/5-stacks-and-queues.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/introduction-to-stacks-and-queues",permalink:"/capstone/capstone-week-1/introduction-to-stacks-and-queues",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"\ud83d\udcd3 Introduction to Stacks and Queues",id:"introduction-to-stacks-and-queues",slug:"introduction-to-stacks-and-queues",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/5_stacks_and_queues.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Building Graphs Part 2",permalink:"/capstone/capstone-week-1/building-graphs-part-2"},next:{title:"\ud83d\udcd3 Depth and Breadth Search Algorithms",permalink:"/capstone/capstone-week-1/depth-and-breadth-search-algorithms"}},l={},u=[{value:"Writing Our Own Stack and Queue Functions",id:"writing-our-own-stack-and-queue-functions",level:3},{value:"Exercise",id:"exercise",level:4},{value:"Solution",id:"solution",level:4}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we're going to learn about ",(0,r.kt)("strong",{parentName:"p"},"stacks")," and ",(0,r.kt)("strong",{parentName:"p"},"queues"),". We'll start by covering a brief overview of each. Then we'll write basic ",(0,r.kt)("inlineCode",{parentName:"p"},"stack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"queue")," functions."),(0,r.kt)("p",null,"Stacks and queues are both data structures that hold a list of elements. However, there is a key difference in how they work. A queue is ",(0,r.kt)("strong",{parentName:"p"},"first in, first out")," or ",(0,r.kt)("strong",{parentName:"p"},"FIFO"),". On the other hand, a stack is ",(0,r.kt)("strong",{parentName:"p"},"last in, first out")," or ",(0,r.kt)("strong",{parentName:"p"},"LIFO"),"."),(0,r.kt)("p",null,"Let's use some examples of how both the FIFO and LIFO principles apply in our daily lives."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When we get in a line (at the grocery store checkout counter, to go to a movie, or anything else), we expect the first person in line to get served first and so on. This is a prime example of FIFO. People would get very upset if the last people in line were served first.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the other hand, let's say we are reorganizing and stacking books from a bookshelf one at a time. When we take a book off the stack, we will most likely take it off the top of the stack, not the bottom. This is an example of LIFO because the last book added to the stack is the first one that's taken off the stack."))),(0,r.kt)("p",null,"There are plenty of examples in computer programming where we'll use queues and stacks as well. For instance, we might be waiting in a help ticket queue at a code school like Epicodus. Or we might be waiting to download something and others are queued to download that thing first."),(0,r.kt)("p",null,"When it comes to stacks, we work with the JavaScript call stack every time we write JavaScript code. We can see this clearly in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function first() {\n  return second();\n}\n\nfunction second() {\n  return third();\n}\n\nfunction third() {\n  return "hello!"\n}\n')),(0,r.kt)("p",null,"When we call ",(0,r.kt)("inlineCode",{parentName:"p"},"first()"),", what happens? ",(0,r.kt)("inlineCode",{parentName:"p"},"first()")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"second()")," which calls ",(0,r.kt)("inlineCode",{parentName:"p"},"third()"),". But which one is actually ",(0,r.kt)("em",{parentName:"p"},"resolved")," first? Well, ",(0,r.kt)("inlineCode",{parentName:"p"},"first()")," can't be resolved until ",(0,r.kt)("inlineCode",{parentName:"p"},"second()")," is \u2014 and ",(0,r.kt)("inlineCode",{parentName:"p"},"second()")," can't be resolved until ",(0,r.kt)("inlineCode",{parentName:"p"},"third()")," is. How can the ",(0,r.kt)("inlineCode",{parentName:"p"},"first()")," function ultimately return ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello!"')," unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"third()")," function resolves first?"),(0,r.kt)("p",null,"This is the stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TOP OF THE STACK\n\nthird()\nsecond()\nfirst()\n\nBOTTOM OF THE STACK\n")),(0,r.kt)("p",null,"The technical term for each function is a stack is a ",(0,r.kt)("strong",{parentName:"p"},"frame"),". Whenever a function is called in the JavaScript runtime (the time our code is actually executed), the runtime creates a stack frame for that function. There is a limit to that stack \u2014 which you've probably noticed if you've ever run an infinite loop by accident and received a ",(0,r.kt)("inlineCode",{parentName:"p"},"Range error: maximum call stack size exceeded")," error."),(0,r.kt)("p",null,"By the way, if you are confused about what the runtime ",(0,r.kt)("em",{parentName:"p"},"is"),", in the Chrome browser or in Node (JavaScript backend environment) the runtime is the V8 engine."),(0,r.kt)("p",null,"And when it comes to queues, we are actually working with a queue every time we run async JavaScript code in the browser. The browser actually uses separate web APIs to run async code and when that async code is ready to run (such as when a response from an API is received), that code is actually put in a ",(0,r.kt)("strong",{parentName:"p"},"callback queue")," which is ",(0,r.kt)("em",{parentName:"p"},"not")," the call stack. So our synchronous code is put on the call stack (LIFO) while our asynchronous code is queued up in the callback queue (FIFO). Meanwhile, an event loop determines whether to run code from the call stack or the callback queue. You don't need to have a deep understanding of this to work with JavaScript. The point here is that we are regularly working with both stacks and queues whether we are aware of it or not!"),(0,r.kt)("h3",{id:"writing-our-own-stack-and-queue-functions"},"Writing Our Own Stack and Queue Functions"),(0,r.kt)("h4",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"Next, let's do a little exercise. See if you can write your own ",(0,r.kt)("inlineCode",{parentName:"p"},"stack()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"queue()")," classes which add and remove elements as needed. Here are some hints \u2014 and don't overthink it. It's actually surprisingly simple to do."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remember that both stacks and queues are data structures."),(0,r.kt)("li",{parentName:"ul"},"What common data structure will allow us to easily add and remove elements?"),(0,r.kt)("li",{parentName:"ul"},"Stacks are last in, first out, which means we need to add things to the end of the data structure and remove things from the end of the data structure."),(0,r.kt)("li",{parentName:"ul"},"Queues are first in, first out, which means we need to add things to the end of the data structure and then remove things from the beginning of the data structure.")),(0,r.kt)("p",null,"Take a few minutes to write out these classes and then check out the solution below."),(0,r.kt)("h4",{id:"solution"},"Solution"),(0,r.kt)("p",null,"The hints hopefully made it fairly clear that we can use arrays to easily model both queues and stacks. ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," can be used to add elements to the end of either a stack or a queue. Meanwhile, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.pop()")," to remove elements from the end of a stack and we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," to remove elements from the beginning of a queue."),(0,r.kt)("p",null,"Here's our simple implementation of a stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Stack {\n  constructor() {\n    this.elements = [];\n  }\n\n  push(element) {\n    return this.elements.push(element);\n  }\n\n  pop() {\n    return this.elements.pop();\n  }\n}\n")),(0,r.kt)("p",null,"Yep, that's it. That is really all a stack is doing \u2014 pushing and popping. Note that we can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.unshift()")," as well. This feels a bit closer to how a stack actually works since it adds an element to the beginning of the collection and then removes it from the beginning of the collection. The one downside to this approach is that it's a bit slower \u2014 that's because JavaScript needs to re-index the array each time an element is added or removed from the beginning of the stack."),(0,r.kt)("p",null,"Ultimately, either approach is fine \u2014 the most important thing is that whichever element was added to the stack most recently must also be the one that gets removed most recently \u2014 that's last-in, first-out (LIFO)."),(0,r.kt)("p",null,"Here's our implementation of a queue \u2014 which will look very similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Queue {\n  constructor() {\n    this.elements = [];\n  }\n\n  enqueue(element) {\n    return this.elements.push(element);\n  }\n\n  dequeue() {\n    return this.elements.shift();\n  }\n}\n")),(0,r.kt)("p",null,"There are a few differences here. First, we call our methods ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue.prototype.enqueue()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue.prototype.dequeue()"),". That's because when we add an item to a queue, it's known as ",(0,r.kt)("strong",{parentName:"p"},"enqueuing")," while removing an item from a queue is known as ",(0,r.kt)("strong",{parentName:"p"},"dequeuing"),"."),(0,r.kt)("p",null,"Actual queues and stacks generally have other methods as well \u2014 and they are more complex than these very simple implementations. However, on a basic conceptual level, the code examples above encapsulate what we need to know about stacks and queues."),(0,r.kt)("p",null,"We'll get more practice with stacks and queues when we write certain algorithms. For instance, it's common to use a queue with a breadth-first search algorithm and a stack with a depth-first search algorithm."))}h.isMDXComponent=!0}}]);