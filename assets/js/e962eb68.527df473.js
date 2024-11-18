"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[9214],{7949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),a=n(8453),o=n(2763);const r={},i="\ud83d\udc50 Ingest data into MongoDB",c={id:"prepare-the-data/ingest-data",title:"\ud83d\udc50 Ingest data into MongoDB",description:"The final step to build a MongoDB vector store for our RAG application is to ingest the embedded article chunks into MongoDB.",source:"@site/docs/50-prepare-the-data/5-ingest-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/ingest-data",permalink:"/ai-rag-lab/docs/prepare-the-data/ingest-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/5-ingest-data.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Generate embeddings",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data"},next:{title:"Perform Semantic Search on Your Data",permalink:"/ai-rag-lab/docs/category/perform-semantic-search-on-your-data"}},d={},l=[];function h(e){const t={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-ingest-data-into-mongodb",children:"\ud83d\udc50 Ingest data into MongoDB"})}),"\n",(0,s.jsx)(t.p,{children:"The final step to build a MongoDB vector store for our RAG application is to ingest the embedded article chunks into MongoDB."}),"\n",(0,s.jsxs)(t.p,{children:["Fill in any ",(0,s.jsx)(t.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,s.jsx)(t.strong,{children:"Step 6: Ingest data into MongoDB"})," section in the notebook to ingest the embedded documents into MongoDB."]}),"\n",(0,s.jsx)(t.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CODE_BLOCK_6"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"mongodb_client[DB_NAME][COLLECTION_NAME]\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CODE_BLOCK_7"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"collection.insert_many(embedded_docs)\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["To verify that the data has been imported into your MongoDB cluster, navigate to the ",(0,s.jsx)(t.strong,{children:"Overview"})," page in the Atlas UI. In the ",(0,s.jsx)(t.strong,{children:"Clusters section"}),", select your cluster and click ",(0,s.jsx)(t.strong,{children:"Browse collections"}),"."]}),"\n",(0,s.jsx)(o.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/50-prepare-the-data/5-ingest-data/1-browse-collections.png",alt:"Browse collections"}),"\n",(0,s.jsxs)(t.p,{children:["Ensure that you see a database called ",(0,s.jsx)(t.em,{children:"mongodb_rag_lab"}),", and a collection named ",(0,s.jsx)(t.em,{children:"knowledge_base"})," under it. Note the number and format of documents in the collection."]}),"\n",(0,s.jsx)(o.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/50-prepare-the-data/5-ingest-data/2-verify-collection.png",alt:"Verify collection"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2763:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4848);function a(e){const t=e.url||"http://localhost:3000";return(0,s.jsxs)("div",{className:"browser container",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"column left",children:[(0,s.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,s.jsx)("div",{className:"column middle",children:(0,s.jsx)("input",{type:"text",value:t})}),(0,s.jsx)("div",{className:"column right",children:(0,s.jsxs)("div",{style:{float:"right"},children:[(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"})]})})]}),(0,s.jsx)("div",{className:"content",children:e.children})]})}var o=n(6025);function r(e){return(0,s.jsx)(a,{...e,children:(0,s.jsx)("img",{src:(0,o.Ay)(e.src),alt:e.alt})})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(6540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);