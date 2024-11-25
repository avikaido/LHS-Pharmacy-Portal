import{r as i,j as v,a5 as C,aO as Q,aP as H,a4 as P,aQ as w}from"./index-1d78c4ac.js";import{u as Y,a as M,b as J,g as D,c as B,s as y,d as V,e as F}from"./Box-3b2e6d90.js";import{e as j,P as Z,u as ee,a as ne}from"./Grid-ba112631.js";import{o as L}from"./useId-521a9597.js";import{G as te}from"./Grow-cf41a8df.js";function z(e){return e.substring(2).toLowerCase()}function oe(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function re(e){const{children:n,disableReactTree:s=!1,mouseEvent:o="onClick",onClickAway:l,touchEvent:u="onTouchEnd"}=e,g=i.useRef(!1),d=i.useRef(null),h=i.useRef(!1),b=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const m=Y(n.ref,d),f=M(a=>{const c=b.current;b.current=!1;const k=L(d.current);if(!h.current||!d.current||"clientX"in a&&oe(a,k))return;if(g.current){g.current=!1;return}let t;a.composedPath?t=a.composedPath().indexOf(d.current)>-1:t=!k.documentElement.contains(a.target)||d.current.contains(a.target),!t&&(s||!c)&&l(a)}),x=a=>c=>{b.current=!0;const k=n.props[a];k&&k(c)},E={ref:m};return u!==!1&&(E[u]=x(u)),i.useEffect(()=>{if(u!==!1){const a=z(u),c=L(d.current),k=()=>{g.current=!0};return c.addEventListener(a,f),c.addEventListener("touchmove",k),()=>{c.removeEventListener(a,f),c.removeEventListener("touchmove",k)}}},[f,u]),o!==!1&&(E[o]=x(o)),i.useEffect(()=>{if(o!==!1){const a=z(o),c=L(d.current);return c.addEventListener(a,f),()=>{c.removeEventListener(a,f)}}},[f,o]),v.jsx(i.Fragment,{children:i.cloneElement(n,E)})}function se(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:o,open:l,resumeHideDuration:u}=e,g=J();i.useEffect(()=>{if(!l)return;function t(r){r.defaultPrevented||(r.key==="Escape"||r.key==="Esc")&&(o==null||o(r,"escapeKeyDown"))}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[l,o]);const d=M((t,r)=>{o==null||o(t,r)}),h=M(t=>{!o||t==null||g.start(t,()=>{d(null,"timeout")})});i.useEffect(()=>(l&&h(n),g.clear),[l,n,h,g]);const b=t=>{o==null||o(t,"clickaway")},m=g.clear,f=i.useCallback(()=>{n!=null&&h(u??n*.5)},[n,u,h]),x=t=>r=>{const p=t.onBlur;p==null||p(r),f()},E=t=>r=>{const p=t.onFocus;p==null||p(r),m()},a=t=>r=>{const p=t.onMouseEnter;p==null||p(r),m()},c=t=>r=>{const p=t.onMouseLeave;p==null||p(r),f()};return i.useEffect(()=>{if(!s&&l)return window.addEventListener("focus",f),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",m)}},[s,l,f,m]),{getRootProps:(t={})=>{const r=C({},j(e),j(t));return C({role:"presentation"},t,r,{onBlur:x(r),onFocus:E(r),onMouseEnter:a(r),onMouseLeave:c(r)})},onClickAway:b}}function ae(e){return D("MuiSnackbarContent",e)}B("MuiSnackbarContent",["root","message","action"]);const ie=["action","className","message","role"],ce=e=>{const{classes:n}=e;return F({root:["root"],action:["action"],message:["message"]},ae,n)},le=y(Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,s=Q(e.palette.background.default,n);return C({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(s),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),ue=y("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),de=y("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),fe=i.forwardRef(function(n,s){const o=H({props:n,name:"MuiSnackbarContent"}),{action:l,className:u,message:g,role:d="alert"}=o,h=P(o,ie),b=o,m=ce(b);return v.jsxs(le,C({role:d,square:!0,elevation:6,className:V(m.root,u),ownerState:b,ref:s},h,{children:[v.jsx(ue,{className:m.message,ownerState:b,children:g}),l?v.jsx(de,{className:m.action,ownerState:b,children:l}):null]}))}),pe=fe;function me(e){return D("MuiSnackbar",e)}B("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ge=["onEnter","onExited"],he=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],be=e=>{const{classes:n,anchorOrigin:s}=e,o={root:["root",`anchorOrigin${w(s.vertical)}${w(s.horizontal)}`]};return F(o,me,n)},A=y("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,n[`anchorOrigin${w(s.anchorOrigin.vertical)}${w(s.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const s={left:"50%",right:"auto",transform:"translateX(-50%)"};return C({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:C({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&s,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ke=i.forwardRef(function(n,s){const o=H({props:n,name:"MuiSnackbar"}),l=ee(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:g,anchorOrigin:{vertical:d,horizontal:h}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:m,className:f,ClickAwayListenerProps:x,ContentProps:E,disableWindowBlurListener:a=!1,message:c,open:k,TransitionComponent:t=te,transitionDuration:r=u,TransitionProps:{onEnter:p,onExited:O}={}}=o,N=P(o.TransitionProps,ge),$=P(o,he),R=C({},o,{anchorOrigin:{vertical:d,horizontal:h},autoHideDuration:b,disableWindowBlurListener:a,TransitionComponent:t,transitionDuration:r}),W=be(R),{getRootProps:U,onClickAway:_}=se(C({},R)),[I,T]=i.useState(!0),G=ne({elementType:A,getSlotProps:U,externalForwardedProps:$,ownerState:R,additionalProps:{ref:s},className:[W.root,f]}),X=S=>{T(!0),O&&O(S)},K=(S,q)=>{T(!1),p&&p(S,q)};return!k&&I?null:v.jsx(re,C({onClickAway:_},x,{children:v.jsx(A,C({},G,{children:v.jsx(t,C({appear:!0,in:k,timeout:r,direction:d==="top"?"down":"up",onEnter:K,onExited:X},N,{children:m||v.jsx(pe,C({message:c,action:g},E))}))}))}))}),ye=ke;export{ye as S};
