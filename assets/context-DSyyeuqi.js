let et=!1,Qt=!1;function Ln(){et=!0}const jn=1,qn=2,Bn=4,Un=8,Yn=16,Hn=1,Vn=2,Gn=4,Kn=8,Zn=16,$n=1,Wn=2,y=Symbol(),Xn="http://www.w3.org/1999/xhtml",xt=!1;function tn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var nn=Array.isArray,en=Array.prototype.indexOf,zn=Array.from,Jn=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,ln=Object.prototype,an=Array.prototype,Ot=Object.getPrototypeOf,mt=Object.isExtensible;function Qn(t){return typeof t=="function"}const te=()=>{};function ne(t){return t()}function ee(t){for(var e=0;e<t.length;e++)t[e]()}function re(t,e,n=!1){return t===void 0?n?e():e:t}const I=2,Dt=4,rt=8,vt=16,R=32,q=64,X=128,x=256,z=512,E=1024,D=2048,N=4096,L=8192,lt=16384,sn=32768,Rt=65536,le=1<<17,fn=1<<19,St=1<<20,ot=1<<21,H=Symbol("$state"),ae=Symbol("legacy props"),se=Symbol("");function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _n(t){throw new Error("https://svelte.dev/e/effect_orphan")}function cn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fe(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function M(t){if(typeof t!="object"||t===null||H in t)return t;const e=Ot(t);if(e!==ln&&e!==an)return t;var n=new Map,r=nn(t),a=S(0),l=v,i=u=>{var s=v;j(l);var f=u();return j(s),f};return r&&n.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&vn();var _=n.get(s);return _===void 0?(_=i(()=>S(f.value)),n.set(s,_)):b(_,i(()=>M(f.value))),!0},deleteProperty(u,s){var f=n.get(s);if(f===void 0)s in u&&n.set(s,i(()=>S(y)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&b(_,o)}b(f,y),Tt(a)}return!0},get(u,s,f){var A;if(s===H)return t;var _=n.get(s),o=s in u;if(_===void 0&&(!o||(A=Y(u,s))!=null&&A.writable)&&(_=i(()=>S(M(o?u[s]:y))),n.set(s,_)),_!==void 0){var c=P(_);return c===y?void 0:c}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=P(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,s){var c;if(s===H)return!0;var f=n.get(s),_=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!_||(c=Y(u,s))!=null&&c.writable)){f===void 0&&(f=i(()=>S(_?M(u[s]):y)),n.set(s,f));var o=P(f);if(o===y)return!1}return _},set(u,s,f,_){var gt;var o=n.get(s),c=s in u;if(r&&s==="length")for(var A=f;A<o.v;A+=1){var K=n.get(A+"");K!==void 0?b(K,y):A in u&&(K=i(()=>S(y)),n.set(A+"",K))}o===void 0?(!c||(gt=Y(u,s))!=null&&gt.writable)&&(o=i(()=>S(void 0)),b(o,i(()=>M(f))),n.set(s,o)):(c=o.v!==y,b(o,i(()=>M(f))));var Z=Reflect.getOwnPropertyDescriptor(u,s);if(Z!=null&&Z.set&&Z.set.call(_,f),!c){if(r&&typeof s=="string"){var yt=n.get("length"),it=Number(s);Number.isInteger(it)&&it>=yt.v&&b(yt,it+1)}Tt(a)}return!0},ownKeys(u){P(a);var s=Reflect.ownKeys(u).filter(o=>{var c=n.get(o);return c===void 0||c.v!==y});for(var[f,_]of n)_.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){pn()}})}function Tt(t,e=1){b(t,t.v+e)}var At,dn,Ct,Pt;function ue(){if(At===void 0){At=window,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Ct=Y(e,"firstChild").get,Pt=Y(e,"nextSibling").get,mt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),mt(n)&&(n.__t=void 0)}}function ie(t=""){return document.createTextNode(t)}function Nt(t){return Ct.call(t)}function pt(t){return Pt.call(t)}function oe(t,e){return Nt(t)}function _e(t,e){{var n=Nt(t);return n instanceof Comment&&n.data===""?pt(n):n}}function ce(t,e=1,n=!1){let r=t;for(;e--;)r=pt(r);return r}function ve(t){t.textContent=""}function kt(t){return t===this.v}function wn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ft(t){return!wn(t,this.v)}function ht(t){var e=I|D,n=v!==null&&(v.f&I)!==0?v:null;return h===null||n!==null&&(n.f&x)!==0?e|=x:h.f|=St,{ctx:p,deps:null,effects:null,equals:kt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function pe(t){const e=ht(t);return Kt(e),e}function he(t){const e=ht(t);return e.equals=Ft,e}function Mt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function En(t){for(var e=t.parent;e!==null;){if((e.f&I)===0)return e;e=e.parent}return null}function Lt(t){var e,n=h;Q(En(t));try{Mt(t),e=Xt(t)}finally{Q(n)}return e}function jt(t){var e=Lt(t),n=(C||(t.f&x)!==0)&&t.deps!==null?N:E;T(t,n),t.equals(e)||(t.v=e,t.wv=$t())}function qt(t){h===null&&v===null&&_n(),v!==null&&(v.f&x)!==0&&h===null&&on(),G&&un()}function yn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function B(t,e,n,r=!0){var a=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{st(l),l.f|=sn}catch(s){throw F(l),s}else e!==null&&ft(l);var i=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(St|X))===0;if(!i&&r&&(a!==null&&yn(l,a),v!==null&&(v.f&I)!==0)){var u=v;(u.effects??(u.effects=[])).push(l)}return l}function gn(t){const e=B(rt,null,!1);return T(e,E),e.teardown=t,e}function de(t){qt();var e=h!==null&&(h.f&R)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Bt(t);return r}}function we(t){return qt(),dt(t)}function Ee(t){const e=B(q,t,!0);return(n={})=>new Promise(r=>{n.outro?Tn(e,()=>{F(e),r(void 0)}):(F(e),r(void 0))})}function Bt(t){return B(Dt,t,!1)}function ye(t,e){var n=p,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=dt(()=>{t(),!r.ran&&(r.ran=!0,b(n.l.r2,!0),zt(e))})}function ge(){var t=p;dt(()=>{if(P(t.l.r2)){for(var e of t.l.r1){var n=e.effect;(n.f&E)!==0&&T(n,N),U(n)&&st(n),e.ran=!1}t.l.r2.v=!1}})}function dt(t){return B(rt,t,!0)}function xe(t,e=[],n=ht){const r=e.map(n);return xn(()=>t(...r.map(P)))}function xn(t,e=0){return B(rt|vt|e,t,!0)}function me(t,e=!0){return B(rt|R,t,!0,e)}function Ut(t){var e=t.teardown;if(e!==null){const n=G,r=v;bt(!0),j(null);try{e.call(null)}finally{bt(n),j(r)}}}function Yt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&q)!==0?n.parent=null:F(n,e),n=r}}function mn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&R)===0&&F(e),e=n}}function F(t,e=!0){var n=!1;if((e||(t.f&fn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:pt(r);r.remove(),r=l}n=!0}Yt(t,e&&!n),nt(t,0),T(t,lt);var i=t.transitions;if(i!==null)for(const s of i)s.stop();Ut(t);var u=t.parent;u!==null&&u.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Tn(t,e){var n=[];Vt(t,n,!0),An(n,()=>{F(t),e&&e()})}function An(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Vt(t,e,n){if((t.f&L)===0){if(t.f^=L,t.transitions!==null)for(const i of t.transitions)(i.is_global||n)&&e.push(i);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Rt)!==0||(r.f&R)!==0;Vt(r,e,l?n:!1),r=a}}}function Te(t){Gt(t,!0)}function Gt(t,e){if((t.f&L)!==0){t.f^=L,(t.f&E)===0&&(t.f^=E),U(t)&&(T(t,D),ft(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Rt)!==0||(n.f&R)!==0;Gt(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let $=!1,_t=!1,J=null,k=!1,G=!1;function bt(t){G=t}let W=[];let v=null,O=!1;function j(t){v=t}let h=null;function Q(t){h=t}let w=null;function bn(t){w=t}function Kt(t){v!==null&&v.f&ot&&(w===null?bn([t]):w.push(t))}let d=null,g=0,m=null;function In(t){m=t}let Zt=1,tt=0,C=!1;function $t(){return++Zt}function U(t){var o;var e=t.f;if((e&D)!==0)return!0;if((e&N)!==0){var n=t.deps,r=(e&x)!==0;if(n!==null){var a,l,i=(e&z)!==0,u=r&&h!==null&&!C,s=n.length;if(i||u){var f=t,_=f.parent;for(a=0;a<s;a++)l=n[a],(i||!((o=l==null?void 0:l.reactions)!=null&&o.includes(f)))&&(l.reactions??(l.reactions=[])).push(f);i&&(f.f^=z),u&&_!==null&&(_.f&x)===0&&(f.f^=x)}for(a=0;a<s;a++)if(l=n[a],U(l)&&jt(l),l.wv>t.wv)return!0}(!r||h!==null&&!C)&&T(t,E)}return!1}function On(t,e){for(var n=e;n!==null;){if((n.f&X)!==0)try{n.fn(t);return}catch{n.f^=X}n=n.parent}throw $=!1,t}function Dn(t){return(t.f&lt)===0&&(t.parent===null||(t.parent.f&X)===0)}function at(t,e,n,r){if($){if(n===null&&($=!1),Dn(e))throw t;return}n!==null&&($=!0);{On(t,e);return}}function Wt(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];w!=null&&w.includes(t)||((l.f&I)!==0?Wt(l,e,!1):e===l&&(n?T(l,D):(l.f&E)!==0&&T(l,N),ft(l)))}}function Xt(t){var A;var e=d,n=g,r=m,a=v,l=C,i=w,u=p,s=O,f=t.f;d=null,g=0,m=null,C=(f&x)!==0&&(O||!k||v===null),v=(f&(R|q))===0?t:null,w=null,It(t.ctx),O=!1,tt++,t.f|=ot;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(nt(t,g),o!==null&&g>0)for(o.length=g+d.length,c=0;c<d.length;c++)o[g+c]=d[c];else t.deps=o=d;if(!C)for(c=g;c<o.length;c++)((A=o[c]).reactions??(A.reactions=[])).push(t)}else o!==null&&g<o.length&&(nt(t,g),o.length=g);if(ut()&&m!==null&&!O&&o!==null&&(t.f&(I|N|D))===0)for(c=0;c<m.length;c++)Wt(m[c],t);return a!==t&&(tt++,m!==null&&(r===null?r=m:r.push(...m))),_}finally{d=e,g=n,m=r,v=a,C=l,w=i,It(u),O=s,t.f^=ot}}function Rn(t,e){let n=e.reactions;if(n!==null){var r=en.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&I)!==0&&(d===null||!d.includes(e))&&(T(e,N),(e.f&(x|z))===0&&(e.f^=z),Mt(e),nt(e,0))}function nt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Rn(t,n[r])}function st(t){var e=t.f;if((e&lt)===0){T(t,E);var n=h,r=p,a=k;h=t,k=!0;try{(e&vt)!==0?mn(t):Yt(t),Ut(t);var l=Xt(t);t.teardown=typeof l=="function"?l:null,t.wv=Zt;var i=t.deps,u;xt&&Qt&&t.f&D}catch(s){at(s,t,n,r||t.ctx)}finally{k=a,h=n}}}function Sn(){try{cn()}catch(t){if(J!==null)at(t,J,null);else throw t}}function Cn(){var t=k;try{var e=0;for(k=!0;W.length>0;){e++>1e3&&Sn();var n=W,r=n.length;W=[];for(var a=0;a<r;a++){var l=Nn(n[a]);Pn(l)}V.clear()}}finally{_t=!1,k=t,J=null}}function Pn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(lt|L))===0)try{U(r)&&(st(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ht(r):r.fn=null))}catch(a){at(a,r,null,r.ctx)}}}function ft(t){_t||(_t=!0,queueMicrotask(Cn));for(var e=J=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(q|R))!==0){if((n&E)===0)return;e.f^=E}}W.push(e)}function Nn(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(R|q))!==0,l=a&&(r&E)!==0;if(!l&&(r&L)===0){if((r&Dt)!==0)e.push(n);else if(a)n.f^=E;else{var i=v;try{v=n,U(n)&&st(n)}catch(f){at(f,n,null,n.ctx)}finally{v=i}}var u=n.first;if(u!==null){n=u;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function P(t){var e=t.f,n=(e&I)!==0;if(v!==null&&!O){if(!(w!=null&&w.includes(t))){var r=v.deps;t.rv<tt&&(t.rv=tt,d===null&&r!==null&&r[g]===t?g++:d===null?d=[t]:(!C||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&x)===0&&(a.f^=x)}return n&&(a=t,U(a)&&jt(a)),G&&V.has(t)?V.get(t):t.v}function zt(t){var e=O;try{return O=!0,t()}finally{O=e}}const kn=-7169;function T(t,e){t.f=t.f&kn|e}function Ae(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(H in t)ct(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&H in n&&ct(n)}}}function ct(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ct(t[r],e)}catch{}const n=Ot(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=rn(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}const V=new Map;function wt(t,e){var n={f:0,v:t,reactions:null,equals:kt,rv:0,wv:0};return n}function S(t,e){const n=wt(t);return Kt(n),n}function be(t,e=!1){var r;const n=wt(t);return e||(n.equals=Ft),et&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function Ie(t,e){return b(t,zt(()=>P(t))),e}function b(t,e,n=!1){v!==null&&!O&&ut()&&(v.f&(I|vt))!==0&&!(w!=null&&w.includes(t))&&hn();let r=n?M(e):e;return Fn(t,r)}function Fn(t,e){if(!t.equals(e)){var n=t.v;G?V.set(t,e):V.set(t,n),t.v=e,t.wv=$t(),(t.f&I)!==0&&((t.f&D)!==0&&Lt(t),T(t,(t.f&x)===0?E:N)),Jt(t,D),ut()&&h!==null&&(h.f&E)!==0&&(h.f&(R|q))===0&&(m===null?In([t]):m.push(t))}return e}function Oe(t,e=1){var n=P(t),r=e===1?n++:n--;return b(t,n),r}function Jt(t,e){var n=t.reactions;if(n!==null)for(var r=ut(),a=n.length,l=0;l<a;l++){var i=n[l],u=i.f;(u&D)===0&&(!r&&i===h||(T(i,e),(u&(E|x))!==0&&((u&I)!==0?Jt(i,N):ft(i))))}}let p=null;function It(t){p=t}function De(t){return Et().get(t)}function Re(t,e){return Et().set(t,e),e}function Se(t){return Et().has(t)}function Ce(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};et&&!e&&(p.l={s:null,u:null,r1:[],r2:wt(!1)}),gn(()=>{r.d=!0})}function Pe(t){const e=p;if(e!==null){const i=e.e;if(i!==null){var n=h,r=v;e.e=null;try{for(var a=0;a<i.length;a++){var l=i[a];Q(l.effect),j(l.reaction),Bt(l.fn)}}finally{Q(n),j(r)}}p=e.p,e.m=!0}return{}}function ut(){return!et||p!==null&&p.l===null}function Et(t){return p===null&&tn(),p.c??(p.c=new Map(Mn(p)||void 0))}function Mn(t){let e=t.p;for(;e!==null;){const n=e.c;if(n!==null)return n;e=e.p}return null}export{De as $,zn as A,h as B,Fn as C,be as D,wt as E,qn as F,Vt as G,ve as H,L as I,An as J,F as K,se as L,pt as M,Xn as N,jn as O,Yn as P,Bn as Q,Un as R,H as S,M as T,te as U,Nt as V,ye as W,ge as X,Ie as Y,Ae as Z,Oe as _,Pe as a,Re as a0,pe as a1,Ln as a2,ee as a3,j as a4,Q as a5,v as a6,gn as a7,Jn as a8,dn as a9,Wn as aa,$n as ab,ue as ac,Ee as ad,Rt as ae,y as af,we as ag,ne as ah,ht as ai,Y as aj,fe as ak,Gn as al,Ft as am,Kn as an,ae as ao,Hn as ap,Zn as aq,Vn as ar,le as as,Qn as at,Se as au,re as av,de as b,p as c,et as d,Bt as e,_e as f,Ot as g,rn as h,nn as i,ut as j,oe as k,tn as l,P as m,S as n,b as o,Ce as p,ie as q,dt as r,ce as s,xe as t,zt as u,xn as v,he as w,Te as x,me as y,Tn as z};
