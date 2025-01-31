"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[734],{1287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={},a="\ud83d\udcd8 When to use RAG?",r={id:"key-concepts/rag-usecases",title:"\ud83d\udcd8 When to use RAG?",description:"RAG is best suited for the following:",source:"@site/docs/10-key-concepts/2-rag-usecases.mdx",sourceDirName:"10-key-concepts",slug:"/key-concepts/rag-usecases",permalink:"/ai-rag-lab/docs/key-concepts/rag-usecases",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/10-key-concepts/2-rag-usecases.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 What is RAG?",permalink:"/ai-rag-lab/docs/key-concepts/what-is-rag"},next:{title:"\ud83d\udcd8 Components of a RAG system",permalink:"/ai-rag-lab/docs/key-concepts/components-of-rag"}},c={},l=[];function d(e){const n={blockquote:"blockquote",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-when-to-use-rag",children:"\ud83d\udcd8 When to use RAG?"})}),"\n",(0,s.jsx)(n.p,{children:"RAG is best suited for the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tasks that require very specific information that you don\u2019t think will be present in the LLMs parametric knowledge i.e. information that is not widely available on the internet"}),"\n",(0,s.jsx)(n.li,{children:"Tasks that require information from multiple different data sources"}),"\n",(0,s.jsx)(n.li,{children:"Tasks that involve basic question-answering or summarization on a piece of information"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Do not expect success on complex multi-step tasks involving deductive reasoning or long-term planning. These are more suited for agentic workflows."}),"\n",(0,s.jsxs)(n.p,{children:["Here are some examples of tasks/questions that ",(0,s.jsx)(n.strong,{children:"DO NOT"})," require or cannot be achieved with RAG:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Who was the first president of the United States?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The information required to answer this question is very likely present in the parametric knowledge of most LLMs. Hence, this question can be answered using a simple prompt to an LLM."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"How has the trend in the average daily calorie intake among adults changed over the last decade in the United States, and what impact might this have on obesity rates? Additionally, can you provide a graphical representation of the trend in obesity rates over this period?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This question involves multiple sub-tasks such as data aggregation, visualization, and reasoning. Hence, this is a good use case for an AI agent rather than RAG."}),"\n",(0,s.jsx)(n.p,{children:"Here are some use cases for RAG:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"What is the travel reimbursement policy for meals for my company?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The information required to answer this question is most likely not present in the parametric knowledge of available LLMs. However, this question can easily be answered using RAG on a knowledge base consisting of your company's data."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Hi, I'm having trouble installing your software on my Windows 10 computer. It keeps giving me an error message saying 'Installation failed: Error code 1234'. How can I resolve this issue?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Again, this question requires troubleshooting information for a specific software, the documentation for which might not be widely available, but can be solved using RAG."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);