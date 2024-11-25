import{j as e,r as u}from"./index-1d78c4ac.js";import{B as y}from"./Breadcrumb-4b5ba697.js";import{P as R}from"./PageContainer-51f17055.js";import{c as T,u as I,D as V,f as x,g as M,a as D,b as k,d as B}from"./index-2b7bd3a9.js";import{b as F}from"./FilterTableData-584f08f9.js";import{C as H}from"./CustomTextField-cf77374e.js";import{C as q}from"./CustomSelect-caffa199.js";import{ac as N,q as z,aJ as L,bs as W,bt as A,bu as E,bv as G}from"./index.esm-4ca6571d.js";import{T as i,B as c}from"./Box-3b2e6d90.js";import{C as U}from"./Chip-ef3907c5.js";import{S as d}from"./Stack-4b2e722b.js";import{A as J}from"./Avatar-49c7f2db.js";import{L as O}from"./LinearProgress-7d076a9c.js";import{G as h}from"./Grid-ba112631.js";import{T as X}from"./TableContainer-e51d3cfd.js";import{T as Z,a as _,b as j,c as b,d as K}from"./TableRow-47830db4.js";import{D as Q}from"./Divider-32914f08.js";import{B as Y}from"./Button-6de5bece.js";import{M as $}from"./MenuItem-39bf6f11.js";import{I as g}from"./IconButton-6eb83b27.js";import"./Link-5958468e.js";import"./Card-ed0a9074.js";import"./CardHeader-4375bfdf.js";import"./Tooltip-58d28098.js";import"./Popper-880e6f72.js";import"./useId-521a9597.js";import"./Portal-8f313b54.js";import"./createPopper-04c39de4.js";import"./useControlled-05793c79.js";import"./Grow-cf41a8df.js";import"./utils-f13413e5.js";import"./TextField-84ec9af9.js";import"./FormControl-8a17c62f.js";import"./utils-5ebfb48b.js";import"./useFormControl-9666228d.js";import"./isMuiElement-a2555389.js";import"./formControlState-a1fb9590.js";import"./Select-07709760.js";import"./Popover-e3ff4288.js";import"./Modal-5026ae4f.js";import"./ownerWindow-f1e1d6ee.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./List-eaf26c6f.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./dividerClasses-40064371.js";import"./listItemTextClasses-76a31095.js";const ee=F,p=T(),te=[p.accessor("invoiceno",{header:()=>"Invoice",cell:t=>e.jsxs(i,{variant:"subtitle1",color:"textPrimary",fontWeight:600,children:["INV- ",t.getValue()]})}),p.accessor("status",{header:()=>"Status",meta:{filterVariant:"select"},cell:t=>e.jsx(U,{label:t.getValue(),icon:t.getValue()=="Paid"?e.jsx(N,{width:16}):t.getValue()=="Cancelled"?e.jsx(z,{width:16}):e.jsx(L,{width:16}),sx:{backgroundColor:t.getValue()=="Paid"?s=>s.palette.primary.light:t.getValue()=="Cancelled"?s=>s.palette.error.light:s=>s.palette.secondary.light,color:t.getValue()=="Paid"?s=>s.palette.primary.main:t.getValue()=="Cancelled"?s=>s.palette.error.main:s=>s.palette.secondary.main,".MuiChip-icon":{color:"inherit !important"}}})}),p.accessor("name",{header:()=>"Customer",cell:t=>e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(J,{src:t.row.original.imgsrc,alt:t.row.original.imgsrc,sx:{width:40,height:40}}),e.jsxs(c,{children:[e.jsx(i,{variant:"h6",fontWeight:"600",children:t.getValue()}),e.jsx(i,{color:"textSecondary",variant:"subtitle2",children:t.row.original.post})]})]})}),p.accessor("progress",{header:()=>"Progress",cell:t=>e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(c,{width:"50%",children:e.jsx(O,{variant:"determinate",value:t.getValue(),color:"primary"})}),e.jsxs(i,{variant:"subtitle2",color:"textSecondary",children:[t.getValue(),"%"]})]})})],re=()=>{const[t,s]=u.useState(()=>[...ee]),[C,w]=u.useState([]),f=u.useReducer(()=>({}),{})[1],r=I({data:t,columns:te,filterFns:{},state:{columnFilters:C},onColumnFiltersChange:w,getCoreRowModel:M(),getFilteredRowModel:D(),getSortedRowModel:k(),getPaginationRowModel:B(),debugTable:!0,debugHeaders:!0,debugColumns:!1}),v=()=>{const a=["Invoice","Status","Customer","Progress"],o=t.map(n=>[n.invoiceno,n.status,n.name,n.progress]),m=[a.join(","),...o.map(n=>n.join(","))].join(`
`),P=new Blob([m],{type:"text/csv;charset=utf-8;"}),S=URL.createObjectURL(P),l=document.createElement("a");l.href=S,l.setAttribute("download","table-data.csv"),document.body.appendChild(l),l.click(),document.body.removeChild(l)};return e.jsx(V,{title:"Sorting Table",onDownload:v,children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(c,{children:[e.jsx(X,{children:e.jsxs(Z,{sx:{whiteSpace:"nowrap"},children:[e.jsx(_,{children:r.getHeaderGroups().map(a=>e.jsx(j,{children:a.headers.map(o=>e.jsx(b,{children:e.jsxs(i,{variant:"h6",mb:1,className:o.column.getCanSort()?"cursor-pointer select-none":"",onClick:o.column.getToggleSortingHandler(),children:[o.isPlaceholder?null:x(o.column.columnDef.header,o.getContext()),(()=>{const m=o.column.getIsSorted();return m==="asc"?" 🔼":m==="desc"?" 🔽":null})()]})},o.id))},a.id))}),e.jsx(K,{children:r.getRowModel().rows.map(a=>e.jsx(j,{children:a.getVisibleCells().map(o=>e.jsx(b,{children:x(o.column.columnDef.cell,o.getContext())},o.id))},a.id))})]})}),e.jsx(Q,{}),e.jsxs(d,{gap:1,p:3,alignItems:"center",direction:"row",justifyContent:"space-between",children:[e.jsxs(c,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(Y,{variant:"contained",color:"primary",onClick:()=>f(),children:"Force Rerender"}),e.jsxs(i,{variant:"body1",children:[r.getPrePaginationRowModel().rows.length," Rows"]})]}),e.jsxs(c,{display:"flex",alignItems:"center",gap:1,children:[e.jsxs(d,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(i,{variant:"body1",children:"Page"}),e.jsxs(i,{variant:"body1",fontWeight:600,children:[r.getState().pagination.pageIndex+1," of"," ",r.getPageCount()]})]}),e.jsxs(d,{direction:"row",alignItems:"center",gap:1,children:["| Go to page:",e.jsx(H,{type:"number",min:"1",max:r.getPageCount(),defaultValue:r.getState().pagination.pageIndex+1,onChange:a=>{const o=a.target.value?Number(a.target.value)-1:0;r.setPageIndex(o)}})]}),e.jsx(q,{value:r.getState().pagination.pageSize,onChange:a=>{r.setPageSize(Number(a.target.value))},children:[10,15,20,25].map(a=>e.jsx($,{value:a,children:a},a))}),e.jsx(g,{size:"small",onClick:()=>r.setPageIndex(0),disabled:!r.getCanPreviousPage(),children:e.jsx(W,{})}),e.jsx(g,{size:"small",onClick:()=>r.previousPage(),disabled:!r.getCanPreviousPage(),children:e.jsx(A,{})}),e.jsx(g,{size:"small",onClick:()=>r.nextPage(),disabled:!r.getCanNextPage(),children:e.jsx(E,{})}),e.jsx(g,{size:"small",onClick:()=>r.setPageIndex(r.getPageCount()-1),disabled:!r.getCanNextPage(),children:e.jsx(G,{})})]})]})]})})})})},ae=[{to:"/",title:"Home"},{title:"Sorting Table"}];function et(){return e.jsx(e.Fragment,{children:e.jsxs(R,{title:"React Sorting Table",description:"this is React Sorting Table page",children:[e.jsx(y,{title:"Sorting Table",items:ae}),e.jsx(re,{})]})})}export{et as default};