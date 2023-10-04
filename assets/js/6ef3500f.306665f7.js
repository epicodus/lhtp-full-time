"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[41037],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7896),i=(r(2784),r(30876));const o={title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},a=void 0,l={unversionedId:"react/team-week/learning-more-about-git",id:"react/team-week/learning-more-about-git",title:"Learning More About Git",description:"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear.",source:"@site/docs/react/6_team-week/learning-more-about-git.md",sourceDirName:"react/6_team-week",slug:"/react/team-week/learning-more-about-git",permalink:"/react/team-week/learning-more-about-git",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},sidebar:"react",previous:{title:"Rewriting History with Git",permalink:"/react/team-week/rewriting-history-with-git"},next:{title:"Practicing the Git Workflow",permalink:"/react/team-week/practicing-the-git-workflow"}},s={},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear."),(0,i.kt)("p",null,"Check out the site ",(0,i.kt)("a",{parentName:"p",href:"http://think-like-a-git.net/"},"Think Like (a) Git"),". The site is a comprehensive and fun overview of git by Sam Livingson-Gray, a Ruby developer based in Portland, Oregon."),(0,i.kt)("p",null,"We recommend reading through each of the sections (which are short, quick reads) starting from the beginning. Also, make sure you read the following sections, which may be particularly useful during team week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/testing-out-merges.html"},"Testing Out Merges"),': This section illustrates several patterns for beginners to merge their code before they move on to "Black Belt Merging."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/rebase-from-the-ground-up.html"},"Rebase From the Ground Up"),": This section goes into more depth about how ",(0,i.kt)("inlineCode",{parentName:"li"},"git rebase")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"git cherrypick")," work. You may not use these commands much \u2014 yet \u2014 but they will be helpful long-term in your growth as a developer.")))}g.isMDXComponent=!0}}]);