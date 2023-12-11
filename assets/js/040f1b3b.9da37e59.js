"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14759],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),l=(n(2784),n(30876));const r={title:"\ud83d\udcd3 More SQL Queries",id:"more-sql-queries",slug:"more-sql-queries",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0o_more_sql_queries.md"},i=void 0,o={unversionedId:"c-and-net/database-basics/more-sql-queries",id:"c-and-net/database-basics/more-sql-queries",title:"\ud83d\udcd3 More SQL Queries",description:"In this lesson, we'll briefly explore some of the most common SQL clauses and operators.",source:"@site/docs/c-and-net/8_database-basics/0o-more-sql-queries.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/more-sql-queries",permalink:"/c-and-net/database-basics/more-sql-queries",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\ud83d\udcd3 More SQL Queries",id:"more-sql-queries",slug:"more-sql-queries",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0o_more_sql_queries.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Finding Objects in the Database",permalink:"/c-and-net/database-basics/finding-objects-in-the-database"},next:{title:"\ud83d\udcd3 Journal #15",permalink:"/c-and-net/database-basics/journal-15"}},s={},p=[{value:"SQL Command Format",id:"sql-command-format",level:2},{value:"SELECT",id:"select",level:2},{value:"FROM",id:"from",level:2},{value:"WHERE",id:"where",level:2},{value:"<code>=</code> Equals",id:"-equals",level:3},{value:"<code>&lt;&gt;</code> Not Equal",id:"-not-equal",level:3},{value:"<code>&gt;</code> Greater Than",id:"-greater-than",level:3},{value:"<code>&lt;</code> Less Than",id:"-less-than",level:3},{value:"<code>&gt;=</code> Greater Than or Equal To",id:"-greater-than-or-equal-to",level:3},{value:"<code>&lt;=</code> Less Than or Equal To",id:"-less-than-or-equal-to",level:3},{value:"BETWEEN",id:"between",level:2},{value:"LIKE",id:"like",level:2},{value:"<code>%</code> Wildcard",id:"-wildcard",level:3},{value:"<code>_</code> Wildcard",id:"_-wildcard",level:3},{value:"<code>[charlist]</code> Wildcard",id:"charlist-wildcard",level:3},{value:"IN",id:"in",level:2},{value:"AND",id:"and",level:2},{value:"ORDER BY",id:"order-by",level:2},{value:"ASC / DESC",id:"asc--desc",level:3},{value:"SELECT DISTINCT",id:"select-distinct",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this lesson, we'll briefly explore some of the most common SQL clauses and operators."),(0,l.kt)("h2",{id:"sql-command-format"},"SQL Command Format"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The basic format for a SQL command looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <column> FROM <tables> WHERE <condition> AND <condition> ORDER BY <column> <asc or desc>;\n")),(0,l.kt)("p",null,"Not all of these clauses are required but this is a template for what's possible."),(0,l.kt)("h2",{id:"select"},"SELECT"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," chooses the fields we want to retrieve from the database. We'll often use an ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," to denote we want to display all columns for entries our query returns. However, we could say something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT description FROM items;\n")),(0,l.kt)("p",null,"This will return only data in the ",(0,l.kt)("inlineCode",{parentName:"p"},"description")," column of our ",(0,l.kt)("inlineCode",{parentName:"p"},"items")," table."),(0,l.kt)("h2",{id:"from"},"FROM"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," specifies the table we are querying. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM items;\n")),(0,l.kt)("p",null,"Here we are specifying that we want to return all columns from the ",(0,l.kt)("inlineCode",{parentName:"p"},"items")," table. We could do the following to retrieve data from a ",(0,l.kt)("inlineCode",{parentName:"p"},"categories")," table instead:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM categories;\n")),(0,l.kt)("h2",{id:"where"},"WHERE"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause allows us to filter our query further. For example, we could say the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM items WHERE categoryId=5;\n")),(0,l.kt)("p",null,"This will return all columns of data for all ",(0,l.kt)("inlineCode",{parentName:"p"},"Item")," objects with a ",(0,l.kt)("inlineCode",{parentName:"p"},"categoryId")," column value of ",(0,l.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses may contain the following operators:"),(0,l.kt)("h3",{id:"-equals"},(0,l.kt)("inlineCode",{parentName:"h3"},"=")," Equals"),(0,l.kt)("p",null,"This is used to create queries seeking entries where a specific column matches the ",(0,l.kt)("em",{parentName:"p"},"exact")," information from the query. For example, the following query will return all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column ",(0,l.kt)("strong",{parentName:"p"},"equals")," ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age = 1;\n")),(0,l.kt)("h3",{id:"-not-equal"},(0,l.kt)("inlineCode",{parentName:"h3"},"<>")," Not Equal"),(0,l.kt)("p",null,"The following query will return all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table where the ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column does not equal ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age <> 1;\n")),(0,l.kt)("p",null,"In some versions of SQL, the same query would be written like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age != 1;\n")),(0,l.kt)("h3",{id:"-greater-than"},(0,l.kt)("inlineCode",{parentName:"h3"},">")," Greater Than"),(0,l.kt)("p",null,"This works the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},">")," operator in C#. For example, the following query will return all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column contains a value greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age > 2;\n")),(0,l.kt)("h3",{id:"-less-than"},(0,l.kt)("inlineCode",{parentName:"h3"},"<")," Less Than"),(0,l.kt)("p",null,"This operator is the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},"<")," operator in C#. The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column contains a value less than ",(0,l.kt)("inlineCode",{parentName:"p"},"7"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age < 7;\n")),(0,l.kt)("h3",{id:"-greater-than-or-equal-to"},(0,l.kt)("inlineCode",{parentName:"h3"},">=")," Greater Than or Equal To"),(0,l.kt)("p",null,"This operator is the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},">=")," operator in C#. The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column contains a value greater than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"9"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age >= 9;\n")),(0,l.kt)("h3",{id:"-less-than-or-equal-to"},(0,l.kt)("inlineCode",{parentName:"h3"},"<=")," Less Than or Equal To"),(0,l.kt)("p",null,"This is the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},"<=")," operator in C#. The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column contains a value less than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"9"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age <= 9;\n")),(0,l.kt)("h2",{id:"between"},"BETWEEN"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN"),"  denotes a specific range with upper and lower limits. The word ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," is included between the upper and lower limits of the range. The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column contains a value between ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age BETWEEN 1 AND 3;\n")),(0,l.kt)("h2",{id:"like"},"LIKE"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," clause looks for a specified pattern. There are a few options with the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," clause. The basic construction looks like this:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"SELECT ",(0,l.kt)("strong",{parentName:"em"},"column","_","name(s)")," FROM ",(0,l.kt)("strong",{parentName:"em"},"table","_","name")," WHERE ",(0,l.kt)("strong",{parentName:"em"},"column","_","name")," LIKE ",(0,l.kt)("strong",{parentName:"em"},"pattern"),";")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"pattern")," part can differ. There are several wildcard symbols we can use to describe different patterns for SQL to search for."),(0,l.kt)("h3",{id:"-wildcard"},(0,l.kt)("inlineCode",{parentName:"h3"},"%")," Wildcard"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," symbol is used as a wildcard before and/or after the pattern."),(0,l.kt)("p",null,"The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column contains a value beginning with ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name LIKE 's%';\n")),(0,l.kt)("p",null,"The following returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column contains a value ending with ",(0,l.kt)("inlineCode",{parentName:"p"},"burt")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name LIKE '%burt';\n")),(0,l.kt)("h3",{id:"_-wildcard"},(0,l.kt)("inlineCode",{parentName:"h3"},"_")," Wildcard"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," symbol is a substitute for a ",(0,l.kt)("em",{parentName:"p"},"single")," character."),(0,l.kt)("p",null,"The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column contains a value beginning with any single letter, but followed by ",(0,l.kt)("inlineCode",{parentName:"p"},'"amson"'),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name LIKE '_amson';\n")),(0,l.kt)("h3",{id:"charlist-wildcard"},(0,l.kt)("inlineCode",{parentName:"h3"},"[charlist]")," Wildcard"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"[charlist]")," wildcard allows us to set a list or range of characters to match. It can be combined with another wildcard character, too. When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"[charlist]")," wildcard, we need to use the regex operator, ",(0,l.kt)("inlineCode",{parentName:"p"},"RLIKE"),". It operates in much the same way, it just has a little different syntax. Look into the documentation to see proper implementations for each!"),(0,l.kt)("p",null,"The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column contains a value beginning with either ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name RLIKE '^[abs]';\n")),(0,l.kt)("p",null,"Additionally, the following returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column contains a value beginning with either ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"c"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name RLIKE '^[a-c]';\n")),(0,l.kt)("h2",{id:"in"},"IN"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," keyword is used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause to specify multiple possible values for a column."),(0,l.kt)("p",null,"The following query returns all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," column contains either ",(0,l.kt)("inlineCode",{parentName:"p"},"grey")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"orange"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE color IN ('orange', 'grey');\n")),(0,l.kt)("h2",{id:"and"},"AND"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," clause allows us to add ",(0,l.kt)("em",{parentName:"p"},"another")," criteria to ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,l.kt)("p",null,"The following SQL statement queries the database for all columns (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") corresponding with all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," value begins with ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," AND whose value in the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," column contains ",(0,l.kt)("em",{parentName:"p"},"either")," ",(0,l.kt)("inlineCode",{parentName:"p"},"grey"),", ",(0,l.kt)("em",{parentName:"p"},"or")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orange"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name LIKE 's%' AND color IN ('orange', 'grey');\n")),(0,l.kt)("h2",{id:"order-by"},"ORDER BY"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"SQL's ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," can be used to sort data returned in ascending or descending order based on a column. It is added to the end of a query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE name LIKE 's%' AND color IN ('orange', 'grey') ORDER BY id;\n")),(0,l.kt)("p",null,"Note that the query looks exactly the same as our previous query other than the fact that it includes an ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause at the end."),(0,l.kt)("p",null,"Here's another example. We can select all columns for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," value is greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),".  Then we can order the kittens alphabetically by name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age > 2 ORDER BY name;\n")),(0,l.kt)("h3",{id:"asc--desc"},"ASC / DESC"),(0,l.kt)("p",null,"We can also specify whether we want the order to be ascending or descending."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM kittens WHERE age > 2 ORDER BY name DESC;\n")),(0,l.kt)("p",null,"The query above select all columns for all entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"kittens")," table whose ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," value is greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),",  then orders the kittens in ",(0,l.kt)("em",{parentName:"p"},"reverse")," alphabetical order by their name values."),(0,l.kt)("h2",{id:"select-distinct"},"SELECT DISTINCT"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"We can use SQL to efficiently reduce our dataset down to only unique values. This is especially useful if the table might contain duplicates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT name FROM kittens;\n\n")),(0,l.kt)("p",null,"The query above can also be combined with many other queries on this page such as alphabetical sorting, WHERE, ORDER BY, and so on."))}m.isMDXComponent=!0}}]);