"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[79820],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,w=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(w,i(i({ref:t},c),{},{components:n})):o.createElement(w,i({ref:t},c))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Building Graphs Part 1",id:"building-graphs-part-1",slug:"building-graphs-part-1",hide_table_of_contents:!0,sidebar_position:17,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_building_graphs_part_1.md"},i=void 0,s={unversionedId:"capstone/capstone-week-1/building-graphs-part-1",id:"capstone/capstone-week-1/building-graphs-part-1",title:"\ud83d\udcd3 Building Graphs Part 1",description:"Imagine we've been hired to work on an application that keeps track of friendships between people. This kind of application has many use cases \u2014 after all, this is the foundation of many social networks. Remember that a graph is just another way of depicting a network. So when we think about portraying a social network, we could also call it a social graph. So let's get to work! In our application, we should be able to do the following:",source:"@site/docs/capstone/1_capstone-week-1/3-building-graphs-part-1.md",sourceDirName:"capstone/1_capstone-week-1",slug:"/capstone/capstone-week-1/building-graphs-part-1",permalink:"/capstone/capstone-week-1/building-graphs-part-1",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\ud83d\udcd3 Building Graphs Part 1",id:"building-graphs-part-1",slug:"building-graphs-part-1",hide_table_of_contents:!0,sidebar_position:17,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/capstone/blob/main/3_building_graphs_part_1.md"},sidebar:"capstone",previous:{title:"\ud83d\udcd3 Representing Graph Structures with Code",permalink:"/capstone/capstone-week-1/representing-graph-structures-with-code"},next:{title:"\ud83d\udcd3 Building Graphs Part 2",permalink:"/capstone/capstone-week-1/building-graphs-part-2"}},l={},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Imagine we've been hired to work on an application that keeps track of friendships between people. This kind of application has many use cases \u2014 after all, this is the foundation of many social networks. Remember that a graph is just another way of depicting a network. So when we think about portraying a social network, we could also call it a social graph. So let's get to work! In our application, we should be able to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add people (nodes) to the social network. To keep it simple, they will only have a ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," property."),(0,a.kt)("li",{parentName:"ul"},"Add friendships between people (edges between nodes). These will be unweighted and undirected."),(0,a.kt)("li",{parentName:"ul"},"Remove nodes from the social network. Some people may want to revoke their accounts."),(0,a.kt)("li",{parentName:"ul"},"Remove edges from the social network. Sadly, some people may want to end their friendships.")),(0,a.kt)("p",null,"This graph will not be a ",(0,a.kt)("strong",{parentName:"p"},"connected")," graph. A connected graph is one where a potential path exists between every single node in the graph. However, in an actual social network, we can't assume that everyone knows each other. Our social network could look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/computer-science-curriculum-2020/unconnected_graph.png",alt:"This image shows two groups of nodes. Each group is connected by edges but the two groups have no connection to each other."})),(0,a.kt)("p",null,"In the image above, Ada, Grace and Eve are friends. However, no one in this group is friends (yet) with Mary and Lina, who have their own friend group."),(0,a.kt)("p",null,"Once we've completed all of the above functionality, we'll be ready to explore two algorithms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An algorithm for checking the reachability between two nodes. For instance, we can reach Ada via Eve or Grace but not via Mary or Lina. In a social network trying to bring different groups together, knowing the reachability between two nodes could be very useful. For instance, in a social network working to mobilize voters, it might be useful to see if various people in a city are connected or not. If not, introducing them could allow them to work together and better mobilize. We will walk through the process of writing this algorithm."),(0,a.kt)("li",{parentName:"ul"},"An algorithm checking the ",(0,a.kt)("em",{parentName:"li"},"shortest path")," between two nodes. In the chart above, the shortest path between all reachable nodes is just one edge but a more complex social network would have paths of varying lengths. In this way, we can check the degrees of separation between two people in the network. This could have many uses in a real-world application as well. For instance, in a professional network like LinkedIn, it might be useful to see your closest connection at a place you hope to work \u2014 and how you are connected. Or you might want to design a friend finder that automatically recommends connecting with friends of friends \u2014 which, in the parlance of graphs, would be all adjacent nodes of a node. We won't walk through this method \u2014 instead, you will have the opportunity to use one of the algorithms we discuss in order to solve this problem on your own.")),(0,a.kt)("p",null,"You can probably imagine all kinds of ways to build this application out further. Imagine, for instance, that we decided to weight edges based on the number of social interactions between two nodes. We could then determine their overall connectivity (and perhaps even make assumptions about how close they are as friends). And you can likely also imagine all kinds of other use cases for graphs besides social networks ranging from transportation networks to HR applications to business applications tracking international trade."),(0,a.kt)("p",null,"In the next lesson, we'll actually start building our application."))}h.isMDXComponent=!0}}]);