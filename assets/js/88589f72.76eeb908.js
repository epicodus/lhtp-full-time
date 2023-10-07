"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29362],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7896),o=(a(2784),a(30876));const i={title:"Using create-react-app",id:"using-create-react-app",slug:"using-create-react-app",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0c_using_create_react_app.md"},r=void 0,l={unversionedId:"react/react-fundamentals/using-create-react-app",id:"react/react-fundamentals/using-create-react-app",title:"Using create-react-app",description:"Some developers build React applications from scratch. This involves creating custom webpack configurations, adding Node packages, and customizing Babel to fit the needs of the project. While this is a valid approach to building React applications, we've had plenty of practice with webpack, Node packages, and Babel during the Intermediate JavaScript course.",source:"@site/docs/react/3_react-fundamentals/0c-using-create-react-app.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/using-create-react-app",permalink:"/react/react-fundamentals/using-create-react-app",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using create-react-app",id:"using-create-react-app",slug:"using-create-react-app",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0c_using_create_react_app.md"},sidebar:"react",previous:{title:"The Virtual DOM",permalink:"/react/react-fundamentals/the-virtual-dom"},next:{title:"React Components",permalink:"/react/react-fundamentals/react-components"}},p={},s=[{value:"Using <code>create-react-app</code>",id:"using-create-react-app",level:2},{value:"Versioning Issues",id:"versioning-issues",level:3},{value:"Looking at C-R-A Project Files and Folders",id:"looking-at-c-r-a-project-files-and-folders",level:3},{value:"A Closer Look at <code>index.js</code>",id:"a-closer-look-at-indexjs",level:3},{value:"How React and webpack Work Together",id:"how-react-and-webpack-work-together",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some developers build React applications from scratch. This involves creating custom webpack configurations, adding Node packages, and customizing Babel to fit the needs of the project. While this is a valid approach to building React applications, we've had plenty of practice with webpack, Node packages, and Babel during the Intermediate JavaScript course."),(0,o.kt)("p",null,"Fortunately, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),", a tool that will set up our project for us. ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," uses tools like webpack behind the scenes but we will not need to customize our environment ourselves."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," comes with a default configuration right out of the box. This will make developing applications with React much more convenient. However, keep in mind that we won't be able to customize our configuration without ",(0,o.kt)("strong",{parentName:"p"},"ejecting")," our application, a process we will cover in just a moment."),(0,o.kt)("p",null,"While more complex applications may need custom configurations, ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," will cover all our needs and allow us to focus on learning React, not get bogged down in configuring our environment."),(0,o.kt)("h2",{id:"using-create-react-app"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"create-react-app")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can create our first ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npx create-react-app help-queue\n")),(0,o.kt)("p",null,"Note that we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," command, not the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," command. ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," is automatically bundled with recent versions of npm. The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," command is used for ",(0,o.kt)("strong",{parentName:"p"},"managing")," packages while the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," command actually ",(0,o.kt)("strong",{parentName:"p"},"executes")," those packages. Because we want to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," package, ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," is the right command here. "),(0,o.kt)("p",null,"Another nice thing about the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," command is that it can automatically execute packages that haven't been installed yet, by going and fetching the information on the npm registry. So, there's no need to download a package before directing Node to use it."),(0,o.kt)("p",null,"In the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),", npx will first ask permission to download the package, to which you should enter 'y'."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/npx-install-cra-message.png",alt:"Message from npx asking to install `create-react-app`"})),(0,o.kt)("h3",{id:"versioning-issues"},"Versioning Issues"),(0,o.kt)("p",null,"However, there's one important thing to know about ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),". It will download the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),", as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"react-scripts"),", and other packages. This is potentially an issue for two reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Later versions of ",(0,o.kt)("inlineCode",{parentName:"li"},"create-react-app")," may not be compatible with all the libraries we use."),(0,o.kt)("li",{parentName:"ul"},"The most recent version of ",(0,o.kt)("inlineCode",{parentName:"li"},"create-react-app")," may have a bug that you'll need to find a workaround for.")),(0,o.kt)("p",null,"As of July, 2022, the most recent version of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," does in fact have a small bug when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start"),". Take a look:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/cra-npm-start-warning-message.png",alt:"Message about deprecated technology after running `npm start` in our `create-react-app` app."})," "),(0,o.kt)("p",null,"This bug is a warning. While this warning doesn't impact the normal functioning of our application, this does demonstrate what the issues we might run into look like when using the latest technology."),(0,o.kt)("p",null,"This issue has already seen a lot of discussion in the create-react-app community. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/12035"},"this issue on the create-react-app GitHub repo")," to see how developers have discussed this issue, the solutions they've reported, the related tools they are using, and the general back and forth of discussion. That issue links to other issues and PRs that discuss more solutions. This is truly what being a developer is all about! (If you have the time, I highly suggest reading or skimming through all of the commentary.) "),(0,o.kt)("p",null,"By the time you read this lesson, the issue may have already been resolved. In any case, we won't worry about addressing it in our applications. If you do find that you can't run your projects as expected, reach out to your instructor to get help."),(0,o.kt)("h3",{id:"looking-at-c-r-a-project-files-and-folders"},"Looking at C-R-A Project Files and Folders"),(0,o.kt)("p",null,"Now let's ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into our ",(0,o.kt)("inlineCode",{parentName:"p"},"help-queue")," project and open it in the code editor. There aren't too many directories and files, so let's go through them one by one:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"node_modules"),": All the packages we need to build a React application have already been installed. This includes both the core React library as well as the ReactDOM library, which allows React to interact with the DOM. It also includes quite a few Babel packages and other packages we won't get into. We won't be able to alter these packages but we can \u2014 and will \u2014 install more packages in the future."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"public"),": This is where we can store public content. It also contains an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file. This file is a template and we won't be altering it. We've already worked with a template this way using ",(0,o.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," in Intermediate JavaScript. That's the exact same thing that's happening here. You can read more about the public directory ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/using-the-public-folder/"},"here"),". We won't be adding assets to this directory in this course. You might be wondering whether this is a good place to store images \u2014 however, it actually isn't. We'll cover adding images to applications that use ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," in a future lesson."),(0,o.kt)("p",null,"Note the following div in our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file:"),(0,o.kt)("div",{class:"filename"},"public/index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="root"></div>\n')),(0,o.kt)("p",null,"This is where our root React component will be placed. We'll learn more about components in the next lesson \u2014 and we will also cover where ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," is coming from later in this lesson."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," has built a ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory for us with some boilerplate code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"App")),": Let's start with the three ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," files. ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," is the root component of our application. ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," contains the JavaScript code for this component while ",(0,o.kt)("inlineCode",{parentName:"p"},"App.css")," contains the CSS code for it. If you take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),", you'll see that it contains code that looks nothing like JavaScript. This code is written in JSX, which we'll cover in more detail soon."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally, we also have an ",(0,o.kt)("inlineCode",{parentName:"p"},"App.test.js")," file for testing our App component. ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," uses Jest by default. We won't be writing any tests during this course section so don't worry about testing for now.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We aren't going to use the boilerplate files above \u2014 we are more interested in the configuration that ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," provides \u2014 so we will be deleting all three ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," files and starting from scratch when we begin our Help Queue project.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"index.js")),": Next, we have two ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," files \u2014 an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.css")," file and an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"index.js")," is the entry point for our application.")," This should look familiar from working with webpack. In fact, webpack will work behind the scenes here to recursively include all of our application's files in a bundle. We'll take a longer look at the contents of this file later in this lesson.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"index.css")),": This is our global stylesheet. It's not a good practice to use global stylesheets with React applications, though this is where we'd do it. Instead, each component should have its own stylesheet. Because we are focused on building a basic React application this course section, we will not cover styling just yet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"logo.svg"))," can be ignored and should be deleted. This is just a boilerplate image for our React app, and we will never use it. If you want to see how it is used before deleting it, go ahead and start your project's server with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start"),". The webpage that opens will display the logo.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"reportWebVitals.js"))," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"web-vitals")," library to report on the performance of your React app. We won't be learning how to measure and analyze performance, so this file can be ignored, or optionally deleted. If you delete this file, you'll also have to delete the corresponding import and code in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js"),". To learn more about measuring performance, visit ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/measuring-performance/"},(0,o.kt)("inlineCode",{parentName:"a"},"create-react-app"),"'s documentation"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"setupTests.js"))," this file is for configuring information about tests to avoid repeating a lot of boilerplate code in our test files. However, this is specifically for testing that React components load as expected, which we won't learn how to do in this course. We'll continue to test business logic only. So, this file can be ignored, or optionally deleted. To learn more about testing components, visit ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/#testing-components"},(0,o.kt)("inlineCode",{parentName:"a"},"create-react-app"),"'s documentation"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".gitignore"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," has  ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," started for us \u2014 and it conveniently ignores all the files we wouldn't want to push to GitHub."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"package.json"),": Next, we'll take a look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. Note there's hardly anything there. That's because most of the dependencies are hidden from view. Only three dependencies are listed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react"),": The core React library;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-dom"),": A library that allows React to interact with the DOM;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-scripts"),": A library that allows us to run ",(0,o.kt)("inlineCode",{parentName:"li"},"create-react-app")," commands.")),(0,o.kt)("p",null,"We also have four npm commands we can run, three which look exactly the same as the scripts we had in Intermediate JavaScript:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start"),": Used to build and start our application;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build"),": Used to build but not start our application;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test"),": Used to run tests;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eject"),": Used to eject our application so we can update the configuration.")),(0,o.kt)("p",null,"Note that once we eject an application, we can no longer use it with ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),". We should only do this if we absolutely need to \u2014 or if we'd like to see what's actually going on underneath the hood. Ejecting a React app will expose the base configuration files, the code for each script (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),") and the full list of dependencies in our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. If you are curious or would like to tinker, feel free to do this on your own!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"README.md"),": This contains a lot of helpful (but potentially overwhelming) information about using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,o.kt)("p",null,"We can run our application by entering the command ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run start")," in the root of our project's directory. This will open a page at ",(0,o.kt)("em",{parentName:"p"},"http://localhost:3000/")," with the boilerplate code that ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," provided."),(0,o.kt)("h3",{id:"a-closer-look-at-indexjs"},"A Closer Look at ",(0,o.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,o.kt)("p",null,"Let's take a look at the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),". We'll skip the import statements and the ",(0,o.kt)("inlineCode",{parentName:"p"},"reportWebVitals()")," function call."),(0,o.kt)("div",{class:"filename"},"src/index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n")),(0,o.kt)("p",null,"With this code, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM")," library to handle inserting our React component tree into the DOM. Remember that React is a UI library that we use in part to create the look (the HTML and layout) of our webpage, so what ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM"),' does is handle taking our React code, and inserting it into the webpage. This process is called rendering; we "render" React elements to the DOM.'),(0,o.kt)("p",null,"To understand each step the code above, it may be easier to slightly adjust it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const container = document.getElementById('root');\nconst root = ReactDOM.createRoot(container);\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n")),(0,o.kt)("p",null,"Now, let's break this down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the first line of code, we're accessing the HTML in ",(0,o.kt)("inlineCode",{parentName:"li"},"public/index.html"),", and looking for the element with an id of ",(0,o.kt)("inlineCode",{parentName:"li"},"'root'"),". This corresponds to the exact div we noticed earlier:")),(0,o.kt)("div",{class:"filename"},"public/index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="root"></div>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When we access this div element and save it in a variable, we call it ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),", because it will eventually contain all of our React components. In other word, it's the location where our React app will be rendered, and everything inside of this div will be managed by React.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot(container);"),", passing in our ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," variable. This creates a root DOM node (inside of the div) for React to render all of its components to. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"root.render()"),', which inserts the React components into the DOM; or, in other words "renders" the React components. When we call ',(0,o.kt)("inlineCode",{parentName:"p"},"root.render()")," we must pass in a single element. For example, we could pass in this:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"root.render(\n  <h1>Hello World!</h1>\n);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What we do is pass in a React component, nested inside of another React component. This counts as one element:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"root.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<React.StrictMode>")," component is an optional component that we can wrap around our parent component, ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />"),", to have it perform additional checks for errors in any components nested inside of it. That includes ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," and any components nested inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />"),", and so on. Essentially this performs additional error checking on our whole React application, but it doesn't actually print anything to the DOM. (If you're feeling a bit fuzzy about the concept of \"components\", don't worry, we'll learn exactly what they are in the very next lesson!)  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The nested component called ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," is the parent component for our entire React application. This will contain code that will be printed to the DOM. Note that the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"< />")," is customary in JSX, which we will be going over more soon."))),(0,o.kt)("p",null,"So, in the end, this code creates the ",(0,o.kt)("strong",{parentName:"p"},"root DOM node")," in which React will render our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component. Once again, the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," variable represents the root DOM node that React uses to render its components, and it is located inside of the div with an id of ",(0,o.kt)("inlineCode",{parentName:"p"},"'root'"),"."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("strong",{parentName:"p"},"if you are using React 17 or below, the ",(0,o.kt)("inlineCode",{parentName:"strong"},"index.js")," configuration will look slightly different"),", though it performs the same functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import ReactDOM from 'react-dom';\n...\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n")),(0,o.kt)("h3",{id:"how-react-and-webpack-work-together"},"How React and webpack Work Together"),(0,o.kt)("p",null,"Now that we've covered all the components in a ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," project, let's quickly cover how webpack and React work together. This process should be familiar from Intermediate JavaScript, but it's worth a refresher because it's been a while since we've covered this content."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"webpack will recursively manage all of our application's dependencies and bundle them into a single file when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," is webpack's entry point. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"root.render()")," method, which specifies that the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component should be rendered into our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file's ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," div id.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," will be rendered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," div id. It is the parent component for our React application."))),(0,o.kt)("p",null,"As you may have guessed, webpack will do many other things behind the scenes such as compiling our code so the browser can read it. However, because of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),", we don't have to worry about any of that. We can focus entirely on learning React."))}u.isMDXComponent=!0}}]);