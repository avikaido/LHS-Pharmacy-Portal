import{r as d,a5 as g,aP as U,a4 as B,j as i,e as z,aW as H,f as M,R as V,V as Y,aX as Z,aY as J,aZ as K,a_ as X}from"./index-1d78c4ac.js";import{P as Q}from"./PageContainer-51f17055.js";import{P as ee}from"./ProfileBanner-9a38b86d.js";import{C as $}from"./ChildCard-8626bfcd.js";import{aE as ie,E as re,aF as ae,aG as te,aH as E,aI as F,aJ as se,_ as ne,aK as le,am as oe,ax as de}from"./index.esm-4ca6571d.js";import{g as O,c as q,s as D,d as T,e as G,T as l,B as c}from"./Box-3b2e6d90.js";import{S as m}from"./Stack-74791772.js";import{S as ce}from"./Skeleton-b6b279fd.js";import{i as xe}from"./isMuiElement-a2555389.js";import{t as he}from"./toString-90183d2d.js";import{A as R}from"./Avatar-49c7f2db.js";import{T as k}from"./Tooltip-58d28098.js";import{F as C}from"./Fab-f5ac0b6f.js";import{T as _}from"./TextField-84ec9af9.js";import{B as L}from"./Button-6de5bece.js";import{B as me}from"./BlankCard-65d5aa30.js";import{G as h}from"./Grid-ba112631.js";import{C as W}from"./CardMedia-39f3456d.js";import{I as ue}from"./IconButton-6eb83b27.js";import{D as ge}from"./Divider-32914f08.js";import"./Tabs-44f41707.js";import"./debounce-517eeb3c.js";import"./ownerWindow-f1e1d6ee.js";import"./useId-521a9597.js";import"./KeyboardArrowRight-3d509d4a.js";import"./Card-ed0a9074.js";import"./CardHeader-4375bfdf.js";import"./CardContent-97c31a3d.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useThemeProps-a461f42f.js";import"./colorManipulator-94529648.js";import"./isArray-a7125649.js";import"./useSlot-a49cf6b5.js";import"./Popper-880e6f72.js";import"./Portal-8f313b54.js";import"./createPopper-04c39de4.js";import"./useControlled-05793c79.js";import"./Grow-cf41a8df.js";import"./utils-f13413e5.js";import"./FormControl-8a17c62f.js";import"./utils-5ebfb48b.js";import"./useFormControl-9666228d.js";import"./formControlState-a1fb9590.js";import"./Select-07709760.js";import"./Popover-e3ff4288.js";import"./Modal-5026ae4f.js";import"./createChainedFunction-0bab83cf.js";import"./List-eaf26c6f.js";import"./dividerClasses-40064371.js";function je(e){return O("MuiImageList",e)}q("MuiImageList",["root","masonry","quilted","standard","woven"]);const fe=d.createContext({}),A=fe,pe=["children","className","cols","component","rowHeight","gap","style","variant"],ye=e=>{const{classes:r,variant:a}=e;return G({root:["root",a]},je,r)},ve=D("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[a.variant]]}})(({ownerState:e})=>g({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},e.variant==="masonry"&&{display:"block"})),Ie=d.forwardRef(function(r,a){const o=U({props:r,name:"MuiImageList"}),{children:n,className:j,cols:f=2,component:t="ul",rowHeight:s="auto",gap:x=4,style:y,variant:u="standard"}=o,v=B(o,pe),p=d.useMemo(()=>({rowHeight:s,gap:x,variant:u}),[s,x,u]);d.useEffect(()=>{},[]);const S=u==="masonry"?g({columnCount:f,columnGap:x},y):g({gridTemplateColumns:`repeat(${f}, 1fr)`,gap:x},y),b=g({},o,{component:t,gap:x,rowHeight:s,variant:u}),I=ye(b);return i.jsx(ve,g({as:t,className:T(I.root,I[u],j),ref:a,style:S,ownerState:b},v,{children:i.jsx(A.Provider,{value:p,children:n})}))}),we=Ie;function Ce(e){return O("MuiImageListItem",e)}const Se=q("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),N=Se,be=["children","className","cols","component","rows","style"],Re=e=>{const{classes:r,variant:a}=e;return G({root:["root",a],img:["img"]},Ce,r)},ke=D("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[{[`& .${N.img}`]:r.img},r.root,r[a.variant]]}})(({ownerState:e})=>g({display:"block",position:"relative"},e.variant==="standard"&&{display:"flex",flexDirection:"column"},e.variant==="woven"&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${N.img}`]:g({objectFit:"cover",width:"100%",height:"100%",display:"block"},e.variant==="standard"&&{height:"auto",flexGrow:1})})),Le=d.forwardRef(function(r,a){const o=U({props:r,name:"MuiImageListItem"}),{children:n,className:j,cols:f=1,component:t="li",rows:s=1,style:x}=o,y=B(o,be),{rowHeight:u="auto",gap:v,variant:p}=d.useContext(A);let S="auto";p==="woven"?S=void 0:u!=="auto"&&(S=u*s+v*(s-1));const b=g({},o,{cols:f,component:t,gap:v,rowHeight:u,rows:s,variant:p}),I=Re(b);return i.jsx(ke,g({as:t,className:T(I.root,I[p],j),ref:a,style:g({height:S,gridColumnEnd:p!=="masonry"?`span ${f}`:void 0,gridRowEnd:p!=="masonry"?`span ${s}`:void 0,marginBottom:p==="masonry"?v:void 0,breakInside:p==="masonry"?"avoid":void 0},x),ownerState:b},y,{children:d.Children.map(n,w=>d.isValidElement(w)?w.type==="img"||xe(w,["Image"])?d.cloneElement(w,{className:T(I.img,w.props.className)}):w:null)}))}),Pe=Le,ze=()=>i.jsxs($,{children:[i.jsx(l,{fontWeight:600,variant:"h4",mb:2,children:"Introduction"}),i.jsx(l,{color:"textSecondary",variant:"subtitle2",mb:2,children:"Hello, I am Mathew Anderson. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),i.jsxs(m,{direction:"row",gap:2,alignItems:"center",mb:3,children:[i.jsx(ie,{size:"21"}),i.jsx(l,{variant:"h6",children:"Sir, P P Institute Of Science"})]}),i.jsxs(m,{direction:"row",gap:2,alignItems:"center",mb:3,children:[i.jsx(re,{size:"21"}),i.jsx(l,{variant:"h6",children:"xyzjonathan@gmail.com"})]}),i.jsxs(m,{direction:"row",gap:2,alignItems:"center",mb:3,children:[i.jsx(ae,{size:"21"}),i.jsx(l,{variant:"h6",children:"www.xyz.com"})]}),i.jsxs(m,{direction:"row",gap:2,alignItems:"center",mb:1,children:[i.jsx(te,{size:"21"}),i.jsx(l,{variant:"h6",children:"Newyork, USA - 100001"})]})]}),Ee=()=>{const e=z();d.useEffect(()=>{e(H())},[e]);const r=M(n=>n.userpostsReducer.gallery),[a,o]=V.useState(!0);return d.useEffect(()=>{const n=setTimeout(()=>{o(!1)},500);return()=>clearTimeout(n)},[]),i.jsxs($,{children:[i.jsx(l,{variant:"h4",children:"Photos"}),i.jsx(we,{cols:3,gap:20,children:r.map(n=>i.jsx(c,{children:a?i.jsx(i.Fragment,{children:i.jsx(ce,{variant:"square",animation:"wave",width:"100%",height:93},n.id+n.cover)}):i.jsx(Pe,{children:i.jsx("img",{srcSet:`${n.cover} 1x, ${n.cover} 2x`,alt:n.img,loading:"lazy",style:{borderRadius:8}})})},n.id))})]})};var Te=he,Me=0;function $e(e){var r=++Me;return Te(e)+r}var _e=$e;const P=Y(_e),We=({comment:e,post:r})=>{const[a,o]=d.useState(""),[n,j]=d.useState(!1),f=z(),t=async(s,x,y)=>{const v={id:P("#REPLY_"),profile:{id:P("#REPLY_"),avatar:r==null?void 0:r.profile.avatar,name:r==null?void 0:r.profile.name,time:"now"},data:{comment:y,likes:{like:!1,value:0},replies:[]}};f(Z(s,x,v)),o(""),j(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(c,{mt:2,p:3,sx:{borderColor:s=>s.palette.grey[100],borderWidth:"1px",borderStyle:"solid"},children:[i.jsxs(m,{direction:"row",gap:2,alignItems:"center",children:[i.jsx(R,{alt:"Remy Sharp",src:e==null?void 0:e.profile.avatar,sx:{width:"33px",height:"33px"}}),i.jsx(l,{variant:"h6",children:e==null?void 0:e.profile.name}),i.jsxs(l,{variant:"caption",color:"textSecondary",children:[i.jsx(E,{size:"7",fill:"",fillOpacity:"0.1",strokeOpacity:"0.1"})," ",e==null?void 0:e.profile.time]})]}),i.jsx(c,{py:2,children:i.jsx(l,{color:"textSecondary",children:e==null?void 0:e.data.comment})}),i.jsxs(m,{direction:"row",gap:1,alignItems:"center",children:[i.jsx(k,{title:"Like",placement:"top",children:i.jsx(C,{size:"small",color:e!=null&&e.data&&(e!=null&&e.data.likes)&&(e!=null&&e.data.likes.like)?"primary":"inherit",children:i.jsx(F,{size:"16"})})}),i.jsx(l,{variant:"body1",fontWeight:600,children:(e==null?void 0:e.data)&&(e==null?void 0:e.data.likes)&&(e==null?void 0:e.data.likes.value)}),i.jsx(k,{title:"Reply",placement:"top",children:i.jsx(C,{sx:{ml:2},size:"small",color:"info",onClick:()=>j(!n),children:i.jsx(se,{size:"16"})})}),(e==null?void 0:e.data.replies.length)>0?e==null?void 0:e.data.replies.length:0]})]}),e!=null&&e.data.replies?i.jsx(i.Fragment,{children:e==null?void 0:e.data.replies.map(s=>i.jsx(c,{pl:4,children:i.jsxs(c,{mt:2,p:3,sx:{borderColor:x=>x.palette.grey[100],borderWidth:"1px",borderStyle:"solid"},children:[i.jsxs(m,{direction:"row",gap:2,alignItems:"center",children:[i.jsx(R,{alt:"Remy Sharp",src:s.profile.avatar}),i.jsx(l,{variant:"h6",children:s.profile.name}),i.jsxs(l,{variant:"caption",color:"textSecondary",children:[i.jsx(E,{size:"7",fill:"",fillOpacity:"0.1",strokeOpacity:"0.1"})," ",s.profile.time]})]}),i.jsx(c,{py:2,children:i.jsx(l,{color:"textSecondary",children:s.data.comment})})]})},s.data.comment))}):"",n?i.jsx(c,{p:2,children:i.jsxs(m,{direction:"row",gap:2,alignItems:"center",children:[i.jsx(R,{alt:"Remy Sharp",src:r==null?void 0:r.profile.avatar,sx:{width:"33px",height:"33px"}}),i.jsx(_,{placeholder:"Reply",value:a,onChange:s=>o(s.target.value),variant:"outlined",fullWidth:!0}),i.jsx(L,{variant:"contained",onClick:()=>t(r.id,e.id,a),children:"Reply"})]})}):""]})},Ne=({post:e})=>{const r=z(),a=M(t=>t.customizer),o=async t=>{r(J(t))},[n,j]=d.useState(""),f=async(t,s)=>{const y={id:P("#COMMENT_"),profile:{id:P("#COMMENT_"),avatar:e==null?void 0:e.profile.avatar,name:e==null?void 0:e.profile.name,time:"now"},data:{comment:s,likes:{like:!1,value:0},replies:[]}};r(K(t,y)),j("")};return i.jsxs(me,{children:[i.jsxs(c,{p:3,children:[i.jsxs(m,{direction:"row",gap:2,alignItems:"center",children:[i.jsx(R,{alt:"Remy Sharp",src:e==null?void 0:e.profile.avatar}),i.jsx(l,{variant:"h6",children:e==null?void 0:e.profile.name}),i.jsxs(l,{variant:"caption",color:"textSecondary",children:[i.jsx(E,{size:"7",fill:"",fillOpacity:"0.1",strokeOpacity:"0.1"})," ",e==null?void 0:e.profile.time]})]}),i.jsx(c,{py:2,children:e==null?void 0:e.data.content}),e.data.images.length>0?i.jsx(c,{children:i.jsx(h,{container:!0,spacing:3,mb:2,children:e==null?void 0:e.data.images.map(t=>i.jsx(h,{item:!0,sm:12,lg:t.featured?12:6,children:i.jsx(W,{component:"img",sx:{borderRadius:a.borderRadius/4,height:360},image:t.img,alt:"cover",width:"100%"})},t.img))})}):"",e!=null&&e.data.video?i.jsx(W,{sx:{borderRadius:a.borderRadius/4,height:300,mb:2},component:"iframe",src:`https://www.youtube.com/embed/${e==null?void 0:e.data.video}`}):"",i.jsx(c,{children:i.jsxs(m,{direction:"row",gap:1,alignItems:"center",children:[i.jsx(k,{title:"Like",placement:"top",children:i.jsx(C,{size:"small",color:e!=null&&e.data&&(e!=null&&e.data.likes)&&(e!=null&&e.data.likes.like)?"primary":"inherit",onClick:()=>o(e==null?void 0:e.id),children:i.jsx(F,{size:"16"})})}),i.jsx(l,{variant:"body1",fontWeight:600,children:(e==null?void 0:e.data)&&(e==null?void 0:e.data.likes)&&(e==null?void 0:e.data.likes.value)}),i.jsx(k,{title:"Comment",placement:"top",children:i.jsx(C,{sx:{ml:2},size:"small",color:"secondary",children:i.jsx(ne,{size:"16"})})}),i.jsx(l,{variant:"body1",fontWeight:600,children:e!=null&&e.data.comments?e==null?void 0:e.data.comments.length:0}),i.jsx(k,{title:"Share",placement:"top",children:i.jsx(ue,{sx:{ml:"auto"},children:i.jsx(le,{size:"16"})})})]})}),i.jsx(c,{children:e!=null&&e.data.comments?i.jsx(i.Fragment,{children:e==null?void 0:e.data.comments.map(t=>i.jsx(We,{comment:t,post:e},t.id))}):""})]}),i.jsx(ge,{}),i.jsx(c,{p:2,children:i.jsxs(m,{direction:"row",gap:2,alignItems:"center",children:[i.jsx(R,{alt:"Remy Sharp",src:e==null?void 0:e.profile.avatar,sx:{width:"33px",height:"33px"}}),i.jsx(_,{placeholder:"Comment",value:n,onChange:t=>j(t.target.value),variant:"outlined",fullWidth:!0}),i.jsx(L,{variant:"contained",onClick:()=>f(e==null?void 0:e.id,n),children:"Comment"})]})})]})},Ue=()=>i.jsxs($,{children:[i.jsx(_,{id:"outlined-multiline-static",placeholder:"Share your thoughts",multiline:!0,fullWidth:!0,rows:4}),i.jsxs(m,{direction:"row",gap:1,mt:2,alignItems:"center",children:[i.jsx(C,{size:"small",color:"primary",children:i.jsx(oe,{size:"16"})}),i.jsxs(L,{variant:"text",color:"inherit",component:"label",children:[i.jsx("input",{hidden:!0,accept:"image/*",multiple:!0,type:"file"}),"Photo / Video"]}),i.jsxs(L,{variant:"text",color:"inherit",component:"label",startIcon:i.jsx(C,{size:"small",color:"secondary",children:i.jsx(de,{size:"16"})}),children:["Article",i.jsx("input",{hidden:!0,accept:"image/*",multiple:!0,type:"file"})]}),i.jsx(L,{variant:"contained",color:"primary",sx:{ml:"auto"},children:"Post"})]})]}),Be=()=>{const e=z();d.useEffect(()=>{e(X())},[e]);const r=M(a=>a.userpostsReducer.posts);return i.jsxs(h,{container:!0,spacing:3,children:[i.jsx(h,{item:!0,sm:12,children:i.jsx(Ue,{})}),r.map(a=>i.jsx(h,{item:!0,sm:12,children:i.jsx(Ne,{post:a})},a.id))]})},Wi=()=>i.jsx(Q,{title:"User Profile",description:"this is User Profile page",children:i.jsxs(h,{container:!0,spacing:3,children:[i.jsx(h,{item:!0,sm:12,children:i.jsx(ee,{})}),i.jsx(h,{item:!0,sm:12,lg:4,xs:12,children:i.jsxs(h,{container:!0,spacing:3,children:[i.jsx(h,{item:!0,sm:12,children:i.jsx(ze,{})}),i.jsx(h,{item:!0,sm:12,children:i.jsx(Ee,{})})]})}),i.jsx(h,{item:!0,sm:12,lg:8,xs:12,children:i.jsx(Be,{})})]})});export{Wi as default};