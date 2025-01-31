"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[307],{1175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),o=t(8453);const i={},a="\ud83d\udcd8 Semantic search in MongoDB",c={id:"perform-semantic-search/concepts",title:"\ud83d\udcd8 Semantic search in MongoDB",description:"In MongoDB, you can semantically search through your data using MongoDB Atlas Vector Search.",source:"@site/docs/40-perform-semantic-search/1-concepts.mdx",sourceDirName:"40-perform-semantic-search",slug:"/perform-semantic-search/concepts",permalink:"/ai-rag-lab/docs/perform-semantic-search/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/40-perform-semantic-search/1-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Perform Semantic Search on Your Data",permalink:"/ai-rag-lab/docs/category/perform-semantic-search-on-your-data"},next:{title:"\ud83d\udc50 Create a vector search index",permalink:"/ai-rag-lab/docs/perform-semantic-search/create-vector-index"}},s={},d=[];function h(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-semantic-search-in-mongodb",children:"\ud83d\udcd8 Semantic search in MongoDB"})}),"\n",(0,r.jsx)(n.p,{children:"In MongoDB, you can semantically search through your data using MongoDB Atlas Vector Search."}),"\n",(0,r.jsx)(n.p,{children:"To perform vector search on your data in MongoDB, you need to create a vector search index. An example of a vector search index definition looks as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embedding",\n      "numDimensions": 1536,\n      "similarity": "cosine"\n    },\n    {\n      "type": "filter",\n      "path": "symbol"\n    },\n    ...\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the index definition, you specify the path to the embedding field (",(0,r.jsx)(n.code,{children:"path"}),"), the number of dimensions in the embedding vectors (",(0,r.jsx)(n.code,{children:"numDimensions"}),"), and a similarity metric that specifies how to determine nearest neighbors in vector space (",(0,r.jsx)(n.code,{children:"similarity"}),"). You can also index filter fields that allow you to pre-filter on certain metadata to narrow the scope of the vector search."]}),"\n",(0,r.jsxs)(n.p,{children:["Vector search in MongoDB takes the form of an aggregation pipeline stage. It always needs to be the first stage in the pipeline and can be followed by other stages to further process the semantic search results. An example pipeline including the ",(0,r.jsx)(n.code,{children:"$vectorSearch"})," stage is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n  {\n    "$vectorSearch": {\n      "index": "vector_index", \n      "path": "embedding",  \n      "queryVector": [0.02421053, -0.022372592,...], \n      "numCandidates": 150,\n      "filter": {"symbol": "ABMD"},\n      "limit": 10\n    }\n  }, \n  {\n    "$project": {\n      "_id": 0, \n      "Content": 1,\n      "score": {"$meta": "vectorSearchScore"}\n    }\n  }\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, you can see a vector search query with a pre-filter. The ",(0,r.jsx)(n.code,{children:"limit"})," field in the query definition specifies how many documents to return from the vector search."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$project"})," stage that follows only returns documents with the ",(0,r.jsx)(n.code,{children:"Content"})," field and the similarity score from the vector search."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);