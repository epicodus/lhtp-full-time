"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21182],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={title:"Gathering Data with Checkboxes",id:"gathering-data-with-checkboxes",slug:"gathering-data-with-checkboxes",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1f_gathering_data_with_checkboxes.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes",id:"introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes",title:"Gathering Data with Checkboxes",description:"We've learned how to use a variety of HTML form inputs. We held off on learning about checkboxes because we needed to learn about arrays first. Now that we have a basic understanding of arrays, let's learn how to use checkboxes. In this lesson, we'll also learn how to use Array.prototype.forEach() on an array of checkbox elements.",source:"@site/docs/introduction-to-programming/3_arrays-and-looping/1f-gathering-data-with-checkboxes.md",sourceDirName:"introduction-to-programming/3_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes",permalink:"/introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Gathering Data with Checkboxes",id:"gathering-data-with-checkboxes",slug:"gathering-data-with-checkboxes",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1f_gathering_data_with_checkboxes.md"},sidebar:"introduction-to-programming",previous:{title:"Practice: Looping",permalink:"/introduction-to-programming/arrays-and-looping/practice-looping"},next:{title:"Practice: forEach loops",permalink:"/introduction-to-programming/arrays-and-looping/practice-foreach-loops"}},s={},p=[{value:"Transportation Survey",id:"transportation-survey",level:2},{value:"Retrieving Checkbox Values",id:"retrieving-checkbox-values",level:2},{value:"Using Breakpoints To Verify <code>userSelections</code> Data Type",id:"using-breakpoints-to-verify-userselections-data-type",level:3},{value:"Looping through Checkbox Selections",id:"looping-through-checkbox-selections",level:3},{value:"Why Use a Loop?",id:"why-use-a-loop",level:3},{value:"Adding a Heading to the Survey Results",id:"adding-a-heading-to-the-survey-results",level:3}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've learned how to use a ",(0,o.kt)("a",{parentName:"p",href:"/introduction-to-programming/javascript-and-web-browsers/form-input-types"},"variety of HTML form inputs"),". We held off on learning about checkboxes because we needed to learn about arrays first. Now that we have a basic understanding of arrays, let's learn how to use checkboxes. In this lesson, we'll also learn how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," on an array of checkbox elements."),(0,o.kt)("h2",{id:"transportation-survey"},"Transportation Survey"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we'll build a small website that contains a survey. Our survey will ask users which methods of transportation they have used to travel to work or school in the past year. For now, the site will simply display a user's responses back to them after the form has been submitted."),(0,o.kt)("p",null,"Checkboxes differ from radio buttons because they allow ",(0,o.kt)("em",{parentName:"p"},"multiple")," options to be selected at once while radio buttons are for selecting a ",(0,o.kt)("em",{parentName:"p"},"single")," option.  Since many people have likely used more than one mode of transportation in the past year, we'll use checkboxes to collect our survey answers. This will allow users to select ",(0,o.kt)("em",{parentName:"p"},"all")," answers that apply to them."),(0,o.kt)("p",null,"Here's the HTML for our form:"),(0,o.kt)("div",{class:"filename"},"transportation_survey/index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Transportation Survey</title>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <h2>Transportation Survey</h2>\n  <form id="transportation_survey">\n    <p>In the past year, I have used the following modes of transportation to travel to work or school:</p>\n    <label>\n      <input type="checkbox" name="transportation-option" value="bike">\n      Riding a bike.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="car">\n      Driving a car.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="carpool">\n      Carpooling with others.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="walk">\n      Walking.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="bus">\n      Riding the bus.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="train">\n      Riding the train.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="streetcar">\n      Riding the streetcar.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="taxi">\n      Taking a taxi.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="rideshare">\n      Using a rideshare service like Lyft or Uber.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="skateboard">\n      Skateboarding.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="rollerblade">\n      Rollerblading.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="scooter">\n      Riding a scooter.\n    </label><br />\n    <label>\n      <input type="checkbox" name="transportation-option" value="other">\n      Another mode of transportation not listed here.\n    </label><br />\n    <button type="submit">Submit Survey</button>\n  </form>\n</body>\n</html>\n')),(0,o.kt)("p",null,"We've already linked a custom stylesheet and a ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts.js")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tag. If you want to add Bootstrap, remember that you'll have to either download it or use a CDN, and then link to Bootstrap in the head."),(0,o.kt)("p",null,"Just like with radio buttons, checkboxes all should share the same value for its ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute. This relates every checkbox to one another and ensures that every checkbox gets submitted to the server when the form gets submitted. Right now, we're not submitting our checkbox values to any server, so this isn't vital, but instead good practice."),(0,o.kt)("p",null,"Also, just like with radio buttons, we can nest the input inside of the label. This makes it so we can click on the label to check the box, as well as the checkbox. It's not required, but it sure is nice from a user experience point of view. We can also enable this feature without nesting the HTML elements by using the setting the same value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<label>")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<label for="bike">Riding a bike.</label><br />\n<input type="checkbox" name="transportation-option" value="car" id="car">\n<label for="car">Driving a car.</label><br />\n<input type="checkbox" name="transportation-option" value="carpool" id="carpool">\n<label for="carpool">Carpooling with others.</label><br />\n<input type="checkbox" name="transportation-option" value="walk" id="walk">\n<label for="walk">Walking.</label><br />\n<input type="checkbox" name="transportation-option" value="bus" id="bus">\n<label for="bus">Riding the bus.</label><br />\n<input type="checkbox" name="transportation-option" value="train" id="train">\n<label for="train">Riding the train.</label><br />\n<input type="checkbox" name="transportation-option" value="streetcar" id="streetcar">\n<label for="streetcar">Riding the streetcar.</label><br />\n<input type="checkbox" name="transportation-option" value="taxi" id="taxi">\n<label for="taxi">Taking a taxi.</label><br />\n<input type="checkbox" name="transportation-option" value="rideshare" id="rideshare">\n<label for="rideshare">Using a rideshare service like Lyft or Uber.</label><br />\n<input type="checkbox" name="transportation-option" value="skateboard" id="skateboard">\n<label for="skateboard">Skateboarding.</label><br />\n<input type="checkbox" name="transportation-option" value="rollerblade" id="rollerblade">\n<label for="rollerblade">Rollerblading.</label><br />\n<input type="checkbox" name="transportation-option" value="scooter" id="scooter">\n<label for="scooter">Riding a scooter.</label><br />\n<input type="checkbox" name="transportation-option" value="other" id="other">\n<label for="other">Another mode of transportation not listed here.</label><br />\n')),(0,o.kt)("p",null,"Right now there's no obvious area in our HTML where we'll show the results of the transportation survey. That's because we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.createElement()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," methods to add the results of the survey from our scripts! "),(0,o.kt)("h2",{id:"retrieving-checkbox-values"},"Retrieving Checkbox Values"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order to determine which checkboxes the user has selected, we can fetch the form data in our user interface logic like this:"),(0,o.kt)("div",{class:"filename"},"transportation_survey/js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// User Interface Logic\nfunction handleForm(event) {\n  event.preventDefault();\n  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");\n  // we\'ll add more code to display results here!\n}\n\nwindow.addEventListener("load", function() {\n  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);\n});\n')),(0,o.kt)("p",null,"Towards the bottom of our scripts we have the familiar load event handler attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object, and directly inside of it we target the form element and attach an event listener for the 'submit' event, passing in the callback ",(0,o.kt)("inlineCode",{parentName:"p"},"handleForm"),". "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handleForm()")," function is at the top of our scripts, and this function handles getting the form values and displaying the results on the webpage. Right now we have two lines of code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault();")," is added to prevent the 'submit' event's default action of refreshing the page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");')," is added to get all of the checkbox inputs that have been checked. We could instead pass in these arguments to the ",(0,o.kt)("inlineCode",{parentName:"li"},"document.querySelectorAll()")," method:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"[name=transportation-option]:checked"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"input:checked"')),(0,o.kt)("li",{parentName:"ul"},"Whatever you choose really depends on what's easiest to read so that your code is easy to understand, and what other inputs and forms you have in your webpage.")))),(0,o.kt)("p",null,"Next, let's add code that will print all of the user's selections to the webpage. To do this, we'll need to loop through all of the checkbox selections and print each one as a result on the page."),(0,o.kt)("p",null,"We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to loop through the checkbox selections. But is ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," an array? This is unclear. Let's add a breakpoint to our code to verify what data type ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," is. "),(0,o.kt)("h3",{id:"using-breakpoints-to-verify-userselections-data-type"},"Using Breakpoints To Verify ",(0,o.kt)("inlineCode",{parentName:"h3"},"userSelections")," Data Type"),(0,o.kt)("p",null,"To check the type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," variable, we should add a breakpoint to the line right after it. This is actually the last line of the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleForm()")," function."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/checkboxes-using-breakpoints.png",alt:"This images shows that we add a breakpoint after we create the `userSelections` variable."})),(0,o.kt)("p",null,"Then, let's submit the form. We'll see the \"Paused in debugger\" message, and we should be able to hover over the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," variable to determine the type. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/checkboxes-finding-nodelist-type.png",alt:"This image shows that we can hover over the `userSelections` variable to determine that it is a `NodeList` object."})),(0,o.kt)("p",null,"As the image shows, we can tell we're dealing with a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object. Every element in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object is an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," object. The number of elements inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object will vary based on how many checkbox inputs we've selected before submitting the form. In this case, I've selected two transportation options: carpooling and walking."),(0,o.kt)("p",null,"Instead of hovering over the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections"),' variable in the Sources tab, we could also just review the list of variables in the "Scope" window to the bottom right of the Sources tab. Either way works to verify the information we need!'),(0,o.kt)("p",null,"Now that we know that we're dealing with a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object, we know that we have to turn this object into an array if we want to call array methods on it. Let's do that next, and let's also add the code to loop through the checkbox selections and print each to the webpage."),(0,o.kt)("h3",{id:"looping-through-checkbox-selections"},"Looping through Checkbox Selections"),(0,o.kt)("div",{class:"filename"},"transportation_survey/js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// User Interface Logic\nfunction handleForm(event) {\n  event.preventDefault();\n  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");\n  const userSelectionsArray = Array.from(userSelections);\n  \n  userSelectionsArray.forEach(function(element) {\n    const paragraph = document.createElement("p");\n    paragraph.append(element.value);\n    document.body.append(paragraph);\n  });\n}\n\nwindow.addEventListener("load", function() {\n  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);\n});\n')),(0,o.kt)("p",null,"Let's break down the new code we've added. First, I begin by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," variable into an array with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const userSelectionsArray = Array.from(userSelections);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array.from()")," is a ",(0,o.kt)("strong",{parentName:"p"},"static")," array method. This is in contrast to ",(0,o.kt)("strong",{parentName:"p"},"instance")," methods, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"."),(0,o.kt)("p",null,"Then, I loop through the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelectionsArray")," variable with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," method: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"userSelectionsArray.forEach(/*argument goes here*/);\n")),(0,o.kt)("p",null,"As the argument to this method, I pass in the following callback function (specifically an anonymous function expression that is being used as a callback):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function(element) {\n  const paragraph = document.createElement("p");\n  paragraph.append(element.value);\n  document.body.append(paragraph);\n}\n')),(0,o.kt)("p",null,"The above callback function will be run for every element in the array. The ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," parameter is the placeholder for the actual array element. Each element in our array is an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property that gets the value of the input. So, for every element in our array, we: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new HTML paragraph element, with ",(0,o.kt)("inlineCode",{parentName:"li"},'const paragraph = document.createElement("p");'),"."),(0,o.kt)("li",{parentName:"ul"},"Add the input's value (",(0,o.kt)("inlineCode",{parentName:"li"},"element.value"),") as the text to that paragraph element, with ",(0,o.kt)("inlineCode",{parentName:"li"},"paragraph.append(element.value);"),". "),(0,o.kt)("li",{parentName:"ul"},"Add the new paragraph to the inside/end of our document's body tag with ",(0,o.kt)("inlineCode",{parentName:"li"},"document.body.append(paragraph);"),". ")),(0,o.kt)("p",null,"If we now save our project, refresh the browser, and resubmit the form, we'll see our selections at the bottom of the page! Cool!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/working-transportation-survey.png",alt:"This image shows the working project: we've selected checkbox options, submitted the form, and we see the results printed to the page."})),(0,o.kt)("h3",{id:"why-use-a-loop"},"Why Use a Loop?"),(0,o.kt)("p",null,"You may be wondering why we don't just access the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object with bracket notation to print to the screen. Something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleForm(event) {\n  event.preventDefault();\n  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");\n  \n  const paragraph = document.createElement("p");\n  // using bracket notation to access the first element in userSelections\n  paragraph.append(userSelections[0].value);\n  document.body.append(paragraph);\n\n  const paragraph2 = document.createElement("p");\n  // using bracket notation to access the second element in userSelections\n  paragraph.append(userSelections[1].value);\n  document.body.append(paragraph2);\n}\n')),(0,o.kt)("p",null,"Well, we don't know how many selections a user will make. Right now the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleForm()")," function is set up to handle 2 checkbox selections. What if the user makes just one selection? We'll get an error! Anytime we try to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSelections")," object with bracket notation to access a property that doesn't exist, we'll get an error. "),(0,o.kt)("p",null,"This is where looping comes in handy! A loop like ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," will only run as long as the length of the array it is called on. This means there's no chance of error \u2014 the length loop will grow and shrink with the length of the array."),(0,o.kt)("h3",{id:"adding-a-heading-to-the-survey-results"},"Adding a Heading to the Survey Results"),(0,o.kt)("p",null,"Let's polish up our webpage a bit and add an H2 heading element to identify the survey results section. There's a few ways we could organize this code. We'll do it by creating the heading before printing the user selections to the page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleForm(event) {\n  event.preventDefault();\n  const userSelections = document.querySelectorAll("input:checked");\n  const userSelectionsArray = Array.from(userSelections);\n\n  // create results heading\n  const resultsHeading = document.createElement("h2");\n  resultsHeading.append("You use the following methods of transportation to travel to work or school:");\n  document.body.append(resultsHeading);\n  \n  userSelectionsArray.forEach(function(element) {\n    const paragraph = document.createElement("p");\n    paragraph.append(element.value);\n    document.body.append(paragraph);\n  });\n}\n\nwindow.addEventListener("load", function() {\n  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);\n});\n')))}u.isMDXComponent=!0}}]);