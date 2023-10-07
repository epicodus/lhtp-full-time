"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61863],{30876:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return n?a.createElement(f,r(r({ref:t},h),{},{components:n})):a.createElement(f,r({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(30876));const s={title:"Tools for Handling Async Code",id:"tools-for-handling-async-code",slug:"tools-for-handling-async-code",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_tools_for_handling_async_code.md"},r=void 0,i={unversionedId:"intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code",id:"intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code",title:"Tools for Handling Async Code",description:"So far, we've learned how to use an XMLHttpRequest object to make our API call. To handle the asynchrony of the request, or, waiting for the request to be sent out and a response returned to us, we used event listeners and callback functions. Why? Well, we only want our code to call the functions that process the API response once the API call is complete, and not before.",source:"@site/docs/intermediate-javascript/5_asynchrony-and-apis/1b-tools-for-handling-async-code.md",sourceDirName:"intermediate-javascript/5_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code",permalink:"/intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Tools for Handling Async Code",id:"tools-for-handling-async-code",slug:"tools-for-handling-async-code",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1b_tools_for_handling_async_code.md"},sidebar:"intermediate-javascript",previous:{title:"OpenWeather API, Giphy API",permalink:"/intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api"},next:{title:"Introduction to Promises",permalink:"/intermediate-javascript/asynchrony-and-apis/introduction-to-promises"}},l={},c=[{value:"The Pyramid of Doom, or Callback Hell",id:"the-pyramid-of-doom-or-callback-hell",level:2},{value:"JavaScript Tools for Managing Asynchrony",id:"javascript-tools-for-managing-asynchrony",level:2},{value:"Callbacks",id:"callbacks",level:3},{value:"Promises",id:"promises",level:3},{value:"Async Functions",id:"async-functions",level:3},{value:"So Which Tool Do I Use?",id:"so-which-tool-do-i-use",level:3}],h={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far, we've learned how to use an ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object to make our API call. To handle the asynchrony of the request, or, waiting for the request to be sent out and a response returned to us, we used event listeners and callback functions. Why? Well, we only want our code to call the functions that process the API response once the API call is complete, and not before. "),(0,o.kt)("p",null,"We should remember that JavaScript is non-blocking, so it won't wait for a line of asynchronous code to finish processing before proceeding with the next line of code. This is why we must use callback functions to instruct our code how to proceed once the asynchronous action is done. In this way, callback functions allow us to control the order in which asynchronous and synchronous functions run. "),(0,o.kt)("p",null,"An important piece of history here is that ",(0,o.kt)("strong",{parentName:"p"},"callback functions used to be the only tool available to handle asynchronous code"),". This includes callbacks that we pass to event handlers that are called later, whenever the corresponding event happens."),(0,o.kt)("p",null,"Nowadays, callbacks are just one way for JavaScript developers to deal with async code. In this lesson (and following lessons), we'll learn about newer tools at our disposal to make API calls and handle asynchrony, all of which makes our lives easier as developers. We'll start this exploration by learning why these newer tools came about to begin with. "),(0,o.kt)("h2",{id:"the-pyramid-of-doom-or-callback-hell"},"The Pyramid of Doom, or Callback Hell"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Quite often in larger applications we need to make multiple API calls, not just one like in our OpenWeather API project. It also happens often that the next API call we make depends on the response we get from the last API call. For an example, let's consider an application that tells you what something is based off of an image, and translates that word into multiple languages. In fact, this was a team week project from Epicodus students!"),(0,o.kt)("p",null,"To make this application function, these students needed to make an API call to an AI processor to guess what the image is, then with that returned data, make another API call to translate the word into multiple languages. "),(0,o.kt)("p",null,"Well, say we needed to make another API call based on the returned translation data, and then another based on that returned API data. A series of asynchronous calls that are each managed by a callback can get confusing fast, and code that is confusing is code that is difficult to debug and maintain. "),(0,o.kt)("p",null,"Let's see what this might look like. To understand how a series of callback functions leads to code that's hard to understand, we'll look at a simple example that doesn't make API calls, but uses callback functions in the exact manner that we would if we were making API calls. "),(0,o.kt)("p",null,"The following code takes in user input, and puts it through a series of functions; each function transforms the user input in a specific (and very arbitrary) way. Notably, the next function always relies on the result of the previous function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// This function adds a string to the end of the user input\nfunction stepOne(userInput, callback) {\n  const result = userInput + " and manage asynchrony via callbacks";\n  callback(result)\n}\n\n// This function adds another string to the end of the input string, \n// which is the result from the stepOne() function\nfunction stepTwo(data, callback) {\n  const result = data + "!!!!";\n  callback(result)\n}\n\n// This function uppercases the input string, \n// which is the result from the stepTwo() function\nfunction stepThree(data, callback) {\n  const result = data.toUpperCase();\n  callback(result)\n}\n\n// This function lowercases the third word of the input string, \n// which is the result from the stepThree() function\nfunction stepFour(data, callback) {\n  dataArray = data.split(" ");\n  dataArray[2] = dataArray[2].toLowerCase();\n  const result = dataArray.join(" ");\n  callback(result);\n}\n\nfunction getAPIData(userInput) {\n  stepOne(userInput, function(firstChange) {\n    stepTwo(firstChange, function(secondChange) {\n      stepThree(secondChange, function(thirdChange) {\n        stepFour(thirdChange, function(fourthChange) {\n          console.log(fourthChange);\n        });\n      });\n    });\n  });\n}\n\ngetAPIData("let\'s get API data");\n')),(0,o.kt)("p",null,"Note that you can copy and paste the above code and add it to your DevTools. When you do, you will see ",(0,o.kt)("inlineCode",{parentName:"p"},"LET'S GET api DATA AND MANAGE ASYNCHRONY VIA CALLBACKS!!!!")," printed to the console."),(0,o.kt)("p",null,"Again, while there's no API calls and no asynchrony (and not even error handling to make our code even more complex), this example shows us the trouble of using a series of nested callbacks to manage a series of async actions: it's hard to understand!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getAPIData(userInput) {\n  stepOne(userInput, function(firstChange) {\n    stepTwo(firstChange, function(secondChange) {\n      stepThree(secondChange, function(thirdChange) {\n        stepFour(thirdChange, function(fourthChange) {\n          console.log(fourthChange);\n        });\n      });\n    });\n  });\n}\n")),(0,o.kt)("p",null,"More than being hard to understand, there are quite a few problems with the code above. One of the biggest problems is that these four hypothetical functions are now reliant on each other. If we make a change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"stepTwo")," function, the entire house of cards might come tumbling down. "),(0,o.kt)("p",null,"In this example, all the callbacks are in order and in the same file, making them somewhat easier to read, but imagine a large codebase where these callback functions might be located in separate files or used in multiple locations. If you are debugging or making an update, you'll have to work through a whole series of files. "),(0,o.kt)("p",null,'Also, it\'s possible that some of the functions you use in this series of callbacks are used elsewhere in our code \u2014 making it impossible to write the code in the order that it would actually be called. The result is that developers end up with "spaghetti code." This means that they have to follow a strand of spaghetti through many other tangled strands of spaghetti to make updates or fixes to their code. '),(0,o.kt)("p",null,"Finally, the example above is just four functions \u2014 now imagine a dozen functions, both async and sync. Some are used in just part of the codebase, and others used in many places. Again, this can get confusing fast."),(0,o.kt)("p",null,"Developers call this ",(0,o.kt)("strong",{parentName:"p"},"callback hell"),". Another popular name is ",(0,o.kt)("strong",{parentName:"p"},"the pyramid of doom"),", because the shape of the code looks like a pyramid on its side. No matter what you call it, developers try to avoid this style of programming, and have since come up with new tools to make the process of making a series of API calls that much easier. "),(0,o.kt)("p",null,"However, large code bases tend to remain complex by the nature of being large. All we can do as developers is make sure that our code is descriptive, modular, and decoupled, our logic is separated, and we use tools for handling asynchrony and API calls that make our code easier to read and reason about. This will lead to codebases that are easier to debug and maintain, and that can scale as requirements change."),(0,o.kt)("h2",{id:"javascript-tools-for-managing-asynchrony"},"JavaScript Tools for Managing Asynchrony"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this course section, we are going to learn about two other ways that JavaScript provides to handle async code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promises"),(0,o.kt)("li",{parentName:"ul"},"Async functions with the ",(0,o.kt)("inlineCode",{parentName:"li"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"await")," keywords")),(0,o.kt)("p",null,"There are other tools that JavaScript uses to deal with asynchrony ranging from generators to observables but we can only cover so much in one section. For this section's independent project, you can use whichever method of handling asynchrony that you prefer. "),(0,o.kt)("p",null,"To wrap up this lesson, we'll work through a brief overview of the three techniques we learn about in this section, including advantages and disadvantages of each."),(0,o.kt)("h3",{id:"callbacks"},"Callbacks"),(0,o.kt)("p",null,"A callback is a function that's passed into another function as an argument, to be called later. They are a huge part of JavaScript and an essential tool for all developers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async Advantages:")," A callback is a simple way to handle basic asynchrony, especially if the code isn't too complex. Also, callbacks can handle just about anything so they are a great all-purpose tool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async Disadvantages:"),' Callbacks quickly become difficult to work with when many are chained together. Code that uses many callbacks to handle asynchronous actions is difficult to read and reason about and bugs can be very difficult to deal with, leading developers into what is known as "callback hell", or the "pyramid of doom".'),(0,o.kt)("h3",{id:"promises"},"Promises"),(0,o.kt)("p",null,"Promises are a relatively new feature in JavaScript \u2014 they were originally added to ES6 (released in 2015). Promises wrap async code and are either resolved or rejected when the asynchronous action is complete. We can use a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," with a promise to handle a resolved or rejected promise. We'll learn more about them in the next lesson."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async Advantages:")," Promises are easy to work with ",(0,o.kt)("em",{parentName:"p"},"once you understand them"),". So be patient with yourself if they are confusing at first. We can write code in the order it runs and easily manage callbacks with promises. Promises are great with API calls!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async Disadvantages:")," A promise can only be resolved or rejected once. If you want a piece of code that handles many async operations, a promise isn't the best way to go."),(0,o.kt)("h3",{id:"async-functions"},"Async Functions"),(0,o.kt)("p",null,"Async functions are even newer than promises \u2014 they were added to JavaScript in ES7 (released in 2017). We can wrap code in an async function and force it to run in order as if it were synchronous code. This effectively makes JavaScript blocking, instead of non-blocking."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async advantages:")," Because code in async functions runs in order, it's easier to read, write, and reason about. Async functions are also a concise and elegant way to write async code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async disadvantages:")," All of the code inside an async function will be blocking \u2014 and will run synchronously \u2014 so don't put too much code inside one because then you might start overriding JavaScript's non-blocking advantages."),(0,o.kt)("h3",{id:"so-which-tool-do-i-use"},"So Which Tool Do I Use?"),(0,o.kt)("p",null,"Students often get confused throughout this section. At this point, it's tempting to want to know the best tool for the job and stick with that. But there are advantages and disadvantages to each tool depending on what you are doing. We can use the analogy for carpentry tools here. Want to attach a nail to a board? Use a hammer. How about many, many nails? Use a nail gun. How about a screw? Use a screwdriver. And many screws? Use a drill. We can't tell a carpenter just to use a hammer and forget about it. For the same reason, we can't just tell a developer to use promises and leave it at that."),(0,o.kt)("p",null,"However, promises are often the best way to handle API calls. That's because generally we'll make an API call just once in a function \u2014 and promises are rejected or resolved once. For that reason, most of the code you'll write during this section will probably use promises with callbacks \u2014 and this combo is a great way to go for this section's independent project as well. Just make sure you take some time to practice with each tool during the daily classwork."))}u.isMDXComponent=!0}}]);