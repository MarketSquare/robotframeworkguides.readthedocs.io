"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[540],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||c[f]||n;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6141:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],l={sidebar_label:"Reporting Test Results",title:"Reporting Test Results"},s=void 0,p={unversionedId:"reporting_alternatives",id:"reporting_alternatives",title:"Reporting Test Results",description:"Other Reporting Tools and Dashboards",source:"@site/docs/reporting_alternatives.md",sourceDirName:".",slug:"/reporting_alternatives",permalink:"/docs/reporting_alternatives",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/reporting_alternatives.md",tags:[],version:"current",frontMatter:{sidebar_label:"Reporting Test Results",title:"Reporting Test Results"},sidebar:"tutorialSidebar",previous:{title:"Parsing Test Results",permalink:"/docs/parsing_results"},next:{title:"Variables",permalink:"/docs/variables"}},u={},c=[{value:"Other Reporting Tools and Dashboards",id:"other-reporting-tools-and-dashboards",level:2},{value:"Report Portal",id:"report-portal",level:3},{value:"Allure",id:"allure",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Robot Framework Metrics",id:"robot-framework-metrics",level:3}],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"other-reporting-tools-and-dashboards"},"Other Reporting Tools and Dashboards"),(0,n.kt)("h3",{id:"report-portal"},"Report Portal"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://reportportal.io/"},"Report Portal")," is an AI-powered Test Automation Dashboard to acquire, aggregate and analyze test reports\nto ascertain release health."),(0,n.kt)("p",null,"It is integrated with Robot Framework via a listener ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/agent-Python-RobotFramework"},"robotframework-reportportal")," or via a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/agent-Python-RobotFramework/blob/master/robotframework_reportportal/post_report.py"},"python script")),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Xci19TAiO50",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"allure"},"Allure"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.qameta.io/allure-report/"},"Allure Framework")," is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests."),(0,n.kt)("p",null,"It is integrated with Robot Framework via a listener ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-python"},"robotframework-allure")),(0,n.kt)("h3",{id:"grafana"},"Grafana"),(0,n.kt)("p",null,"Grafana can be used to visualize test results in a dashboard.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11541-robot-framework-grafana-dashboard-part-1/"},"https://grafana.com/grafana/dashboards/11541-robot-framework-grafana-dashboard-part-1/")),(0,n.kt)("p",null,"Images\n",(0,n.kt)("img",{parentName:"p",src:"https://cognitiveqe.com/wp-content/uploads/2019/12/Robot_Framework_Granfana_Dashboard_Final.png",alt:"Grafana Dashboard"})),(0,n.kt)("p",null,"Example with Robot Framework Testarchiver, PostgreSQL and Grafana",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://cognitiveqe.com/robot-framework-test-results-in-grafana-postgresql/"},"https://cognitiveqe.com/robot-framework-test-results-in-grafana-postgresql/")),(0,n.kt)("p",null,"Example with Robot Framework DBbot, MySQL and Grafana",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://cognitiveqe.com/robot-framework-grafana-dashboard/"},"https://cognitiveqe.com/robot-framework-grafana-dashboard/")),(0,n.kt)("p",null,"Blog post about Robot Framework, Jenkins Plugin, InfluxDB and Grafana\n",(0,n.kt)("a",{parentName:"p",href:"https://www.eficode.com/blog/rf-jenkins-grafana"},"https://www.eficode.com/blog/rf-jenkins-grafana")),(0,n.kt)("h3",{id:"robot-framework-metrics"},"Robot Framework Metrics"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/adiralashiva8/robotframework-metrics"},"Robot Framework Metrics")," creates custom HTML report (dashboard view) by parsing robotframework output.xml file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sample Report")," ",(0,n.kt)("a",{parentName:"li",href:"https://rfmetrics.netlify.com/"},"link"))))}f.isMDXComponent=!0}}]);