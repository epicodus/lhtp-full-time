"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[1554],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(d,".").concat(u)]||p[u]||k[u]||o;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Updating a Ticket",id:"updating-a-ticket",slug:"updating-a-ticket",hide_table_of_contents:!0,sidebar_position:38,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3g_updating_a_ticket.md"},l=void 0,r={unversionedId:"react/react-fundamentals/updating-a-ticket",id:"react/react-fundamentals/updating-a-ticket",title:"\ud83d\udcd3 Updating a Ticket",description:"In this lesson, we will add the final piece of CRUD functionality to our Help Queue application: the ability to update a ticket. The actual Help Queue doesn't have this functionality \u2014 however, it's helpful for us to learn and apply CRUD functionality in our own applications so we are including it here. Also, update functionality is required on this upcoming independent project.",source:"@site/docs/react/3_react-fundamentals/3g-updating-a-ticket.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/updating-a-ticket",permalink:"/react/react-fundamentals/updating-a-ticket",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"\ud83d\udcd3 Updating a Ticket",id:"updating-a-ticket",slug:"updating-a-ticket",hide_table_of_contents:!0,sidebar_position:38,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3g_updating_a_ticket.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Reusing Components",permalink:"/react/react-fundamentals/reusing-components"},next:{title:"\ud83d\udcd3 Leveraging LinkedIn",permalink:"/react/react-fundamentals/leveraging-linkedin"}},d={},s=[{value:"<strong>Implementation</strong>:",id:"implementation",level:4},{value:"<strong>Implementation</strong>:",id:"implementation-1",level:4},{value:"Behavior #1: Toggle Edit Form",id:"behavior-1-toggle-edit-form",level:2},{value:"Add New State Slice",id:"add-new-state-slice",level:4},{value:"Add Method for Showing the Edit Form",id:"add-method-for-showing-the-edit-form",level:4},{value:"Pass <code>handleEditClick</code> As Prop To <code>TicketDetail</code> Component",id:"pass-handleeditclick-as-prop-to-ticketdetail-component",level:4},{value:"Add &quot;Update&quot; Button with <code>onClick</code> Handler to <code>TicketDetail</code>",id:"add-update-button-with-onclick-handler-to-ticketdetail",level:4},{value:"Add A Conditional That Triggers When <code>editing</code> Is <code>true</code>",id:"add-a-conditional-that-triggers-when-editing-is-true",level:3},{value:"Add <code>EditTicketForm</code> Component",id:"add-editticketform-component",level:4},{value:"Behavior #2: Editing a Ticket",id:"behavior-2-editing-a-ticket",level:2},{value:"Write Method for Updating Ticket",id:"write-method-for-updating-ticket",level:4},{value:"Pass New Method Down to <code>EditTicketForm</code> as a Prop",id:"pass-new-method-down-to-editticketform-as-a-prop",level:4},{value:"Add PropType to <code>EditTicketForm</code> Component",id:"add-proptype-to-editticketform-component",level:4},{value:"Add Event Handler in <code>EditTicketForm</code> Along with Function to Capture Form Values",id:"add-event-handler-in-editticketform-along-with-function-to-capture-form-values",level:4},{value:"Summary",id:"summary",level:2}],c={toc:s},p="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we will add the final piece of CRUD functionality to our Help Queue application: the ability to update a ticket. The actual Help Queue doesn't have this functionality \u2014 however, it's helpful for us to learn and apply CRUD functionality in our own applications so we are including it here. Also, update functionality is required on this upcoming independent project."),(0,a.kt)("p",null,"Before we add an ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," component, we will need to do a bit more planning. In the interest of keeping things simple, our new component will be a direct child of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Here's an updated diagram of our components:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/adding-editticketform-component-updated.jpg",alt:"Our component tree will have our new `EditTicketForm` as a direct child of `TicketControl`."})),(0,a.kt)("p",null,"There are a few benefits to this approach:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," component already handles state so we will only need to lift state from the ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl"),"."),(0,a.kt)("li",{parentName:"ul"},"There won't be any prop-drilling because props will only be passed down one level to ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," is already handling which component is showing so we can use its local state to determine whether ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," is showing.")),(0,a.kt)("p",null,"However, this is just one approach to building out the CRUD in our application. It is not necessarily the best way or the most scalable. The key takeaway here is applying problem-solving skills and React knowledge to add CRUD functionality. At the same time, we need to remind ourselves that there is no canonical, opinionated way to do things in React \u2014 unlike with Rails or .NET."),(0,a.kt)("p",null,"We will start by covering the steps we need to take to add edit functionality to our applications. Before reading through these steps, we recommend trying to outline these steps on your own."),(0,a.kt)("p",null,"One thing that can be helpful to consider is what the user will need to do in order to update a ticket. We can apply what we've learned about Behavior Driven Development here."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Behavior #1")," "),(0,a.kt)("p",null,"When a user navigates to the ticket detail page, they should be able to click an edit button that takes them to an edit form."),(0,a.kt)("h4",{id:"implementation"},(0,a.kt)("strong",{parentName:"h4"},"Implementation"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will need to add a slice of state to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," to determine whether the ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," is showing or not. The default state will be ",(0,a.kt)("inlineCode",{parentName:"li"},"editing: false"),"."),(0,a.kt)("li",{parentName:"ul"},"We will need to add a method to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," that will set ",(0,a.kt)("inlineCode",{parentName:"li"},"editing")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),". We will call this method ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditClick"),"."),(0,a.kt)("li",{parentName:"ul"},"Next, we will need to pass down ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditClick")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component (and add a PropType)."),(0,a.kt)("li",{parentName:"ul"},"Then we will add a button to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," that triggers the ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditClick")," method. When the button is clicked, ",(0,a.kt)("inlineCode",{parentName:"li"},"editing")," will be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},"We also have to add a conditional to render the ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),". We will need to pass the ticket to be edited as a prop down to ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),". Since we will already have a ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," set to an actual ticket, we can just pass the ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," as a prop."),(0,a.kt)("li",{parentName:"ul"},"Finally, we need to create our ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),". It will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ReusableForm")," component we made in the last lesson.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Behavior #2")," "),(0,a.kt)("p",null,"When a user fills out the edit form and clicks the edit button, the specified ticket should be edited in the queue."),(0,a.kt)("h4",{id:"implementation-1"},(0,a.kt)("strong",{parentName:"h4"},"Implementation"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will need to add a method to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," that will update a ticket. We will do so in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," because that is where our state currently resides. We will call this method ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList")," will update the state in the ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTicketList")," to reflect the edited ticket."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList")," will also need to update ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," because the ticket will be deleted \u2014 and we don't want the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component showing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList")," also has to update ",(0,a.kt)("inlineCode",{parentName:"li"},"editing")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," so the ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketComponent")," doesn't show."),(0,a.kt)("li",{parentName:"ul"},"We will need to pass ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList")," to our new ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," as a prop."),(0,a.kt)("li",{parentName:"ul"},"Next, we will need to add a button to ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," that will trigger a ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditTicketFormSubmission")," function when clicked."),(0,a.kt)("li",{parentName:"ul"},"Finally, we will add a function called ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditTicketFormSubmission")," which will capture values from the edit form and then trigger the ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList")," method in the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," component.")),(0,a.kt)("p",null,"That's a lot of stuff to handle! It's mostly little pieces of code here and there but it can feel overwhelming, especially when you're learning React. This will become second nature with practice. Careful planning (drawings help) and writing out the steps needed to add functionality can make this process easier."),(0,a.kt)("h2",{id:"behavior-1-toggle-edit-form"},"Behavior #1: Toggle Edit Form"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We will start by writing the code to toggle between a ticket's detail and an edit form. We won't worry about the code for actually editing a ticket yet."),(0,a.kt)("h4",{id:"add-new-state-slice"},"Add New State Slice"),(0,a.kt)("p",null,"First we will add a new state slice:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.state = {\n      formVisibleOnPage: false,\n      mainTicketList: [],\n      selectedTicket: null,\n      editing: false // new code\n    };\n")),(0,a.kt)("p",null,"The default state of our new state slice is ",(0,a.kt)("inlineCode",{parentName:"p"},"editing: false"),"."),(0,a.kt)("h4",{id:"add-method-for-showing-the-edit-form"},"Add Method for Showing the Edit Form"),(0,a.kt)("p",null,"Next, we will add a method for showing the edit form. This method needs to go in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),", which handles the local state that determines which component should show."),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'handleEditClick = () => {\n  console.log("handleEditClick reached!");\n  this.setState({editing: true});\n}\n')),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," isn't technically necessary, it's a good way to make sure our method is being reached."),(0,a.kt)("h4",{id:"pass-handleeditclick-as-prop-to-ticketdetail-component"},"Pass ",(0,a.kt)("inlineCode",{parentName:"h4"},"handleEditClick")," As Prop To ",(0,a.kt)("inlineCode",{parentName:"h4"},"TicketDetail")," Component"),(0,a.kt)("p",null,"Now we need to update the props passed into our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\ncurrentlyVisibleState = \n<TicketDetail \n  ticket = {this.state.selectedTicket} \n  onClickingDelete = {this.handleDeletingTicket} \n  onClickingEdit = {this.handleEditClick} />\n...\n")),(0,a.kt)("p",null,"We pass down our method as a prop with the following code: ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickingEdit = {this.handleEditClick}"),"."),(0,a.kt)("h4",{id:"add-update-button-with-onclick-handler-to-ticketdetail"},'Add "Update" Button with ',(0,a.kt)("inlineCode",{parentName:"h4"},"onClick")," Handler to ",(0,a.kt)("inlineCode",{parentName:"h4"},"TicketDetail")),(0,a.kt)("p",null,'We will need to add an "Update" button to our ',(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. When a user clicks this button, the edit form will show. This button will go right above the code for our delete button:"),(0,a.kt)("div",{class:"filename"},"TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n...\n<button onClick={ props.onClickingEdit }>Update Ticket</button> { /* new code */ }\n<button onClick={()=> props.onClickingDelete(ticket.id) }>Close Ticket</button>\n....\n")),(0,a.kt)("p",null,"Also, we can't forget to add a prop type for our new prop:"),(0,a.kt)("div",{class:"filename"},"TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"TicketDetail.propTypes = {\n  ticket: PropTypes.object,\n  onClickingDelete: PropTypes.func,\n  onClickingEdit: PropTypes.func // new code\n};\n")),(0,a.kt)("p",null,"At this point, when we click on the button, we should get the following message in the console: ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditClick reached!"),"."),(0,a.kt)("p",null,"If we don't get this message in the console, it's time to debug. Check and make sure that props have correctly been passed down, that methods and functions are correctly named, and that a prop type has been added."),(0,a.kt)("h3",{id:"add-a-conditional-that-triggers-when-editing-is-true"},"Add A Conditional That Triggers When ",(0,a.kt)("inlineCode",{parentName:"h3"},"editing")," Is ",(0,a.kt)("inlineCode",{parentName:"h3"},"true")),(0,a.kt)("p",null,"Next, we will add a new conditional to the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. This conditional will trigger if ",(0,a.kt)("inlineCode",{parentName:"p"},"editing")," is set to true:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport EditTicketForm from './EditTicketForm';\n...\nrender()\n...\n    if (this.state.editing ) {      \n      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} />\n      buttonText = \"Return to Ticket List\";\n    } else if (this.state.selectedTicket != null) {\n      ...\n    }\n")),(0,a.kt)("p",null,"First, we need to import our ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm"),", which hasn't been created yet. (Our application will fail to compile until we add that component.)"),(0,a.kt)("p",null,"We will pass the current ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm"),'. Since a user will have to click on a ticket to access the "Update" button, ',(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," will already be set to the ticket we want."),(0,a.kt)("p",null,"Note that we also need to change the next conditional to an ",(0,a.kt)("inlineCode",{parentName:"p"},"else if"),". If it remained an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement, that conditional would also be met since there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," \u2014 which means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component would show even if ",(0,a.kt)("inlineCode",{parentName:"p"},"editing")," is set to true."),(0,a.kt)("h4",{id:"add-editticketform-component"},"Add ",(0,a.kt)("inlineCode",{parentName:"h4"},"EditTicketForm")," Component"),(0,a.kt)("p",null,"This is the final step for our first behavior. Once we have an ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," in place, a user will be able to navigate to the edit page. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReusableForm")," component we created in the last lesson for our form."),(0,a.kt)("div",{class:"filename"},"EditTicketForm.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport ReusableForm from "./ReusableForm";\n\nfunction EditTicketForm (props) {\n  return (\n    <React.Fragment>\n      <ReusableForm \n        buttonText="Update Ticket" />\n    </React.Fragment>\n  );\n}\n\nexport default EditTicketForm;\n')),(0,a.kt)("p",null,'The "Update Ticket" button won\'t do anything yet \u2014 this is part of the second behavior that we have yet to implement.'),(0,a.kt)("p",null,"At this point, a user should be able to access the edit form and return to the main page. If the application doesn't work correctly, it's time to debug. While debugging can be frustrating, it's a great opportunity to get a better understanding of how React works."),(0,a.kt)("h2",{id:"behavior-2-editing-a-ticket"},"Behavior #2: Editing a Ticket"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Fortunately, this behavior will be much easier to implement now that we have our form in place. We just need to create a new method for updating a ticket and then pass it down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," so it can be attached to a click handler."),(0,a.kt)("h4",{id:"write-method-for-updating-ticket"},"Write Method for Updating Ticket"),(0,a.kt)("p",null,"As stated in our implementation for this behavior, the method needs to do the following things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the state of ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTicketList")," to show the edited ticket;"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," because the previously ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," will no longer exist (since it's been deleted)."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"editing")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," so the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketList")," component shows instead of the ",(0,a.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," component.")),(0,a.kt)("p",null,"Here's our new method:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleEditingTicketInList = (ticketToEdit) => {\n  const editedMainTicketList = this.state.mainTicketList\n    .filter(ticket => ticket.id !== this.state.selectedTicket.id)\n    .concat(ticketToEdit);\n  this.setState({\n      mainTicketList: editedMainTicketList,\n      editing: false,\n      selectedTicket: null\n    });\n}\n")),(0,a.kt)("p",null,"Let's start by taking a look at the first part of our new method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const editedMainTicketList = this.state.mainTicketList\n      .filter(ticket => ticket.id !== this.state.selectedTicket.id)\n      .concat(ticketToEdit);\n")),(0,a.kt)("p",null,"Note that we've broken this up into multiple lines to make it more readable. This is a common technique when we chain multiple functions together. It is not required (and it does not change the functionality of the code), but it can make chained functions easier on the eyes."),(0,a.kt)("p",null,"We filter the previous version of the ticket out of the list with ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," and then add the edited version of the ticket to the list with ",(0,a.kt)("inlineCode",{parentName:"p"},"concat()"),". While we could've edited the ticket directly, this is easier and doesn't involve mutating the ticket \u2014 just replace it with the new version."),(0,a.kt)("p",null,"Next, we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," to be equal to the list with the updated ticket."),(0,a.kt)("p",null,"Finally, we update ",(0,a.kt)("inlineCode",{parentName:"p"},"editing")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h4",{id:"pass-new-method-down-to-editticketform-as-a-prop"},"Pass New Method Down to ",(0,a.kt)("inlineCode",{parentName:"h4"},"EditTicketForm")," as a Prop"),(0,a.kt)("p",null,"Next, we need to pass our new method down as a prop to our ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," component:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />\n")),(0,a.kt)("p",null,"We've added this code: ",(0,a.kt)("inlineCode",{parentName:"p"},"onEditTicket = {this.handleEditingTicketInList}"),"."),(0,a.kt)("h4",{id:"add-proptype-to-editticketform-component"},"Add PropType to ",(0,a.kt)("inlineCode",{parentName:"h4"},"EditTicketForm")," Component"),(0,a.kt)("p",null,"Next, let's add a prop type to ",(0,a.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," for the function we are passing down as a prop. We also need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTypes")," as well."),(0,a.kt)("div",{class:"filename"},"EditTicketForm.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import PropTypes from "prop-types";\n...\nEditTicketForm.propTypes = {\n  ticket: PropTypes.object,\n  onEditTicket: PropTypes.func\n};\n')),(0,a.kt)("h4",{id:"add-event-handler-in-editticketform-along-with-function-to-capture-form-values"},"Add Event Handler in ",(0,a.kt)("inlineCode",{parentName:"h4"},"EditTicketForm")," Along with Function to Capture Form Values"),(0,a.kt)("p",null,"Lastly, we'll add a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditTicketFormSubmission")," that captures form values and triggers the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditingTicketInList")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". We also need to update our JSX so the event handler in our form refers to our new ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditTicketFormSubmission")," function."),(0,a.kt)("div",{class:"filename"},"EditTicketForm.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nfunction EditTicketForm(props){\n  const { ticket } = props;\n  \n  function handleEditTicketFormSubmission(event) {\n    event.preventDefault();\n    props.onEditTicket({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: ticket.id});\n  }\n\n  return (\n    <React.Fragment>\n      <ReusableForm \n        formSubmissionHandler={handleEditTicketFormSubmission} /* new code */ \n        buttonText="Update Ticket" />\n    </React.Fragment>\n  );\n}\n')),(0,a.kt)("p",null,"Our function grabs values from the form and then triggers the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditingTicketInList")," via the ",(0,a.kt)("inlineCode",{parentName:"p"},"onEditTicket")," prop."),(0,a.kt)("p",null,"We also update the event handler on our ",(0,a.kt)("inlineCode",{parentName:"p"},"ReusableForm")," component to be ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditTicketFormSubmission"),"."),(0,a.kt)("p",null,"At this point, our Update functionality should be working and we'll have full CRUD for our Help Queue."),(0,a.kt)("p",null,"There is still a small bug, however. If you want to practice debugging, see if you can find it and fix it on your own."),(0,a.kt)("p",null,'If we get to the editing a ticket form and click "Return to Ticket List," it won\'t actually return us to the ticket list. And if we click that button and ',(0,a.kt)("em",{parentName:"p"},"then")," try to edit a ticket, we'll get an error."),(0,a.kt)("p",null,"The issue, once again, comes from the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClick()")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),". We need to make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"editing: false")," when the method is triggered. Here's the updated method:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleClick = () => {\n  if (this.state.selectedTicket != null) {\n    this.setState({\n      formVisibleOnPage: false,\n      selectedTicket: null,\n      editing: false // new code\n    });\n  } else {\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage,\n    }));\n  }\n}\n")),(0,a.kt)("p",null,'The cause of the bug should now make sense. When a user navigated to the edit form and clicked the "Return to Ticket List" button, ',(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," is not ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u2014 however, our conditional set ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ",(0,a.kt)("em",{parentName:"p"},"without")," setting ",(0,a.kt)("inlineCode",{parentName:"p"},"editing")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". That way, if a user then tried to fill out the edit form, they'd get an error because the edit form would no longer be associated with a specific ticket. It's an error that seems a bit weird at first \u2014 but which becomes clear once we take a closer look at the code."),(0,a.kt)("p",null,"At this point, a senior dev on the team would say it's time to refactor. This method is really doing a lot \u2014 it's handling four different button clicks seamlessly. On the one hand, it's great to get a method to do so much, but on the other hand, it's going to get increasingly buggy, especially in a larger code base. As you create your React applications this week, it's important to think about the tradeoffs in your design decisions, and to discuss them with your peers."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we added several behaviors to our Help Queue application. First, we planned out the new behaviors our application needs and listed all the steps we need to take to implement these behaviors. While it's not necessary to write down all of these steps, it can be helpful for newcomers to React."),(0,a.kt)("p",null,"Next, we added functionality to show an edit form (local state) and then update a ticket in our ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," (shared state). Once again, we had to deal with a lot of little pieces. It may even seem like we needed to add a huge and overly complicated amount of code when we could do a fairly simple implementation with vanilla JS. "),(0,a.kt)("p",null,"However, we've written dynamic, modular and scalable code that lends itself well to further expansion. If all the steps are still overwhelming, trust the process \u2014 learning a new library or framework is always challenging and React is no different. In a few weeks, working with these concepts will become second nature."))}k.isMDXComponent=!0}}]);