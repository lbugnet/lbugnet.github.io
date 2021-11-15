(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),i=n(1),s=n(16),a=n(3),l=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&l.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Lisa Bugnet",path:"/"},{label:"Research",path:"/projects"},{label:"CV",path:"/resume"},{label:"Publications",path:"/publications"},{label:"Outreach",path:"/outreach"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(3).then(n.t.bind(null,54,7))})),p=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return s(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(p,{})]})},f=n(23),m=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Lisa Bugnet"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:lbugnet@flatironinstitute.org",children:"lbugnet@flatironinstitute.org"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("p",{children:" "}),Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["I am an Astrophysicist, specialized in stellar physics. I use Asteroseismology to unveil the dynamical processes taking place inside the core of stars like the Sun. I am currently a ",Object(c.jsx)("a",{href:"https://www.simonsfoundation.org/flatiron/",children:"Flatiron Research Fellow "})," at the Center for Computational Astrophysics of the Flatiron Insititute in New York. I obtained my PhD in Astrophysics in 2020 from ",Object(c.jsx)("a",{href:"https://u-paris.fr/en/",children:"University of Paris"})," and ",Object(c.jsx)("a",{href:"https://www.cea.fr/english",children:"CEA"}),", and my Astrophysics and Earth Sciences Master degrees in 2017 from the ",Object(c.jsx)("a",{href:"https://www.ens.psl.eu/en",children:"Ecole Normale Sup\xe9rieure of Paris"})," and the ",Object(c.jsx)("a",{href:"https://www.observatoiredeparis.psl.eu/-observatoire-de-paris-.html?lang=en",children:"Paris Observatory"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(f.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Lisa Bugnet ",Object(c.jsx)(u.b,{to:"/",children:"lbugnet.github.io/personal-site"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(c.jsxs)(s.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(s.a,{titleTemplate:"%s | Lisa Bugnet",defaultTitle:"Lisa Bugnet",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(m,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Lisa Bugnet's personal website."};t.a=w},23:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(27)),s=n(28),a=n(30),l=n(31),r=n(29),o=[{link:"https://github.com/lbugnet",label:"Github",icon:s.faGithub},{link:"https://www.researchgate.net/profile/Lisa-Bugnet",label:"ResearchGate",icon:r.faResearchgate},{link:"https://www.linkedin.com/in/lisa-bugnet/",label:"LinkedIn",icon:a.faLinkedinIn},{link:"https://twitter.com/lisa_Bugnet",label:"Twitter",icon:l.faTwitter}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(15),l=n(5),r=n(3),o=n(20),j=(n(44),Object(i.lazy)((function(){return n.e(6).then(n.bind(null,59))}))),b=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,52))})),u=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,53))})),h=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,58))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,55))})),O=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,56))})),p=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,57))})),x=function(){return Object(c.jsx)(l.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/publications",component:O}),Object(c.jsx)(r.a,{path:"/contact",component:j}),Object(c.jsx)(r.a,{path:"/resume",component:d}),Object(c.jsx)(r.a,{path:"/outreach",component:p}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},f=function(){return Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(f,{}),m):Object(a.render)(Object(c.jsx)(f,{}),m)}},[[45,1,2]]]);
//# sourceMappingURL=main.04ad9bc4.chunk.js.map