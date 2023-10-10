"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42334],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=i,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return t?a.createElement(u,r(r({ref:n},p),{},{components:t})):a.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},29298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7896),i=(t(2784),t(30876));const o={title:"\ud83d\udcd3 Many-to-Many Relationship Review",id:"many-to-many-relationship-review",slug:"many-to-many-relationship-review",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_many_to_many_relationship_review.md"},r=void 0,l={unversionedId:"c-and-net/many-to-many-relationships/many-to-many-relationship-review",id:"c-and-net/many-to-many-relationships/many-to-many-relationship-review",title:"\ud83d\udcd3 Many-to-Many Relationship Review",description:"Before we begin implementing many-to-many relationships, let's review what they look like and how they work.",source:"@site/docs/c-and-net/9_many-to-many-relationships/0b-many-to-many-relationship-review.md",sourceDirName:"c-and-net/9_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/many-to-many-relationship-review",permalink:"/c-and-net/many-to-many-relationships/many-to-many-relationship-review",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcd3 Many-to-Many Relationship Review",id:"many-to-many-relationship-review",slug:"many-to-many-relationship-review",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_many_to_many_relationship_review.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Many-To-Many Objectives",permalink:"/c-and-net/many-to-many-relationships/many-to-many-objectives"},next:{title:"\ud83d\udcd3 Code First Development and Migrations",permalink:"/c-and-net/many-to-many-relationships/code-first-development-and-migrations"}},s={},c=[{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:2},{value:"Join Tables",id:"join-tables",level:3},{value:"Schema Diagrams",id:"schema-diagrams",level:3}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we begin implementing many-to-many relationships, let's review what they look like and how they work."),(0,i.kt)("h2",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Imagine we have the following database table containing our friends' contact information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"friends\n-------\n\n id | name    | phone\n ---|---------|-----------\n 1  | Pedro   | 9165551212\n 2  | Jessica | 3235551212\n 3  | Jake    | 4155551212\n")),(0,i.kt)("p",null,"What if we also want to track what cities our friends have visited? We can add a second ",(0,i.kt)("inlineCode",{parentName:"p"},"cities")," table that contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"friend_id")," foreign key, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cities\n------\n\n id | city     | state | friend_id\n ---|----------|-------|----------\n  1 | Chicago  | IL    | 1\n  2 | New York | NY    | 1\n  3 | Oakland  | CA    | 2\n  4 | Portland | OR    | 3\n")),(0,i.kt)("p",null,"Each city contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"friend_id")," that corresponds to the friend who has visited that city. So far so good."),(0,i.kt)("p",null,"However, what if Jessica, Jake, ",(0,i.kt)("em",{parentName:"p"},"and")," Pedro have all been to Chicago? To record this, our ",(0,i.kt)("inlineCode",{parentName:"p"},"cities")," table would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"friends\n-------\n\n id | name    | phone\n ---|---------|-----------\n 1  | Pedro   | 9165551212\n 2  | Jessica | 3235551212\n 3  | Jake    | 4155551212\n\n\ncities\n------\n\n id | city     | state | friend_id\n ---|----------|-------|----------\n  1 | Chicago  | IL    | 1\n  2 | New York | NY    | 1\n  3 | Oakland  | CA    | 2\n  4 | Portland | OR    | 3\n  5 | Chicago  | IL    | 2\n  6 | Chicago  | IL    | 3\n")),(0,i.kt)("p",null,"Here we've created three entries for Chicago. Each one has a different ",(0,i.kt)("inlineCode",{parentName:"p"},"friend_id")," corresponding with one of the friends in our ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," table."),(0,i.kt)("p",null,"However, this is very inefficient. We are now storing information about Chicago in three different places. If we later want to update Chicago's entry, we'd have to update it in multiple locations. Our data could very quickly become inconsistent if we don't update it in every place."),(0,i.kt)("p",null,"If we try to solve the problem by including a ",(0,i.kt)("inlineCode",{parentName:"p"},"city_id")," column in the ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," table instead, we'll end up with the same problem. Instead of having duplicate cities, we'll have duplicate friends."),(0,i.kt)("p",null,"We can't accurately reflect this information with the tools we used to associate a one-to-many relationship. Instead, we need to create a ",(0,i.kt)("strong",{parentName:"p"},"many-to-many relationship")," because each friend is capable of visiting many different cities and each city can also have many different visits from friends."),(0,i.kt)("h3",{id:"join-tables"},"Join Tables"),(0,i.kt)("p",null,"The right way to handle a many-to-many relationship is by using a third table called ",(0,i.kt)("strong",{parentName:"p"},"join table"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"friends\n-------\n\n id | name    | phone\n ---|---------|-----------\n 1  | Pedro   | 9165551212\n 2  | Jessica | 3235551212\n 3  | Jake    | 4155551212\n\n\ncities\n------\n\n id | city     | state\n ---|----------|------\n 1  | Chicago  | IL\n 2  | New York | NY\n 3  | Oakland  | CA\n 4  | Portland | OR\n\n\ncities_friends\n--------------\n\n id | city_id | friend_id\n ---|---------|----------\n 1  | 1       | 1\n 2  | 1       | 2\n 3  | 2       | 3\n 4  | 2       | 1\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have a ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," table with information about each of our three friends.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We also have a ",(0,i.kt)("inlineCode",{parentName:"p"},"cities")," table with information about the four cities we're tracking.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have a third ",(0,i.kt)("strong",{parentName:"p"},"join table")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"cities_friends"),". For each instance of a friend interacting with a city, we record an entry in this table. Each entry contains the ID of a city and the ID of the friend that made a visit to that city. Notice that each of these two IDs match their corresponding entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cities")," table."))),(0,i.kt)("p",null,'Join tables are generally named by combining names of the two tables they\'re "joining." In this case, we have ',(0,i.kt)("inlineCode",{parentName:"p"},"cities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," separated by an underscore. But if the type of interaction the join table is recording has a more descriptive name, we can use that instead. For instance, we could call the join table above ",(0,i.kt)("inlineCode",{parentName:"p"},"visits"),"."),(0,i.kt)("p",null,"Let's consider one more example. Let's say we're making an application for a school. Each course the school offers has many different students in it. A student is also capable of taking many different courses. Recording this information in a many-to-many database relationship might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"courses\n-------\n\n id | course\n ---|------------------------\n  1 | Epicodus\n  2 | How to cook vegan\n  3 | Intro to rocket science\n\nstudents\n--------\n\n id | student\n ---|--------\n  1 | libby  \n  2 | tiny   \n  3 | bub    \n  4 | lizzy  \n  5 | hank   \n\nenrollments\n-----------\n\n id | student_id | course_id\n ---|------------|----------\n  1 | 1          | 1\n  2 | 2          | 1\n  3 | 3          | 2\n  4 | 4          | 1\n  5 | 5          | 3\n  6 | 2          | 3\n  7 | 4          | 3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have a ",(0,i.kt)("inlineCode",{parentName:"p"},"courses")," table recording each course the school offers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We also have a ",(0,i.kt)("inlineCode",{parentName:"p"},"students")," table with all enrolled students.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Our join table is called ",(0,i.kt)("inlineCode",{parentName:"p"},"enrollments"),". For each instance of a relationship between a student and course, it contains an entry linking that student's ID and the course ID."))),(0,i.kt)("h3",{id:"schema-diagrams"},"Schema Diagrams"),(0,i.kt)("p",null,"To familiarize you with how a database works, we've been showing you tables with example data. However, when you want to describe all the tables and relations in a database, also called the database ",(0,i.kt)("strong",{parentName:"p"},"schema"),", it's not convenient to include sample data because it takes up too much space. Instead, tables are depicted only with the table name and column names, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"friends\n-------\nname\nphone\nbirthday\n")),(0,i.kt)("p",null,"As we can see, we're now listing the column names vertically under the table name, instead of horizontally. Also, there's no data listed."),(0,i.kt)("p",null,"Database column names are also called database ",(0,i.kt)("strong",{parentName:"p"},"fields"),". In this example, there are three fields for the friends table: name, phone, and birthday."),(0,i.kt)("p",null,"When designing database schemas, it's often helpful to draw out the relationships among tables like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/schema_simple.png",alt:"A simple database schema diagram."})),(0,i.kt)("p",null,"It's especially helpful if you're trying to figure out a more complex schema:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/schema_complex.png",alt:"drawing of complex schema"})),(0,i.kt)("p",null,"You can make schema diagrams like this with this online ",(0,i.kt)("a",{parentName:"p",href:"http://ondras.zarovi.cz/sql/demo/"},"SQL Designer"),". The SQL Designer has a lot of options, but ignore most of them. Just add tables and add fields to tables, and don't worry about data types or other options. To connect tables for your one-to-many and many-to-many relationships, click on the ID of the table, click ",(0,i.kt)("em",{parentName:"p"},"connection foreign key")," (on the right), and then click the corresponding field that references that ID."))}m.isMDXComponent=!0}}]);