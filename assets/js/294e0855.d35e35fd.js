"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2755],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7896),r=(n(2784),n(30876));const i={title:"Hello World! Compiling and Executing C# Programs",id:"hello-world!-compiling-and-executing-c-programs",slug:"hello-world!-compiling-and-executing-c-programs",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_compiling_and_executing_programs.md"},a=void 0,l={unversionedId:"c-and-net/basic-console-apps/hello-world!-compiling-and-executing-c-programs",id:"c-and-net/basic-console-apps/hello-world!-compiling-and-executing-c-programs",title:"Hello World! Compiling and Executing C# Programs",description:"In this lesson we'll discuss how to configure, write, and run basic C# programs by creating a very basic \"Hello World\" console application. Then, in the next lesson we'll start on our Shape Tracker project.",source:"@site/docs/c-and-net/4_basic-console-apps/0b-compiling-and-executing-programs.md",sourceDirName:"c-and-net/4_basic-console-apps",slug:"/c-and-net/basic-console-apps/hello-world!-compiling-and-executing-c-programs",permalink:"/c-and-net/basic-console-apps/hello-world!-compiling-and-executing-c-programs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hello World! Compiling and Executing C# Programs",id:"hello-world!-compiling-and-executing-c-programs",slug:"hello-world!-compiling-and-executing-c-programs",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_compiling_and_executing_programs.md"},sidebar:"c-and-net",previous:{title:"Expectations and Game Plan for Building a C# Console App",permalink:"/c-and-net/basic-console-apps/expectations-and-game-plan-for-building-a-c-console-app"},next:{title:"The Shape Tracker Project Structure",permalink:"/c-and-net/basic-console-apps/the-shape-tracker-project-structure"}},p={},s=[{value:"Compiling",id:"compiling",level:2},{value:"&quot;Hello World&quot; Application Setup",id:"hello-world-application-setup",level:2},{value:"The Project File",id:"the-project-file",level:3},{value:"The Code File",id:"the-code-file",level:3},{value:"Adding a Using Directive and Source Code",id:"adding-a-using-directive-and-source-code",level:3},{value:"Compiling our Program",id:"compiling-our-program",level:2},{value:"Adding <code>obj</code> and <code>bin</code> to <code>.gitignore</code>",id:"adding-obj-and-bin-to-gitignore",level:3},{value:"Compiler Errors",id:"compiler-errors",level:2},{value:"Running our Program",id:"running-our-program",level:2},{value:"A Shortcut",id:"a-shortcut",level:3},{value:"Exiting the Program",id:"exiting-the-program",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson we'll discuss how to configure, write, and run basic C# programs by creating a very basic \"Hello World\" console application. Then, in the next lesson we'll start on our Shape Tracker project."),(0,r.kt)("h2",{id:"compiling"},"Compiling"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# is an ",(0,r.kt)("strong",{parentName:"p"},"AOT (Ahead Of Time) compiled language"),", unlike JavaScript, which is a ",(0,r.kt)("strong",{parentName:"p"},"JIT (Just In Time) language"),". We'll be discussing this more soon."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"compiler")," is a program or service that converts written code to machine code. AOT compilers convert code ",(0,r.kt)("strong",{parentName:"p"},"before")," it needs to be run and then stores that converted code in machine-readable files."),(0,r.kt)("p",null,"Our REPL compiled our C# code for us after we enter it into the console. Soon, we'll learn commands to input into our terminal that will direct our code to be compiled and run. "),(0,r.kt)("h2",{id:"hello-world-application-setup"},'"Hello World" Application Setup'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Every C#/.NET program includes a minimum of 2 files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A project file"),(0,r.kt)("li",{parentName:"ul"},"A code file")),(0,r.kt)("p",null,"These two files work together to tell the compiler how to compile our code, and once compiled, what exactly to execute."),(0,r.kt)("p",null,'For our simple "Hello World" project, we\'ll do the following:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld")," directory."),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello.csproj")," file to the directory."),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," file to the directory. "),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file to the directory."),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," file to the directory.")),(0,r.kt)("p",null,"The resulting project structure should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HelloWorld/\n  \u251c\u2500\u2500 Hello.csproj\n  \u251c\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,r.kt)("h3",{id:"the-project-file"},"The Project File"),(0,r.kt)("p",null,"The project file includes basic information about our project: project-wide configurations and dependencies. In .NET 6, all project files end with the ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj"),' extension, and because of that we often refer to our project file as the "csproj".'),(0,r.kt)("div",{class:"filename"},"Hello.csproj"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n      <OutputType>Exe</OutputType>\n      <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n</Project>\n')),(0,r.kt)("p",null,"This is a ",(0,r.kt)("strong",{parentName:"p"},"boilerplate")," project file. Boilerplate code is code that follows a template and can be reused elsewhere, which means we could reuse this exact code for all other console application as well."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<OutputType>"),"Exe",(0,r.kt)("inlineCode",{parentName:"li"},"</OutputType>")," tells the compiler we're building an executable file. An ",(0,r.kt)("strong",{parentName:"li"},"executable file")," is one that can be run. Since we're creating console applications, our executable files will be run in our terminals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<TargetFramework>"),"net6.0",(0,r.kt)("inlineCode",{parentName:"li"},"</TargetFramework>")," instructs the compiler to use the .NET 6 framework to build this file. If we ever upgrade the version of our .NET SDK in the future, we'd need to change this line to point to the new version of .NET.")),(0,r.kt)("h3",{id:"the-code-file"},"The Code File"),(0,r.kt)("p",null,"The code file includes our actual C# code that will run in the console. Any file that contains C# code always ends in ",(0,r.kt)("inlineCode",{parentName:"p"},".cs"),". "),(0,r.kt)("p",null,"We're not limited to just one code file \u2014 we can have as many as we want! In this simple example, we're just using one code file. "),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n  static void Main()\n  {\n    // C# Program code goes here.\n  }\n}\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),", we have a class called ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," with a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," inside of it."),(0,r.kt)("p",null,"Program code resides within the brackets under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," class. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method is automatically run when we launch any C# program. Methods that automatically run when a program is launched are called ",(0,r.kt)("strong",{parentName:"p"},"entry points"),". So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method is the entry point to our console application."),(0,r.kt)("p",null,"While we're not limited to just one code file, ",(0,r.kt)("strong",{parentName:"p"},"it is required to have one entry point called ",(0,r.kt)("inlineCode",{parentName:"strong"},"Main()")," in our project's code"),". Since we have one code file, ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),", we're putting our entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," inside of it."),(0,r.kt)("p",null,"Notice the keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," attached to the entry point method: ",(0,r.kt)("inlineCode",{parentName:"p"},"static void Main()"),". We'll learn more about these keywords in upcoming lessons, but we'll go over them briefly now:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")," indicates that ",(0,r.kt)("inlineCode",{parentName:"li"},"Main()")," is a static method, a method that's called on the class and not an instance of the class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void")," indicates that the ",(0,r.kt)("inlineCode",{parentName:"li"},"Main()")," method has no return value. That is, we're not using the ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," statement to return a value from the method. ")),(0,r.kt)("p",null,"The entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method is always a ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," method that returns ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," (nothing). Because of that, this code is considered ",(0,r.kt)("strong",{parentName:"p"},"boilerplate")," code; we'll use it again and again in the applications we create."),(0,r.kt)("h3",{id:"adding-a-using-directive-and-source-code"},"Adding a Using Directive and Source Code"),(0,r.kt)("p",null,"Let's add some source code to our project. We'll insert a using directive as well as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method."),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System; // new code\n\nclass Program\n{\n  static void Main()\n  {\n    Console.WriteLine("Hello World!"); // new code\n  }\n}\n')),(0,r.kt)("p",null,"We've added a ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," method call that will print ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," to the console."),(0,r.kt)("p",null,"The first line ",(0,r.kt)("inlineCode",{parentName:"p"},"using System;")," is called a ",(0,r.kt)("strong",{parentName:"p"},"using directive"),". Because C# is compiled, we need to tell it what code it needs in order to function. In this case, we need to specify that the file ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," is using the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," namespace, because we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," method, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," class is located within the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," namespace. In other words, we can't access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," class, unless we import the namespace that it belongs in. "),(0,r.kt)("p",null,"Cooking is a useful analogy here. When we cook, we don't get out ",(0,r.kt)("em",{parentName:"p"},"every")," ingredient in the kitchen. It's more efficient to only collect the ingredients we're going to use. Remember, C# is concerned with speed. Directives are like an ingredient list and allow us to retrieve and organize only the ingredients we need. It keeps our compiled programs smaller and faster."),(0,r.kt)("h2",{id:"compiling-our-program"},"Compiling our Program"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now we can launch our program with the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," directory in the command line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the following command to instruct C# to ",(0,r.kt)("strong",{parentName:"p"},"compile")," our code:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet build\n")),(0,r.kt)("p",null,"When we compile our project, C# will generate two new directories, ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bin"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," directory contains the resources our code needs and the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory contains our compiled output code. "),(0,r.kt)("h3",{id:"adding-obj-and-bin-to-gitignore"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"obj")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"bin")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directories are auto-generated for every C# project, so we should not save them as part of our source code that gets pushed to our remote GitHub repos. Instead, we'll add them to our ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),":"),(0,r.kt)("div",{class:"filename"},".gitignore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"obj\nbin\n")),(0,r.kt)("p",null,"We'll do this for every project we create."),(0,r.kt)("h2",{id:"compiler-errors"},"Compiler Errors"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll encounter compiler errors often as we write C# code. A ",(0,r.kt)("strong",{parentName:"p"},"compiler error")," is generated during compilation, when we use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet build")," to our compile our source code. Compiler errors tell us that code can't be located, because there's a typo in our code, we're calling a method incorrectly, or maybe we're missing a using directive. Developers need to resolve compiler errors before they can run their project. "),(0,r.kt)("p",null,"For example, if we try to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," and we *",(0,r.kt)("em",{parentName:"p"},"don't")," include the necessary using directive ",(0,r.kt)("inlineCode",{parentName:"p"},"using System;"),", we'll get a compiler error message similar to this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\HelloWorld\\Program.cs(5,5): error CS0103: The name 'Console' does not exist in the current context [C:\\Users\\staff\\Desktop\\HelloWorld\\Hel lo.csproj]")),(0,r.kt)("p",null,"This error is telling us the compiler can't locate the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Console"),", and so it can't make sense of the line ",(0,r.kt)("inlineCode",{parentName:"p"},'Console.WriteLine("Hello World!");'),". To resolve this compiler error, we just need to declare the using directive ",(0,r.kt)("inlineCode",{parentName:"p"},"using System;")," at the top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," file."),(0,r.kt)("h2",{id:"running-our-program"},"Running our Program"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We're ready to run our program. Run the following command in our project directory ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld/")," to execute our project's compiled code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet run\n")),(0,r.kt)("p",null,"We'll then see ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," in our terminal! "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/hello-world-console-app.png",alt:"The terminal output from running our program: `Hello World`."})),(0,r.kt)("p",null,"That means we just wrote our first C# program! "),(0,r.kt)("p",null,"Woo-hoo!"),(0,r.kt)("h3",{id:"a-shortcut"},"A Shortcut"),(0,r.kt)("p",null,"When we run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run"),", this command compiles and executes our program. That means we don't need to explicitly compile our program with ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet build")," before we run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run"),". "),(0,r.kt)("p",null,"We usually want to run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet build")," to compile the program and NOT run it in order to resolve compilation errors. We'll see more examples of compilation errors in upcoming lessons. "),(0,r.kt)("h2",{id:"exiting-the-program"},"Exiting the Program"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If there's no code left to run, the program will end and exit automatically. In fact, this is what's happening in our simple Hello World console app. However, we can also exit the program by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," at any time."))}u.isMDXComponent=!0}}]);