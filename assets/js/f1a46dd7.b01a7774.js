"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9620],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"Testing Functional Code",id:"testing-functional-code",slug:"testing-functional-code",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ba_testing_functional_code.md"},o=void 0,s={unversionedId:"react/functional-programming-with-javascript/testing-functional-code",id:"react/functional-programming-with-javascript/testing-functional-code",title:"Testing Functional Code",description:"Because we are focusing on teaching the concepts of functional programming, we will not include tests in the lessons. However, you are still expected to write tests for all of your functions. We can still use Jest in exactly the same way whether our code is functional or object-oriented. That means the tests themselves will not change significantly from how we wrote them in Intermediate JavaScript. Focus on the following process:",source:"@site/docs/react/2_functional-programming-with-javascript/0ba-testing-functional-code.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/testing-functional-code",permalink:"/react/functional-programming-with-javascript/testing-functional-code",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Testing Functional Code",id:"testing-functional-code",slug:"testing-functional-code",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ba_testing_functional_code.md"},sidebar:"react",previous:{title:"Introduction to Functional Programming",permalink:"/react/functional-programming-with-javascript/introduction-to-functional-programming"},next:{title:"Using Node in the Command Line",permalink:"/react/functional-programming-with-javascript/using-node-in-the-command-line"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Because we are focusing on teaching the concepts of functional programming, we will not include tests in the lessons. However, you are still expected to write tests for all of your functions. We can still use Jest in exactly the same way whether our code is functional or object-oriented. That means the tests themselves will not change significantly from how we wrote them in Intermediate JavaScript. Focus on the following process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start by writing a test for the smallest unit of behavior you can.")," In this section, this will usually mean checking to see if an expected output occurs when a function is called. In functional programming, ",(0,r.kt)("strong",{parentName:"p"},"a function ",(0,r.kt)("em",{parentName:"strong"},"always")," returns the same output"),". We'll discuss this more in a future lesson. This actually makes functional programs ",(0,r.kt)("em",{parentName:"p"},"easier")," to test than object-oriented programs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify that the test fails.")," The function should be correctly called but the expected output won't be returned because we haven't added code to the function body yet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get the test passing.")," This is when you'll use the functional programming techniques we learn throughout this section."))),(0,r.kt)("p",null,"So why aren't we including webpack, testing, and Jest with this section's lessons if we still expect you to write tests? Well, at this point in the program, you are almost ready to continue onto an internship or a future career. It's important to be able to retrieve skills you've learned in the past and refresh them as needed. ",(0,r.kt)("strong",{parentName:"p"},"This is an essential skill for developers.")," You will learn many things throughout your career \u2014 and you will forget many, too. There will not always be a tutorial to help you along the way as there often is with Learn How To Program."),(0,r.kt)("p",null,"We see the transition back to JavaScript as a valuable opportunity to apply a skill you've learned in the past to a new way of doing things. In this case, we are applying a tool we've learned for testing object-oriented JavaScript \u2014 but this time we'll be using it to test functional JavaScript code. This is another essential skill for developers \u2014 applying a tool you've used in a past familar setting to new, unfamiliar code."),(0,r.kt)("p",null,"Finally, we want the lessons in this section to focus entirely on functional programming. Functional programming is challenging to learn for new developers. Cluttering up the lessons with extraneous steps on incorporating Jest, writing tests, and adding webpack will detract from the key concepts in this section \u2014 especially since you've already learned how to use these tools!"),(0,r.kt)("p",null,"You may need to review lessons on test-driven development, using Jest, and setting up webpack. You are also welcome to use your repositories from Intermediate JavaScript to set up a boilerplate environment with webpack and Jest. Having good reference projects in GitHub can be very helpful when you need to revisit concepts you haven't used for a while. If you need to refer back to Intermediate JavaScript lessons to set up webpack and Jest, these links will be helpful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'We used the example project called "Shape Tracker" to demonstrate how to use TDD with Jest:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/epicodus-lessons/section-5-shape-tracker"},"Shape Tracker")))),(0,r.kt)("li",{parentName:"ul"},"The following lessons review TDD and how to set up Jest and Babel: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-review"},"TDD Review")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/red-green-refactor-workflow"},"Red Green Refactor Workflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-jest"},"Setting Up Jest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-babel"},"Setting Up Babel")))),(0,r.kt)("li",{parentName:"ul"},"The following lessons demonstrate using TDD to build out business logic in the Shape Tracker project:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-with-jest-testing-the-triangle-constructor"},"TDD with Jest: Testing the Triangle() Constructor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-with-jest-testing-the-triangleprototypechecktype-method"},"TDD with Jest: Testing the Triangle.prototype.checkType() Method")))),(0,r.kt)("li",{parentName:"ul"},"The following lessons explain best practices and additional tools we can implement to improve our testing experience with Jest:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/testing-best-practices"},"Testing Best Practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/expanding-our-testing-tools-adding-setup-and-teardown"},"Expanding our Testing Tools: Adding Setup and Teardown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/improving-test-reports-adding-test-coverage-information"},"Improving Test Reports: Adding Test Coverage Information"))))),(0,r.kt)("p",null,"You may also want to update your ESLint configuration to include functional programming rules. If so, we recommend the eslint-plugin-fp library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-fp"},"npm page for eslint-plugin-fp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jfmengels/eslint-plugin-fp"},"GitHub page for eslint-plugin-fp"))))}m.isMDXComponent=!0}}]);