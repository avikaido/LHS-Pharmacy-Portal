import{a5 as p,r as f,a4 as k,j as b}from"./index-1d78c4ac.js";import{d as y,e as F,p as T,f as I,P as j,g as L,u as O,b as R,M as _,h as K,C as E}from"./index-fee8f92e.js";import{u as g}from"./useThemeProps-fa04b35d.js";import{g as U,c as N,s as h,T as S,e as W}from"./Box-3b2e6d90.js";const M=e=>e.length===1&&e[0]==="year",x=e=>e.length===2&&e.indexOf("month")!==-1&&e.indexOf("year")!==-1,A=(e,t)=>M(e)?{inputFormat:t.formats.year}:x(e)?{disableMaskedInput:!0,inputFormat:t.formats.monthAndYear}:{inputFormat:t.formats.keyboardDate};function Y(e,t){var r;const o=y(),a=F(),s=g({props:e,name:t}),i=(r=s.views)!=null?r:["year","day"];return p({openTo:"day",disableFuture:!1,disablePast:!1},A(i,o),s,{views:i,minDate:T(o,s.minDate,a.minDate),maxDate:T(o,s.maxDate,a.maxDate)})}const q={emptyValue:null,getTodayValue:e=>e.date(),parseInput:I,areValuesEqual:(e,t,r)=>e.isEqual(t,r)};function B(e){return U("MuiDatePickerToolbar",e)}N("MuiDatePickerToolbar",["root","title"]);const $=["parsedValue","isLandscape","isMobileKeyboardViewOpen","onChange","toggleMobileKeyboardView","toolbarFormat","toolbarPlaceholder","toolbarTitle","views"],z=e=>{const{classes:t}=e;return W({root:["root"],title:["title"]},B,t)},G=h(j,{name:"MuiDatePickerToolbar",slot:"Root",overridesResolver:(e,t)=>t.root})({}),H=h(S,{name:"MuiDatePickerToolbar",slot:"Title",overridesResolver:(e,t)=>t.title})(({ownerState:e})=>p({},e.isLandscape&&{margin:"auto 16px auto auto"})),J=f.forwardRef(function(t,r){const o=g({props:t,name:"MuiDatePickerToolbar"}),{parsedValue:a,isLandscape:s,isMobileKeyboardViewOpen:i,toggleMobileKeyboardView:P,toolbarFormat:m,toolbarPlaceholder:c="––",toolbarTitle:u,views:n}=o,d=k(o,$),l=y(),V=L(),D=z(o),C=u??V.datePickerDefaultToolbarTitle,w=f.useMemo(()=>a?m?l.formatByString(a,m):M(n)?l.format(a,"year"):x(n)?l.format(a,"month"):/en/.test(l.getCurrentLocaleCode())?l.format(a,"normalDateWithWeekday"):l.format(a,"normalDate"):c,[a,m,c,l,n]),v=o;return b.jsx(G,p({ref:r,toolbarTitle:C,isMobileKeyboardViewOpen:i,toggleMobileKeyboardView:P,isLandscape:s,className:D.root},d,{children:b.jsx(H,{variant:"h4",align:s?"left":"center",ownerState:v,className:D.title,children:w})}))}),Q=["ToolbarComponent","value","onChange","components","componentsProps"],oe=f.forwardRef(function(t,r){const o=Y(t,"MuiMobileDatePicker"),a=O(o)!==null,{pickerProps:s,inputProps:i,wrapperProps:P}=R(o,q),{ToolbarComponent:m=J,components:c,componentsProps:u}=o,n=k(o,Q),d=p({},i,n,{components:c,componentsProps:u,ref:r,validationError:a});return b.jsx(_,p({},n,P,{DateInputProps:d,PureDateInputComponent:K,components:c,componentsProps:u,children:b.jsx(E,p({},s,{autoFocus:!0,toolbarTitle:o.label||o.toolbarTitle,ToolbarComponent:m,DateInputProps:d,components:c,componentsProps:u},n))}))});export{J as D,oe as M,q as d,Y as u};