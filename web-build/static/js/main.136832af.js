(()=>{"use strict";var e={5830:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var o=r(885),n=r(5861),a=r(3292),i=r(9526),l=r(4333),s=r(477),d=r(6337),u=r(1133),c=r(7557);const f=function(e){return(0,c.jsx)(u.default,{style:{marginVertical:e.vertical,marginHorizontal:e.horizontal}})};var p=r(9566),h=r(4942),g=r(9233),y=r(9899),b=r(1451);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(e){var t=e.hover==e.post.imageUrl;return(0,c.jsx)(u.default,{style:{padding:20,borderRadius:15},children:(0,c.jsxs)(u.default,{style:{borderRadius:15,shadowColor:"#5e5e5e",shadowOffset:{width:0,height:3},shadowOpacity:.5,shadowRadius:5},children:[(0,c.jsx)(y.default,{style:{width:200,height:200,borderRadius:15},blurRadius:t?1:0,resizeMode:"cover",source:{uri:e.post.imageUrl}}),t&&(0,c.jsx)(b.default,{style:v(v({},l.default.absoluteFillObject),{},{backgroundColor:t?"#a1a1a180":void 0,borderRadius:15,overflow:"hidden",alignContent:"center",alignItems:"center",justifyContent:"center"}),children:(0,c.jsxs)(g.default,{style:{textAlign:"center",fontWeight:"700"},children:['"',e.post.prompt,'"']})})]})})};const m=function(e){return(0,c.jsx)(p.default,{numColumns:3,data:e.posts,renderItem:function(t){var r=t.item;return(0,c.jsx)("div",{onMouseEnter:function(){e.setHover(r.imageUrl),console.log("hover: "+e.hover)},onMouseLeave:function(){e.setHover(""),console.log("hover: "+e.hover)},children:(0,c.jsx)(x,{post:r,hover:e.hover})})}})};var w=r(3497),C=r(6715),O=r(3972);const I=(0,r(53).createClient)("https://mjlprxfoseqzikpwbksd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbHByeGZvc2VxemlrcHdia3NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNjkyNzQsImV4cCI6MTk5Njg0NTI3NH0.RVwrXpkMi-4hN8gNo9zDff0nm4htw_IIv6cvX578HX0");const S=function(e){var t=(0,i.useState)(null),r=(0,o.default)(t,2),a=r[0],l=r[1],d=(0,i.useState)(!1),p=(0,o.default)(d,2),h=p[0],y=p[1],j=function(){var t=(0,n.default)((function*(){var t=yield(yield I.auth.getUser()).data.user;l(t),e.setUid(null==t?void 0:t.id)}));return function(){return t.apply(this,arguments)}}();j();return(0,c.jsxs)(s.default,{style:e.styles.top,children:[(0,c.jsxs)(u.default,{style:e.styles.header,children:[(0,c.jsx)(C.default,{name:"search",size:20,color:"#a999e2"}),(0,c.jsx)(f,{horizontal:10}),(0,c.jsx)(w.default,{style:e.styles.textInput,placeholder:"Search existing images...",clearTextOnFocus:!0,onFocus:function(){return e.setActive(!0)},onBlur:function(){return e.setActive(!1)},onChangeText:function(t){e.setInput(t)}})]}),a?null:(0,c.jsx)(b.default,{style:e.styles.signInButton,onPress:function(){e.setPopup("in")},children:(0,c.jsx)(g.default,{style:{color:"#5e5e5e",fontWeight:"500",fontSize:18},children:"Sign In"})}),a?null:(0,c.jsx)(b.default,{style:e.styles.signUpButton,onPress:function(){e.setPopup("up")},children:(0,c.jsx)(g.default,{style:{color:"#5e5e5e",fontWeight:"500",fontSize:18},children:"Sign Up"})}),a?(0,c.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},children:[(0,c.jsx)(g.default,{style:{color:"#a999e2",fontWeight:"500",fontSize:15,padding:10},children:"Only Show Your Posts"}),(0,c.jsx)(O.default,{value:h,onValueChange:function(t){y(t),e.setUserOnly(t)}})]}):null]})};var P=function(){var e=(0,n.default)((function*(e,t,r){if(r){var o=yield I.auth.signUp({email:e,password:t});o.data,o.error}else{var n=yield I.auth.signInWithPassword({email:e,password:t});n.data,n.error}}));return function(t,r,o){return e.apply(this,arguments)}}();const k=function(e){var t=(0,i.useState)(""),r=(0,o.default)(t,2),n=r[0],a=r[1],l=(0,i.useState)(""),s=(0,o.default)(l,2),d=s[0],p=s[1];return(0,c.jsx)(u.default,{style:{width:"100%",height:"100%",backgroundColor:"#a1a1a150",position:"absolute",alignContent:"center",alignItems:"center",justifyContent:"center"},children:(0,c.jsxs)(u.default,{style:{height:"50%",width:"50%",backgroundColor:"#1c1c1c",borderRadius:15},children:[(0,c.jsx)(u.default,{style:{flexDirection:"row"},children:(0,c.jsx)(b.default,{onPress:function(){e.setPopup("")},children:(0,c.jsx)(C.default,{name:"times",size:25,style:{paddingLeft:10,paddingTop:10,paddingRight:80},color:"#a1a1a1"})})}),(0,c.jsxs)(g.default,{style:{height:"100%",width:"100%",paddingTop:10,textAlign:"center",textAlignVertical:"center",color:"#a999e2",fontSize:25},children:["Welcome","in"==e.popup?" Back":"","!"]}),(0,c.jsxs)(g.default,{style:{height:"100%",width:"100%",textAlign:"center",textAlignVertical:"center",color:"#5e5e5e",fontSize:15},children:["By signing ",e.popup," you can keep track of your designs."]}),(0,c.jsxs)(u.default,{style:{alignItems:"center"},children:[(0,c.jsx)(w.default,{placeholder:"Email...",keyboardType:"email-address",onChangeText:function(e){a(e)},style:{height:50,width:"70%",paddingLeft:10,borderRadius:15,borderWidth:1,borderColor:"#a1a1a1",color:"#a1a1a1"}}),(0,c.jsx)(f,{vertical:5}),(0,c.jsx)(w.default,{placeholder:"Password...",secureTextEntry:!0,onChangeText:function(e){p(e)},style:{height:50,width:"70%",paddingLeft:10,borderRadius:15,borderWidth:1,borderColor:"#a1a1a1",color:"#a1a1a1"}}),(0,c.jsx)(f,{vertical:5}),(0,c.jsx)(u.default,{style:{paddingTop:5,paddingRight:5},children:(0,c.jsx)(b.default,{onPress:function(){"in"==e.popup?e.setPopup("up"):e.setPopup("in")},children:(0,c.jsx)(g.default,{style:{color:"#a1a1a1",fontWeight:"500",fontSize:15},children:"in"==e.popup?"New? Create an account.":"Already have an account? Sign In."})})}),(0,c.jsx)(f,{vertical:10}),(0,c.jsx)(b.default,{style:e.styles.signInButton,onPress:function(){P(n,d,"up"==e.popup),e.setPopup("")},children:(0,c.jsx)(g.default,{style:{color:"#5e5e5e",fontWeight:"500",fontSize:15},children:"Submit"})}),(0,c.jsx)(f,{vertical:15})]})]})})};var R=r(6032),z=r(4653),A=(z.Configuration,z.OpenAIApi,function(){var e=(0,n.default)((function*(e){try{var t=yield fetch("https://wittycomplexcrash.christopherm254.repl.co/generate-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}),r=yield t.json();return console.log(r.imageUrl),r.imageUrl}catch(o){return console.error(o),null}}));return function(t){return e.apply(this,arguments)}}());const U=function(e){var t=(0,i.useState)(""),r=(0,o.default)(t,2),a=r[0],l=r[1],d=(0,i.useState)(""),u=(0,o.default)(d,2),p=u[0],h=u[1],j=(0,i.useState)(!1),v=(0,o.default)(j,2),x=v[0],m=v[1];return(0,i.useEffect)((function(){console.log(p),h(p)}),[p]),(0,c.jsxs)(s.default,{style:{width:"35%",paddingTop:20,alignItems:"center"},children:[(0,c.jsxs)(s.default,{style:{width:"90%",aspectRatio:1,borderRadius:15,backgroundColor:"#a1a1a133",alignItems:"center",justifyContent:"center"},children:[!x&&!p&&(0,c.jsx)(C.default,{name:"image",size:200,color:"#1c1c1c"}),p?(0,c.jsx)(y.default,{source:{uri:p},style:{height:"90%",aspectRatio:1,borderRadius:15}}):null,x&&(0,c.jsx)(R.default,{color:"#1c1c1c",size:50,style:{position:"absolute"}})]}),(0,c.jsx)(f,{vertical:10}),(0,c.jsx)(w.default,{style:{height:150,width:"90%",padding:15,alignItems:"center",borderWidth:1,borderRadius:15,borderColor:"#a1a1a133",fontSize:18,color:"#a1a1a1"},onChangeText:function(e){l(e)},clearTextOnFocus:!0,autoCapitalize:"sentences",placeholder:"Enter a prompt...",multiline:!0}),(0,c.jsx)(f,{vertical:10}),(0,c.jsx)(b.default,{style:e.styles.generateButton,onPress:(0,n.default)((function*(){var t;m(!0);var r=yield A(a);console.log(r),h(r);var o=null==(t=(yield I.auth.getUser()).data.user)?void 0:t.id;try{var n={postId:Date.now()+"-"+Math.floor(1e5*Math.random()),uid:null!=o?o:"",imageUrl:r,prompt:a};console.log("Inserting post...");var i=(yield I.from("Posts").insert(n)).error;if(i)throw new Error("Failed to insert post: "+i.message);console.log("Post inserted successfully:",n)}catch(l){console.log("Error:",l)}e.updateData,m(!1)})),children:(0,c.jsx)(g.default,{style:{color:"#5e5e5e",fontWeight:"500",fontSize:15},children:"Generate Image"})})]})};var T=r(3144),W=r(5671),B=(0,T.default)((function e(t){(0,W.default)(this,e),this.postId=t.postId,this.uid=t.uid,this.imageUrl=t.imageUrl,this.prompt=t.prompt,this.createdAt=t.date})),D=(new B({uid:"",postId:"12345",imageUrl:"https://media.architecturaldigest.com/photos/569992ccc6772b76145675a2/16:9/w_2580,c_limit/retreat-the-modern-house-in-nature-01.jpg",prompt:"mhmmmm",createdAt:"now"}),new B({uid:"",postId:"12345",imageUrl:"https://www.mymove.com/wp-content/uploads/2020/07/shutterstock_1186954054-1-1.jpg",prompt:"SLAY",createdAt:"now"}),new B({uid:"",postId:"12345",imageUrl:"https://cdn.homedit.com/wp-content/uploads/2021/11/Modern-Mansion.jpg",prompt:"PERIOD",createdAt:"now"}),function(){var e=(0,n.default)((function*(e){var t;e(null==(t=(yield I.from("Posts").select().order("createdAt",{ascending:!1})).data)?void 0:t.map((function(e){return new B(e)})))}));return function(t){return e.apply(this,arguments)}}());function E(){var e=(0,i.useState)([]),t=(0,o.default)(e,2),r=t[0],u=t[1],p=(0,i.useState)([]),h=(0,o.default)(p,2),g=h[0],y=h[1],b=(0,i.useState)(""),j=(0,o.default)(b,2),v=j[0],x=j[1],w=(0,i.useState)(!1),C=(0,o.default)(w,2),O=C[0],I=C[1],P=(0,i.useState)(!1),R=(0,o.default)(P,2),z=R[0],A=R[1],T=(0,i.useState)(""),W=(0,o.default)(T,2),B=W[0],E=W[1],M=(0,i.useState)(""),_=(0,o.default)(M,2),N=_[0],L=_[1],F=(0,i.useState)(""),H=(0,o.default)(F,2),J=H[0],V=H[1];function X(){return(X=(0,n.default)((function*(){yield D(u);var e=N?r.filter((function(e){return e.prompt.toLowerCase().includes(N.toLowerCase())||e.prompt.toLowerCase().includes(N.toLowerCase())})):r,t=z?e.filter((function(e){return e.uid==B})):e;y(t)}))).apply(this,arguments)}!function(){X.apply(this,arguments)}();var Y=l.default.create({container:{flex:1,backgroundColor:"#1c1c1c"},top:{height:60,width:"100%",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"#1c1c1c",borderBottomColor:"#5e5e5e",borderBottomWidth:1,position:"absolute",top:5},header:{height:50,width:"70%",padding:15,borderWidth:2,borderRadius:15,borderColor:O?"#a1a1a1":"#5e5e5e",backgroundColor:"#a1a1a133",flexDirection:"row",alignItems:"center"},textInput:{height:30,width:"100%",borderBottomWidth:1,borderColor:O?"#a999e2":"#a1a1a1",color:"#a1a1a1"},signInButton:{height:50,width:120,padding:5,backgroundColor:"#a999e2",borderWidth:1,borderColor:"#5e5e5e",borderRadius:15,overflow:"hidden",alignContent:"center",textAlign:"center",justifyContent:"center"},signUpButton:{height:50,width:120,padding:5,backgroundColor:"#a1a1a1",borderWidth:1,borderColor:"#5e5e5e",borderRadius:15,overflow:"hidden",alignContent:"center",textAlign:"center",justifyContent:"center"},filterButton:{height:50,width:240,padding:5,backgroundColor:"#a1a1a133",borderWidth:1,borderColor:"#5e5e5e",borderRadius:15,overflow:"hidden",alignContent:"center",textAlign:"center",justifyContent:"center"},popupButton:{height:40,width:80,padding:5,backgroundColor:"#5e5e5e",borderWidth:1,borderColor:"#a1a1a1",borderRadius:15,overflow:"hidden",alignContent:"center",textAlign:"center",justifyContent:"center"},generateButton:{height:50,width:150,padding:5,backgroundColor:"#a999e2",borderWidth:1,borderColor:"#5e5e5e",borderRadius:15,overflow:"hidden",alignContent:"center",textAlign:"center",justifyContent:"center"},content:{paddingTop:55,flexDirection:"row",alignContent:"space-around",width:d.default.get("window").width,height:d.default.get("window").height},text:{color:"#a1a1a1"}});return(0,c.jsxs)(s.default,{style:Y.container,children:[(0,c.jsx)(f,{vertical:5}),(0,c.jsxs)(s.default,{style:Y.content,children:[(0,c.jsx)(m,{posts:g,hover:v,setHover:x}),(0,c.jsx)(U,{styles:Y,updateData:D(u)})]}),(0,c.jsx)(S,{styles:Y,setActive:I,setUserOnly:A,setUid:E,setInput:L,input:N,popup:J,setPopup:V}),(0,c.jsx)(f,{vertical:5}),(0,c.jsx)(a.default,{style:"auto"}),""!==J&&(0,c.jsx)(k,{setPopup:V,popup:J,styles:Y})]})}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(a,i),a}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,d=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r)}for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[778],(()=>r(9484)));o=r.O(o)})();
//# sourceMappingURL=main.136832af.js.map