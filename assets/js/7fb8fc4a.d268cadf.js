"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44211],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"Setting Up Babel",id:"setting-up-babel",slug:"setting-up-babel",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1e_setting_up_babel.md"},o=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-babel",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-babel",title:"Setting Up Babel",description:"Before we begin writing our tests, we'll need to add Babel to our application. Babel is a tool that is most commonly used for transforming newer versions of JavaScript into older versions of JavaScript. Babel is essential because there are many newer features in JavaScript that older browsers don't understand. However, we still want to use these new JS features because they will make our code cleaner, more efficient and easier to read. In fact, we'll be covering some of these newer JavaScript features over the next few weeks.",source:"@site/docs/intermediate-javascript/4_test-driven-development-and-environments-with-javascript/1e-setting-up-babel.md",sourceDirName:"intermediate-javascript/4_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-babel",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-babel",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Setting Up Babel",id:"setting-up-babel",slug:"setting-up-babel",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1e_setting_up_babel.md"},sidebar:"intermediate-javascript",previous:{title:"Setting Up Jest",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-jest"},next:{title:"TDD with Jest: Testing the Triangle() Constructor",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-with-jest-testing-the-triangle-constructor"}},l={},p=[{value:"Installing Babel and a Babel Plugin",id:"installing-babel-and-a-babel-plugin",level:2},{value:"Configuring Babel",id:"configuring-babel",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before we begin writing our tests, we'll need to add Babel to our application. ",(0,r.kt)("strong",{parentName:"p"},"Babel")," is a tool that is most commonly used for transforming newer versions of JavaScript into older versions of JavaScript. Babel is essential because there are many newer features in JavaScript that older browsers don't understand. However, we still want to use these new JS features because they will make our code cleaner, more efficient and easier to read. In fact, we'll be covering some of these newer JavaScript features over the next few weeks. "),(0,r.kt)("p",null,"Fortunately, we don't have to worry about Chrome understanding many of these newer features \u2014 that's because Chrome is an evergreen browser that's already compatible with the features we will be using. However, if we were working on an enterprise application where it's likely some of our customers are using outdated browsers, we'd need to use tools like Babel to make our sites compatible with those browsers."),(0,r.kt)("p",null,"However, that's not why we need Babel for our projects. After all, we know Chrome is good to go with any new features of JavaScript we'll be using."),(0,r.kt)("p",null,"Our issue is we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," statements in our applications from a newer version of ECMAScript, and Jest uses NodeJS's ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," statements. So, we use Babel to translate the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," statements into ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," statements that Jest needs. So we aren't transforming our code for other users \u2014 we are transforming our newer JavaScript syntax into syntax that our test runner Jest will be able to read."),(0,r.kt)("h2",{id:"installing-babel-and-a-babel-plugin"},"Installing Babel and a Babel Plugin"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's start by adding Babel to our application. In the root of the Shape Tracker directory, run this command to install Babel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @babel/core@7.22.5 --save-dev\n")),(0,r.kt)("p",null,"Next, we'll need to install a specific Babel plugin that will transform ES6 module syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @babel/plugin-transform-modules-commonjs@7.22.5 --save-dev\n")),(0,r.kt)("p",null,"Similar to webpack, Babel uses ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins/"},"plugins")," to specify how we want our code to be transformed. In this case, we're installing a plugin that will transform ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," statements into ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," statements."),(0,r.kt)("h2",{id:"configuring-babel"},"Configuring Babel"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Finally, we need to set up our Babel configuration. Just as we use an ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc")," file to configure ESLint, we'll use a ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," file to configure Babel. The file should go in the root directory of the project."),(0,r.kt)("div",{class:"filename"},".babelrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "env": {\n    "test": {\n      "plugins": ["@babel/plugin-transform-modules-commonjs"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The configuration above states that our test environment should use the plugin we just installed to transform ES6 modules into CommonJS modules, which is what Node uses."),(0,r.kt)("p",null,"This is the only Babel configuration we'll do in this course. Even though we are doing very little with it, it's good to have some exposure since this tool is very common in real world applications. "),(0,r.kt)("p",null,"If you are interested in learning more about using Babel in general, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/usage/"},"Babel Usage Guide"),". If you are interested in using Babel with webpack specifically, check out ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/babel-loader/"},"webpack's Babel documentation"),"."),(0,r.kt)("p",null,"Now we're ready to start writing tests!"))}d.isMDXComponent=!0}}]);