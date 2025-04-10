import{p as n,t as g,b as k,k as O,e as R,s as B,i as G}from"./props-HMLaVAqX.js";import{p as T,t as _,a as z,m as a,k as D,n as J,o as M,f as K,s as v}from"./context-DSyyeuqi.js";import{a as Q,c as U,d as W}from"./create-runtime-stories-CGZBZoBU.js";import{e as X}from"./each-Ccgp6bC2.js";import{b as Y,s as h}from"./attributes-BuIK_O5i.js";import{s as Z}from"./class-B8bAhvCF.js";import{b as $}from"./this-CudgQEWU.js";import{I as ee}from"./InputEnclosure-D-EcrSlx.js";var te=g("<option> </option>"),le=g('<select class="svelte-1043x5w"></select>'),ae=g("<div><!></div>");function V(x,e){T(e,!0);let d=n(e,"size",3,"normal"),c=n(e,"roundness",3,"1x"),u=n(e,"outline",3,!0),y=n(e,"class",3,""),r=n(e,"disabled",3,!1),m=n(e,"error",3,!1),w=n(e,"ref",15),b=J(!1);function j(s){M(b,!0),e.onfocus&&e.onfocus(s)}function A(s){M(b,!1),e.onblur&&e.onblur(s)}var S=ae();let E;var F=D(S);ee(F,{get outline(){return u()},get disabled(){return r()},get error(){return m()},get focused(){return a(b)},get size(){return d()},get roundness(){return c()},get before(){return e.before},get after(){return e.after},children:(s,C)=>{var t=le();t.__change=function(...i){var l;(l=e.onchange)==null||l.apply(this,i)},X(t,21,()=>e.options,i=>i.value,(i,l)=>{var o=te(),H={},q=D(o);_(()=>{H!==(H=a(l).value)&&(o.value=(o.__value=a(l).value)==null?"":a(l).value),o.disabled=a(l).disabled,Y(o,e.value===a(l).value),B(q,a(l).label)}),k(i,o)}),$(t,i=>w(i),()=>w()),_(()=>{h(t,"name",e.name),h(t,"id",e.id),t.disabled=r(),h(t,"placeholder",e.placeholder)}),O("focus",t,j),O("blur",t,A),k(s,t)},$$slots:{default:!0}}),_((s,C)=>E=Z(S,1,s,"svelte-1043x5w",E,C),[()=>Q(["dodo-ui-SimpleSelect",`size--${d()}`,`roundness--${c()}`,y()].join(" ")),()=>({outline:u(),disabled:r(),error:m(),focused:a(b)})]),k(x,S),z()}R(["change"]);V.__docgen={data:[{name:"ref",visibility:"public",description:"Select ref",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"HTMLSelectElement"},static:!1,readonly:!1,defaultValue:"..."},{name:"size",visibility:"public",description:"How large should the button be?",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"normal",text:'"normal"'},{kind:"const",type:"string",value:"small",text:'"small"'},{kind:"const",type:"string",value:"large",text:'"large"'}],text:'"normal" | "small" | "large"'},static:!1,readonly:!1,defaultValue:'"normal"'},{name:"roundness",visibility:"public",description:"How round should the border radius be?",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"boolean",value:!1,text:"false"},{kind:"const",type:"string",value:"1x",text:'"1x"'},{kind:"const",type:"string",value:"2x",text:'"2x"'},{kind:"const",type:"string",value:"3x",text:'"3x"'}],text:'false | "1x" | "2x" | "3x"'},static:!1,readonly:!1,defaultValue:'"1x"'},{name:"options",visibility:"public",description:"How round should the border radius be?",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"array",text:"SimpleSelectOption[]"},static:!1,readonly:!1},{name:"outline",visibility:"public",description:"Add a border around the button. Default True",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"value",visibility:"public",description:"Select value",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"placeholder",visibility:"public",description:"How round should the border radius be?",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"disabled",visibility:"public",description:"disabled state",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"error",visibility:"public",description:"is there any associated Error ?",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"name",visibility:"public",description:"Name",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"id",visibility:"public",description:"Id",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"before",visibility:"public",description:"Icon before button content",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"after",visibility:"public",description:"Icon after button content",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"class",visibility:"public",description:"Custom css class",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"onchange",visibility:"public",description:"onchange event handler",keywords:[],kind:"let",type:{kind:"function",text:"ChangeEventHandler<HTMLSelectElement>"},static:!1,readonly:!1},{name:"onblur",visibility:"public",description:"onblur event handler",keywords:[],kind:"let",type:{kind:"function",text:"FocusEventHandler<HTMLSelectElement>"},static:!1,readonly:!1},{name:"onfocus",visibility:"public",description:"onfocus event handler",keywords:[],kind:"let",type:{kind:"function",text:"FocusEventHandler<HTMLSelectElement>"},static:!1,readonly:!1}],name:"SimpleSelect.svelte"};const N={type:{control:{type:"select"},options:["text","tel","email","password","url","number"]},roundness:{control:{type:"select"},options:[!1,"1x","2x","3x"]},size:{control:{type:"select"},options:["normal","small","large"]}},P=[{value:"volvo",label:"Volvo"},{value:"saab",label:"Saab"},{value:"mercedes",label:"Mercedes"},{value:"audi",label:"Audi"},{value:"opel",label:"Opel",disabled:!0}],I={component:V,tags:["autodocs"],argTypes:N,args:{options:P},parameters:{docs:{description:{component:""}}}},{Story:p}=W();var se=g("<!> <!> <!> <!> <!>",1);function L(x,e){T(e,!1),G();var d=se(),c=K(d);p(c,{name:"Default",parameters:{docs:{description:{story:"SimpleSelect with default style"}},__svelteCsf:{rawCode:"<SimpleSelect {...args} />"}}});var u=v(c,2);p(u,{name:"Placeholder",args:{value:"",placeholder:"Type something..."},parameters:{__svelteCsf:{rawCode:"<SimpleSelect {...args} />"}}});var y=v(u,2);p(y,{name:"No Outline",args:{outline:!1},parameters:{__svelteCsf:{rawCode:"<SimpleSelect {...args} />"}}});var r=v(y,2);p(r,{name:"Error",args:{error:!0},parameters:{__svelteCsf:{rawCode:"<SimpleSelect {...args} />"}}});var m=v(r,2);p(m,{name:"Disabled",args:{disabled:!0},parameters:{__svelteCsf:{rawCode:"<SimpleSelect {...args} />"}}}),k(x,d),z()}L.__docgen={version:3,name:"SimpleSelect.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const f=U(L,I),ie=["Default","Placeholder","NoOutline","Error","Disabled"],ne=f.Default,re=f.Placeholder,oe=f.NoOutline,de=f.Error,ce=f.Disabled,ge=Object.freeze(Object.defineProperty({__proto__:null,Default:ne,Disabled:ce,Error:de,NoOutline:oe,Placeholder:re,__namedExportsOrder:ie,default:I,storySimpleSelectArgTypes:N,storySimpleSelectOptions:P},Symbol.toStringTag,{value:"Module"}));export{V as S,N as a,ge as b,P as s};
