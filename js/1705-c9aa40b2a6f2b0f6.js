"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1705],{3947:function(e,n){n.Z={src:"/_next/static/media/cart.6f33eddb.png",height:23,width:23,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUgICAfHx8gICAgICBMaXEgICAgICAgICAgICAeHh4hISEZhw0cAAAAC3RSTlNXOI5kACt/S3UMtV73JmsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicBcGJAQAgDAKxA/qo+w9sQt0zc25RUZVOgUkwvLHteUB3N7BiFwFSSwI5SawPIsoAzUVeLzIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},27764:function(e,n,s){var a=s(85893),i=s(67294),l=s(41664),c=s.n(l),t=s(27309),r=s(53637),d=s(35773),h=s(22120),u=s(11163);n.Z=()=>{let{t:e}=(0,h.$G)(),[n,s]=(0,i.useState)({right:"0px"}),l=(0,u.useRouter)();(0,i.useEffect)(()=>{window.innerWidth<750&&s({right:"-410px"}),window.innerWidth<1199&&s({right:"-300px"})},[]);let m=e=>{e.target.classList.contains("sub-arrow")||(e.target.parentNode.nextElementSibling.classList.contains("opensubmegamenu")?e.target.parentNode.nextElementSibling.classList.remove("opensubmegamenu"):(document.querySelectorAll(".menu-content").forEach(function(e){e.classList.remove("opensubmegamenu")}),e.target.parentNode.nextElementSibling.classList.add("opensubmegamenu")))},[o,x]=(0,i.useState)(t.p);(0,i.useEffect)(()=>{let e=location.pathname;t.p.filter(n=>{if(n.path===e&&g(n),!n.children)return!1;n.children.filter(n=>{if(n.path===e&&g(n),!n.children)return!1;n.children.filter(n=>{n.path===e&&g(n)})})})},[]);let g=e=>{t.p.filter(n=>{n!=e&&(n.active=!1),n.children&&n.children.includes(e)&&(n.active=!0),n.children&&n.children.filter(s=>{s.children&&s.children.includes(e)&&(n.active=!0,s.active=!1)})}),x({mainmenu:t.p})},p=e=>{e.active||t.p.forEach(n=>{if(t.p.includes(e)&&(n.active=!1),!n.children)return!1;n.children.forEach(s=>{if(n.children.includes(e)&&(s.active=!1),!s.children)return!1;s.children.forEach(n=>{s.children.includes(e)&&(n.active=!1)})})}),e.active=!e.active,x({mainmenu:t.p})},j=e=>{e.target.classList.contains("sub-arrow")||(e.target.nextElementSibling.classList.contains("opensubmenu")?e.target.nextElementSibling.classList.remove("opensubmenu"):(document.querySelectorAll(".nav-submenu").forEach(function(e){e.classList.remove("opensubmenu")}),document.querySelector(".mega-menu-container").classList.remove("opensubmenu"),e.target.nextElementSibling.classList.add("opensubmenu")))};return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"main-navbar",children:(0,a.jsxs)("div",{id:"mainnav",children:[(0,a.jsx)("div",{className:"toggle-nav",onClick:(()=>{s({right:"0px"}),"/layouts/Gym"==l.asPath&&document.querySelector("#topHeader").classList.add("zindex-class")}).bind(void 0),children:(0,a.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,a.jsxs)("ul",{className:"nav-menu",style:n,children:[(0,a.jsx)("li",{className:"back-btn",onClick:(()=>{s({right:"-410px"}),"/layouts/Gym"==l.asPath&&document.querySelector("#topHeader").classList.remove("zindex-class")}).bind(void 0),children:(0,a.jsxs)("div",{className:"mobile-back text-end",children:[(0,a.jsx)("span",{children:"Back navbar"}),(0,a.jsx)("i",{className:"fa fa-angle-right ps-2","aria-hidden":"true"})]})}),t.p.map((n,s)=>(0,a.jsxs)("li",{className:" ".concat(n.megaMenu?"mega-menu":""),children:["link"==n.type?(0,a.jsx)(c(),{href:n.path,className:"nav-link",children:e(n.title)}):(0,a.jsxs)("a",{className:"nav-link",onClick:e=>j(e),children:[e(n.title),(0,a.jsx)("span",{className:"sub-arrow"})]}),n.children&&!n.megaMenu?(0,a.jsx)("ul",{className:"nav-submenu",children:n.children.map((e,n)=>(0,a.jsxs)("li",{className:"".concat(e.children?"sub-menu ":""),children:["sub"===e.type?(0,a.jsxs)("a",{href:null,onClick:()=>p(e),children:[e.title,"new"===e.tag?(0,a.jsx)("span",{className:"new-tag",children:"new"}):"",(0,a.jsx)("i",{className:"fa fa-angle-right ps-2"})]}):"","link"===e.type?(0,a.jsxs)(c(),{href:"".concat(e.path),children:[e.title,"new"===e.tag?(0,a.jsx)("span",{className:"new-tag",children:"new"}):""]}):"",e.children?(0,a.jsx)("ul",{className:"nav-sub-childmenu ".concat(e.active?"menu-open ":"active"),children:e.children.map((e,n)=>(0,a.jsx)("li",{children:"link"===e.type?(0,a.jsxs)(c(),{href:e.path,className:"sub-menu-title",children:[e.title,"new"===e.tag?(0,a.jsx)("span",{className:"new-tag",children:"new"}):""]}):""},n))}):""]},n))}):(0,a.jsx)(a.Fragment,{children:"link"!==n.type&&(0,a.jsx)("div",{className:"mega-menu-container".concat(n.megaMenu?"":" opensubmenu"),children:!0===n.megaMenu?(0,a.jsx)(r.Z,{children:(0,a.jsx)(d.Z,{children:n.children.map((e,s)=>(0,a.jsx)("div",{className:"".concat("small"==n.megaMenuType?"col mega-box":"medium"==n.megaMenuType?"col-lg-3":"large"==n.megaMenuType?"col":""," "),children:(0,a.jsxs)("div",{className:"link-section",children:[(0,a.jsx)("div",{className:"menu-title",children:(0,a.jsx)("h5",{onClick:e=>m(e),children:e.title})}),(0,a.jsx)("div",{className:"menu-content",children:(0,a.jsx)("ul",{children:"Elements"===n.title?e.children.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)(c(),{href:e.path,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"icon-".concat(e.icon)}),e.title]})})},n)):e.children.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)(c(),{href:e.path,children:e.title})},n))})})]})},s))})}):""})})]},s))]})]})})})}},51997:function(e,n,s){var a=s(85893);s(67294);var i=s(53637),l=s(35773),c=s(95305),t=s(41664),r=s.n(t),d=s(11163);n.Z=e=>{let{topClass:n,fluid:s}=e,t=(0,d.useRouter)(),h=()=>{localStorage.setItem("user",!1),t.push("/page/account/login-auth")};return(0,a.jsx)("div",{className:n,children:(0,a.jsx)(i.Z,{fluid:s,children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{lg:"6",children:(0,a.jsx)("div",{className:"header-contact",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Welcome to Our store Multikart"}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"fa fa-phone text-white","aria-hidden":"true"}),"Call Us: 123 - 456 - 7890"]})]})})}),(0,a.jsx)(c.Z,{lg:"6",className:"text-end",children:(0,a.jsxs)("ul",{className:"header-dropdown",children:[(0,a.jsx)("li",{className:"mobile-wishlist",children:(0,a.jsxs)(r(),{href:"/page/account/wishlist",children:[(0,a.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})," wishlist"]})}),(0,a.jsxs)("li",{className:"onhover-dropdown mobile-account",children:[(0,a.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," My Account",(0,a.jsxs)("ul",{className:"onhover-show-div",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/page/account/login",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/page/account/register",children:"Register"})}),(0,a.jsx)("li",{onClick:()=>h(),children:(0,a.jsx)("a",{children:"Logout"})})]})]})]})})]})})})}}}]);