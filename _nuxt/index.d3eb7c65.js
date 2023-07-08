import{_ as a}from"./ProjectCard.38576308.js";import{_ as c,g as s,a as e,F as i,r as l,h as p,o as n,c as d}from"./entry.1d8d09a2.js";import{d as m}from"./component.073c8d51.js";import{u}from"./fetch.f20a2cdc.js";import"./nuxt-link.70304179.js";const _=m({async asyncData(){return{projects:await u(p().public.serverURL+"/projects/byarea/IT","$yhjMsUzAy3")}}}),h=e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),f=e("div",{class:"IT-pageTop"},[e("h1",{id:"IT-page-title"},"IT Projects"),e("p",{id:"ITproj-page-description"},"On this page we proudly present our portfolio of impactful IT sector projects. Discover the importance of these ventures as they revolutionize the digital landscape and drive technological advancements. From satellite-based routers connecting the unconnected to immersive VR visors and advanced security firmware, these projects embody our commitment to pushing the boundaries of innovation. Join us in exploring these transformative initiatives that are shaping the future of technology and redefining industries.")],-1),g={id:"IT-projects-container"};function v(o,j,y,T,x,I){const r=a;return n(),s(i,null,[h,e("main",null,[f,e("div",g,[(n(!0),s(i,null,l(o.projects,t=>(n(),d(r,{title:t.name,link:"/projects/"+t.name,"img-url":"~/assets/img/projects/"+t.name+"1.jpg",class:"card-element"},null,8,["title","link","img-url"]))),256))])])],64)}const F=c(_,[["render",v]]);export{F as default};