"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2465],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7896),a=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Adding Redux to React: Part 2",id:"adding-redux-to-react-part-2",slug:"adding-redux-to-react-part-2",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_adding_redux_to_react_part_2.md"},r=void 0,l={unversionedId:"react/react-with-redux/adding-redux-to-react-part-2",id:"react/react-with-redux/adding-redux-to-react-part-2",title:"\ud83d\udcd3 Adding Redux to React: Part 2",description:"We're ready to refactor our Help Queue application to incorporate Redux. We'll start by creating the Redux store.",source:"@site/docs/react/4_react-with-redux/0l-adding-redux-to-react-part-2.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/adding-redux-to-react-part-2",permalink:"/react/react-with-redux/adding-redux-to-react-part-2",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\ud83d\udcd3 Adding Redux to React: Part 2",id:"adding-redux-to-react-part-2",slug:"adding-redux-to-react-part-2",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_adding_redux_to_react_part_2.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Adding Redux to React: Part 1",permalink:"/react/react-with-redux/adding-redux-to-react-part-1"},next:{title:"\ud83d\udcd3 Adding Redux to React: Part 3",permalink:"/react/react-with-redux/adding-redux-to-react-part-3"}},s={},c=[{value:"1. Create the Redux Store",id:"1-create-the-redux-store",level:3},{value:"2. Configure the React-Redux Provider",id:"2-configure-the-react-redux-provider",level:3},{value:"3. Connect Components to Store",id:"3-connect-components-to-store",level:3},{value:"4. Dispatch Actions to Mutate Store State",id:"4-dispatch-actions-to-mutate-store-state",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're ready to refactor our Help Queue application to incorporate Redux. We'll start by creating the Redux store."),(0,a.kt)("h3",{id:"1-create-the-redux-store"},"1. Create the Redux Store"),(0,a.kt)("p",null,"First, we need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," and our ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," into our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," entry point file. This is exactly what we did in our small Redux learning project. The difference is that our new import statements will go in the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file. Back in Intermediate JavaScript, we learned that webpack needs to have access to an entry point file. The entry point file is where webpack accesses the top level component in our application. Since we want the store to be available everywhere we need it, it needs to be in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,a.kt)("p",null,"Add these import statements to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("div",{class:"filename"},"index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { createStore } from 'redux';\nimport reducer from './reducers/ticket-list-reducer';\n...\n")),(0,a.kt)("p",null,"Next, we need to instantiate the store. Add this line directly after the import statements:"),(0,a.kt)("div",{class:"filename"},"index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createStore(reducer);\n")),(0,a.kt)("p",null,"As we can see here, we are passing our reducer into the ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," function. That means the ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," constant is a Redux store that knows how to handle the actions we've defined in our reducer."),(0,a.kt)("h3",{id:"2-configure-the-react-redux-provider"},"2. Configure the React-Redux Provider"),(0,a.kt)("p",null,"Next, we need to wrap our ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," component. As previously discussed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," component will give all of its child components access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function, which is needed to connect to the Redux store."),(0,a.kt)("p",null,"Let's start by adding another import statement:"),(0,a.kt)("div",{class:"filename"},"index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { Provider } from 'react-redux';\n...\n")),(0,a.kt)("p",null,"Now we need to wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," component around ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," and pass the store into ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," as a prop. We will update our ",(0,a.kt)("inlineCode",{parentName:"p"},"root.render()")," line of code to do this:"),(0,a.kt)("div",{class:"filename"},"index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," component is now a child of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," component. We've also passed the Redux store in as a prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," as well. "),(0,a.kt)("p",null,"We won't need to explicitly pass ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," as a prop through the other components in our tree \u2014 it's already being inherited by ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," and all of its children by way of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," component."),(0,a.kt)("h3",{id:"3-connect-components-to-store"},"3. Connect Components to Store"),(0,a.kt)("p",null,"It's time to determine which components in our application should have access to the store. These components will need the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function."),(0,a.kt)("p",null,"This can be a complex decision in larger applications \u2014 and there's no single correct way to incorporate Redux in an application. Our goal is to keep things simple so we will add the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function to the one component in our application that already has state: ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),". That way, we will (mostly) only need to update one component to integrate Redux in our application."),(0,a.kt)("p",null,"We'll import the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," function from React Redux at the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),". Then, right before our export statement at the end of the file, we'll wrap our component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux';\n\n...\n\nTicketControl = connect()(TicketControl);\n\nexport default TicketControl;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function redefines our entire ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component as a ",(0,a.kt)("em",{parentName:"p"},"new")," ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component with additional functionality included. The return value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function is the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component itself, but this time we will have powerful new tools at our disposal: the ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," functions."),(0,a.kt)("p",null,"Note that it's important that ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," is called right before we export ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". That ensures that the component that's exported has all necessary React Redux functionality."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," is what is known as a ",(0,a.kt)("strong",{parentName:"p"},"higher-order component"),". This is a common term in React. A higher-order component is a function that takes an existing component, wraps it with additional functionality, and then returns it so it can be used elsewhere in an application. To learn more about HOCs, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/higher-order-components.html"},"React documentation"),"."),(0,a.kt)("p",null,"Even if you find the concept of higher-order components confusing, you can still implement the necessary boilerplate to get Redux working. React Redux takes care of this for you so you don't have to think about it."),(0,a.kt)("h3",{id:"4-dispatch-actions-to-mutate-store-state"},"4. Dispatch Actions to Mutate Store State"),(0,a.kt)("p",null,"We are now ready to use ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. We currently have three methods in our component that we will need to modify to use ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," adds tickets to our list.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"handleEditingTicketInList")," updates tickets in our list.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket")," deletes tickets from our ticket list."))),(0,a.kt)("p",null,"We will also remove ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," from the component's state object because React will no longer handle the ticket list \u2014 we'll let Redux do that instead."),(0,a.kt)("p",null,"Let's start by removing ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," and then work our way through updates to our three methods. Don't worry \u2014 the updates to our methods will be relatively similar to each other."),(0,a.kt)("p",null,"First, let's update the state object in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),"'s constructor:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconstructor(props) {\n    super(props);\n    console.log(props);\n    this.state = {\n      formVisibleOnPage: false,\n      selectedTicket: null,\n      editing: false\n    };\n  }\n...\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," no longer has a ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," property. That's the only change we've made here. We'll still let the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component handle all local state."),(0,a.kt)("p",null,"Next, let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," method. We will need to make several changes."),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  handleAddingNewTicketToList = (newTicket) => {\n    const { dispatch } = this.props;\n    const { id, names, location, issue } = newTicket;\n    const action = {\n      type: 'ADD_TICKET',\n      id: id,\n      names: names,\n      location: location,\n      issue: issue,\n    }\n    dispatch(action);\n    this.setState({formVisibleOnPage: false});\n  }\n...\n")),(0,a.kt)("p",null,"We could call ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.dispatch")," in our method but it's common to deconstruct ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props"),". This makes our code a little cleaner."),(0,a.kt)("p",null,"Also, we need to deconstruct the values from ",(0,a.kt)("inlineCode",{parentName:"p"},"newTicket")," so we can actually pass them into our action, which requires four different properties."),(0,a.kt)("p",null,"Next, we store our action in a constant. This action should look familiar \u2014 it's the ",(0,a.kt)("inlineCode",{parentName:"p"},"'ADD_TICKET'")," action we created and tested."),(0,a.kt)("p",null,"Next comes the actual Redux magic: we call ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch(action);"),". This automatically dispatches our action and updates the store \u2014 much as we did with our little Redux learning application in the browser. The difference is that React Redux provides a seamless connection between React and Redux, making our coding lives much easier."),(0,a.kt)("p",null,"Note that the method we just rewrote still handles local state. We could move the code that updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," property to our store but we won't. Ultimately, it's up to us to decide whether or not local state belongs in the Redux store or if React should handle it. Neither approach is considered a bad practice \u2014 though in a larger application, too much local state cluttering up the Redux store could become a code smell."),(0,a.kt)("p",null,"Our application isn't set up to show data from the store yet but we can still confirm that our updated method is functioning correctly by adding the following code in our entry point ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file just after the line where we instantiate our store:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst store = createStore(reducer);\n\nstore.subscribe(() =>\n  console.log(store.getState())\n);\n...\n")),(0,a.kt)("p",null,"Remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method that Redux provides? Generally, we won't use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"getState()"),' in our "production" code, but it\'s excellent for testing. This is a great way to keep an eye on the current state of the store.'),(0,a.kt)("p",null,"If we run our application and open the console, we'll see a message each time a new ticket is added to the store. However, we still have more work to do before we can display the contents of the store in our application."),(0,a.kt)("p",null,"Next, let's update our remaining methods. See if you can update them on your own before taking a look at the code \u2014 the process is pretty much exactly the same. We just need to define our action and dispatch it:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nhandleEditingTicketInList = (ticketToEdit) => {\n    const { dispatch } = this.props;\n    const { id, names, location, issue } = ticketToEdit;\n    const action = {\n      type: 'ADD_TICKET',\n      id: id,\n      names: names,\n      location: location,\n      issue: issue,\n    }\n    dispatch(action);\n    this.setState({\n      editing: false,\n      selectedTicket: null\n    });\n  }\n\n...\n\n  handleDeletingTicket = (id) => {\n    const { dispatch } = this.props;\n    const action = {\n      type: 'DELETE_TICKET',\n      id: id\n    }\n    dispatch(action);\n    this.setState({selectedTicket: null});\n  }\n...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note that we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action to edit our ticket as well. How can our ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action do this? Well, the only difference between when we are adding and editing a ticket is the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property. If it's a new ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", a new ticket will be added to the store. If it's an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," that already exists, the existing ticket will be replaced. At this point, it might be more accurate to name the action ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_OR_UPDATE_TICKET"),", but we will keep the action name the same for consistency.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In both cases, we deconstruct ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If necessary, we deconstruct any objects that need to be used in the action. (We do this for editing a ticket but not for deleting a ticket since deleting a ticket only needs an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," in addition to the action's ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),".)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Next, we define the action itself. Defining all these actions may not seem very DRY, but we'll learn a nifty technique to clean our actions up in a future lesson.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once the action is defined, we can ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch()")," it."))),(0,a.kt)("p",null,"Note that you won't be able to check out the update and delete functionality in the browser just yet \u2014 that's because the ticket list from our store won't display and we need to click on a ticket detail to either update or delete it."),(0,a.kt)("p",null,"We're ready to update our component so it can actually display the ticket list! We'll do that in the next lesson."))}u.isMDXComponent=!0}}]);