"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89446],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(7896),r=(n(2784),n(30876));const l={title:"\ud83d\udcd3 Multiple Controllers",id:"multiple-controllers",slug:"multiple-controllers",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1g_multiple_controllers.md"},i=void 0,a={unversionedId:"c-and-net/basic-web-applications/multiple-controllers",id:"c-and-net/basic-web-applications/multiple-controllers",title:"\ud83d\udcd3 Multiple Controllers",description:"So far we've been using a single controller to handle our routes. However, larger projects often use many controllers and it's common to create a controller for each model in our application. In this lesson, we'll walk through the correct way to implement more than one controller.",source:"@site/docs/c-and-net/7_basic-web-applications/1g-multiple-controllers.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/multiple-controllers",permalink:"/c-and-net/basic-web-applications/multiple-controllers",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"\ud83d\udcd3 Multiple Controllers",id:"multiple-controllers",slug:"multiple-controllers",hide_table_of_contents:!0,sidebar_position:28,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1g_multiple_controllers.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Loops and Conditionals with Razor",permalink:"/c-and-net/basic-web-applications/loops-and-conditionals-with-razor"},next:{title:"\u270f\ufe0f Journal #14 Discussion",permalink:"/c-and-net/basic-web-applications/journal-14-discussion"}},s={},c=[{value:"Project Structure",id:"project-structure",level:2},{value:"<code>ItemsController</code>",id:"itemscontroller",level:2},{value:"Views for <code>ItemsController</code> Routes",id:"views-for-itemscontroller-routes",level:3},{value:"<code>HomeController</code>",id:"homecontroller",level:2},{value:"Views for <code>HomeController</code> Routes",id:"views-for-homecontroller-routes",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far we've been using a single controller to handle our routes. However, larger projects often use many controllers and it's common to create a controller for each model in our application. In this lesson, we'll walk through the correct way to implement more than one controller."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's alter our To Do List to use multiple controllers. Our ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController")," will handle a central homepage to greet users. It will be handled by a ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController"),". Then, all logic, routes, and views meant to work with To Do List ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s will be handled by a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemsController.cs")," file in the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList/Controllers")," directory."),(0,r.kt)("li",{parentName:"ul"},"Create a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"Items")," subdirectory in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDoList/Views")," directory."),(0,r.kt)("li",{parentName:"ul"},"Move the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"Views/Home/Index.cshtml")," file into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Views/Items")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},"Move our existing ",(0,r.kt)("inlineCode",{parentName:"li"},"Views/Home/CreateForm.cshtml")," file into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Views/Items")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},"Add a new, empty ",(0,r.kt)("inlineCode",{parentName:"li"},"Index.cshtml")," file into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Views/Home")," directory.")),(0,r.kt)("p",null,"The resulting project structure should look like this:"),(0,r.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 ToDoList \u2502   \u251c\u2500\u2500 Controllers \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 HomeController.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ItemsController.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Models \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Item.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Program.cs \u2502\xa0\xa0 \u251c\u2500\u2500 ToDoList.csproj \u2502\xa0\xa0 \u2514\u2500\u2500 Views \u2502\xa0\xa0     \u251c\u2500\u2500 Home \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 Index.cshtml \u2502\xa0\xa0     \u2514\u2500\u2500 Items \u2502\xa0\xa0         \u251c\u2500\u2500 CreateForm.cshtml \u2502\xa0\xa0         \u2514\u2500\u2500 Index.cshtml \u2514\u2500\u2500 ToDoList.Tests"),(0,r.kt)("h2",{id:"itemscontroller"},(0,r.kt)("inlineCode",{parentName:"h2"},"ItemsController")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll cut the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController.cs")," and paste them into ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController.cs"),". This controller will be responsible for handling the routes that pertain to ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s. By convention, we pluralize the class name, which is why it's ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"Items")),(0,r.kt)("inlineCode",{parentName:"p"},"Controller")," not ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"Item")),(0,r.kt)("inlineCode",{parentName:"p"},"Controller"),"."),(0,r.kt)("p",null,"Then we'll update the ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," name to state ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController"),":"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\nnamespace ToDoList.Controllers\n{\n    public class ItemsController : Controller\n    {\n\n      ...\n   ...\n...\n")),(0,r.kt)("p",null,"Next, we'll need to alter the path of our ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," route:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpGet("/items")]\n    public ActionResult Index()\n    {\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n...\n')),(0,r.kt)("p",null,"Here we simply change the path in the route's decorator to read ",(0,r.kt)("inlineCode",{parentName:"p"},'"/items"')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'"/"'),".  The entire updated ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," file should look like this:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class ItemsController : Controller\n  {\n\n    [HttpGet("/items")]\n    public ActionResult Index()\n    {\n      List<Item> allItems = Item.GetAll();\n      return View(allItems);\n    }\n\n    [HttpGet("/items/new")]\n    public ActionResult CreateForm()\n    {\n      return View();\n    }\n\n    [HttpPost("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return RedirectToAction("Index");\n    }\n\n  }\n}\n')),(0,r.kt)("p",null,"Note that we now have two routes that use the ",(0,r.kt)("inlineCode",{parentName:"p"},'"/items"')," path. We can do this because GET and POST are two different requests. We use\n",(0,r.kt)("inlineCode",{parentName:"p"},"[HttpGet()]")," for the GET request and ",(0,r.kt)("inlineCode",{parentName:"p"},"[HttpPost()]")," for the POST request. This way the server can easily tell them apart even if they use the same path."),(0,r.kt)("h3",{id:"views-for-itemscontroller-routes"},"Views for ",(0,r.kt)("inlineCode",{parentName:"h3"},"ItemsController")," Routes"),(0,r.kt)("p",null,"Let\u2019s revisit the views we've created for this controller. .NET will automatically look in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," subdirectory that has the same name as the controller. This means our new ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController"),"'s views will reside in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Items")," directory we just created."),(0,r.kt)("p",null,"We've already created ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm.cshtml")," and then moved them to the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Items")," subdirectory so our views require no further changes."),(0,r.kt)("h2",{id:"homecontroller"},(0,r.kt)("inlineCode",{parentName:"h2"},"HomeController")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's build our ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController")," now. It should look like this:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace ToDoList.Controllers\n{\n    public class HomeController : Controller\n    {\n\n      [HttpGet("/")]\n      public ActionResult Index()\n      {\n        return View();\n      }\n\n    }\n}\n')),(0,r.kt)("h3",{id:"views-for-homecontroller-routes"},"Views for ",(0,r.kt)("inlineCode",{parentName:"h3"},"HomeController")," Routes"),(0,r.kt)("p",null,"Finally, we need to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Index")," view in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," folder inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," folder:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Views/Home/Index.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <h1>Welcome to the To Do List!</h1>\n    <a href=\'/items/new\'>Add a new item</a>\n    <br />\n    <a href=\'/items\'>See list of items</a>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"We've successfully separated our code so that it uses two controllers. One handles ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s while the other handles the home page."),(0,r.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,r.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/4_multiple_controllers"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 4","_","multiple","_","controllers"))))}u.isMDXComponent=!0}}]);