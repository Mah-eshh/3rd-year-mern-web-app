(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),o=n(15),i=n(64),s=n(126),l=n(45),u=n(7),d="CREATE",p="UPDATE",b="DELETE",j="FETCH_ALL",m="FETCH_BY_SEARCH",h="FETCH_POST",g="LIKE",f="COMMENT",x="END_LOADING",O="START_LOADING",v="AUTH",y="LOGOUT",w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},null===t||void 0===t?void 0:t.data))),Object(u.a)(Object(u.a)({},e),{},{authData:t.data,loading:!1,errors:null});case y:return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},C=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1});case j:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case m:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.data});case h:return Object(u.a)(Object(u.a)({},e),{},{post:t.payload.post});case g:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case f:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id==+t.payload._id?t.payload:e}))});case d:return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[t.payload])});case p:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case b:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:w}),k=n(22),S=n(245),N=n(26),I=n(18),B=n(143),A=n(235),D=n(213),F=n(236),E=n(78),T=n.n(E),_=n(10),L=n.n(_),W=n(19),P=n(127),z=n.n(P).a.create({baseURL:"http://localhost:5000"});z.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var R=function(e){return z.get("/posts/".concat(e))},H=function(e){return z.get("/posts?page=".concat(e))},M=function(e){return z.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},G=function(e){return z.patch("/posts/".concat(e,"/likePost"))},J=function(e,t){return z.post("/posts/".concat(t,"/commentPost"),{value:e})},U=function(e,t){return z.patch("/posts/".concat(e),t)},Y=function(e){return z.delete("/posts/".concat(e))},V=function(e){return z.post("/user/signin",e)},q=function(e){return z.post("/user/signup",e)},Q=function(e){return function(){var t=Object(W.a)(L.a.mark((function t(n){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,M(e);case 4:a=t.sent,c=a.data.data,n({type:m,payload:{data:c}}),n({type:x}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e,t){return function(){var n=Object(W.a)(L.a.mark((function n(a){var c,r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:O}),n.next=4,o=e,z.post("/posts",o);case 4:c=n.sent,r=c.data,a({type:d,payload:r}),t.push("/posts/".concat(r._id)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}var o}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},K=function(e,t){return function(){var n=Object(W.a)(L.a.mark((function n(a){var c,r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U(e,t);case 3:c=n.sent,r=c.data,a({type:p,payload:r}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(W.a)(L.a.mark((function t(n){var a,c,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,G(e,null===a||void 0===a||a.token);case 4:c=t.sent,r=c.data,n({type:g,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},$=function(e,t){return function(){var n=Object(W.a)(L.a.mark((function n(a){var c,r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J(e,t);case 3:return c=n.sent,r=c.data,a({type:f,payload:r}),n.abrupt("return",r.comments);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},ee=n(14),te=n(232),ne=Object(te.a)((function(e){var t;return{media:{borderRadius:"10px",objectFit:"cover",width:"100%",maxHeight:"280px"},card:Object(ee.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"10px",margin:"10px",flex:1,backgroundColor:"#A0CFEC",backgroundImage:"url(https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png)",backgroundSize:"cover"},imageSection:(t={marginLeft:"12px"},Object(ee.a)(t,e.breakpoints.down("sm"),{marginLeft:0}),Object(ee.a)(t,"marginTop","10px"),t),recommendedPosts:Object(ee.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"10px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"180px",overflowY:"auto",marginRight:"40px"},comment:{backgroundColor:"#E2E4E1",width:"350px",height:"100px"},commentBtn:{backgroundColor:"blue",width:"350px"}}})),ae=n(248),ce=n(234),re=n(2),oe=function(e){var t=e.post,n=JSON.parse(localStorage.getItem("profile")),c=Object(a.useState)(""),r=Object(k.a)(c,2),i=r[0],s=r[1],l=Object(o.b)(),u=Object(a.useState)(null===t||void 0===t?void 0:t.comments),d=Object(k.a)(u,2),p=d[0],b=d[1],j=ne(),m=Object(a.useRef)(),h=function(){var e=Object(W.a)(L.a.mark((function e(){var a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l($("".concat(null===n||void 0===n||null===(a=n.result)||void 0===a?void 0:a.name,": ").concat(i),t._id));case 2:c=e.sent,s(""),b(c),m.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(re.jsx)("div",{children:Object(re.jsxs)("div",{className:j.commentsOuterContainer,children:[Object(re.jsxs)("div",{className:j.commentsInnerContainer,children:[Object(re.jsx)(D.a,{gutterBottom:!0,variant:"h6",children:"Comments"}),null===p||void 0===p?void 0:p.map((function(e,t){return Object(re.jsxs)(D.a,{gutterBottom:!0,variant:"subtitle1",children:[Object(re.jsx)("strong",{children:e.split(": ")[0]}),e.split(":")[1]]},t)})),Object(re.jsx)("div",{ref:m})]}),Object(re.jsxs)("div",{style:{width:"40%"},children:[Object(re.jsx)(D.a,{gutterBottom:!0,variant:"h6",children:"Comment Here"}),Object(re.jsx)(ae.a,{className:j.comment,fullWidth:!0,rows:2,variant:"outlined",label:"Comment",multiline:!0,value:i,onChange:function(e){return s(e.target.value)}}),Object(re.jsx)("br",{}),Object(re.jsx)(ce.a,{className:j.commentBtn,style:{marginTop:"10px"},fullWidth:!0,disabled:!i.length,color:"primary",variant:"contained",onClick:h,children:"Comment"})]})]})})},ie=function(){var e=Object(o.c)((function(e){return e.posts})),t=e.post,n=e.posts,c=e.isLoading,r=Object(o.b)(),i=Object(I.g)(),s=ne(),l=Object(I.i)().id;if(Object(a.useEffect)((function(){r(function(e){return function(){var t=Object(W.a)(L.a.mark((function t(n){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,R(e);case 4:a=t.sent,c=a.data,n({type:h,payload:{post:c}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(l))}),[l]),Object(a.useEffect)((function(){t&&r(Q({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(c)return Object(re.jsx)(B.a,{elevation:3,className:s.loadingPaper,children:Object(re.jsx)(A.a,{size:"7em"})});var u=n.filter((function(e){return e._id!==t._id}));return Object(re.jsxs)(B.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:[Object(re.jsxs)("div",{className:s.card,children:[Object(re.jsxs)("div",{className:s.section,children:[Object(re.jsx)(D.a,{variant:"h4",component:"h1",children:t.title}),Object(re.jsx)(D.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(re.jsx)(D.a,{gutterBottom:!0,variant:"body1",component:"p",children:t.message}),Object(re.jsxs)(D.a,{variant:"h6",children:["Writen by: ",t.name]}),Object(re.jsx)(D.a,{variant:"body1",children:T()(t.createdAt).fromNow()}),Object(re.jsx)(oe,{post:t,children:" "})]}),Object(re.jsx)("div",{className:s.imageSection,children:Object(re.jsx)("img",{className:s.media,src:t.selectedFile||"https://i.ibb.co/vB2QVg2/mypic.jpg",alt:t.title})})]}),!!u.length&&Object(re.jsxs)("div",{className:s.section,children:[Object(re.jsx)(D.a,{gutterBottom:!0,variant:"h5",children:"You might also like:"}),Object(re.jsx)(F.a,{}),Object(re.jsx)("div",{className:s.recommendedPosts,children:u.map((function(e){var t=e.title,n=e.name,a=e.message,c=e.likes,r=e.selectedFile,o=e._id;return Object(re.jsxs)("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(o)},children:[Object(re.jsx)(D.a,{gutterBottom:!0,variant:"h5",children:t}),Object(re.jsx)(D.a,{gutterBottom:!0,variant:"subtitle2",children:n}),Object(re.jsx)(D.a,{gutterBottom:!0,variant:"subtitle2",children:a}),Object(re.jsxs)(D.a,{gutterBottom:!0,variant:"subtitle1",children:["Likes: ",c.length]}),Object(re.jsx)("img",{src:r,width:"100px"})]},o)}))})]})]})},se=n(238),le=n(239),ue=n(251),de=n(132),pe=n.p+"static/media/myblog.bad0425f.png",be=n.p+"static/media/myblogicon.fbb485e0.png",je=n(237),me=Object(te.a)((function(e){var t;return{appBar:Object(ee.a)({backgroundColor:"#78d2",borderRadius:3,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 10px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"15px"},myName:{height:"105px",width:"210px",marginLeft:"50px"},toolbar:Object(ee.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:(t={display:"flex",justifyContent:"space-between",width:"700px",alignItems:"center"},Object(ee.a)(t,e.breakpoints.down("sm"),{width:"auto"}),Object(ee.a)(t,"marginRight","10px"),Object(ee.a)(t,"fontFamily","Century Gothic"),Object(ee.a)(t,"fontSize",15),t),logout:{backgroundColor:je.a[800],marginLeft:"80px",fontFamily:"Century Gothic",fontSize:15,adding:"16px"},userName:{display:"flex",alignItems:"center",textAlign:"center",height:"40px",width:"50px"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(je.a[500]),backgroundColor:je.a[500],marginLeft:"25px"},myRoutes:{color:"rgba(8,83,255, 5)",fontSize:"2em",fontWeight:300,margin:"5px",marginRight:"10px"}}})),he=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(o.b)(),i=Object(I.h)(),s=Object(I.g)(),l=me(),u=function(){r({type:y}),s.push("/auth"),c(null)};return Object(a.useEffect)((function(){var e=null===n||void 0===n?void 0:n.token;e&&(1e3*Object(de.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[i]),Object(re.jsxs)(se.a,{className:l.appBar,position:"static",color:"inherit",children:[Object(re.jsxs)(N.b,{to:"/",className:l.brandContainer,children:[Object(re.jsx)("img",{className:l.image,src:be,alt:"icon",height:"100px"})," ",Object(re.jsx)("img",{className:l.myName,component:N.b,to:"/",src:pe,alt:"icon"})]}),Object(re.jsx)(le.a,{className:l.toolbar,children:(null===n||void 0===n?void 0:n.result)?Object(re.jsxs)("div",{className:l.profile,children:[Object(re.jsx)(N.c,{className:l.myRoutes,to:"/posts",activeStyle:!0,children:"Home"}),Object(re.jsx)(N.c,{className:l.myRoutes,to:"/about",activeStyle:!0,children:"About"}),Object(re.jsx)(N.c,{className:l.myRoutes,to:"/contact",activeStyle:!0,children:"Contact"}),Object(re.jsx)(ue.a,{className:l.purple,alt:null===n||void 0===n?void 0:n.result.name,src:null===n||void 0===n?void 0:n.result.imageUrl,children:null===n||void 0===n?void 0:n.result.name.charAt(0)}),Object(re.jsx)(D.a,{className:l.userName,variant:"h6",children:null===n||void 0===n?void 0:n.result.name}),Object(re.jsx)(ce.a,{variant:"contained",className:l.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(re.jsx)(ce.a,{component:N.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},ge=n(250),fe=n(244),xe=n(85),Oe=n.n(xe),ve=n(240),ye=n(145),we=n(241),Ce=n(242),ke=n(243),Se=n(133),Ne=n.n(Se),Ie=n(135),Be=n.n(Ie),Ae=n(134),De=n.n(Ae),Fe=n(98),Ee=n.n(Fe),Te=Object(te.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(5, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",position:"relative",backgroundColor:"#B1B9B9"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 18px",color:"#323385"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),_e=function(e){var t,n,c,r,i,s=e.post,u=e.setCurrentId,d=JSON.parse(localStorage.getItem("profile")),p=Object(a.useState)(null===s||void 0===s?void 0:s.likes),j=Object(k.a)(p,2),m=j[0],h=j[1],g=Object(o.b)(),f=Object(I.g)(),x=Te(),O=(null===d||void 0===d?void 0:d.result.googleId)||(null===d||void 0===d||null===(t=d.result)||void 0===t?void 0:t._id),v=s.likes.find((function(e){return e===O})),y=function(){var e=Object(W.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(X(s._id)),h(v?s.likes.filter((function(e){return e!==O})):[].concat(Object(l.a)(s.likes),[O]));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return m.length>0?m.find((function(e){return e===O}))?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Ne.a,{fontSize:"small"}),"\xa0",m.length>2?"You and ".concat(m.length-1," others"):"".concat(m.length," like").concat(m.length>1?"s":"")]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Ee.a,{fontSize:"small"}),"\xa0",m.length," ",1===m.length?"Like":"Likes"]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Ee.a,{fontSize:"small"}),"\xa0Like"]})};return Object(re.jsxs)(ve.a,{className:x.card,raised:!0,elevation:6,children:[Object(re.jsxs)(ye.a,{component:"span",name:"test",className:x.cardAction,onClick:function(e){f.push("/posts/".concat(s._id))},children:[Object(re.jsx)(we.a,{className:x.media,image:s.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:s.title}),Object(re.jsxs)("div",{className:x.overlay,children:[Object(re.jsx)(D.a,{variant:"h6",children:s.name}),Object(re.jsx)(D.a,{variant:"body2",children:T()(s.createdAt).fromNow()})]}),((null===d||void 0===d||null===(n=d.result)||void 0===n?void 0:n.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===d||void 0===d||null===(c=d.result)||void 0===c?void 0:c._id)===(null===s||void 0===s?void 0:s.creator))&&Object(re.jsx)("div",{className:x.overlay2,name:"edit",children:Object(re.jsx)(ce.a,{onClick:function(e){e.stopPropagation(),u(s._id)},style:{color:"white"},size:"small",children:Object(re.jsx)(De.a,{fontSize:"default"})})}),Object(re.jsx)("div",{className:x.details,children:Object(re.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"h2",children:s.tags.map((function(e){return"#".concat(e," ")}))})}),Object(re.jsx)(D.a,{className:x.title,gutterBottom:!0,variant:"h5",component:"h2",children:s.title}),Object(re.jsx)(Ce.a,{children:Object(re.jsxs)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:[s.message.split(" ").splice(0,20).join(" "),"..."]})})]}),Object(re.jsxs)(ke.a,{className:x.cardActions,children:[Object(re.jsx)(ce.a,{size:"small",color:"primary",disabled:!(null===d||void 0===d?void 0:d.result),onClick:y,children:Object(re.jsx)(w,{})}),((null===d||void 0===d||null===(r=d.result)||void 0===r?void 0:r.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===d||void 0===d||null===(i=d.result)||void 0===i?void 0:i._id)===(null===s||void 0===s?void 0:s.creator))&&Object(re.jsxs)(ce.a,{size:"small",color:"secondary",onClick:function(){return g((e=s._id,function(){var t=Object(W.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:n({type:b,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(re.jsx)(Be.a,{fontSize:"small"})," \xa0 Delete"]})]})]})},Le=Object(te.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(je.a[500]),backgroundColor:je.a[500]}},Object(ee.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"55px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(ee.a)(t,"actionDiv",{textAlign:"center"}),t})),We=function(e){var t=e.setCurrentId,n=Object(o.c)((function(e){return e.posts})),a=n.posts,c=n.isLoading,r=Le();return a.length||c?c?Object(re.jsx)(A.a,{}):Object(re.jsx)(fe.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3,children:null===a||void 0===a?void 0:a.map((function(e){return Object(re.jsx)(fe.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(re.jsx)(_e,{post:e,setCurrentId:t})},e._id)}))}):"No posts"},Pe=n(136),ze=n.n(Pe),Re=Object(te.a)((function(e){var t;return t={root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(1),backgroundColor:"#98AFC7"},blogTopic:{fontWeight:50,fontSize:20,fontFamily:"Trebuchet MS"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},blogForm:{backgroundColor:"#77BFC7"},titleInput:{backgroundColor:"#D3D3D3"},blogWordsInput:{backgroundColor:"#D3D3D3"}},Object(ee.a)(t,"fileInput",{backgroundColor:"#C6AEC7"}),Object(ee.a)(t,"buttonSubmit",{marginBottom:10,backgroundColor:"#2B65EC",fontWeight:600,fontSize:15,fontFamily:"Microsoft YaHei"}),Object(ee.a)(t,"buttonClear",{backgroundColor:"#FF1493",fontWeight:700,fontSize:15}),t})),He=function(e){var t,n=e.currentId,c=e.setCurrentId,r=Object(a.useState)({title:"",message:"",tags:[],selectedFile:""}),i=Object(k.a)(r,2),s=i[0],d=i[1],p=Object(o.c)((function(e){return n?e.posts.posts.find((function(e){return e._id===n})):null})),b=Object(o.b)(),j=Re(),m=JSON.parse(localStorage.getItem("profile")),h=Object(I.g)(),g=function(){c(0),d({title:"",message:"",tags:[],selectedFile:""})};Object(a.useEffect)((function(){(null===p||void 0===p?void 0:p.title)||g(),p&&d(p)}),[p]);var f=function(){var e=Object(W.a)(L.a.mark((function e(t){var a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(b(Z(Object(u.a)(Object(u.a)({},s),{},{name:null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.name}),h)),g()):(b(K(n,Object(u.a)(Object(u.a)({},s),{},{name:null===m||void 0===m||null===(c=m.result)||void 0===c?void 0:c.name}))),g());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.name))return Object(re.jsx)(B.a,{className:j.paper,elevation:6,children:Object(re.jsx)(D.a,{variant:"h6",align:"center",children:"If you need to Create your own blog article you must Sign In. Don't you have an account, you can create a new one or Google Sign Up is also available."})});return Object(re.jsx)(B.a,{className:j.paper,elevation:6,children:Object(re.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:f,children:[Object(re.jsx)(D.a,{className:j.blogTopic,variant:"h6",children:n?'Editing "'.concat(null===p||void 0===p?void 0:p.title,'"'):"Write Your Blog Here!..."}),Object(re.jsx)(ae.a,{className:j.titleInput,name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return d(Object(u.a)(Object(u.a)({},s),{},{title:e.target.value}))}}),Object(re.jsx)(ae.a,{className:j.blogWordsInput,name:"message",variant:"outlined",label:"Write",fullWidth:!0,multiline:!0,rows:14,value:s.message,onChange:function(e){return d(Object(u.a)(Object(u.a)({},s),{},{message:e.target.value}))}}),Object(re.jsx)("div",{style:{padding:"5px 0",width:"94%"},children:Object(re.jsx)(Oe.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onAdd:function(e){return t=e,void d(Object(u.a)(Object(u.a)({},s),{},{tags:[].concat(Object(l.a)(s.tags),[t])}));var t},onDelete:function(e){return t=e,void d(Object(u.a)(Object(u.a)({},s),{},{tags:s.tags.filter((function(e){return e!==t}))}));var t}})}),Object(re.jsx)("div",{className:j.fileInput,children:Object(re.jsx)(ze.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return d(Object(u.a)(Object(u.a)({},s),{},{selectedFile:t}))}})}),Object(re.jsx)(ce.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(re.jsx)(ce.a,{className:j.buttonClear,variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0,children:"Clear"})]})})},Me=n(252),Ge=n(249),Je=Object(te.a)((function(){return{ul:{justifyContent:"space-around"}}})),Ue=function(e){var t=e.page,n=Object(o.c)((function(e){return e.posts})).numberOfPages,c=Object(o.b)(),r=Je();return Object(a.useEffect)((function(){t&&c(function(e){return function(){var t=Object(W.a)(L.a.mark((function t(n){var a,c,r,o,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,H(e);case 4:a=t.sent,c=a.data,r=c.data,o=c.currentPage,i=c.numberOfPages,n({type:j,payload:{data:r,currentPage:o,numberOfPages:i}}),n({type:x}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[c,t]),Object(re.jsx)(Me.a,{classes:{ul:r.ul},count:n,page:Number(t)||1,variant:"outlined",color:"standard",renderItem:function(e){return Object(re.jsx)(Ge.a,Object(u.a)(Object(u.a)({},e),{},{component:N.b,to:"/posts?page=".concat(e.page)}))}})},Ye=Object(te.a)((function(e){return{appBarSearch:{borderRadius:5,marginBottom:"1rem",display:"flex",padding:"16px",backgroundColor:"#98AFC7"},pagination:{borderRadius:50,padding:"16px",marginLeft:"780px",marginBottom:"10px",backgroundImage:"url(https://wallpaperaccess.com/full/1567834.jpg)"},gridContainer:Object(ee.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"}),inputBar:{backgroundColor:"#F08080"},searchMemo:{backgroundColor:"#D3D3D3"},searchTag:{backgroundColor:"#D3D3D3"},searchButton:{backgroundColor:"#157DEC",fontFamily:"Malgun Gothic",fontWeight:900,fontSize:15}}}));var Ve=function(){var e=Ye(),t=new URLSearchParams(Object(I.h)().search),n=t.get("page")||1,c=t.get("searchQuery"),r=Object(a.useState)(0),i=Object(k.a)(r,2),s=i[0],u=i[1],d=Object(o.b)(),p=Object(a.useState)(""),b=Object(k.a)(p,2),j=b[0],m=b[1],h=Object(a.useState)([]),g=Object(k.a)(h,2),f=g[0],x=g[1],O=Object(I.g)(),v=function(){j.trim()||f?(d(Q({search:j,tags:f.join(",")})),O.push("/posts/search?searchQuery=".concat(j||"none","&tags=").concat(f.join(",")))):O.push("/")};return Object(re.jsx)(ge.a,{in:!0,children:Object(re.jsx)(S.a,{maxWidth:"xl",children:Object(re.jsxs)(fe.a,{className:e.gridContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(re.jsx)(fe.a,{item:!0,xs:12,sm:6,md:9,children:Object(re.jsx)(We,{setCurrentId:u})}),Object(re.jsxs)(fe.a,{item:!0,xs:12,sm:6,md:3,children:[Object(re.jsxs)(se.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(re.jsx)(ae.a,{className:e.searchMemo,onKeyDown:function(e){13===e.keyCode&&v()},name:"search",variant:"outlined",label:"Search Blogs",fullWidth:!0,value:j,onChange:function(e){return m(e.target.value)}}),Object(re.jsx)(Oe.a,{className:e.searchTag,style:{margin:"10px 0"},value:f,onAdd:function(e){return t=e,x([].concat(Object(l.a)(f),[t]));var t},onDelete:function(e){return t=e,x(f.filter((function(e){return e!==t})));var t},label:"Search Tags",variant:"outlined"}),Object(re.jsx)(ce.a,{className:e.searchButton,onClick:v,variant:"contained",color:"primary",children:"Search"})]}),Object(re.jsx)(He,{currentId:s,setCurrentId:u})]}),!c&&!f.length&&Object(re.jsx)(B.a,{className:e.pagination,elevation:6,children:Object(re.jsx)(Ue,{page:n})})]})})})},qe=n(137),Qe=n(140),Ze=n.n(Qe),Ke=function(){return Object(re.jsx)("svg",{style:{width:"30px",height:"30px"},viewBox:"0 0 24 24",children:Object(re.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Xe=Object(te.a)((function(e){return{paper:{marginTop:e.spacing(-3),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(4),backgroundSize:"cover",backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXEvYZCjsBshECJhifAzklgOBmYm-leC2kT-Wl3EsJEP5ghhFWEeAmkG_i_ywwYcat6A&usqp=CAU)"},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),fontFamily:"Comic Sans MS"},submit:{margin:e.spacing(3,0,2),backgroundColor:"#2B65EC",height:"40px",width:"330px",fontSize:"15px",color:"#ffff",fontFamily:"Verdana"},googleButton:{marginBottom:e.spacing(5),backgroundColor:"#1669F2",fontSize:"15px",color:"#ffff",fontFamily:"Verdana"},signInUpBtn:{color:"#ffff",fontSize:"13px",fontFamily:"Verdana"}}})),$e=n(246),et=n(247),tt=n(138),nt=n.n(tt),at=n(139),ct=n.n(at),rt=function(e){var t=e.name,n=e.handleChange,a=e.label,c=e.half,r=e.autoFocus,o=e.type,i=e.handleShowPassword;return Object(re.jsx)(fe.a,{item:!0,xs:12,sm:c?6:12,children:Object(re.jsx)(ae.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:r,type:o,InputProps:"password"===t?{endAdornment:Object(re.jsx)($e.a,{position:"end",children:Object(re.jsx)(et.a,{onClick:i,children:"password"===o?Object(re.jsx)(nt.a,{}):Object(re.jsx)(ct.a,{})})})}:null})})},ot={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},it=function(){var e=Object(a.useState)(ot),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(k.a)(r,2),s=i[0],l=i[1],d=Object(o.b)(),p=Object(I.g)(),b=Xe(),j=Object(a.useState)(!1),m=Object(k.a)(j,2),h=m[0],g=m[1],f=function(){var e=Object(W.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{d({type:v,data:{result:n,token:a}}),p.push("/")}catch(c){console.log(c)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){return c(Object(u.a)(Object(u.a)({},n),{},Object(ee.a)({},e.target.name,e.target.value)))};return Object(re.jsx)(S.a,{component:"main",maxWidth:"xs",children:Object(re.jsxs)(B.a,{className:b.paper,elevation:6,children:[Object(re.jsx)(ue.a,{className:b.avatar,children:Object(re.jsx)(Ze.a,{})}),Object(re.jsx)(D.a,{component:"h1",variant:"h5",children:s?"Sign up":"Sign in"}),Object(re.jsxs)("form",{className:b.form,onSubmit:function(e){var t,a;e.preventDefault(),d(s?(t=n,a=p,function(){var e=Object(W.a)(L.a.mark((function e(n){var c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(t);case 3:c=e.sent,r=c.data,n({type:v,data:r}),a.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var n=Object(W.a)(L.a.mark((function n(a){var c,r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e);case 3:c=n.sent,r=c.data,a({type:v,data:r}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,p))},children:[Object(re.jsxs)(fe.a,{container:!0,spacing:2,children:[s&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(rt,{className:b.fname,name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(re.jsx)(rt,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(re.jsx)(rt,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(re.jsx)(rt,{name:"password",label:"Password",handleChange:x,type:h?"text":"password",handleShowPassword:function(){return g(!h)}}),s&&Object(re.jsx)(rt,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(re.jsx)(ce.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:b.submit,children:s?"Sign Up":"Sign In"}),Object(re.jsx)(qe.GoogleLogin,{clientId:"215197510308-9m65lirmssf6o0b5ojsgcuogk5g5rcu8.apps.googleusercontent.com",render:function(e){return Object(re.jsx)(ce.a,{className:b.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(re.jsx)(Ke,{}),variant:"contained",children:"Google"})},onSuccess:f,onFailure:function(){return console.log("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(re.jsx)(fe.a,{container:!0,justify:"flex-end",children:Object(re.jsx)(fe.a,{item:!0,children:Object(re.jsx)(ce.a,{color:"#000080",className:b.signInUpBtn,onClick:function(){c(ot),l((function(e){return!e})),g(!1)},children:s?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]})]})})},st=n(141),lt=n.n(st),ut=(n(122),n.p+"static/media/imgg.fbb485e0.png"),dt=function(){return Object(re.jsx)("div",{class:"aboutcontainer",children:Object(re.jsx)("div",{class:"aboutcard",children:Object(re.jsxs)("div",{class:"imgBx",children:[Object(re.jsx)("img",{src:ut}),Object(re.jsxs)("div",{class:"aboutcontent",children:[Object(re.jsx)("h3",{children:"About"}),Object(re.jsxs)("p",{children:["Hey!... You are welcome to MAHESH blog App. This is a something new blog article web application. In here you can create a new account and you can also register with the App on google or other in your choice. But it is must to write a very new article of your own if you need. If you have any trouble or doubts feel free to",Object(re.jsx)("p",{children:Object(re.jsx)("b",{children:"CONTACT ME @"})}),Object(re.jsxs)("a",{href:"https://www.facebook.com/Mahesh0Abeykoon",children:[" ",Object(re.jsx)("b",{children:"Facebook"})]}),Object(re.jsx)("un",{children:" &"}),Object(re.jsxs)("a",{href:"https://www.instagram.com/mahe_sh",children:[" ",Object(re.jsx)("b",{children:"Instagram"})]})]})]})]})})})},pt=n.p+"static/media/mypic.7fa4391f.png",bt=function(){return Object(re.jsxs)("div",{class:"container",children:[Object(re.jsxs)("aside",{class:"profile-card",children:[Object(re.jsxs)("header",{children:[Object(re.jsx)("a",{target:"_blank",href:"#",children:Object(re.jsx)("img",{src:pt,class:"hoverZoomLink"})}),Object(re.jsxs)("h1",{children:[" ","Hi I'm ",Object(re.jsx)("b",{class:"myname",children:" Mahesh Abeykoon "})]})]}),Object(re.jsx)("div",{class:"profile-bio",children:Object(re.jsxs)("p",{children:["Welcome to MAHESH blog app. This is something new experience for you to wirte an aricle and gather your knowledge, because you are already a member here. Go on!.."," "]})})]}),Object(re.jsx)("div",{class:"card",children:Object(re.jsxs)("div",{class:"content",children:[Object(re.jsx)("h2",{children:"GitHub"}),Object(re.jsx)("p",{children:"Github is a web-based platform used for version control you can connect with me"}),Object(re.jsx)("a",{href:"https://github.com/Mah-eshh",children:" Connect"})]})}),Object(re.jsx)("div",{class:"card"}),Object(re.jsx)("div",{class:"card",children:Object(re.jsxs)("div",{class:"content",children:[Object(re.jsx)("h2",{children:"Facebook"}),Object(re.jsx)("p",{children:"Facebook is a social networking site that makes it easy for you to connect with me."}),Object(re.jsx)("a",{href:"https://www.facebook.com/Mahesh0Abeykoon",children:" Connect"})]})})]})},jt=function(){var e=JSON.parse(localStorage.getItem("profile")),t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){r(!0),setTimeout((function(){r(!1)}),5e3)}),[]),Object(re.jsx)(N.a,{children:Object(re.jsxs)(S.a,{maxWidth:"xl",children:[Object(re.jsx)(lt.a,{size:50,height:30,width:40,radius:20,margin:20,color:"#63BDEC",loading:c}),Object(re.jsx)(he,{}),Object(re.jsx)(I.b,{path:"/about",exact:!0,component:dt}),Object(re.jsx)(I.b,{path:"/contact",exact:!0,component:bt}),Object(re.jsxs)(I.d,{children:[Object(re.jsx)(I.b,{path:"/",exact:!0,component:function(){return Object(re.jsx)(I.a,{to:"/posts"})}}),Object(re.jsx)(I.b,{path:"/posts",exact:!0,component:Ve}),Object(re.jsx)(I.b,{path:"/posts/search",exact:!0,component:Ve}),Object(re.jsx)(I.b,{path:"/posts/:id",exact:!0,component:ie}),Object(re.jsx)(I.b,{path:"/auth",exact:!0,component:function(){return e?Object(re.jsx)(I.a,{to:"/posts"}):Object(re.jsx)(it,{})}})]})]})})},mt=(n(208),Object(i.d)(C,Object(i.c)(Object(i.a)(s.a))));r.a.render(Object(re.jsx)(o.a,{store:mt,children:Object(re.jsx)(jt,{})}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.eccae9b6.chunk.js.map