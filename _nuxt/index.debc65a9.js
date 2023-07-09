import{_ as s}from"./CircleContainer.6eb25ec5.js";import{_ as u,g as r,a as e,F as a,r as c,h as d,o as t,c as l}from"./entry.014b44eb.js";import{d as p}from"./component.0410ec16.js";import{u as m}from"./fetch.a9296ee0.js";import"./nuxt-link.e4197d54.js";const _=p({async asyncData(){await m(d().public.serverURL+"/areas","$Stmmz1SXB6")}}),f=e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),g=e("div",{id:"AreaTop"},[e("h1",{id:"area-page-title"}," Our working areas"),e("p",{id:"areas-page-description"},"On this page, you will find a comprehensive overview of our various working areas, each meticulously designed to support, nurture, and propel groundbreaking ideas and ambitious entrepreneurs forward. We understand that innovation knows no bounds, and we are committed to providing a diverse range of resources and expertise to fuel the success of ventures across industries. Whether you're an entrepreneur seeking funding or a startup enthusiast looking to explore the frontiers of innovation, our working areas offer a wealth of opportunities.")],-1),h={id:"areas-container"};function v(o,w,k,x,y,$){const i=s;return t(),r(a,null,[f,e("main",null,[g,e("div",h,[(t(!0),r(a,null,c(o.areas,n=>(t(),l(i,{id:"circle-container",title:n.name,link:"/areas/"+n.name,"img-url":"~/assets/img/"+n.name+"_area/"+n.name+"1.jpg"},null,8,["title","link","img-url"]))),256))])])],64)}const N=u(_,[["render",v]]);export{N as default};