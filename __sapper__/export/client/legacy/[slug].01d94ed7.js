import{r as t,_ as n,a as e,b as s,c as r,i as a,d as c,S as o,s as u,e as i,f,t as l,q as p,g as h,h as v,j as d,k as m,l as y,m as x,n as b,o as g,v as j,u as R,p as k}from"./client.15bbb3ed.js";import{_ as D}from"./asyncToGenerator.5229e80b.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",u=t[0].desc+"";return document.title=n=t[0].title,{c:function(){e=i(),s=f("h1"),r=l(o),a=i(),c=f("div"),this.h()},l:function(t){p('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=v(t),s=d(t,"H1",{});var n=m(s);r=y(n,o),n.forEach(h),a=v(t),c=d(t,"DIV",{class:!0}),m(c).forEach(h),this.h()},h:function(){x(c,"class","content svelte-gnxal1")},m:function(t,n){b(t,e,n),b(t,s,n),g(s,r),b(t,a,n),b(t,c,n),c.innerHTML=u},p:function(t,e){var s=j(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&R(r,o),1&s&&u!==(u=t[0].desc+"")&&(c.innerHTML=u)},i:k,o:k,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function T(t){return q.apply(this,arguments)}function q(){return(q=D(t.mark((function n(e){var s,r,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("posts/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function w(t,n,e){var s=n.post;return t.$$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var L=function(t){n(s,o);var e=E(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,w,H,u,{post:0}),n}return s}();export default L;export{T as preload};
