import{j as e}from"./index-1d78c4ac.js";import{B as p}from"./BlankCard-65d5aa30.js";import{G as l}from"./Grid-ba112631.js";import{C as d}from"./CardContent-97c31a3d.js";import{B as t,T as i}from"./Box-3b2e6d90.js";import{C as x}from"./Chip-ef3907c5.js";import{D as g}from"./Divider-32914f08.js";import{S as o}from"./Stack-74791772.js";import{B as m}from"./Button-6de5bece.js";import{L as r}from"./Link-5958468e.js";import{T as n}from"./Tooltip-58d28098.js";import{C as j}from"./Container-9c6aa70c.js";const a="/assets/icon-check-56491731.svg",c="/assets/icon-close-131afdae.svg",f=[{id:1,type:"Single Use",isPopular:!1,typeText:"Use for single end product which end users can’t be charged for.",price:"49",fullSourceCode:!0,isDoc:!0,isSass:!1,isSingleProject:!0,isSupport:!0,isUpdate:!0},{id:2,type:"Multiple Use",isPopular:!1,typeText:"Use for unlimited end products end users can’t be charged for.",price:"89",fullSourceCode:!0,isDoc:!0,isSass:!1,isSingleProject:!1,isSupport:!0,isUpdate:!0},{id:3,type:"Extended Use",isPopular:!0,typeText:"Use for single end product which end users can be charged for.",price:"299",fullSourceCode:!0,isDoc:!0,isSass:!0,isSingleProject:!0,isSupport:!0,isUpdate:!0},{id:4,type:"Unlimited Use",isPopular:!1,typeText:"Use in unlimited end products end users can be charged for.",price:"499",fullSourceCode:!0,isDoc:!0,isSass:!0,isSingleProject:!1,isSupport:!0,isUpdate:!0}],u=()=>e.jsx(e.Fragment,{children:e.jsx(l,{container:!0,spacing:3,children:f.map((s,h)=>e.jsx(l,{item:!0,xs:12,lg:3,sm:6,children:e.jsx(p,{children:e.jsxs(d,{sx:{p:"32px"},children:[e.jsxs(t,{display:"flex",alignItems:"center",mb:2,children:[e.jsx(i,{variant:"h4",fontSize:"20px",fontWeight:600,children:s.type}),s.isPopular?e.jsx(x,{label:"Popular",size:"small",sx:{ml:"6px",borderRadius:"8px",color:"primary.main",backgroundColor:"rgba(93, 135, 255, 0.15)"}}):null]}),e.jsx(i,{fontSize:"13px",mb:4,children:s.typeText}),e.jsx(g,{}),e.jsxs(o,{mt:4,direction:"row",gap:"8px",alignItems:"end",children:[e.jsxs(i,{variant:"h4",fontSize:"40px",fontWeight:700,children:["$",s.price]}),e.jsx(i,{variant:"body2",fontSize:"14px",children:"/ one time pay"})]}),e.jsxs(o,{my:4,gap:"12px",children:[e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.fullSourceCode?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:c,alt:"circle",width:20,height:20}),e.jsx(i,{fontSize:"14px",fontWeight:500,children:"Full source code"})]}),e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.isDoc?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:c,alt:"circle",width:20,height:20}),e.jsx(i,{fontSize:"14px",fontWeight:500,children:"Documentation"})]}),e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.isSass?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:c,alt:"circle",width:20,height:20}),e.jsx(i,{fontSize:"14px",sx:{color:`${s.isSass?"text.primary":"#99AABA"}`,fontWeight:`${s.isSass?"500":"400"}`},children:"Use in SaaS app"})]}),e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.isSingleProject?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:a,alt:"circle",width:20,height:20}),e.jsxs(i,{fontSize:"14px",whiteSpace:"nowrap",gap:"2px",fontWeight:500,display:"flex",children:[e.jsxs(t,{fontWeight:700,component:"span",whiteSpace:"nowrap",children:[" ",s.isSingleProject?"One":"Unlimited"," "]}),"Project"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.isSupport?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:c,alt:"circle",width:20,height:20}),e.jsxs(i,{fontSize:"14px",whiteSpace:"nowrap",gap:"2px",fontWeight:500,display:"flex",children:[e.jsx(t,{fontWeight:700,component:"span",whiteSpace:"nowrap",children:"One Year"})," ","Technical Support"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",gap:"8px",children:[s.isUpdate?e.jsx("img",{src:a,alt:"circle",width:20,height:20}):e.jsx("img",{src:c,alt:"circle",width:20,height:20}),e.jsxs(i,{fontSize:"14px",whiteSpace:"nowrap",gap:"2px",fontWeight:500,display:"flex",children:[e.jsx(t,{fontWeight:700,component:"span",whiteSpace:"nowrap",children:"One Year"})," ","Free Updates"]})]})]}),e.jsx(m,{fullWidth:!0,variant:"contained",size:"large",children:"Purchase Now"})]})})},h))})}),y="/assets/icon-visa-a0f11708.svg",S="/assets/icon-mastercard-413328bd.svg",w="/assets/icon-american-express-5798bfcf.svg",v="/assets/icon-discover-5626d5c7.svg",P="/assets/icon-paypal-5b372ac3.svg",C="/assets/icon-masetro-11039279.svg",I="/assets/icon-jcb-42798b6d.svg",b="/assets/icon-diners-320e94c2.svg",U=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{textAlign:"center",mt:6,variant:"body1",children:"Secured payment with PayPal & Razorpay"}),e.jsxs(t,{display:"flex",useflexgap:"true",flexWrap:"wrap",alignItems:"center",justifyContent:"center",mt:4,gap:"56px",children:[e.jsx(r,{href:"#",children:e.jsx(n,{title:"Visa",children:e.jsx("img",{src:y,width:60,height:20,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"Mastercard",children:e.jsx("img",{src:S,width:45,height:25,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"American express",children:e.jsx("img",{src:w,width:80,height:34,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"Discover",children:e.jsx("img",{src:v,width:95,height:16,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"Paypal",children:e.jsx("img",{src:P,width:90,height:24,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"Maestro",children:e.jsx("img",{src:C,width:45,height:28,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"JCB",children:e.jsx("img",{src:I,width:31,height:24,alt:"payment"})})}),e.jsx(r,{href:"#",children:e.jsx(n,{title:"Diners",children:e.jsx("img",{src:b,width:92,height:24,alt:"payment"})})})]})]}),R=()=>e.jsx(e.Fragment,{children:e.jsx(t,{sx:{py:{xs:5,lg:11}},children:e.jsxs(j,{maxWidth:"lg",children:[e.jsx(l,{container:!0,spacing:3,alignItems:"center",justifyContent:"center",children:e.jsx(l,{item:!0,xs:12,lg:7,children:e.jsx(i,{textAlign:"center",variant:"h4",lineHeight:1.4,mb:6,fontWeight:700,sx:{fontSize:{lg:"40px",xs:"35px"}},children:"111,476+ Trusted developers & many tech giants as well"})})}),e.jsx(u,{}),e.jsx(U,{})]})})});export{R as P};
