import{j as e,r as p,u as D,D as S,E as R,G as u,H as B}from"./index-1d78c4ac.js";import{B as V}from"./Breadcrumb-4b5ba697.js";import{P as z}from"./PageContainer-51f17055.js";import{c as E,u as H,D as P,f as g,g as k}from"./index-2b7bd3a9.js";import{aH as A,b0 as G}from"./index.esm-4ca6571d.js";import{S as M}from"./Stack-4b2e722b.js";import{A as O}from"./Avatar-49c7f2db.js";import{B as c,T as l}from"./Box-3b2e6d90.js";import{C as x}from"./Chip-ef3907c5.js";import{G as h}from"./Grid-ba112631.js";import{B as L}from"./Button-6de5bece.js";import{D as q}from"./Divider-32914f08.js";import{T as F}from"./TableContainer-e51d3cfd.js";import{T as U,a as I,b,c as j,d as J}from"./TableRow-47830db4.js";import"./Link-5958468e.js";import"./Card-ed0a9074.js";import"./CardHeader-4375bfdf.js";import"./Tooltip-58d28098.js";import"./Popper-880e6f72.js";import"./useId-521a9597.js";import"./Portal-8f313b54.js";import"./createPopper-04c39de4.js";import"./useControlled-05793c79.js";import"./Grow-cf41a8df.js";import"./utils-f13413e5.js";import"./IconButton-6eb83b27.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./dividerClasses-40064371.js";const K=[{status:"active",avatar:D,tag:"rhye",cname:"Olivia Rhye",email:"olivia@ui.com",teams:[{name:"Design",bgcolor:"primary.main"},{name:"Product",bgcolor:"secondary.main"}]},{status:"offline",avatar:S,tag:"steele",cname:"Barbara Steele",email:"steele@ui.com",teams:[{name:"Product",bgcolor:"secondary.main"},{name:"Operations",bgcolor:"error.main"}]},{status:"active",avatar:R,tag:"gordon",cname:"Leonard Gordon",email:"olivia@ui.com",teams:[{name:"Finance",bgcolor:"primary.main"},{name:"Customer Success",bgcolor:"success.main"}]},{status:"offline",avatar:u,tag:"pope",cname:"Evelyn Pope",email:"steele@ui.com",teams:[{name:"Operations",bgcolor:"error.main"},{name:"Design",bgcolor:"primary.main"}]},{status:"active",avatar:B,tag:"garza",cname:"Tommy Garza",email:"olivia@ui.com",teams:[{name:"Product",bgcolor:"secondary.main"}]},{status:"active",avatar:u,tag:"vasquez",cname:"Isabel Vasquez",email:"steele@ui.com",teams:[{name:"Customer Success",bgcolor:"success.main"}]}],n=E(),N=[n.accessor("avatar",{header:()=>"Customer",cell:a=>e.jsxs(M,{direction:"row",spacing:2,children:[e.jsx(O,{src:a.getValue(),alt:a.getValue(),sx:{width:42,height:42}}),e.jsxs(c,{children:[e.jsx(l,{variant:"h6",children:a.row.original.cname}),e.jsxs(l,{variant:"subtitle1",color:"textSecondary",children:["@",a.row.original.tag]})]})]})}),n.accessor("status",{header:()=>"Status",cell:a=>e.jsx(x,{label:a.getValue(),size:"small",icon:a.getValue()==="active"?e.jsx(A,{width:14}):e.jsx(G,{width:14}),sx:{backgroundColor:a.getValue()==="active"?t=>t.palette.success.light:t=>t.palette.grey[100],color:a.getValue()==="active"?t=>t.palette.success.main:t=>t.palette.grey[500],".MuiChip-icon":{color:"inherit !important"}}})}),n.accessor("email",{header:()=>"Email Address",cell:a=>e.jsx(l,{variant:"subtitle1",color:"textSecondary",children:a.getValue()})}),n.accessor("teams",{header:()=>"Teams",cell:a=>e.jsx(c,{children:a.getValue().map((t,m)=>e.jsx(x,{label:t.name,sx:{backgroundColor:t.bgcolor,color:"white",fontSize:"11px",mr:1},size:"small"},m))})})],Q=()=>{const[a]=p.useState(K),[t,m]=p.useState("md"),d=H({data:a,columns:N,getCoreRowModel:k()}),v=()=>{m(s=>s==="lg"?"md":s==="md"?"sm":"lg")},C=()=>{const s=["Customer","Status","Email Address","Teams"],r=a.map(o=>[o.cname,o.status,o.email,o.teams.map(w=>w.name).join(", ")]),f=[s.join(","),...r.map(o=>o.join(","))].join(`
`),y=new Blob([f],{type:"text/csv;charset=utf-8;"}),T=URL.createObjectURL(y),i=document.createElement("a");i.href=T,i.setAttribute("download","table-data.csv"),document.body.appendChild(i),i.click(),document.body.removeChild(i)};return e.jsx(P,{title:"Dense Table",onDownload:C,children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(c,{children:[e.jsx(c,{p:3,children:e.jsx(L,{onClick:v,variant:"contained",children:"Toggle Density"})}),e.jsx(q,{}),e.jsx(F,{children:e.jsxs(U,{sx:{whiteSpace:"nowrap"},children:[e.jsx(I,{children:d.getHeaderGroups().map(s=>e.jsx(b,{children:s.headers.map(r=>e.jsx(j,{sx:{padding:t==="sm"?"4px":t==="md"?"8px":"16px",transition:"padding 0.2s"},children:e.jsx(l,{variant:"h6",children:r.isPlaceholder?null:g(r.column.columnDef.header,r.getContext())})},r.id))},s.id))}),e.jsx(J,{children:d.getRowModel().rows.map(s=>e.jsx(b,{children:s.getVisibleCells().map(r=>e.jsx(j,{sx:{padding:t==="sm"?"4px":t==="md"?"8px":"16px",transition:"padding 0.2s"},children:g(r.column.columnDef.cell,r.getContext())},r.id))},s.id))})]})})]})})})})},W=[{to:"/",title:"Home"},{title:"Dense Table "}];function Se(){return e.jsx(e.Fragment,{children:e.jsxs(z,{title:"React Dense Table",description:"this is React Dense Table page",children:[e.jsx(V,{title:"Dense Table ",items:W}),e.jsx("div",{children:e.jsx(Q,{})})]})})}export{Se as default};
