"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[67],{5829:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=t(4848),n=t(8453);const c={},s="\ud83d\udc50 Create a vector search index",a={id:"perform-vector-search/create-vector-index",title:"\ud83d\udc50 Create a vector search index",description:"To retrieve documents from MongoDB using vector search, you must configure a vector search index on the collection into which you ingested your data. The recommended way to do this is via the MongoDB drivers.",source:"@site/docs/40-perform-vector-search/2-create-vector-index.mdx",sourceDirName:"40-perform-vector-search",slug:"/perform-vector-search/create-vector-index",permalink:"/ai-rag-lab/docs/perform-vector-search/create-vector-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/40-perform-vector-search/2-create-vector-index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Lecture notes",permalink:"/ai-rag-lab/docs/perform-vector-search/lecture-notes"},next:{title:"\ud83d\udc50 Perform vector search queries",permalink:"/ai-rag-lab/docs/perform-vector-search/vector-search"}},i={},d=[];function h(e){const r={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Details:t,Screenshot:c}=r;return t||m("Details",!0),c||m("Screenshot",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"-create-a-vector-search-index",children:"\ud83d\udc50 Create a vector search index"})}),"\n",(0,o.jsx)(r.p,{children:"To retrieve documents from MongoDB using vector search, you must configure a vector search index on the collection into which you ingested your data. The recommended way to do this is via the MongoDB drivers."}),"\n",(0,o.jsxs)(r.p,{children:["Fill in any ",(0,o.jsx)(r.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,o.jsx)(r.strong,{children:"Step 6: Create a vector search index"})," section in the notebook to create a vector search index."]}),"\n",(0,o.jsx)(r.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"CODE_BLOCK_8"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"collection.create_search_index(model=model)\n"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["To verify that the index was created, navigate to the ",(0,o.jsx)(r.strong,{children:"Overview"})," page in the Atlas UI. In the ",(0,o.jsx)(r.strong,{children:"Clusters section"}),", select your cluster and click ",(0,o.jsx)(r.strong,{children:"Browse collections"}),"."]}),"\n",(0,o.jsx)(c,{url:"https://cloud.mongodb.com",src:"img/screenshots/40-perform-vector-search/2-create-vector-index/1-browse-collections.png",alt:"Browse collections"}),"\n",(0,o.jsxs)(r.p,{children:["Navigate to ",(0,o.jsx)(r.strong,{children:"Search Indexes"})," for the ",(0,o.jsx)(r.em,{children:"knowledge_base"})," collection in the ",(0,o.jsx)(r.em,{children:"mongodb_genai_devday"})," database."]}),"\n",(0,o.jsx)(c,{url:"https://cloud.mongodb.com",src:"img/screenshots/40-perform-vector-search/2-create-vector-index/2-nav-search-indexes.png",alt:"Navigate to search indexes"}),"\n",(0,o.jsxs)(r.p,{children:["The index is ready to use once the status changes from ",(0,o.jsx)(r.strong,{children:"PENDING"})," to ",(0,o.jsx)(r.strong,{children:"READY"}),"."]}),"\n",(0,o.jsx)(c,{url:"https://cloud.mongodb.com",src:"img/screenshots/40-perform-vector-search/2-create-vector-index/3-index-ready.png",alt:"Index ready to use"})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function m(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var o=t(6540);const n={},c=o.createContext(n);function s(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);