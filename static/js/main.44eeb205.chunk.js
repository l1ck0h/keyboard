(this.webpackJsonpkeyboard=this.webpackJsonpkeyboard||[]).push([[0],{31:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(23),i=a.n(c),s=(a(31),a(3)),l=a(16),o=a(26),u=a(2),d=function(e){var t=e.onClick,a=e.disabled,n=e.iconProp;return Object(u.jsx)("button",{className:"btn btn-action s-circle",onClick:t,disabled:a,children:Object(u.jsx)(o.a,{icon:n})})},b=function(e){var t=function(e){return e.toString().padStart(2,"0")},a=Math.floor(e%86400/3600),n=Math.floor(e%86400%3600/60),r=Math.floor(e%86400%3600%60);return a?a+":"+n+":"+t(r):n+":"+t(r)},j=function(e){var t=e.time,a=e.duration;return Object(u.jsxs)("span",{className:"base-time",children:[b(t)," / ",b(a)]})},v=a(7),m=a(24),p=a(1),h=(new v.c).toDestination(),O=h.get(),f=Object(n.createContext)({}),y={time:0,duration:0,toneState:"stopped",synth:h,synthParams:O,playerDisabled:!0,playbackTimeID:0},x=function(e,t){switch(t.type){case"SET_SYNTH_PARAMS":return Object(p.a)(Object(p.a)({},e),{},{synthParams:t.payload.synthParams});case"LOADED_MIDI":var a=t.payload;return Object(p.a)(Object(p.a)({},e),{},{duration:a.duration,time:0,playerDisabled:!1,toneState:v.d.start().state,playbackTimeID:a.playbackTimeID});case"COUNT_TIME":return e.duration>e.time?Object(p.a)(Object(p.a)({},e),{},{time:e.time+1}):(window.clearInterval(e.playbackTimeID),Object(p.a)(Object(p.a)({},e),{},{time:0,toneState:v.d.stop().state,playbackTimeID:0}));case"PLAY_MIDI":return Object(p.a)(Object(p.a)({},e),{},{toneState:v.d.start().state,playbackTimeID:t.payload.playbackTimeID});case"PAUSE_MIDI":return window.clearInterval(e.playbackTimeID),Object(p.a)(Object(p.a)({},e),{},{toneState:v.d.pause().state,playbackTimeID:0});case"STOP_MIDI":return window.clearInterval(e.playbackTimeID),Object(p.a)(Object(p.a)({},e),{},{time:0,toneState:v.d.stop().state,playbackTimeID:0})}},g=function(){return Object(n.useContext)(f)},k=function(){var e=g(),t=e.state,a=e.dispatch,n=t.synth,r=function(){return window.setInterval((function(){return a({type:"COUNT_TIME"})}),1e3)};return{state:t,handlers:{dropFile:function(e){var t=Object(s.a)(e.target.files,1)[0],c=new FileReader;c.onload=function(e){var t=new m.Midi(e.target.result);v.d.cancel(),t.tracks.forEach((function(e){new v.b((function(e,t){null===n||void 0===n||n.triggerAttackRelease(t.name,t.duration,e,t.velocity);var a=document.querySelector('[data-key-num="'.concat(function(e){return Object(v.a)(e).toMidi()}(t.name),'"]')).dataset;a.active="true",setTimeout((function(){return a.active="false"}),1e3*t.duration)}),e.notes).start()})),a({type:"LOADED_MIDI",payload:{duration:Math.ceil(t.duration),playbackTimeID:r()}})},c.readAsArrayBuffer(t)},PlayPause:function(){return a("started"!==t.toneState?{type:"PLAY_MIDI",payload:{playbackTimeID:r()}}:{type:"PAUSE_MIDI"})},stop:function(){return a({type:"STOP_MIDI"})}}}},C=function(){return g().state.synth},I=a(10),N=function(e,t){switch(e){case"detune":case"portamento":case"volume":return t(Object(I.b)([e]));case"type":case"partialCount":case"phase":return t(Object(I.b)(["oscillator",e]));case"attack":case"attackCurve":case"decay":case"decayCurve":case"release":case"releaseCurve":case"sustain":return t(Object(I.b)(["envelope",e]))}},P=Object(I.a)((function(e,t){return Object(I.e)(t,e)})),D=Object(I.a)((function(e,t,a){return Object(I.d)(t,a,e)})),S=function(){var e=g(),t=e.state,a=e.dispatch,n=P(t.synthParams),r=D(t.synthParams);return{getParams:function(e){return N(e,(function(e){return n(e)}))},setParams:function(e,n){var c=N(e,(function(e){var a=r(e);return t.synth.set(a(n||"0")),a(n)}));a({type:"SET_SYNTH_PARAMS",payload:{synthParams:c}})}}},T=function(){return g().state.toneState};var w=function(e){var t=e.usePlayer,a=(void 0===t?k:t)(),n=a.state,r=a.handlers;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"file",id:"dropFile",className:"form-input",accept:"audio/midi",onChange:r.dropFile})}),Object(u.jsxs)("div",{className:"el-cluster el-cluster--justify:flex-start",children:[Object(u.jsx)(d,{onClick:r.PlayPause,iconProp:"started"!==n.toneState?l.b:l.a,disabled:n.playerDisabled}),Object(u.jsx)(d,{onClick:r.stop,iconProp:l.c,disabled:n.playerDisabled}),Object(u.jsx)(j,{time:n.time,duration:n.duration})]})]})},_=a(4),M=a(25),E=(a(53),function(e){var t=Object(M.a)(e),a=t.slice(0),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.reduce((function(e,t,r){return r%n?e:[].concat(Object(_.a)(e),[a.slice(r,r+n)])}),[])}),A=Object(I.c)(21,109),F=A.length/2,L=function(e){return Object(v.a)(e,"midi").toNote()},R=function(e){switch((e-20)%12){case 0:case 2:case 5:case 7:case 10:return!0;default:return!1}};var U=function(e){var t=e.useSynth,a=void 0===t?C:t,r=e.useToneState,c=void 0===r?T:r,i=a(),l=c(),o=Object(n.useState)(!1),d=Object(s.a)(o,2),b=d[0],j=d[1],m=function(e){e.preventDefault();var t=e.target.dataset;t.keyNum&&(t.active=!0,null===i||void 0===i||i.triggerAttack(L(t.keyNum),Object(v.e)()))},p=function(e){e.preventDefault();var t=e.target.dataset;t.keyNum&&(t.active=!1,null===i||void 0===i||i.triggerRelease(L(t.keyNum)))};return Object(n.useEffect)((function(){var e=function(){return j(!0)},t=function(){return j(!1)},a=function(e){b&&e.preventDefault()};return document.addEventListener("pointerdown",e),document.addEventListener("pointerup",t),document.addEventListener("pointermove",a,{passive:!1}),function(){document.removeEventListener("pointerdown",e),document.removeEventListener("pointerup",t),document.removeEventListener("pointermove",a)}}),[]),Object(u.jsx)("div",{className:"the-keyboard el-stack",style:{margin:"0 auto"},onPointerDown:m,onPointerOver:function(e){return b&&m(e)},onPointerUp:p,onPointerOut:function(e){return b&&p(e)},children:E(A,F).reverse().map((function(e,t){return Object(u.jsx)("div",{className:"the-keyboard__row "+("started"===l?"app-util-pointerEvent:none":""),children:e.map((function(e){var t=L(e);return Object(u.jsx)("div",{className:"the-keyboard__key-container",children:Object(u.jsx)("div",{className:"the-keyboard__key "+(R(e)?"--black":"--white"),"data-key-num":e,children:Object(u.jsx)("span",{className:"the-keyboard__label",children:/C[1-8]/.test(t)?t:""})})},e-21)}))},t)}))})},Y=function(e){var t=e.id,a=e.name,n=e.title,r=e.children;return Object(u.jsxs)("div",{className:"accordion",children:[Object(u.jsx)("input",{type:"checkbox",id:t,name:a,hidden:!0}),Object(u.jsxs)("label",{className:"accordion-header",htmlFor:t,children:[Object(u.jsx)("i",{className:"icon icon-arrow-right mr-1"}),n]}),Object(u.jsx)("div",{className:"accordion-body",children:r})]})},B=function(e){var t=e.children,a=n.Children.toArray(t),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(u.jsxs)("div",{className:"el-cluster el-cluster--justify:space-between el-cluster--space:0",children:[Object(u.jsx)("div",{style:{width:"91px"},children:c}),Object(u.jsx)("div",{children:i})]})},H=function(e){var t=e.id,a=e.label,n=e.min,r=e.max,c=e.step,i=e.value,s=e.onChange;return Object(u.jsxs)(B,{children:[Object(u.jsx)("label",{className:"form-label",htmlFor:t,children:a}),Object(u.jsx)("input",{type:"number",id:t,className:"form-input",min:n,max:r,step:c,value:i,onChange:s})]})};var q=function(){var e=S(),t=e.getParams,a=e.setParams;return Object(u.jsxs)(Y,{id:"options",title:"options",name:"options",children:[Object(u.jsx)(H,{id:"detune",label:"detune",value:t("detune"),onChange:function(e){return a("detune",e.target.value)}}),Object(u.jsx)(H,{id:"portamento",label:"portamento",min:"0",value:t("portamento"),onChange:function(e){return a("portamento",e.target.value)}}),Object(u.jsx)(H,{id:"volume",label:"volume",value:t("volume"),onChange:function(e){return a("volume",e.target.value)}})]})},J=function(e){var t=e.id,a=e.label,r=e.onChange,c=e.children,i=e.value;return Object(u.jsxs)(B,{children:[Object(u.jsx)("label",{className:"form-label",htmlFor:t,children:a}),Object(u.jsx)("select",{id:t,className:"form-select",value:i,onChange:r,children:n.Children.map(c,(function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))})]})};var G=function(){var e=S(),t=e.getParams,a=e.setParams;return Object(u.jsxs)(Y,{id:"oscillator",title:"oscillator",name:"oscillator",children:[Object(u.jsx)(J,{id:"type",label:"type",value:t("type"),onChange:function(e){return a("type",e.target.value)},children:["sine","square","sawtooth","triangle"]}),Object(u.jsx)(H,{id:"partialCount",label:"partialCount",min:"0",step:"1",value:t("partialCount"),onChange:function(e){return a("partialCount",e.target.value)}}),Object(u.jsx)(H,{id:"phase",label:"phase",min:"0",step:"0.1",value:t("phase"),onChange:function(e){return a("phase",e.target.value)}})]})},z=function(e){var t=e.label,a=e.name,r=e.value,c=e.children,i=e.onChange;return Object(u.jsxs)(B,{children:[Object(u.jsx)("label",{className:"form-label",children:t}),Object(u.jsx)(u.Fragment,{children:n.Children.map(c,(function(e,t){return Object(u.jsxs)("label",{className:"form-radio form-inline",children:[Object(u.jsx)("input",{type:"radio",name:a,value:e,checked:e===r,onChange:i}),Object(u.jsx)("i",{className:"form-icon"}),e]},t)}))})]})};var K=function(){var e=S(),t=e.getParams,a=e.setParams;return Object(u.jsxs)(Y,{id:"envelope",title:"envelope",name:"envelope",children:[Object(u.jsx)(H,{id:"attack",label:"attack",min:"0",step:"0.001",value:t("attack"),onChange:function(e){return a("attack",e.target.value)}}),Object(u.jsx)(z,{label:"attackCurve",name:"attackCurve",value:t("attackCurve"),onChange:function(e){return a("attackCurve",e.target.value)},children:["linear","exponential"]}),Object(u.jsx)(H,{id:"decay",label:"decay",min:"0",step:"0.001",value:t("decay"),onChange:function(e){return a("decay",e.target.value)}}),Object(u.jsx)(z,{label:"decayCurve",name:"decayCurve",value:t("decayCurve"),onChange:function(e){return a("decayCurve",e.target.value)},children:["linear","exponential"]}),Object(u.jsx)(H,{id:"release",label:"release",min:"0",step:"0.001",value:t("release"),onChange:function(e){return a("release",e.target.value)}}),Object(u.jsx)(z,{label:"releaseCurve",name:"releaseCurve",value:t("releaseCurve"),onChange:function(e){return a("releaseCurve",e.target.value)},children:["linear","exponential"]}),Object(u.jsx)(H,{id:"sustain",label:"sustain",min:"0.1",max:"1",step:"0.001",value:t("sustain"),onChange:function(e){return a("sustain",e.target.value)}})]})};var Q=function(){return Object(u.jsxs)("div",{className:"el-center",children:[Object(u.jsx)(q,{}),Object(u.jsx)(G,{}),Object(u.jsx)(K,{})]})},V=function(e){var t=e.url,a=e.label;return Object(u.jsx)("a",{className:"base-link",href:t,target:"_blank",rel:"noopener noreferrer",children:a})};var W=function(){return Object(u.jsx)("footer",{className:"el-center",children:Object(u.jsxs)("small",{children:[Object(u.jsx)(V,{url:"https://github.com/l1ck0h/keyboard",label:"GitHub"})," / \xa9 2022 l1ck0h"]})})};var X=function(){var e=Object(n.useReducer)(x,y),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f.Provider,{value:{state:a,dispatch:r},children:Object(u.jsxs)("div",{className:"el-cover",children:[Object(u.jsx)(w,{}),Object(u.jsx)("div",{className:"el-reel",children:Object(u.jsx)(U,{})}),Object(u.jsx)(Q,{}),Object(u.jsx)(W,{})]})})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a(54),a(55),a(56),a(57);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),Z()}},[[58,1,2]]]);
//# sourceMappingURL=main.44eeb205.chunk.js.map