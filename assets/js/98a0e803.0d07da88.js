"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98379],{30876:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var r=o(2784);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(o),k=a,d=p["".concat(c,".").concat(k)]||p[k]||m[k]||n;return o?r.createElement(d,i(i({ref:t},s),{},{components:o})):r.createElement(d,i({ref:t},s))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},64492:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=o(7896),a=(o(2784),o(30876));const n={title:"\u270f\ufe0f Modular Cover Letter and Resume",id:"modular-cover-letter-and-resume",slug:"modular-cover-letter-and-resume",hide_table_of_contents:!0,sidebar_position:42,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/creating_modular_resume_cl.md"},i="Creating a Modular Resume and Cover Letter",l={unversionedId:"c-and-net/basic-web-applications/modular-cover-letter-and-resume",id:"c-and-net/basic-web-applications/modular-cover-letter-and-resume",title:"\u270f\ufe0f Modular Cover Letter and Resume",description:"Introduction",source:"@site/docs/c-and-net/7_basic-web-applications/creating-modular-resume-cl.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/modular-cover-letter-and-resume",permalink:"/c-and-net/basic-web-applications/modular-cover-letter-and-resume",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"\u270f\ufe0f Modular Cover Letter and Resume",id:"modular-cover-letter-and-resume",slug:"modular-cover-letter-and-resume",hide_table_of_contents:!0,sidebar_position:42,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/creating_modular_resume_cl.md"},sidebar:"c-and-net",previous:{title:"\u270f\ufe0f Journal #14 Discussion",permalink:"/c-and-net/basic-web-applications/journal-14-discussion"},next:{title:"\ud83d\udcd3 Prior Course Section Survey",permalink:"/c-and-net/basic-web-applications/prior-course-section-survey"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Resumes",id:"resumes",level:2},{value:"Cover Letters",id:"cover-letters",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-modular-resume-and-cover-letter"},"Creating a Modular Resume and Cover Letter"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Last week, we put together a resume and cover letter with a specific job in mind. We covered the importance of tailoring each application to the specific job, and the ins and outs of getting past an Applicant Tracking System. Tailoring each application is crucial to your success, but it can be time consuming. You may be wondering how to create high quality, tailored applications without spending all day rewriting your resume and cover letter from scratch. "),(0,a.kt)("p",null,"In order to find a balance between customization and efficiency, we suggest thinking of your resumes and cover letters as modular. Modular in this context means something built out of smaller, independent parts. We\u2019ll start by covering how to do this with your resume."),(0,a.kt)("h2",{id:"resumes"},"Resumes"),(0,a.kt)("p",null,"We are going to build a repository of resume \u2018snippets\u2019 that you can use to create a targeted resume, based on bullet points and descriptions that you\u2019ve already written. This is something you will build over time, so don\u2019t worry that you don\u2019t have a lot to add to it just yet. Start with the resume you built last week, and open a new doc where you can save your snippets. "),(0,a.kt)("p",null,"The exact way you organize your repository will depend on your preferences and what makes the most sense for you. Here\u2019s an example for how you might break it down via tech stack: "),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"react"},(0,a.kt)("strong",{parentName:"h4"},"React")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Education")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"School 1: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with React at School 1 "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience with React at School 1 ")),(0,a.kt)("p",{parentName:"blockquote"},"Epicodus: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with React at Epicodus\nExperience\nWeb Developer Internship: "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with React at Web Developer Internship "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience with React at Web Developer Internship "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Projects:")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Project 1: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience using React to build Project 1 "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience using React to build Project 1 ")))),(0,a.kt)("h4",{parentName:"blockquote",id:"cnet"},(0,a.kt)("strong",{parentName:"h4"},"C#/.NET")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Education")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"School 1: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with C#/.NET at School 1 "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience with  C#/.NET at School 1 ")),(0,a.kt)("p",{parentName:"blockquote"},"Epicodus: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with C#/.NET at Epicodus "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Experience")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Web Developer Internship: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience with  C#/.NET at Web Developer Internship "),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience with  C#/.NET at Web Developer Internship "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Projects:")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Project 3: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Bullet point 1 describing experience using  C#/.NETto build Project 3"),(0,a.kt)("li",{parentName:"ul"},"Bullet point 2 describing experience using  C#/.NET to build Project 3"))))),(0,a.kt)("p",null,"As you can imagine, there are many different ways you could organize this document. The overall idea is that as you write your first several customized resumes, you will save the relevant bullet points in an organized repository document. Once you\u2019ve written several, you will have built up a decent library of pre-written bullet points that you can use to quickly customize your resumes in the future. You\u2019ll just search through your stored bullet points to find project, experience, and education descriptions that focus on the most relevant elements for the job. It will take some time to gather a significant amount of pre-written bullet points, but by the time you finish the program, you should be able to save a lot of time when tailoring your resumes. "),(0,a.kt)("h2",{id:"cover-letters"},"Cover Letters"),(0,a.kt)("p",null,"We\u2019ll now do the same thing with your cover letters. Instead of bullet points, this will likely be organized in phrases, a couple of sentences, or whole paragraphs. It may take a little extra work to take these pre-written cover letter sections and make them flow seamlessly in a new cover letter. Overall though, this should save you time and creative energy when you\u2019re writing many cover letters a week during your job search."),(0,a.kt)("p",null,"Again, the exact organization is up to you.  Here\u2019s an example of how you might format your cover letter repository: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Javascript")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Education")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"School 1 "),(0,a.kt)("p",{parentName:"blockquote"},"Epicodus ")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Experience")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Web Development Internship "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u201cI worked on a dashboard for project managers at Digital Designs to see an overview of their projects' statuses and blockers. I collaborated closely with the project managers themselves to make sure the dashboard met their needs and solved their business problems. This project improved outcomes for the team as a whole by increasing the efficiency of project managers and improving communication with their teams.\u201d "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Projects")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Project 2 "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Collaboration/ Teamwork")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Education")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"School 1"),(0,a.kt)("p",{parentName:"blockquote"},"Epicodus  ")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Experience")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Web Development Internship\nNon-technical Job 1\nNon-technical Job 2 "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u201c Prior to Healthcare.gov, I was a barista at Lil' Joe's Coffeehouse, where I prided myself on contributing to the fun energy of the company, while staying focused on getting the job done and taking on additional responsibilities to fill in the gaps.\u201d"))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Projects")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Project 1\nProject 2\nProject 3 "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Metrics")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Education")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"School 1 "),(0,a.kt)("p",{parentName:"blockquote"},"Epicodus ")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Experience")," "),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Web Development Internship "),(0,a.kt)("p",{parentName:"blockquote"},"Non-technical Job 1 "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u201cMy deliverables showed that my detail-oriented approach paid off, as I was consistently in the top 10% of representatives for customer satisfaction.\u201d\nNon-technical Job 2 "))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Projects"),"\t"),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Project 1\nProject 2\nProject 3 ")))),(0,a.kt)("p",null,"As you can see from this example, we have broken it down into broad skill-based categories, both technical and non-technical. From there we break it down further into Education, Experience, and Projects, before getting into specific schools, roles, and project titles. We\u2019ve started to fill in this outline with quotes from the example cover letter from last week\u2019s lesson, to give you an idea of what kinds of snippets to include. Just like the resume snippet repository, you will build this out over time as you apply to more jobs. "),(0,a.kt)("p",null,"While this library of snippets can really help you efficiently write a tailored cover letter, we recommend writing the introduction and the conclusion fresh each time rather than using pre-written snippets. The introduction is a great place to show that you\u2019ve done your research on the company and convey your specific reasons for applying. The advising team can attest first-hand that generic introduction and conclusion paragraphs are easy to spot.The conclusion will vary based on what you discussed in the body of the cover letter and reiterate the most important points. Therefore it\u2019s typically best to write these sections from scratch each time."))}m.isMDXComponent=!0}}]);