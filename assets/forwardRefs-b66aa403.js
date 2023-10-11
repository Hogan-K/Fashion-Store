import{p as j,A as B,au as U,C,av as G,F,q as u,c as w,bB as N,$ as J,s as S,r as K,R as y,ad as Q,ah as X,a6 as D,aD as Y,af as Z,x as k,j as ee,a7 as te,a5 as b}from"./index-d89e87bb.js";function re(e){return{aspectStyles:w(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const q=j({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...U()},"VResponsive"),T=C()({name:"VResponsive",props:q(),setup(e,l){let{slots:n}=l;const{aspectStyles:a}=re(e),{dimensionStyles:c}=G(e);return F(()=>{var t;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(t=n.additional)==null?void 0:t.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function ne(e,l){if(!N)return;const n=l.modifiers||{},a=l.value,{handler:c,options:t}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var m;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const i=(m=e._observe)==null?void 0:m[l.instance.$.uid];if(!i)return;const d=o.some(h=>h.isIntersecting);c&&(!n.quiet||i.init)&&(!n.once||d||i.init)&&c(d,o,f),d&&n.once?x(e,l):i.init=!0},t);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:r},r.observe(e)}function x(e,l){var a;const n=(a=e._observe)==null?void 0:a[l.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ae={mounted:ne,unmounted:x},se=ae,ie=j({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...q(),...B(),...J()},"VImg"),ue=C()({name:"VImg",directives:{intersect:se},props:ie(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:n,slots:a}=l;const c=S(""),t=K(),r=S(e.eager?"loading":"idle"),o=S(),f=S(),i=w(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=w(()=>i.value.aspect||o.value/f.value||0);y(()=>e.src,()=>{m(r.value!=="idle")}),y(d,(s,v)=>{!s&&v&&t.value&&R(t.value)}),Q(()=>m());function m(s){if(!(e.eager&&s)&&!(N&&!s&&!e.eager)){if(r.value="loading",i.value.lazySrc){const v=new Image;v.src=i.value.lazySrc,R(v,null)}i.value.src&&X(()=>{var v,g;if(n("loadstart",((v=t.value)==null?void 0:v.currentSrc)||i.value.src),(g=t.value)!=null&&g.complete){if(t.value.naturalWidth||_(),r.value==="error")return;d.value||R(t.value,null),h()}else d.value||R(t.value),P()})}}function h(){var s;P(),r.value="loaded",n("load",((s=t.value)==null?void 0:s.currentSrc)||i.value.src)}function _(){var s;r.value="error",n("error",((s=t.value)==null?void 0:s.currentSrc)||i.value.src)}function P(){const s=t.value;s&&(c.value=s.currentSrc||s.src)}let W=-1;function R(s){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{clearTimeout(W);const{naturalHeight:O,naturalWidth:V}=s;O||V?(o.value=V,f.value=O):!s.complete&&r.value==="loading"&&v!=null?W=window.setTimeout(g,v):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,f.value=1)};g()}const p=w(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),A=()=>{var g;if(!i.value.src||r.value==="idle")return null;const s=u("img",{class:["v-img__img",p.value],src:i.value.src,srcset:i.value.srcset,alt:e.alt,sizes:e.sizes,ref:t,onLoad:h,onError:_},null),v=(g=a.sources)==null?void 0:g.call(a);return u(b,{transition:e.transition,appear:!0},{default:()=>[D(v?u("picture",{class:"v-img__picture"},[v,s]):s,[[te,r.value==="loaded"]])]})},E=()=>u(b,{transition:e.transition},{default:()=>[i.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",p.value],src:i.value.lazySrc,alt:e.alt},null)]}),H=()=>a.placeholder?u(b,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,M=()=>a.error?u(b,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,L=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=S(!1);{const s=y(d,v=>{v&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),s())})}return F(()=>{const[s]=T.filterProps(e);return D(u(T,k({class:["v-img",{"v-img--booting":!$.value},e.class],style:[{width:ee(e.width==="auto"?o.value:e.width)},e.style]},s,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(Z,null,[u(A,null,null),u(E,null,null),u(L,null,null),u(H,null,null),u(M,null,null)]),default:a.default}),[[Y("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:t,state:r,naturalWidth:o,naturalHeight:f}}}),z=Symbol("Forwarded refs");function I(e,l){let n=e;for(;n;){const a=Reflect.getOwnPropertyDescriptor(n,l);if(a)return a;n=Object.getPrototypeOf(n)}}function oe(e){for(var l=arguments.length,n=new Array(l>1?l-1:0),a=1;a<l;a++)n[a-1]=arguments[a];return e[z]=n,new Proxy(e,{get(c,t){if(Reflect.has(c,t))return Reflect.get(c,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const r of n)if(r.value&&Reflect.has(r.value,t)){const o=Reflect.get(r.value,t);return typeof o=="function"?o.bind(r.value):o}}},has(c,t){if(Reflect.has(c,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const r of n)if(r.value&&Reflect.has(r.value,t))return!0;return!1},set(c,t,r){if(Reflect.has(c,t))return Reflect.set(c,t,r);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,t))return Reflect.set(o.value,t,r);return!1},getOwnPropertyDescriptor(c,t){var o;const r=Reflect.getOwnPropertyDescriptor(c,t);if(r)return r;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const f of n){if(!f.value)continue;const i=I(f.value,t)??("_"in f.value?I((o=f.value._)==null?void 0:o.setupState,t):void 0);if(i)return i}for(const f of n){const i=f.value&&f.value[z];if(!i)continue;const d=i.slice();for(;d.length;){const m=d.shift(),h=I(m.value,t);if(h)return h;const _=m.value&&m.value[z];_&&d.push(..._)}}}}})}export{se as I,ue as V,oe as f};