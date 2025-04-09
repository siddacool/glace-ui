import{i as $,t as _,b as T}from"./props-CtI7nL00.js";import{p as P,f as h,s as l,a as w}from"./context-BOJPcgPD.js";import{c as y,d as b}from"./create-runtime-stories-Bv-5NuaG.js";import{s as x,P as s}from"./PasswordInput.stories-QW-iUedh.js";import"./index-CfOrKyLd.js";import"./attributes-BQ-WOQPH.js";import"./input-BE0-jvYB.js";import"./Icon-D166EJ3e.js";import"./index-client-6WD33s7n.js";const M={component:s,tags:["autodocs"],argTypes:x,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var F=_("<!> <!> <!> <!> <!> <!> <!> <!>",1);function E(I,C){P(C,!1),$();var g=F(),c=h(g);r(c,{name:"Input",args:{oninput:t=>{const e=t.target;console.log("Input Event",e.value)}},children:(t,e)=>{s(t,{oninput:o=>{const n=o.target;console.log("Input Event",n.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PasswordInput
  oninput={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('Input Event', target.value);
  }}
/>`}}});var p=l(c,2);r(p,{name:"Change",args:{onchange:t=>{const e=t.target;console.log("onChange Event",e.value)}},children:(t,e)=>{s(t,{onchange:o=>{const n=o.target;console.log("onchange Event",n.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PasswordInput
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('onchange Event', target.value);
  }}
/>`}}});var u=l(p,2);r(u,{name:"Toggle",args:{ontoggle:t=>{const e=t.event.target;console.log("ontoggle Event",t,e)}},children:(t,e)=>{s(t,{ontoggle:o=>{const n=o.event.target;console.log("ontoggle Event",o,n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: PasswordInputToggleEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  ontoggle={(e: PasswordInputToggleEvent) => {
    const target = e.event.target as HTMLButtonElement;

    console.log('ontoggle Event', e, target);
  }}
/>`}}});var d=l(u,2);r(d,{name:"Focus",args:{onfocus:t=>{const e=t.target;console.log("onfocus Event",e)}},children:(t,e)=>{s(t,{onfocus:o=>{const n=o.target;console.log("onfocus Event",n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  onfocus={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onfocus Event', target);
  }}
/>`}}});var v=l(d,2);r(v,{name:"Blur",args:{onblur:t=>{const e=t.target;console.log("onblur Event",e)}},children:(t,e)=>{s(t,{onblur:o=>{const n=o.target;console.log("onblur Event",n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  onblur={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onblur Event', target);
  }}
/>`}}});var i=l(v,2);r(i,{name:"Copy",args:{oncopy:t=>{const e=t.target;console.log("oncopy Event",e)}},children:(t,e)=>{s(t,{oncopy:o=>{const n=o.target;console.log("oncopy Event",n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  oncopy={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncopy Event', target);
  }}
/>`}}});var m=l(i,2);r(m,{name:"Cut",args:{oncut:t=>{const e=t.target;console.log("oncut Event",e)}},children:(t,e)=>{s(t,{oncut:o=>{const n=o.target;console.log("oncut Event",n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  oncut={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncut Event', target);
  }}
/>`}}});var f=l(m,2);r(f,{name:"Paste",args:{onpaste:t=>{const e=t.target;console.log("onpaste Event",e)}},children:(t,e)=>{s(t,{onpaste:o=>{const n=o.target;console.log("onpaste Event",n)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<PasswordInput
  onpaste={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onpaste Event', target);
  }}
/>`}}}),T(I,g),w()}E.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=y(E,M),q=["Input","Change","Toggle","Focus","Blur","Copy","Cut","Paste"],z=a.Input,D=a.Change,G=a.Toggle,J=a.Focus,K=a.Blur,N=a.Copy,Q=a.Cut,U=a.Paste;export{K as Blur,D as Change,N as Copy,Q as Cut,J as Focus,z as Input,U as Paste,G as Toggle,q as __namedExportsOrder,M as default};
