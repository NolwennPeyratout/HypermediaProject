import{_ as c}from"./ProjectCard.d7c2dd92.js";import{_ as d}from"./nuxt-link.0c376593.js";import{_ as l,g as s,a as e,F as a,r as p,b as u,w as m,h as _,o,c as h}from"./entry.532668ce.js";import{d as v}from"./component.78a880d3.js";import{u as g}from"./fetch.4445ef7a.js";const f=v({async asyncData(){const{data:t}=await g(_().public.serverURL+"/projects","$olQ4jpDRvq");return{projects:t}}}),j=e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),x=e("div",{id:"pageTop"},[e("h1",{id:"page-title"}," Our projects "),e("p",{id:"projects-page-description"},"On this page we proudly present a comprehensive display of our global success stories across three key areas: Food, Health, and IT. Explore the extraordinary projects that have captured the world's attention and redefined their respective industries. From revolutionary advancements in food technology to groundbreaking healthcare solutions and cutting-edge IT innovations, these projects exemplify our commitment to nurturing visionary entrepreneurs and driving transformative change on a global scale. Join us as we celebrate the impact these projects have made and discover the future of innovation in these vital sectors.")],-1),y={id:"projects-container"},k=e("div",{id:"mostRelevant-link"},"MOST RELEVANT PROJECTS",-1);function w(t,R,b,T,$,C){const r=c,i=d;return o(),s(a,null,[j,e("main",null,[x,e("div",y,[(o(!0),s(a,null,p(t.projects,n=>(o(),h(r,{title:n.name,link:"/projects/"+n.name,"img-url":"~/assets/img/projects/"+n.name+"1.jpg",class:"card-element"},null,8,["title","link","img-url"]))),256))]),u(i,{to:"/projects/MostRelevant",id:"mostRelevant-button"},{default:m(()=>[k]),_:1})])],64)}const O=l(f,[["render",w]]);export{O as default};
