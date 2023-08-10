"use strict";(self.webpackChunkdocusaurus_yt_example=self.webpackChunkdocusaurus_yt_example||[]).push([[9577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},o="Creating an Image Generation Application using Clipdrop API and Gradio",p={unversionedId:"imagegen/clipdropgradio",id:"imagegen/clipdropgradio",title:"Creating an Image Generation Application using Clipdrop API and Gradio",description:"Gradio enables the creation and sharing of demos in Python with just a few lines of code. It provides the capability to host webpages and potentially generate revenue. This documentation outlines the process of building an image generation application using the Clipdrop API and Gradio.",source:"@site/docs/imagegen/clipdropgradio.md",sourceDirName:"imagegen",slug:"/imagegen/clipdropgradio",permalink:"/khacks-gen-ai/docs/imagegen/clipdropgradio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/imagegen/clipdropgradio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mySidebar",previous:{title:"What is ClipDrop?",permalink:"/khacks-gen-ai/docs/imagegen/clipdropintro"},next:{title:"Building a Chatbot with LLMs",permalink:"/khacks-gen-ai/docs/chatbotllm/"}},l={},s=[{value:"Gradio Tutorial",id:"gradio-tutorial",level:2},{value:"Image Generation Application",id:"image-generation-application",level:2},{value:"Thank You!",id:"thank-you",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-image-generation-application-using-clipdrop-api-and-gradio"},"Creating an Image Generation Application using Clipdrop API and Gradio"),(0,r.kt)("p",null,"Gradio enables the creation and sharing of demos in Python with just a few lines of code. It provides the capability to host webpages and potentially generate revenue. This documentation outlines the process of building an image generation application using the Clipdrop API and Gradio."),(0,r.kt)("h2",{id:"gradio-tutorial"},"Gradio Tutorial"),(0,r.kt)("p",null,"To get started, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Gradio library by running the command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install gradio\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Use the following code as a template:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import gradio as gr\n\ndef greet(name):\n    return "Hello " + name + "!"\n\ndemo = gr.Interface(fn=greet, inputs="text", outputs="text")\n\ndemo.launch()\n')),(0,r.kt)("p",null,"This code snippet creates a basic Gradio application that accepts user input and displays a greeting."),(0,r.kt)("h2",{id:"image-generation-application"},"Image Generation Application"),(0,r.kt)("p",null,"To create an image generation application using the Clipdrop API and Gradio, use the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import gradio as gr\nimport requests\nimport io\nfrom PIL import Image\n\ndef generate_image(prompt):\n    r = requests.post('https://clipdrop-api.co/text-to-image/v1',\n        files={\n            'prompt': (None, prompt, 'text/plain')\n        },\n        headers={'x-api-key': 'YOUR API KEY HERE'}\n    )\n\n    if r.ok:\n        images = Image.open(io.BytesIO(r.content))\n        return images\n    else:\n        raise ValueError(\"Failed to generate image\")\n\niface = gr.Interface(\n    fn=generate_image,\n    inputs=gr.inputs.Textbox(),\n    outputs=gr.outputs.Image(type=\"pil\"),\n    title=\"Image generation\",\n    description=\"Enter your prompt here and click 'Generate Image' to see the generated image.\",\n)\n\nif __name__ == \"__main__\":\n    iface.launch()\n\n\n")),(0,r.kt)("p",null,"This code demonstrates how to utilize the Clipdrop API to generate images based on a user's input prompt. The Gradio interface takes care of user interaction and image display. Replace ",(0,r.kt)("strong",{parentName:"p"},"'YOUR API KEY HERE'")," with your actual Clipdrop API key."),(0,r.kt)("p",null,"Feel free to modify and expand upon this example to suit your specific image generation needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ngradio app.py\n\n")),(0,r.kt)("p",null,"Use the above command to run the program."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output"),"\n",(0,r.kt)("img",{alt:"Gradio Output",src:n(4907).Z,width:"1891",height:"631"})),(0,r.kt)("h3",{id:"thank-you"},"Thank You!"))}u.isMDXComponent=!0},4907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grdio1-0e3de0a398d0ff441e40694814ff01c8.png"}}]);