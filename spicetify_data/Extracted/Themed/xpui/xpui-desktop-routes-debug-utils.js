(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[163,8],{50941:function(e,t,a){"use strict";a.r(t),a.d(t,{DebugUtils:function(){return p},default:function(){return g}});var l=a(27378),n=a.n(l),r="desktoproutes-debug-utils-debugUtils-container",o="desktoproutes-debug-utils-debugUtils-title",s=a(67812),c=a(66930);const u=(0,a(40617).v)();window.abba={get:async function(e,t){const a=await u.get("sp://product-state/v1/values");let l={},n="";if(a.abbaOverrides?n=a.abbaOverrides:a.abbaoverrides&&(n=a.abbaoverrides),n)try{l=JSON.parse(n)}catch(e){console.error(`error parsing value=${n}, error=${e}`)}if(Object.prototype.hasOwnProperty.call(l,e))return console.warn(`Abba: Override for ${e} : ${l[e]}`),void setTimeout((()=>t(null,l[e])),0);u.post("sp://abba/v1/flags",{flags:[e]}).then((a=>{const{flags:l=[]}=a,n=l[0]&&l[0].featureName===e&&l[0].cell;t(null,n||null)})).catch((e=>{t(e)}))},getAll:function(e){console.warn("Abba:getAll should only be used by TA tests for logging purposes."),u.get("sp://abba/v1/all_flags").then((t=>{const{flags:a=[]}=t,l=a.reduce(((e,t)=>(e[t.featureName]=t.cell,e)),{});e(null,JSON.stringify(l,null,2))})).catch((t=>{e(t)}))},getRequestedFlagNames:function(e){u.get("sp://abba/v1/requested_flag_names").then((t=>{e(null,JSON.stringify(t.sort(),null,2))})).catch((t=>{e(t)}))}};var i="desktoproutes-debug-utils-debug-container",m="desktoproutes-debug-utils-debug-setting",d="desktoproutes-debug-utils-debug-textInput",v="desktoproutes-debug-utils-debug-buttonDebug";const b=()=>{const[e,t]=(0,l.useState)(60),[a,r]=(0,l.useState)("stream"),[o,s]=(0,l.useState)("");return n().createElement("div",{className:i},n().createElement("h2",null,"Ad Debug"),n().createElement("div",{className:m},n().createElement("p",null,"Stream time (in seconds)"),n().createElement("input",{className:d,type:"text",value:e,onChange:e=>{const a=e.target.value;t(parseInt(a,10))}}),n().createElement("button",{className:v,onClick:()=>{c.N.increaseStreamTime(e)}},"Add time"),n().createElement("button",{className:v,onClick:()=>{c.N.increaseStreamTime(1200)}},"Add 20 minutes")),n().createElement("div",{className:m},n().createElement("p",null,"Override Country"),n().createElement("select",{value:o,onBlur:()=>{},onChange:e=>{s(e.target.value)}},n().createElement("option",{value:"US"},"USA"),n().createElement("option",{value:"UK"},"United Kingdom"),n().createElement("option",{value:"JP"},"Japan"),n().createElement("option",{value:"BR"},"Brasil"),n().createElement("option",{value:"AU"},"Australia"),n().createElement("option",{value:"SE"},"Sweden"),n().createElement("option",{value:""},"Clear Override")),n().createElement("button",{className:v,onClick:()=>{c.N.overrideCountry(o)}},"Override")),n().createElement("div",{className:m},n().createElement("p",null,"Clear ad in slot"),n().createElement("select",{value:a,onBlur:()=>{},onChange:e=>{r(e.target.value)}},n().createElement("option",{value:"stream"},"STREAM"),n().createElement("option",{value:"billboard"},"BILLBOARD OVERLAY"),n().createElement("option",{value:"promotedsong"},"PROMOTED SONG"),n().createElement("option",{value:"hpto"},"HPTO"),n().createElement("option",{value:"leaderboard"},"LEADERBOARD")),n().createElement("button",{className:v,onClick:()=>{c.N.clearSlot(a)}},"Clear slot"),n().createElement("p",null,"Trigger ad in slot"),n().createElement("select",{value:a,onBlur:()=>{},onChange:e=>{r(e.target.value)}},n().createElement("option",{value:"stream"},"STREAM"),n().createElement("option",{value:"billboard"},"BILLBOARD OVERLAY"),n().createElement("option",{value:"promotedsong"},"PROMOTED SONG"),n().createElement("option",{value:"hpto"},"HPTO"),n().createElement("option",{value:"leaderboard"},"LEADERBOARD")),n().createElement("button",{className:v,onClick:()=>{c.N.triggerSlot(a)}},"Trigger slot")),n().createElement("button",{className:v,onClick:()=>{c.N.queueVideoAd()}},"Queue Video Ad"))};var E=a(56864);const p=()=>{const{settings:e}=(0,s.r)();return(0,E.getIsEmployee)(e.values)?n().createElement("div",{className:r},n().createElement("h1",{className:o},"Debug Utils"),n().createElement(b,null)):null};var g=p}}]);
//# sourceMappingURL=xpui-desktop-routes-debug-utils.js.map