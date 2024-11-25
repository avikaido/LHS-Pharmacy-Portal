import{e as P,f as w,j as e,aV as B,L as k,i as F,h as D,r as b,R as v,l as T}from"./index-1d78c4ac.js";import{B as R}from"./Breadcrumb-4b5ba697.js";import{P as z}from"./PageContainer-51f17055.js";import{ao as G,m as I,X as W,aC as A,aD as M}from"./index.esm-4ca6571d.js";import{s as E}from"./empty-shopping-cart-84e91aad.js";import{B as i,T as t}from"./Box-3b2e6d90.js";import{T as $}from"./TableContainer-e51d3cfd.js";import{T as H,a as L,b as C,c as p,d as V}from"./TableRow-47830db4.js";import{S as o}from"./Stack-74791772.js";import{A as q}from"./Avatar-49c7f2db.js";import{I as O}from"./IconButton-6eb83b27.js";import{B as _}from"./ButtonGroup-bb426644.js";import{B as c}from"./Button-6de5bece.js";import{S as X,a as Y,b as J}from"./Stepper-d0461104.js";import{C as S}from"./ChildCard-8626bfcd.js";import{G as h,P as u}from"./Grid-ba112631.js";import{R as f}from"./Radio-aefd0abb.js";import"./Link-5958468e.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./Card-ed0a9074.js";import"./CardHeader-4375bfdf.js";import"./Divider-32914f08.js";import"./dividerClasses-40064371.js";import"./CardContent-97c31a3d.js";import"./SwitchBase-a9247a40.js";import"./useFormControl-9666228d.js";import"./useControlled-05793c79.js";import"./createChainedFunction-0bab83cf.js";const K=()=>{const a=P(),n=w(s=>s.ecommerceReducer.cart);console.log(n);const l=s=>{a(F(s))},d=s=>{a(D(s))};return e.jsx(i,{children:n.length>0?e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx($,{sx:{minWidth:{sm:"350px"}},children:e.jsxs(H,{children:[e.jsx(L,{children:e.jsxs(C,{children:[e.jsx(p,{children:"Product"}),e.jsx(p,{align:"left",children:"Quantity"}),e.jsx(p,{align:"right",children:"Price"})]})}),e.jsx(V,{children:n.map(s=>e.jsxs(C,{children:[e.jsx(p,{children:e.jsxs(o,{direction:"row",alignItems:"center",gap:2,children:[e.jsx(q,{src:s.photo,alt:s.photo,sx:{borderRadius:"10px",height:"80px",width:"90px"}}),e.jsxs(i,{children:[e.jsx(t,{variant:"h6",children:s.title})," ",e.jsx(t,{color:"textSecondary",variant:"body1",children:s.category}),e.jsx(O,{size:"small",color:"error",onClick:()=>a(B(s.id)),children:e.jsx(G,{size:"1rem"})})]})]})}),e.jsx(p,{children:e.jsxs(_,{size:"small",color:"success","aria-label":"small button group",children:[e.jsx(c,{onClick:()=>d(s.id),disabled:s.qty<2,children:e.jsx(I,{stroke:1.5,size:"0.8rem"})}),e.jsx(c,{children:s.qty}),e.jsx(c,{onClick:()=>l(s.id),children:e.jsx(W,{stroke:1.5,size:"0.8rem"})})]})}),e.jsx(p,{align:"right",children:e.jsxs(t,{variant:"h6",children:["$",s.price*s.qty]})})]},s.id))})]})})})}):e.jsxs(i,{textAlign:"center",mb:3,children:[e.jsx("img",{src:E,alt:"cart",width:"200px"}),e.jsx(t,{variant:"h5",mb:2,children:"Cart is Empty"}),e.jsx(c,{component:k,to:"/apps/ecommerce/shop",variant:"contained",children:"Go back to Shopping"})]})})},N=({children:a,steps:n,activeStep:l,handleReset:d,finalStep:s})=>e.jsxs(i,{sx:{width:"100%"},children:[e.jsx(X,{activeStep:l,alternativeLabel:!0,children:n.map(x=>{const r={},j={};return e.jsx(Y,{...r,children:e.jsx(J,{...j,children:x})},x)})}),l===n.length?e.jsxs(b.Fragment,{children:[e.jsx(i,{children:s}),e.jsxs(o,{direction:{sm:"column",lg:"row"},sx:{pt:2},children:[e.jsx(c,{variant:"contained",color:"success",component:k,to:"/apps/ecommerce/shop",children:"Continue Shopping"}),e.jsx(i,{sx:{flex:"1 1 auto",mt:{xs:2,sm:0}}}),e.jsxs(o,{direction:{sm:"column",lg:"row"},spacing:2,children:[e.jsx(c,{variant:"contained",children:"Download Receipt"}),e.jsx(c,{onClick:d,children:"Reset"})]})]})]}):e.jsx(b.Fragment,{children:e.jsx(i,{sx:{mt:2,mb:1},children:a})})]}),y=({total:a,Discount:n})=>e.jsx(e.Fragment,{children:e.jsx(i,{my:3,children:e.jsx(S,{children:e.jsxs(i,{p:2,children:[e.jsx(t,{variant:"h5",fontWeight:600,mb:3,children:"Order Summary"}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(t,{variant:"h6",fontWeight:400,children:"Sub Total"}),e.jsxs(t,{variant:"h6",children:["$",a]})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(t,{variant:"h6",fontWeight:400,children:"Discount 5%"}),e.jsxs(t,{variant:"h6",color:"error",children:["-$",n]})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(t,{variant:"h6",fontWeight:400,children:"Shipping"}),e.jsx(t,{variant:"h6",children:"Free"})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:1,children:[e.jsx(t,{variant:"h6",children:"Total"}),e.jsxs(t,{variant:"h5",color:"success",children:["$",a-n]})]})]})})})}),Q=[{id:1,name:"Johnathan Doe",address:"E601 Vrundavan Heights, godrej garden city - 382481",mobile:"9999501050"},{id:2,name:"ParleG Doe",address:"D201 Galexy Heights, godrej garden city - 382481",mobile:"9999501050"},{id:3,name:"Guddu Bhaiya",address:"Mumbai khao gali, Behind shukan, godrej garden city - 382481",mobile:"9999501050"}],U=({nexStep:a})=>e.jsx(e.Fragment,{children:e.jsx(h,{container:!0,spacing:3,mb:3,mt:1,children:Q.map(n=>e.jsx(h,{item:!0,lg:4,xs:12,children:e.jsxs(u,{variant:"outlined",sx:{p:3},children:[e.jsx(t,{variant:"h6",mb:2,children:n.name}),e.jsx(t,{variant:"body2",gutterBottom:!0,children:n.address}),e.jsxs(t,{variant:"h6",my:3,alignItems:"center",display:"flex",gap:1,children:[e.jsx(A,{})," ",n.mobile]}),e.jsx(c,{variant:"outlined",onClick:a,children:"Deliver To this address"})]})},n.id))})}),Z="/assets/paypal-e77d4954.svg",ee="/assets/payment-3c13ca70.svg",re="/assets/mastercard-31fadb4c.svg",se=[{id:1,title:"Free delivery",description:"Delivered on Firday, May 10"},{id:2,title:"Fast delivery ($2,00)",description:"Delivered on Wednesday, May 8"}],te=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:Z},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:re},{value:"cash",title:"Cash on Delivery",description:"Pay with cash when your order is delivered.",icons:""}],ie=()=>{const[a,n]=v.useState("Free delivery"),l=r=>{n(r.target.value)},[d,s]=v.useState("paypal"),x=r=>{s(r.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"outlined",sx:{p:3,mt:4},children:[e.jsx(t,{variant:"h6",children:"Delivery Option"}),e.jsx(h,{container:!0,spacing:3,mt:1,children:se.map(r=>e.jsx(h,{item:!0,lg:6,xs:12,children:e.jsx(u,{variant:"outlined",sx:{p:2,borderColor:a===r.title?"primary.main":"",backgroundColor:a===r.title?"primary.light":""},children:e.jsxs(o,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(f,{checked:a===r.title,onChange:l,value:r.title,name:"radio-buttons",inputProps:{"aria-label":r.title}}),e.jsxs(i,{children:[e.jsx(t,{variant:"h6",children:r.title}),e.jsx(t,{variant:"subtitle2",children:r.description})]})]})})},r.id))})]}),e.jsxs(u,{variant:"outlined",sx:{p:3,mt:4},children:[e.jsx(t,{variant:"h6",children:"Payment Option"}),e.jsxs(h,{container:!0,spacing:3,alignItems:"center",children:[e.jsx(h,{lg:8,xs:12,item:!0,children:e.jsx(h,{container:!0,spacing:3,mt:2,children:te.map(r=>e.jsx(h,{item:!0,lg:12,xs:12,children:e.jsx(u,{variant:"outlined",sx:{p:2,borderColor:d===r.value?"primary.main":"",backgroundColor:d===r.value?"primary.light":""},children:e.jsxs(o,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(f,{checked:d===r.value,onChange:x,value:r.value,name:"radio-buttons",inputProps:{"aria-label":r.title}}),e.jsxs(i,{children:[e.jsx(t,{variant:"h6",children:r.title}),e.jsx(t,{variant:"subtitle2",children:r.description})]}),e.jsx(i,{ml:"auto",children:r.icons?e.jsx("img",{src:r.icons,alt:"payment"}):""})]})})},r.value))})}),e.jsx(h,{lg:4,xs:12,item:!0,children:e.jsx(i,{sx:{width:{xs:"200px",sm:"auto"}},children:e.jsx("img",{src:ee,alt:"payment"})})})]})]})]})},ne="/assets/payment-complete-61546c47.gif",ae=()=>e.jsx(e.Fragment,{children:e.jsx(i,{my:3,children:e.jsxs(i,{textAlign:"center",p:3,children:[e.jsx(t,{variant:"h5",children:"Thank you for your purchase!"}),e.jsx(t,{variant:"h6",mt:1,mb:4,color:"primary",children:"Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d"}),e.jsx(i,{children:e.jsx("img",{src:ne,alt:"payment"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(t,{variant:"body2",children:["We will send you a notification ",e.jsx("br",{}),"within 2 days when it ships."]})]})})}),ce=()=>{const a=w(m=>m.ecommerceReducer.cart),n=["Cart","Billing & address","Payment"],[l,d]=v.useState(0),s=()=>{d(m=>m+1)},x=()=>{d(m=>m-1)},r=()=>{d(0)},j=T.sum(a.map(m=>m.price*m.qty)),g=Math.round(j*(5/100));return e.jsx(i,{children:e.jsx(N,{steps:n,handleReset:r,activeStep:l,finalStep:e.jsx(ae,{}),children:l===0?e.jsxs(e.Fragment,{children:[e.jsx(i,{my:3,children:e.jsx(K,{})}),a.length>0?e.jsxs(e.Fragment,{children:[e.jsx(y,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsx(c,{color:"secondary",variant:"contained",disabled:l===0,onClick:x,children:"Back"}),e.jsx(c,{variant:"contained",onClick:s,children:"Checkout"})]})]}):""]}):l===1?e.jsxs(e.Fragment,{children:[e.jsx(U,{nexStep:s}),e.jsx(y,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsx(c,{color:"inherit",disabled:l!==1,onClick:x,children:"Back"}),e.jsx(c,{color:"inherit",variant:"outlined",children:"Select Address to go next"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{}),e.jsx(y,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsxs(c,{color:"inherit",disabled:l===0,onClick:x,children:[e.jsx(M,{})," Back"]}),e.jsx(c,{onClick:s,size:"large",variant:"contained",children:"Complete an Order"})]})]})})})},le=[{to:"/",title:"Home"},{title:"Checkout"}],He=()=>e.jsxs(z,{title:"Checkout",description:"this is Shop List page",children:[e.jsx(R,{title:"Checkout",items:le}),e.jsx(S,{children:e.jsx(i,{sx:{p:{xs:"0",sm:"24px"}},flexGrow:1,children:e.jsx(ce,{})})})]});export{He as default};