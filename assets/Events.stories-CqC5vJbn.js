import{i as v,t as f,b as E}from"./props-HMLaVAqX.js";import{p as h,f as _,s as g,a as $}from"./context-DSyyeuqi.js";import{c as y,d as C}from"./create-runtime-stories-CGZBZoBU.js";import{s,a as b,S as r}from"./SimpleSelect.stories-BOWuQI6u.js";import"./index-CfOrKyLd.js";import"./each-Ccgp6bC2.js";import"./attributes-BuIK_O5i.js";import"./class-B8bAhvCF.js";import"./style-D6iUFOE3.js";import"./this-CudgQEWU.js";import"./InputEnclosure-D-EcrSlx.js";const F={component:r,tags:["autodocs"],argTypes:b,args:{options:s},parameters:{docs:{description:{component:""}}}},{Story:a}=C();var O=f("<!> <!> <!>",1);function m(u,d){h(d,!1),v();var c=O(),i=_(c);a(i,{name:"Change",args:{onchange:e=>{const t=e.target;console.log("onChange Event",t.value)}},children:(e,t)=>{r(e,{onchange:o=>{const n=o.target;console.log("onchange Event",n.value)},options:s})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SimpleSelect
  onchange={(e: Event) => {
    const target = e.target as HTMLSelectElement;

    console.log('onchange Event', target.value);
  }}
  options={storySimpleSelectOptions}
/>`}}});var p=g(i,2);a(p,{name:"Focus",args:{onfocus:e=>{const t=e.target;console.log("onfocus Event",t)}},children:(e,t)=>{r(e,{onfocus:o=>{const n=o.target;console.log("onfocus Event",n)},options:s})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: SimpleSelectFocusEvent`"}},__svelteCsf:{rawCode:`<SimpleSelect
  onfocus={(e: SimpleSelectFocusEvent) => {
    const target = e.target as HTMLSelectElement;

    console.log('onfocus Event', target);
  }}
  options={storySimpleSelectOptions}
/>`}}});var S=g(p,2);a(S,{name:"Blur",args:{onblur:e=>{const t=e.target;console.log("onblur Event",t)}},children:(e,t)=>{r(e,{onblur:o=>{const n=o.target;console.log("onblur Event",n)},options:s})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: SimpleSelectFocusEvent`"}},__svelteCsf:{rawCode:`<SimpleSelect
  onblur={(e: SimpleSelectFocusEvent) => {
    const target = e.target as HTMLSelectElement;

    console.log('onblur Event', target);
  }}
  options={storySimpleSelectOptions}
/>`}}}),E(u,c),$()}m.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const l=y(m,F),j=["Change","Focus","Blur"],q=l.Change,z=l.Focus,D=l.Blur;export{D as Blur,q as Change,z as Focus,j as __namedExportsOrder,F as default};
