(this.webpackJsonpelecbits=this.webpackJsonpelecbits||[]).push([[0],{127:function(e,a,t){e.exports=t(246)},132:function(e,a,t){},133:function(e,a,t){},246:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),i=t.n(o),l=(t(132),t(29)),c=(t(133),t(54)),s=t(6),d=t(3),p=t(287),u=t(308),m=t(291),h=t(290),b=t(106),g=t.n(b),x=t(108),f=t.n(x),E=t(110),v=t.n(E),w=t(111),C=t.n(w),y=t(109),O=t.n(y),k=t(251),j=t(292),W=t(293),S=Object(p.a)((function(e){return{root:{display:"flex"},menuButton:{marginRight:36},hide:{display:"none"},drawer:{top:"64px",width:200,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{top:"64px",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(s.a)({top:"64px",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})),N=[{text:"Dashboard",icon:r.a.createElement(g.a,null)},{text:"UI Kit",icon:r.a.createElement(f.a,null)},{text:"Components",icon:r.a.createElement(O.a,null)},{text:"Icons",icon:r.a.createElement(v.a,null)},{text:"Fonts",icon:r.a.createElement(C.a,null)}],B=function(e){var a,t,n=e.open,o=S();return r.a.createElement(u.a,{variant:"permanent",className:Object(d.a)(o.drawer,(a={},Object(s.a)(a,o.drawerOpen,n),Object(s.a)(a,o.drawerClose,!n),a)),classes:{paper:Object(d.a)((t={},Object(s.a)(t,o.drawerOpen,n),Object(s.a)(t,o.drawerClose,!n),t))}},r.a.createElement(h.a,null),r.a.createElement(m.a,null,N.map((function(e,a){return r.a.createElement(k.a,{button:!0,key:e.text},r.a.createElement(j.a,null,e.icon),r.a.createElement(W.a,{primary:e.text}))}))),r.a.createElement(h.a,null))},z=t(10),R=t(296),T=t(297),D=t(295),A=t(60),I=t(306),L=t(294),M=t(307),F=t(112),H=t.n(F),P=t(113),G=t.n(P),$=t(75),J=t.n($),V=t(74),U=t.n(V),Y=t(114),K=t.n(Y),X=Object(p.a)((function(e){return{grow:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(z.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(s.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(s.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function q(e){var a=e.drawerOpen,t=e.handleDrawerOpen,n=e.handleDrawerClose,o=X(),i=r.a.useState(null),c=Object(l.a)(i,2),p=c[0],u=c[1],m=r.a.useState(null),h=Object(l.a)(m,2),b=h[0],g=h[1],x=Boolean(p),f=Boolean(b),E=function(e){u(e.currentTarget)},v=function(){g(null)},w=function(){u(null),v()},C="primary-search-account-menu",y=r.a.createElement(M.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:C,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:w},r.a.createElement(L.a,{onClick:w},"Profile"),r.a.createElement(L.a,{onClick:w},"My account")),O=r.a.createElement(M.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:v},r.a.createElement(L.a,null,r.a.createElement(D.a,{"aria-label":"",color:"inherit"},r.a.createElement(U.a,null)),r.a.createElement("p",null,"Settings")),r.a.createElement(L.a,{onClick:E},r.a.createElement(D.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(J.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:o.grow},r.a.createElement(R.a,{position:"fixed",className:Object(d.a)(o.appBar,Object(s.a)({},o.appBarShift,a))},r.a.createElement(T.a,null,r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",onClick:a?n:t,edge:"start",className:Object(d.a)(o.menuButton,Object(s.a)({},o.hide,a))},r.a.createElement(H.a,null)),r.a.createElement(A.a,{className:o.title,variant:"h6",noWrap:!0},"Elecbits"),r.a.createElement("div",{className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(G.a,null)),r.a.createElement(I.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:o.grow}),r.a.createElement("div",{className:o.sectionDesktop},r.a.createElement(D.a,{color:"inherit"},r.a.createElement(U.a,null)),r.a.createElement(D.a,{edge:"end","aria-label":"account of current user","aria-controls":C,"aria-haspopup":"true",onClick:E,color:"inherit"},r.a.createElement(J.a,null))),r.a.createElement("div",{className:o.sectionMobile},r.a.createElement(D.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){g(e.currentTarget)},color:"inherit"},r.a.createElement(K.a,null))))),O,y)}var Q=t(121),Z=t(115),_=t.n(Z),ee=Object(p.a)((function(e){var a;return{root:(a={WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",display:"flex",padding:"13px",width:"23%"},Object(s.a)(a,e.breakpoints.down("sm"),{width:"47%"}),Object(s.a)(a,e.breakpoints.down("xs"),{width:"100%"}),Object(s.a)(a,"marginBottom","10px"),Object(s.a)(a,"borderRadius","5px"),Object(s.a)(a,"height","100px"),Object(s.a)(a,"paddingTop","15px"),Object(s.a)(a,"boxShadow","0px 0px 4px 0px rgba(50, 50, 50, 0.5)"),Object(s.a)(a,"borderLeft","3px solid purple"),Object(s.a)(a,"backgroundColor","white"),a),iconDiv:{width:"40%",display:"flex",justifyContent:"center"},iconBadge:{WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",width:"60px",height:"60px",backgroundColor:"rgba(120, 0, 180, 0.4)",border:"3px solid rgb(120, 0, 180)",textAlign:"center",borderRadius:"50%",paddingTop:"7px"},textDiv:{width:"60%"},fullWidth:{width:"100%"}}})),ae=function(e){var a=e.data,t=ee();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{style:{fontSize:"32px",paddingTop:"5px"},className:t.iconDiv},r.a.createElement("div",{className:t.iconBadge},a.icon)),r.a.createElement("div",{className:t.textDiv},r.a.createElement("div",{style:{fontSize:"30px"},className:t.fullWidth},a.value),r.a.createElement("div",{className:t.fullWidth},a.text)))},te=t(117),ne=t.n(te),re=t(118),oe=t.n(re),ie=t(119),le=t.n(ie),ce=t(120),se=t.n(ce),de=t(33),pe={labels:["Blue","Gray"],datasets:[{data:[80,20],backgroundColor:["rgb(58, 234, 248)","#C9C9C9"],hoverBackgroundColor:["rgb(28, 184, 206)","#A1A1A1"]}]},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de.b,{data:pe,options:{responsive:!0,maintainAspectRatio:!0,cutoutPercentage:80}}))},me=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",textAlign:"center",paddingTop:"14px"},fullWidth:{width:"100%"},caption:{color:"gray",margin:"0px"}}})),he=function(e){var a=e.heading,t=e.value,n=e.fontWeight,o=e.width,i=me();return r.a.createElement("div",{style:{width:"".concat(o,"%")},className:i.root},r.a.createElement("div",{className:i.fullWidth},r.a.createElement(A.a,{paragraph:!0,className:i.caption},a)),r.a.createElement("div",{className:i.fullWidth},r.a.createElement(A.a,{variant:"h6",style:{fontWeight:n}},t)))},be=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",height:"100%",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",padding:"15px",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 4px 0px rgba(50, 50, 50, 0.5)"},flexContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap"},fullWidth:{width:"100%"},oneThirdWidth:{width:"32%"},textCenter:{textAlign:"center"}}})),ge=function(){var e=be();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.fullWidth},r.a.createElement(A.a,{variant:"h6",style:{fontWeight:"400",fontSize:"15px"}},"TOTAL REVENUE")),r.a.createElement(ue,null),r.a.createElement(he,{heading:"Total sales made today",value:"$75",width:100,fontWeight:500}),r.a.createElement("div",{className:"".concat(e.fullWidth," ").concat(e.flexContainer)},r.a.createElement(he,{heading:"Target",value:"$1000",width:32,fontWeight:400}),r.a.createElement(he,{heading:"Last Week",value:"$523",width:32,fontWeight:400}),r.a.createElement(he,{heading:"Last Month",value:"$965",width:32,fontWeight:400})))},xe={labels:["2008","2009","2010","2011","2012","2013","2014","2015"],datasets:[{label:"Desktops",fill:!1,lineTension:.3,backgroundColor:"rgba(162, 98, 240, 0.4)",borderColor:"rgba(162, 98, 240, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(162, 98, 240, 1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(162, 98, 240, 1)",pointHoverBorderColor:"rgba(162, 98, 240, 1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[50,75,25,50,75,50,75,100]},{label:"Tablets",fill:!1,lineTension:.3,backgroundColor:"rgba(58, 234, 248, 0.4)",borderColor:"rgba(58, 234, 248, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(58, 234, 248, 1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(58, 234, 248, 1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:[0,50,75,50,15,35,40,50]}]},fe=function(){return r.a.createElement("div",null,r.a.createElement(de.c,{data:xe,width:500,height:300,options:{responsive:!0}}))},Ee=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"0px",marginRight:"0px",height:"100%",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",padding:"15px",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 4px 0px rgba(50, 50, 50, 0.5)"},fullWidth:{width:"100%"}}})),ve=function(){var e=Ee();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.fullWidth},r.a.createElement(A.a,{variant:"h6",style:{fontWeight:"400",fontSize:"15px"}},"TOTAL SALES")),r.a.createElement("div",{className:e.fullWidth},r.a.createElement(fe,null)))},we={maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{stacked:!0,barPercentage:1,categoryPercentage:.8}],yAxes:[{stacked:!0}]}},Ce={labels:["2005","","2007","","2009","","2011","","2013","","2015"],datasets:[{stack:"stack1",label:"Desktops",backgroundColor:"rgba(162, 98, 240, 1)",data:[50,75,100,75,100,75,50,75,50,75,100]},{stack:"stack1",label:"Tablets",backgroundColor:"rgba(162, 98, 240, 0.7)",data:[150,50,75,50,75,50,25,50,25,50,75]},{stack:"stack1",label:"Mobiles",backgroundColor:"rgba(162, 98, 240, 0.3)",data:[100,75,50,75,50,75,50,25,50,50,100]}]},ye=function(){return r.a.createElement("div",null,r.a.createElement(de.a,{data:Ce,width:500,height:300,options:we}))},Oe=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",height:"100%",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",padding:"15px",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 4px 0px rgba(50, 50, 50, 0.5)"},fullWidth:{width:"100%"}}})),ke=function(){var e=Oe();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.fullWidth},r.a.createElement(A.a,{variant:"h6",style:{fontWeight:"400",fontSize:"15px"}},"SALES ANALYTICS")),r.a.createElement("div",{className:e.fullWidth},r.a.createElement(ye,null)))},je=t(304),We=t(299),Se=t(303),Ne=t(302),Be=t(298),ze=t(300),Re=t(301),Te=t(248),De=Object(p.a)({table:{minWidth:650}});function Ae(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}Ae("Frozen yoghurt",159,6,24,4),Ae("Ice cream sandwich",237,9,37,4.3),Ae("Eclair",262,16,24,6),Ae("Cupcake",305,3.7,67,4.3),Ae("Gingerbread",356,16,49,3.9);var Ie=function(e){var a=e.data,t=De();return r.a.createElement(Be.a,{component:Te.a},r.a.createElement(We.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(ze.a,null,r.a.createElement(Re.a,null,r.a.createElement(Ne.a,null,"Product"),r.a.createElement(Ne.a,{align:"right"},"Order Date"),r.a.createElement(Ne.a,{align:"right"},"Order Number"),r.a.createElement(Ne.a,{align:"right"},"Amount"),r.a.createElement(Ne.a,{align:"right"},"Action"))),r.a.createElement(Se.a,null,a.map((function(e){return r.a.createElement(Re.a,{key:e.product},r.a.createElement(Ne.a,{component:"th",scope:"row"},e.product),r.a.createElement(Ne.a,{align:"right"},e.orderDate),r.a.createElement(Ne.a,{align:"right"},e.orderNumber),r.a.createElement(Ne.a,{align:"right"},e.amount),r.a.createElement(Ne.a,{align:"right"}))})))))},Le=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"0px",height:"100%",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",padding:"15px",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 4px 0px rgba(50, 50, 50, 0.5)"},row:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"100%"},fullWidth:{width:"100%"},halfWidth:{width:"50%"}}})),Me=function(e){var a=e.data,t=Le();return console.log(a),r.a.createElement("div",{className:"".concat(t.root," ").concat(t.fullWidth)},r.a.createElement("div",{className:t.row},r.a.createElement("div",{className:t.halfWidth},r.a.createElement(A.a,{variant:"h6",style:{fontWeight:"400",fontSize:"15px"}},"RECENT ORDERS"),r.a.createElement(A.a,{paragraph:!0,style:{fontSize:"10px",color:"gray"}},"Your awesome text goes here")),r.a.createElement("div",{style:{textAlign:"right"},className:t.halfWidth},r.a.createElement(je.a,{style:{fontSize:"10px"},variant:"contained",color:"primary"},"View All"))),r.a.createElement("div",{className:t.row},r.a.createElement(Ie,{data:a})))},Fe=Object(p.a)((function(e){return{root:{display:"flex",backgroundColor:"#EEEEEE"},toolbar:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},row:Object(s.a)({display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginBottom:"20px"},e.breakpoints.down("sm"),{marginBottom:"0px"}),chartContainerSmall:{width:"39%"},chartContainerMedium:{width:"49%"},chartContainerLarge:{width:"59%"},chartContainer:Object(s.a)({marginTop:"0px"},e.breakpoints.down("sm"),{width:"100%",marginBottom:"15px"})}})),He=[{id:1,icon:r.a.createElement(ne.a,null),text:"Total Revenue",value:0,color:"blue"},{id:2,icon:r.a.createElement(oe.a,null),text:"Today's Sales",value:0,color:"purple"},{id:3,icon:r.a.createElement(le.a,null),text:"conversion",value:0,color:"blue"},{id:4,icon:r.a.createElement(se.a,null),text:"Today's Visits",value:0,color:"purple"}],Pe=function(){var e=Fe(),a=Object(n.useState)(null),t=Object(l.a)(a,2),o=t[0],i=t[1],c=Object(n.useState)(He),s=Object(l.a)(c,2),d=s[0],p=s[1];return Object(n.useEffect)((function(){_.a.get("https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test").then((function(e){var a=e.data;console.log(a),i(a);var t=Object(Q.a)(d);t[0].value=a.dataForTopFourBoxes.totalRevenue,t[1].value=a.dataForTopFourBoxes.todaysSales,t[2].value=a.dataForTopFourBoxes.conversion,t[3].value=a.dataForTopFourBoxes.todaysVisits,p(t)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement("div",null,r.a.createElement(A.a,{variant:"h5",component:"h5"},"Dashboard"),r.a.createElement(A.a,{paragraph:!0,color:"secondary"},"Welcome to Elecbits admin panel!")),r.a.createElement("div",{className:"".concat(e.row," ").concat(e.chartContainer)},d.map((function(e){return r.a.createElement(ae,{key:e.id,data:e})}))),r.a.createElement("div",{className:e.row},r.a.createElement("div",{className:"".concat(e.chartContainerSmall," ").concat(e.chartContainer)},r.a.createElement(ge,null)),r.a.createElement("div",{className:"".concat(e.chartContainerLarge," ").concat(e.chartContainer)},r.a.createElement(ve,null))),r.a.createElement("div",{className:e.row},r.a.createElement("div",{className:"".concat(e.chartContainerSmall," ").concat(e.chartContainer)},r.a.createElement(ke,null)),r.a.createElement("div",{className:"".concat(e.chartContainerLarge," ").concat(e.chartContainer)},r.a.createElement(Me,{data:null!==o?o.dataForBottomRightTable:[]})))))},Ge=Object(p.a)((function(e){return{root:{display:"flex"}}})),$e=function(){var e=Ge(),a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(q,{drawerOpen:o,handleDrawerClose:function(){i(!1)},handleDrawerOpen:function(){i(!0)}}),r.a.createElement(B,{open:o}),r.a.createElement(Pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.aec25a30.chunk.js.map