import{j as e,r as g,R as C}from"./index-1d78c4ac.js";import{B as W}from"./Breadcrumb-4b5ba697.js";import{P as z}from"./PageContainer-51f17055.js";import{B as p}from"./BlankCard-65d5aa30.js";import{C as a}from"./CustomFormLabel-ad90862e.js";import{C as h}from"./CustomTextField-cf77374e.js";import{Q as B}from"./QuillEdit-bb3fc47d.js";import{B as n,T as r}from"./Box-3b2e6d90.js";import{G as t,u as y}from"./Grid-ba112631.js";import{u as P}from"./index-4b0cf582.js";import{C as F}from"./Chip-ef3907c5.js";import{q as G,X as A}from"./index.esm-4ca6571d.js";import{C as v}from"./CustomSelect-caffa199.js";import{M as s}from"./MenuItem-39bf6f11.js";import{T as V}from"./Tooltip-58d28098.js";import{B as m}from"./Button-6de5bece.js";import{C as b}from"./CustomRadio-12ec259e.js";import{C as R}from"./CustomSlider-0693626c.js";import{R as k}from"./RadioGroup-a420755c.js";import{S as j}from"./Stack-74791772.js";import{F as f}from"./FormControlLabel-d06535e3.js";import{A as L}from"./Avatar-49c7f2db.js";import{A as S}from"./Autocomplete-b498da0a.js";import"./Link-5958468e.js";import"./Card-ed0a9074.js";import"./TextField-84ec9af9.js";import"./FormControl-8a17c62f.js";import"./utils-5ebfb48b.js";import"./useFormControl-9666228d.js";import"./isMuiElement-a2555389.js";import"./useId-521a9597.js";import"./formControlState-a1fb9590.js";import"./Select-07709760.js";import"./Popover-e3ff4288.js";import"./Modal-5026ae4f.js";import"./ownerWindow-f1e1d6ee.js";import"./createChainedFunction-0bab83cf.js";import"./utils-f13413e5.js";import"./Portal-8f313b54.js";import"./debounce-517eeb3c.js";import"./Grow-cf41a8df.js";import"./List-eaf26c6f.js";import"./useControlled-05793c79.js";import"./Quill-accb0170.js";import"./isEqual-31f470be.js";import"./_baseIsEqual-a826b923.js";import"./isArray-a7125649.js";import"./dividerClasses-40064371.js";import"./listItemTextClasses-76a31095.js";import"./Popper-880e6f72.js";import"./createPopper-04c39de4.js";import"./Radio-aefd0abb.js";import"./SwitchBase-a9247a40.js";import"./Slider-5d7a41b3.js";import"./visuallyHidden-fa9934b5.js";import"./FormGroup-2de31926.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./useSlot-a49cf6b5.js";import"./Close-feb8b2ff.js";import"./IconButton-6eb83b27.js";import"./ListSubheader-fed1a18d.js";import"./usePreviousProps-39045d8b.js";const M=()=>e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",children:"General"}),e.jsxs(t,{container:!0,mt:3,children:[e.jsx(t,{item:!0,xs:12,display:"flex",alignItems:"center",children:e.jsxs(a,{htmlFor:"p_name",sx:{mt:0},children:["Product Name"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]})}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(h,{id:"p_name",placeholder:"Product Name",fullWidth:!0}),e.jsx(r,{variant:"body2",children:"A product name is required and recommended to be unique."})]}),e.jsx(t,{item:!0,xs:12,display:"flex",alignItems:"center",children:e.jsx(a,{htmlFor:"desc",children:"Description"})}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(B,{}),e.jsx(r,{variant:"body2",children:"Set a description to the product for better visibility."})]})]})]}),N=()=>{const i=y(),{acceptedFiles:o,getRootProps:l,getInputProps:d}=P(),x=o.map(c=>e.jsxs(n,{display:"flex",alignItems:"center",py:1,mt:2,sx:{borderTop:`1px solid ${i.palette.divider}`},justifyContent:"space-between",children:[e.jsxs(r,{variant:"body1",fontWeight:"500",children:[c.path," "]}),e.jsx(F,{color:"primary",label:`${c.size} Bytes`})]},c.path));return e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",children:"Media"}),e.jsxs(n,{mt:3,fontSize:"12px",sx:{backgroundColor:"primary.light",color:"primary.main",padding:"40px 30px",textAlign:"center",border:"1px dashed",borderColor:"primary.main"},...l({className:"dropzone"}),children:[e.jsx("input",{...d()}),e.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]}),e.jsxs(n,{mt:2,children:[e.jsx(r,{variant:"h6",fontSize:"15px",children:"Files :"}),e.jsx(r,{variant:"body1",children:x})]})]})},$=()=>{const[i,o]=g.useState("0"),l=d=>{o(d.target.value)};return e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",children:"Variation"}),e.jsx(a,{sx:{mt:3},children:"Add Product Variations"}),e.jsxs(t,{container:!0,spacing:3,mb:2,children:[e.jsx(t,{item:!0,xs:12,lg:4,children:e.jsxs(v,{id:"p_tax",value:i,onChange:l,fullWidth:!0,children:[e.jsx(s,{value:0,children:"Size"}),e.jsx(s,{value:1,children:"XS"}),e.jsx(s,{value:2,children:"SM"}),e.jsx(s,{value:3,children:"MD"}),e.jsx(s,{value:4,children:"LG"}),e.jsx(s,{value:5,children:"XL"})]})}),e.jsx(t,{item:!0,xs:12,lg:4,children:e.jsx(h,{placeholder:"Variations",fullWidth:!0})}),e.jsx(t,{item:!0,xs:12,lg:4,children:e.jsx(V,{title:"Delete",children:e.jsx(m,{color:"error","aria-label":"delete",children:e.jsx(G,{size:21})})})})]}),e.jsx(m,{variant:"text",startIcon:e.jsx(A,{size:18}),children:"Add another variations"})]})},O=()=>{const i=y(),[o,l]=C.useState("0"),d=u=>{l(u.target.value)},[x,c]=g.useState(""),w=u=>{c(u.target.value)},[T,_]=C.useState(30),D=(u,I)=>{_(I)};return e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",mb:3,children:"Pricing"}),e.jsxs(t,{container:!0,spacing:3,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(a,{htmlFor:"p_price",sx:{mt:0},children:["Base Price"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsx(h,{id:"p_price",placeholder:"Product Price",fullWidth:!0}),e.jsx(r,{variant:"body2",children:"Set the product price."})]}),e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(a,{htmlFor:"p_price",sx:{mt:0},children:["Discount Type"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsx(k,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",value:x,onChange:w,children:e.jsxs(j,{direction:"row",spacing:3,width:"100%",useFlexGap:!0,flexWrap:"wrap",children:[e.jsx(n,{px:2,py:1,flexGrow:1,sx:{border:`1px dashed ${i.palette.divider}`,textAlign:"center"},children:e.jsx(f,{value:"no_discount",control:e.jsx(b,{}),label:"No Discount"})}),e.jsx(n,{px:2,py:1,flexGrow:1,sx:{border:`1px dashed ${i.palette.divider}`,textAlign:"center"},children:e.jsx(f,{value:"percentage",control:e.jsx(b,{}),label:"Percentage %"})}),e.jsx(n,{px:2,py:1,flexGrow:1,sx:{border:`1px dashed ${i.palette.divider}`,textAlign:"center"},children:e.jsx(f,{value:"fixed",control:e.jsx(b,{}),label:"Fixed Price"})})]})}),x==="no_discount"&&null,x==="percentage"&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Set Discount Percentage"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsx(R,{"aria-label":"Volume",value:T,onChange:D}),e.jsx(r,{variant:"body2",children:"Set a percentage discount to be applied on this product."})]}),x==="fixed"&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{htmlFor:"p_fixed",children:["Fixed Discounted Price"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsx(h,{id:"p_fixed",placeholder:"Discounted Price",fullWidth:!0}),e.jsx(r,{variant:"body2",children:"Set the discounted product price. The product will be reduced at the determined fixed price."})]})]}),e.jsxs(t,{item:!0,xs:12,lg:6,children:[e.jsxs(a,{htmlFor:"p_tax",sx:{mt:0},children:["Tax Class"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsxs(v,{id:"p_tax",value:o,onChange:d,fullWidth:!0,children:[e.jsx(s,{value:0,children:"Select an option"}),e.jsx(s,{value:1,children:"Tax Free"}),e.jsx(s,{value:2,children:"Taxable Goods"}),e.jsx(s,{value:3,children:"Downloadable Products"})]}),e.jsx(r,{variant:"body2",children:"Set the product tax class."})]}),e.jsxs(t,{item:!0,xs:12,lg:6,children:[e.jsxs(a,{htmlFor:"p_vat",sx:{mt:0},children:["VAT Amount (%)"," ",e.jsx(r,{color:"error.main",component:"span",children:"*"})]}),e.jsx(h,{id:"p_vat",fullWidth:!0}),e.jsx(r,{variant:"body2",children:"Set the product VAT about."})]})]})]})},E=()=>{const i=y(),{acceptedFiles:o,getRootProps:l,getInputProps:d}=P(),x=o.map(c=>e.jsxs(n,{display:"flex",alignItems:"center",py:1,mt:2,sx:{borderTop:`1px solid ${i.palette.divider}`},justifyContent:"space-between",children:[e.jsxs(r,{variant:"body1",fontWeight:"500",children:[c.path," "]}),e.jsx(F,{color:"primary",label:`${c.size} Bytes`})]},c.path));return e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",children:"Thumbnail"}),e.jsxs(n,{mt:3,fontSize:"12px",sx:{backgroundColor:"primary.light",color:"primary.main",padding:"30px",textAlign:"center",border:"1px dashed",borderColor:"primary.main"},...l({className:"dropzone"}),children:[e.jsx("input",{...d()}),e.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]}),e.jsx(r,{variant:"body2",textAlign:"center",mt:1,children:"Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted."}),e.jsxs(n,{mt:2,children:[e.jsx(r,{variant:"h6",fontSize:"15px",children:"Files"}),e.jsx(r,{variant:"body1",children:x})]})]})},X=()=>{const[i,o]=g.useState(0),l=d=>{o(d.target.value),console.log("test")};return e.jsxs(n,{p:3,children:[e.jsxs(n,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{variant:"h5",children:"Status"}),e.jsx(L,{sx:{backgroundColor:i===0?"primary.main":i===1?"error.main":i===2?"secondary.main":i===3?"warning.main":"error.main","& svg":{display:"none"},width:15,height:15}})]}),e.jsx(t,{container:!0,mt:3,children:e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(v,{value:i,onChange:l,fullWidth:!0,children:[e.jsx(s,{value:0,children:"Published"}),e.jsx(s,{value:1,children:"Draft"}),e.jsx(s,{value:2,children:"Scheduled"}),e.jsx(s,{value:3,children:"In active"})]}),e.jsx(r,{variant:"body2",children:"Set the product status."})]})})]})},q=[{label:"Computer"},{label:"Watches"},{label:"Headphones"},{label:"Beauty"},{label:"Fashion"},{label:"Footwear"}],H=[{label:"New"},{label:"Trending"},{label:"Footwear"},{label:"Latest"}],Q=()=>e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",children:"Product Details"}),e.jsxs(t,{container:!0,mt:3,children:[e.jsx(t,{item:!0,xs:12,display:"flex",alignItems:"center",children:e.jsx(a,{htmlFor:"p_cat",sx:{mt:0},children:"Categories"})}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(S,{multiple:!0,fullWidth:!0,id:"new-category",options:q,getOptionLabel:i=>i.label,filterSelectedOptions:!0,renderInput:i=>e.jsx(h,{...i,placeholder:"Categories"})}),e.jsx(r,{variant:"body2",mb:2,children:"Add product to a category."})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(m,{variant:"text",startIcon:e.jsx(A,{size:18}),children:"Create New Category"})}),e.jsx(t,{item:!0,xs:12,display:"flex",alignItems:"center",children:e.jsx(a,{htmlFor:"p_tag",children:"Tags"})}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(S,{multiple:!0,fullWidth:!0,id:"new-tags",options:H,getOptionLabel:i=>i.label,filterSelectedOptions:!0,renderInput:i=>e.jsx(h,{...i,placeholder:"Tags"})}),e.jsx(r,{variant:"body2",mb:2,children:"Add product to a category."})]})]})]}),J=()=>{const[i,o]=g.useState("0"),l=d=>{o(d.target.value)};return e.jsxs(n,{p:3,children:[e.jsx(r,{variant:"h5",mb:3,children:"Product Template"}),e.jsx(t,{container:!0,spacing:3,children:e.jsxs(t,{item:!0,xs:12,children:[e.jsx(a,{htmlFor:"p_tax",sx:{mt:0},children:"Select a product template"}),e.jsxs(v,{id:"p_tax",value:i,onChange:l,fullWidth:!0,children:[e.jsx(s,{value:0,children:"Default Template"}),e.jsx(s,{value:1,children:"Fashion"}),e.jsx(s,{value:2,children:"Office Stationary"}),e.jsx(s,{value:3,children:"Electronics"})]}),e.jsx(r,{variant:"body2",mt:1,children:"Assign a template from your current theme to define how a single product is displayed."})]})})]})},K=[{to:"/",title:"Home"},{title:"Add Product"}],or=()=>e.jsxs(z,{title:"Add Product",description:"this is Add Product page",children:[e.jsx(W,{title:"Add Product",items:K}),e.jsxs("form",{children:[e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{item:!0,lg:8,children:e.jsxs(j,{spacing:3,children:[e.jsx(p,{children:e.jsx(M,{})}),e.jsx(p,{children:e.jsx(N,{})}),e.jsx(p,{children:e.jsx($,{})}),e.jsx(p,{children:e.jsx(O,{})})]})}),e.jsx(t,{item:!0,lg:4,children:e.jsxs(j,{spacing:3,children:[e.jsx(p,{children:e.jsx(E,{})}),e.jsx(p,{children:e.jsx(X,{})}),e.jsx(p,{children:e.jsx(Q,{})}),e.jsx(p,{children:e.jsx(J,{})})]})})]}),e.jsxs(j,{direction:"row",spacing:2,mt:3,children:[e.jsx(m,{variant:"contained",color:"primary",children:"Save Changes"}),e.jsx(m,{variant:"outlined",color:"error",children:"Cancel"})]})]})]});export{or as default};
