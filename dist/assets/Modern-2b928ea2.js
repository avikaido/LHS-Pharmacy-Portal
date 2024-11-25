import{R as C,j as e,u as f,D as k,E as A,G as T,H as E,L as B,r as y}from"./index-1d78c4ac.js";import{T as R}from"./TopCards-498c26aa.js";import{_ as b}from"./react-apexcharts.min-1cd6e887.js";import{a3 as F,B as I,af as z,_ as D}from"./index.esm-4ca6571d.js";import{D as u}from"./DashboardCard-71df2df7.js";import{C as W}from"./CustomSelect-caffa199.js";import{u as j,G as a,P as v}from"./Grid-ba112631.js";import{M as p}from"./MenuItem-39bf6f11.js";import{B as n,T as s}from"./Box-3b2e6d90.js";import{S as c}from"./Stack-74791772.js";import{A as h}from"./Avatar-49c7f2db.js";import{B as L}from"./Button-6de5bece.js";import{Y as H,C as $,P as J}from"./Projects-3d605451.js";import{F as O}from"./Fab-f5ac0b6f.js";import{D as G}from"./DashboardWidgetCard-16998795.js";import{A as _}from"./AvatarGroup-707c9b19.js";import{C as V}from"./CardContent-97c31a3d.js";import{C as M}from"./Chip-ef3907c5.js";import{L as Y}from"./LinearProgress-7d076a9c.js";import{W as U}from"./WeeklyStats-665de900.js";import{T as K}from"./TableContainer-e51d3cfd.js";import{T as N,a as X,b as w,c as m,d as q}from"./TableRow-47830db4.js";import{S as Q}from"./Snackbar-2df39c3d.js";import{A as Z}from"./Alert-eeacdfc1.js";import{A as ee}from"./AlertTitle-58348274.js";import"./icon-speech-bubble-fd1b3029.js";import"./Card-ed0a9074.js";import"./Select-07709760.js";import"./Popover-e3ff4288.js";import"./Modal-5026ae4f.js";import"./useId-521a9597.js";import"./ownerWindow-f1e1d6ee.js";import"./createChainedFunction-0bab83cf.js";import"./utils-f13413e5.js";import"./Portal-8f313b54.js";import"./debounce-517eeb3c.js";import"./Grow-cf41a8df.js";import"./List-eaf26c6f.js";import"./utils-5ebfb48b.js";import"./useControlled-05793c79.js";import"./formControlState-a1fb9590.js";import"./useFormControl-9666228d.js";import"./dividerClasses-40064371.js";import"./listItemTextClasses-76a31095.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./Close-feb8b2ff.js";import"./IconButton-6eb83b27.js";const te=()=>{const[i,l]=C.useState("1"),o=P=>{l(P.target.value)},t=j(),r=t.palette.primary.main,x=t.palette.secondary.main,d={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!0},height:370,stacked:!0},colors:[r,x],plotOptions:{bar:{horizontal:!1,barHeight:"60%",columnWidth:"20%",borderRadius:[6],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",strokeDashArray:3,xaxis:{lines:{show:!1}}},yaxis:{min:-5,max:5,tickAmount:4},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08"],axisBorder:{show:!1}},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1}},g=[{name:"Eanings this month",data:[1.5,2.7,2.2,3.6,1.5,1]},{name:"Expense this month",data:[-1.8,-1.1,-2.5,-1.5,-.6,-1.8]}];return e.jsx(u,{title:"Revenue Updates",subtitle:"Overview of Profit",action:e.jsxs(W,{labelId:"month-dd",id:"month-dd",value:i,size:"small",onChange:o,children:[e.jsx(p,{value:1,children:"March 2024"}),e.jsx(p,{value:2,children:"Feb 2024"}),e.jsx(p,{value:3,children:"Jan 2024"})]}),children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:8,children:e.jsx(n,{className:"rounded-bars",children:e.jsx(b,{options:d,series:g,type:"bar",height:"370px"})})}),e.jsxs(a,{item:!0,xs:12,sm:4,children:[e.jsx(c,{spacing:3,mt:3,children:e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{width:40,height:40,bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(s,{color:"primary",variant:"h6",display:"flex",children:e.jsx(F,{width:21})})}),e.jsxs(n,{children:[e.jsx(s,{variant:"h3",fontWeight:"700",children:"$63,489.50"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"Total Earnings"})]})]})}),e.jsxs(c,{spacing:3,my:5,children:[e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{sx:{width:9,mt:1,height:9,bgcolor:r,svg:{display:"none"}}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"Earnings this month"}),e.jsx(s,{variant:"h5",children:"$48,820"})]})]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{sx:{width:9,mt:1,height:9,bgcolor:x,svg:{display:"none"}}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"Expense this month"}),e.jsx(s,{variant:"h5",children:"$26,498"})]})]})]}),e.jsx(L,{color:"primary",variant:"contained",fullWidth:!0,children:"View Full Report"})]})]})})},re=()=>{const i=j(),l=i.palette.secondary.main,o=i.palette.secondary.light,t=i.palette.error.light,r={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:60,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:2},fill:{colors:[o],type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:i.palette.mode==="dark"?"dark":"light",x:{show:!1}}},x=[{name:"",color:l,data:[25,66,20,40,12,58,20]}];return e.jsx(u,{title:"Monthly Earnings",action:e.jsx(O,{color:"secondary",size:"medium",children:e.jsx(I,{width:24})}),footer:e.jsx(b,{options:r,series:x,type:"area",height:"60px"}),children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h3",fontWeight:"700",mt:"-20px",children:"$6,820"}),e.jsxs(c,{direction:"row",spacing:1,my:1,alignItems:"center",children:[e.jsx(h,{sx:{bgcolor:t,width:27,height:27},children:e.jsx(z,{width:20,color:"#FA896B"})}),e.jsx(s,{variant:"subtitle2",fontWeight:"600",children:"+9%"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"last year"})]})]})})},se=()=>{const i=j(),l=i.palette.primary.main,o=i.palette.grey[100],t={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:280},colors:[o,o,l,o,o,o],plotOptions:{bar:{borderRadius:4,columnWidth:"45%",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:[["Apr"],["May"],["June"],["July"],["Aug"],["Sept"]],axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:i.palette.mode==="dark"?"dark":"light"}},r=[{name:"",data:[20,15,30,25,10,15]}];return e.jsx(G,{title:"Employee Salary",subtitle:"Every month",dataLabel1:"Salary",dataItem1:"$36,358",dataLabel2:"Profit",dataItem2:"$5,296",children:e.jsx(e.Fragment,{children:e.jsx(b,{options:t,series:r,type:"bar",height:"280px"})})})},ie=()=>e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{src:f,alt:f,sx:{borderRadius:"8px",width:70,height:70}}),e.jsxs(n,{children:[e.jsx(s,{variant:"h5",children:"Super awesome, Vue coming soon!"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"22 March, 2025"})]})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",mt:5,children:[e.jsxs(_,{max:4,children:[e.jsx(h,{alt:"Remy Sharp",src:k}),e.jsx(h,{alt:"Travis Howard",src:A}),e.jsx(h,{alt:"Cindy Baker",src:T}),e.jsx(h,{alt:"Agnes Walker",src:E})]}),e.jsx(B,{to:"/",children:e.jsx(n,{width:"40px",height:"40px",bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(s,{color:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(D,{width:22})})})})]})]})}),S="/assets/piggy-84077fef.png",ae=[{product:"MaterialPro",price:"23,568",percent:55,color:"primary"},{product:"Flexy Admin",price:"23,568",percent:20,color:"secondary"}],oe=()=>{const i=j(),l=i.palette.secondary.light,o=i.palette.primary.light,t=i.palette.secondary.main,r=i.palette.primary.main,x=i.palette.grey[100];return e.jsxs(v,{sx:{bgcolor:"primary.main",border:`1px solid ${x}`},variant:"outlined",children:[e.jsxs(V,{children:[e.jsx(s,{variant:"h5",color:"white",children:"Best selling products"}),e.jsx(s,{variant:"subtitle1",color:"white",mb:4,children:"Overview 2024"}),e.jsx(n,{textAlign:"center",mt:2,mb:"-90px",children:e.jsx("img",{src:S,alt:S,width:"300px"})})]}),e.jsx(v,{sx:{overflow:"hidden",zIndex:"1",position:"relative",margin:"10px"},children:e.jsx(n,{p:3,children:e.jsx(c,{spacing:3,children:ae.map((d,g)=>e.jsxs(n,{children:[e.jsxs(c,{direction:"row",spacing:2,mb:1,justifyContent:"space-between",alignItems:"center",children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",children:d.product}),e.jsxs(s,{variant:"subtitle2",color:"textSecondary",children:["$",d.price]})]}),e.jsx(M,{sx:{backgroundColor:d.color==="primary"?o:l,color:d.color==="primary"?r:t,borderRadius:"4px",width:55,height:24},label:d.percent+"%"})]}),e.jsx(Y,{value:d.percent,variant:"determinate",color:d.color})]},g))})})})]})},ne=[{id:"1",imgsrc:f,name:"Sunil Joshi",post:"Web Designer",pname:"Elite Admin",status:"Low",budget:"3.9"},{id:"2",imgsrc:k,name:"John Deo",post:"Web Developer",pname:"Flexy Admin",status:"Medium",budget:"24.5"},{id:"3",imgsrc:A,name:"Mathew Anderson",post:"Web Manager",pname:"Material Pro",status:"High",budget:"12.8"},{id:"4",imgsrc:T,name:"Yuvraj Sheth",post:"Project Manager",pname:"Xtreme Admin",status:"Very High",budget:"2.4"}],le=ne,ce=()=>{const[i,l]=C.useState("1"),o=t=>{l(t.target.value)};return e.jsx(u,{title:"Top Projects",subtitle:"Best Products",action:e.jsxs(W,{labelId:"month-dd",id:"month-dd",size:"small",value:i,onChange:o,children:[e.jsx(p,{value:1,children:"March 2025"}),e.jsx(p,{value:2,children:"April 2025"}),e.jsx(p,{value:3,children:"May 2025"})]}),children:e.jsx(K,{children:e.jsxs(N,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[e.jsx(X,{children:e.jsxs(w,{children:[e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Assigned"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Project"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Priority"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Budget"})})]})}),e.jsx(q,{children:le.map(t=>e.jsxs(w,{children:[e.jsx(m,{children:e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{src:t.imgsrc,alt:t.imgsrc,sx:{width:40,height:40}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle2",fontWeight:600,children:t.name}),e.jsx(s,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:t.post})]})]})}),e.jsx(m,{children:e.jsx(s,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:t.pname})}),e.jsx(m,{children:e.jsx(M,{sx:{bgcolor:t.status==="High"?r=>r.palette.error.light:t.status==="Medium"?r=>r.palette.warning.light:t.status==="Low"?r=>r.palette.success.light:r=>r.palette.secondary.light,color:t.status==="High"?r=>r.palette.error.main:t.status==="Medium"?r=>r.palette.warning.main:t.status==="Low"?r=>r.palette.success.main:r=>r.palette.secondary.main,borderRadius:"8px"},size:"small",label:t.status})}),e.jsx(m,{children:e.jsxs(s,{variant:"subtitle2",children:["$",t.budget,"k"]})})]},t.id))})]})})})},de=()=>{const[i,l]=y.useState(!1),o=()=>{l(!0)},t=r=>{r!=="clickaway"&&l(!1)};return y.useEffect(()=>{const r=setTimeout(()=>{o()},1500);return()=>clearTimeout(r)},[]),e.jsx(y.Fragment,{children:e.jsx(Q,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:t,children:e.jsxs(Z,{onClose:t,severity:"info",variant:"filled",sx:{width:"100%",color:"white"},children:[e.jsx(ee,{children:"Welcome To Modernize"}),"Easy to customize the Template!!!"]})})})},nt=()=>e.jsxs(n,{children:[e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,sm:12,lg:12,children:e.jsx(R,{})}),e.jsx(a,{item:!0,xs:12,lg:8,children:e.jsx(te,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,lg:12,children:e.jsx(H,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:12,children:e.jsx(re,{})})]})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(se,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx($,{})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(J,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(ie,{})})]})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(oe,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(U,{})}),e.jsx(a,{item:!0,xs:12,lg:8,children:e.jsx(ce,{})})]}),e.jsx(de,{})]});export{nt as default};
