"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26427],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(7896),n=(r(2784),r(30876));const i={title:"Whiteboard Practice: Composition",id:"whiteboard-practice-composition",slug:"whiteboard-practice-composition",hide_table_of_contents:!0,sidebar_position:34,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2b_classwork_whiteboard_composition.md"},a=void 0,l={unversionedId:"react/functional-programming-with-javascript/whiteboard-practice-composition",id:"react/functional-programming-with-javascript/whiteboard-practice-composition",title:"Whiteboard Practice: Composition",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/react/2_functional-programming-with-javascript/2b-classwork-whiteboard-composition.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/whiteboard-practice-composition",permalink:"/react/functional-programming-with-javascript/whiteboard-practice-composition",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Whiteboard Practice: Composition",id:"whiteboard-practice-composition",slug:"whiteboard-practice-composition",hide_table_of_contents:!0,sidebar_position:34,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2b_classwork_whiteboard_composition.md"},sidebar:"react",previous:{title:"Power Plant, Project Euler",permalink:"/react/functional-programming-with-javascript/power-plant-project-euler"},next:{title:"Further Exploration: Creating Deep Clones",permalink:"/react/functional-programming-with-javascript/further-exploration-creating-deep-clones"}},c={},s=[{value:"Practice with Composition",id:"practice-with-composition",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4},{value:"Problem #3",id:"problem-3",level:4},{value:"Problem #4",id:"problem-4",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,n.kt)("h3",{id:"practice-with-composition"},"Practice with Composition"),(0,n.kt)("p",null,"Alternate problem #1 and #2 with your pair. Then alternate problem #3 and #4. If someone gets stuck, you may help your pair whiteboard a problem or brainstorm a solution."),(0,n.kt)("h4",{id:"problem-1"},"Problem #1"),(0,n.kt)("p",null,"Compose a function called ",(0,n.kt)("inlineCode",{parentName:"p"},"paint()")," and then add it to three different painters. Each painter can only paint with one color. This should be the end result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> painter1.paints()\n"Paints green!"\n> painter2.paints()\n"Paints yellow!"\n> painter3.paints()\n"Paints red!"\n')),(0,n.kt)("h4",{id:"problem-2"},"Problem #2"),(0,n.kt)("p",null,"Compose a function called ",(0,n.kt)("inlineCode",{parentName:"p"},"sound()"),". You should be able to add the following functionality to the objects listed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> faucet.sound()\n"Drip drip drip."\n> oldCar.sound()\n"Grumble grumble"\n> sleepyBear.sound()\n"Grrr...yawn"\n')),(0,n.kt)("h4",{id:"problem-3"},"Problem #3"),(0,n.kt)("p",null,"Compose a function called ",(0,n.kt)("inlineCode",{parentName:"p"},"throw()"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"throw()")," function should determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"distance")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"speed")," a battle robot can throw a spear. This function should be unary, so you will need to use currying."),(0,n.kt)("p",null,"Next, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"throw()")," function to multiple battle robots. A result might look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> battleRobot1.throw();\n"The battle robot throws the spear 100 yards at 200 miles per hour!"\n')),(0,n.kt)("h4",{id:"problem-4"},"Problem #4"),(0,n.kt)("p",null,"First use closures to create three dance moves. For instance, a ",(0,n.kt)("inlineCode",{parentName:"p"},"dancer")," should be able to do the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'> dancer.samba()\n"The dancer sambas!"\n> dancer.tango()\n"The dancer tangos!"\n')),(0,n.kt)("p",null,"Then add the dance moves to a ",(0,n.kt)("inlineCode",{parentName:"p"},"dancer"),"."))}d.isMDXComponent=!0}}]);