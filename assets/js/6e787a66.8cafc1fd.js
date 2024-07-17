"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[301],{8708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(4848),d=t(8453);const a={},o="\ud83d\udc50 Generate embeddings",s={id:"prepare-the-data/embed-data",title:"\ud83d\udc50 Generate embeddings",description:"To perform vector search on our data, we need to embed it (i.e. generate embedding vectors) before ingesting it into MongoDB.",source:"@site/docs/50-prepare-the-data/4-embed-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/embed-data",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/4-embed-data.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Chunk up the data",permalink:"/ai-rag-lab/docs/prepare-the-data/chunk-data"},next:{title:"\ud83d\udc50 Ingest data into MongoDB",permalink:"/ai-rag-lab/docs/prepare-the-data/ingest-data"}},i={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-generate-embeddings",children:"\ud83d\udc50 Generate embeddings"}),"\n",(0,r.jsx)(n.p,{children:"To perform vector search on our data, we need to embed it (i.e. generate embedding vectors) before ingesting it into MongoDB."}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 5: Generate embeddings"})," section in the notebook to embed the chunked articles."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_8"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'SentenceTransformer("mixedbread-ai/mxbai-embed-large-v1")\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_9"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"embedding = embedding_model.encode(text)\nreturn embedding.tolist()\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_10"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'for doc in split_docs:\n    doc["embedding"] = get_embedding(doc["body"])\n    embedded_docs.append(doc)\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const d={},a=r.createContext(d);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);