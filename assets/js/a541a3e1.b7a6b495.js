"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[426],{6314:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=o(4848),r=o(8453);const s={},a="\ud83d\udcd8 Tools, libraries, and concepts",i={id:"add-memory/concepts",title:"\ud83d\udcd8 Tools, libraries, and concepts",description:"Memory is important for the LLM to have multi-turn conversations with the user.",source:"@site/docs/80-add-memory/1-concepts.mdx",sourceDirName:"80-add-memory",slug:"/add-memory/concepts",permalink:"/ai-rag-lab/docs/add-memory/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/80-add-memory/1-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add memory to the RAG application",permalink:"/ai-rag-lab/docs/category/add-memory-to-the-rag-application"},next:{title:"\ud83d\udc50 Add memory to the RAG application",permalink:"/ai-rag-lab/docs/add-memory/add-memory"}},c={},d=[];function l(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-tools-libraries-and-concepts",children:"\ud83d\udcd8 Tools, libraries, and concepts"}),"\n",(0,n.jsx)(t.p,{children:"Memory is important for the LLM to have multi-turn conversations with the user."}),"\n",(0,n.jsx)(t.p,{children:"In this lab, you will persist chat messages in a separate MongoDB collection, indexed by session ID."}),"\n",(0,n.jsx)(t.p,{children:"For each new user query, you will fetch previous messages for that session from the collection and pass them to the LLM."}),"\n",(0,n.jsx)(t.p,{children:"Then once the LLM has generated a response to the query, you will write the query and the LLM's answer to the collection as two separate entries but having the same session ID."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);