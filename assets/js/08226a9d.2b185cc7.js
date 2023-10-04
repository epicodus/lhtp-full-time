"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71551],{30876:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(2784);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=l,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return t?n.createElement(k,s(s({ref:a},p),{},{components:t})):n.createElement(k,s({ref:a},p))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=u;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[m]="string"==typeof e?e:l,s[1]=r;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57204:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=t(7896),l=(t(2784),t(30876));const i={title:"SQL Basics: Managing MySQL Databases from the Command Line",id:"sql-basics-managing-mysql-databases-from-the-command-line",slug:"sql-basics-managing-mysql-databases-from-the-command-line",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_sql_basics.md"},s=void 0,r={unversionedId:"c-and-net/database-basics/sql-basics-managing-mysql-databases-from-the-command-line",id:"c-and-net/database-basics/sql-basics-managing-mysql-databases-from-the-command-line",title:"SQL Basics: Managing MySQL Databases from the Command Line",description:"Note: See the Installing and Configuring MySQL lesson for instructions on installing MySQL.",source:"@site/docs/c-and-net/8_database-basics/0d-sql-basics.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/sql-basics-managing-mysql-databases-from-the-command-line",permalink:"/c-and-net/database-basics/sql-basics-managing-mysql-databases-from-the-command-line",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SQL Basics: Managing MySQL Databases from the Command Line",id:"sql-basics-managing-mysql-databases-from-the-command-line",slug:"sql-basics-managing-mysql-databases-from-the-command-line",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_sql_basics.md"},sidebar:"c-and-net",previous:{title:"Introduction to Databases",permalink:"/c-and-net/database-basics/introduction-to-databases"},next:{title:"Introduction to MySQL Workbench: Creating a Database",permalink:"/c-and-net/database-basics/introduction-to-mysql-workbench-creating-a-database"}},o={},d=[{value:"Connecting to MySQL from the Command Line",id:"connecting-to-mysql-from-the-command-line",level:2},{value:"At Epicodus",id:"at-epicodus",level:3},{value:"At Home",id:"at-home",level:3},{value:"Note to Windows Users",id:"note-to-windows-users",level:4},{value:"Working with the Database Prompt",id:"working-with-the-database-prompt",level:2},{value:"Navigating to a Database",id:"navigating-to-a-database",level:3},{value:"Creating a Database",id:"creating-a-database",level:3},{value:"Listing all Databases",id:"listing-all-databases",level:3},{value:"Important Note",id:"important-note",level:4},{value:"Connecting to a Database",id:"connecting-to-a-database",level:3},{value:"Creating Tables in a Database",id:"creating-tables-in-a-database",level:3},{value:"Data Types",id:"data-types",level:4},{value:"Listing Columns",id:"listing-columns",level:3},{value:"Listing Tables",id:"listing-tables",level:3},{value:"Deleting Tables",id:"deleting-tables",level:3},{value:"Adding Columns",id:"adding-columns",level:3},{value:"Dropping Columns",id:"dropping-columns",level:3},{value:"Adding Primary Keys",id:"adding-primary-keys",level:3},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Retrieving IDs",id:"retrieving-ids",level:3},{value:"Querying",id:"querying",level:3},{value:"SELECT",id:"select",level:4},{value:"WHERE",id:"where",level:4},{value:"Updating Records",id:"updating-records",level:3},{value:"Deleting Records",id:"deleting-records",level:3},{value:"Dropping Databases",id:"dropping-databases",level:3},{value:"Quitting MySQL",id:"quitting-mysql",level:3},{value:"More Commands",id:"more-commands",level:3}],p={toc:d},m="wrapper";function c(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," See the ",(0,l.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-and-configuring-mysql"},"Installing and Configuring MySQL")," lesson for instructions on installing MySQL."),(0,l.kt)("p",null,"In this lesson, we'll start using SQL commands in the command line. We'll use MySQL as our database management system."),(0,l.kt)("h2",{id:"connecting-to-mysql-from-the-command-line"},"Connecting to MySQL from the Command Line"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"at-epicodus"},"At Epicodus"),(0,l.kt)("p",null,"To launch MySQL servers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The MySQL server application that we previously installed is configured to run on start, so it should already be running.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the server is not running, restart the computer.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Access the command line console for MySQL by executing the command ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql -uroot -pepicodus")," in the terminal."))),(0,l.kt)("h3",{id:"at-home"},"At Home"),(0,l.kt)("p",null,"To log into MySQL via the command line on your personal machine, you may need to enter different values for your username (",(0,l.kt)("inlineCode",{parentName:"p"},"[YOUR-USERNAME]"),") and password (",(0,l.kt)("inlineCode",{parentName:"p"},"[YOUR-PASSWORD]"),"). However the basic command should be the same as you would use in class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql -u[YOUR-USERNAME] -p[YOUR-PASSWORD]\n")),(0,l.kt)("h4",{id:"note-to-windows-users"},"Note to Windows Users"),(0,l.kt)("p",null,"Sometimes we cannot access the ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql")," console via GitBash. If you are getting an error message when attempting to access ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql"),", use ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3"},"PowerShell")," instead of GitBash. Typically, PowerShell is comes automatically installed on all computers with the Windows operating system. "),(0,l.kt)("h2",{id:"working-with-the-database-prompt"},"Working with the Database Prompt"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Once we are logged into our local MySQL server, we'll see a prompt like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql>\n")),(0,l.kt)("p",null,"We'll use a ",(0,l.kt)("inlineCode",{parentName:"p"},">")," to show when we should write a command in the MySQL shell."),(0,l.kt)("h3",{id:"navigating-to-a-database"},"Navigating to a Database"),(0,l.kt)("p",null,"MySQL can manage many different databases at once. To make changes to a specific database, we must navigate into that database from the MySQL shell."),(0,l.kt)("p",null,"Let's look at the database we are currently connected to with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT DATABASE();\n")),(0,l.kt)("p",null,"SQL commands aren't actually case sensitive, but it's common practice to capitalize them as seen here. Also, all SQL statements must end with a semicolon."),(0,l.kt)("p",null,"If we press ",(0,l.kt)("em",{parentName:"p"},"Enter")," after a SQL command and nothing happens, check to see if the prompt has changed from ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL>")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"->"),". If so, that means we forgot a semicolon at the end of our statement. We can just add one and press ",(0,l.kt)("em",{parentName:"p"},"Enter")," again to resolve the issue."),(0,l.kt)("h3",{id:"creating-a-database"},"Creating a Database"),(0,l.kt)("p",null,"The current database is ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," because we haven\u2019t created any databases yet. We can tell MySQL to make a new database with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> CREATE DATABASE test_database;\n")),(0,l.kt)("h3",{id:"listing-all-databases"},"Listing all Databases"),(0,l.kt)("p",null,"Let's list the databases in our MySQL server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SHOW DATABASES;\n")),(0,l.kt)("p",null,"We'll see our new ",(0,l.kt)("inlineCode",{parentName:"p"},"test_database")," as well as a few other databases that come with MySQL by default."),(0,l.kt)("h4",{id:"important-note"},"Important Note"),(0,l.kt)("p",null,"One of the pre-existing databases is called ",(0,l.kt)("inlineCode",{parentName:"p"},"information_schema"),". This database that holds metadata for all our other databases and MySQL requires it. ",(0,l.kt)("strong",{parentName:"p"},"Don't ever delete it.")),(0,l.kt)("p",null,"In fact, it's a standard practice to ",(0,l.kt)("strong",{parentName:"p"},"never alter a database you didn't create"),". If it came with a tool by default, that tool likely ",(0,l.kt)("em",{parentName:"p"},"requires")," it to run. Altering or deleting the database could break it."),(0,l.kt)("h3",{id:"connecting-to-a-database"},"Connecting to a Database"),(0,l.kt)("p",null,"We need to connect to our new database before we can make changes to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> USE test_database;\n")),(0,l.kt)("p",null,"Let's verify that we're connected to the correct database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT DATABASE();\n")),(0,l.kt)("h3",{id:"creating-tables-in-a-database"},"Creating Tables in a Database"),(0,l.kt)("p",null,"Now let's create a table in our database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> CREATE TABLE contacts (name VARCHAR (255), age INT, birthday DATETIME);\n")),(0,l.kt)("p",null,"This creates a table called ",(0,l.kt)("inlineCode",{parentName:"p"},"contacts")," with columns for ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"birthday"),". Each column name has a datatype appended to it."),(0,l.kt)("h4",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"Just like object properties and variables in C#, SQL columns also have specified ",(0,l.kt)("strong",{parentName:"p"},"data types"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the command above, we give ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," the data type ",(0,l.kt)("strong",{parentName:"p"},"varchar"),". This is a varying number of characters and is essentially the SQL equivalent of a ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"age")," is an ",(0,l.kt)("strong",{parentName:"p"},"int"),". Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"s in C#, this is a number value.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"birthday")," is a ",(0,l.kt)("strong",{parentName:"p"},"datetime"),", which includes a date and time."))),(0,l.kt)("p",null,"Some data types have restrictions and requirements. For instance, varchar requires a maximum length, which we've set to 255 characters. 255 is a common default length for ",(0,l.kt)("inlineCode",{parentName:"p"},"varchar")," data types because it is the maximum amount of data that can be stored with a single byte per character."),(0,l.kt)("p",null,"SQL has many data types. Here are the most common ones:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"float")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"varchar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," (for long blocks of text)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"datetime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"For a full list, see the ",(0,l.kt)("a",{parentName:"p",href:"http://dev.MySQL.com/doc/refman/5.6/en/data-types.html"},"MySQL ",(0,l.kt)("em",{parentName:"a"},"Data Type")," documentation"),"."),(0,l.kt)("h3",{id:"listing-columns"},"Listing Columns"),(0,l.kt)("p",null,"If we are connected to a database, we can list the columns in a specific table with the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> DESCRIBE contacts;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DESCRIBE")," takes the name of the table as an argument."),(0,l.kt)("h3",{id:"listing-tables"},"Listing Tables"),(0,l.kt)("p",null,"To see a list of all tables in the database we are connected to, we can use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SHOW TABLES;\n")),(0,l.kt)("h3",{id:"deleting-tables"},"Deleting Tables"),(0,l.kt)("p",null,"If we need to delete a table, we do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> DROP TABLE table_name;\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"table","_","name")," is the name of the table we'd like to delete. Once again, ",(0,l.kt)("strong",{parentName:"p"},"never delete a database you didn't personally create.")),(0,l.kt)("h3",{id:"adding-columns"},"Adding Columns"),(0,l.kt)("p",null,"We can add a new column to a database table we've already created with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> ALTER TABLE contacts ADD favorite_color TEXT;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contacts")," refers to the table we're updating."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"favorite_color")," is the name of the new column we're adding."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TEXT")," is the data type of that new column.")),(0,l.kt)("h3",{id:"dropping-columns"},"Dropping Columns"),(0,l.kt)("p",null,"We can also remove a column from a table with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> ALTER TABLE contacts DROP favorite_color;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contacts")," is the table we're updating."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"favorite_color")," is the column we're removing from it.")),(0,l.kt)("h3",{id:"adding-primary-keys"},"Adding Primary Keys"),(0,l.kt)("p",null,"It's standard practice to include a unique, automatically-incrementing ID number for each record in our database."),(0,l.kt)("p",null,"To do this, we specify that a column is a primary key when we're adding the column to the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> ALTER TABLE contacts ADD id serial PRIMARY KEY;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contacts")," is the table we're updating."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," is the name of the new column we're adding."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"serial")," is a data type referring to an auto-incrementing integer;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," tells MySQL that this column will contain the special primary key identifiers used to retrieve objects.")),(0,l.kt)("h3",{id:"inserting-data"},"Inserting Data"),(0,l.kt)("p",null,"Now that we have tables with columns, let's add some data. We can manually add new ",(0,l.kt)("strong",{parentName:"p"},"rows")," into our database with commands like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> INSERT INTO contacts (name, age, birthday) VALUES ('Wes', 43, '1969-05-01');\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contacts")," is the table we're adding an entry to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(name, age, birthday)")," tells MySQL which columns on the table we are providing information for in this command."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VALUES")," tells MySQL that the next set of data is the values that match the columns we just listed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"('Wes', 43, '1969-05-01')")," is the data we're adding into this new entry.")),(0,l.kt)("p",null,"Note that we need to put quotes around ",(0,l.kt)("inlineCode",{parentName:"p"},"varchar"),"s and ",(0,l.kt)("inlineCode",{parentName:"p"},"datetime"),"s but not around ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"s. ",(0,l.kt)("strong",{parentName:"p"},"We need to use single quotes \u2014 double quotes won't work.")),(0,l.kt)("h3",{id:"retrieving-ids"},"Retrieving IDs"),(0,l.kt)("p",null,"We can retrieve the primary key ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," from a row we just inserted by doing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> INSERT INTO contacts (name, age, birthday) VALUES ('Ada', 26, '1988-12-09');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT LAST_INSERT_ID();\n")),(0,l.kt)("p",null,"The value of doing this will become apparent in future lessons as we begin building out applications."),(0,l.kt)("h3",{id:"querying"},"Querying"),(0,l.kt)("p",null,"We can read data from a database by making a  ",(0,l.kt)("strong",{parentName:"p"},"query"),"."),(0,l.kt)("h4",{id:"select"},"SELECT"),(0,l.kt)("p",null,"Here's an example query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT name FROM contacts;\n")),(0,l.kt)("p",null,"This gives us a list of all the names in our ",(0,l.kt)("inlineCode",{parentName:"p"},"contacts")," table."),(0,l.kt)("p",null,"We can select multiple columns from a table, too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT name, birthday FROM contacts;\n")),(0,l.kt)("p",null,"We can select all the columns from a table like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT * FROM contacts;\n")),(0,l.kt)("p",null,"We can limit our ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"s to only return rows that match certain criteria:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT * FROM contacts WHERE age >= 18;\n")),(0,l.kt)("p",null,"This gives us all of the adults in ",(0,l.kt)("inlineCode",{parentName:"p"},"contacts"),"."),(0,l.kt)("h4",{id:"where"},"WHERE"),(0,l.kt)("p",null,"A WHERE clauses accepts the following operators: ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"IN"),". We can also prepend any operator with ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT"),". Here are a few examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> SELECT * FROM contacts WHERE age BETWEEN 13 AND 17;  \n> SELECT * FROM contacts WHERE name BETWEEN 'Judith' AND 'Wilma';\n> SELECT * FROM contacts WHERE name LIKE 'We%';\n> SELECT * FROM contacts WHERE birthday IN ('1969-01-01', '1999-01-01');\n")),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," operator, the ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," is a wildcard, meaning it can stand for any number of any characters."),(0,l.kt)("h3",{id:"updating-records"},"Updating Records"),(0,l.kt)("p",null,"What if we need to change data in our database? The simplest and most common way is to select a record by its primary key and update its data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> UPDATE contacts SET name = 'Wes Anderson' WHERE id = 1;\n")),(0,l.kt)("h3",{id:"deleting-records"},"Deleting Records"),(0,l.kt)("p",null,"Now let's delete a record:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> DELETE FROM contacts WHERE id = 1;\n")),(0,l.kt)("h3",{id:"dropping-databases"},"Dropping Databases"),(0,l.kt)("p",null,"Here's how we can drop a database once we are finished with it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"> DROP DATABASE test_database;\n")),(0,l.kt)("h3",{id:"quitting-mysql"},"Quitting MySQL"),(0,l.kt)("p",null,"Finally, to quit MySQL just run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> \\q\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> exit\n")),(0,l.kt)("h3",{id:"more-commands"},"More Commands"),(0,l.kt)("p",null,"We can always see a list of MySQL commands by typing the following into the MySQL shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," \\?\n")))}c.isMDXComponent=!0}}]);