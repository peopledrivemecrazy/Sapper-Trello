import{S as t,i as s,s as l,a as e,e as n,t as r,q as o,d as a,c as h,b as c,f,g as i,h as p,j as u,k as g,n as m,l as v,m as d,o as E}from"./client.4655769c.js";function y(t,s,l){const e=t.slice();return e[4]=s[l],e}function b(t,s,l){const e=t.slice();return e[1]=s[l],e}function j(t){let s,l,e,o;return{c(){s=n("a"),l=n("li"),e=n("p"),o=r("No Posts yet, begin your journey on trello"),this.h()},l(t){s=c(t,"A",{href:!0,target:!0,class:!0});var n=f(s);l=c(n,"LI",{class:!0});var r=f(l);e=c(r,"P",{});var h=f(e);o=i(h,"No Posts yet, begin your journey on trello"),h.forEach(a),r.forEach(a),n.forEach(a),this.h()},h(){p(l,"class","svelte-nhnllp"),p(s,"href","https://trello.com/b/MNURR8Sv/blog-with-trello"),p(s,"target","_blank"),p(s,"class","svelte-nhnllp")},m(t,n){u(t,s,n),g(s,l),g(l,e),g(e,o)},p:m,d(t){t&&a(s)}}}function P(t){let s,l=t[0],e=[];for(let s=0;s<l.length;s+=1)e[s]=R(b(t,l,s));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=E()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);s=E()},m(t,l){for(let s=0;s<e.length;s+=1)e[s].m(t,l);u(t,s,l)},p(t,n){if(1&n){let r;for(l=t[0],r=0;r<l.length;r+=1){const o=b(t,l,r);e[r]?e[r].p(o,n):(e[r]=R(o),e[r].c(),e[r].m(s.parentNode,s))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length}},d(t){d(e,t),t&&a(s)}}}function N(t){let s,l,e,o=t[4].name+"";return{c(){s=n("span"),l=r(o),this.h()},l(t){s=c(t,"SPAN",{class:!0});var e=f(s);l=i(e,o),e.forEach(a),this.h()},h(){p(s,"class",e="tags "+t[4].color+" svelte-nhnllp")},m(t,e){u(t,s,e),g(s,l)},p(t,n){1&n&&o!==(o=t[4].name+"")&&v(l,o),1&n&&e!==(e="tags "+t[4].color+" svelte-nhnllp")&&p(s,"class",e)},d(t){t&&a(s)}}}function R(t){let s,l,o,m,E,b,j,P,R,w=t[1].title+"",x=t[1].time+"",A=t[1].tags,L=[];for(let s=0;s<A.length;s+=1)L[s]=N(y(t,A,s));return{c(){s=n("a"),l=n("li"),o=r(w),m=e(),E=n("p"),b=r(x),j=e();for(let t=0;t<L.length;t+=1)L[t].c();P=e(),this.h()},l(t){s=c(t,"A",{rel:!0,href:!0,class:!0});var e=f(s);l=c(e,"LI",{class:!0});var n=f(l);o=i(n,w),m=h(n),E=c(n,"P",{class:!0});var r=f(E);b=i(r,x),r.forEach(a),j=h(n);for(let t=0;t<L.length;t+=1)L[t].l(n);n.forEach(a),P=h(e),e.forEach(a),this.h()},h(){p(E,"class","date svelte-nhnllp"),p(l,"class","svelte-nhnllp"),p(s,"rel","prefetch"),p(s,"href",R="posts/"+t[1].slug),p(s,"class","svelte-nhnllp")},m(t,e){u(t,s,e),g(s,l),g(l,o),g(l,m),g(l,E),g(E,b),g(l,j);for(let t=0;t<L.length;t+=1)L[t].m(l,null);g(s,P)},p(t,e){if(1&e&&w!==(w=t[1].title+"")&&v(o,w),1&e&&x!==(x=t[1].time+"")&&v(b,x),1&e){let s;for(A=t[1].tags,s=0;s<A.length;s+=1){const n=y(t,A,s);L[s]?L[s].p(n,e):(L[s]=N(n),L[s].c(),L[s].m(l,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=A.length}1&e&&R!==(R="posts/"+t[1].slug)&&p(s,"href",R)},d(t){t&&a(s),d(L,t)}}}function w(t){let s,l,v,d,E;function y(t,s){return 0!=t[0].length?P:j}let b=y(t),N=b(t);return{c(){s=e(),l=n("h1"),v=r("Recent posts"),d=e(),E=n("ul"),N.c(),this.h()},l(t){o('[data-svelte="svelte-rnw242"]',document.head).forEach(a),s=h(t),l=c(t,"H1",{});var e=f(l);v=i(e,"Recent posts"),e.forEach(a),d=h(t),E=c(t,"UL",{class:!0});var n=f(E);N.l(n),n.forEach(a),this.h()},h(){document.title="Posts",p(E,"class","svelte-nhnllp")},m(t,e){u(t,s,e),u(t,l,e),g(l,v),u(t,d,e),u(t,E,e),N.m(E,null)},p(t,[s]){b===(b=y(t))&&N?N.p(t,s):(N.d(1),N=b(t),N&&(N.c(),N.m(E,null)))},i:m,o:m,d(t){t&&a(s),t&&a(l),t&&a(d),t&&a(E),N.d()}}}async function x({params:t,query:s}){return await this.fetch("posts.json").then(t=>t.json()).then(t=>({posts:t}))}function A(t,s,l){let{posts:e}=s;return t.$$set=t=>{"posts"in t&&l(0,e=t.posts)},[e]}export default class extends t{constructor(t){super(),s(this,t,A,w,l,{posts:0})}}export{x as preload};