import{_ as f,a as h}from"./TheFooter.0751c233.js";import{_ as x}from"./nuxt-link.70304179.js";import{d as $}from"./component.073c8d51.js";import{_ as b,g as n,a as c,b as a,F as i,r as g,C as v,o as _,w,d as k,t as N}from"./entry.1d8d09a2.js";const B=$({computed:{crumbs(){const t=this.$route.path.split("/");return t.shift(),t.reduce((e,o,s)=>(o&&e.push({to:e[s-1]?"/"+e[s-1].title+"/"+o:"/"+o,title:o}),e),[])}}}),C=c("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),F={class:"page"},T={class:"breadcrumb"};function V(t,l,e,o,s,y){const u=f,d=x,m=h;return _(),n(i,null,[C,c("div",F,[a(u),c("ol",T,[(_(!0),n(i,null,g(t.crumbs,(r,p)=>(_(),n("li",{key:p,class:"item"},[a(d,{to:r.to,class:"breadcrumb-item"},{default:w(()=>[k(N(r.title),1)]),_:2},1032,["to"])]))),128))]),v(t.$slots,"default"),a(m)])],64)}const L=b(B,[["render",V]]);export{L as default};