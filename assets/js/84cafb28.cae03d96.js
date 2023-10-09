"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[34969],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Planning a React Application",id:"planning-a-react-application",slug:"planning-a-react-application",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_planning_our_application.md"},o=void 0,l={unversionedId:"react/react-fundamentals/planning-a-react-application",id:"react/react-fundamentals/planning-a-react-application",title:"\ud83d\udcd3 Planning a React Application",description:"Before we start coding our site, let's plan the UI for our Help Queue application. At this point, we aren't going to worry about adding or changing state in our application. Our site will be entirely static and we will only have function components. This is actually the recommended way to build a React site. State gets complicated fast. If we start adding state without planning our application first, we'll be much more likely to write bad code and end up with frustrating bugs.",source:"@site/docs/react/3_react-fundamentals/0f-planning-our-application.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/planning-a-react-application",permalink:"/react/react-fundamentals/planning-a-react-application",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\ud83d\udcd3 Planning a React Application",id:"planning-a-react-application",slug:"planning-a-react-application",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_planning_our_application.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Introduction to JSX",permalink:"/react/react-fundamentals/introduction-to-jsx"},next:{title:"\ud83d\udcd3 Building a Static Site",permalink:"/react/react-fundamentals/building-a-static-site"}},p={},c=[{value:"Planning Our Application",id:"planning-our-application",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we start coding our site, let's plan the UI for our Help Queue application. At this point, we aren't going to worry about adding or changing state in our application. Our site will be entirely static and we will only have function components. This is actually the ",(0,i.kt)("strong",{parentName:"p"},"recommended way")," to build a React site. State gets complicated fast. If we start adding state without planning our application first, we'll be much more likely to write bad code and end up with frustrating bugs."),(0,i.kt)("p",null,"In the React documentation, there is an article called ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React")," that outlines the process of planning, building out a static site, and then finally adding state. We recommend taking a quick look at the steps in that article before continuing. We will be following the same process as we build out our Help Queue application."),(0,i.kt)("h2",{id:"planning-our-application"},"Planning Our Application"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We will start by drawing a component diagram of our application. Our component diagram will provide a very general sense of how our application should look and act. It will specifically show the components we will need and how they will be structured in relation to other components. ",(0,i.kt)("strong",{parentName:"p"},"You will be expected to draw a component diagram of your application for this project.")),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://www.draw.io/"},"https://www.draw.io")," for component drawings. You can also use a whiteboard or paper and then take a picture. Your READMEs should always include a component diagram."),(0,i.kt)("p",null,"Here is a diagram of our Help Queue:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/wk1-prework-static-react-site.jpg",alt:"A diagram of our Help Queue shows how we can break our application into smaller components."})),(0,i.kt)("p",null,"As our diagram demonstrates, our application will start with the following function components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Header"),": Our header will remain the same regardless of whether the user is looking at all tickets, a specific ticket, or the form for creating a new ticket.")),(0,i.kt)("p",null,"This will be a very small component, which is exactly what we want. Remember, our goal is to compose our application of many smaller components as opposed to fewer larger and cumbersome components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ticket List"),": This component will loop through all of our individual tickets, displaying them on the page. We will cover looping in JSX soon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ticket"),": We will also have a component for an individual ticket. Each ticket will have different properties passed into it (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"station"),"). As shown in the diagram above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," component will be nested inside ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList"),", which means it will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," component's child.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add Ticket"),": This will have a button for adding a ticket."))),(0,i.kt)("p",null,"We won't worry about our ticket detail or form just yet."),(0,i.kt)("p",null,"Now that we've planned out our application's structure, we're ready to start coding our site!"))}d.isMDXComponent=!0}}]);