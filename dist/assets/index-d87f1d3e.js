import{j as e,u as j,D as b,r as d,E as S,G as I,H as C}from"./index-1d78c4ac.js";import{S as y}from"./slick-e7c84f33.js";import{bW as R,bX as T,bu as B,bt as k}from"./index.esm-4ca6571d.js";import{u as F,G as l,P as M}from"./Grid-ba112631.js";import{s as Q,B as a,T as t}from"./Box-3b2e6d90.js";import{C as h}from"./Container-9c6aa70c.js";import{S as v}from"./Stack-74791772.js";import{A as z}from"./AvatarGroup-707c9b19.js";import{A as c}from"./Avatar-49c7f2db.js";import{L as E}from"./Link-5958468e.js";import{L as H}from"./logoIcon-f8166489.js";import{C as U}from"./CardContent-97c31a3d.js";import{D as W}from"./Divider-32914f08.js";const le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABICAYAAAAZDivTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZnSURBVHgB7d1PbBRVHAfw75vZmUXaxdIWoUuUldb+IYA1RdBwYBMiGiMRDtw0khg1kQMeNNF4oBxQEr16MB4EYqIJiaIYTTAkcDBBTCPiBYlojQFDaCvaInS33ef7zTKVPwV2tzPb2dnvJ9ls6O4Ol/6+773fe7NVqAHLli1zc6klc/TlyTmuo2wQRdQknHxucmxi8MSCUWD/JCJOIdK06ljzZMqZKDSAqMbkExcv/fLdMRMESiOiIhwAWnX2bWyxkXdAVKNkRnB64OBwVEPAQkTJyM/ip1onv8Mdax5JIaIiGgBbbE77KS6ciaYG6WMhgiIZAJneC5FNTKJKSBMbERTJAHD/RQJEMSI7WIigSAaAnUpy7U+xwu1rIiIiio6qnQPY0q/duUms0BptBQVp8rHRR3SVpTFunoZNfQxeyWNwf78aQxWEHgAv9+vGMRdZU/RpEFFJlMbPV3IYCDsIQg2A53fp5XmFPlP8SRBRWUxx5myFgT2vq58QktAC4Lm3dd8k0AcimhGzfTCw9w01gBCEsg0oIz+LnygYUktbd+sVCEHgASBrfpn2g4gCM6nRZxrpjQhY4AEw6nLNTxQ0Dbh3mWY6AhZoAMjorxW6QESBk5002U5HgAINgFEHGRBRaJwkAu0FBLsEsHE/iCg0CY02BCjQAFAFNIOIQnP1FG1gAg0ANv+IQscj9ERERDRDtz0KnOnNNs1NuNs1dBZaZcy7MyCiSFMaF7XSJ1CwPteF8QOnThwZvOV7p/thd282oxLOh+blLIiopimt9xQm8zunC4Kbvqao5+HHt1vK/gRKdYOIap9Svcqyty5Id4wPnTtz7NqXrguA7lUbdpgpwW4zL4jkFxgSUcWkpp+4J92OC+fOHPV/OBUAMvJ7xU9EcZY1M4G//ZmA1wOQNb9luz9ohSYQUdxd1BO5h6Qn4B0EsmxnB4ufqG40FZv8ZgZQ7Pi7v4GI6srlidx8SyWSm0BEdWduwn3FLAEKT4OI6o6GXmcpqF4QUf3RKmNpsPlHVJcUMpH846BEVB0MAKI6pZRCAkRUd5RlwXEcBgBRPfFGfVP4llWc/DMAiOqEbduwEwkvBHwMAKKYk4K3E6b47ZvLnQFAFGNS/I7rXjfqX4sBQBRTfqPvVsUvGABEMSTrfWn23QkDgChmEqbRJ82+UvAgEFGMlFP8ggFAFBPlFr9gABDFgL/HXy4GAFGN80/3VYIBQFTD/H3+SjEAiGrUnQ75lIIBQFSj5HjvTIpfMACIapBlT3+2v1w8CFRnkq6DdHoRUo2NSCaLjaPx8TyGhkcwbB7juTwo2rymXyKY0mUA1AEp+q7ODizN3IvF6YW3fe/Zc+dx6vQZ70HRdOMtvTOhelZt0KDYWrm8B6v7VprRvtgp9kb7kRGMjo7hH/MQc8xrLS3NWNz2fzjI68cHTjIIIkam/k6FW37TYQDEVKqxAeuza6dG/LN/nsf3Az+aqf5fJgRyt/xcd2c7urvap8JAZgSHj35rAuESaPa5yWRgo79gAMSQFP/mjRuQSjV6hSsFLIVcDgmC1X0Pmms0eLOBz748xBCYZZUc9b0Te0G6vR8UG9cWv4z2B78+7D2XSz7z6+9/mBnEIsxvutvrH8i/c2wSzgr/tF+Qo7/gNmDMyLTfL/4D3qg9hkrJZw8cPORdS665ft1a0OyQs/5BF79gAMSITNtlzS9T9a8OHbntWr9U47mcdy25plx75YoeUHVJ4UvzLwwMgBiRbr84bpp9Mxn5byTXkj6C/3/4OwpUHfLVXmGM/oIBEBMy+ss03d/HD5pcV3YSkq6Lrs6loOpJJMI7rsMAiAnZuhNh7tvLNqJYuuQ+UHVYlh3a6O9dH1TzZFT29+1LCYD12Uex7YVnUa6hoeIZAukFcBlQHXLDT5gYADHQ0jrfey51r7/7gXZse/EZfPPFPmx66jGUShqCQyPFLcX0ooWgcHnNPyvcEmUAxEBrczEA5Iaecsis4a0dr2KXeaTbSitov7mYmtcACpeywi9PBkAMTJ3zz1W27bfZzAL2vv9OSe/17x9IulwChM22w53+CwYAmebeSWx96TVQtFhVmAHwduAY8A/8zDPbgOWQbb03d77r3fVXKn/kr3S2QaWpRvELBkAMjI0Vb9KRL/kohRT+ex98hH0ff1r2DT6trc3e8/BQ+fcXUOlUlQLgP38Mt/xeb7gKAAAAAElFTkSuQmCC";const p="/assets/user1-e58c4341.jpg",g="/assets/user2-35f9ef47.jpg",m="/assets/user3-7390605b.jpg",u="/assets/user4-5b9611ac.jpg",L="/assets/user5-1a592e6a.jpg";function N(r){const{className:s,onClick:n}=r;return e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",className:s,sx:{cursor:"pointer",position:"absolute",top:{xs:"unset ",sm:"-100px"},bottom:{xs:"-60px",sm:"unset"},right:0,backgroundColor:i=>i.palette.grey[100],width:"48px",height:"48px",borderRadius:"50%"},onClick:n,children:e.jsx(R,{})})}function P(r){const{className:s,onClick:n}=r;return e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",className:s,sx:{cursor:"pointer",position:"absolute",top:{xs:"unset ",sm:"-100px"},bottom:{xs:"-60px",sm:"unset"},right:"60px",backgroundColor:i=>i.palette.grey[100],width:"48px",height:"48px",borderRadius:"50%"},onClick:n,children:e.jsx(T,{})})}const O=()=>{const r=F(),s={padding:"0 30px"},n={dots:!1,infinite:!0,speed:500,slidesToShow:4,className:"slider variable-width",centerMode:!1,slidesToScroll:4,nextArrow:e.jsx(N,{}),prevArrow:e.jsx(P,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},i=Q(a)(()=>({backgroundColor:r.palette.mode==="dark"?r.palette.background.default:"white",maxWidth:"calc(100% - 51px)",marginLeft:"15px",borderRadius:"8px",marginTop:"-30px !important",boxShadow:"0px 6px 12px rgba(127, 145, 156, 0.12)",marginBottom:"10px"}));return e.jsxs(y,{...n,className:"leadership-carousel",style:{marginLeft:"15px"},children:[e.jsxs("div",{style:s,children:[e.jsx("img",{src:p,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Alex Martinez"}),e.jsx(t,{variant:"body1",children:"CEO & Co-Founder"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:g,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Jordan Nguyen"}),e.jsx(t,{variant:"body1",children:"CTO & Co-Founder"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:m,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Taylor Roberts"}),e.jsx(t,{variant:"body1",children:"Product Manager"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:u,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Morgan Patel"}),e.jsx(t,{variant:"body1",children:"Lead Developer"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:L,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Kiana Collins"}),e.jsx(t,{variant:"body1",children:"Software Developer"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:p,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Alex Martinez"}),e.jsx(t,{variant:"body1",children:"CEO & Co-Founder"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:g,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Jordan Nguyen"}),e.jsx(t,{variant:"body1",children:"CTO & Co-Founder"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:m,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Taylor Roberts"}),e.jsx(t,{variant:"body1",children:"Product Manager"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("img",{src:u,alt:"user-img",width:270,height:290,style:{borderRadius:"16px"}}),e.jsxs(i,{bgcolor:"white",px:"10px",py:"16px",textAlign:"center",position:"relative",zIndex:"1",children:[e.jsx(t,{variant:"h5",mb:1,children:"Morgan Patel"}),e.jsx(t,{variant:"body1",children:"Lead Developer"})]})]})]})},D=()=>e.jsx(a,{bgcolor:"primary.main",borderRadius:0,textAlign:"center",py:"14px",mt:5,position:"relative",children:e.jsx(h,{maxWidth:"lg",children:e.jsxs(v,{direction:{xs:"column",sm:"row"},spacing:"16px",justifyContent:"center",alignItems:"center",children:[e.jsxs(z,{children:[e.jsx(c,{alt:"Remy Sharp",src:j,sx:{width:44,height:44}}),e.jsx(c,{alt:"Travis Howard",src:b,sx:{width:44,height:44}})]}),e.jsx(t,{variant:"body1",color:"white",fontSize:"16px",children:"Save valuable time and effort spent searching for a solution."}),e.jsx(E,{href:"/",underline:"always",sx:{textDecorationColor:"white"},children:e.jsx(t,{component:"span",fontWeight:600,color:"white",fontSize:"16px",children:"Contact us now"})})]})})}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{sx:{py:{xs:5,lg:10}},children:e.jsxs(h,{maxWidth:"lg",children:[e.jsx(l,{container:!0,spacing:3,alignItems:"center",mb:6,children:e.jsxs(l,{item:!0,xs:12,lg:5,sm:8,children:[e.jsx(t,{variant:"h4",mb:3,sx:{fontSize:{lg:"40px",xs:"35px"}},children:"Our leadership"}),e.jsx(t,{variant:"body1",lineHeight:"32px",children:"Our robust analytics offer rich insights into the information buyers want, informing where teams"})]})}),e.jsx(O,{})]})}),e.jsx(D,{})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{variant:"h4",lineHeight:1.4,mb:3,fontWeight:700,sx:{fontSize:{lg:"40px",xs:"35px"},mr:{xs:0,lg:4}},children:["What our clients think"," ",e.jsx("img",{src:H,alt:"logo",width:40,height:40,style:{margin:"0 8px",verticalAlign:"middle"}})," ","about us?"]}),e.jsx(t,{variant:"body1",lineHeight:1.8,children:"Our users' feedback is a testament to our commitment to quality and user satisfaction. Read what they have to say about their journey with us."})]});function Z(r){const{className:s,onClick:n}=r;return e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",className:s,sx:{cursor:"pointer",position:"absolute",left:"125px",zIndex:1,bottom:"45px",right:0,backgroundColor:i=>i.palette.grey[100],width:"32px",height:"32px",borderRadius:"50%"},onClick:n,children:e.jsx(B,{strokeWidth:1.5,size:20})})}function J(r){const{className:s,onClick:n}=r;return e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",className:s,sx:{cursor:"pointer",position:"absolute",left:"48px",zIndex:1,bottom:"45px",right:"60px",backgroundColor:i=>i.palette.grey[100],width:"32px",height:"32px",borderRadius:"50%"},onClick:n,children:e.jsx(k,{strokeWidth:1.5,size:20})})}const A=[{id:1,img:j,name:"Jenny Wilson",text:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"},{id:2,img:b,name:"Jenny Wilson",text:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"},{id:3,img:S,name:"Jenny Wilson",text:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"},{id:4,img:I,name:"Jenny Wilson",text:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"},{id:5,img:C,name:"Jenny Wilson",text:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"}],V=()=>{const[r,s]=d.useState(0),[n,i]=d.useState(1),[G,f]=d.useState(1);d.useRef(null);const w={dots:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:e.jsx(Z,{}),prevArrow:e.jsx(J,{}),beforeChange:(o,x)=>{s(o),i(x)},afterChange:o=>f(o)};return e.jsx(e.Fragment,{children:e.jsx(y,{ref:o=>{},...w,children:A.map((o,x)=>e.jsx("div",{children:e.jsx(M,{variant:"outlined",sx:{borderRadius:"16px"},children:e.jsxs(U,{sx:{p:"48px !important"},children:[e.jsx(t,{variant:"h4",lineHeight:1.4,mb:3,fontWeight:600,fontSize:"24px",children:"Features avaibility"}),e.jsxs(v,{direction:"row",alignItems:"center",gap:3,mb:3,children:[e.jsx(c,{src:o.img,alt:"user"}),e.jsx(t,{variant:"body1",fontWeight:600,children:o.name})]}),e.jsx(t,{variant:"body1",lineHeight:1.8,mb:2,children:o.text}),e.jsx(W,{}),e.jsxs(t,{fontSize:"14px",fontWeight:500,ml:5,mt:3,children:[" ",n," / ",A.length]})]})})},x))})})},xe=()=>e.jsx(e.Fragment,{children:e.jsx(a,{sx:{py:{xs:5,lg:10}},children:e.jsx(h,{maxWidth:"lg",children:e.jsxs(l,{container:!0,spacing:3,alignItems:"center",justifyContent:"space-between",children:[e.jsx(l,{item:!0,xs:12,lg:5,sm:8,pr:6,children:e.jsx(Y,{})}),e.jsx(l,{item:!0,xs:12,lg:6,sm:12,children:e.jsx(l,{container:!0,spacing:3,justifyContent:"center",children:e.jsx(l,{item:!0,xs:12,lg:10,children:e.jsx(V,{})})})})]})})})});export{le as F,de as L,xe as R};