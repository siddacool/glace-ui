import{C as ue,D as C,E as O,F as R,G as Q,H as F,I as oe,i as le,m as N,J as K,K as fe,T as ce,M as de,O as pe,P as _e,Q as ve,k as x,p as he,c as X,a as me,j as ee,R as re,S as Y,U as q,V as be,W as we,u as z,d as B,X as Ee,z as m,A as ge,Y as U,Z as Pe,B as Z,_ as $,$ as Se,a0 as ye,a1 as Ie,a2 as ne,a3 as Te,a4 as Le,w as Ae,x as Oe,a5 as Re,a6 as te,a7 as ae,b as Ne,a8 as xe,a9 as De,aa as Me,ab as S}from"./context-B_19ab8Y.js";const ke="5.25.6",Ve="5";var J;typeof window<"u"&&((J=window.__svelte??(window.__svelte={})).v??(J.v=new Set)).add(Ve);ue();let D=[];function Ce(){var e=D;D=[],C(e)}function qe(e){D.length===0&&queueMicrotask(Ce),D.push(e)}function Je(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Be=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Qe(e){return Be.includes(e)}const Ue={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Xe(e){return e=e.toLowerCase(),Ue[e]??e}const $e=["touchstart","touchmove"];function je(e){return $e.includes(e)}function We(e){var r=Q,n=F;O(null),R(null);try{return e()}finally{O(r),R(n)}}const se=new Set,j=new Set;function er(e,r,n,a={}){function s(t){if(a.capture||y.call(r,t),!t.cancelBubble)return We(()=>n==null?void 0:n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?qe(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function rr(e){for(var r=0;r<e.length;r++)se.add(e[r]);for(var n of j)n(e)}function y(e){var L;var r=this,n=r.ownerDocument,a=e.type,s=((L=e.composedPath)==null?void 0:L.call(e))||[],t=s[0]||e.target,u=0,c=e.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var f=s.indexOf(r);if(f===-1)return;l<=f&&(u=l)}if(t=s[u]||e.target,t!==r){oe(e,"currentTarget",{configurable:!0,get(){return t||n}});var E=Q,d=F;O(null),R(null);try{for(var i,o=[];t!==null;){var _=t.assignedSlot||t.parentNode||t.host||null;try{var v=t["__"+a];if(v!=null&&(!t.disabled||e.target===t))if(le(v)){var[b,...T]=v;b.apply(t,[e,...T])}else v.call(t,e)}catch(w){i?o.push(w):i=w}if(e.cancelBubble||_===r||_===null)break;t=_}if(i){for(let w of o)queueMicrotask(()=>{throw w});throw i}}finally{e.__root=r,delete e.currentTarget,O(E),R(d)}}}function ie(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function I(e,r){var n=F;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function nr(e,r){var n=(r&ce)!==0,a=(r&de)!==0,s,t=!e.startsWith("<!>");return()=>{s===void 0&&(s=ie(t?e:"<!>"+e),n||(s=N(s)));var u=a||fe?document.importNode(s,!0):s.cloneNode(!0);if(n){var c=N(u),l=u.lastChild;I(c,l)}else I(u,u);return u}}function tr(e,r,n="svg"){var a=!e.startsWith("<!>"),s=`<${n}>${a?e:"<!>"+e}</${n}>`,t;return()=>{if(!t){var u=ie(s),c=N(u);t=N(c)}var l=t.cloneNode(!0);return I(l,l),l}}function ar(e=""){{var r=K(e+"");return I(r,r),r}}function sr(){var e=document.createDocumentFragment(),r=document.createComment(""),n=K();return e.append(r,n),I(r,n),e}function ir(e,r){e!==null&&e.before(r)}function ur(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n+"")}function or(e,r){return Fe(e,r)}const P=new Map;function Fe(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:u=!0}){pe();var c=new Set,l=d=>{for(var i=0;i<d.length;i++){var o=d[i];if(!c.has(o)){c.add(o);var _=je(o);r.addEventListener(o,y,{passive:_});var v=P.get(o);v===void 0?(document.addEventListener(o,y,{passive:_}),P.set(o,1)):P.set(o,v+1)}}};l(_e(se)),j.add(l);var f=void 0,E=ve(()=>{var d=n??r.appendChild(K());return x(()=>{if(t){he({});var i=X;i.c=t}s&&(a.$$events=s),f=e(d,a)||{},t&&me()}),()=>{var _;for(var i of c){r.removeEventListener(i,y);var o=P.get(i);--o===0?(document.removeEventListener(i,y),P.delete(i)):P.set(i,o)}j.delete(l),d!==n&&((_=d.parentNode)==null||_.removeChild(d))}});return W.set(f,E),f}let W=new WeakMap;function lr(e,r){const n=W.get(e);return n?(W.delete(e),n(r)):Promise.resolve()}function fr(e,r,[n,a]=[0,0]){var s=e,t=null,u=null,c=be,l=n>0?re:0,f=!1;const E=(i,o=!0)=>{f=!0,d(o,i)},d=(i,o)=>{c!==(c=i)&&(c?(t?Y(t):o&&(t=x(()=>o(s))),u&&q(u,()=>{u=null})):(u?Y(u):o&&(u=x(()=>o(s,[n+1,a]))),t&&q(t,()=>{t=null})))};ee(()=>{f=!1,r(E),f||d(null,null)},l)}function cr(e,r,n){var a=e,s,t;ee(()=>{s!==(s=r())&&(t&&(q(t),t=null),s&&(t=x(()=>n(a,s))))},re)}function dr(e=!1){const r=X,n=r.l.u;if(!n)return;let a=()=>ge(r.s);if(e){let s=0,t={};const u=U(()=>{let c=!1;const l=r.s;for(const f in l)l[f]!==t[f]&&(t[f]=l[f],c=!0);return c&&s++,s});a=()=>m(u)}n.b.length&&we(()=>{H(r,a),C(n.b)}),z(()=>{const s=B(()=>n.m.map(Ee));return()=>{for(const t of s)typeof t=="function"&&t()}}),n.a.length&&z(()=>{H(r,a),C(n.a)})}function H(e,r){if(e.l.s)for(const n of e.l.s)m(n);r()}let A=!1;function Ke(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}const Ge={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function pr(e,r,n){return new Proxy({props:e,exclude:r},Ge)}const Ye={get(e,r){if(!e.exclude.includes(r))return m(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=Ze({get[r](){return e.props[r]}},r,ne)),e.special[r](n),Z(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Z(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function _r(e,r){return new Proxy({props:e,exclude:r,special:{},version:Pe(0)},Ye)}const ze={get(e,r){let n=e.props.length;for(;n--;){let a=e.props[n];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,n){let a=e.props.length;for(;a--;){let s=e.props[a];S(s)&&(s=s());const t=$(s,r);if(t&&t.set)return t.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let a=e.props[n];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const s=$(a,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===te||r===ae)return!1;for(let n of e.props)if(S(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){S(n)&&(n=n());for(const a in n)r.includes(a)||r.push(a)}return r}};function vr(...e){return new Proxy({props:e},ze)}function k(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function Ze(e,r,n,a){var G;var s=(n&De)!==0,t=!Ne||(n&xe)!==0,u=(n&Re)!==0,c=(n&Me)!==0,l=!1,f;u?[f,l]=Ke(()=>e[r]):f=e[r];var E=te in e||ae in e,d=u&&(((G=$(e,r))==null?void 0:G.set)??(E&&r in e&&(p=>e[r]=p)))||void 0,i=a,o=!0,_=!1,v=()=>(_=!0,o&&(o=!1,c?i=B(a):i=a),i);f===void 0&&a!==void 0&&(d&&t&&Se(),f=v(),d&&d(f));var b;if(t)b=()=>{var p=e[r];return p===void 0?v():(o=!0,_=!1,p)};else{var T=(s?U:Ie)(()=>e[r]);T.f|=ye,b=()=>{var p=m(T);return p!==void 0&&(i=void 0),p===void 0?i:p}}if((n&ne)===0)return b;if(d){var L=e.$$legacy;return function(p,g){return arguments.length>0?((!t||!g||L||l)&&d(g?b():p),p):b()}}var w=!1,M=Oe(f),h=U(()=>{var p=b(),g=m(M);return w?(w=!1,g):M.v=p});return u&&m(h),s||(h.equals=Te),function(p,g){if(arguments.length>0){const V=g?m(h):t&&u?Le(p):p;if(!h.equals(V)){if(w=!0,Ae(M,V),_&&i!==void 0&&(i=V),k(h))return p;B(()=>m(h))}return p}return k(h)?h.v:m(h)}}export{ke as V,ar as a,ir as b,ie as c,rr as d,I as e,Je as f,er as g,Qe as h,dr as i,sr as j,fr as k,_r as l,tr as m,Xe as n,cr as o,Ze as p,qe as q,pr as r,ur as s,nr as t,vr as u,or as v,lr as w};
