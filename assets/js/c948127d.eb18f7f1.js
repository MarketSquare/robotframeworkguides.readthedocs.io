"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:100,sidebar_label:"How to contribute",title:"How to contribute"},o=void 0,l={unversionedId:"about/contribute",id:"about/contribute",title:"How to contribute",description:"This documentation project is powered by Docusaurus and maintained on GitHub",source:"@site/docs/about/contribute.md",sourceDirName:"about",slug:"/about/contribute",permalink:"/docs/about/contribute",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/about/contribute.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,sidebar_label:"How to contribute",title:"How to contribute"},sidebar:"tutorialSidebar",previous:{title:"About RF Guides",permalink:"/docs/about/about_us"},next:{title:"I'm looking for testing",permalink:"/docs/getting_started/testing"}},s={},u=[{value:"Branches",id:"branches",level:2},{value:"Folders",id:"folders",level:2},{value:"Docs",id:"docs",level:3},{value:"Static Files (e.g. images)",id:"static-files-eg-images",level:2},{value:"Run the development server",id:"run-the-development-server",level:2},{value:"Create Build and Push",id:"create-build-and-push",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation project is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," and maintained on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides"},"GitHub")),(0,i.kt)("p",null,"The basic steps to contribute to the project are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fork the project on GitHub"),(0,i.kt)("li",{parentName:"ul"},"Clone the repository locally"),(0,i.kt)("li",{parentName:"ul"},"Install the project dependencies via ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")),(0,i.kt)("li",{parentName:"ul"},"Update existing documentation files with the new content or add new files"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation#running-the-development-server"},"Development Server")," to see changes in real time on ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Build static html files with ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,i.kt)("li",{parentName:"ul"},"Test the build locally with ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run serve")),(0,i.kt)("li",{parentName:"ul"},"Commit the changes to the repository"),(0,i.kt)("li",{parentName:"ul"},"Push the changes to GitHub (only the changed .md files and other static files - ",(0,i.kt)("strong",{parentName:"li"},"Do Not push the built .html files"),")"),(0,i.kt)("li",{parentName:"ul"},"Build and Deployment will be handled by GitHub Actions")),(0,i.kt)("h1",{id:"github-repository"},"GitHub Repository"),(0,i.kt)("h2",{id:"branches"},"Branches"),(0,i.kt)("p",null,"There are two branches in the project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main")," is the default branch and is used to maintain the documentation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages")," is only used for the deployment of the ",(0,i.kt)("inlineCode",{parentName:"li"},".html")," documentation to GitHub Pages")),(0,i.kt)("h2",{id:"folders"},"Folders"),(0,i.kt)("h3",{id:"docs"},"Docs"),(0,i.kt)("p",null,"Docs are written in Markdown and are stored ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides/tree/main/website/docs"},"here")),(0,i.kt)("p",null,"The following attributes can be used to customize the page, e.g. the position on the sidebar, the title and the sidebar label:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\nsidebar_position: 2\nsidebar_label: How to contribute\ntitle: How to contribute\n---\n")),(0,i.kt)("p",null,"Folders will added to the sidebar automatically.\nYou can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"_category_.json")," file to customize the sidebar label and the position of the folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "label": "Getting Started",\n  "position": 3\n}\n')),(0,i.kt)("h2",{id:"static-files-eg-images"},"Static Files (e.g. images)"),(0,i.kt)("p",null,"Static files (like images) are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"website/static")," folder ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides/tree/main/website/static"},"here"),(0,i.kt)("br",{parentName:"p"}),"\n","They will be automatically included in the built and will be accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," path (e.g. images are accessible via ",(0,i.kt)("inlineCode",{parentName:"p"},"/img/robotframeworkguides_logo.png"),")"),(0,i.kt)("h1",{id:"updating-documentation"},"Updating Documentation"),(0,i.kt)("h2",{id:"run-the-development-server"},"Run the development server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to directory containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file"),(0,i.kt)("li",{parentName:"ul"},"Download dependencies via ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")),(0,i.kt)("li",{parentName:"ul"},"Run the development server via ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,i.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")),(0,i.kt)("li",{parentName:"ul"},"Make changes to the documentation files and check the changes in real time")),(0,i.kt)("p",null,"Changes are visible in real time in the browser.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Development Server",src:n(9710).Z,width:"1418",height:"975"})),(0,i.kt)("h2",{id:"create-build-and-push"},"Create Build and Push"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the build via ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,i.kt)("li",{parentName:"ul"},"Test the build locally with ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run serve")),(0,i.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," to see the build"),(0,i.kt)("li",{parentName:"ul"},"Commit the changes to the repository"),(0,i.kt)("li",{parentName:"ul"},"Push the changes to GitHub (only the changed .md files and other static files - ",(0,i.kt)("strong",{parentName:"li"},"Do Not push the built .html files"),")")))}c.isMDXComponent=!0},9710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dev_server-991c744caad6f7ab5fa5e5ce3199a97c.png"}}]);