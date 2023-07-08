import{_ as m}from"./nuxt-link.70304179.js";import{o as d,g as _,b as c,w as u,a,t as s,_ as g,d as o,F as h,u as j,h as n}from"./entry.1d8d09a2.js";import{d as v}from"./component.073c8d51.js";import{u as i}from"./fetch.f20a2cdc.js";const f={class:"small-circle-container"},b={class:"small-circle"},y=["src"],$={class:"circle-title"},k={__name:"SmallCircleContainer",props:["title","link","imgUrl"],setup(t){return(e,p)=>{const r=m;return d(),_("div",f,[c(r,{to:t.link,class:"circle-link"},{default:u(()=>[a("div",b,[a("img",{src:t.imgUrl,alt:"Immagine del topic"},null,8,y)]),a("p",$,s(t.title),1)]),_:1},8,["to"])])}}};const w=v({async asyncData(){const t=j(),e=[];return e[0]=await i(n().public.serverURL+"/projects/"+t.params.id,"$NLv8nVzATR"),e[1]=await i(n().public.serverURL+"/projects/"+t.params.id+"/area","$kQEDeYUFLT"),e[2]=await i(n().public.serverURL+"/projects/"+t.params.id+"/supervisor","$AVExNmwMbt"),{data:e}}}),C=a("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),N={class:"project-presentation-page"},L={class:"project-info-container"},R={id:"project-name",class:"data-name"},S={id:"project-presentation",class:"data-presentation"},U=a("span",{class:"data-category"}," Project presentation:",-1),P={id:"project-location",class:"data-location"},V=a("span",{class:"data-category"},"Project location:",-1),F={id:"project-date",class:"data-timestamp"},A=a("span",{class:"data-category"},"Project date:",-1),B={id:"project-startup",class:"data-startup"},D=a("span",{class:"data-category"},"Startup managing the project:",-1),E={id:"project-product",class:"data-product"},T=a("span",{class:"data-category"},"Product offered:",-1),z={id:"cv"},I={class:"bubbles-container"},M={class:"supervisor-bubble"},Q={class:"area-bubble"},Y={class:"project-images"},q=["src"],G=["src"],H=["src"],J=["src"];function K(t,e,p,r,O,W){const l=k;return d(),_(h,null,[C,a("main",null,[a("div",N,[a("div",L,[a("h1",R,[a("span",null,s(t.data[0].name),1)]),a("p",S,[U,o(" "+s(t.data[0].presentation),1)]),a("p",P,[V,o(" "+s(t.data[0].location),1)]),a("p",F,[A,o(" "+s(t.data[0].date),1)]),a("p",B,[D,o(" "+s(t.data[0].start_up),1)]),a("p",E,[T,o(" "+s(t.data[0].product_service),1)]),a("p",z,s(t.data[0].cv),1)]),a("div",I,[a("div",M,[c(l,{title:"Supervisor: "+t.data[2].person_name,link:"/team/"+t.data[2].person_name,"img-url":"~/assets/img/team/"+t.data[2].person_name+".jpeg"},null,8,["title","link","img-url"])]),a("div",Q,[c(l,{title:"Project Area: "+t.data[1].area_name,link:"/areas/"+t.data[1].area_name,"img-url":"~/assets/img/"+t.data[1].area_name+"_area/"+t.data[1].area_name+"1.jpg"},null,8,["title","link","img-url"])])])]),a("div",Y,[a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"1.jpg"},null,8,q),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"2.jpg"},null,8,G),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"3.jpg"},null,8,H),a("img",{class:"image",src:"~/assets/img/projects/"+t.data[0].name+"4.jpg"},null,8,J)])])],64)}const ta=g(w,[["render",K]]);export{ta as default};
