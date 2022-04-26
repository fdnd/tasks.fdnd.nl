var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function i(t){return null==t?"":t}function c(t,e,n=e){return t.set(n),e}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function v(){return d("")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function y(t,e,n){t.classList[n?"add":"remove"](e)}let T;function L(t){T=t}function _(){if(!T)throw new Error("Function called outside component initialization");return T}function N(){const t=_();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const l=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach((e=>{e.call(t,l)}))}}}const C=[],E=[],A=[],j=[],M=Promise.resolve();let B=!1;function S(t){A.push(t)}function O(t){j.push(t)}let H=!1;const D=new Set;function F(){if(!H){H=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];L(e),z(e.$$)}for(L(null),C.length=0;E.length;)E.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];D.has(e)||(D.add(e),e())}A.length=0}while(C.length);for(;j.length;)j.pop()();B=!1,H=!1,D.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const W=new Set;let q;function J(){q={r:0,c:[],p:q}}function P(){q.r||s(q.c),q=q.p}function Y(t,e){t&&t.i&&(W.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function Z(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function K(t){t&&t.c()}function G(t,n,r){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(n,r),S((()=>{const n=i.map(e).filter(l);c?c.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(S)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(C.push(t),B||(B=!0,M.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,l,r,o,i,c,a=[-1]){const u=T;L(e);const m=l.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let h=!1;if(p.ctx=r?r(e,m,((t,n,...s)=>{const l=s.length?s[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),h&&R(e,t)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();l.intro&&Y(e.$$.fragment),G(e,l.target,l.anchor),F()}L(u)}class V{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=["Static Web","Data-Driven Web","Workflows, Tools and Frameworks","Mastertest"],tt=["Your Tribe","The Client","All Human","The Campaign","Fix the Flow","The Startup","Connect Your Tribe","Keep users in control","The Web is for everyone","Performance Matters","Connecting people","Proof of concept","Your Tribe for Life!","Choices, choices..","Team up","Back to static","Lose your head","Let's JAM!","Final"];function et(t){let e=[];return t.map((t=>{t.semesterName=X[t.semester-1],t.sprintName=tt[t.sprint-1],e.push(t)})),e}function nt(t,e,n){const s=t.slice();return s[7]=e[n],s}function st(t){let e,n=t[1],s=[];for(let e=0;e<n.length;e+=1)s[e]=rt(nt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);u(t,e,n)},p(t,l){if(2&l){let r;for(n=t[1],r=0;r<n.length;r+=1){const o=nt(t,n,r);s[r]?s[r].p(o,l):(s[r]=rt(o),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(t){m(s,t),t&&f(e)}}}function lt(e){let n;return{c(){n=p("option"),n.__value="",n.value=n.__value},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function rt(t){let e,n;return{c(){e=p("option"),e.__value=n=t[7],e.value=e.__value},m(t,n){u(t,e,n)},p(t,s){2&s&&n!==(n=t[7])&&(e.__value=n,e.value=e.__value)},d(t){t&&f(e)}}}function ot(e){let n,l,r,o,i,c,m,h,d,v,x,T,L;function _(t,e){return""===t[0]?lt:st}let N=_(e),C=N(e);return{c(){n=p("form"),l=p("fieldset"),r=p("legend"),r.textContent="Zoek taken",o=g(),i=p("label"),i.textContent="Zoek taken",c=g(),m=p("input"),h=g(),d=p("datalist"),C.c(),v=g(),x=p("button"),x.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search svelte-1avjico" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg> \n\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x svelte-1avjico" viewBox="3 3 18 18" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10l4 4m0 -4l-4 4"></path></svg>',w(r,"class","visually-hidden"),w(i,"for","searchBar"),w(i,"class","svelte-1avjico"),w(m,"type","search"),w(m,"id","searchBar"),w(m,"aria-label","Search Input"),w(m,"list","searchOptions"),w(m,"class","svelte-1avjico"),w(d,"id","searchOptions"),w(l,"class","svelte-1avjico"),w(x,"class","svelte-1avjico"),w(n,"action","#"),w(n,"class","svelte-1avjico"),y(n,"active",e[2])},m(t,s){u(t,n,s),a(n,l),a(l,r),a(l,o),a(l,i),a(l,c),a(l,m),b(m,e[0]),a(l,h),a(l,d),C.m(d,null),a(n,v),a(n,x),T||(L=[$(m,"input",e[4]),$(m,"keyup",e[5]),$(x,"click",k(e[6]))],T=!0)},p(t,[e]){1&e&&b(m,t[0]),N===(N=_(t))&&C?C.p(t,e):(C.d(1),C=N(t),C&&(C.c(),C.m(d,null))),4&e&&y(n,"active",t[2])},i:t,o:t,d(t){t&&f(n),C.d(),T=!1,s(L)}}}function it(t,e,n){const s=N();let{searchTerm:l}=e,{taskTitles:r}=e,o=!1;return t.$$set=t=>{"searchTerm"in t&&n(0,l=t.searchTerm),"taskTitles"in t&&n(1,r=t.taskTitles)},[l,r,o,s,function(){l=this.value,n(0,l)},()=>{s("updateSearch")},()=>n(2,o=!o)]}class ct extends V{constructor(t){super(),U(this,t,it,ot,r,{searchTerm:0,taskTitles:1})}}function at(t,e,n){const s=t.slice();return s[1]=e[n],s}function ut(t){let e;return{c(){e=p("p"),e.textContent="No tags"},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function ft(t){let e,n,s,l=t[1]+"";return{c(){e=p("li"),n=d(l),s=g(),w(e,"class","svelte-1wecih9")},m(t,l){u(t,e,l),a(e,n),a(e,s)},p(t,e){1&e&&l!==(l=t[1]+"")&&x(n,l)},d(t){t&&f(e)}}}function mt(e){let n,s=e[0].tags,l=[];for(let t=0;t<s.length;t+=1)l[t]=ft(at(e,s,t));let r=null;return s.length||(r=ut()),{c(){n=p("ul");for(let t=0;t<l.length;t+=1)l[t].c();r&&r.c(),w(n,"class","svelte-1wecih9")},m(t,e){u(t,n,e);for(let t=0;t<l.length;t+=1)l[t].m(n,null);r&&r.m(n,null)},p(t,[e]){if(1&e){let o;for(s=t[0].tags,o=0;o<s.length;o+=1){const r=at(t,s,o);l[o]?l[o].p(r,e):(l[o]=ft(r),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length,s.length?r&&(r.d(1),r=null):r||(r=ut(),r.c(),r.m(n,null))}},i:t,o:t,d(t){t&&f(n),m(l,t),r&&r.d()}}}function pt(t,e,n){let{task:s}=e;return t.$$set=t=>{"task"in t&&n(0,s=t.task)},[s]}class ht extends V{constructor(t){super(),U(this,t,pt,mt,r,{task:0})}}function dt(t){let e,n,s,l,r,o,c,m,v,$,k,b,y,T,L,_,N,C,A,j,M,B,S,H,D,F,z,W,q,J,P,R,U,V,X,tt,et,nt,st,lt,rt,ot,it,ct,at=t[0].title+"",ut=t[0].client+"",ft=t[0].semesterName+"",mt=t[0].sprintName+"",pt=t[2][t[0]["support-level"]-1]+"";function dt(e){t[5].call(null,e)}let vt={};return void 0!==t[0]&&(vt.task=t[0]),rt=new ht({props:vt}),E.push((()=>Z(rt,"task",dt))),{c(){e=p("article"),n=p("h4"),s=d(at),l=g(),r=p("p"),o=p("strong"),c=d(ut),m=g(),v=p("div"),$=p("p"),k=d(ft),b=d(" /"),y=g(),T=p("p"),L=d(mt),_=g(),N=p("footer"),C=p("p"),A=h("svg"),j=h("path"),M=h("path"),B=h("path"),S=h("circle"),D=g(),F=p("em"),z=d(pt),W=g(),q=p("ul"),J=p("li"),P=p("button"),R=h("svg"),U=h("path"),V=h("circle"),X=h("circle"),tt=h("circle"),et=h("path"),nt=h("line"),lt=g(),K(rt.$$.fragment),w(n,"class","svelte-17snmwt"),w(o,"class","svelte-17snmwt"),w(r,"class","svelte-17snmwt"),w($,"class","svelte-17snmwt"),w(T,"class","svelte-17snmwt"),w(v,"class","svelte-17snmwt"),w(j,"id","duplicate"),w(j,"d","M36.5,14.1c1.3,2.3,2,5,2,7.9c0,9.1-7.4,16.5-16.5,16.5S5.5,31.1,5.5,22c0-2.8,0.7-5.5,2-7.9"),w(j,"class","svelte-17snmwt"),w(M,"id","experiment"),w(M,"d","M38.5,22c0,9.1-7.4,16.5-16.5,16.5S5.5,31.1,5.5,22"),w(M,"class","svelte-17snmwt"),w(B,"id","extension"),w(B,"d","M36.3,30.2c-2.8,5-8.2,8.3-14.3,8.3c-6.1,0-11.5-3.4-14.3-8.3"),w(B,"class","svelte-17snmwt"),w(S,"id","circle"),w(S,"cx","22"),w(S,"cy","22"),w(S,"r","16.5"),w(S,"class","svelte-17snmwt"),w(A,"class",H="task-level "+t[2][t[0]["support-level"]-1]+" svelte-17snmwt"),w(A,"xmlns","http://www.w3.org/2000/svg"),w(A,"xmlns:xlink","http://www.w3.org/1999/xlink"),w(A,"x","0px"),w(A,"y","0px"),w(A,"viewBox","0 0 44 44"),w(F,"class","svelte-17snmwt"),w(C,"class","svelte-17snmwt"),w(U,"stroke","none"),w(U,"d","M0 0h24v24H0z"),w(U,"fill","none"),w(U,"class","svelte-17snmwt"),w(V,"cx","12"),w(V,"cy","18"),w(V,"r","2"),w(V,"class","svelte-17snmwt"),w(X,"cx","7"),w(X,"cy","6"),w(X,"r","2"),w(X,"class","svelte-17snmwt"),w(tt,"cx","17"),w(tt,"cy","6"),w(tt,"r","2"),w(tt,"class","svelte-17snmwt"),w(et,"d","M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"),w(et,"class","svelte-17snmwt"),w(nt,"x1","12"),w(nt,"y1","12"),w(nt,"x2","12"),w(nt,"y2","16"),w(nt,"class","svelte-17snmwt"),w(R,"xmlns","http://www.w3.org/2000/svg"),w(R,"class","icon icon-tabler icon-tabler-git-fork svelte-17snmwt"),w(R,"viewBox","0 0 24 24"),w(P,"data-forks",st=t[0].forkCount),w(P,"class","svelte-17snmwt"),w(J,"class","forks svelte-17snmwt"),w(q,"class","svelte-17snmwt"),w(N,"class","svelte-17snmwt"),w(e,"class",it=i(t[1]?gt(t[0].title):"stack")+" svelte-17snmwt"),w(e,"style",t[3])},m(t,i){u(t,e,i),a(e,n),a(n,s),a(e,l),a(e,r),a(r,o),a(o,c),a(e,m),a(e,v),a(v,$),a($,k),a($,b),a(v,y),a(v,T),a(T,L),a(e,_),a(e,N),a(N,C),a(C,A),a(A,j),a(A,M),a(A,B),a(A,S),a(C,D),a(C,F),a(F,z),a(N,W),a(N,q),a(q,J),a(J,P),a(P,R),a(R,U),a(R,V),a(R,X),a(R,tt),a(R,et),a(R,nt),a(N,lt),G(rt,N,null),ct=!0},p(t,[n]){(!ct||1&n)&&at!==(at=t[0].title+"")&&x(s,at),(!ct||1&n)&&ut!==(ut=t[0].client+"")&&x(c,ut),(!ct||1&n)&&ft!==(ft=t[0].semesterName+"")&&x(k,ft),(!ct||1&n)&&mt!==(mt=t[0].sprintName+"")&&x(L,mt),(!ct||1&n&&H!==(H="task-level "+t[2][t[0]["support-level"]-1]+" svelte-17snmwt"))&&w(A,"class",H),(!ct||1&n)&&pt!==(pt=t[2][t[0]["support-level"]-1]+"")&&x(z,pt),(!ct||1&n&&st!==(st=t[0].forkCount))&&w(P,"data-forks",st);const l={};!ot&&1&n&&(ot=!0,l.task=t[0],O((()=>ot=!1))),rt.$set(l),(!ct||3&n&&it!==(it=i(t[1]?gt(t[0].title):"stack")+" svelte-17snmwt"))&&w(e,"class",it)},i(t){ct||(Y(rt.$$.fragment,t),ct=!0)},o(t){I(rt.$$.fragment,t),ct=!1},d(t){t&&f(e),Q(rt)}}}function gt(t){return t.replace(/ /g,"-").toLowerCase()}function vt(t,e,n){let{task:s}=e,{group:l}=e,{dummy:r}=e;const o=[5,4,3,2,1];let i,c,a,u;if(l){switch(l.taskList.length){case 1:u=[100];break;case 2:u=[97.5,98];break;case 3:u=[95,95.5,96];break;case 4:u=[92.5,93,93.5,94];break;case 5:u=[90,90.5,91,91.5,92]}i=o.indexOf(l.taskList.indexOf(s)+1)+1,c=l.taskList.indexOf(s)+1,a=l.taskList.indexOf(s)}let f=l?`min-width: ${r?"":"16em"}; position: ${r?"relative":"absolute"}; margin-left: ${100-(90+2*i)}%; width: ${r?"100":u[a]}%;margin-top: ${c/4-.25}em; z-index: ${o[c-1]};`:"none";return t.$$set=t=>{"task"in t&&n(0,s=t.task),"group"in t&&n(4,l=t.group),"dummy"in t&&n(1,r=t.dummy)},[s,r,["voorbeeld","imitatie","experiment","uitbreiding","autonoom"],f,l,function(t){s=t,n(0,s)}]}class $t extends V{constructor(t){super(),U(this,t,vt,dt,r,{task:0,group:4,dummy:1})}}function kt(t,e,n){const s=t.slice();return s[6]=e[n],s[7]=e,s[8]=n,s}function wt(t){let e,n,s,l,r,o,i;function c(e){t[4].call(null,e,t[6],t[7],t[8])}function m(e){t[5].call(null,e)}let h={};return void 0!==t[6]&&(h.task=t[6]),void 0!==t[2]&&(h.relative=t[2]),n=new $t({props:h}),E.push((()=>Z(n,"task",c))),E.push((()=>Z(n,"relative",m))),{c(){e=p("a"),K(n.$$.fragment),r=g(),w(e,"href",o=t[6].url),w(e,"class","svelte-bmt3ta")},m(t,s){u(t,e,s),G(n,e,null),a(e,r),i=!0},p(r,c){t=r;const a={};!s&&1&c&&(s=!0,a.task=t[6],O((()=>s=!1))),!l&&4&c&&(l=!0,a.relative=t[2],O((()=>l=!1))),n.$set(a),(!i||1&c&&o!==(o=t[6].url))&&w(e,"href",o)},i(t){i||(Y(n.$$.fragment,t),i=!0)},o(t){I(n.$$.fragment,t),i=!1},d(t){t&&f(e),Q(n)}}}function xt(t){let e,n,s,l,r,o,i,c=t[0],h=[];for(let e=0;e<c.length;e+=1)h[e]=wt(kt(t,c,e));const d=t=>I(h[t],1,1,(()=>{h[t]=null}));return{c(){e=p("section"),n=p("button"),n.textContent="Close",s=g(),l=p("div");for(let t=0;t<h.length;t+=1)h[t].c();w(l,"class","svelte-bmt3ta"),w(e,"class","svelte-bmt3ta"),y(e,"active",t[1])},m(c,f){u(c,e,f),a(e,n),a(e,s),a(e,l);for(let t=0;t<h.length;t+=1)h[t].m(l,null);r=!0,o||(i=$(n,"click",k(t[3])),o=!0)},p(t,[n]){if(5&n){let e;for(c=t[0],e=0;e<c.length;e+=1){const s=kt(t,c,e);h[e]?(h[e].p(s,n),Y(h[e],1)):(h[e]=wt(s),h[e].c(),Y(h[e],1),h[e].m(l,null))}for(J(),e=c.length;e<h.length;e+=1)d(e);P()}2&n&&y(e,"active",t[1])},i(t){if(!r){for(let t=0;t<c.length;t+=1)Y(h[t]);r=!0}},o(t){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)I(h[t]);r=!1},d(t){t&&f(e),m(h,t),o=!1,i()}}}function bt(t,e,n){let{selection:s}=e,{isActive:l}=e,r=!0;return t.$$set=t=>{"selection"in t&&n(0,s=t.selection),"isActive"in t&&n(1,l=t.isActive)},[s,l,r,()=>n(1,l=!l),function(t,e,l,r){l[r]=t,n(0,s)},function(t){r=t,n(2,r)}]}class yt extends V{constructor(t){super(),U(this,t,bt,xt,r,{selection:0,isActive:1})}}function Tt(t,e,n){const s=t.slice();return s[5]=e[n],s[6]=e,s[7]=n,s}function Lt(t){let e,n,s,l,r;function o(e){t[2].call(null,e,t[5],t[6],t[7])}function i(e){t[3].call(null,e)}function c(e){t[4].call(null,e)}let a={};return void 0!==t[5]&&(a.task=t[5]),void 0!==t[0]&&(a.group=t[0]),void 0!==t[1]&&(a.dummy=t[1]),e=new $t({props:a}),E.push((()=>Z(e,"task",o))),E.push((()=>Z(e,"group",i))),E.push((()=>Z(e,"dummy",c))),{c(){K(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},p(r,o){t=r;const i={};!n&&1&o&&(n=!0,i.task=t[5],O((()=>n=!1))),!s&&1&o&&(s=!0,i.group=t[0],O((()=>s=!1))),!l&&2&o&&(l=!0,i.dummy=t[1],O((()=>l=!1))),e.$set(i)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){Q(e,t)}}}function _t(t){let e,n,s=t[0].taskList,l=[];for(let e=0;e<s.length;e+=1)l[e]=Lt(Tt(t,s,e));const r=t=>I(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=v()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);u(t,e,s),n=!0},p(t,[n]){if(3&n){let o;for(s=t[0].taskList,o=0;o<s.length;o+=1){const r=Tt(t,s,o);l[o]?(l[o].p(r,n),Y(l[o],1)):(l[o]=Lt(r),l[o].c(),Y(l[o],1),l[o].m(e.parentNode,e))}for(J(),o=s.length;o<l.length;o+=1)r(o);P()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)Y(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)I(l[t]);n=!1},d(t){m(l,t),t&&f(e)}}}function Nt(t,e,n){let{group:s}=e,l=!1;return t.$$set=t=>{"group"in t&&n(0,s=t.group)},[s,l,function(t,e,l,r){l[r]=t,n(0,s)},function(t){s=t,n(0,s)},function(t){l=t,n(1,l)}]}class Ct extends V{constructor(t){super(),U(this,t,Nt,_t,r,{group:0})}}function Et(t,e,n){const s=t.slice();return s[14]=e[n],s[15]=e,s[16]=n,s}function At(t,e,n){const s=t.slice();return s[5]=e[n],s[17]=e,s[18]=n,s}function jt(t){let e,n,s,l,r,o;function i(e){t[9].call(null,e,t[5],t[17],t[18])}let c={};function a(){return t[10](t[5])}return void 0!==t[5]&&(c.group=t[5]),n=new Ct({props:c}),E.push((()=>Z(n,"group",i))),{c(){e=p("div"),K(n.$$.fragment),w(e,"id","stack"),w(e,"class","svelte-xwxuqt")},m(t,s){u(t,e,s),G(n,e,null),l=!0,r||(o=$(e,"click",k(a)),r=!0)},p(e,l){t=e;const r={};!s&&1&l&&(s=!0,r.group=t[5],O((()=>s=!1))),n.$set(r)},i(t){l||(Y(n.$$.fragment,t),l=!0)},o(t){I(n.$$.fragment,t),l=!1},d(t){t&&f(e),Q(n),r=!1,o()}}}function Mt(t){let e,n,s,l,r;function o(e){t[11].call(null,e,t[14],t[15],t[16])}function i(e){t[12].call(null,e)}function c(e){t[13].call(null,e)}let a={};return void 0!==t[14]&&(a.task=t[14]),void 0!==t[3]&&(a.dummy=t[3]),void 0!==t[5]&&(a.group=t[5]),e=new $t({props:a}),E.push((()=>Z(e,"task",o))),E.push((()=>Z(e,"dummy",i))),E.push((()=>Z(e,"group",c))),{c(){K(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},p(r,o){t=r;const i={};!n&&1&o&&(n=!0,i.task=t[14],O((()=>n=!1))),!s&&8&o&&(s=!0,i.dummy=t[3],O((()=>s=!1))),!l&&32&o&&(l=!0,i.group=t[5],O((()=>l=!1))),e.$set(i)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){Q(e,t)}}}function Bt(t){let e,n,s,l,r,o,i,c;function h(e){t[6].call(null,e)}function d(e){t[7].call(null,e)}function v(e){t[8].call(null,e)}let $={};void 0!==t[2]&&($.selection=t[2]),void 0!==t[1]&&($.isActive=t[1]),void 0!==t[4]&&($.gridTemplate=t[4]),e=new yt({props:$}),E.push((()=>Z(e,"selection",h))),E.push((()=>Z(e,"isActive",d))),E.push((()=>Z(e,"gridTemplate",v)));let k=t[0].tasks,x=[];for(let e=0;e<k.length;e+=1)x[e]=jt(At(t,k,e));const b=t=>I(x[t],1,1,(()=>{x[t]=null}));let y=t[0].dummy.taskList,T=[];for(let e=0;e<y.length;e+=1)T[e]=Mt(Et(t,y,e));const L=t=>I(T[t],1,1,(()=>{T[t]=null}));return{c(){K(e.$$.fragment),r=g(),o=p("main");for(let t=0;t<x.length;t+=1)x[t].c();i=g();for(let t=0;t<T.length;t+=1)T[t].c();w(o,"class","svelte-xwxuqt")},m(t,n){G(e,t,n),u(t,r,n),u(t,o,n);for(let t=0;t<x.length;t+=1)x[t].m(o,null);a(o,i);for(let t=0;t<T.length;t+=1)T[t].m(o,null);c=!0},p(t,[r]){const c={};if(!n&&4&r&&(n=!0,c.selection=t[2],O((()=>n=!1))),!s&&2&r&&(s=!0,c.isActive=t[1],O((()=>s=!1))),!l&&16&r&&(l=!0,c.gridTemplate=t[4],O((()=>l=!1))),e.$set(c),7&r){let e;for(k=t[0].tasks,e=0;e<k.length;e+=1){const n=At(t,k,e);x[e]?(x[e].p(n,r),Y(x[e],1)):(x[e]=jt(n),x[e].c(),Y(x[e],1),x[e].m(o,i))}for(J(),e=k.length;e<x.length;e+=1)b(e);P()}if(41&r){let e;for(y=t[0].dummy.taskList,e=0;e<y.length;e+=1){const n=Et(t,y,e);T[e]?(T[e].p(n,r),Y(T[e],1)):(T[e]=Mt(n),T[e].c(),Y(T[e],1),T[e].m(o,null))}for(J(),e=y.length;e<T.length;e+=1)L(e);P()}},i(t){if(!c){Y(e.$$.fragment,t);for(let t=0;t<k.length;t+=1)Y(x[t]);for(let t=0;t<y.length;t+=1)Y(T[t]);c=!0}},o(t){I(e.$$.fragment,t),x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)I(x[t]);T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)I(T[t]);c=!1},d(t){Q(e,t),t&&f(r),t&&f(o),m(x,t),m(T,t)}}}function St(t,e,n){let{finalTasks:s}=e,{isActive:l=!1}=e,{selection:r=[]}=e,o=!0,i=!1,c="";return t.$$set=t=>{"finalTasks"in t&&n(0,s=t.finalTasks),"isActive"in t&&n(1,l=t.isActive),"selection"in t&&n(2,r=t.selection)},[s,l,r,o,c,i,function(t){r=t,n(2,r)},function(t){l=t,n(1,l)},function(t){c=t,n(4,c)},function(t,e,l,r){l[r]=t,n(0,s)},t=>{n(2,r=t.taskList),n(1,l=!0)},function(t,e,l,r){l[r]=t,n(0,s)},function(t){o=t,n(3,o)},function(t){i=t,n(5,i)}]}class Ot extends V{constructor(t){super(),U(this,t,St,Bt,r,{finalTasks:0,isActive:1,selection:2})}}const Ht=[];const Dt=function(e,n=t){let s;const l=[];function o(t){if(r(e,t)&&(e=t,s)){const t=!Ht.length;for(let t=0;t<l.length;t+=1){const n=l[t];n[1](),Ht.push(n,e)}if(t){for(let t=0;t<Ht.length;t+=2)Ht[t][0](Ht[t+1]);Ht.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(r,i=t){const c=[r,i];return l.push(c),1===l.length&&(s=n(o)||t),r(e),()=>{const t=l.indexOf(c);-1!==t&&l.splice(t,1),0===l.length&&(s(),s=null)}}}}([]);function Ft(t){let e,n,s,l,r,o,i;function c(e){t[8].call(null,e)}function a(e){t[9].call(null,e)}let m={};function p(e){t[11].call(null,e)}void 0!==t[2]&&(m.searchTerm=t[2]),void 0!==t[3]&&(m.taskTitles=t[3]),e=new ct({props:m}),E.push((()=>Z(e,"searchTerm",c))),E.push((()=>Z(e,"taskTitles",a))),e.$on("updateSearch",t[10]);let h={};return void 0!==t[4]&&(h.finalTasks=t[4]),r=new Ot({props:h}),E.push((()=>Z(r,"finalTasks",p))),{c(){K(e.$$.fragment),l=g(),K(r.$$.fragment)},m(t,n){G(e,t,n),u(t,l,n),G(r,t,n),i=!0},p(t,[l]){const i={};!n&&4&l&&(n=!0,i.searchTerm=t[2],O((()=>n=!1))),!s&&8&l&&(s=!0,i.taskTitles=t[3],O((()=>s=!1))),e.$set(i);const c={};!o&&16&l&&(o=!0,c.finalTasks=t[4],O((()=>o=!1))),r.$set(c)},i(t){i||(Y(e.$$.fragment,t),Y(r.$$.fragment,t),i=!0)},o(t){I(e.$$.fragment,t),I(r.$$.fragment,t),i=!1},d(t){Q(e,t),t&&f(l),Q(r,t)}}}function zt(t,e,n){let s;o(t,Dt,(t=>n(12,s=t)));let{semesterTasks:l}=e,{sprint:r}=e,{semester:i}=e,c="",a=[],u={tasks:[],dummy:{title:"Task",taskList:[]}},f={client:"FDND",semesterName:s.filter((t=>t.semester===i))[0].semesterName,sprintName:r,"support-level":1,tags:["semantiek","responsive design","ui-interacties","html","css","javascript"],title:"Task",url:"https://github.com/fdnd-task/fdnd-net-presence-example"};const m=(t,e)=>function(t,e){const s=e.filter((e=>e.sprintName===t.sprint));return n(3,a=function(t){let e=[];return t.forEach((t=>e.push({title:t.title,client:t.client}))),e=e.filter(((t,e,n)=>n.findIndex((e=>JSON.stringify(e)===JSON.stringify(t)))===e)),e}(s)),n(4,u.tasks=s,u)}(t,e);function p(t){let e=a.map((t=>({title:t.title,client:t.client,taskList:[]})));t.forEach((t=>{e.forEach((e=>{e.title==t.title&&e.client==t.client&&e.taskList.push(t)}))})),e.forEach((t=>t.taskList.sort(((t,e)=>e["support-level"]-t["support-level"]))));let s=e.length;for(;s<3;)s++,u.dummy.taskList.push(f);return n(4,u.tasks=e,u)}p(m(r,l));return t.$$set=t=>{"semesterTasks"in t&&n(0,l=t.semesterTasks),"sprint"in t&&n(1,r=t.sprint),"semester"in t&&n(7,i=t.semester)},[l,r,c,a,u,m,p,i,function(t){c=t,n(2,c)},function(t){a=t,n(3,a)},()=>{var t;n(4,u.dummy.taskList=[],u),n(4,u.tasks=(t=c,l.filter((e=>{if(function(t,e){let n=!1;return t.forEach((t=>{if(t.toLowerCase().match(e))return n=!0})),n}(e.tags,t.toLowerCase())||e.title.toLowerCase().match(t.toLowerCase())||e.semesterName.toLowerCase().match(t.toLowerCase())||e.sprintName.toLowerCase().match(t.toLowerCase()))return!0}))),u),p(m(r,u.tasks))},function(t){u=t,n(4,u)}]}class Wt extends V{constructor(t){super(),U(this,t,zt,Ft,r,{semesterTasks:0,sprint:1,semester:7})}}function qt(t){let e,n,s,l,r,o,i,c,m,v,b,T,L,_,N,C,A,j,M,B,S,H,D=t[0].sprint+"";function F(e){t[6].call(null,e)}function z(e){t[7].call(null,e)}function W(e){t[8].call(null,e)}let q={};return void 0!==t[0]&&(q.sprint=t[0]),void 0!==t[1]&&(q.semesterTasks=t[1]),void 0!==t[2]&&(q.semester=t[2]),N=new Wt({props:q}),E.push((()=>Z(N,"sprint",F))),E.push((()=>Z(N,"semesterTasks",z))),E.push((()=>Z(N,"semester",W))),{c(){e=p("section"),n=p("a"),s=p("h3"),l=d("Sprint: "),r=p("strong"),o=d(D),i=g(),c=h("svg"),m=h("path"),v=h("line"),b=h("line"),T=h("line"),_=g(),K(N.$$.fragment),w(m,"stroke","none"),w(m,"d","M0 0h24v24H0z"),w(m,"fill","none"),w(v,"x1","12"),w(v,"y1","5"),w(v,"x2","12"),w(v,"y2","19"),w(b,"x1","18"),w(b,"y1","13"),w(b,"x2","12"),w(b,"y2","19"),w(T,"x1","6"),w(T,"y1","13"),w(T,"x2","12"),w(T,"y2","19"),w(c,"xmlns","http://www.w3.org/2000/svg"),w(c,"class","icon icon-tabler icon-tabler-arrow-down svelte-xelhki"),w(c,"viewBox","0 0 24 24"),w(c,"stroke-width","1.5"),w(c,"stroke","#2c3e50"),w(c,"fill","none"),w(c,"stroke-linecap","round"),w(c,"stroke-linejoin","round"),w(s,"class","svelte-xelhki"),w(n,"href",L="/#"+t[4]()),w(n,"class","svelte-xelhki"),w(e,"id",M=t[4]()),w(e,"class","svelte-xelhki"),y(e,"active",t[3])},m(f,p){u(f,e,p),a(e,n),a(n,s),a(s,l),a(s,r),a(r,o),a(s,i),a(s,c),a(c,m),a(c,v),a(c,b),a(c,T),a(e,_),G(N,e,null),B=!0,S||(H=$(n,"click",k(t[5])),S=!0)},p(t,[n]){(!B||1&n)&&D!==(D=t[0].sprint+"")&&x(o,D);const s={};!C&&1&n&&(C=!0,s.sprint=t[0],O((()=>C=!1))),!A&&2&n&&(A=!0,s.semesterTasks=t[1],O((()=>A=!1))),!j&&4&n&&(j=!0,s.semester=t[2],O((()=>j=!1))),N.$set(s),8&n&&y(e,"active",t[3])},i(t){B||(Y(N.$$.fragment,t),B=!0)},o(t){I(N.$$.fragment,t),B=!1},d(t){t&&f(e),Q(N),S=!1,H()}}}function Jt(t,e,n){let{sprint:s}=e,{semesterTasks:l}=e,{semester:r}=e,o=!1;return t.$$set=t=>{"sprint"in t&&n(0,s=t.sprint),"semesterTasks"in t&&n(1,l=t.semesterTasks),"semester"in t&&n(2,r=t.semester)},[s,l,r,o,function(){return s.sprint.replace(/ /g,"-").toLowerCase()},()=>n(3,o=!o),function(t){s=t,n(0,s)},function(t){l=t,n(1,l)},function(t){r=t,n(2,r)}]}class Pt extends V{constructor(t){super(),U(this,t,Jt,qt,r,{sprint:0,semesterTasks:1,semester:2})}}function Yt(t,e,n){const s=t.slice();return s[8]=e[n],s[9]=e,s[10]=n,s}function It(t){let e,n,s,l,r;function o(e){t[3].call(null,e)}function i(e){t[4].call(null,e,t[8],t[9],t[10])}function c(e){t[5].call(null,e)}let a={};return void 0!==t[0]&&(a.semester=t[0]),void 0!==t[8]&&(a.sprint=t[8]),void 0!==t[2]&&(a.semesterTasks=t[2]),e=new Pt({props:a}),E.push((()=>Z(e,"semester",o))),E.push((()=>Z(e,"sprint",i))),E.push((()=>Z(e,"semesterTasks",c))),{c(){K(e.$$.fragment)},m(t,n){G(e,t,n),r=!0},p(r,o){t=r;const i={};!n&&1&o&&(n=!0,i.semester=t[0],O((()=>n=!1))),!s&&2&o&&(s=!0,i.sprint=t[8],O((()=>s=!1))),!l&&4&o&&(l=!0,i.semesterTasks=t[2],O((()=>l=!1))),e.$set(i)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){Q(e,t)}}}function Zt(t){let e,n,s=t[1],l=[];for(let e=0;e<s.length;e+=1)l[e]=It(Yt(t,s,e));const r=t=>I(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=v()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);u(t,e,s),n=!0},p(t,[n]){if(7&n){let o;for(s=t[1],o=0;o<s.length;o+=1){const r=Yt(t,s,o);l[o]?(l[o].p(r,n),Y(l[o],1)):(l[o]=It(r),l[o].c(),Y(l[o],1),l[o].m(e.parentNode,e))}for(J(),o=s.length;o<l.length;o+=1)r(o);P()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)Y(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)I(l[t]);n=!1},d(t){m(l,t),t&&f(e)}}}function Kt(t,e,n){let s;o(t,Dt,(t=>n(6,s=t)));let{semester:l}=e,r=[],i=[];return function(t,e){n(2,i=e.filter((e=>e.semester===t))),i.forEach((t=>r.push({sprint:t.sprintName,index:t.sprint})));const s=new Set;let l=r.filter((t=>{const e=s.has(t.index);return s.add(t.index),!e}));l.sort(((t,e)=>t.index-e.index)),n(1,r=l)}(l,s),t.$$set=t=>{"semester"in t&&n(0,l=t.semester)},[l,r,i,function(t){l=t,n(0,l)},function(t,e,s,l){s[l]=t,n(1,r)},function(t){i=t,n(2,i)}]}class Gt extends V{constructor(t){super(),U(this,t,Kt,Zt,r,{semester:0})}}function Qt(t){let e,n,s,l,r,o,i,c,m,h,v=t[1].filter(t[2])[0].semesterName+"";function $(e){t[3].call(null,e)}let k={};return void 0!==t[0]&&(k.semester=t[0]),c=new Gt({props:k}),E.push((()=>Z(c,"semester",$))),{c(){e=p("section"),n=p("h2"),s=d("Semester "),l=d(t[0]),r=d(": "),o=d(v),i=g(),K(c.$$.fragment),w(n,"class","svelte-jaasiu"),w(e,"class","svelte-jaasiu")},m(t,f){u(t,e,f),a(e,n),a(n,s),a(n,l),a(n,r),a(n,o),a(e,i),G(c,e,null),h=!0},p(t,[e]){(!h||1&e)&&x(l,t[0]),(!h||3&e)&&v!==(v=t[1].filter(t[2])[0].semesterName+"")&&x(o,v);const n={};!m&&1&e&&(m=!0,n.semester=t[0],O((()=>m=!1))),c.$set(n)},i(t){h||(Y(c.$$.fragment,t),h=!0)},o(t){I(c.$$.fragment,t),h=!1},d(t){t&&f(e),Q(c)}}}function Rt(t,e,n){let s;o(t,Dt,(t=>n(1,s=t)));let{semester:l}=e;const r=s.filter((t=>void 0!==t.semesterName));c(Dt,s=r,s);return t.$$set=t=>{"semester"in t&&n(0,l=t.semester)},[l,s,t=>t.semester===l,function(t){l=t,n(0,l)}]}class Ut extends V{constructor(t){super(),U(this,t,Rt,Qt,r,{semester:0})}}function Vt(t,e,n){const s=t.slice();return s[2]=e[n],s[3]=e,s[4]=n,s}function Xt(t){let e,n,s;function l(e){t[1].call(null,e,t[2],t[3],t[4])}let r={};return void 0!==t[2]&&(r.semester=t[2]),e=new Ut({props:r}),E.push((()=>Z(e,"semester",l))),{c(){K(e.$$.fragment)},m(t,n){G(e,t,n),s=!0},p(s,l){t=s;const r={};!n&&1&l&&(n=!0,r.semester=t[2],O((()=>n=!1))),e.$set(r)},i(t){s||(Y(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function te(t){let e,n,s=t[0],l=[];for(let e=0;e<s.length;e+=1)l[e]=Xt(Vt(t,s,e));const r=t=>I(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=v()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);u(t,e,s),n=!0},p(t,[n]){if(1&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=Vt(t,s,o);l[o]?(l[o].p(r,n),Y(l[o],1)):(l[o]=Xt(r),l[o].c(),Y(l[o],1),l[o].m(e.parentNode,e))}for(J(),o=s.length;o<l.length;o+=1)r(o);P()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)Y(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)I(l[t]);n=!1},d(t){m(l,t),t&&f(e)}}}function ee(t,e,n){let{semesters:s}=e;return t.$$set=t=>{"semesters"in t&&n(0,s=t.semesters)},[s,function(t,e,l,r){l[r]=t,n(0,s)}]}class ne extends V{constructor(t){super(),U(this,t,ee,te,r,{semesters:0})}}function se(t){let e,n,s,l,r,o,i,c,m,h;function d(e){t[1].call(null,e)}let v={};return void 0!==t[0]&&(v.semesters=t[0]),o=new ne({props:v}),E.push((()=>Z(o,"semesters",d))),{c(){e=p("header"),e.innerHTML='<h1 class="svelte-phmtrw"><strong class="svelte-phmtrw">Frontend</strong>Design &amp; Development</h1> \n\t<img src="/assets/images/hogeschool-van-amsterdam.svg" alt="Hogeschool van Amsterdam" class="svelte-phmtrw"/>',n=g(),s=p("main"),l=p("h2"),l.textContent="Leertaken",r=g(),K(o.$$.fragment),c=g(),m=p("footer"),m.innerHTML='<img src="/assets/images/hvapayoff.svg" alt="Hogeschool van Amsterdam" class="svelte-phmtrw"/>',w(e,"class","svelte-phmtrw"),w(l,"class","svelte-phmtrw"),w(s,"class","svelte-phmtrw"),w(m,"class","svelte-phmtrw")},m(t,i){u(t,e,i),u(t,n,i),u(t,s,i),a(s,l),a(s,r),G(o,s,null),u(t,c,i),u(t,m,i),h=!0},p(t,[e]){const n={};!i&&1&e&&(i=!0,n.semesters=t[0],O((()=>i=!1))),o.$set(n)},i(t){h||(Y(o.$$.fragment,t),h=!0)},o(t){I(o.$$.fragment,t),h=!1},d(t){t&&f(e),t&&f(n),t&&f(s),Q(o),t&&f(c),t&&f(m)}}}function le(t,e,n){let s;o(t,Dt,(t=>n(4,s=t)));let l=[],r=[],i=[];var a;return a=async()=>{const t=await fetch("data.json");l=await t.json();const e=l.filter((t=>!t.topics.includes("subtask")));r=et(e),n(0,i=function(t){let e=[];return t.map((t=>{e.push(t.semester)})),e=function(t){let e=[];return t.map((t=>{e.includes(t)||e.push(t)})),e}(e)}(e)),n(0,i=i.filter((t=>"string"!=typeof t))),i.sort(((t,e)=>t-e));const o=function(t){return t.forEach((t=>t["task-difficulty"]=10*t["behavior-criteria"].collaboration+10*t["behavior-criteria"]["learning-capacity"]+10*t["behavior-criteria"]["problem-solving"]+10*t["behavior-criteria"]["act-methodically"]+10*t["behavior-criteria"].communicating-4*t["support-level"])),t}(r);c(Dt,s=o,s)},_().$$.on_mount.push(a),[i,function(t){i=t,n(0,i)}]}return new class extends V{constructor(t){super(),U(this,t,le,se,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
