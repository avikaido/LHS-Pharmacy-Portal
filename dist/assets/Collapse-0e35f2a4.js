import{a5 as o,r as y,aP as tt,a4 as et,j as C,bU as nt}from"./index-1d78c4ac.js";import{g as it,c as ot,s as T,b as rt,u as st,d as at,e as lt}from"./Box-3b2e6d90.js";import{T as pt,g as L}from"./utils-f13413e5.js";import{u as dt}from"./Grid-ba112631.js";function ct(n){return it("MuiCollapse",n)}ot("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ht=n=>{const{orientation:e,classes:r}=n,d={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return lt(d,ct,r)},mt=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ft=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),gt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),N=y.forwardRef(function(e,r){const d=tt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:U,className:A,collapsedSize:f="0px",component:_,easing:$,in:D,onEnter:W,onEntered:j,onEntering:I,onExit:M,onExited:k,onExiting:P,orientation:b="vertical",style:z,timeout:a=nt.standard,TransitionComponent:q=pt}=d,B=et(d,ut),g=o({},d,{orientation:b,collapsedSize:f}),c=ht(g),F=dt(),G=rt(),l=y.useRef(null),v=y.useRef(),x=typeof f=="number"?`${f}px`:f,u=b==="horizontal",h=u?"width":"height",E=y.useRef(null),J=st(r,E),p=t=>i=>{if(t){const s=E.current;i===void 0?t(s):t(s,i)}},R=()=>l.current?l.current[u?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&u&&(l.current.style.position="absolute"),t.style[h]=x,W&&W(t,i)}),O=p((t,i)=>{const s=R();l.current&&u&&(l.current.style.position="");const{duration:m,easing:w}=L({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const H=F.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${H}ms`,v.current=H}else t.style.transitionDuration=typeof m=="string"?m:`${m}ms`;t.style[h]=`${s}px`,t.style.transitionTimingFunction=w,I&&I(t,i)}),Q=p((t,i)=>{t.style[h]="auto",j&&j(t,i)}),V=p(t=>{t.style[h]=`${R()}px`,M&&M(t)}),X=p(k),Y=p(t=>{const i=R(),{duration:s,easing:m}=L({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const w=F.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${w}ms`,v.current=w}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[h]=x,t.style.transitionTimingFunction=m,P&&P(t)}),Z=t=>{a==="auto"&&G.start(v.current||0,t),S&&S(E.current,t)};return C.jsx(q,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:E,timeout:a==="auto"?null:a},B,{children:(t,i)=>C.jsx(mt,o({as:_,className:at(c.root,A,{entered:c.entered,exited:!D&&x==="0px"&&c.hidden}[t]),style:o({[u?"minWidth":"minHeight"]:x},z),ref:J},i,{ownerState:o({},g,{state:t}),children:C.jsx(ft,{ownerState:o({},g,{state:t}),className:c.wrapper,ref:l,children:C.jsx(gt,{ownerState:o({},g,{state:t}),className:c.wrapperInner,children:U})})}))}))});N.muiSupportAuto=!0;const Ct=N;export{Ct as C};