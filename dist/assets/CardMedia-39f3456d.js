import{a5 as d,r as M,aP as f,a4 as x,j as y}from"./index-1d78c4ac.js";import{g as b,c as v,s as I,d as N,e as h}from"./Box-3b2e6d90.js";function E(e){return b("MuiCardMedia",e)}v("MuiCardMedia",["root","media","img"]);const O=["children","className","component","image","src","style"],P=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return h({root:["root",t&&"media",s&&"img"]},E,o)},R=I("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})(({ownerState:e})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),S=["video","audio","picture","iframe","img"],j=["picture","img"],k=M.forwardRef(function(o,t){const s=f({props:o,name:"MuiCardMedia"}),{children:a,className:l,component:i="div",image:n,src:p,style:c}=s,u=x(s,O),r=S.indexOf(i)!==-1,C=!r&&n?d({backgroundImage:`url("${n}")`},c):c,m=d({},s,{component:i,isMediaComponent:r,isImageComponent:j.indexOf(i)!==-1}),g=P(m);return y.jsx(R,d({className:N(g.root,l),as:i,role:!r&&n?"img":void 0,ref:t,style:C,ownerState:m,src:r?n||p:void 0},u,{children:a}))}),U=k;export{U as C};
