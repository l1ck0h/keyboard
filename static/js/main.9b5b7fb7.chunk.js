(this.webpackJsonpkeyboard=this.webpackJsonpkeyboard||[]).push([[0],{31:function(e,t,a){},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(23),i=a.n(c),s=(a(31),a(3)),l=a(4),o=a(24),u=a(10),d=a(7),b=a(25),j=a(1),v=(new d.c).toDestination(),m=v.get(),h=Object(n.createContext)({}),p={time:0,duration:0,toneState:"stopped",synth:v,synthParams:m,playerDisabled:!0,playbackTimeID:0},O=function(e,t){switch(t.type){case"SET_SYNTH_PARAMS":return Object(j.a)(Object(j.a)({},e),{},{synthParams:t.payload.synthParams});case"LOADED_MIDI":var a=t.payload;return Object(j.a)(Object(j.a)({},e),{},{duration:a.duration,time:0,playerDisabled:!1,toneState:d.d.start().state,playbackTimeID:a.playbackTimeID});case"COUNT_TIME":return e.duration>e.time?Object(j.a)(Object(j.a)({},e),{},{time:e.time+1}):(window.clearInterval(e.playbackTimeID),Object(j.a)(Object(j.a)({},e),{},{time:0,toneState:d.d.stop().state,playbackTimeID:0}));case"PLAY_MIDI":return Object(j.a)(Object(j.a)({},e),{},{toneState:d.d.start().state,playbackTimeID:t.payload.playbackTimeID});case"PAUSE_MIDI":return window.clearInterval(e.playbackTimeID),Object(j.a)(Object(j.a)({},e),{},{toneState:d.d.pause().state,playbackTimeID:0});case"STOP_MIDI":return window.clearInterval(e.playbackTimeID),Object(j.a)(Object(j.a)({},e),{},{time:0,toneState:d.d.stop().state,playbackTimeID:0})}},f=function(){return Object(n.useContext)(h)},y=function(){var e=f(),t=e.state,a=e.dispatch,n=t.synth,r=function(){return window.setInterval((function(){return a({type:"COUNT_TIME"})}),1e3)};return{state:t,handlers:{dropFile:function(e){var t=Object(s.a)(e.target.files,1)[0],c=new FileReader;c.onload=function(e){var t=new b.Midi(e.target.result);d.d.cancel(),t.tracks.forEach((function(e){new d.b((function(e,t){null===n||void 0===n||n.triggerAttackRelease(t.name,t.duration,e,t.velocity);var a=document.querySelector('[data-key-num="'.concat(function(e){return Object(d.a)(e).toMidi()}(t.name),'"]')).dataset;a.active="true",setTimeout((function(){return a.active="false"}),1e3*t.duration)}),e.notes).start()})),a({type:"LOADED_MIDI",payload:{duration:Math.ceil(t.duration),playbackTimeID:r()}})},c.readAsArrayBuffer(t)},PlayPause:function(){return a("started"!==t.toneState?{type:"PLAY_MIDI",payload:{playbackTimeID:r()}}:{type:"PAUSE_MIDI"})},stop:function(){return a({type:"STOP_MIDI"})}}}},x=function(){return f().state.synth},g=function(e,t){switch(e){case"detune":case"portamento":case"volume":return t(Object(u.b)([e]));case"type":case"partialCount":case"phase":return t(Object(u.b)(["oscillator",e]));case"attack":case"attackCurve":case"decay":case"decayCurve":case"release":case"releaseCurve":case"sustain":return t(Object(u.b)(["envelope",e]))}},k=Object(u.a)((function(e,t){return Object(u.e)(t,e)})),C=Object(u.a)((function(e,t,a){return Object(u.d)(t,a,e)})),N=function(){var e=f(),t=e.state,a=e.dispatch,n=k(t.synthParams),r=C(t.synthParams);return{getParams:function(e){return g(e,(function(e){return n(e)}))},setParams:function(e,n){var c=g(e,(function(e){var a=r(e);return t.synth.set(a(n||"0")),a(n)}));a({type:"SET_SYNTH_PARAMS",payload:{synthParams:c}})}}},I=function(){return f().state.toneState},D=(a(50),a(2)),P=function(e){var t=Object(o.a)(e),a=t.slice(0),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.reduce((function(e,t,r){return r%n?e:[].concat(Object(l.a)(e),[a.slice(r,r+n)])}),[])},w=Object(u.c)(21,109),T=w.length/2,S=function(e){return Object(d.a)(e,"midi").toNote()},_=function(e){switch((e-20)%12){case 0:case 2:case 5:case 7:case 10:return!0;default:return!1}};var M=function(e){var t=e.useSynth,a=void 0===t?x:t,r=e.useToneState,c=void 0===r?I:r,i=a(),l=c(),o=Object(n.useState)(!1),u=Object(s.a)(o,2),b=u[0],j=u[1],v=function(e){e.preventDefault();var t=e.target.dataset;t.keyNum&&(t.active=!0,null===i||void 0===i||i.triggerAttack(S(t.keyNum),Object(d.e)()))},m=function(e){e.preventDefault();var t=e.target.dataset;t.keyNum&&(t.active=!1,null===i||void 0===i||i.triggerRelease(S(t.keyNum)))};return Object(n.useEffect)((function(){var e=function(){return j(!0)},t=function(){return j(!1)},a=function(e){return b&&e.preventDefault()};return document.addEventListener("pointerdown",e),document.addEventListener("pointerup",t),document.addEventListener("pointermove",a,{passive:!1}),function(){document.removeEventListener("pointerdown",e),document.removeEventListener("pointerup",t),document.removeEventListener("pointermove",a)}}),[]),Object(D.jsx)("div",{className:"the-keyboard el-stack",onMouseDown:v,onMouseOver:function(e){return b&&v(e)},onMouseUp:m,onMouseOut:function(e){return b&&m(e)},onTouchStart:v,onTouchEnd:m,children:P(w,T).reverse().map((function(e,t){return Object(D.jsx)("div",{className:"the-keyboard__row "+("started"===l?"--notAllowed":""),children:e.map((function(e){var t=S(e);return Object(D.jsx)("div",{className:"the-keyboard__key-container",children:Object(D.jsx)("div",{className:"the-keyboard__key "+(_(e)?"--black":"--white"),"data-key-num":e,children:Object(D.jsx)("span",{className:"the-keyboard__label",children:/C[1-8]/.test(t)?t:""})})},e-21)}))},t)}))})},E=function(e){var t=e.id,a=e.name,n=e.title,r=e.children;return Object(D.jsxs)("div",{className:"accordion",children:[Object(D.jsx)("input",{type:"checkbox",id:t,name:a,hidden:!0}),Object(D.jsxs)("label",{className:"accordion-header",htmlFor:t,children:[Object(D.jsx)("i",{className:"icon icon-arrow-right mr-1"}),n]}),Object(D.jsx)("div",{className:"accordion-body",children:r})]})},A=function(e){var t=e.children,a=n.Children.toArray(t),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(D.jsxs)("div",{className:"el-cluster el-cluster--justify:flex-start el-cluster--space:0",children:[Object(D.jsx)("div",{style:{width:"91px"},children:c}),Object(D.jsx)("div",{children:i})]})},F=function(e){var t=e.id,a=e.label,n=e.min,r=e.max,c=e.step,i=e.value,s=e.onChange;return Object(D.jsxs)(A,{children:[Object(D.jsx)("label",{className:"form-label",htmlFor:t,children:a}),Object(D.jsx)("input",{type:"number",id:t,className:"form-input",min:n,max:r,step:c,value:i,onChange:s})]})};var L=function(){var e=N(),t=e.getParams,a=e.setParams;return Object(D.jsxs)(E,{id:"options",title:"options",name:"options",children:[Object(D.jsx)(F,{id:"detune",label:"detune",value:t("detune"),onChange:function(e){return a("detune",e.target.value)}}),Object(D.jsx)(F,{id:"portamento",label:"portamento",min:"0",value:t("portamento"),onChange:function(e){return a("portamento",e.target.value)}}),Object(D.jsx)(F,{id:"volume",label:"volume",value:t("volume"),onChange:function(e){return a("volume",e.target.value)}})]})},R=function(e){var t=e.id,a=e.label,r=e.onChange,c=e.children,i=e.value;return Object(D.jsxs)(A,{children:[Object(D.jsx)("label",{className:"form-label",htmlFor:t,children:a}),Object(D.jsx)("select",{id:t,className:"form-select",value:i,onChange:r,children:n.Children.map(c,(function(e,t){return Object(D.jsx)("option",{value:e,children:e},t)}))})]})};var U=function(){var e=N(),t=e.getParams,a=e.setParams;return Object(D.jsxs)(E,{id:"oscillator",title:"oscillator",name:"oscillator",children:[Object(D.jsx)(R,{id:"type",label:"type",value:t("type"),onChange:function(e){return a("type",e.target.value)},children:["sine","square","sawtooth","triangle"]}),Object(D.jsx)(F,{id:"partialCount",label:"partialCount",min:"0",step:"1",value:t("partialCount"),onChange:function(e){return a("partialCount",e.target.value)}}),Object(D.jsx)(F,{id:"phase",label:"phase",min:"0",step:"0.1",value:t("phase"),onChange:function(e){return a("phase",e.target.value)}})]})},Y=function(e){var t=e.label,a=e.name,r=e.value,c=e.children,i=e.onChange;return Object(D.jsxs)(A,{children:[Object(D.jsx)("label",{className:"form-label",children:t}),Object(D.jsx)(D.Fragment,{children:n.Children.map(c,(function(e,t){return Object(D.jsxs)("label",{className:"form-radio form-inline",children:[Object(D.jsx)("input",{type:"radio",name:a,value:e,checked:e===r,onChange:i}),Object(D.jsx)("i",{className:"form-icon"}),e]},t)}))})]})};var B=function(){var e=N(),t=e.getParams,a=e.setParams;return Object(D.jsxs)(E,{id:"envelope",title:"envelope",name:"envelope",children:[Object(D.jsx)(F,{id:"attack",label:"attack",min:"0",step:"0.001",value:t("attack"),onChange:function(e){return a("attack",e.target.value)}}),Object(D.jsx)(Y,{label:"attackCurve",name:"attackCurve",value:t("attackCurve"),onChange:function(e){return a("attackCurve",e.target.value)},children:["linear","exponential"]}),Object(D.jsx)(F,{id:"decay",label:"decay",min:"0",step:"0.001",value:t("decay"),onChange:function(e){return a("decay",e.target.value)}}),Object(D.jsx)(Y,{label:"decayCurve",name:"decayCurve",value:t("decayCurve"),onChange:function(e){return a("decayCurve",e.target.value)},children:["linear","exponential"]}),Object(D.jsx)(F,{id:"release",label:"release",min:"0",step:"0.001",value:t("release"),onChange:function(e){return a("release",e.target.value)}}),Object(D.jsx)(Y,{label:"releaseCurve",name:"releaseCurve",value:t("releaseCurve"),onChange:function(e){return a("releaseCurve",e.target.value)},children:["linear","exponential"]}),Object(D.jsx)(F,{id:"sustain",label:"sustain",min:"0.1",max:"1",step:"0.001",value:t("sustain"),onChange:function(e){return a("sustain",e.target.value)}})]})};var H=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(L,{}),Object(D.jsx)(U,{}),Object(D.jsx)(B,{})]})},q=function(e){var t=e.url,a=e.label;return Object(D.jsx)("a",{className:"base-link",href:t,target:"_blank",rel:"noopener noreferrer",children:a})};var J=function(){return Object(D.jsx)("footer",{className:"el-center",children:Object(D.jsxs)("small",{children:[Object(D.jsx)(q,{url:"https://github.com/l1ck0h/keyboard",label:"GitHub"})," / \xa9 2022 l1ck0h"]})})},G=a(16),W=a(26),z=function(e){var t=e.onClick,a=e.disabled,n=e.iconProp;return Object(D.jsx)("button",{className:"btn btn-action s-circle",onClick:t,disabled:a,children:Object(D.jsx)(W.a,{icon:n})})},K=function(e){var t=function(e){return e.toString().padStart(2,"0")},a=Math.floor(e%86400/3600),n=Math.floor(e%86400%3600/60),r=Math.floor(e%86400%3600%60);return a?a+":"+n+":"+t(r):n+":"+t(r)},Q=function(e){var t=e.time,a=e.duration;return Object(D.jsxs)("span",{className:"base-time",children:[K(t)," / ",K(a)]})};var V=function(){var e=y(),t=e.state,a=e.handlers;return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"file",id:"dropFile",className:"form-input",accept:"audio/midi",onChange:a.dropFile})}),Object(D.jsxs)("div",{className:"el-cluster el-cluster--justify:flex-start",children:[Object(D.jsx)(z,{onClick:a.PlayPause,iconProp:"started"!==t.toneState?G.b:G.a,disabled:t.playerDisabled}),Object(D.jsx)(z,{onClick:a.stop,iconProp:G.c,disabled:t.playerDisabled}),Object(D.jsx)(Q,{time:t.time,duration:t.duration})]})]})};var X=function(){var e=Object(n.useReducer)(O,p),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(h.Provider,{value:{state:a,dispatch:r},children:Object(D.jsxs)("div",{className:"el-cover",children:[Object(D.jsx)("div",{className:"el-cover__centered",children:Object(D.jsxs)("div",{className:"el-with-sidebar el-with-sidebar--right el-with-sidebar--contentMin:75%",style:{"--sideWidth":"15rem"},children:[Object(D.jsxs)("div",{className:"el-stack",children:[Object(D.jsx)(M,{}),Object(D.jsx)(V,{})]}),Object(D.jsx)(H,{})]})}),Object(D.jsx)(J,{})]})})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a(54),a(55),a(56),a(57);i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(X,{})}),document.getElementById("root")),Z()}},[[58,1,2]]]);
//# sourceMappingURL=main.9b5b7fb7.chunk.js.map