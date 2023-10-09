"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[32739],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,y=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7896),a=(r(2784),r(30876));const o={title:"\u270f\ufe0f Whiteboarding Practice: Asynchrony",id:"whiteboarding-practice-asynchrony",slug:"whiteboarding-practice-asynchrony",hide_table_of_contents:!0,sidebar_position:31,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4a_classwork_whiteboarding_practice_asynchrony.md"},i=void 0,c={unversionedId:"intermediate-javascript/asynchrony-and-apis/whiteboarding-practice-asynchrony",id:"intermediate-javascript/asynchrony-and-apis/whiteboarding-practice-asynchrony",title:"\u270f\ufe0f Whiteboarding Practice: Asynchrony",description:"Whiteboard Practice",source:"@site/docs/intermediate-javascript/5_asynchrony-and-apis/4a-classwork-whiteboarding-practice-asynchrony.md",sourceDirName:"intermediate-javascript/5_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/whiteboarding-practice-asynchrony",permalink:"/intermediate-javascript/asynchrony-and-apis/whiteboarding-practice-asynchrony",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"\u270f\ufe0f Whiteboarding Practice: Asynchrony",id:"whiteboarding-practice-asynchrony",slug:"whiteboarding-practice-asynchrony",hide_table_of_contents:!0,sidebar_position:31,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4a_classwork_whiteboarding_practice_asynchrony.md"},sidebar:"intermediate-javascript",previous:{title:"\u270f\ufe0f Bike Index, Cryptocurrency Analytics App, API of Choice (Two-Day Project)",permalink:"/intermediate-javascript/asynchrony-and-apis/bike-index-cryptocurrency-analytics-app-api-of-choice-two-day-project"},next:{title:"\u270f\ufe0f Building a Compelling Portfolio",permalink:"/intermediate-javascript/asynchrony-and-apis/building-a-compelling-portfolio"}},s={},p=[{value:"Whiteboard Practice",id:"whiteboard-practice",level:2},{value:"Goal",id:"goal",level:3},{value:"Prompts",id:"prompts",level:3}],l={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whiteboard-practice"},"Whiteboard Practice"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When and how whiteboarding practice is implemented will be up to your teacher. Below is a recommended prompt."),(0,a.kt)("h3",{id:"goal"},"Goal"),(0,a.kt)("p",null,"For this section's whiteboarding lesson, we'll focus on whiteboarding functions that use asynchrony. This isn't just good whiteboarding practice \u2014 it will also help you solidify these key concepts."),(0,a.kt)("h3",{id:"prompts"},"Prompts"),(0,a.kt)("p",null,"For both prompts, try to get the syntax and methods as close to correct as you can. That said, it's also okay to write some pseudocode or ask for assistance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prompt 1"),": Write a method that returns a promise. The promise should be wrapped around an GET request to a theoretical geography API (either using ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object). Next, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then()")," to handle the return of the promise. The method should be able to handle errors."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prompt 2"),": Write an async function that handles a GET request to a theoretical geography API using either ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object. The async function should also handle the return of the API request (such as via a UI function or even just a ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," statement). Make sure to include a ",(0,a.kt)("inlineCode",{parentName:"p"},"try...catch")," block for error handling."))}h.isMDXComponent=!0}}]);