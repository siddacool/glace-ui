import{c as Fe,e as Le,l as Me,i as ve,f as ne,g as oe,b as C,n as De,t as xe,a as se}from"./props-Bdbk8y77.js";import{j as Ne,k as Re,m as B,n as ze,p as Ie,o as qe,q as Qe,f as W,a as we,r as re,v as F,w as U,x as b,y as Ue,z as He,t as ie,e as Ve,s as H}from"./context-BkX0kXi0.js";import{c as Ge,d as We}from"./create-runtime-stories-DCYq0wzt.js";import{f as Ke}from"./index-fRFe1AOP.js";import{a as ce,s as Je,B as j}from"./Button.stories-DDjHWoAp.js";import{o as Xe,a as Ye,c as Ze}from"./index-client-CUoQVBhe.js";import"./index-CfOrKyLd.js";function et(e,n,o,s,t){var r=e,i="",c;Ne(()=>{i!==(i=n()??"")&&(c!==void 0&&(ze(c),c=void 0),i!==""&&(c=Re(()=>{var l=i+"";l=`<svg>${l}</svg>`;var a=Fe(l);for(a=B(a),Le(B(a),a.lastChild);B(a);)r.before(B(a))})))})}const ke=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,n,o,s="")=>{const t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;s=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){const c=t.pop(),l=t.pop(),a={provider:t.length>0?t[0]:s,prefix:l,name:c};return n&&!M(a)?null:a}const r=t[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return n&&!M(c)?null:c}if(o&&s===""){const c={provider:s,prefix:"",name:r};return n&&!M(c,o)?null:c}return null},M=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,_e=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),z=Object.freeze({..._e,...N}),K=Object.freeze({...z,body:"",hidden:!1});function tt(e,n){const o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);const s=((e.rotate||0)+(n.rotate||0))%4;return s&&(o.rotate=s),o}function le(e,n){const o=tt(e,n);for(const s in K)s in N?s in e&&!(s in o)&&(o[s]=N[s]):s in n?o[s]=n[s]:s in e&&(o[s]=e[s]);return o}function nt(e,n){const o=e.icons,s=e.aliases||Object.create(null),t=Object.create(null);function r(i){if(o[i])return t[i]=[];if(!(i in t)){t[i]=null;const c=s[i]&&s[i].parent,l=c&&r(c);l&&(t[i]=[c].concat(l))}return t[i]}return Object.keys(o).concat(Object.keys(s)).forEach(r),t}function ot(e,n,o){const s=e.icons,t=e.aliases||Object.create(null);let r={};function i(c){r=le(s[c]||t[c],r)}return i(n),o.forEach(i),le(e,r)}function Ce(e,n){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});const s=nt(e);for(const t in s){const r=s[t];r&&(n(t,ot(e,t,r)),o.push(t))}return o}const st={provider:"",aliases:{},not_found:{},..._e};function V(e,n){for(const o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function Se(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!V(e,st))return null;const o=n.icons;for(const t in o){const r=o[t];if(!t||typeof r.body!="string"||!V(r,K))return null}const s=n.aliases||Object.create(null);for(const t in s){const r=s[t],i=r.parent;if(!t||typeof i!="string"||!o[i]&&!s[i]||!V(r,K))return null}return n}const ae=Object.create(null);function rt(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function S(e,n){const o=ae[e]||(ae[e]=Object.create(null));return o[n]||(o[n]=rt(e,n))}function Pe(e,n){return Se(n)?Ce(n,(o,s)=>{s?e.icons[o]=s:e.missing.add(o)}):[]}function it(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}let O=!1;function $e(e){return typeof e=="boolean"&&(O=e),O}function ct(e){const n=typeof e=="string"?R(e,!0,O):e;if(n){const o=S(n.provider,n.prefix),s=n.name;return o.icons[s]||(o.missing.has(s)?null:void 0)}}function lt(e,n){const o=R(e,!0,O);if(!o)return!1;const s=S(o.provider,o.prefix);return n?it(s,o.name,n):(s.missing.add(o.name),!0)}function at(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),O&&!n&&!e.prefix){let t=!1;return Se(e)&&(e.prefix="",Ce(e,(r,i)=>{lt(r,i)&&(t=!0)})),t}const o=e.prefix;if(!M({prefix:o,name:"a"}))return!1;const s=S(n,o);return!!Pe(s,e)}const Te=Object.freeze({width:null,height:null}),je=Object.freeze({...Te,...N}),ft=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ut=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fe(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;const s=e.split(ft);if(s===null||!s.length)return e;const t=[];let r=s.shift(),i=ut.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?t.push(r):t.push(Math.ceil(c*n*o)/o)}else t.push(r);if(r=s.shift(),r===void 0)return t.join("");i=!i}}function dt(e,n="defs"){let o="";const s=e.indexOf("<"+n);for(;s>=0;){const t=e.indexOf(">",s),r=e.indexOf("</"+n);if(t===-1||r===-1)break;const i=e.indexOf(">",r);if(i===-1)break;o+=e.slice(t+1,r).trim(),e=e.slice(0,s).trim()+e.slice(i+1)}return{defs:o,content:e}}function pt(e,n){return e?"<defs>"+e+"</defs>"+n:n}function ht(e,n,o){const s=dt(e);return pt(s.defs,n+s.content+o)}const gt=e=>e==="unset"||e==="undefined"||e==="none";function mt(e,n){const o={...z,...e},s={...je,...n},t={left:o.left,top:o.top,width:o.width,height:o.height};let r=o.body;[o,s].forEach(w=>{const y=[],h=w.hFlip,u=w.vFlip;let v=w.rotate;h?u?v+=2:(y.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),y.push("scale(-1 1)"),t.top=t.left=0):u&&(y.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),y.push("scale(1 -1)"),t.top=t.left=0);let I;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:I=t.height/2+t.top,y.unshift("rotate(90 "+I.toString()+" "+I.toString()+")");break;case 2:y.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:I=t.width/2+t.left,y.unshift("rotate(-90 "+I.toString()+" "+I.toString()+")");break}v%2===1&&(t.left!==t.top&&(I=t.left,t.left=t.top,t.top=I),t.width!==t.height&&(I=t.width,t.width=t.height,t.height=I)),y.length&&(r=ht(r,'<g transform="'+y.join(" ")+'">',"</g>"))});const i=s.width,c=s.height,l=t.width,a=t.height;let f,p;i===null?(p=c===null?"1em":c==="auto"?a:c,f=fe(p,l/a)):(f=i==="auto"?l:i,p=c===null?fe(f,a/l):c==="auto"?a:c);const d={},m=(w,y)=>{gt(y)||(d[w]=y.toString())};m("width",f),m("height",p);const x=[t.left,t.top,l,a];return d.viewBox=x.join(" "),{attributes:d,viewBox:x,body:r}}const yt=/\sid="(\S+)"/g,bt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let vt=0;function xt(e,n=bt){const o=[];let s;for(;s=yt.exec(e);)o.push(s[1]);if(!o.length)return e;const t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(r=>{const i=typeof n=="function"?n(r):n+(vt++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}const J=Object.create(null);function It(e,n){J[e]=n}function X(e){return J[e]||J[""]}function Z(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ee=Object.create(null),$=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;$.length>0;)$.length===1||Math.random()>.5?D.push($.shift()):D.push($.pop());ee[""]=Z({resources:["https://api.iconify.design"].concat(D)});function wt(e,n){const o=Z(n);return o===null?!1:(ee[e]=o,!0)}function te(e){return ee[e]}const kt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ue=kt();function _t(e,n){const o=te(e);if(!o)return 0;let s;if(!o.maxURL)s=0;else{let t=0;o.resources.forEach(i=>{t=Math.max(t,i.length)});const r=n+".json?icons=";s=o.maxURL-t-o.path.length-r.length}return s}function Ct(e){return e===404}const St=(e,n,o)=>{const s=[],t=_t(e,n),r="icons";let i={type:r,provider:e,prefix:n,icons:[]},c=0;return o.forEach((l,a)=>{c+=l.length+1,c>=t&&a>0&&(s.push(i),i={type:r,provider:e,prefix:n,icons:[]},c=l.length),i.icons.push(l)}),s.push(i),s};function Pt(e){if(typeof e=="string"){const n=te(e);if(n)return n.path}return"/"}const $t=(e,n,o)=>{if(!ue){o("abort",424);return}let s=Pt(n.provider);switch(n.type){case"icons":{const r=n.prefix,c=n.icons.join(","),l=new URLSearchParams({icons:c});s+=r+".json?"+l.toString();break}case"custom":{const r=n.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:o("abort",400);return}let t=503;ue(e+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{o(Ct(i)?"abort":"next",i)});return}return t=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?o("abort",r):o("next",t)});return}setTimeout(()=>{o("success",r)})}).catch(()=>{o("next",t)})},Tt={prepare:St,send:$t};function jt(e){const n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,r)=>t.provider!==r.provider?t.provider.localeCompare(r.provider):t.prefix!==r.prefix?t.prefix.localeCompare(r.prefix):t.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(t=>{if(s.name===t.name&&s.prefix===t.prefix&&s.provider===t.provider)return;s=t;const r=t.provider,i=t.prefix,c=t.name,l=o[r]||(o[r]=Object.create(null)),a=l[i]||(l[i]=S(r,i));let f;c in a.icons?f=n.loaded:i===""||a.missing.has(c)?f=n.missing:f=n.pending;const p={provider:r,prefix:i,name:c};f.push(p)}),n}function Ee(e,n){e.forEach(o=>{const s=o.loaderCallbacks;s&&(o.loaderCallbacks=s.filter(t=>t.id!==n))})}function Et(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1;const s=e.provider,t=e.prefix;n.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==t)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:s,prefix:t,name:a});else if(e.missing.has(a))i.missing.push({provider:s,prefix:t,name:a});else return o=!0,!0;return!1}),i.pending.length!==c&&(o||Ee([e],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Ot=0;function At(e,n,o){const s=Ot++,t=Ee.bind(null,o,s);if(!n.pending.length)return t;const r={id:s,icons:n,callback:e,abort:t};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),t}function Bt(e,n=!0,o=!1){const s=[];return e.forEach(t=>{const r=typeof t=="string"?R(t,n,o):t;r&&s.push(r)}),s}var Ft={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Lt(e,n,o,s){const t=e.resources.length,r=e.random?Math.floor(Math.random()*t):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const k=Math.floor(Math.random()*g.length);i.push(g[k]),g=g.slice(0,k).concat(g.slice(k+1))}i=i.concat(g)}else i=e.resources.slice(r).concat(e.resources.slice(0,r));const c=Date.now();let l="pending",a=0,f,p=null,d=[],m=[];typeof s=="function"&&m.push(s);function x(){p&&(clearTimeout(p),p=null)}function w(){l==="pending"&&(l="aborted"),x(),d.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),d=[]}function y(g,k){k&&(m=[]),typeof g=="function"&&m.push(g)}function h(){return{startTime:c,payload:n,status:l,queriesSent:a,queriesPending:d.length,subscribe:y,abort:w}}function u(){l="failed",m.forEach(g=>{g(void 0,f)})}function v(){d.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),d=[]}function I(g,k,P){const A=k!=="success";switch(d=d.filter(_=>_!==g),l){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=P,u();return}if(A){f=P,d.length||(i.length?Q():u());return}if(x(),v(),!e.random){const _=e.resources.indexOf(g.resource);_!==-1&&_!==e.index&&(e.index=_)}l="completed",m.forEach(_=>{_(P)})}function Q(){if(l!=="pending")return;x();const g=i.shift();if(g===void 0){if(d.length){p=setTimeout(()=>{x(),l==="pending"&&(v(),u())},e.timeout);return}u();return}const k={status:"pending",resource:g,callback:(P,A)=>{I(k,P,A)}};d.push(k),a++,p=setTimeout(Q,e.rotate),o(g,n,k.callback)}return setTimeout(Q),h}function Oe(e){const n={...Ft,...e};let o=[];function s(){o=o.filter(c=>c().status==="pending")}function t(c,l,a){const f=Lt(n,c,l,(p,d)=>{s(),a&&a(p,d)});return o.push(f),f}function r(c){return o.find(l=>c(l))||null}return{query:t,find:r,setIndex:c=>{n.index=c},getIndex:()=>n.index,cleanup:s}}function de(){}const G=Object.create(null);function Mt(e){if(!G[e]){const n=te(e);if(!n)return;const o=Oe(n),s={config:n,redundancy:o};G[e]=s}return G[e]}function Dt(e,n,o){let s,t;if(typeof e=="string"){const r=X(e);if(!r)return o(void 0,424),de;t=r.send;const i=Mt(e);i&&(s=i.redundancy)}else{const r=Z(e);if(r){s=Oe(r);const i=e.resources?e.resources[0]:"",c=X(i);c&&(t=c.send)}}return!s||!t?(o(void 0,424),de):s.query(n,t,o)().abort}function pe(){}function Nt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Et(e)}))}function Rt(e){const n=[],o=[];return e.forEach(s=>{(s.match(ke)?n:o).push(s)}),{valid:n,invalid:o}}function T(e,n,o){function s(){const t=e.pendingIcons;n.forEach(r=>{t&&t.delete(r),e.icons[r]||e.missing.add(r)})}if(o&&typeof o=="object")try{if(!Pe(e,o).length){s();return}}catch(t){console.error(t)}s(),Nt(e)}function he(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function zt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:s}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;const r=e.loadIcon;if(e.loadIcons&&(t.length>1||!r)){he(e.loadIcons(t,s,o),f=>{T(e,t,f)});return}if(r){t.forEach(f=>{const p=r(f,s,o);he(p,d=>{const m=d?{prefix:s,icons:{[f]:d}}:null;T(e,[f],m)})});return}const{valid:i,invalid:c}=Rt(t);if(c.length&&T(e,c,null),!i.length)return;const l=s.match(ke)?X(o):null;if(!l){T(e,i,null);return}l.prepare(o,s,i).forEach(f=>{Dt(o,f,p=>{T(e,f.icons,p)})})}))}const qt=(e,n)=>{const o=Bt(e,!0,$e()),s=jt(o);if(!s.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(s.loaded,s.missing,s.pending,pe)}),()=>{l=!1}}const t=Object.create(null),r=[];let i,c;return s.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,r.push(S(a,f));const p=t[a]||(t[a]=Object.create(null));p[f]||(p[f]=[])}),s.pending.forEach(l=>{const{provider:a,prefix:f,name:p}=l,d=S(a,f),m=d.pendingIcons||(d.pendingIcons=new Set);m.has(p)||(m.add(p),t[a][f].push(p))}),r.forEach(l=>{const a=t[l.provider][l.prefix];a.length&&zt(l,a)}),n?At(n,s,r):pe};function Qt(e,n){const o={...e};for(const s in n){const t=n[s],r=typeof t;s in Te?(t===null||t&&(r==="string"||r==="number"))&&(o[s]=t):r===typeof o[s]&&(o[s]=s==="rotate"?t%4:t)}return o}const Ut=/[\s,]+/;function Ht(e,n){n.split(Ut).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Vt(e,n=0){const o=e.replace(/^-?[0-9.]*/,"");function s(t){for(;t<0;)t+=4;return t%4}if(o===""){const t=parseInt(e);return isNaN(t)?0:s(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-o.length));return isNaN(r)?0:(r=r/t,r%1===0?s(r):0)}}return n}function Gt(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in n)o+=" "+s+'="'+n[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function Wt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Kt(e){return"data:image/svg+xml,"+Wt(e)}function Jt(e){return'url("'+Kt(e)+'")'}const ge={...je,inline:!1},Xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yt={display:"inline-block"},Y={"background-color":"currentColor"},Ae={"background-color":"transparent"},me={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},ye={"-webkit-mask":Y,mask:Y,background:Ae};for(const e in ye){const n=ye[e];for(const o in me)n[e+"-"+o]=me[o]}function Zt(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function en(e,n){const o=Qt(ge,n),s=n.mode||"svg",t=s==="svg"?{...Xt}:{};e.body.indexOf("xlink:")===-1&&delete t["xmlns:xlink"];let r=typeof n.style=="string"?n.style:"";for(let h in n){const u=n[h];if(u!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":o[h]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Ht(o,u);break;case"color":r=r+(r.length>0&&r.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?o[h]=Vt(u):typeof u=="number"&&(o[h]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete t["aria-hidden"];break;default:if(h.slice(0,3)==="on:")break;ge[h]===void 0&&(t[h]=u)}}const i=mt(e,o),c=i.attributes;if(o.inline&&(r="vertical-align: -0.125em; "+r),s==="svg"){Object.assign(t,c),r!==""&&(t.style=r);let h=0,u=n.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:t,body:xt(i.body,u?()=>u+"ID"+h++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,p=s==="mask"||(s==="bg"?!1:l.indexOf("currentColor")!==-1),d=Gt(l,{...c,width:a+"",height:f+""}),x={"--svg":Jt(d)},w=h=>{const u=c[h];u&&(x[h]=Zt(u))};w("width"),w("height"),Object.assign(x,Yt,p?Y:Ae);let y="";for(const h in x)y+=h+": "+x[h]+";";return t.style=y+r,{svg:!1,attributes:t}}$e(!0);It("",Tt);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!at(s))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){const s="IconifyProviders["+o+"] is invalid.";try{const t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;wt(o,t)||console.error(s)}catch{console.error(s)}}}}function tn(e,n,o,s,t){function r(){n.loading&&(n.loading.abort(),n.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return n.name="",r(),{data:{...z,...e}};let i;if(typeof e!="string"||(i=R(e,!1,!0))===null)return r(),null;const c=ct(i);if(!c)return o&&(!n.loading||n.loading.name!==e)&&(r(),n.name="",n.loading={name:e,abort:qt([i],s)}),null;r(),n.name!==e&&(n.name=e,t&&!n.destroyed&&t(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function be(e,n){return e?en({...z,...e},n):null}var nn=De("<svg><!></svg>"),on=xe("<span></span>");function E(e,n){const o=Me(n,["children","$$slots","$$events","$$legacy"]);Ie(n,!1);const s=F({name:"",loading:null,destroyed:!1});let t=F(!1),r=F(0),i=F();const c=d=>{typeof o.onLoad=="function"&&o.onLoad(d),Ze()("load",{icon:d})};function l(){He(r)}Xe(()=>{re(t,!0)}),Ye(()=>{U(s,b(s).destroyed=!0),b(s).loading&&(b(s).loading.abort(),U(s,b(s).loading=null))}),qe(()=>(b(r),Ue(o),b(t),b(s),b(i),be),()=>{b(r);const d=!!o.ssr||b(t),m=tn(o.icon,b(s),d,l,c);re(i,m?be(m.data,o):null),b(i)&&m.classes&&U(i,b(i).attributes.class=(typeof o.class=="string"?o.class+" ":"")+m.classes.join(" "))}),Qe(),ve();var a=ne(),f=W(a);{var p=d=>{var m=ne(),x=W(m);{var w=h=>{var u=nn();let v;var I=Ve(u);et(I,()=>b(i).body),ie(()=>v=ce(u,v,{...b(i).attributes})),C(h,u)},y=h=>{var u=on();let v;ie(()=>v=ce(u,v,{...b(i).attributes})),C(h,u)};oe(x,h=>{b(i).svg?h(w):h(y,!1)})}C(d,m)};oe(f,d=>{b(i)&&d(p)})}C(e,a),we()}E.__docgen={version:3,name:"Icon.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"load"}],slots:[],refs:[]};const sn={component:j,tags:["autodocs"],argTypes:Je,args:{onclick:Ke()},parameters:{docs:{description:{component:""}}}},{Story:L}=We();var rn=xe("<!> <!> <!> <!>",1);function Be(e,n){Ie(n,!1),ve();var o=rn(),s=W(o);L(s,{name:"Icon Button",args:{compact:!0},children:(c,l)=>{j(c,{compact:!0,children:(a,f)=>{E(a,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/"}},__svelteCsf:{rawCode:`<Button compact>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var t=H(s,2);L(t,{name:"Icon Button Circular",args:{compact:!0,roundness:"full"},children:(c,l)=>{j(c,{roundness:"full",compact:!0,children:(a,f)=>{E(a,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Circualr Icon button."}},__svelteCsf:{rawCode:`<Button roundness="full" compact>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var r=H(t,2);L(r,{name:"Icon Before",children:(c,l)=>{j(c,{before:f=>{E(f,{icon:"material-symbols:content-copy"})},children:(f,p)=>{var d=se("Copy");C(f,d)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet before()}
    <Icon icon="material-symbols:content-copy" />
  {/snippet}
  Copy
</Button>`}}});var i=H(r,2);L(i,{name:"Icon After",children:(c,l)=>{j(c,{after:f=>{E(f,{icon:"material-symbols:download-2"})},children:(f,p)=>{var d=se("Download");C(f,d)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet after()}
    <Icon icon="material-symbols:download-2" />
  {/snippet}
  Download
</Button>`}}}),C(e,o),we()}Be.__docgen={version:3,name:"IconButton.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const q=Ge(Be,sn),hn=["IconButton","IconButtonCircular","IconBefore","IconAfter"],gn=q.IconButton,mn=q.IconButtonCircular,yn=q.IconBefore,bn=q.IconAfter;export{bn as IconAfter,yn as IconBefore,gn as IconButton,mn as IconButtonCircular,hn as __namedExportsOrder,sn as default};
