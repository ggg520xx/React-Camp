"use strict";(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[665],{7665:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var s=a(1413),n=a(7762),r=a(4165),o=a(5861),c=a(9439),l=a(2791),i=a(9806),d=a(1632),u=a(7689),p=a(1087),x=a(1134),m=a(1243),g=a(894),h=a(1941),f=a(4690),v=a(9579),b=a(184),j=function(e){var t,a,j=(0,g.y)(g.n),y=j.loginStatus,k=j.setLoginStatus,N=(0,l.useState)(""),w=(0,c.Z)(N,2),Z=w[0],S=w[1],_=(0,l.useState)(""),I=(0,c.Z)(_,2),C=I[0],E=I[1],D=(0,u.s0)(),F=(0,x.cI)(),G=(F.watch,F.register),$=F.handleSubmit,q=F.formState.errors;(0,l.useEffect)((function(){!0!==y||D("/")}),[]);var z=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a,s,n,o,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=JSON.stringify(t),console.log(a),e.prev=3,e.next=6,m.Z.post("http://localhost:3000/login",{email:"".concat(t.login_email),password:"".concat(t.login_password)});case 6:if(s=e.sent,console.log(s.data),console.log(s.data.user),console.log(s.data.accessToken),localStorage.setItem("token",s.data.accessToken),localStorage.setItem("name",s.data.user.name),localStorage.setItem("nickname",s.data.user.nickname),localStorage.setItem("id",s.data.user.id),n=s.data.user.id,!localStorage.getItem("prevpage")){e.next=29;break}return k(!0),o=localStorage.getItem("prevpage"),alert("\u767b\u5165\u6210\u529f,\u5c07\u5c0e\u5411\u81f3\u5148\u524d\u9801\u9762"),e.next=21,M(n);case 21:return c=e.sent,console.log(c),e.next=25,T(c);case 25:D("/page/".concat(o)),localStorage.removeItem("prevpage"),e.next=37;break;case 29:return k(!0),e.next=32,M(n);case 32:return l=e.sent,console.log(l),e.next=36,T(l);case 36:D("/member");case 37:e.next=44;break;case 39:e.prev=39,e.t0=e.catch(3),console.log(e.t0.response),console.log(e.t0.response.data),alert("\u5e33\u865f\u5bc6\u78bc\u6709\u8aa4,\u7121\u6cd5\u6b63\u78ba\u767b\u5165");case 44:case"end":return e.stop()}}),e,null,[[3,39]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("http://localhost:3000/orders?userId=".concat(t,"&orderExpired=false"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a,s,o,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new Date,s=(0,n.Z)(t),e.prev=2,s.s();case 4:if((o=s.n()).done){e.next=38;break}if(c=o.value,console.log(c),l=(0,h.default)(c.roomEnd,"yyyy\u5e74MM\u6708dd\u65e5",new Date),console.log(l),!(0,f.default)(l,a)){e.next=13;break}console.log("\u540c\u5929\u65e5\u671f"),e.next=36;break;case 13:if(!(0,v.default)(l,a)){e.next=35;break}return e.prev=14,e.next=17,m.Z.patch("http://localhost:3000/orders/".concat(c.id),{orderExpired:!0});case 17:console.log("patch\u6210\u529f"),e.next=32;break;case 20:return e.prev=20,e.t0=e.catch(14),console.log("patch\u5931\u6557\uff0c\u9032\u884c\u7b2c\u4e8c\u6b21patch"),e.prev=23,e.next=26,m.Z.patch("http://localhost:3000/orders/".concat(c.id),{orderExpired:!0});case 26:console.log("\u7b2c\u4e8c\u6b21patch\u6210\u529f"),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(23),console.log("\u7b2c\u4e8c\u6b21patch\u5931\u6557");case 32:console.log("\u904e\u53bb\u65e5\u671f"),e.next=36;break;case 35:console.log("\u672a\u4f86\u65e5\u671f");case 36:e.next=4;break;case 38:e.next=43;break;case 40:e.prev=40,e.t2=e.catch(2),s.e(e.t2);case 43:return e.prev=43,s.f(),e.finish(43);case 46:case"end":return e.stop()}}),e,null,[[2,40,43,46],[14,20],[23,29]])})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"h-screen container relative",children:(0,b.jsx)("div",{className:"h-full flex justify-center items-center",children:(0,b.jsxs)("div",{className:"bg-soft_color w-7/12 p-0 rounded shadow-lg py-5  ",children:[(0,b.jsx)("div",{className:"py-5",children:(0,b.jsx)("h2",{className:"font-bold text-xl text-my_green",style:{letterSpacing:1},children:"\u6703\u54e1\u767b\u5165"})}),(0,b.jsx)("hr",{className:"bg-my_green h-[1px] w-8/12 mx-auto",style:{border:"none"}}),(0,b.jsx)("div",{className:"py-5",children:(0,b.jsxs)("form",{onSubmit:$(z),children:[(0,b.jsxs)("div",{className:"flex justify-center py-2",children:[(0,b.jsx)("div",{className:"flex items-center px-5 bg-sub_color",children:(0,b.jsx)(i.G,{icon:d.FU$,className:" text-white"})}),(0,b.jsx)("div",{children:(0,b.jsx)("input",(0,s.Z)((0,s.Z)({className:"border-transparent",type:"text",placeholder:"\u8acb\u8f38\u5165\u4fe1\u7bb1"},G("login_email",{required:{value:!0,message:"\u6b64\u6b04\u4f4d\u5fc5\u586b\u5beb"},pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Email \u4e0d\u5408\u898f\u5247"}})),{},{style:{letterSpacing:1},onChange:function(e){S(e.target.value)},onFocus:function(e){return S("kokomi@gmail.com")},value:Z}))})]}),(0,b.jsx)("div",{className:"min-h-[20px] font-semibold text-sm text-red-500",children:null===(t=q.login_email)||void 0===t?void 0:t.message}),(0,b.jsxs)("div",{className:"flex justify-center py-2",children:[(0,b.jsx)("div",{className:"flex items-center px-5 bg-sub_color",children:(0,b.jsx)(i.G,{icon:d.DD4,className:" text-white"})}),(0,b.jsx)("div",{children:(0,b.jsx)("input",(0,s.Z)((0,s.Z)({id:"input_password",className:"border-transparent",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc"},G("login_password",{required:{value:!0,message:"\u6b64\u6b04\u4f4d\u5fc5\u586b\u5beb"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/g,message:"\u5bc6\u78bc 8-16\u5b57\uff0c\u81f3\u5c111\u5927\u5beb\u5b57\u6bcd\uff0c1\u5c0f\u5beb\u5b57\u6bcd\uff0c1\u6578\u5b57"}})),{},{style:{letterSpacing:1},onChange:function(e){E(e.target.value)},onFocus:function(e){return E("Kokomi123456")},value:C}))})]}),(0,b.jsx)("div",{className:"min-h-[20px] font-semibold text-sm text-red-500",children:null===(a=q.login_password)||void 0===a?void 0:a.message}),(0,b.jsx)("div",{className:"flex justify-center py-5",children:(0,b.jsx)("button",{type:"",className:"font-bold text-my_green button_effect  ",onClick:function(){},style:{fontSize:18},children:"\u767b \u5165"})}),(0,b.jsx)("hr",{className:"bg-my_green h-[1px] w-8/12 mx-auto",style:{border:"none"}}),(0,b.jsxs)("div",{className:"flex justify-center py-5",children:[(0,b.jsxs)("strong",{className:"",children:["\u9084\u4e0d\u662f",(0,b.jsx)("span",{className:"text-sub_color mx-1",children:"Hola Camp\u6703\u54e1"}),"\u55ce\uff1f"]}),(0,b.jsx)("div",{className:"px-3",children:(0,b.jsxs)(p.rU,{to:"/register",className:"text-sub_color hover:text-my_green font-bold",children:["\u73fe\u5728\u53bb\u8a3b\u518a",(0,b.jsx)(i.G,{icon:d.I4f,className:" text-black"})]})})]})]})})]})})})})}}}]);
//# sourceMappingURL=665.72323761.chunk.js.map