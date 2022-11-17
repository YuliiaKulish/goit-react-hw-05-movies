"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,i,u,o,s=e(861),p=e(885),d=e(757),f=e.n(d),l=e(791),x=e(689),g=e(390),h=e(576),v=e(168),m=e(630),Z=m.ZP.ul(r||(r=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),w=m.ZP.li(a||(a=(0,v.Z)([""]))),b=m.ZP.div(c||(c=(0,v.Z)(["\n  background-color: var(--primary-white-color);\n  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n    0px 2px 1px rgb(0 0 0 / 20%);\n  border-radius: 0px 0px 4px 4px;\n"]))),y=m.ZP.div(i||(i=(0,v.Z)(["\n  border-radius: 4px 4px 0 0;\n  object-fit: cover;\n"]))),k=m.ZP.img(u||(u=(0,v.Z)(["\n  border-radius: 4px 4px 0 0;\n  object-fit: contain;\n"]))),_=m.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n"]))),j=e(184),P=function(){var n=(0,l.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(!1),c=(0,p.Z)(a,2),i=c[0],u=c[1],o=(0,l.useState)(null),d=(0,p.Z)(o,2),v=d[0],m=d[1],P=(0,x.UO)().movieId;(0,l.useEffect)((function(){S(P)}),[P]);var S=function(){var n=(0,s.Z)(f().mark((function n(t){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.M1(t);case 3:e=n.sent,r(e),u(!0),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),"Oops, something went wrong ...",m("Oops, something went wrong ...");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();if(0===e.length&&i){return(0,j.jsx)(h.Z,{message:"We dont have any information about cast of this movie"})}return(0,j.jsx)(j.Fragment,{children:v?(0,j.jsx)(h.Z,{message:v}):(0,j.jsx)(Z,{children:e.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,j.jsx)(w,{children:(0,j.jsxs)(b,{children:[(0,j.jsx)(y,{children:(0,j.jsx)(k,{src:a?g.FH+a:g.bB,alt:r,width:"200",height:"200"})}),(0,j.jsxs)(_,{children:[(0,j.jsx)("p",{children:e}),(0,j.jsx)("p",{children:r})]})]})},t)}))})})}},576:function(n,t,e){e.d(t,{Z:function(){return u}});var r,a=e(168),c=e(630).ZP.p(r||(r=(0,a.Z)(["\n  padding-top: 50px;\n  text-align: center;\n  font-size: 30px;\n  color: red;\n"]))),i=e(184),u=function(n){var t=n.message;return(0,i.jsx)(c,{children:t})}},390:function(n,t,e){e.d(t,{FH:function(){return s},GC:function(){return m},Hg:function(){return d},M1:function(){return x},Tn:function(){return h},bB:function(){return p},s_:function(){return f}});var r=e(861),a=e(757),c=e.n(a),i=e(44),u="53302e0751a97a4a840d7d49074c95e2",o="https://api.themoviedb.org/3/",s="https://image.tmdb.org/t/p/w500",p="https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg",d=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"trending/movie/day?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,e=t.data,r=e.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.147ff583.chunk.js.map