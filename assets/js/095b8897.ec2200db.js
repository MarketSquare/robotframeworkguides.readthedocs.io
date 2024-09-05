"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1363],{3453:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(4848),t=o(8453);const i={sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},s=void 0,a={id:"using_rf_in_ci_systems/docker",title:"Docker Images for Robot Framework",description:"Docker",source:"@site/docs/using_rf_in_ci_systems/docker.md",sourceDirName:"using_rf_in_ci_systems",slug:"/using_rf_in_ci_systems/docker",permalink:"/docs/using_rf_in_ci_systems/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/using_rf_in_ci_systems/docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},sidebar:"tutorialSidebar",previous:{title:"Style Guide",permalink:"/docs/style_guide"},next:{title:"Play With Docker",permalink:"/docs/using_rf_in_ci_systems/playground"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Installation",id:"installation",level:3},{value:"Docker Desktop",id:"docker-desktop",level:4},{value:"Alternatives to Docker Desktop",id:"alternatives-to-docker-desktop",level:4},{value:"Linux",id:"linux",level:5},{value:"Windows",id:"windows",level:5},{value:"Creating a Robot Framework Dockerimage",id:"creating-a-robot-framework-dockerimage",level:2},{value:"Examples",id:"examples",level:3},{value:"Simple Python Dockerimage with Robot Framework",id:"simple-python-dockerimage-with-robot-framework",level:4},{value:"Dockerimage with Robot Framework and Browser Library",id:"dockerimage-with-robot-framework-and-browser-library",level:4},{value:"Popular Docker Images for Robot Framework",id:"popular-docker-images-for-robot-framework",level:2},{value:"marketsquare/robotframework-browser",id:"marketsquarerobotframework-browser",level:3},{value:"ppodgorsek/robot-framework",id:"ppodgorsekrobot-framework",level:3}];function d(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"docker",children:"Docker"}),"\n",(0,n.jsxs)(r.p,{children:["Check out the ",(0,n.jsx)(r.a,{href:"https://docs.docker.com/get-started/overview/",children:"official Docker Documentation"})," for more information about Docker."]}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(r.p,{children:["If you want to build Dockerimages and run containers on your local machine, you need to install Docker. You can find the installation instructions for your operating system on the ",(0,n.jsx)(r.a,{href:"https://docs.docker.com/install/",children:"Docker website"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"docker-desktop",children:"Docker Desktop"}),"\n",(0,n.jsx)(r.p,{children:"Docker Desktop is an easy-to-install application for your Mac or Windows environment that enables you to start coding and containerizing in minutes. Docker Desktop includes everything you need to build, run, and share containerized applications directly from your machine."}),"\n",(0,n.jsxs)(r.p,{children:["However, while Docker itself is open source, Docker Desktop is not. Docker Desktop is a ",(0,n.jsx)(r.strong,{children:"commercial product"})," \ud83d\udcb0 developed by Docker, Inc. that includes additional features and functionality beyond the open source Docker Engine."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["Commercial use of Docker Desktop in larger enterprises (more than 250 employees OR more than $10 million USD in annual revenue) and in government entities requires a ",(0,n.jsx)(r.strong,{children:"paid subscription"}),"."]})}),"\n",(0,n.jsx)(r.h4,{id:"alternatives-to-docker-desktop",children:"Alternatives to Docker Desktop"}),"\n",(0,n.jsx)(r.h5,{id:"linux",children:"Linux"}),"\n",(0,n.jsxs)(r.p,{children:["You can install Docker on your Linux machine without using Docker Desktop.\nPlease find more information on the ",(0,n.jsx)(r.a,{href:"https://docs.docker.com/engine/install/",children:"here"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Make sure you follow the instructions for the ",(0,n.jsx)(r.code,{children:"Server"})," installation.",(0,n.jsx)(r.br,{}),"\n","For example the installation instructions for ",(0,n.jsx)(r.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Ubuntu"})]}),"\n",(0,n.jsx)(r.h5,{id:"windows",children:"Windows"}),"\n",(0,n.jsxs)(r.p,{children:["You can install Docker on your Windows machine also ",(0,n.jsx)(r.strong,{children:"without using Docker Desktop"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"For that, you need to"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Set up a virtual machine using the WSL 2 (Windows Subsystem for Linux)"}),"\n",(0,n.jsx)(r.li,{children:"Install Docker Engine in the WSL 2 VM (following the instructions for Linux)"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["You can find more information in the guide ",(0,n.jsx)(r.a,{href:"https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/",children:"How To Install Docker Without Docker Desktop On Windows"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/",children:"guide"})," will explain how to"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Enable the WSL 2 feature on Windows"}),"\n",(0,n.jsx)(r.li,{children:"Install a Linux distribution from the Microsoft Store"}),"\n",(0,n.jsx)(r.li,{children:"Install Docker Engine in the WSL 2 VM"}),"\n",(0,n.jsx)(r.li,{children:"Configure Docker to start on boot"}),"\n",(0,n.jsx)(r.li,{children:"Install Docker Compose"}),"\n",(0,n.jsx)(r.li,{children:"Integrate Docker commands into your PowerShell"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"creating-a-robot-framework-dockerimage",children:"Creating a Robot Framework Dockerimage"}),"\n",(0,n.jsxs)(r.p,{children:["You can choose from a lot of different base images to build your own Docker image.",(0,n.jsx)(r.br,{}),"\n","One possibility is to use one of the the official ",(0,n.jsx)(r.a,{href:"https://hub.docker.com/_/python",children:"python"})," images."]}),"\n",(0,n.jsxs)(r.p,{children:["As they already contain ",(0,n.jsx)(r.code,{children:"python"})," and ",(0,n.jsx)(r.code,{children:"pip"}),", you can install ",(0,n.jsx)(r.code,{children:"robotframework"})," and other libraries using pip easily.",(0,n.jsx)(r.br,{}),"\n","There are different tags for different python versions and operating systems."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:"FROM python:3\nRUN pip install robotframework\n"})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(r.p,{children:["To ",(0,n.jsx)(r.strong,{children:"build"})," the examples below, you can use the following command:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"docker build -t my-robotframework-dockerimage .\n"})}),"\n",(0,n.jsxs)(r.p,{children:["When you ",(0,n.jsx)(r.strong,{children:"run"})," the container, it makes sense to mount the folder containing your tests into the container.",(0,n.jsx)(r.br,{}),"\n","You can do that using the ",(0,n.jsx)(r.code,{children:"-v"})," option.\nLet's assume the folder is located at ",(0,n.jsx)(r.code,{children:"/home/user/my-project/"})," on your local machine."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Folder structure"',children:"my-project/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 tests/\n\u2502   \u2514\u2500\u2500 testsuite.robot\n\u2514\u2500\u2500 results/\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The following command will run the container and mount the folders ",(0,n.jsx)(r.code,{children:"my-project/"})," into the container.",(0,n.jsx)(r.br,{}),"\n","The tests in the folder ",(0,n.jsx)(r.code,{children:"my-project/tests"})," will be executed and the results will be written into the folder ",(0,n.jsx)(r.code,{children:"my-project/results"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"That way, you can easily run your tests in a container and have the results on your local machine."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'docker run -it --rm -v /home/user/my-project:/my-project my-robotframework-dockerimage bash -c "robot --outputdir /project/results  /my-project/tests"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"simple-python-dockerimage-with-robot-framework",children:"Simple Python Dockerimage with Robot Framework"}),"\n",(0,n.jsx)(r.p,{children:"A very simple python image, which only adds robotframework"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:"FROM python:3\nRUN pip install robotframework\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You can also add your python dependencies into a file ",(0,n.jsx)(r.code,{children:"requirements.txt"})," and then install them using ",(0,n.jsx)(r.code,{children:"pip install -r requirements.txt"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",metastring:'title="Folder structure"',children:".\n\u251c\u2500\u2500 Dockerfile\n\u2514\u2500\u2500 requirements.txt\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="requirements.txt"',children:"robotframework\nrobotframework-requests\nrobotframework-datadriver\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:"FROM python:3\n\nCOPY requirements.txt ./\nRUN pip install --no-cache-dir -r requirements.txt\n"})}),"\n",(0,n.jsx)(r.h4,{id:"dockerimage-with-robot-framework-and-browser-library",children:"Dockerimage with Robot Framework and Browser Library"}),"\n",(0,n.jsxs)(r.p,{children:["An image containing robotframework and robotframework-browser.",(0,n.jsx)(r.br,{}),"\n","It is based on ",(0,n.jsx)(r.code,{children:"playwright"})," baseimage, as it contains necessary dependencies like nodejs and npm."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:'FROM mcr.microsoft.com/playwright:focal\nUSER root\nRUN apt-get update\nRUN apt-get install -y python3-pip\nUSER pwuser\nRUN pip3 install --user robotframework\nRUN pip3 install --user robotframework-browser\nRUN ~/.local/bin/rfbrowser init\nENV NODE_PATH=/usr/lib/node_modules\nENV PATH="/home/pwuser/.local/bin:${PATH}"\n'})}),"\n",(0,n.jsx)(r.h2,{id:"popular-docker-images-for-robot-framework",children:"Popular Docker Images for Robot Framework"}),"\n",(0,n.jsx)(r.h3,{id:"marketsquarerobotframework-browser",children:"marketsquare/robotframework-browser"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/MarketSquare/robotframework-browser/tree/main/docker",children:"https://github.com/MarketSquare/robotframework-browser/tree/main/docker"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"docker pull marketsquare/robotframework-browser\n"})}),"\n",(0,n.jsx)(r.p,{children:"The image comes with latest robotframework-browser and robotframework, and with pre-initialized browsers and other dependencies for running headful tests in the container."}),"\n",(0,n.jsx)(r.p,{children:"Example usage:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'docker run --rm -v $(pwd)/atest/test/:/test --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json marketsquare/robotframework-browser:latest bash -c "robot --outputdir /test/output /test"\n'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"docker run -v"})," is used to mount the directory containing tests on the supervising machine. In this example robot output will also be output inside the test directory"]}),"\n",(0,n.jsx)(r.h3,{id:"ppodgorsekrobot-framework",children:"ppodgorsek/robot-framework"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/ppodgorsek/docker-robot-framework",children:"https://github.com/ppodgorsek/docker-robot-framework"})}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)("summary",{children:"Check the list of included packages"}),"\nThe image contains latest robot-framework and a huge collection of helpful libraries."]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/robotframework/robotframework",children:"Robot Framework"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/MarketSquare/robotframework-browser",children:"Robot Framework Browser Library"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/franz-see/Robotframework-Database-Library",children:"Robot Framework DatabaseLibrary"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/Snooz82/robotframework-datadriver",children:"Robot Framework Datadriver"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/testautomation/DateTimeTZ",children:"Robot Framework DateTimeTZ"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/guykisel/robotframework-faker",children:"Robot Framework Faker"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/kowalpy/Robot-Framework-FTP-Library",children:"Robot Framework FTPLibrary"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://pypi.org/project/robotframework-imaplibrary2/",children:"Robot Framework IMAPLibrary 2"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/mkorpela/pabot",children:"Robot Framework Pabot"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/bulkan/robotframework-requests",children:"Robot Framework Requests"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/robotframework/SeleniumLibrary",children:"Robot Framework SeleniumLibrary"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/robotframework/SSHLibrary",children:"Robot Framework SSHLibrary"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/mozilla-services/axe-selenium-python",children:"Axe Selenium Library"})}),"\n",(0,n.jsx)(r.li,{children:"Firefox"}),"\n",(0,n.jsx)(r.li,{children:"Chromium"}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://pypi.org/project/awscli/",children:"Amazon AWS CLI"})}),"\n"]})]}),"\n",(0,n.jsx)(r.p,{children:"This container can be run using the following command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"    docker run \\\n        -v <local path to the reports' folder>:/opt/robotframework/reports:Z \\\n        -v <local path to the test suites' folder>:/opt/robotframework/tests:Z \\\n        ppodgorsek/robot-framework:<version>\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>a});var n=o(6540);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);