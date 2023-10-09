"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[33031],{30876:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},42836:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(7896),n=(o(2784),o(30876));const i={title:"\ud83d\udcd3 Further Exploration with Testing",id:"further-exploration-with-testing",slug:"further-exploration-with-testing",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1h_further_exploration_with_testing.md"},a=void 0,s={unversionedId:"c-and-net/database-basics/further-exploration-with-testing",id:"c-and-net/database-basics/further-exploration-with-testing",title:"\ud83d\udcd3 Further Exploration with Testing",description:"We've been refactoring our controllers to utilize the Entity Framework Core functionality but we haven't updated any tests. Entity Framework Core and LINQ allow us to drastically reduce the code in our models and controllers because they do so much work behind the scenes. As long as we follow proper naming conventions, we don't need to add custom code for our models to properly interact with our database. These frameworks are already heavily tested, so it would be redundant for us to test our constructors, getters, and setters.",source:"@site/docs/c-and-net/8_database-basics/1h-further-exploration-with-testing.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/further-exploration-with-testing",permalink:"/c-and-net/database-basics/further-exploration-with-testing",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"\ud83d\udcd3 Further Exploration with Testing",id:"further-exploration-with-testing",slug:"further-exploration-with-testing",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1h_further_exploration_with_testing.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Showing Item Details with EF Core",permalink:"/c-and-net/database-basics/showing-item-details-with-ef-core"},next:{title:"\u270f\ufe0f Journal #10 Discussion",permalink:"/c-and-net/database-basics/journal-10-discussion"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We've been refactoring our controllers to utilize the Entity Framework Core functionality but we haven't updated any tests. Entity Framework Core and LINQ allow us to drastically reduce the code in our models and controllers because they do so much work behind the scenes. As long as we follow proper naming conventions, we don't need to add custom code for our models to properly interact with our database. These frameworks are already heavily tested, so it would be redundant for us to test our constructors, getters, and setters."),(0,n.kt)("p",null,"Similarly, since we use LINQ's database interaction to replace our CRUD methods, we no longer need to test for those, either. In essence, these additions remove the need to test the default functionality of our models entirely. For that reason, we won't be adding more unit tests for these technologies."),(0,n.kt)("p",null,"If we add custom methods to our models, we should add unit tests for them. However, this is outside the scope of this curriculum. You can find examples of how to unit test with EF Core using the InMemory provider in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/miscellaneous/testing/in-memory"},"Microsoft's thorough documentation on the topic"),"."),(0,n.kt)("p",null,"To add full coverage, you might also consider looking into integration tests in ASP.NET Core, but we leave these topics as further exploration for you. You can find a walkthrough of how to add integration tests to an MVC app in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0"},"Microsoft's documentation"),". Although Microsoft's documentation is comprehensive and user-friendly, it does not always line up directly with the technologies we use in our projects, so implementing these testing concepts may take time and patience."),(0,n.kt)("p",null,"While you are encouraged to look at these resources, testing will not be expected for your remaining C# code reviews."))}p.isMDXComponent=!0}}]);