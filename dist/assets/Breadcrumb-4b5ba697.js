import{j as s,a5 as n,aO as P,a4 as M,r as d,aP as E,N as T}from"./index-1d78c4ac.js";import{aH as _}from"./index.esm-4ca6571d.js";import{c as O,a as U,G as C}from"./Grid-ba112631.js";import{s as p,j as H,c as W,g as G,T as m,d as q,e as D,B as j}from"./Box-3b2e6d90.js";import{L as F}from"./Link-5958468e.js";const V=O(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),J=["slots","slotProps"],K=p(H)(({theme:e})=>n({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":n({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":n({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:P(e.palette.grey[200],.12)}:{backgroundColor:P(e.palette.grey[600],.12)})})),Q=p(V)({width:24,height:16});function X(e){const{slots:r={},slotProps:l={}}=e,t=M(e,J),o=e;return s.jsx("li",{children:s.jsx(K,n({focusRipple:!0},t,{ownerState:o,children:s.jsx(Q,n({as:r.CollapsedIcon,ownerState:o},l.collapsedIcon))}))})}function Y(e){return G("MuiBreadcrumbs",e)}const Z=W("MuiBreadcrumbs",["root","ol","li","separator"]),ee=Z,se=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],re=e=>{const{classes:r}=e;return D({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Y,r)},oe=p(m,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ee.li}`]:r.li},r.root]})({}),te=p("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ae=p("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function le(e,r,l,t){return e.reduce((o,u,c)=>(c<e.length-1?o=o.concat(u,s.jsx(ae,{"aria-hidden":!0,className:r,ownerState:t,children:l},`separator-${c}`)):o.push(u),o),[])}const ne=d.forwardRef(function(r,l){const t=E({props:r,name:"MuiBreadcrumbs"}),{children:o,className:u,component:c="nav",slots:B={},slotProps:N={},expandText:S="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:b=1,maxItems:f=8,separator:v="/"}=t,$=M(t,se),[w,z]=d.useState(!1),i=n({},t,{component:c,expanded:w,expandText:S,itemsAfterCollapse:g,itemsBeforeCollapse:b,maxItems:f,separator:v}),x=re(i),L=U({elementType:B.CollapsedIcon,externalSlotProps:N.collapsedIcon,ownerState:i}),I=d.useRef(null),A=a=>{const y=()=>{z(!0);const R=I.current.querySelector("a[href],button,[tabindex]");R&&R.focus()};return b+g>=a.length?a:[...a.slice(0,b),s.jsx(X,{"aria-label":S,slots:{CollapsedIcon:B.CollapsedIcon},slotProps:{collapsedIcon:L},onClick:y},"ellipsis"),...a.slice(a.length-g,a.length)]},h=d.Children.toArray(o).filter(a=>d.isValidElement(a)).map((a,y)=>s.jsx("li",{className:x.li,children:a},`child-${y}`));return s.jsx(oe,n({ref:l,component:c,color:"text.secondary",className:q(x.root,u),ownerState:i},$,{children:s.jsx(te,{className:x.ol,ref:I,ownerState:i,children:le(w||f&&h.length<=f?h:A(h),x.separator,v,i)})}))}),ce=ne,k="/assets/ChatBc-d3c45db6.png",me=({subtitle:e,items:r,title:l,children:t})=>s.jsxs(C,{container:!0,sx:{backgroundColor:"primary.light",borderRadius:o=>o.shape.borderRadius/4,p:"30px 25px 20px",marginBottom:"30px",position:"relative",overflow:"hidden"},children:[s.jsxs(C,{item:!0,xs:12,sm:6,lg:8,mb:1,children:[s.jsx(m,{variant:"h4",children:l}),s.jsx(m,{color:"textSecondary",variant:"h6",fontWeight:400,mt:.8,mb:0,children:e}),s.jsx(ce,{separator:s.jsx(_,{size:"5",fill:"textSecondary",fillOpacity:"0.6",style:{margin:"0 5px"}}),sx:{alignItems:"center",mt:r?"10px":""},"aria-label":"breadcrumb",children:r?r.map(o=>s.jsx("div",{children:o.to?s.jsx(F,{underline:"none",color:"inherit",component:T,to:o.to,children:o.title}):s.jsx(m,{color:"textPrimary",children:o.title})},o.title)):""})]}),s.jsx(C,{item:!0,xs:12,sm:6,lg:4,display:"flex",alignItems:"flex-end",children:s.jsx(j,{sx:{display:{xs:"none",md:"block",lg:"flex"},alignItems:"center",justifyContent:"flex-end",width:"100%"},children:t?s.jsx(j,{sx:{top:"0px",position:"absolute"},children:t}):s.jsx(s.Fragment,{children:s.jsx(j,{sx:{top:"0px",position:"absolute"},children:s.jsx("img",{src:k,alt:k,width:"165px"})})})})})]});export{me as B};
