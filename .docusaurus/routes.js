import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/khacks-gen-ai/__docusaurus/debug',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug', '0b8'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/config',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/config', '277'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/content',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/content', 'ac8'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/globalData',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/globalData', '2f1'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/metadata',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/metadata', '55e'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/registry',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/registry', 'da2'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/__docusaurus/debug/routes',
    component: ComponentCreator('/khacks-gen-ai/__docusaurus/debug/routes', 'a7a'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog',
    component: ComponentCreator('/khacks-gen-ai/blog', '568'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/archive',
    component: ComponentCreator('/khacks-gen-ai/blog/archive', '86b'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/first-blog-post',
    component: ComponentCreator('/khacks-gen-ai/blog/first-blog-post', 'b64'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/long-blog-post',
    component: ComponentCreator('/khacks-gen-ai/blog/long-blog-post', 'eb4'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/mdx-blog-post',
    component: ComponentCreator('/khacks-gen-ai/blog/mdx-blog-post', 'd2c'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/tags',
    component: ComponentCreator('/khacks-gen-ai/blog/tags', 'd23'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/tags/docusaurus',
    component: ComponentCreator('/khacks-gen-ai/blog/tags/docusaurus', '75f'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/tags/facebook',
    component: ComponentCreator('/khacks-gen-ai/blog/tags/facebook', '107'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/tags/hello',
    component: ComponentCreator('/khacks-gen-ai/blog/tags/hello', '33c'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/tags/hola',
    component: ComponentCreator('/khacks-gen-ai/blog/tags/hola', '0c8'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/blog/welcome',
    component: ComponentCreator('/khacks-gen-ai/blog/welcome', '3e3'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/markdown-page',
    component: ComponentCreator('/khacks-gen-ai/markdown-page', '8e7'),
    exact: true
  },
  {
    path: '/khacks-gen-ai/docs',
    component: ComponentCreator('/khacks-gen-ai/docs', '70b'),
    routes: [
      {
        path: '/khacks-gen-ai/docs/chatbotllm/',
        component: ComponentCreator('/khacks-gen-ai/docs/chatbotllm/', '89c'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/chatbotwithCohert/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/chatbotwithCohert/intro', '8ba'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/chatwithpdf/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/chatwithpdf/intro', '914'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/backward',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/backward', '313'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/clipdropgradio',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/clipdropgradio', '5a3'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/clipdropintro',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/clipdropintro', '0bc'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/diffusionIntro',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/diffusionIntro', 'c7a'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/forwarddiffusion',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/forwarddiffusion', '5e1'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imagegen/imagegenintro',
        component: ComponentCreator('/khacks-gen-ai/docs/imagegen/imagegenintro', '43a'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/imgcap/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/imgcap/intro', '23f'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/intro', '8ab'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/langchain/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/langchain/intro', '0f0'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/khacks-gen-ai/docs/streamlit/intro',
        component: ComponentCreator('/khacks-gen-ai/docs/streamlit/intro', '262'),
        exact: true,
        sidebar: "mySidebar"
      }
    ]
  },
  {
    path: '/khacks-gen-ai/',
    component: ComponentCreator('/khacks-gen-ai/', 'cec'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
