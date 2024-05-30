import{_ as o,a as l,b as r,c}from"./start_scan_01-c88b8a36.js";import{_ as d}from"./start_scan_02-3fe00a0e.js";import{_ as h,a as u,b as y}from"./start_scan_04-65ab4d48.js";import{_ as p,r as _,o as m,c as E,a as e,b as a,d as t,w as n,e as i}from"./app-abd48091.js";const f={},g=e("h1",{id:"quick-start-a-code-analysis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start-a-code-analysis","aria-hidden":"true"},"#"),a(" Quick start a code analysis")],-1),A=e("h2",{id:"create-teams-and-projects",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-teams-and-projects","aria-hidden":"true"},"#"),a(" Create teams and projects")],-1),b=e("strong",null,"Create a new team",-1),B=e("br",null,null,-1),v=e("p",null,[e("img",{src:o,alt:"Create a new team"})],-1),C=e("li",null,[e("p",null,[e("strong",null,"Create a new project for your team, or select an existing project then open the project")]),e("p",null,[e("img",{src:l,alt:"Create a new project"})])],-1),w=i('<h2 id="register-your-repository" tabindex="-1"><a class="header-anchor" href="#register-your-repository" aria-hidden="true">#</a> Register your repository</h2><ul><li><p><strong>Register your repository and go to code analysis</strong></p><p><img src="'+r+'" alt="Register your repository"></p><p><img src="'+c+'" alt="Go to code analysis"></p></li></ul><h2 id="start-code-analysis" tabindex="-1"><a class="header-anchor" href="#start-code-analysis" aria-hidden="true">#</a> Start code analysis</h2><h3 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h3><p><img src="'+d+'" alt="Start a analysis"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>When starting code analysis for the first time, you can choose an existing analysis scheme template or create one.</li><li>When you click &quot;确认&quot;, the TCA will first create an analysis scheme for your repository, and create branch projects based on repository&#39;s branches and current analysis scheme for users to start code analysis.</li></ol></div><h3 id="run-a-code-analysis" tabindex="-1"><a class="header-anchor" href="#run-a-code-analysis" aria-hidden="true">#</a> Run a code analysis</h3><p>After initialization, you can use <code>Online analysis</code> or <code>Client analysis</code> to start a code analysis。</p><p><img src="'+h+'" alt="Code analysis"></p><h4 id="online-analysis" tabindex="-1"><a class="header-anchor" href="#online-analysis" aria-hidden="true">#</a> Online analysis</h4><p>Online analysis means that the analysis task is registered to the execution queue in the server, and the task is assigned to the resident analysis node configured in the TCA. After the analysis is completed, the analysis result will upload to the TCA.</p>',11),x={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"TIP",-1),T=e("p",null,"Use online analysis, the TCA must have at least resident analysis node:",-1),j=e("p",null,[e("strong",null,"If there is no node avaliable, online analysis tasks cannot be assigned. Unassigned tasks will be automatically cancelled after timeout"),a("。")],-1),F=e("h4",{id:"client-analysis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#client-analysis","aria-hidden":"true"},"#"),a(" Client analysis")],-1),R=e("code",null," codelog.ini",-1),q=i('<h2 id="analysis-history" tabindex="-1"><a class="header-anchor" href="#analysis-history" aria-hidden="true">#</a> Analysis history</h2><p>After the analysis, the data will be reported to the server. You can enter the analysis history page to check the analysis records and results.</p><p><img src="'+u+'" alt="Analysis history"></p><h2 id="analysis-overview" tabindex="-1"><a class="header-anchor" href="#analysis-overview" aria-hidden="true">#</a> Analysis overview</h2>',4),I=e("code",null,"Branch overview",-1),N=e("p",null,[e("img",{src:y,alt:"Branch overview"})],-1);function z(S,V){const s=_("RouterLink");return m(),E("div",null,[g,A,e("ul",null,[e("li",null,[e("p",null,[b,B,a(" Check here about "),t(s,{to:"/en/guide/%E5%9B%A2%E9%98%9F%E7%AE%A1%E7%90%86/%E5%9B%A2%E9%98%9F%E7%AE%A1%E7%90%86.html"},{default:n(()=>[a("Team manage")]),_:1})]),v]),C]),w,e("div",x,[k,T,e("ul",null,[e("li",null,[e("p",null,[a("If your TCA is deployed using the official out-of-the-box deployment script (Docker deployment, Docker-compose deployment, and source code deployment), an analysis node (client) has been started by default, which can be directly used for online analysis. Check here about "),t(s,{to:"/en/guide/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86/%E8%8A%82%E7%82%B9%E7%AE%A1%E7%90%86.html"},{default:n(()=>[a("Node management")]),_:1}),a(".")])]),e("li",null,[e("p",null,[a("You can also add more analysis nodes to perform parallel code analysis. To add new nodes, see "),t(s,{to:"/en/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.html"},{default:n(()=>[a("About node")]),_:1})])])]),j]),F,e("p",null,[a("Client analysis is local analysis. You need to have a client locally and configure the client configuration file "),R,a(", see "),t(s,{to:"/en/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E6%9C%AC%E5%9C%B0%E5%88%86%E6%9E%90.html"},{default:n(()=>[a("Start a local analysis")]),_:1}),a(" to configure your local client. After analysis, the report data will be uploaded.")]),q,e("p",null,[a("After the analysis, you can check a branch overview and "),t(s,{to:"/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C%E6%9F%A5%E7%9C%8B.html"},{default:n(()=>[a("Defects list")]),_:1}),a(" by entering "),I,a(" 等。")]),N])}const P=p(f,[["render",z],["__file","快速启动一次代码分析.html.vue"]]);export{P as default};
