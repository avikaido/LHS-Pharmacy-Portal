import{r as d,aP as u,a4 as p,a5 as n,j as C}from"./index-1d78c4ac.js";import{g as m,c as f,s as x,d as y,e as P}from"./Box-3b2e6d90.js";import{P as R}from"./Grid-ba112631.js";function g(s){return m("MuiCard",s)}f("MuiCard",["root"]);const j=["className","raised"],v=s=>{const{classes:e}=s;return P({root:["root"]},g,e)},w=x(R,{name:"MuiCard",slot:"Root",overridesResolver:(s,e)=>e.root})(()=>({overflow:"hidden"})),M=d.forwardRef(function(e,t){const o=u({props:e,name:"MuiCard"}),{className:i,raised:r=!1}=o,l=p(o,j),a=n({},o,{raised:r}),c=v(a);return C.jsx(w,n({className:y(c.root,i),elevation:r?8:void 0,ref:t,ownerState:a},l))}),_=M;export{_ as C};