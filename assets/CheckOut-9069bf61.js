import{p as I,A as w,C as P,r as L,F as O,q as c,_ as R,al as x,br as S,l as N,m as _,ap as v,w as l,v as t,n as m,ar as q,af as D,as as r,t as g,X as k,aq as F,a8 as E,y as T,z}from"./index-d89e87bb.js";import{V as U}from"./VContainer-ca4db1ee.js";import{m as $,c as j}from"./form-a51f5525.js";import{f as A,V as H}from"./forwardRefs-b66aa403.js";import{V}from"./VTable-c27984cb.js";/* empty css              */const K=I({...w(),...$()},"VForm"),X=P()({name:"VForm",props:K(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,o){let{slots:p,emit:b}=o;const s=j(e),h=L();function f(i){i.preventDefault(),s.reset()}function n(i){const u=i,d=s.validate();u.then=d.then.bind(d),u.catch=d.catch.bind(d),u.finally=d.finally.bind(d),b("submit",u),u.defaultPrevented||d.then(C=>{var y;let{valid:B}=C;B&&((y=h.value)==null||y.submit())}),u.preventDefault()}return O(()=>{var i;return c("form",{ref:h,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:f,onSubmit:n},[(i=p.default)==null?void 0:i.call(p,s)])}),A(s,h)}}),G={name:"CHECKOUT",data(){return{orderId:"",order:{user:{}},isPay:!1}},methods:{getOrder(){let e=this;e.$store.dispatch("Loading",!0),x.get(`https://vue-course-api.hexschool.io/api/hogankai/order/${e.orderId}`).then(o=>{e.order=o.data.order,e.isPay=o.data.order.is_paid,console.log(o.data.order),e.$store.dispatch("Loading",!1)})},payOrder(){let e=this;e.isPay=!0,e.$store.dispatch("Loading",!0),x.post(`https://vue-course-api.hexschool.io/api/hogankai/pay/${e.orderId}`).then(o=>{e.isLoading=!0,console.log(o),o.data.success&&(e.getOrder(),e.$store.dispatch("Loading",!1))})}},created(){let e=this;e.orderId=S().params.orderId,this.getOrder()}},a=e=>(T("data-v-4d136a48"),e=e(),z(),e),J=a(()=>t("thead",null,[t("tr",null,[t("th"),t("th",{class:""},"品名"),t("th",{class:""},"數量"),t("th",{class:""},"單價")])],-1)),M={class:"text-8F8681"},Q={class:"text-8F8681"},W={class:"text-8F8681"},Y={class:"fw-bold"},Z=a(()=>t("td",{colspan:"2"},null,-1)),tt=a(()=>t("td",{class:"rgb2B2 bgF5F"},"總計",-1)),et={class:"bgF5F rgb8F8"},st=a(()=>t("th",{class:"rgb2B2 bgF5F"},"Email :",-1)),ot={class:"text-8F8681"},rt=a(()=>t("th",{class:"rgb2B2 bgF5F"},"姓名 :",-1)),at={class:"text-8F8681"},nt=a(()=>t("th",{class:"rgb2B2 bgF5F"},"收件人電話 :",-1)),lt={class:"text-8F8681"},ct=a(()=>t("th",{class:"rgb2B2 bgF5F"},"收件人地址 :",-1)),dt={class:"text-8F8681"},it=a(()=>t("tr",null,[t("th",{class:"rgb2B2 bgF5F"},"付款狀態"),t("td",{class:"bgF5F"},[t("span",{class:"text-red"},"尚未付款")])],-1)),ut={key:0,class:"text-right"},_t={key:1,class:"d-flex justify-center align-center",style:{"min-height":"600px"}},ht={class:"text-center"},pt=a(()=>t("p",{class:"text-green text-h5"},"付款成功",-1));function mt(e,o,p,b,s,h){const f=N("RouterLink");return _(),v(U,null,{default:l(()=>[s.isPay?F("",!0):(_(),v(X,{key:0,class:"w-75 mx-auto"},{default:l(()=>[c(V,{class:"bg-brown-lighten-5"},{default:l(()=>[J,t("tbody",null,[(_(!0),m(D,null,q(s.order.products,n=>(_(),m("tr",{key:n.id},[t("td",null,[c(H,{class:"my-3",src:n.product.imageUrl,"min-width":"50"},null,8,["src"])]),t("td",M,r(n.product.title),1),t("td",Q,r(n.qty)+"/"+r(n.product.unit),1),t("td",W,r(e.$filter.currency(n.final_total)),1)]))),128))]),t("tfoot",null,[t("tr",Y,[Z,tt,t("td",et,r(e.$filter.currency(s.order.total)),1)])])]),_:1}),c(V,{class:"bg-brown-lighten-5"},{default:l(()=>[t("tbody",null,[t("tr",null,[st,t("td",ot,r(s.order.user.email),1)]),t("tr",null,[rt,t("td",at,r(s.order.user.name),1)]),t("tr",null,[nt,t("td",lt,r(s.order.user.tel),1)]),t("tr",null,[ct,t("td",dt,r(s.order.user.address),1)]),it])]),_:1}),s.order.is_paid===!1?(_(),m("div",ut,[c(k,{color:"green",onClick:h.payOrder},{default:l(()=>[g("確認付款")]),_:1},8,["onClick"])])):F("",!0)]),_:1})),s.isPay?(_(),m("div",_t,[t("div",ht,[c(E,{size:"150",color:"green"},{default:l(()=>[g("mdi-check-circle-outline")]),_:1}),pt,c(k,{class:"mt-6",color:"green"},{default:l(()=>[c(f,{to:"/customer_orders",class:"text-decoration-none text-white"},{default:l(()=>[g("繼續購物")]),_:1})]),_:1})])])):F("",!0)]),_:1})}const vt=R(G,[["render",mt],["__scopeId","data-v-4d136a48"]]);export{vt as default};