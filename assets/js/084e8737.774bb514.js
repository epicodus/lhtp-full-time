"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71285],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Introduction to Promises",id:"introduction-to-promises",slug:"introduction-to-promises",hide_table_of_contents:!0,sidebar_position:17,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_introduction_to_promises.md"},i=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/introduction-to-promises",id:"intermediate-javascript/asynchrony-and-apis/introduction-to-promises",title:"\ud83d\udcd3 Introduction to Promises",description:"ES2015 (also known as ES6) added a lot of great functionality to JavaScript. We've already learned about many of the most popular features, including let and const, classes, template literals, and destructuring. Now it's time to learn about promises, another great addition from ES6.",source:"@site/docs/intermediate-javascript/5_asynchrony-and-apis/1c-introduction-to-promises.md",sourceDirName:"intermediate-javascript/5_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/introduction-to-promises",permalink:"/intermediate-javascript/asynchrony-and-apis/introduction-to-promises",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\ud83d\udcd3 Introduction to Promises",id:"introduction-to-promises",slug:"introduction-to-promises",hide_table_of_contents:!0,sidebar_position:17,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_introduction_to_promises.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 Tools for Handling Async Code",permalink:"/intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code"},next:{title:"\ud83d\udcd3 Promises with API Calls",permalink:"/intermediate-javascript/asynchrony-and-apis/promises-with-api-calls"}},l={},p=[{value:"Working with Promises",id:"working-with-promises",level:2},{value:"A Demonstration",id:"a-demonstration",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ES2015 (also known as ES6) added a lot of great functionality to JavaScript. We've already learned about many of the most popular features, including ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),", classes, template literals, and destructuring. Now it's time to learn about promises, another great addition from ES6."),(0,a.kt)("p",null,"A promise allows us to wrap async code and then wait for the result of that code before moving on. In this lesson, we'll discuss why promises are so useful and how we can use them to tidy up our async code."),(0,a.kt)("p",null,"Promises have been a key concept in JavaScript development for quite some time, but up until ES6, they weren't native to JS. Instead, developers relied on promise libraries like Bluebird.js or used jQuery's ",(0,a.kt)("inlineCode",{parentName:"p"},"then()")," method. Some developers still prefer to use promise libraries instead of ES6's native functionality because these libraries have more features or are potentially more efficient than ES6 promises."),(0,a.kt)("h2",{id:"working-with-promises"},"Working with Promises"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before we dive into the async aspects of promises, it's important to cover some basic things about what a promise is."),(0,a.kt)("p",null,"First of all, a promise is just an object that inherits a few prototypal methods. Remember all that work we did just a few sections ago on JavaScript objects? Well, we can apply that knowledge now, which means we already know something about promises. At this point, we know that the first thing we have to do when we are working with JavaScript objects is create an instance of the object we want to work with, just like we did with the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object. Once we do that, we'll be able to use the object as well as any methods that are reserved for that type of object."),(0,a.kt)("p",null,"So on the most basic level, that's all a promise is: an object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let promise = new Promise();\n")),(0,a.kt)("p",null,"A promise generally takes a function as an argument. This function will hold our async code and it has two parameters, ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reject"),". So let's update our object a little bit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let promise = new Promise(function(resolve, reject) { \n  // async code goes here\n});\n")),(0,a.kt)("p",null,"We always need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reject")," parameters. Why? Well, we have to decide what determines whether a promise is resolved or rejected. JavaScript can't just look at a function that's making an API call and figure out what it's supposed to do with it. In the case of our API call, our promise needs to look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Some pseudocode added... these variable names are just to demonstrate how a promise works.\n\nlet promise = new Promise(function(resolve, reject) {\n  if (apiCallSuccessful) {\n    resolve(data)\n  } else {\n    reject(message)\n  }\n});\n")),(0,a.kt)("p",null,"In the example above, we've added a conditional. If ",(0,a.kt)("inlineCode",{parentName:"p"},"apiCallSuccessful")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", our promise will ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve"),". We'll pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," from the API call along. Otherwise, our promise will ",(0,a.kt)("inlineCode",{parentName:"p"},"reject")," and we'll pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," along."),(0,a.kt)("p",null,"Think of it as being a little bit like a gift. It won't be ready until your birthday. When it's opened, it will be resolved (\"I like it!\") or rejected (\"I don't like it.\"). Our response will then be passed along to be used where it's needed."),(0,a.kt)("p",null,"So if we look at the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," variable is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," object that holds a function with two parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reject"),". When this function is actually called, the promise can be in one of three states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pending"),": The object's initial state. A pending operation has been started but hasn't been completed yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fulfilled"),": A promise is fulfilled when the operation has been successfully completed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rejected"),":  A promise is rejected when the operation fails.")),(0,a.kt)("p",null,"Once again, ",(0,a.kt)("em",{parentName:"p"},"we")," need to determine what it means for the promise to succeed (fulfilled) or fail (rejected)."),(0,a.kt)("p",null,"It's also important to remember that ",(0,a.kt)("strong",{parentName:"p"},"a promise can only be resolved once"),". Once it's rejected or fulfilled, there's no going back. For instance, you can't try to turn a rejected promise into a fulfilled one. Instead, you'd have to create another promise and try again."),(0,a.kt)("p",null,"Let's use one more analogy to explain the process. Imagine you're waiting to renew your driver's license at the DMV. When you go in, you get a piece of paper with a number on it. You wait until your number is called and then you go to the counter to renew your license."),(0,a.kt)("p",null,"That piece of paper is similar to a promise. It represents an appointment you'll have in the future, but that appointment doesn't exist yet. While you're waiting for your number to be called, the promise is ",(0,a.kt)("strong",{parentName:"p"},"pending"),". The promise will either be ",(0,a.kt)("strong",{parentName:"p"},"fulfilled")," (driver's license renewed...yay!) or ",(0,a.kt)("strong",{parentName:"p"},"rejected")," (you forgot to bring the right documents with which to renew your license...)."),(0,a.kt)("p",null,"Once the promise is either fulfilled or rejected, it is complete and becomes immutable. An ",(0,a.kt)("strong",{parentName:"p"},"immutable")," value can't be changed. A promise is a one-off situation and we can't use it again. Returning to the analogy of getting a license, once that ticket is resolved, it can't be used again. If you want to do something else at the DMV, you'll have to get a new ticket (which represents a new promise)."),(0,a.kt)("p",null,"So how do we actually access and deal with this data and determine whether it's fulfilled or rejected?"),(0,a.kt)("p",null,"Promise objects have just three methods \u2014 we only need to know about two of them: ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.catch()"),". As you might guess, the latter method is used to handle errors that come up in promises."),(0,a.kt)("p",null,"We can do the following with our ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"promise.then(function(response) {\n  doSomething(response);\n});\n")),(0,a.kt)("p",null,"When we call ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),", the function inside the promise is triggered and the promise is now in a ",(0,a.kt)("strong",{parentName:"p"},"pending")," state. Any code passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," will ",(0,a.kt)("em",{parentName:"p"},"not")," run yet. That code won't be triggered until the promise is fulfilled or rejected. If our promise is resolved, our callback will be triggered, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"doSomething")," function will be called. As we can see here, we'll still be working with callbacks even when we use promises."),(0,a.kt)("p",null,"What happens if our promise is rejected? Well, we aren't handling that yet. We have to add an additional function to handle the rejection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"promise.then(function(success) {\n  doSomething(success);\n}, function(failure) {\n  itFailed(failure);\n});\n")),(0,a.kt)("p",null,"Note that we put a ",(0,a.kt)("inlineCode",{parentName:"p"},",")," after the first closing curly bracket ",(0,a.kt)("em",{parentName:"p"},"and then")," we add another function for rejection. The final closing parens then comes ",(0,a.kt)("em",{parentName:"p"},"after")," the second function. Why does this look so weird?"),(0,a.kt)("p",null,"Well, ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," takes up to two callback functions as arguments. This is a really cool thing about JavaScript and something that can be hard for beginners to wrap their heads around. Functions are ",(0,a.kt)("em",{parentName:"p"},"first class citizens"),", which means they can be passed around as variables and arguments. We will be discussing that in greater detail once we get to the React course."),(0,a.kt)("p",null,"So just remember that the first argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," is the function that runs if the promise is fulfilled and the second (optional) argument is the function that runs if the promise is rejected. You might wonder why the second function is optional \u2014 well, as a developer, you might want to do nothing if the promise is rejected. In this course section, we'll always include some form of error handling. "),(0,a.kt)("p",null,"Another important thing to note about the example above: ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"failure")," are just parameters of the functions and we can call them whatever we want. JavaScript doesn't care. We could call them both ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," but that's not very descriptive. It's common to call the parameter for a fulfilled promise ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," and the parameter for a rejected promise ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u2014 because when a promise is rejected, it often means there was an error. But once again, remember that you get to choose what they're called \u2014 just make sure that parameters, like other variables, have concise, descriptive names."),(0,a.kt)("h3",{id:"a-demonstration"},"A Demonstration"),(0,a.kt)("p",null,"So now that we know the basics of what a promise looks like, let's write a very silly one to illustrate exactly how they work. The function in this promise will generate a random number \u2014 either 0 or 1. If the value is 1, the promise will be resolved. If the value is 0, the promise will be rejected. "),(0,a.kt)("p",null,"This is a silly use case because we are using a promise to handle synchronous code. In the real world, we'd never do that \u2014 promises are for handing async code. However, the point of this example is to demonstrate how promises work before we introduce more complex async code. This way, we can see exactly how to create a promise, use it, and then handle its response."),(0,a.kt)("p",null,"Try out the following example in the DevTools console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let promise = new Promise(function(resolve, reject) {\n    const value = Math.floor(Math.random() * Math.floor(2))\n    if (value === 1) {\n        resolve("The value is 1!");\n    } else {\n        reject("The value is 0.");\n    }\n});\n\npromise.then(function(resolvedResponse) {\n    console.log("resolved!")\n    console.log(resolvedResponse);\n}, function(rejectedResponse) {\n    console.log("rejected!");\n    console.log(rejectedResponse);\n});\n')),(0,a.kt)("p",null,"First, we create a new promise and store it in a ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," variable. ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor(Math.random() * Math.floor(2))")," just randomly generates either the value 0 or 1. Then, we use a conditional to determine when the promise should be considered resolved or rejected. As we can see, we determine the exact conditions. It doesn't matter if it's a simple synchronous example like the one above or really complex async code."),(0,a.kt)("p",null,"Next, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," to determine how to handle both a ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvedResponse")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"rejectedResponse"),". Note the descriptive parameter names \u2014 maybe not as concise as we'd like but solid for educational purposes. "),(0,a.kt)("p",null,"Next, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," to let us know whether the promise was resolved or rejected. We also log the message that's passed from the promise into ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()"),"."),(0,a.kt)("p",null,"Try it out in the console. If the promise is resolved, we'll get the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"resolved!\nThe value is 1!\nPromise\xa0{<fulfilled>: undefined}\n")),(0,a.kt)("p",null,"If it's rejected, we'll get this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"rejected!\nThe value is 0.\nPromise\xa0{<fulfilled>: undefined}\n")),(0,a.kt)("p",null,"But what's that third line? We didn't ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," that, did we? ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," returns another promise \u2014 this is the ",(0,a.kt)("em",{parentName:"p"},"return")," of our method. This is absolutely essential because it allows us to chain multiple promises together, waiting until one resolves before starting the next one."),(0,a.kt)("p",null,"Once again, don't ever use promises for synchronous code \u2014 it's bad practice. We've already stated this but it's worth emphasizing. The example above is for learning purposes only."),(0,a.kt)("p",null,"One other thing \u2014 if you are trying the code snippet above multiple times without refreshing the console, you might be wondering what exactly is happening. Can't a promise be resolved only once? Yes. But each time we call the code snippet above, we are creating a ",(0,a.kt)("em",{parentName:"p"},"new")," promise variable with a new promise in it \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," allows us to do that. However, if we were just to run this part of the code again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'promise.then(function(resolvedResponse) {\n    console.log("resolved!")\n    console.log(resolvedResponse);\n}, function(rejectedResponse) {\n    console.log("rejected!");\n    console.log(rejectedResponse);\n});\n')),(0,a.kt)("p",null,"The promise will be fulfilled once, then each time we run the code again, we'd get the exact same response \u2014 the already fulfilled promise."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that we've gone through an example and covered promises in detail, let's summarize how they work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can wrap our async code in a promise."),(0,a.kt)("li",{parentName:"ul"},"Next, we can tell our function when it should resolve or reject, giving us fine-grained control over how JavaScript should handle our async code."),(0,a.kt)("li",{parentName:"ul"},"Finally, we can use ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()")," to run code once the async operation is complete \u2014 no need to keep tabs on the promise! JavaScript will do that for us."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()")," takes up to two functions as arguments \u2014 the first (required) function determines what happens if a promise is fulfilled while the second (optional) function determines what happens if the promise is rejected."),(0,a.kt)("li",{parentName:"ul"},"We can even chain promises together because ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.prototype.then()")," itself returns a promise. We'll learn more about that later in this section, though it's not required to do any chaining for the independent project.")),(0,a.kt)("p",null,"There are a few other useful methods related to promises as well, none of which you need to use in this section. However, it's good to know about them and you may want to try them out during a class project. For instance, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()")," to work with multiple promises:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Promise.all([promise1, promise2, promise3]);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()")," wraps the enclosed promises into a single giant promise that only resolves after each of the included promises are resolved."),(0,a.kt)("p",null,"There are a few other methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.race()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.catch()"),". Check out Mozilla's documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"promises")," to learn more."),(0,a.kt)("p",null,"Now that we've explained the basics of how a promise works, we're ready to add one to our code. In the next lesson, we'll use a promise to handle the results of an API call."))}u.isMDXComponent=!0}}]);