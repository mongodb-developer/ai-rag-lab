"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[507],{8529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(4848),s=t(8453);const a={},d="\ud83d\udc50 Chunk up the data",c={id:"prepare-the-data/chunk-data",title:"\ud83d\udc50 Chunk up the data",description:"Since we are working with large documents, we first need to break them up into smaller chunks before embedding and storing them in MongoDB.",source:"@site/docs/50-prepare-the-data/3-chunk-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/chunk-data",permalink:"/ai-rag-lab/docs/prepare-the-data/chunk-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/3-chunk-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Load the dataset",permalink:"/ai-rag-lab/docs/prepare-the-data/load-data"},next:{title:"\ud83d\udc50 Generate embeddings",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data"}},o={},i=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-chunk-up-the-data",children:"\ud83d\udc50 Chunk up the data"}),"\n",(0,r.jsx)(n.p,{children:"Since we are working with large documents, we first need to break them up into smaller chunks before embedding and storing them in MongoDB."}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 4: Chunk up the data"})," section in the notebook to chunk up the articles we loaded."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_3"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'RecursiveCharacterTextSplitter.from_tiktoken_encoder(\n    encoding_name="cl100k_base", separators=separators, chunk_size=200, chunk_overlap=30\n)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_4"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"doc[text_field]\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_5"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"text_splitter.split_text(text)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_6"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"for chunk in chunks:\n    temp = doc.copy()\n    temp[text_field] = chunk\n    chunked_data.append(temp)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_7"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'for doc in docs:\n    chunks = get_chunks(doc, "body")\n    split_docs.extend(chunks)\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(6540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);