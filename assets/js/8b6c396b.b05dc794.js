"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87663],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Planning Our Application: Part 2",id:"planning-our-application-part-2",slug:"planning-our-application-part-2",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_planning_our_application_part_2.md"},i=void 0,l={unversionedId:"react/react-fundamentals/planning-our-application-part-2",id:"react/react-fundamentals/planning-our-application-part-2",title:"\ud83d\udcd3 Planning Our Application: Part 2",description:"In the last lesson, we briefly covered local and shared state. The plan we made for our static Help Queue is a good start but we will need to make some changes to its structure. That means rethinking some parts of our application and creating a new diagram.",source:"@site/docs/react/3_react-fundamentals/1c-planning-our-application-part-2.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/planning-our-application-part-2",permalink:"/react/react-fundamentals/planning-our-application-part-2",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\ud83d\udcd3 Planning Our Application: Part 2",id:"planning-our-application-part-2",slug:"planning-our-application-part-2",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_planning_our_application_part_2.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Introduction to State",permalink:"/react/react-fundamentals/introduction-to-state"},next:{title:"\ud83d\udcd3 Adding Local State",permalink:"/react/react-fundamentals/adding-local-state"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we briefly covered local and shared state. The plan we made for our static Help Queue is a good start but we will need to make some changes to its structure. That means rethinking some parts of our application and creating a new diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/help-queue-with-ticket-control-updated.jpg",alt:"This diagram shows a few changes to the structure of our application, including a control component to determine which child component should be displayed."})),(0,o.kt)("p",null,"The main addition here is a component called ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Our application will be an SPA (single-page application) that shows the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList"),' component. However, when a user clicks the "Add Ticket" button, the ',(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component will be hidden and the user will see the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component instead."),(0,o.kt)("p",null,"That means both the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component need to have the same parent \u2014 but only one of the components will be showing at a time."),(0,o.kt)("p",null,"In order to toggle between these two components, ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," will need to have local state to determine which of the following states the page should be in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TicketList")," showing and ",(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," hidden;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," showing and ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketList")," hidden.")),(0,o.kt)("p",null,"We will take care of toggling between these components (our local state) before we start building our shared state. However, it's important to have our plan in place so let's take a look at which of these components will need to share state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TicketList")," will need access to the main list of tickets so it can read and display them;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," will need access to the main list of tickets so it can ensure new tickets can get passed into that main list.")),(0,o.kt)("p",null,"So where should this shared state go? Fortunately, this is a simple question to answer. Both components have the same parent. ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," is the lowest common ancestor to which we can lift our application state."),(0,o.kt)("p",null,"If our plan isn't fully clear yet, use this page as a reference as we follow along with upcoming lessons."))}d.isMDXComponent=!0}}]);