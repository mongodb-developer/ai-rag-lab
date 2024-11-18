"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[6260],{5796:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(4848),t=n(8453);const c={},o="\ud83d\udc50 Perform semantic search",a={id:"perform-semantic-search/vector-search",title:"\ud83d\udc50 Perform semantic search",description:"Now let's run some vector search queries against our data present in MongoDB.",source:"@site/docs/60-perform-semantic-search/3-vector-search.mdx",sourceDirName:"60-perform-semantic-search",slug:"/perform-semantic-search/vector-search",permalink:"/ai-rag-lab/docs/perform-semantic-search/vector-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/60-perform-semantic-search/3-vector-search.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Create a vector search index",permalink:"/ai-rag-lab/docs/perform-semantic-search/create-vector-index"},next:{title:"\ud83e\uddb9 Combine pre-filtering with vector search",permalink:"/ai-rag-lab/docs/perform-semantic-search/pre-filtering"}},i={},d=[];function l(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"-perform-semantic-search",children:"\ud83d\udc50 Perform semantic search"})}),"\n",(0,s.jsx)(r.p,{children:"Now let's run some vector search queries against our data present in MongoDB."}),"\n",(0,s.jsxs)(r.p,{children:["Fill in any ",(0,s.jsx)(r.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,s.jsx)(r.strong,{children:"Step 8: Perform semantic search on your data"})," section in the notebook to run vector search queries against your data."]}),"\n",(0,s.jsx)(r.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"CODE_BLOCK_9"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"get_embedding(user_query)\n"})})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"CODE_BLOCK_10"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'[\n    {\n        "$vectorSearch": {\n            "index": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n            "queryVector": query_embedding,\n            "path": "embedding",\n            "numCandidates": 150,\n            "limit": 5\n        }\n    },\n    {\n        "$project": {\n            "_id": 0,\n            "body": 1,\n            "score": {"$meta": "vectorSearchScore"}\n        }\n    }\n]\n'})})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"CODE_BLOCK_11"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"collection.aggregate(pipeline)\n"})})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var s=n(6540);const t={},c=s.createContext(t);function o(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);