import{_ as v}from"./nuxt-link.e4197d54.js";import{o as s,g as n,b as i,w as c,a as t,t as a,_ as P,F as r,r as m,u as b,h as p,i as _,n as w,c as g}from"./entry.014b44eb.js";import{d as j}from"./component.0410ec16.js";import{u as h}from"./fetch.a9296ee0.js";import{C as E,S as L,P as S}from"./carousel.15842c87.js";const U={class:"project-card"},D={class:"proj-card"},N={class:"grid-container"},B={class:"img-container"},R=["src"],F={class:"text-container"},z={class:"info-cont"},A={id:"card-title"},I={id:"card-product"},V={id:"card-date"},Z={id:"card-location"},q={__name:"ProjectCardExtended",props:["title","imgUrl","link","product","date","location"],setup(e){return(l,u)=>{const d=v;return s(),n("div",U,[i(d,{to:e.link,class:"link-box"},{default:c(()=>[t("div",D,[t("div",N,[t("div",B,[t("img",{src:e.imgUrl,alt:"Immagine del progetto"},null,8,R)]),t("div",F,[t("div",z,[t("p",A,a(e.title),1),t("p",I,"Product / Service: "+a(e.product),1),t("p",V,"Date: "+a(e.date),1),t("p",Z,"Location: "+a(e.location),1)])])])])]),_:1},8,["to"])])}}};const J={class:"project-card_custom"},Q={class:"proj-card_custom"},X={class:"grid-container_custom"},G={class:"text-container_custom"},H={class:"info-cont_custom"},K={id:"card-title_custom"},M={id:"card-product_custom"},O={id:"card-date_custom"},T={id:"card-location_custom"},W={class:"img-container_custom"},Y=["src"],tt={__name:"ProjectCardExtendedCustom",props:["title","imgUrl","link","product","date","location"],setup(e){return(l,u)=>{const d=v;return s(),n("div",J,[i(d,{to:e.link,class:"link-box_custom"},{default:c(()=>[t("div",Q,[t("div",X,[t("div",G,[t("div",H,[t("p",K,a(e.title),1),t("p",M,"Product / Service: "+a(e.product),1),t("p",O,"Date: "+a(e.date),1),t("p",T,"Location: "+a(e.location),1)])]),t("div",W,[t("img",{src:e.imgUrl,alt:"Immagine del progetto"},null,8,Y)])])])]),_:1},8,["to"])])}}};const et=j({name:"Autoplay",components:{Carousel:E,Slide:L,Pagination:S},async asyncData(){const e=b();await h(p().public.serverURL+"/areas/"+e.params.id,"$LpZQ2Apvba"),await h(p().public.serverURL+"/projects/byarea/"+e.params.id,"$8eiaZJzUXi")},beforeDestroy(){document.querySelector("main").classList.remove("custom-background_area")}}),ot=t("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),at={class:"custom-background_area"},st={id:"carousel-container_area"},nt=["src"],it={id:"project-container_area"},ct={id:"top-single-area"},dt={id:"singlearea-title"},rt={id:"singlearea-page-description"};function _t(e,l,u,d,lt,ut){const $=_("Slide"),f=_("Pagination"),k=_("Carousel"),x=q,C=tt;return s(),n(r,null,[ot,t("main",at,[t("div",st,[i(k,{id:"carousel_area",autoplay:2e3,"wrap-around":!0,"items-to-show":1.1},{addons:c(()=>[i(f)]),default:c(()=>[(s(),n(r,null,m(3,o=>i($,{key:o},{default:c(()=>[t("img",{src:"~/assets/img/"+e.data[0].name+"_area/"+e.data[0].name+o+".jpg",class:w(["carousel__item_area",{"responsive-image":!0}])},null,8,nt)]),_:2},1024)),64))]),_:1},8,["items-to-show"])]),t("div",it,[t("div",ct,[t("h1",dt,a(e.area.name),1),t("p",rt,a(e.area.description),1)]),(s(!0),n(r,null,m(e.projects,(o,y)=>(s(),n(r,null,[y%2===0?(s(),g(x,{key:0,link:"/projects/"+o.name,title:o.name,"img-url":"~/assets/img/projects/"+o.name+"1.jpg",product:o.product_service,date:o.date,location:o.location},null,8,["link","title","img-url","product","date","location"])):(s(),g(C,{key:1,link:"/projects/"+o.name,title:o.name,"img-url":"~/assets/img/projects/"+o.name+"1.jpg",product:o.product_service,date:o.date,location:o.location},null,8,["link","title","img-url","product","date","location"]))],64))),256))])])],64)}const $t=P(et,[["render",_t]]);export{$t as default};