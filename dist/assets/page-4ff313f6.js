import{u as o,D as s,E as l,H as c,G as g,aS as j,j as e,r as P}from"./index-1d78c4ac.js";import{B as D}from"./Breadcrumb-4b5ba697.js";import{P as G}from"./PageContainer-51f17055.js";import{c as k,u as E,D as F,f as w,g as A,a as H,b as q,d as N}from"./index-2b7bd3a9.js";import{C as L}from"./CustomTextField-cf77374e.js";import{C as O}from"./CustomSelect-caffa199.js";import{bs as U,bt as X,bu as W,bv as _}from"./index.esm-4ca6571d.js";import{S as b}from"./Stack-4b2e722b.js";import{A as f}from"./Avatar-49c7f2db.js";import{B as v,T as p}from"./Box-3b2e6d90.js";import{A as J}from"./AvatarGroup-707c9b19.js";import{C as K}from"./Chip-ef3907c5.js";import{G as y}from"./Grid-ba112631.js";import{T as Q}from"./TableContainer-e51d3cfd.js";import{T as Y,a as Z,b as R,c as T,d as $}from"./TableRow-47830db4.js";import{D as ee}from"./Divider-32914f08.js";import{B as ae}from"./Button-6de5bece.js";import{M as te}from"./MenuItem-39bf6f11.js";import{I as x}from"./IconButton-6eb83b27.js";import"./Link-5958468e.js";import"./Card-ed0a9074.js";import"./CardHeader-4375bfdf.js";import"./Tooltip-58d28098.js";import"./Popper-880e6f72.js";import"./useId-521a9597.js";import"./Portal-8f313b54.js";import"./createPopper-04c39de4.js";import"./useControlled-05793c79.js";import"./Grow-cf41a8df.js";import"./utils-f13413e5.js";import"./TextField-84ec9af9.js";import"./FormControl-8a17c62f.js";import"./utils-5ebfb48b.js";import"./useFormControl-9666228d.js";import"./isMuiElement-a2555389.js";import"./formControlState-a1fb9590.js";import"./Select-07709760.js";import"./Popover-e3ff4288.js";import"./Modal-5026ae4f.js";import"./ownerWindow-f1e1d6ee.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./List-eaf26c6f.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./dividerClasses-40064371.js";import"./listItemTextClasses-76a31095.js";const re=[{status:"active",avatar:o,name:"Olivia Rhye",project:"Xtreme admin",percent:60,users:[{img:o},{img:s}]},{status:"cancel",avatar:s,name:"Barbara Steele",project:"Adminpro admin",percent:30,users:[{img:o},{img:s},{img:l}]},{status:"pending",avatar:c,name:"Isabel Vasquez",project:"Modernize admin",percent:32,users:[{img:s},{img:g}]},{status:"active",avatar:o,name:"Olivia Rhye",project:"Xtreme admin",percent:60,users:[{img:o},{img:s}]},{status:"cancel",avatar:s,name:"Barbara Steele",project:"Adminpro admin",percent:30,users:[{img:o},{img:s},{img:l}]},{status:"active",avatar:l,name:"Leonard Gordon",project:"Monster admin",percent:45,users:[{img:l},{img:s}]},{status:"pending",avatar:g,name:"Evelyn Pope",project:"Materialpro admin",percent:37,users:[{img:o},{img:s},{img:c}]},{status:"active",avatar:l,name:"Leonard Gordon",project:"Monster admin",percent:45,users:[{img:l},{img:s}]},{status:"pending",avatar:g,name:"Evelyn Pope",project:"Materialpro admin",percent:37,users:[{img:o},{img:s},{img:c}]},{status:"cancel",avatar:c,name:"Tommy Garza",project:"Elegant admin",percent:87,users:[{img:c},{img:j}]},{status:"pending",avatar:j,name:"Isabel Vasquez",project:"Modernize admin",percent:32,users:[{img:s},{img:g}]},{status:"active",avatar:o,name:"Olivia Rhye",project:"Xtreme admin",percent:60,users:[{img:o},{img:s}]},{status:"cancel",avatar:s,name:"Barbara Steele",project:"Adminpro admin",percent:30,users:[{img:o},{img:s},{img:l}]},{status:"active",avatar:l,name:"Leonard Gordon",project:"Monster admin",percent:45,users:[{img:l},{img:s}]},{status:"pending",avatar:g,name:"Evelyn Pope",project:"Materialpro admin",percent:37,users:[{img:o},{img:s},{img:c}]},{status:"cancel",avatar:c,name:"Tommy Garza",project:"Elegant admin",percent:87,users:[{img:c},{img:j}]},{status:"pending",avatar:j,name:"Isabel Vasquez",project:"Modernize admin",percent:32,users:[{img:s},{img:g}]}],se=re,h=k(),ne=[h.accessor("name",{header:()=>"User",cell:t=>e.jsxs(b,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(f,{src:t.row.original.avatar,alt:t.row.original.avatar,sx:{width:42,height:42}}),e.jsx(v,{children:e.jsx(p,{variant:"h6",children:t.getValue()})})]})}),h.accessor("project",{header:()=>"Project Name",cell:t=>e.jsx(p,{variant:"subtitle1",color:"textSecondary",children:t.getValue()})}),h.accessor("users",{header:()=>"Users",cell:t=>e.jsx(J,{sx:{justifyContent:"start"},children:t.getValue().map((a,C)=>e.jsx(f,{src:a.img,alt:a.img,sx:{width:35,height:35}},C))})}),h.accessor("status",{header:()=>"Status",meta:{filterVariant:"select"},cell:t=>e.jsx(K,{sx:{bgcolor:t.getValue()==="active"?a=>a.palette.success.light:t.getValue()==="pending"?a=>a.palette.warning.light:t.getValue()==="completed"?a=>a.palette.primary.light:t.getValue()==="cancel"?a=>a.palette.error.light:a=>a.palette.secondary.light,color:t.getValue()==="active"?a=>a.palette.success.main:t.getValue()==="pending"?a=>a.palette.warning.main:t.getValue()==="completed"?a=>a.palette.primary.main:t.getValue()==="cancel"?a=>a.palette.error.main:a=>a.palette.secondary.main,borderRadius:"8px"},label:t.getValue()})})],ie=()=>{const[t,a]=P.useState(()=>[...se]),[C,M]=P.useState([]),S=P.useReducer(()=>({}),{})[1],r=E({data:t,columns:ne,filterFns:{},state:{columnFilters:C},onColumnFiltersChange:M,getCoreRowModel:A(),getFilteredRowModel:H(),getSortedRowModel:q(),getPaginationRowModel:N(),debugTable:!0,debugHeaders:!0,debugColumns:!1}),I=()=>{const n=["avatar","name","project","percent","status","users"],i=t.map(m=>[m.name,m.project,m.percent,m.status,m.avatar,m.users.map(B=>B.img).join(",")]),u=[n.join(","),...i.map(m=>m.join(","))].join(`
`),V=new Blob([u],{type:"text/csv;charset=utf-8;"}),z=URL.createObjectURL(V),d=document.createElement("a");d.href=z,d.setAttribute("download","table-data.csv"),document.body.appendChild(d),d.click(),document.body.removeChild(d)};return e.jsx(F,{title:"Pagination Table",onDownload:I,children:e.jsx(y,{container:!0,spacing:3,children:e.jsx(y,{item:!0,xs:12,children:e.jsxs(v,{children:[e.jsx(Q,{children:e.jsxs(Y,{sx:{whiteSpace:"nowrap"},children:[e.jsx(Z,{children:r.getHeaderGroups().map(n=>e.jsx(R,{children:n.headers.map(i=>e.jsx(T,{children:e.jsxs(p,{variant:"h6",mb:1,className:i.column.getCanSort()?"cursor-pointer select-none":"",onClick:i.column.getToggleSortingHandler(),children:[i.isPlaceholder?null:w(i.column.columnDef.header,i.getContext()),(()=>{const u=i.column.getIsSorted();return u==="asc"?" 🔼":u==="desc"?" 🔽":null})()]})},i.id))},n.id))}),e.jsx($,{children:r.getRowModel().rows.map(n=>e.jsx(R,{children:n.getVisibleCells().map(i=>e.jsx(T,{children:w(i.column.columnDef.cell,i.getContext())},i.id))},n.id))})]})}),e.jsx(ee,{}),e.jsxs(b,{gap:1,p:3,alignItems:"center",direction:"row",justifyContent:"space-between",children:[e.jsxs(v,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(ae,{variant:"contained",color:"primary",onClick:()=>S(),children:"Force Rerender"}),e.jsxs(p,{variant:"body1",children:[r.getPrePaginationRowModel().rows.length," Rows"]})]}),e.jsxs(v,{display:"flex",alignItems:"center",gap:1,children:[e.jsxs(b,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(p,{variant:"body1",children:"Page"}),e.jsxs(p,{variant:"body1",fontWeight:600,children:[r.getState().pagination.pageIndex+1," of"," ",r.getPageCount()]})]}),e.jsxs(b,{direction:"row",alignItems:"center",gap:1,children:["| Go to page:",e.jsx(L,{type:"number",min:"1",max:r.getPageCount(),defaultValue:r.getState().pagination.pageIndex+1,onChange:n=>{const i=n.target.value?Number(n.target.value)-1:0;r.setPageIndex(i)}})]}),e.jsx(O,{value:r.getState().pagination.pageSize,onChange:n=>{r.setPageSize(Number(n.target.value))},children:[10,15,20,25].map(n=>e.jsx(te,{value:n,children:n},n))}),e.jsx(x,{size:"small",onClick:()=>r.setPageIndex(0),disabled:!r.getCanPreviousPage(),children:e.jsx(U,{})}),e.jsx(x,{size:"small",onClick:()=>r.previousPage(),disabled:!r.getCanPreviousPage(),children:e.jsx(X,{})}),e.jsx(x,{size:"small",onClick:()=>r.nextPage(),disabled:!r.getCanNextPage(),children:e.jsx(W,{})}),e.jsx(x,{size:"small",onClick:()=>r.setPageIndex(r.getPageCount()-1),disabled:!r.getCanNextPage(),children:e.jsx(_,{})})]})]})]})})})})},oe=[{to:"/",title:"Home"},{title:"Pagination Table"}];function ra(){return e.jsx(e.Fragment,{children:e.jsxs(G,{title:"React Pagination Table",description:"this is React  Pagination Table page",children:[e.jsx(D,{title:"Pagination Table ",items:oe}),e.jsx(ie,{})]})})}export{ra as default};
