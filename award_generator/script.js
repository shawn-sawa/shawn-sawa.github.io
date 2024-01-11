var $e=Object.defineProperty;var ve=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>(ve(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T(){}function me(e){return e()}function de(){return Object.create(null)}function M(e){e.forEach(me)}function ge(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function we(e){return Object.keys(e).length===0}function Te(e,...t){if(e==null){for(const r of t)r(void 0);return T}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function B(e,t,n){e.$$.on_destroy.push(Te(t,n))}function Z(e,t,n){return e.set(n),t}function b(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function k(){return y(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oe(e){let t;return{p(...n){t=n,t.forEach(r=>e.push(r))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function xe(e){return Array.from(e.childNodes)}function Ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function R(e,t){e.value=t??""}function pe(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function he(e,t,n){e.classList.toggle(t,!!n)}let ue;function j(e){ue=e}function ce(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const I=[],_e=[];let A=[];const be=[],ke=Promise.resolve();let ie=!1;function Be(){ie||(ie=!0,ke.then(ye))}function se(e){A.push(e)}const re=new Set;let S=0;function ye(){if(S!==0)return;const e=ue;do{try{for(;S<I.length;){const t=I[S];S++,j(t),Pe(t.$$)}}catch(t){throw I.length=0,S=0,t}for(j(null),I.length=0,S=0;_e.length;)_e.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];re.has(n)||(re.add(n),n())}A.length=0}while(I.length);for(;be.length;)be.pop()();ie=!1,re.clear(),j(e)}function Pe(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}function Ee(e){const t=[],n=[];A.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),A=t}const z=new Set;let Ne;function K(e,t){e&&e.i&&(z.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(z.has(e))return;z.add(e),Ne.c.push(()=>{z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function oe(e){e&&e.c()}function U(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),se(()=>{const s=e.$$.on_mount.map(me).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...s):M(s),e.$$.on_mount=[]}),i.forEach(se)}function D(e,t){const n=e.$$;n.fragment!==null&&(Ee(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(I.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,r,i,s,c=null,o=[-1]){const u=ue;j(e);const l=e.$$={fragment:null,ctx:[],props:s,update:T,not_equal:i,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:de(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};c&&c(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(m,_,...C)=>{const w=C.length?C[0]:_;return l.ctx&&i(l.ctx[m],l.ctx[m]=w)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](w),v&&Se(e,m)),_}):[],l.update(),v=!0,M(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const m=xe(t.target);l.fragment&&l.fragment.l(m),m.forEach(a)}else l.fragment&&l.fragment.c();t.intro&&K(e.$$.fragment),U(e,t.target,t.anchor),ye()}j(u)}class X{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){D(this,1),this.$destroy=T}$on(t,n){if(!ge(n))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);const L=[];function Y(e,t=T){let n;const r=new Set;function i(o){if(J(e,o)&&(e=o,n)){const u=!L.length;for(const l of r)l[1](),L.push(l,e);if(u){for(let l=0;l<L.length;l+=2)L[l][0](L[l+1]);L.length=0}}}function s(o){i(o(e))}function c(o,u=T){const l=[o,u];return r.add(l),r.size===1&&(n=t(i,s)||T),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:c}}const q=Y(!1),Q=Y("SGT Barnes was in charge of setting up the TOC during sergeant time training. he trained 14 soldiers."),G=Y("ncoer"),V=Y("");function Ie(e){let t,n,r,i,s,c;return{c(){t=h("div"),n=h("textarea"),r=k(),i=h("button"),i.innerHTML='<span class="sendBtn__text svelte-18p9ifn">Send</span>',g(n,"class","svelte-18p9ifn"),g(i,"type","button"),g(i,"class","sendBtn svelte-18p9ifn"),he(i,"sendBtn--loading",e[1]),g(t,"class","inputContainer svelte-18p9ifn")},m(o,u){d(o,t,u),b(t,n),R(n,e[0]),b(t,r),b(t,i),s||(c=[H(n,"input",e[3]),H(i,"click",e[2])],s=!0)},p(o,[u]){u&1&&R(n,o[0]),u&2&&he(i,"sendBtn--loading",o[1])},i:T,o:T,d(o){o&&a(t),s=!1,M(c)}}}function Ae(e,t,n){let r,i;B(e,Q,o=>n(0,r=o)),B(e,q,o=>n(1,i=o));function s(o){ce.call(this,e,o)}function c(){r=this.value,Q.set(r)}return[r,i,s,c]}class Me extends X{constructor(t){super(),W(this,t,Ae,Ie,J,{})}}function qe(e){let t,n,r;return{c(){t=h("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="svelte-1yxludy"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>'},m(i,s){d(i,t,s),n||(r=H(t,"click",e[0]),n=!0)},p:T,i:T,o:T,d(i){i&&a(t),n=!1,r()}}}function je(e){function t(n){ce.call(this,e,n)}return[t]}class He extends X{constructor(t){super(),W(this,t,je,qe,J,{})}}function Je(e){let t,n,r,i,s,c,o,u,l,v,m,_,C,w,O;return{c(){t=y("Try these:"),n=h("br"),r=y(`\r
          - PVT Green laid out the BII for his truck for an inventory.`),i=h("br"),s=y(`\r
          - PFC Joe is still breathing.`),c=h("br"),o=y(`\r
          - SPC Jones lead PT.`),u=h("br"),l=y(`\r
          - PFC Jodie tied his shoes.`),v=h("br"),m=y(`\r
          - PVT Snuffy conducted a PMCS on his vehicle.`),_=h("br"),C=k(),w=h("br"),O=y(`\r
          The more detail, the better the results.`)},m(f,p){d(f,t,p),d(f,n,p),d(f,r,p),d(f,i,p),d(f,s,p),d(f,c,p),d(f,o,p),d(f,u,p),d(f,l,p),d(f,v,p),d(f,m,p),d(f,_,p),d(f,C,p),d(f,w,p),d(f,O,p)},p:T,d(f){f&&(a(t),a(n),a(r),a(i),a(s),a(c),a(o),a(u),a(l),a(v),a(m),a(_),a(C),a(w),a(O))}}}function Fe(e){let t,n,r,i,s,c,o,u,l,v,m,_,C,w,O;return{c(){t=y("Try these: "),n=h("br"),r=y(`\r
          - NCO led a critical operation with a team. `),i=h("br"),s=y(`\r
          - NCO introduced a new training module.`),c=h("br"),o=y(`\r
          - NCO was in charge of logistics for a large unit.`),u=h("br"),l=y(`\r
          - NCO was in charge of logistics for a large unit.`),v=h("br"),m=y(`\r
          - NCO was in charge of logistics for a large unit.`),_=h("br"),C=k(),w=h("br"),O=y(`\r
          The more detail, the better the results.`)},m(f,p){d(f,t,p),d(f,n,p),d(f,r,p),d(f,i,p),d(f,s,p),d(f,c,p),d(f,o,p),d(f,u,p),d(f,l,p),d(f,v,p),d(f,m,p),d(f,_,p),d(f,C,p),d(f,w,p),d(f,O,p)},p:T,d(f){f&&(a(t),a(n),a(r),a(i),a(s),a(c),a(o),a(u),a(l),a(v),a(m),a(_),a(C),a(w),a(O))}}}function Ze(e){let t;return{c(){t=y(e[1])},m(n,r){d(n,t,r)},p(n,r){r&2&&Ce(t,n[1])},d(n){n&&a(t)}}}function ze(e){let t,n,r,i,s,c,o,u,l,v,m,_,C,w,O,f,p,P,F,ee,te,fe;function ae($,N){if($[1])return Ze;if($[0]==="ncoer")return Fe;if($[0]==="award")return Je}let E=ae(e),x=E&&E(e);return P=new He({}),P.$on("click",e[5]),ee=Oe(e[3][0]),{c(){t=h("div"),n=h("header"),r=h("h1"),r.textContent="Bullet Generator",i=k(),s=h("div"),c=h("label"),o=y(`NCOER\r
        `),u=h("input"),l=k(),v=h("label"),m=y(`Award\r
        `),_=h("input"),C=k(),w=h("div"),O=h("div"),f=h("div"),x&&x.c(),p=k(),oe(P.$$.fragment),g(u,"type","radio"),g(u,"id","ncoer"),g(u,"name","ncoerOrAward"),u.__value="ncoer",R(u,u.__value),g(c,"for","ncoer"),g(_,"type","radio"),g(_,"id","award"),g(_,"name","ncoerOrAward"),_.__value="award",R(_,_.__value),g(v,"for","award"),pe(s,"display","flex"),pe(s,"gap","1rem"),g(n,"class","svelte-hpu52x"),g(f,"class","generated-text svelte-hpu52x"),g(O,"class","splitter svelte-hpu52x"),g(w,"class","spacer svelte-hpu52x"),g(t,"class","outputContainer svelte-hpu52x"),ee.p(u,_)},m($,N){d($,t,N),b(t,n),b(n,r),b(n,i),b(n,s),b(s,c),b(c,o),b(c,u),u.checked=u.__value===e[0],b(s,l),b(s,v),b(v,m),b(v,_),_.checked=_.__value===e[0],b(t,C),b(t,w),b(w,O),b(O,f),x&&x.m(f,null),b(O,p),U(P,O,null),F=!0,te||(fe=[H(u,"change",e[2]),H(_,"change",e[4])],te=!0)},p($,[N]){N&1&&(u.checked=u.__value===$[0]),N&1&&(_.checked=_.__value===$[0]),E===(E=ae($))&&x?x.p($,N):(x&&x.d(1),x=E&&E($),x&&(x.c(),x.m(f,null)))},i($){F||(K(P.$$.fragment,$),F=!0)},o($){le(P.$$.fragment,$),F=!1},d($){$&&a(t),x&&x.d(),D(P),ee.r(),te=!1,M(fe)}}}function Ge(e,t,n){let r,i;B(e,G,l=>n(0,r=l)),B(e,V,l=>n(1,i=l));const s=[[]];function c(){r=this.__value,G.set(r)}function o(){r=this.__value,G.set(r)}function u(l){ce.call(this,e,l)}return e.$$.update=()=>{e.$$.dirty&1&&console.log(r)},[r,i,c,s,o,u]}class Ve extends X{constructor(t){super(),W(this,t,Ge,ze,J,{})}}async function Re(e,t){const n="https://api.shawnsawa.com",r="POST",i={"content-type":"application/json"},s=JSON.stringify({userInput:e,type:t}),c=await fetch(n,{method:r,headers:i,body:s});if(!c.ok)return console.error(`HTTP error! status: ${c.status}`),null;try{const o=await c.json(),{bullet:u}=o[0];return u}catch(o){return console.error(`Error parsing JSON: ${o}`),null}}function Ke(e){let t,n,r,i,s,c;return n=new Ve({}),n.$on("click",e[0]),i=new Me({}),i.$on("click",e[1]),{c(){t=h("main"),oe(n.$$.fragment),r=k(),oe(i.$$.fragment),s=k(),g(t,"class","svelte-ygwz1p")},m(o,u){d(o,t,u),U(n,t,null),b(t,r),U(i,t,null),d(o,s,u),c=!0},p:T,i(o){c||(K(n.$$.fragment,o),K(i.$$.fragment,o),c=!0)},o(o){le(n.$$.fragment,o),le(i.$$.fragment,o),c=!1},d(o){o&&(a(t),a(s)),D(n),D(i)}}}function Ue(e,t,n){let r,i,s,c;B(e,q,l=>n(2,r=l)),B(e,G,l=>n(3,i=l)),B(e,Q,l=>n(4,s=l)),B(e,V,l=>n(5,c=l));function o(){if(c==="")return console.log("nothing to copy");console.log("copyToClipboard"),navigator.clipboard.writeText(c).then(()=>{console.log(`Text copied to clipboard: 
`,c)}).catch(l=>{console.error(`Failed to copy text: 
`,l)})}async function u(){if(s.trim()==="")return Z(Q,s="",s),console.log("nothing to send");console.log("sendMessage"),Z(q,r=!0,r);const l=await Re(s,i);if(l===null){Z(q,r=!1,r),V.set("There was an error. Please try again later.");return}V.set(l),Z(q,r=!1,r)}return[o,u]}class De extends X{constructor(t){super(),W(this,t,Ue,Ke,J,{})}}new De({target:document.getElementById("app")});
