import{_ as U,b8 as I,al as x,m as n,n as p,q as e,w as a,v as l,af as b,ar as y,t as r,as as i,ap as _,X as f,a8 as L,aq as Y,y as M,z as j}from"./index-0e68266d.js";import{V as S}from"./VTable-185d45f2.js";import{V as T}from"./VPagination-61d07a96.js";import{V as O}from"./VDialog-521aa9c7.js";import{b as v,c as k,d as F,e as C,V as g}from"./VTextField-30447f82.js";import{V as w,a as V}from"./VRow-b48a3407.js";import{V as c}from"./VSheet-82b2d424.js";import{V as D}from"./VDivider-ddedf7df.js";import{V as B}from"./VCheckbox-e3384d08.js";import{V as N}from"./forwardRefs-7d2ac543.js";import"./dialog-transition-8013489f.js";import"./VAvatar-01b2c2ea.js";import"./form-b5b6f469.js";/* empty css              */import"./VCheckboxBtn-a9c4275d.js";const P={name:"ORDERLIST",data(){return{dialogEdit:!1,dialogDetails:!1,orders:{},tempOrder:{message:"",user:{}},page:1,createTime:0,totalPage:0}},watch:{page(){let d=this;d.getCoupons(d.page)}},methods:{dayjs:I,getOrders(d){let s=this;s.$store.dispatch("Loading",!0),x.get(`https://vue-course-api.hexschool.io/api/hogankai/admin/orders?page=${d}`).then(h=>{console.log(h.data.orders),s.orders=h.data.orders,s.totalPage=h.data.pagination.total_pages,s.$store.dispatch("Loading",!1)})},editOrder(d){let s=this;s.dialogEdit=!0,s.tempOrder=Object.assign({},d)},cancelModal(){this.dialogEdit=!1,this.dialogDetails=!1},updateOrder(){let d=this;d.$store.dispatch("Loading",!0),x.put(`https://vue-course-api.hexschool.io/api/hogankai/admin/order/${d.tempOrder.id}`,{data:d.tempOrder}).then(s=>{console.log(s.data),s.data.success&&(d.dialogEdit=!1,d.getOrders(d.page),d.$store.dispatch("Loading",!1))})},details(d){let s=this;s.dialogDetails=!0,s.tempOrder=d,console.log(s.tempOrder)}},computed:{cols(){const{sm:d,xs:s}=this.$vuetify.display;return d?[12,12]:s?[12,12]:[8,4]}},created(){this.getOrders()}},u=d=>(M("data-v-50cdb7f8"),d=d(),j(),d),R=u(()=>l("thead",null,[l("tr",null,[l("th",{class:"text-subtitle-1 font-weight-bold"},"購買日期"),l("th",{class:"d-none d-md-table-cell text-subtitle-1 font-weight-bold"},"Email"),l("th",{class:"text-subtitle-1 font-weight-bold"},"訂單編號"),l("th",{class:"d-none d-sm-table-cell text-subtitle-1 font-weight-bold"},"應付金額"),l("th",{class:"d-none d-sm-table-cell text-subtitle-1 font-weight-bold"},"是否付款"),l("th",{class:"text-subtitle-1 font-weight-bold"},"編輯")])],-1)),q={class:"text-8F8681"},z={class:"d-none d-md-table-cell text-8F8681"},A={class:"text-8F8681"},W={class:"d-none d-sm-table-cell text-8F8681"},X={class:"d-none d-sm-table-cell bgF5F"},G={key:0,class:"text-success"},H={key:1,class:"text-red"},J={class:"bgF5F"},K={class:"text-center"},Q={class:"ml-6"},Z={class:"text-green"},$=u(()=>l("h4",null,"訂購人",-1)),ee={class:"ml-4 my-2 text-8F8681"},te=u(()=>l("h4",null,"電話",-1)),le={class:"ml-4 my-2 text-8F8681"},se=u(()=>l("h4",null,"Email",-1)),ae={class:"ml-4 my-2 text-8F8681"},oe=u(()=>l("h4",null,"地址",-1)),de={class:"ml-4 my-2 text-8F8681"},re=u(()=>l("h4",null,"特殊需求",-1)),ie=u(()=>l("h4",null,"付款狀態",-1)),ne={class:"ml-4"},ue=u(()=>l("h4",null,"電話",-1)),ce=u(()=>l("h4",null,"Email",-1)),me=u(()=>l("h4",null,"地址",-1)),pe=u(()=>l("h4",null,"特殊需求",-1)),_e=u(()=>l("h4",null,"付款狀態",-1));function fe(d,s,h,he,o,m){return n(),p(b,null,[e(S,{class:"table mt-4 bg-brown-lighten-5"},{default:a(()=>[R,l("tbody",null,[(n(!0),p(b,null,y(o.orders,t=>(n(),p("tr",{key:t.id},[l("td",q,i(d.$dayjs(t.create_at*1e3).format("YYYY-MM-DD")),1),l("td",z,i(t.user.email),1),l("td",A,[e(f,{variant:"plain",color:"blue",onClick:E=>m.details(t)},{default:a(()=>[r(i(t.id),1)]),_:2},1032,["onClick"])]),l("td",W,i(d.$filter.currency(t.total)),1),l("td",X,[t.is_paid?(n(),p("span",G,"已付款")):(n(),p("span",H,"未付款"))]),l("td",J,[e(f,{variant:"outlined",color:"blue",onClick:E=>m.editOrder(t)},{default:a(()=>[r("編輯")]),_:2},1032,["onClick"])])]))),128))])]),_:1}),l("div",K,[e(T,{class:"my-4",modelValue:o.page,"onUpdate:modelValue":s[0]||(s[0]=t=>o.page=t),length:o.totalPage,"total-visible":5},null,8,["modelValue","length"])]),e(O,{modelValue:o.dialogDetails,"onUpdate:modelValue":s[1]||(s[1]=t=>o.dialogDetails=t)},{default:a(()=>[e(v,{class:"mx-auto w-75"},{default:a(()=>[e(k,{class:"bg-a67f78 text-white"},{default:a(()=>[r("修改訂單資訊")]),_:1}),e(F,null,{default:a(()=>[e(w,null,{default:a(()=>[e(V,{cols:m.cols[0]},{default:a(()=>[e(c,{class:"text-8F8681 my-2"},{default:a(()=>[r(" 訂單建立日期："+i(m.dayjs(o.tempOrder.create_at*1e3).format("YYYY/MM/DD")),1)]),_:1}),(n(!0),p(b,null,y(o.tempOrder.products,t=>(n(),_(w,{key:t.id},{default:a(()=>[e(V,{cols:"4"},{default:a(()=>[e(N,{src:t.product.imageUrl,"min-width":"50","max-width":"100"},null,8,["src"])]),_:2},1024),e(V,{"align-self":"center"},{default:a(()=>[e(c,{class:"text-8F8681"},{default:a(()=>[r(i(t.product.title),1)]),_:2},1024),e(c,{class:"text-grey text-body-2"},{default:a(()=>[r("( 編號："+i(t.product.id)+" )",1)]),_:2},1024),e(c,{class:"my-3 text-8F8681"},{default:a(()=>[r(i(t.qty)+" / "+i(t.product.unit)+" ",1),l("span",Q,i(d.$filter.currency(t.total)),1)]),_:2},1024),t.coupon?(n(),_(c,{key:0,class:"ml-4 my-2 text-8F8681 text-body-2"},{default:a(()=>[r(" 使用 "),e(L,{color:"green",class:"mb-1"},{default:a(()=>[r("mdi-ticket-percent")]),_:1}),l("span",Z,i(t.coupon.title),1),r(" 優惠券 ")]),_:2},1024)):Y("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["cols"]),e(V,{cols:m.cols[1]},{default:a(()=>[$,l("p",ee,i(o.tempOrder.user.name),1),te,l("p",le,i(o.tempOrder.user.tel),1),se,l("p",ae,i(o.tempOrder.user.email),1),oe,l("p",de,i(o.tempOrder.user.address),1),re,o.tempOrder.message==null||o.tempOrder.message==""?(n(),_(c,{key:0,class:"border border-md rounded-lg my-2 pa-2 text-8F8681",height:"60"},{default:a(()=>[r("無特殊需求 ")]),_:1})):(n(),_(c,{key:1,class:"border border-md rounded-lg my-2 pa-2 text-8F8681",height:"60"},{default:a(()=>[r(i(o.tempOrder.message),1)]),_:1})),ie,o.tempOrder.is_paid?(n(),_(c,{key:2,class:"text-green ml-4 my-2"},{default:a(()=>[r(" 已付款 "),l("span",ne,"總計 ："+i(d.$filter.currency(o.tempOrder.total)),1)]),_:1})):(n(),_(c,{key:3,class:"text-red ml-4 my-2"},{default:a(()=>[r("尚未付款")]),_:1}))]),_:1},8,["cols"])]),_:1})]),_:1}),e(D),e(C,{class:"d-flex justify-end"},{default:a(()=>[e(f,{class:"ma-4",variant:"outlined",onClick:m.cancelModal},{default:a(()=>[r("關閉")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(O,{modelValue:o.dialogEdit,"onUpdate:modelValue":s[7]||(s[7]=t=>o.dialogEdit=t)},{default:a(()=>[e(v,{class:"mx-auto RWDcard"},{default:a(()=>[e(k,{class:"bg-a67f78 text-white"},{default:a(()=>[r("修改訂單資訊")]),_:1}),e(F,null,{default:a(()=>[ue,e(g,{label:"請輸入手機號碼",variant:"solo-filled",class:"mt-2",modelValue:o.tempOrder.user.tel,"onUpdate:modelValue":s[2]||(s[2]=t=>o.tempOrder.user.tel=t)},null,8,["modelValue"]),ce,e(g,{label:"請輸入Email",variant:"solo-filled",class:"mt-2",modelValue:o.tempOrder.user.email,"onUpdate:modelValue":s[3]||(s[3]=t=>o.tempOrder.user.email=t)},null,8,["modelValue"]),me,e(g,{label:"請輸入地址",variant:"solo-filled",class:"mt-2",modelValue:o.tempOrder.user.address,"onUpdate:modelValue":s[4]||(s[4]=t=>o.tempOrder.user.address=t)},null,8,["modelValue"]),pe,e(g,{label:"請輸入顧客需求",variant:"solo-filled",class:"mt-2",modelValue:o.tempOrder.message,"onUpdate:modelValue":s[5]||(s[5]=t=>o.tempOrder.message=t)},null,8,["modelValue"]),_e,e(B,{label:"是否付款",modelValue:o.tempOrder.is_paid,"onUpdate:modelValue":s[6]||(s[6]=t=>o.tempOrder.is_paid=t),color:"green"},null,8,["modelValue"])]),_:1}),e(D),e(C,{class:"d-flex justify-end"},{default:a(()=>[e(f,{class:"ma-4",variant:"outlined",onClick:m.cancelModal},{default:a(()=>[r("取消")]),_:1},8,["onClick"]),e(f,{class:"ma-4",variant:"outlined",onClick:m.updateOrder},{default:a(()=>[r("確定")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Le=U(P,[["render",fe],["__scopeId","data-v-50cdb7f8"]]);export{Le as default};