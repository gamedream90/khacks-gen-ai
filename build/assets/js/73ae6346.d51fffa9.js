"use strict";(self.webpackChunkdocusaurus_yt_example=self.webpackChunkdocusaurus_yt_example||[]).push([[223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Chat with PDF",l={unversionedId:"chatwithpdf/intro",id:"chatwithpdf/intro",title:"Chat with PDF",description:"Objective :",source:"@site/docs/chatwithpdf/intro.md",sourceDirName:"chatwithpdf",slug:"/chatwithpdf/intro",permalink:"/khacks-gen-ai/docs/chatwithpdf/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/chatwithpdf/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Langchain",permalink:"/khacks-gen-ai/docs/langchain/intro"},next:{title:"Streamlit",permalink:"/khacks-gen-ai/docs/streamlit/intro"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chat-with-pdf"},"Chat with PDF"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Objective :")),(0,a.kt)("p",null,"To Create a Web to interact with your Documents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic Python"),(0,a.kt)("li",{parentName:"ul"},"Streamlit"),(0,a.kt)("li",{parentName:"ul"},"Basic Knowledge about LLM\u2019s")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available Products:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chatpdf.com/"},"chatpdf.com"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"chatwithpdf",src:n(5978).Z,width:"1235",height:"871"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Procedure :")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create Your Basic Streamlit app")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import streamlit as st\ndef main():\n\n    st.set_page_config(page_title="Ask your PDF")\n    st.header("Ask your PDF \ud83d\udcac")\n    pdf = st.file_uploader("Upload your PDF", type="pdf")\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("p",null,"Screenshots:\n",(0,a.kt)("img",{alt:"Alt text",src:n(3475).Z,width:"1192",height:"475"}),"\n2. Create your API Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. OpenAI\n2. Cohere\n3. Hugging Faces\n")),(0,a.kt)("p",null,"For this Example We will go with Cohere"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Screenshots"),"\n",(0,a.kt)("img",{alt:"Alt text",src:n(8782).Z,width:"690",height:"427"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Import Libraries for Embeddings, Vector Storage, PDF reading")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from PyPDF2 import PdfReader\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.embeddings import CohereEmbeddings\nfrom langchain.vectorstores import FAISS\nfrom langchain.chains.question_answering import load_qa_chain\nfrom langchain.llms import Cohere\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create a Text Splitter for the Content from PDF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if pdf is not None:\n      pdf_reader = PdfReader(pdf)\n      text = ""\n      for page in pdf_reader.pages:\n        text += page.extract_text()\n        \n\n      text_splitter = CharacterTextSplitter(\n        separator="\\n",\n        chunk_size=1000,\n        chunk_overlap=200,\n        length_function=len\n      )\n      chunks = text_splitter.split_text(text)\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Create Embedding For the Splitted Text")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'embeddings = CohereEmbeddings(cohere_api_key="YOUR API KEY")\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Store the Embedded data in Vector Storage using FAISS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"knowledge_base = FAISS.from_texts(chunks, embeddings)\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Create the Streamlit Component to Chat with your PDF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'user_question = st.text_input("Ask a question about your PDF:")\n')),(0,a.kt)("p",null,"Screenshots:\n",(0,a.kt)("img",{alt:"Alt text",src:n(2478).Z,width:"1225",height:"666"}),"\n8. Process the the user input using the cohere LLM and the Data stored in Vector Storage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if user_question:\n        docs = knowledge_base.similarity_search(user_question)\n        \n        llm = Cohere(cohere_api_key="YOUR API KEY", temperature=0.5)\n\n        chain = load_qa_chain(llm, chain_type="stuff")\n        response = chain.run(input_documents=docs, question=user_question)\n           \n        st.write(response)\n')),(0,a.kt)("p",null,"NOTE :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remember to Change \u201cYOUR API KEY \u201d with your Respective API Keys"),(0,a.kt)("li",{parentName:"ul"},"Remember to install cohere , faiss python package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install cohere faiss-cpu\n")))}m.isMDXComponent=!0},5978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chatwithpdf-b046ea9518601314fd18c9b854e2b5d9.png"},3475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cwp-1030d15ce381398fe89a9b6462bccc5a.png"},8782:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cwpa-3912bc2080d4e5180aadf8f795de96e8.png"},2478:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cwpb-31e7659be3e673700ed1365cdc2d1f42.png"}}]);