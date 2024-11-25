import{j as e}from"./index-1d78c4ac.js";import{_ as h}from"./react-apexcharts.min-1cd6e887.js";import{D as b}from"./DashboardWidgetCard-16998795.js";import{u as d}from"./Grid-ba112631.js";import{D as p}from"./DashboardCard-71df2df7.js";import{S as n}from"./Stack-74791772.js";import{A as c}from"./Avatar-49c7f2db.js";import{B as i,T as a}from"./Box-3b2e6d90.js";import{a3 as g,P as y,ag as u,bg as j}from"./index.esm-4ca6571d.js";const W=()=>{const t=d(),r=t.palette.primary.main,s=t.palette.grey[100],o={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:295},colors:[s,s,r,s,s,s],plotOptions:{bar:{borderRadius:4,columnWidth:"45%",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:[["Apr"],["May"],["June"],["July"],["Aug"],["Sept"]],axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:t.palette.mode==="dark"?"dark":"light"}},l=[{name:"",data:[20,15,30,25,10,15]}];return e.jsx(b,{title:"Yearly Sales",subtitle:"Total Sales",dataLabel1:"Salary",dataItem1:"$36,358",dataLabel2:"Expance",dataItem2:"$5,296",children:e.jsx(e.Fragment,{children:e.jsx(h,{options:o,series:l,type:"bar",height:"295px"})})})},A=()=>{const t=d(),r=t.palette.primary.main,s=t.palette.secondary.main,o={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:320,offsetX:-20,stacked:!0},colors:[r,s],plotOptions:{bar:{horizontal:!1,barHeight:"60%",columnWidth:"20%",borderRadius:[6],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1},yaxis:{min:-5,max:5,tickAmount:4},xaxis:{categories:["Jan","Feb","Mar","Apr","May"],axisTicks:{show:!1}},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1}},l=[{name:"Footware",data:[2.5,3.7,3.2,2.6,1.9]},{name:"Fashionware",data:[-2.8,-1.1,-3,-1.5,-1.9]}];return e.jsx(p,{title:"Revenue Updates",subtitle:"Overview of Profit",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{direction:"row",spacing:3,children:[e.jsxs(n,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(c,{sx:{width:9,height:9,bgcolor:r,svg:{display:"none"}}}),e.jsx(i,{children:e.jsx(a,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"Footware"})})]}),e.jsxs(n,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(c,{sx:{width:9,height:9,bgcolor:s,svg:{display:"none"}}}),e.jsx(i,{children:e.jsx(a,{variant:"subtitle2",fontSize:"12px",color:"textSecondary",children:"Fashionware"})})]})]}),e.jsx(h,{options:o,series:l,type:"bar",height:"320px"})]})})},z=()=>{const t=d(),r=t.palette.primary.main,s=t.palette.secondary.main,o=t.palette.primary.light,l=t.palette.mode==="dark"?"rgba(255,255,255,0.8)":"#2A3547",m={chart:{type:"donut",fontFamily:"'Plus Jakarta Sans', sans-serif;",toolbar:{show:!1},height:275},labels:["Profit","Revenue","Expance"],colors:[r,o,s],plotOptions:{pie:{donut:{size:"89%",background:"transparent",labels:{show:!0,name:{show:!0,offsetY:7},value:{show:!1},total:{show:!0,color:l,fontSize:"20px",fontWeight:"600",label:"$500,458"}}}}},dataLabels:{enabled:!1},stroke:{show:!1},legend:{show:!1},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1}},x=[55,55,55];return e.jsx(p,{title:"Sales Overview",subtitle:"Every month",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{mt:3,children:e.jsx(h,{options:m,series:x,type:"donut",height:"275px"})}),e.jsxs(n,{direction:"row",spacing:2,justifyContent:"space-between",mt:7,children:[e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(i,{width:38,height:38,bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(a,{color:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(g,{width:22})})}),e.jsxs(i,{children:[e.jsx(a,{variant:"h6",fontWeight:"600",children:"$23,450"}),e.jsx(a,{variant:"subtitle2",color:"textSecondary",children:"Profit"})]})]}),e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(i,{width:38,height:38,bgcolor:"secondary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(a,{color:"secondary.main",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(g,{width:22})})}),e.jsxs(i,{children:[e.jsx(a,{variant:"h6",fontWeight:"600",children:"$23,450"}),e.jsx(a,{variant:"subtitle2",color:"textSecondary",children:"Expance"})]})]})]})]})})},B=()=>{const t=d(),r=t.palette.primary.main,s={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:25,resize:!0,barColor:"#fff",offsetX:-15,sparkline:{enabled:!0}},colors:[r],grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"100%",borderRadius:3,distributed:!0}},dataLabels:{enabled:!1},stroke:{show:!0,width:5,colors:["rgba(0,0,0,0.01)"]},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{labels:{show:!1}},axisBorder:{show:!1},fill:{opacity:1},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",x:{show:!1},responsive:[{breakpoint:767,options:{chart:{height:60},plotOptions:{bar:{columnWidth:"60%"}}}}]}},o=[{name:"",data:[100,60,35,90,35,100]}];return e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{width:38,height:38,bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(a,{color:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(y,{width:22})})}),e.jsx(i,{mt:3,mb:2,children:e.jsx(h,{options:s,series:o,type:"bar",height:"25px"})}),e.jsxs(a,{variant:"h4",children:["$16.5k",e.jsx("span",{children:e.jsx(u,{width:18,color:"#39B69A"})})]}),e.jsx(a,{variant:"subtitle2",color:"textSecondary",children:"Sales"})]})})},f="/assets/icon-master-card-2-cff7f73b.svg",E=()=>{const t=d(),r=t.palette.primary.main,s=t.palette.primary.light,o=t.palette.success.light,l={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:70,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:2},fill:{colors:[s],type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",x:{show:!1}}},m=[{name:"",color:r,data:[25,66,20,40,12,58,20]}];return e.jsx(p,{title:"Monthly Earnings",action:e.jsx(c,{variant:"rounded",sx:{bgcolor:x=>x.palette.primary.light,width:40,height:40},children:e.jsx(c,{src:f,alt:f,sx:{width:24,height:24}})}),footer:e.jsx(h,{options:l,series:m,type:"area",height:"70px"}),children:e.jsx(e.Fragment,{children:e.jsxs(n,{direction:"row",spacing:1,alignItems:"center",mb:3,children:[e.jsx(a,{variant:"h3",fontWeight:"700",children:"$6,820"}),e.jsxs(n,{direction:"row",spacing:1,mt:1,mb:2,alignItems:"center",children:[e.jsx(c,{sx:{bgcolor:o,width:20,height:20},children:e.jsx(j,{width:18,color:"#13DEB9"})}),e.jsx(a,{variant:"subtitle2",color:"textSecondary",children:"+9%"})]})]})})})};export{E as M,A as R,z as S,W as Y,B as a};
