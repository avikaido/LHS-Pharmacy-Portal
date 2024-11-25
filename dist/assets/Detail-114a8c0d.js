import{r as o,q as u,j as i,L as j}from"./index-1d78c4ac.js";import{B as g}from"./Breadcrumb-4b5ba697.js";import{P as T}from"./PageContainer-51f17055.js";import{I as C,a as I}from"./index-6cbb6c02.js";import{L as D}from"./Logo-1e3e3141.js";import{i as E,f as p}from"./index-0f1c3eaf.js";import{p as f}from"./index-0c50ee4d.js";import{S as P}from"./Stack-74791772.js";import{B as n,T as e}from"./Box-3b2e6d90.js";import{C as l}from"./Chip-ef3907c5.js";import{D as B}from"./Divider-32914f08.js";import{G as x,P as m}from"./Grid-ba112631.js";import{T as S}from"./TableContainer-e51d3cfd.js";import{T as z,a as F,b as v,c as r,d as M}from"./TableRow-47830db4.js";import{B as b}from"./Button-6de5bece.js";import{B as L}from"./BlankCard-65d5aa30.js";import{C as W}from"./CardContent-97c31a3d.js";import"./index.esm-4ca6571d.js";import"./Link-5958468e.js";import"./index-5a0c5ef2.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./dividerClasses-40064371.js";import"./Card-ed0a9074.js";const w=()=>{const{invoices:a}=o.useContext(C),[t,h]=o.useState(null);o.useEffect(()=>{a.length>0&&h(a[0])},[a]);const d=u().pathname.split("/").pop();if(o.useEffect(()=>{if(d){const s=a.find(c=>c.billFrom===d);s&&h(s)}},[d,a]),!t)return i.jsx("div",{children:"Loading..."});const y=t.orderDate?E(f(t.orderDate))?p(f(t.orderDate),"EEEE, MMMM dd, yyyy"):"Invalid Date":p(new Date,"EEEE, MMMM dd, yyyy");return i.jsxs(i.Fragment,{children:[i.jsxs(P,{direction:{xs:"column",sm:"row"},alignItems:"center",justifyContent:"space-between",mb:2,children:[i.jsxs(n,{sx:{textAlign:{xs:"center",sm:"left"}},children:[i.jsxs(e,{variant:"h5",children:["# ",t.id]}),i.jsx(n,{mt:1,children:i.jsx(l,{size:"small",color:"secondary",variant:"outlined",label:y})})]}),i.jsx(D,{}),i.jsx(n,{textAlign:"right",children:t.status==="Shipped"?i.jsx(l,{size:"small",color:"primary",label:t.status}):t.status==="Delivered"?i.jsx(l,{size:"small",color:"success",label:t.status}):t.status==="Pending"?i.jsx(l,{size:"small",color:"warning",label:t.status}):""})]}),i.jsx(B,{}),i.jsxs(x,{container:!0,spacing:3,mt:2,mb:4,children:[i.jsx(x,{item:!0,xs:12,sm:6,children:i.jsx(m,{variant:"outlined",children:i.jsxs(n,{p:3,display:"flex",flexDirection:"column",gap:"4px",children:[i.jsx(e,{variant:"h6",mb:2,children:"From :"}),i.jsx(e,{variant:"body1",children:t.billFrom}),i.jsx(e,{variant:"body1",children:t.billFromEmail}),i.jsx(e,{variant:"body1",children:t.billFromAddress}),i.jsx(e,{variant:"body1",children:t.billFromPhone})]})})}),i.jsx(x,{item:!0,xs:12,sm:6,children:i.jsx(m,{variant:"outlined",children:i.jsxs(n,{p:3,display:"flex",flexDirection:"column",gap:"4px",children:[i.jsx(e,{variant:"h6",mb:2,children:"To :"}),i.jsx(e,{variant:"body1",children:t.billTo}),i.jsx(e,{variant:"body1",children:t.billToEmail}),i.jsx(e,{variant:"body1",children:t.billToAddress}),i.jsx(e,{variant:"body1",children:t.billToPhone})]})})})]}),i.jsx(m,{variant:"outlined",children:i.jsx(S,{children:i.jsxs(z,{children:[i.jsx(F,{children:i.jsxs(v,{children:[i.jsx(r,{children:i.jsx(e,{variant:"h6",fontSize:"14px",children:"Item Name"})}),i.jsx(r,{children:i.jsx(e,{variant:"h6",fontSize:"14px",children:"Unit Price"})}),i.jsx(r,{children:i.jsx(e,{variant:"h6",fontSize:"14px",children:"Unit"})}),i.jsx(r,{align:"right",children:i.jsx(e,{variant:"h6",fontSize:"14px",children:"Total Cost"})})]})}),i.jsx(M,{children:t.orders.map((s,c)=>i.jsxs(v,{children:[i.jsx(r,{children:i.jsx(e,{variant:"body1",children:s.itemName})}),i.jsx(r,{children:i.jsx(e,{variant:"body1",children:s.unitPrice})}),i.jsx(r,{children:i.jsx(e,{variant:"body1",children:s.units})}),i.jsx(r,{align:"right",children:i.jsx(e,{variant:"body1",children:s.unitTotalPrice})})]},c))})]})})}),i.jsxs(n,{p:3,bgcolor:"primary.light",mt:3,children:[i.jsxs(n,{display:"flex",justifyContent:"end",gap:3,mb:3,children:[i.jsx(e,{variant:"body1",fontWeight:600,children:"Sub Total:"}),i.jsx(e,{variant:"body1",fontWeight:600,children:t.totalCost})]}),i.jsxs(n,{display:"flex",justifyContent:"end",gap:3,mb:3,children:[i.jsx(e,{variant:"body1",fontWeight:600,children:"Vat:"}),i.jsx(e,{variant:"body1",fontWeight:600,children:t.vat})]}),i.jsxs(n,{display:"flex",justifyContent:"end",gap:3,children:[i.jsx(e,{variant:"body1",fontWeight:600,children:"Grand Total:"}),i.jsx(e,{variant:"body1",fontWeight:600,children:t.grandTotal})]})]}),i.jsxs(n,{display:"flex",alignItems:"center",gap:1,mt:3,justifyContent:"end",children:[i.jsx(b,{variant:"contained",color:"secondary",component:j,to:`/apps/invoice/edit/${t.billFrom}`,children:"Edit Invoice"}),i.jsx(b,{variant:"contained",color:"primary",component:j,to:"/apps/invoice/list",children:"Back to Invoice List"})]})]})},k=[{to:"/",title:"Home"},{title:"Invoice Details"}],di=()=>i.jsx(I,{children:i.jsxs(T,{title:"Invoice Detail",description:"this is Invoice Detail",children:[i.jsx(g,{title:"Invoice Detail",items:k}),i.jsx(L,{children:i.jsx(W,{children:i.jsx(w,{})})})]})});export{di as default};
