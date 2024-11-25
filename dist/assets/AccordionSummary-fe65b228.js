import{r as d,aP as w,a4 as M,a5 as c,j as l}from"./index-1d78c4ac.js";import{c as N,g as j,s as g,d as R,e as k,j as L}from"./Box-3b2e6d90.js";import{u as H}from"./useSlot-a49cf6b5.js";import{P as F}from"./Grid-ba112631.js";import{u as O}from"./useControlled-05793c79.js";import{C as z}from"./Collapse-0e35f2a4.js";const J=d.createContext({}),I=J;function K(o){return j("MuiAccordion",o)}const Q=N("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=Q,X=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Y=o=>{const{classes:s,square:t,expanded:r,disabled:e,disableGutters:a}=o;return k({root:["root",!t&&"rounded",r&&"expanded",e&&"disabled",!a&&"gutters"],region:["region"]},K,s)},Z=g(F,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[{[`& .${v.region}`]:s.region},s.root,!t.square&&s.rounded,!t.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${v.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${v.expanded}`]:{margin:"16px 0"}}}]})),oo=d.forwardRef(function(s,t){const r=w({props:s,name:"MuiAccordion"}),{children:e,className:a,defaultExpanded:i=!1,disabled:p=!1,disableGutters:u=!1,expanded:S,onChange:m,square:y=!1,slots:C={},slotProps:A={},TransitionComponent:h,TransitionProps:f}=r,b=M(r,X),[n,G]=O({controlled:S,default:i,name:"Accordion",state:"expanded"}),T=d.useCallback(_=>{G(!n),m&&m(_,!n)},[n,m,G]),[$,...V]=d.Children.toArray(e),B=d.useMemo(()=>({expanded:n,disabled:p,disableGutters:u,toggle:T}),[n,p,u,T]),P=c({},r,{square:y,disabled:p,disableGutters:u,expanded:n}),D=Y(P),U=c({transition:h},C),W=c({transition:f},A),[E,q]=H("transition",{elementType:z,externalForwardedProps:{slots:U,slotProps:W},ownerState:P});return l.jsxs(Z,c({className:R(D.root,a),ref:t,ownerState:P,square:y},b,{children:[l.jsx(I.Provider,{value:B,children:$}),l.jsx(E,c({in:n,timeout:"auto"},q,{children:l.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:D.region,children:V})}))]}))}),vo=oo;function so(o){return j("MuiAccordionDetails",o)}N("MuiAccordionDetails",["root"]);const to=["className"],ro=o=>{const{classes:s}=o;return k({root:["root"]},so,s)},eo=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),no=d.forwardRef(function(s,t){const r=w({props:s,name:"MuiAccordionDetails"}),{className:e}=r,a=M(r,to),i=r,p=ro(i);return l.jsx(eo,c({className:R(p.root,e),ref:t,ownerState:i},a))}),Ro=no;function ao(o){return j("MuiAccordionSummary",o)}const io=N("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),x=io,co=["children","className","expandIcon","focusVisibleClassName","onClick"],lo=o=>{const{classes:s,expanded:t,disabled:r,disableGutters:e}=o;return k({root:["root",t&&"expanded",r&&"disabled",!e&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!e&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},ao,s)},po=g(L,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${x.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${x.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"},variants:[{props:t=>!t.disableGutters,style:{[`&.${x.expanded}`]:{minHeight:64}}}]}}),uo=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}}}]})),mo=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})),fo=d.forwardRef(function(s,t){const r=w({props:s,name:"MuiAccordionSummary"}),{children:e,className:a,expandIcon:i,focusVisibleClassName:p,onClick:u}=r,S=M(r,co),{disabled:m=!1,disableGutters:y,expanded:C,toggle:A}=d.useContext(I),h=n=>{A&&A(n),u&&u(n)},f=c({},r,{expanded:C,disabled:m,disableGutters:y}),b=lo(f);return l.jsxs(po,c({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":C,className:R(b.root,a),focusVisibleClassName:R(b.focusVisible,p),onClick:h,ref:t,ownerState:f},S,{children:[l.jsx(uo,{className:b.content,ownerState:f,children:e}),i&&l.jsx(mo,{className:b.expandIconWrapper,ownerState:f,children:i})]}))}),So=fo;export{vo as A,So as a,Ro as b};
