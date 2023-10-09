"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70285],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7896),a=(n(2784),n(30876));const r={title:"\u270f\ufe0f Authentication with Identity Independent Project",id:"authentication-with-identity-independent-project",slug:"authentication-with-identity-independent-project",hide_table_of_contents:!0,sidebar_position:24,day:"friday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5a_advanced_databases_independent_project.md",paginationNext:null},o=void 0,l={unversionedId:"c-and-net/authentication-with-identity/authentication-with-identity-independent-project",id:"c-and-net/authentication-with-identity/authentication-with-identity-independent-project",title:"\u270f\ufe0f Authentication with Identity Independent Project",description:"Independent Projects Overview",source:"@site/docs/c-and-net/10_authentication-with-identity/5a-advanced-databases-independent-project.md",sourceDirName:"c-and-net/10_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/authentication-with-identity-independent-project",permalink:"/c-and-net/authentication-with-identity/authentication-with-identity-independent-project",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"\u270f\ufe0f Authentication with Identity Independent Project",id:"authentication-with-identity-independent-project",slug:"authentication-with-identity-independent-project",hide_table_of_contents:!0,sidebar_position:24,day:"friday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5a_advanced_databases_independent_project.md",paginationNext:null},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Weekly Technical Interview Prep",permalink:"/c-and-net/authentication-with-identity/weekly-technical-interview-prep"},next:{title:"\ud83d\udcd3 Building an API Objectives",permalink:"/c-and-net/building-an-api/building-an-api-objectives"}},s={},d=[{value:"Independent Projects Overview",id:"independent-projects-overview",level:2},{value:"Authentication with Identity Project Objectives",id:"authentication-with-identity-project-objectives",level:2},{value:"What is a polished, portfolio-quality state?",id:"what-is-a-polished-portfolio-quality-state",level:3},{value:"What are the baseline project requirements?",id:"what-are-the-baseline-project-requirements",level:3},{value:"Submission",id:"submission",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"independent-projects-overview"},"Independent Projects Overview"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Project prompts will be available on Epicenter at 8:00 am Friday for both full-time and part-time students. Before you begin your project, make sure to take a moment to review the ",(0,a.kt)("a",{parentName:"p",href:"/pre-work/getting-started-at-epicodus/independent-projects-and-code-reviews"},"Independent Projects and Code Reviews")," lesson."),(0,a.kt)("h2",{id:"authentication-with-identity-project-objectives"},"Authentication with Identity Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This independent project will focus on implementing authentication and authorization using Identity. You are ",(0,a.kt)("em",{parentName:"p"},"not required")," to make an API call and parse its response using RestSharp and Newtonsoft for this project. We will use that tooling in the next section!"),(0,a.kt)("p",null,"Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Does at least one of your classes have all CRUD methods implemented in your app?"),(0,a.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,a.kt)("strong",{parentName:"li"},"other")," class that are related to it?"),(0,a.kt)("li",{parentName:"ul"},"Are users able to register, log in and log out with Identity?"),(0,a.kt)("li",{parentName:"ul"},"Is Create, Update and Delete functionality limited to authenticated users?"),(0,a.kt)("li",{parentName:"ul"},"Build files and sensitive information are included in ",(0,a.kt)("inlineCode",{parentName:"li"},".gitignore")," file and is not to be tracked by Git, and includes instructions on how to create the ",(0,a.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and set up the project."),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt\u2019s required functionality and baseline project requirements are in place by the deadline.")),(0,a.kt)("h3",{id:"what-is-a-polished-portfolio-quality-state"},"What is a polished, portfolio-quality state?"),(0,a.kt)("p",null,"When a project is both polished and in a portfolio-quality state, this means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure. "),(0,a.kt)("li",{parentName:"ul"},"You are following the best practices and coding conventions we teach.")),(0,a.kt)("h3",{id:"what-are-the-baseline-project-requirements"},"What are the baseline project requirements?"),(0,a.kt)("p",null,"All independent coding projects at Epicodus have these baseline requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A complete and informative README"),(0,a.kt)("li",{parentName:"ul"},"The project's commit history demonstrates that the project\u2019s required work schedule and hours have been met:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"8 hours completed on Friday is required for full-time students"),(0,a.kt)("li",{parentName:"ul"},"4 hours completed over the weekend is required for part-time students"))),(0,a.kt)("li",{parentName:"ul"},"Completion of the project based on the prompt ",(0,a.kt)("em",{parentName:"li"},"and")," objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.")),(0,a.kt)("h2",{id:"submission"},"Submission"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Submit your Github repository to the ",(0,a.kt)("strong",{parentName:"p"},"Authentication with Identity")," Code Review on ",(0,a.kt)("a",{parentName:"p",href:"https://epicenter.epicodus.com"},"Epicenter"),"."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"/pre-work/getting-started-at-epicodus/independent-projects-and-code-reviews"},"Independent Projects and Code Reviews"),"  for details on how to submit your code, how feedback works and course completion requirements."))}u.isMDXComponent=!0}}]);