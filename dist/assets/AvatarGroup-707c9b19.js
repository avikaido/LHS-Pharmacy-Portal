import{a5 as l,r as n,aP as S,a4 as U,j as P}from"./index-1d78c4ac.js";import{c as _,g as L,s as D,d as x,e as V}from"./Box-3b2e6d90.js";import{a as k,A as w}from"./Avatar-49c7f2db.js";function z(s){return L("MuiAvatarGroup",s)}const I=_("MuiAvatarGroup",["root","avatar"]),W=I,q=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],C={small:-16,medium:null},B=s=>{const{classes:a}=s;return V({root:["root"],avatar:["avatar"]},z,a)},F=D("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${W.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&C[a.spacing]!==void 0?C[a.spacing]:-a.spacing;return{[`& .${k.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),H=n.forwardRef(function(a,r){var A;const i=S({props:a,name:"MuiAvatarGroup"}),{children:M,className:N,component:f="div",componentsProps:$={},max:c=5,renderSurplus:g,slotProps:y={},spacing:b="medium",total:j,variant:p="circular"}=i,E=U(i,q);let t=c<2?2:c;const h=l({},i,{max:c,spacing:b,component:f,variant:p}),u=B(h),v=n.Children.toArray(M).filter(o=>n.isValidElement(o)),e=j||v.length;e===t&&(t+=1),t=Math.min(e+1,t);const G=Math.min(v.length,t-1),m=Math.max(e-t,e-G,0),R=g?g(m):`+${m}`,d=(A=y.additionalAvatar)!=null?A:$.additionalAvatar;return P.jsxs(F,l({as:f,ownerState:h,className:x(u.root,N),ref:r},E,{children:[m?P.jsx(w,l({variant:p},d,{className:x(u.avatar,d==null?void 0:d.className),children:R})):null,v.slice(0,G).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,u.avatar),variant:o.props.variant||p}))]}))}),Q=H;export{Q as A};