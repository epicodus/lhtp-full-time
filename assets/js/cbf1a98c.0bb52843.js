"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[92720],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const o={title:"Using the Test Database",id:"using-the-test-database",slug:"using-the-test-database",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0hb_using_the_test_database.md"},s=void 0,r={unversionedId:"c-and-net/database-basics/using-the-test-database",id:"c-and-net/database-basics/using-the-test-database",title:"Using the Test Database",description:"In this lesson, we'll connect our test project to the test database and update our teardown method to empty it.",source:"@site/docs/c-and-net/8_database-basics/0hb-using-the-test-database.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/using-the-test-database",permalink:"/c-and-net/database-basics/using-the-test-database",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Using the Test Database",id:"using-the-test-database",slug:"using-the-test-database",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0hb_using_the_test_database.md"},sidebar:"c-and-net",previous:{title:"Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",permalink:"/c-and-net/database-basics/creating-a-test-database-exporting-and-importing-databases-with-mysql-workbench"},next:{title:"Deleting Objects in the Database",permalink:"/c-and-net/database-basics/deleting-objects-in-the-database"}},l={},p=[{value:"Using the Test Database",id:"using-the-test-database",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll connect our test project to the test database and update our teardown method to empty it. "),(0,i.kt)("h2",{id:"using-the-test-database"},"Using the Test Database"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First, let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet restore")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList.Tests")," directory to update the Tests project with the MySqlConnector package that we added to the production project."),(0,i.kt)("p",null,"Next, let's update ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," in our production directory to include a new database connection string, this time for our test database. As usual, make sure to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," keys with your own values. In the lessons in LearnHowToProgram.com, we always assume the ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"epicodus"),"."),(0,i.kt)("div",{class:"filename"},"ToDoList/appsettings.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ConnectionStrings": {\n      "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];",\n      "TestConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector_test;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"\n  }\n}\n')),(0,i.kt)("p",null,"Next, we'll refactor our existing ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTests.cs")," file. Take a look at the new code, and then we'll discuss it below."),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Extensions.Configuration;\n...\n\nnamespace ToDoList.Tests\n{\n\n  [TestClass]\n  public class ItemTests : IDisposable\n  {\n    // we\'ve added a new property\n    public IConfiguration Configuration { get; set; }\n\n    public void Dispose()\n    {\n      Item.ClearAll();\n    }\n\n    // we\'ve added a constructor\n    public ItemTests()\n    {\n      IConfigurationBuilder builder = new ConfigurationBuilder()\n          .AddJsonFile("appsettings.json");\n      Configuration = builder.Build();\n      DBConfiguration.ConnectionString = Configuration["ConnectionStrings:TestConnection"];\n    }\n\n    // existing tests here\n    ...\n\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, we include a new ",(0,i.kt)("inlineCode",{parentName:"p"},"using")," directive to import ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Configuration")," namespace. From this namespace, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurationBuilder();")," method to load ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," with our app's configurations. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then we create a property that we'll use to set our app's configurations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we set up a constructor for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTests")," class that does the work of setting up the database connection:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Configuration")," object that includes all of the data in our ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.json"),". "),(0,i.kt)("li",{parentName:"ul"},"We set ",(0,i.kt)("inlineCode",{parentName:"li"},"DBConfiguration.ConnectionString")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},'"TestConnection"')," database connection string, which we access through the ",(0,i.kt)("inlineCode",{parentName:"li"},"Configuration")," object. This overrides the ",(0,i.kt)("inlineCode",{parentName:"li"},"DBConfiguration.ConnectionString")," we set in ",(0,i.kt)("inlineCode",{parentName:"li"},"DatabaseConfig.cs"),", ensuring that our tests are connected to our test database, not our development database.")))),(0,i.kt)("p",null,"Take note of one detail: we're loading our app's configurations with different tools than we use in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," is implicitly loaded when we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationBuilder")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication.CreateBuilder(args);")," method. This does not happen with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurationBuilder()")," method that we use in ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTests.cs"),". Instead, we need to load application configurations manually, which is why we call ",(0,i.kt)("inlineCode",{parentName:"p"},'.AddJsonFile("appsettings.json");'),". "),(0,i.kt)("p",null,"The scope of these two methods is also different: ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurationBuilder()")," focuses on creating a configuration object, which is one aspect of creating a web application host, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication.CreateBuilder();")," creates a basic web application host. It's not important to remember these details, just to note that we're using two different processes of loading ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," in our project."),(0,i.kt)("p",null,"Finally, note that our ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method isn't programmed to interact with the database yet, but we'll tackle that in the next lesson."))}u.isMDXComponent=!0}}]);