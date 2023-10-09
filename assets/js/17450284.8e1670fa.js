"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42988],{30876:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>m});var n=o(2784);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(o),u=a,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||s;return o?n.createElement(m,r(r({ref:e},d),{},{components:o})):n.createElement(m,r({ref:e},d))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=o.length,r=new Array(s);r[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:a,r[1]=i;for(var p=2;p<s;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},82747:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=o(7896),a=(o(2784),o(30876));const s={title:"\ud83d\udcd3 Downloading and Installing Bootstrap",id:"downloading-and-installing-bootstrap",slug:"downloading-and-installing-bootstrap",hide_table_of_contents:!0,sidebar_position:57,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_bootstrap_downloading_and_installing.md"},r=void 0,i={unversionedId:"introduction-to-programming/git-html-and-css/downloading-and-installing-bootstrap",id:"introduction-to-programming/git-html-and-css/downloading-and-installing-bootstrap",title:"\ud83d\udcd3 Downloading and Installing Bootstrap",description:"In this lesson, we'll walk through how to download and install Bootstrap into a project. We'll also discuss Bootstrap versions and how they impact how we download and find information about Bootstrap. There are multiple ways to download Bootstrap. We'll address the two simplest approaches here:",source:"@site/docs/introduction-to-programming/1_git-html-and-css/4c-bootstrap-downloading-and-installing.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/downloading-and-installing-bootstrap",permalink:"/introduction-to-programming/git-html-and-css/downloading-and-installing-bootstrap",draft:!1,tags:[],version:"current",sidebarPosition:57,frontMatter:{title:"\ud83d\udcd3 Downloading and Installing Bootstrap",id:"downloading-and-installing-bootstrap",slug:"downloading-and-installing-bootstrap",hide_table_of_contents:!0,sidebar_position:57,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4c_bootstrap_downloading_and_installing.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Introduction to Bootstrap and Front-End Frameworks",permalink:"/introduction-to-programming/git-html-and-css/introduction-to-bootstrap-and-front-end-frameworks"},next:{title:"\ud83d\udcd3 Bootstrap Basic Elements",permalink:"/introduction-to-programming/git-html-and-css/bootstrap-basic-elements"}},l={},p=[{value:"Versioning",id:"versioning",level:2},{value:"Downloading Bootstrap",id:"downloading-bootstrap",level:2},{value:"Downloading Files from Bootstrap&#39;s Website",id:"downloading-files-from-bootstraps-website",level:3},{value:"Adding a Downloaded Copy of Bootstrap&#39;s CSS to a Project",id:"adding-a-downloaded-copy-of-bootstraps-css-to-a-project",level:3},{value:"OPTIONAL: Adding a Downloaded Copy of Bootstrap&#39;s JavaScript to a Project",id:"optional-adding-a-downloaded-copy-of-bootstraps-javascript-to-a-project",level:3},{value:"Linking to a CDN",id:"linking-to-a-cdn",level:2},{value:"What are the <code>integrity</code> and <code>crossorigin</code> Attributes?",id:"what-are-the-integrity-and-crossorigin-attributes",level:3},{value:"OPTIONAL: Using a CDN to Load Bootstrap&#39;s JavaScript in a Project",id:"optional-using-a-cdn-to-load-bootstraps-javascript-in-a-project",level:3},{value:"Final Thoughts",id:"final-thoughts",level:3}],d={toc:p},c="wrapper";function h(t){let{components:e,...o}=t;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll walk through how to download and install Bootstrap into a project. We'll also discuss Bootstrap versions and how they impact how we download and find information about Bootstrap. There are multiple ways to download Bootstrap. We'll address the two simplest approaches here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downloading the Bootstrap source code and then adding the files directly to a project."),(0,a.kt)("li",{parentName:"ul"},"Using a content delivery network (CDN) to link to Bootstrap online.")),(0,a.kt)("p",null,"In future courses, we'll explore additional ways to integrate Bootstrap and other frameworks into a project. In the very next lesson, we'll create an example project and learn how to use Bootstrap."),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You likely are already familiar with the concept of versioning from using computers and phones: new operating systems (software) are released regularly, and so are new versions of phones (hardware)! Well, many libraries, frameworks, and tool kits follow the same process of releasing software in versions to separate a distinct state of the software from later states. The higher the version number, the newer it is. One goal of versioning is to enable existing clients using an older software version to continue using it, even as newer versions are released. "),(0,a.kt)("p",null,"The difference between version 1 (the earlier version) and version 2 (the later version) of a piece of software could be anything: the names of the tools, what tools are offered, how the tools should be used or configured, and more. Because of this, it's very important for us to pay attention to the version number of the software we're using so that we can use it in the right way, and find the right documentation online."),(0,a.kt)("p",null,'Websites choose to upgrade to newer versions of frameworks (or other tools) for a few reasons: when there are fixes for security issues, when there are performance improvements, to use new features, or when the tool has met its "end of life". When a version of software is at its ',(0,a.kt)("strong",{parentName:"p"},"end of life"),", it means no new features are being added to it and no developer is maintaining it, including making security fixes. It is usually possible to use software that's at its end of life, but it's not recommended. "),(0,a.kt)("p",null,"While there's a lot of good reasons to update to the latest version number, making a version upgrade can be costly in terms of time and money. Often when the version number of one tool is upgraded, often other tools also need to be upgraded to a compatible version number. When there are ",(0,a.kt)("strong",{parentName:"p"},"breaking changes")," between one version and the latest version, that means that your code will break when you upgrade to the latest version unless you update your code to match the new standards. Because of all of these reasons, many websites don't upgrade to the latest version, and wait until there's a compelling reason to upgrade. "),(0,a.kt)("p",null,"The same is true in our curriculum. We often don't use the latest version number of the technology we teach, just the same as most tech companies. As of late 2022, we're using version 5.2 of Bootstrap, but by the time you are reading this, Bootstrap may be at a later version. It's up to you if you want to try using a later version in your own projects. However, you should always be aware that there could be breaking changes (like completely different tools) between the version we use in the LearnHowToProgram.com curriculum and a later version Bootstrap."),(0,a.kt)("h2",{id:"downloading-bootstrap"},"Downloading Bootstrap"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first way we can add Bootstrap to a project is to download all of the necessary files and add them to our project. Then we'll link to them in our HTML just like we link to our CSS file."),(0,a.kt)("h3",{id:"downloading-files-from-bootstraps-website"},"Downloading Files from Bootstrap's Website"),(0,a.kt)("p",null,"We are currently using Bootstrap version 5.2, which can be downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/download/"},"from the Bootstrap 5.2 download page"),'. Scroll down to the section titled "Compiled CSS and JS" and hit the download button. '),(0,a.kt)("p",null,"This will download a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file. Unzip the file using your computers extractor tool and then look inside of the folder. You should see something similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bootstrap/\n\u251c\u2500\u2500 css/\n\u2502   \u251c\u2500\u2500 bootstrap-grid.css\n\u2502   \u251c\u2500\u2500 bootstrap-grid.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-grid.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-grid.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-grid.rtl.css\n\u2502   \u251c\u2500\u2500 bootstrap-grid.rtl.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-grid.rtl.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-grid.rtl.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.css\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.rtl.css\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.rtl.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.rtl.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-reboot.rtl.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.css\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.rtl.css\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.rtl.css.map\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.rtl.min.css\n\u2502   \u251c\u2500\u2500 bootstrap-utilities.rtl.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap.css\n\u2502   \u251c\u2500\u2500 bootstrap.css.map\n\u2502   \u251c\u2500\u2500 bootstrap.min.css\n\u2502   \u251c\u2500\u2500 bootstrap.min.css.map\n\u2502   \u251c\u2500\u2500 bootstrap.rtl.css\n\u2502   \u251c\u2500\u2500 bootstrap.rtl.css.map\n\u2502   \u251c\u2500\u2500 bootstrap.rtl.min.css\n\u2502   \u2514\u2500\u2500 bootstrap.rtl.min.css.map\n\u2514\u2500\u2500 js/\n    \u251c\u2500\u2500 bootstrap.bundle.js\n    \u251c\u2500\u2500 bootstrap.bundle.js.map\n    \u251c\u2500\u2500 bootstrap.bundle.min.js\n    \u251c\u2500\u2500 bootstrap.bundle.min.js.map\n    \u251c\u2500\u2500 bootstrap.esm.js\n    \u251c\u2500\u2500 bootstrap.esm.js.map\n    \u251c\u2500\u2500 bootstrap.esm.min.js\n    \u251c\u2500\u2500 bootstrap.esm.min.js.map\n    \u251c\u2500\u2500 bootstrap.js\n    \u251c\u2500\u2500 bootstrap.js.map\n    \u251c\u2500\u2500 bootstrap.min.js\n    \u2514\u2500\u2500 bootstrap.min.js.map\n")),(0,a.kt)("p",null,"There are two directories: ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder contains files related to Bootstrap CSS. We can use either ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css")," in our projects to access all of Bootstrap's CSS. Here's the difference between the two files:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.css")," is the larger version of the source code. If we open this file, we'll be able to read all the CSS rules for Bootstrap, which can be very helpful when we are just learning about Bootstrap \u2014 and when we want to figure out how to override a Bootstrap rule."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.min.css")," is a ",(0,a.kt)("strong",{parentName:"li"},"minified")," file, which means that the source code has been compressed so that it's more efficient for machines to read. However, it's not in a human-readable form anymore. This is great for production (code that's deployed online) because it's faster, but it's not so great for development (code that's in the process of being built \u2014 which is exactly what we are doing). We recommend using ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.css")," for learning purposes."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The other files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory, like ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap-grid.css"),", contains CSS for only a specific Bootstrap feature. This allows developers who only want to use Bootstrap's Grid functionality to include a smaller Bootstrap resource in their projects. We'll stick to including all of Bootstrap in our projects. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," directory contains JavaScript code necessary for animations, pop-ups, alerts, and other visual effects, as described ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/javascript/"},"here"),". We won't learn how to use JavaScript until the next course section, however, we will learn how to load Bootstrap's JavaScript (JS) into our HTML so that we can use Bootstrap components that use JS. Keep reading to learn how to do this."))),(0,a.kt)("h3",{id:"adding-a-downloaded-copy-of-bootstraps-css-to-a-project"},"Adding a Downloaded Copy of Bootstrap's CSS to a Project"),(0,a.kt)("p",null,"To integrate Bootstrap into our project, we simply need to move ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.css")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory of the project we're working on. This would be a good time to practice the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ mv")," command in the terminal, though it's also fine to drag and drop the file."),(0,a.kt)("p",null,"Once the Bootstrap stylesheet is located in our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder, we need to link to it in our site's ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags, just as we do with our own stylesheets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<head>\n  <link href="css/bootstrap.css" rel ="stylesheet" type="text/css">\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>My Project</title>\n</head>\n...\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," When you see ellipses (",(0,a.kt)("inlineCode",{parentName:"p"},"..."),") in a code snippet, it means portions of the file were omitted from the example. This keeps examples brief, making it easier to identify the ",(0,a.kt)("strong",{parentName:"p"},"new")," code that has been added."),(0,a.kt)("p",null,"As we see here, we can link to multiple stylesheets. However, it's very important that ",(0,a.kt)("em",{parentName:"p"},"our")," stylesheet is listed ",(0,a.kt)("strong",{parentName:"p"},"after")," the Bootstrap stylesheet. This way, the rules in our stylesheet will override rules that have the same name in the Bootstrap stylesheet. We'll cover this further in a future lesson."),(0,a.kt)("h3",{id:"optional-adding-a-downloaded-copy-of-bootstraps-javascript-to-a-project"},"OPTIONAL: Adding a Downloaded Copy of Bootstrap's JavaScript to a Project"),(0,a.kt)("p",null,"We don't need to know JavaScript in order to configure our projects to use Bootstrap's pre-built JavaScript functionality. This will open the door for us to use Bootstrap tools that contain animations, pop-ups, alerts, and other visual effects. An example of a Bootstrap component that uses JavaScript is a ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/components/dropdowns/"},"dropdown"),". To see all Bootstrap components that use JavaScript, ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/introduction/#js-components"},"check out this list"),"."),(0,a.kt)("p",null,"To start, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"js/")," subdirectory in your project. Then move the downloaded ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bundle.js")," file into the  ",(0,a.kt)("inlineCode",{parentName:"p"},"js/")," subdirectory. We'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bundle.js")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.js"),', because the bundled file contains all of the JavaScript tools (including the JavaScript library called "Popper") to use any Bootstrap component that uses JavaScript. '),(0,a.kt)("p",null,"Next, we'll load the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bundle.js")," into our HTML by using the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag. ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," is short for JavaScript, and it is used to embed JavaScript into our HTML file. .",(0,a.kt)("strong",{parentName:"p"},"The script tag must be placed at the bottom of our HTML ",(0,a.kt)("inlineCode",{parentName:"strong"},"<body>")," tag")," so that it is loaded last:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<head>\n  <link href="css/bootstrap.css" rel ="stylesheet" type="text/css">\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>My Project</title>\n</head>\n<body>\n  ...\n  <script src="js/bootstrap.bundle.min.js"><\/script>\n</body>\n...\n')),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")," tags, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag has a ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," attribute that tells our program where to find the JavaScript file that we want to load into our HTML.  "),(0,a.kt)("h2",{id:"linking-to-a-cdn"},"Linking to a CDN"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can also add Bootstrap into a project via a ",(0,a.kt)("strong",{parentName:"p"},"content delivery network"),", or ",(0,a.kt)("strong",{parentName:"p"},"CDN"),'. This is the option under the section titled "CDN via jsDelivr" on Bootstrap\'s ',(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/download/#cdn-via-jsdelivr"},"download page"),". jsDelivr is a content delivery network."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/bootstrap-cdn-with-jsdeliver.png",alt:"CDN-links-on-bootstraps-website"})),(0,a.kt)("p",null,"A content delivery network is exactly what it sounds like \u2014 a network of servers that make content available for users. In this case, Bootstrap is making its stylesheets available online, which means we can just load the online version directly to our project without needing to add any files to our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory."),(0,a.kt)("p",null,"We can copy/paste the ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," directly into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our sites. This is similar to the manner we've been linking our stylesheets so far. The only difference is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property refers to an online location instead of a location in our ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<head>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>My Project</title>\n</head>\n...\n')),(0,a.kt)("h3",{id:"what-are-the-integrity-and-crossorigin-attributes"},"What are the ",(0,a.kt)("inlineCode",{parentName:"h3"},"integrity")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"crossorigin")," Attributes?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"integrity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"crossorigin")," attributes are used for ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/SRI/"},"Subresource Integrity (SRI)")," checking. According to ",(0,a.kt)("a",{parentName:"p",href:"https://www.srihash.org/"},"srihash.org"),", SRI checking allows browsers to ensure that resources hosted on third-party servers (like Bootstrap's CSS library that we are accessing via CDN) have not been tampered with. Performing SRI checking is a best practice set by W3C, the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Consortium/"},"World Wide Web Consortium"),", an international organization that sets standards for the web."),(0,a.kt)("p",null,"Note, you do not need to retain any of the above information. However, it is interesting and you are welcome to read more on your own!"),(0,a.kt)("h3",{id:"optional-using-a-cdn-to-load-bootstraps-javascript-in-a-project"},"OPTIONAL: Using a CDN to Load Bootstrap's JavaScript in a Project"),(0,a.kt)("p",null,"If we want to load Bootstrap's JavaScript into our project from a CDN, we simply need to add the CDN ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag from the Bootstrap download page to the bottom of our HTML's ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<head>\n  <link \n    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n    rel="stylesheet" \n    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n    crossorigin="anonymous">  \n    <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>My Project</title>\n</head>\n<body>\n  ...\n  <script \n    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" \n    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" \n    crossorigin="anonymous">\n  <\/script>\n</body>\n...\n')),(0,a.kt)("p",null,"Notice the new formatting: we've updated both the Bootstrap ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags to list each attribute on a new line. Doing this is optional, but greatly improves the readability of longer tags."),(0,a.kt)("p",null,"It's worth mentioning again that we can review all of the Bootstrap components that use JavaScript by ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/getting-started/introduction/#js-components"},"checking out this list on the Bootstrap docs"),"!"),(0,a.kt)("h3",{id:"final-thoughts"},"Final Thoughts"),(0,a.kt)("p",null,"Ultimately, both approaches of loading Bootstrap into our projects work great. CDNs are a great way to go because they are very fast and reliable and don't require the extra step of downloading the files. In the example projects in LearnHowToProgram.com, we'll primarily use CDNs to link to Bootstrap."),(0,a.kt)("p",null,"The downside to installing Bootstrap with a CDN link is that you'll be unable to see Bootstrap styles in your project without an internet connection, because the project needs to load the online stylesheet to use Bootstrap's CSS."),(0,a.kt)("p",null,"Now that we know how to add Bootstrap to our own projects, we're ready to create an example project and learn how to use Bootstrap styles."))}h.isMDXComponent=!0}}]);