import{m as be,V as te}from"./VTextField-30447f82.js";import{p as O,A as J,C as U,u as re,R as j,F as K,q as d,af as z,x as X,s as $,c as w,r as F,U as Ie,aa as Te,at as ke,Q as ne,au as Ce,g as Pe,av as pe,L as Be,T as Re,j as W,o as _e,aw as Ee,ax as De,Y as Le,ai as He,$ as Ae,a0 as de,S as le,a8 as ae,V as Me,t as Fe,ay as oe,az as $e,aA as Oe,aB as ve,G as Ye,B as We,D as Xe,E as ze,aC as Ue,b as je,a6 as fe,aD as Ke,X as se,aE as qe,aF as Ge,i as Ne,aG as Qe,aH as Je,a7 as Ze,a5 as et,ah as tt}from"./index-0e68266d.js";import{u as nt}from"./form-b5b6f469.js";import{f as lt}from"./forwardRefs-7d2ac543.js";import{m as at,d as ot,c as st,b as it,a as ie,u as ut}from"./VMenu-e927f046.js";import{V as ct}from"./dialog-transition-8013489f.js";import{V as rt}from"./VCheckboxBtn-a9c4275d.js";import{V as dt}from"./VChip-d4b79acb.js";const $t="/Vue/assets/homeimg2-95d7698b.jpg",Ot="/Vue/assets/homeimg-1d11e2c3.jpg";const vt=O({renderless:Boolean,...J()},"VVirtualScrollItem"),ft=U()({name:"VVirtualScrollItem",inheritAttrs:!1,props:vt(),emits:{"update:height":e=>!0},setup(e,l){let{attrs:t,emit:n,slots:i}=l;const{resizeRef:r,contentRect:a}=re(void 0,"border");j(()=>{var o;return(o=a.value)==null?void 0:o.height},o=>{o!=null&&n("update:height",o)}),K(()=>{var o,s;return e.renderless?d(z,null,[(o=i.default)==null?void 0:o.call(i,{itemRef:r})]):d("div",X({ref:r,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(s=i.default)==null?void 0:s.call(i)])})}}),ue=-1,ce=1,mt=O({itemHeight:{type:[Number,String],default:48}},"virtual");function ht(e,l,t){const n=$(0),i=$(e.itemHeight),r=w({get:()=>parseInt(i.value??0,10),set(y){i.value=y}}),a=F(),{resizeRef:o,contentRect:s}=re();Ie(()=>{o.value=a.value});const h=Te(),b=new Map;let I=Array.from({length:l.value.length});const u=w(()=>{const y=(!s.value||a.value===document.documentElement?h.height.value:s.value.height)-((t==null?void 0:t.value)??0);return Math.ceil(y/r.value*1.7+1)});function v(y,x){r.value=Math.max(r.value,x),I[y]=x,b.set(l.value[y],x)}function g(y){return I.slice(0,y).reduce((x,P)=>x+(P||r.value),0)}function k(y){const x=l.value.length;let P=0,A=0;for(;A<y&&P<x;)A+=I[P++]||r.value;return P-1}let L=0;function H(){if(!a.value||!s.value)return;const y=s.value.height-56,x=a.value.scrollTop,P=x<L?ue:ce,A=k(x+y/2),M=Math.round(u.value/3),q=A-M,G=n.value+M*2-1;P===ue&&A<=G?n.value=ne(q,0,l.value.length):P===ce&&A>=G&&(n.value=ne(q,0,l.value.length-u.value)),L=x}function Y(y){if(!a.value)return;const x=g(y);a.value.scrollTop=x}const E=w(()=>Math.min(l.value.length,n.value+u.value)),V=w(()=>l.value.slice(n.value,E.value).map((y,x)=>({raw:y,index:x+n.value}))),S=w(()=>g(n.value)),C=w(()=>g(l.value.length)-g(E.value));return j(()=>l.value.length,()=>{I=ke(l.value.length).map(()=>r.value),b.forEach((y,x)=>{const P=l.value.indexOf(x);P===-1?b.delete(x):I[P]=y})}),{containerRef:a,computedItems:V,itemHeight:r,paddingTop:S,paddingBottom:C,scrollToIndex:Y,handleScroll:H,handleItemResize:v}}const gt=O({items:{type:Array,default:()=>[]},renderless:Boolean,...mt(),...J(),...Ce()},"VVirtualScroll"),yt=U()({name:"VVirtualScroll",props:gt(),setup(e,l){let{slots:t}=l;const n=Pe("VVirtualScroll"),{dimensionStyles:i}=pe(e),{containerRef:r,handleScroll:a,handleItemResize:o,scrollToIndex:s,paddingTop:h,paddingBottom:b,computedItems:I}=ht(e,Be(e,"items"));return Re(()=>e.renderless,()=>{_e(()=>{var u;r.value=Ee(n.vnode.el,!0),(u=r.value)==null||u.addEventListener("scroll",a)}),De(()=>{var u;(u=r.value)==null||u.removeEventListener("scroll",a)})}),K(()=>{const u=I.value.map(v=>d(ft,{key:v.index,renderless:e.renderless,"onUpdate:height":g=>o(v.index,g)},{default:g=>{var k;return(k=t.default)==null?void 0:k.call(t,{item:v.raw,index:v.index,...g})}}));return e.renderless?d(z,null,[d("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:W(h.value)}},null),u,d("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:W(b.value)}},null)]):d("div",{ref:r,class:["v-virtual-scroll",e.class],onScroll:a,style:[i.value,e.style]},[d("div",{class:"v-virtual-scroll__container",style:{paddingTop:W(h.value),paddingBottom:W(b.value)}},[u])])}),{scrollToIndex:s}}});function Vt(e,l){const t=$(!1);let n;function i(o){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function r(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const s=j(t,()=>{s(),o()})}else o()})}async function a(o){var b,I;if(o.key==="Tab"&&((b=l.value)==null||b.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const s=(I=e.value)==null?void 0:I.$el;if(!s)return;(o.key==="Home"||o.key==="End")&&s.scrollTo({top:o.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await r();const h=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const u=s.getBoundingClientRect().top;for(const v of h)if(v.getBoundingClientRect().top>=u){v.focus();break}}else{const u=s.getBoundingClientRect().bottom;for(const v of[...h].reverse())if(v.getBoundingClientRect().bottom<=u){v.focus();break}}}return{onListScroll:i,onListKeydown:a}}const St=O({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Le,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...at({itemChildren:!1})},"Select"),xt=O({...St(),...He(be({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Ae({transition:{component:ct}})},"VSelect"),Yt=U()({name:"VSelect",props:xt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:t}=l;const{t:n}=de(),i=F(),r=F(),a=F(),o=le(e,"menu"),s=w({get:()=>o.value,set:c=>{var f;o.value&&!c&&((f=r.value)!=null&&f.ΨopenChildren)||(o.value=c)}}),{items:h,transformIn:b,transformOut:I}=ot(e),u=le(e,"modelValue",[],c=>b(c===null?[null]:Oe(c)),c=>{const f=I(c);return e.multiple?f:f[0]??null}),v=nt(),g=w(()=>u.value.map(c=>c.value)),k=$(!1),L=w(()=>s.value?e.closeText:e.openText);let H="",Y;const E=w(()=>e.hideSelected?h.value.filter(c=>!u.value.some(f=>f===c)):h.value),V=w(()=>e.hideNoData&&!h.value.length||e.readonly||(v==null?void 0:v.isReadonly.value)),S=F(),{onListScroll:C,onListKeydown:y}=Vt(S,i);function x(c){e.openOnClear&&(s.value=!0)}function P(){V.value||(s.value=!s.value)}function A(c){var m,B;if(!c.key||e.readonly||v!=null&&v.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(c.key)&&c.preventDefault(),["Enter","ArrowDown"," "].includes(c.key)&&(s.value=!0),["Escape","Tab"].includes(c.key)&&(s.value=!1),c.key==="Home"?(m=S.value)==null||m.focus("first"):c.key==="End"&&((B=S.value)==null||B.focus("last"));const f=1e3;function p(T){const D=T.key.length===1,R=!T.ctrlKey&&!T.metaKey&&!T.altKey;return D&&R}if(e.multiple||!p(c))return;const N=performance.now();N-Y>f&&(H=""),H+=c.key.toLowerCase(),Y=N;const Q=h.value.find(T=>T.title.toLowerCase().startsWith(H));Q!==void 0&&(u.value=[Q])}function M(c){if(e.multiple){const f=u.value.findIndex(p=>e.valueComparator(p.value,c.value));if(f===-1)u.value=[...u.value,c];else{const p=[...u.value];p.splice(f,1),u.value=p}}else u.value=[c],s.value=!1}function q(c){var f;(f=S.value)!=null&&f.$el.contains(c.relatedTarget)||(s.value=!1)}function G(){var c;k.value&&((c=i.value)==null||c.focus())}function ye(c){k.value=!0}function Ve(c){if(c==null)u.value=[];else if(oe(i.value,":autofill")||oe(i.value,":-webkit-autofill")){const f=h.value.find(p=>p.title===c);f&&M(f)}else i.value&&(i.value.value="")}return j(s,()=>{if(!e.hideSelected&&s.value&&u.value.length){const c=E.value.findIndex(f=>u.value.some(p=>e.valueComparator(p.value,f.value)));$e&&window.requestAnimationFrame(()=>{var f;c>=0&&((f=a.value)==null||f.scrollToIndex(c))})}}),K(()=>{const c=!!(e.chips||t.chip),f=!!(!e.hideNoData||E.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),p=u.value.length>0,[N]=te.filterProps(e),Q=p||!k.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return d(te,X({ref:i},N,{modelValue:u.value.map(m=>m.props.value).join(", "),"onUpdate:modelValue":Ve,focused:k.value,"onUpdate:focused":m=>k.value=m,validationValue:u.externalValue,counterValue:u.value.length,dirty:p,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:Q,"onClick:clear":x,"onMousedown:control":P,onBlur:q,onKeydown:A,"aria-label":n(L.value),title:n(L.value)}),{...t,default:()=>d(z,null,[d(st,X({ref:r,modelValue:s.value,"onUpdate:modelValue":m=>s.value=m,activator:"parent",contentClass:"v-select__content",disabled:V.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:G},e.menuProps),{default:()=>[f&&d(it,{ref:S,selected:g.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:m=>m.preventDefault(),onKeydown:y,onFocusin:ye,onScrollPassive:C,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var m,B,T;return[(m=t["prepend-item"])==null?void 0:m.call(t),!E.value.length&&!e.hideNoData&&(((B=t["no-data"])==null?void 0:B.call(t))??d(ie,{title:n(e.noDataText)},null)),d(yt,{ref:a,renderless:!0,items:E.value},{default:D=>{var ee;let{item:R,index:_,itemRef:Se}=D;const Z=X(R.props,{ref:Se,key:_,onClick:()=>M(R)});return((ee=t.item)==null?void 0:ee.call(t,{item:R,index:_,props:Z}))??d(ie,Z,{prepend:xe=>{let{isSelected:we}=xe;return d(z,null,[e.multiple&&!e.hideSelected?d(rt,{key:R.value,modelValue:we,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependIcon&&d(ae,{icon:R.props.prependIcon},null)])}})}}),(T=t["append-item"])==null?void 0:T.call(t)]}})]}),u.value.map((m,B)=>{var R;function T(_){_.stopPropagation(),_.preventDefault(),M(m)}const D={"onClick:close":T,onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return d("div",{key:m.value,class:"v-select__selection"},[c?t.chip?d(Me,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:m.title}}},{default:()=>{var _;return[(_=t.chip)==null?void 0:_.call(t,{item:m,index:B,props:D})]}}):d(dt,X({key:"chip",closable:e.closableChips,size:"small",text:m.title,disabled:m.props.disabled},D),null):((R=t.selection)==null?void 0:R.call(t,{item:m,index:B}))??d("span",{class:"v-select__selection-text"},[m.title,e.multiple&&B<u.value.length-1&&d("span",{class:"v-select__selection-comma"},[Fe(",")])])])})]),"append-inner":function(){var D;for(var m=arguments.length,B=new Array(m),T=0;T<m;T++)B[T]=arguments[T];return d(z,null,[(D=t["append-inner"])==null?void 0:D.call(t,...B),e.menuIcon?d(ae,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),lt({isFocused:k,menu:s,select:M},i)}});const wt=e=>{const{touchstartX:l,touchendX:t,touchstartY:n,touchendY:i}=e,r=.5,a=16;e.offsetX=t-l,e.offsetY=i-n,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&t<l-a&&e.left(e),e.right&&t>l+a&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<n-a&&e.up(e),e.down&&i>n+a&&e.down(e))};function bt(e,l){var n;const t=e.changedTouches[0];l.touchstartX=t.clientX,l.touchstartY=t.clientY,(n=l.start)==null||n.call(l,{originalEvent:e,...l})}function It(e,l){var n;const t=e.changedTouches[0];l.touchendX=t.clientX,l.touchendY=t.clientY,(n=l.end)==null||n.call(l,{originalEvent:e,...l}),wt(l)}function Tt(e,l){var n;const t=e.changedTouches[0];l.touchmoveX=t.clientX,l.touchmoveY=t.clientY,(n=l.move)==null||n.call(l,{originalEvent:e,...l})}function kt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const l={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>bt(t,l),touchend:t=>It(t,l),touchmove:t=>Tt(t,l)}}function Ct(e,l){var o;const t=l.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},r=(o=l.instance)==null?void 0:o.$.uid;if(!n||!r)return;const a=kt(l.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[r]=a,ve(a).forEach(s=>{n.addEventListener(s,a[s],i)})}function Pt(e,l){var r,a;const t=(r=l.value)!=null&&r.parent?e.parentElement:e,n=(a=l.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];ve(i).forEach(o=>{t.removeEventListener(o,i[o])}),delete t._touchHandlers[n]}const me={mounted:Ct,unmounted:Pt},pt=me,he=Symbol.for("vuetify:v-window"),ge=Symbol.for("vuetify:v-window-group"),Bt=O({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...J(),...Ye(),...We()},"VWindow"),Wt=U()({name:"VWindow",directives:{Touch:me},props:Bt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{themeClasses:n}=Xe(e),{isRtl:i}=ze(),{t:r}=de(),a=Ue(e,ge),o=F(),s=w(()=>i.value?!e.reverse:e.reverse),h=$(!1),b=w(()=>{const V=e.direction==="vertical"?"y":"x",C=(s.value?!h.value:h.value)?"-reverse":"";return`v-window-${V}${C}-transition`}),I=$(0),u=F(void 0),v=w(()=>a.items.value.findIndex(V=>a.selected.value.includes(V.id)));j(v,(V,S)=>{const C=a.items.value.length,y=C-1;C<=2?h.value=V<S:V===y&&S===0?h.value=!0:V===0&&S===y?h.value=!1:h.value=V<S}),je(he,{transition:b,isReversed:h,transitionCount:I,transitionHeight:u,rootRef:o});const g=w(()=>e.continuous||v.value!==0),k=w(()=>e.continuous||v.value!==a.items.value.length-1);function L(){g.value&&a.prev()}function H(){k.value&&a.next()}const Y=w(()=>{const V=[],S={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${s.value?"right":"left"}`,onClick:a.prev,ariaLabel:r("$vuetify.carousel.prev")};V.push(g.value?t.prev?t.prev({props:S}):d(se,S,null):d("div",null,null));const C={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${s.value?"left":"right"}`,onClick:a.next,ariaLabel:r("$vuetify.carousel.next")};return V.push(k.value?t.next?t.next({props:C}):d(se,C,null):d("div",null,null)),V}),E=w(()=>e.touch===!1?e.touch:{...{left:()=>{s.value?L():H()},right:()=>{s.value?H():L()},start:S=>{let{originalEvent:C}=S;C.stopPropagation()}},...e.touch===!0?{}:e.touch});return K(()=>fe(d(e.tag,{ref:o,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var V,S;return[d("div",{class:"v-window__container",style:{height:u.value}},[(V=t.default)==null?void 0:V.call(t,{group:a}),e.showArrows!==!1&&d("div",{class:"v-window__controls"},[Y.value])]),(S=t.additional)==null?void 0:S.call(t,{group:a})]}}),[[Ke("touch"),E.value]])),{group:a}}}),Rt=O({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...J(),...qe(),...Ge()},"VWindowItem"),Xt=U()({name:"VWindowItem",directives:{Touch:pt},props:Rt(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Ne(he),i=Qe(e,ge),{isBooted:r}=ut();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=$(!1),o=w(()=>r.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function s(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function h(){var g;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=W((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function b(){s()}function I(g){a.value&&tt(()=>{!o.value||!a.value||!n||(n.transitionHeight.value=W(g.clientHeight))})}const u=w(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return o.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:h,onAfterEnter:s,onEnterCancelled:b,onBeforeLeave:h,onAfterLeave:s,onLeaveCancelled:b,onEnter:I}:!1}),{hasContent:v}=Je(e,i.isSelected);return K(()=>d(et,{transition:u.value,disabled:!r.value},{default:()=>{var g;return[fe(d("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[v.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ze,i.isSelected.value]])]}})),{groupItem:i}}});export{Yt as V,$t as _,Wt as a,Xt as b,Ot as c};
