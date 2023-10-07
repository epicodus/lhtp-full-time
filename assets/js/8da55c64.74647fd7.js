"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44304],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"API Calls in an ASP.NET Core MVC App",id:"api-calls-in-an-aspnet-core-mvc-app",slug:"api-calls-in-an-aspnet-core-mvc-app",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_apis_with_mvc.md"},l=void 0,r={unversionedId:"c-and-net/authentication-with-identity/api-calls-in-an-aspnet-core-mvc-app",id:"c-and-net/authentication-with-identity/api-calls-in-an-aspnet-core-mvc-app",title:"API Calls in an ASP.NET Core MVC App",description:"Now that we know how to turn an API response into objects, let's look at how we can integrate this into an MVC application. We're going to create a simple MVC app that will allow users to see basic information about the top headlines on the New York Times.",source:"@site/docs/c-and-net/10_authentication-with-identity/0k-apis-with-mvc.md",sourceDirName:"c-and-net/10_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/api-calls-in-an-aspnet-core-mvc-app",permalink:"/c-and-net/authentication-with-identity/api-calls-in-an-aspnet-core-mvc-app",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"API Calls in an ASP.NET Core MVC App",id:"api-calls-in-an-aspnet-core-mvc-app",slug:"api-calls-in-an-aspnet-core-mvc-app",hide_table_of_contents:!0,sidebar_position:20,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_apis_with_mvc.md"},sidebar:"c-and-net",previous:{title:"Deserializing API Responses with Newtonsoft.Json",permalink:"/c-and-net/authentication-with-identity/deserializing-api-responses-with-newtonsoftjson"},next:{title:"Library Catalog, Recipe Box Week-Long Project - Part 3 (day 3)",permalink:"/c-and-net/authentication-with-identity/library-catalog-recipe-box-week-long-project---part-3-day-3"}},s={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"A Few Notes on Using <code>dotnet new</code> to Scaffold an MVC App",id:"a-few-notes-on-using-dotnet-new-to-scaffold-an-mvc-app",level:3},{value:"Installing Packages",id:"installing-packages",level:3},{value:"Create an Environment Variable for the API Key",id:"create-an-environment-variable-for-the-api-key",level:3},{value:"Models",id:"models",level:2},{value:"Controller",id:"controller",level:2},{value:"Accessing our API Key in <code>HomeController.cs</code>",id:"accessing-our-api-key-in-homecontrollercs",level:3},{value:"View",id:"view",level:2},{value:"Summary",id:"summary",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we know how to turn an API response into objects, let's look at how we can integrate this into an MVC application. We're going to create a simple MVC app that will allow users to see basic information about the top headlines on the New York Times."),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For this next example project, you may build the application from scratch or scaffold a new ASP.NET Core MVC project using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ dotnet new mvc -o MvcApiCall -f net6.0\n")),(0,o.kt)("p",null,"If you create your MVC app from scratch, follow along with the basic structure for an ASP.NET Core MVC app outlined ",(0,o.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/c-and-net/basic-web-applications/configuration-quick-reference"},"in this LearnHowToProgram.com lesson"),". The directory name for our project will be ",(0,o.kt)("inlineCode",{parentName:"p"},"MvcApiCall"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't initialize or save your changes to Git until you've completed the setup steps for protecting your API key.")," "),(0,o.kt)("h3",{id:"a-few-notes-on-using-dotnet-new-to-scaffold-an-mvc-app"},"A Few Notes on Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"dotnet new")," to Scaffold an MVC App"),(0,o.kt)("p",null,"Just like with our console app, an ASP.NET Core MVC application scaffolded with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool will make use of newer features. If you look at ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," for example, you'll find that top level statements are used. We'll make one adjustment to the configurations: comment out or remove ",(0,o.kt)("inlineCode",{parentName:"p"},"<Nullable>enable</Nullable>")," as seen in the example below."),(0,o.kt)("div",{class:"filename"},"MvcApiCall.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    \x3c!-- <Nullable>enable</Nullable> --\x3e\n    <ImplicitUsings>enable</ImplicitUsings>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,"When we remove the global configuration for nullable types, we'll have to make one adjustment to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorViewModel.cs"),", which uses a nullable type. Add ",(0,o.kt)("inlineCode",{parentName:"p"},"#nullable enable")," to the top of the file, like so:"),(0,o.kt)("div",{class:"filename"},"Models/ErrorViewModel.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"#nullable enable\n\nnamespace MvcApiCall.Models;\n\npublic class ErrorViewModel\n{\n  ...\n}\n")),(0,o.kt)("h3",{id:"installing-packages"},"Installing Packages"),(0,o.kt)("p",null,"Next, let's add the RestSharp and NewtonSoft.Json packages to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package RestSharp --version 108.0.3\n$ dotnet add package Newtonsoft.Json --version 13.0.2\n")),(0,o.kt)("h3",{id:"create-an-environment-variable-for-the-api-key"},"Create an Environment Variable for the API Key"),(0,o.kt)("p",null,"The process of protecting our New York Times API key will look similar to how we protect our MySQL database password in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". However, we'll learn a new way of accessing our API key from our controller, later when we create our controller. During this setup portion, we'll create our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," and our ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," with our API key."),(0,o.kt)("p",null,"The first thing we'll do is add a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," listed inside, as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," folders."),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"appsettings.json\nobj\nbin\n")),(0,o.kt)("p",null,"Next, we'll commit the change we made to our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," to our Git history. If you haven't initialized Git do so now, and commit only your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," to start. This ensures that the API key that we add to our ",(0,o.kt)("inlineCode",{parentName:"p"},"appsetting.json")," never gets committed to our Git history."),(0,o.kt)("p",null,"Next, we'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file add our key within:"),(0,o.kt)("div",{class:"filename"},"appsettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NYT": "[YOUR-KEY-HERE]"\n}\n')),(0,o.kt)("p",null,"We're calling our key ",(0,o.kt)("inlineCode",{parentName:"p"},'"NYT"')," for New York Times. Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},'"[YOUR-API-KEY-HERE]"')," with your own API key. "),(0,o.kt)("p",null,"Note that if you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool to scaffold your MVC project, you'll already have an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file. For now, we'll use just ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", so delete ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Developement.json"),". When we learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," scaffolding tool in the next section we'll explain the differences between these two files. If you are anxious to know more now, ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#appsettingsjson"},"visit the MS Docs on ",(0,o.kt)("inlineCode",{parentName:"a"},"appsettings.json")),". As for your API key, add it to the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "AllowedHosts": "*",\n  "NYT": "[YOUR-KEY-HERE]"\n}\n')),(0,o.kt)("p",null,"The keys ",(0,o.kt)("inlineCode",{parentName:"p"},'"Logging"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"AllowedHosts"')," come as default configurations for ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," when we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," scaffolding tool."),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start by creating an ",(0,o.kt)("inlineCode",{parentName:"p"},"Article")," class similar to the one in our console application. In order to actually make an API call, we'll translate part of our console program into a ",(0,o.kt)("inlineCode",{parentName:"p"},"GetArticles()")," method inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Article")," class."),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Article.cs")," file within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models/")," directory with the following code:"),(0,o.kt)("div",{class:"filename"},"Models/Article.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing Newtonsoft.Json;\nusing Newtonsoft.Json.Linq;\nusing System.Threading.Tasks;\n\nnamespace MvcApiCall.Models\n{\n  public class Article\n  {\n    public string Section { get; set; }\n    public string Title { get; set; }\n    public string Abstract { get; set; }\n    public string Url { get; set; }\n    public string Byline { get; set; }\n    public string Item_Type { get; set; }\n\n    public static List<Article> GetArticles(string apiKey)\n    {\n      Task<string> apiCallTask = ApiHelper.ApiCall(apiKey);\n      string result = apiCallTask.Result;\n\n      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);\n      List<Article> articleList = JsonConvert.DeserializeObject<List<Article>>(jsonResponse["results"].ToString());\n\n      return articleList;\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Next, we'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiHelper")," class similar to the one we created in the last lessons. "),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiHelper.cs")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Models/")," directory and add the following code to it:"),(0,o.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing RestSharp;\n\nnamespace MvcApiCall.Models\n{\n  class ApiHelper\n  {\n    public static async Task<string> ApiCall(string apiKey)\n    {\n      RestClient client = new RestClient("https://api.nytimes.com/svc/topstories/v2");\n      RestRequest request = new RestRequest($"home.json?api-key={apiKey}", Method.Get);\n      RestResponse response = await client.ExecuteAsync(request);\n      return response.Content;\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This code should all be familiar from the last two lessons."),(0,o.kt)("h2",{id:"controller"},"Controller"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll keep the controller actions very simple. We'll just include an index route in ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController.cs"),"."),(0,o.kt)("p",null,"If you are working with a scaffolded MVC app (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool), simply replace the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," action with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," action from the example below."),(0,o.kt)("div",{class:"filename"},"Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing MvcApiCall.Models;\n\nnamespace MvcApiCall.Controllers\n{\n  public class HomeController : Controller\n  {\n    public IActionResult Index()\n    {\n        Task<string> allArticles = Article.GetArticles("[YOUR-API-KEY-HERE]");\n        return View(allArticles);\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Note that because ",(0,o.kt)("inlineCode",{parentName:"p"},"GetArticles()")," is a static method, it's called on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Article")," class itself."),(0,o.kt)("p",null,"We're not done here, yet! We need to import our API key from ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," into our ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," so we can pass it into our ",(0,o.kt)("inlineCode",{parentName:"p"},'Article.GetArticles("[YOUR-API-KEY-HERE]");')," method call. "),(0,o.kt)("h3",{id:"accessing-our-api-key-in-homecontrollercs"},"Accessing our API Key in ",(0,o.kt)("inlineCode",{parentName:"h3"},"HomeController.cs")),(0,o.kt)("p",null,"As part of building our web application host in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file gets loaded automatically as a default configuration file. That's why we can access it when we want to load our MySQL database settings. Remember this code from ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),"?"),(0,o.kt)("div",{class:"filename"},"Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  class Program\n  {\n    static void Main(string[] args)\n    {\n\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      ...\n\n      builder.Services.AddDbContext<ToDoListContext>(\n                        dbContextOptions => dbContextOptions\n                          .UseMySql(\n                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]\n                          )\n                        )\n                      );\n      ...\n    }\n  }\n...\n')),(0,o.kt)("p",null,"When we run ",(0,o.kt)("inlineCode",{parentName:"p"},"WebApplicationBuilder builder = WebApplication.CreateBuilder(args);"),", we're creating our web application builder object. It's at this point that ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," is implicitly loaded as a configuration file. "),(0,o.kt)("p",null,"Later when we access ",(0,o.kt)("inlineCode",{parentName:"p"},'builder.Configuration["ConnectionStrings:DefaultConnection"]'),", we're accessing our web application builder's configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"), and getting the database connection string therein. "),(0,o.kt)("p",null,"Well, we can also access our app's configurations (saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),") in our controllers. To do this we simply need to load the configurations via dependency injection. This is just like what we did with our database connection and Identity's ",(0,o.kt)("inlineCode",{parentName:"p"},"UserManager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignInManager"),". Let's look at the code to do this, and then review it. "),(0,o.kt)("p",null,"Here's how we'll update our ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController.cs"),":"),(0,o.kt)("div",{class:"filename"},"Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing MvcApiCall.Models;\nusing Microsoft.Extensions.Configuration;\n\nnamespace MvcApiCall.Controllers\n{\n  public class HomeController : Controller\n  {\n    private readonly string _apikey; // New property.\n\n    // New Controller.\n    public HomeController(IConfiguration configuration)\n    {\n      _apikey = configuration["NYT"];\n    }\n\n    public IActionResult Index()\n    {\n        Task<string> allArticles = Article.GetArticles(_apikey); // Using _apikey here!\n        return View(allArticles);\n    }\n  }\n}\n')),(0,o.kt)("p",null,"We use dependency injection to access our app's ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," configurations through the ",(0,o.kt)("inlineCode",{parentName:"p"},"IConfiguration")," service. This service gets injected into our controller in the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," constructor as the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," parameter. "),(0,o.kt)("p",null,"We don't save the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," object. Instead, we access the ",(0,o.kt)("inlineCode",{parentName:"p"},'"NYT"')," key to get our API key. We then save this value as a private readonly property called ",(0,o.kt)("inlineCode",{parentName:"p"},"_apikey"),". We can now use ",(0,o.kt)("inlineCode",{parentName:"p"},"_apikey")," as needed within our ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController"),". "),(0,o.kt)("p",null,"If you are working with a scaffolded MVC app (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool), you'll also see a ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," service injected into the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController"),". Ignore that, and update the controller with the new property and the constructor with the new parameter and statement as shown above. We won't learn about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," service, but you can optionally read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-6.0"},"on the docs"),"."),(0,o.kt)("h2",{id:"view"},"View"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The view for ",(0,o.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml")," will also be simple:"),(0,o.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>All Articles:</h1>\n\n<ul>\n@foreach (Article article in Model)\n{\n  <li>Section: @article.Section</li>\n  <li>Title: @article.Title</li>\n  <li>Abstract: @article.Abstract</li>\n  <li>Url: @article.Url</li>\n  <li>Byline: @article.Byline</li>\n  <li>Item Type: @article.Item_Type</li>\n  <br />\n}\n</ul>\n")),(0,o.kt)("p",null,"If you are working with a scaffolded MVC app (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," tool), simply add the above code below the existing code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml")," view."),(0,o.kt)("p",null,"Now we're ready to test out the results. Run your app and you'll see the same results from the New York Times API that we printed to our console. If you are using a scaffolded MVC app, you'll also see some of the boilerplate styling that comes default. "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this series of lessons, we've gotten just a bit of practice with making API calls. In the next course section we'll practice even more when we make API calls from an MVC front end to a custom API that we create. We'll also learn more about  the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," scaffolding tool and use it to build both APIs and MVCs."),(0,o.kt)("p",null,"It's worth a reminder that we've added very basic protection for our API key. We could still accidentally commit our API key to our Git history and publish it to the web. To learn about other ways we can manage secrets, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0"},"MS Docs on application secrets"),"."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/c-sharp-newyorktimes-api-call/tree/3_api_call_in_mvc_app"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Sample New York Times API Call: ",(0,o.kt)("inlineCode",{parentName:"a"},"3_api_call_in_mvc_app")))))}u.isMDXComponent=!0}}]);