"use strict";(self.webpackChunkdocusaurus_yt_example=self.webpackChunkdocusaurus_yt_example||[]).push([[93],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>p});var r=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},a=Object.keys(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=r.createContext({}),s=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},c=function(A){var e=s(A.components);return r.createElement(l.Provider,{value:e},A.children)},u="mdxType",E={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,l=A.parentName,c=o(A,["components","mdxType","originalType","parentName"]),u=s(t),f=n,p=u["".concat(l,".").concat(f)]||u[f]||E[f]||a;return t?r.createElement(p,i(i({ref:e},c),{},{components:t})):r.createElement(p,i({ref:e},c))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=A,o[u]="string"==typeof A?A:n,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4568:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const a={},i="Streamlit",o={unversionedId:"streamlit/intro",id:"streamlit/intro",title:"Streamlit",description:"What is Streamlit ?",source:"@site/docs/streamlit/intro.md",sourceDirName:"streamlit",slug:"/streamlit/intro",permalink:"/khacks-gen-ai/docs/streamlit/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/streamlit/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Chat with PDF",permalink:"/khacks-gen-ai/docs/chatwithpdf/intro"},next:{title:"Image Captioning App",permalink:"/khacks-gen-ai/docs/imgcap/intro"}},l={},s=[],c={toc:s},u="wrapper";function E(A){let{components:e,...a}=A;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"streamlit"},"Streamlit"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What is Streamlit ?")),(0,n.kt)("p",null,"Streamlit is an open source framework in Python language."),(0,n.kt)("p",null,"It helps us create web apps for data science and machine learning in a short time"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Benefits Of Streamlit")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fully Open Source"),(0,n.kt)("li",{parentName:"ul"},"No prior knowledge required about traditional front -end development"),(0,n.kt)("li",{parentName:"ul"},"Fully written in python")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prerequisites")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Knowledge about Python")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Procedure")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install Streamlit")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install streamlit\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a python file app.py")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"import Streamlit"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"import streamlit as st\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Type your basic code to show the header")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'st.header("Hello World ")\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Run your basic app",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"open terminal in the current directory"),(0,n.kt)("li",{parentName:"ol"},"use the command below to  run your streamlit app")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"streamlit run app.py\n")),(0,n.kt)("p",null,"Screenshot:\n",(0,n.kt)("img",{alt:"Alt text",src:t(4520).Z,width:"1901",height:"808"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Create a Text Entry Box and a button")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"userin = st.text_input('First name')\nst.button(\"Submit\")\n")),(0,n.kt)("p",null,"Screenshot:\n",(0,n.kt)("img",{alt:"Alt text",src:t(5638).Z,width:"1010",height:"381"}),"\n7. Add a Functionality on submit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def hello():\n    st.text(userin)\nst.button("Submit",on_click=hello())\n')),(0,n.kt)("p",null,"Screenshot:\nC:\\Users\\akank\\docusorus\\docusaurus-yt-example\\docs\\streamlit\\base4.png"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Streamlit Resources :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Streamlit Documentation : ",(0,n.kt)("a",{parentName:"li",href:"https://docs.streamlit.io/"},"https://docs.streamlit.io/")),(0,n.kt)("li",{parentName:"ul"},"Streamlit Cheatsheet : ",(0,n.kt)("a",{parentName:"li",href:"https://docs.streamlit.io/library/cheatsheet"},"https://docs.streamlit.io/library/cheatsheet"))))}E.isMDXComponent=!0},5638:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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RMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAQoQ8AAAAJETIAwAAQEKEPAAAACREyAMAAEBChDwAAAAkRMgDAABAMiL+P0zQFZ0ehvD/AAAAAElFTkSuQmCC"},4520:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/base-2be0b4b29acd2f99877410386b05c740.png"}}]);