import{i,a as d,b as m}from"./props-CtI7nL00.js";import{p,a as u}from"./context-BOJPcgPD.js";import{c as f,d as k}from"./create-runtime-stories-Bv-5NuaG.js";import{f as g}from"./index-fRFe1AOP.js";import{s as C,B as n}from"./Button.stories-DwTLRVGf.js";import"./index-CfOrKyLd.js";import"./attributes-BQ-WOQPH.js";const B={component:n,tags:["autodocs"],argTypes:C,args:{onclick:g()},parameters:{docs:{description:{component:""}}}},{Story:_}=k();function r(a,c){p(c,!1),i(),_(a,{name:"Click",args:{outline:!1,disabled:!1,compact:!1,onclick:t=>{const o=t.target;alert("Button Clicked"),console.log("Button Clicked",o)}},children:(t,o)=>{n(t,{onclick:e=>{const s=e.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(e,s)=>{var l=d("Click me!");m(e,l)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={(e: Event) => {
    const target = e.target as HTMLButtonElement;

    alert('Button Clicked');
    console.log('Button Clicked', target);
  }}
>
  Click me!
</Button>`}}}),u()}r.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=f(r,B),w=["Click"],M=$.Click;export{M as Click,w as __namedExportsOrder,B as default};
