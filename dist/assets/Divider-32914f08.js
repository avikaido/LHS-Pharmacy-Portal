import{a5 as r,bi as D,r as w,aP as R,a4 as C,j as v}from"./index-1d78c4ac.js";import{s as f,d as L,e as W}from"./Box-3b2e6d90.js";import{g as $}from"./dividerClasses-40064371.js";const I=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],j=t=>{const{absolute:i,children:e,classes:l,flexItem:s,light:n,orientation:a,textAlign:o,variant:d}=t;return W({root:["root",i&&"absolute",d,n&&"light",a==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&a==="vertical"&&"withChildrenVertical",o==="right"&&a!=="vertical"&&"textAlignRight",o==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},$,l)},T=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.absolute&&i.absolute,i[e.variant],e.light&&i.light,e.orientation==="vertical"&&i.vertical,e.flexItem&&i.flexItem,e.children&&i.withChildren,e.children&&e.orientation==="vertical"&&i.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&i.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:D(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>r({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>r({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}),({theme:t,ownerState:i})=>r({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:t})=>r({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),B=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.wrapper,e.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>r({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),b=w.forwardRef(function(i,e){const l=R({props:i,name:"MuiDivider"}),{absolute:s=!1,children:n,className:a,component:o=n?"div":"hr",flexItem:d=!1,light:p=!1,orientation:x="horizontal",role:h=o!=="hr"?"separator":void 0,textAlign:u="center",variant:m="fullWidth"}=l,A=C(l,I),c=r({},l,{absolute:s,component:o,flexItem:d,light:p,orientation:x,role:h,textAlign:u,variant:m}),g=j(c);return v.jsx(T,r({as:o,className:L(g.root,a),role:h,ref:e,ownerState:c},A,{children:n?v.jsx(B,{className:g.wrapper,ownerState:c,children:n}):null}))});b.muiSkipListHighlight=!0;const k=b;export{k as D};
