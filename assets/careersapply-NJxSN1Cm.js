import{h as _,f as C,i as J,o as q,g as y,j as e,d as F,r as c,k as m,u as U,B as O,V,N as g,H as G,a as W,C as z,S as K,e as Q,c as X,R as Y,b as Z}from"./bootstrap.min-BemZxS_X.js";import{F as h}from"./Form-CWMUusRb.js";import{B as ee}from"./Button-YKPfUgIf.js";function re(a,r){if(a!=null){if(typeof a=="function"){a(r);return}try{a.current=r}catch{throw new Error(`Cannot assign value '${r}' to ref '${a}'`)}}}function L(...a){return r=>{a.forEach(n=>{re(n,r)})}}var[te,T]=_({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[se,N]=_({strict:!1,name:"FormControlContext"});function oe(a){const{id:r,isRequired:n,isInvalid:t,isDisabled:l,isReadOnly:s,...f}=a,p=c.useId(),i=r||`field-${p}`,j=`${i}-label`,x=`${i}-feedback`,u=`${i}-helptext`,[k,S]=c.useState(!1),[E,I]=c.useState(!1),[v,P]=c.useState(!1),w=c.useCallback((o={},d=null)=>({id:u,...o,ref:L(d,R=>{R&&I(!0)})}),[u]),M=c.useCallback((o={},d=null)=>({...o,ref:d,"data-focus":m(v),"data-disabled":m(l),"data-invalid":m(t),"data-readonly":m(s),id:o.id!==void 0?o.id:j,htmlFor:o.htmlFor!==void 0?o.htmlFor:i}),[i,l,v,t,s,j]),D=c.useCallback((o={},d=null)=>({id:x,...o,ref:L(d,R=>{R&&S(!0)}),"aria-live":"polite"}),[x]),$=c.useCallback((o={},d=null)=>({...o,...f,ref:d,role:"group","data-focus":m(v),"data-disabled":m(l),"data-invalid":m(t),"data-readonly":m(s)}),[f,l,v,t,s]),A=c.useCallback((o={},d=null)=>({...o,ref:d,role:"presentation","aria-hidden":!0,children:o.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!s,isDisabled:!!l,isFocused:!!v,onFocus:()=>P(!0),onBlur:()=>P(!1),hasFeedbackText:k,setHasFeedbackText:S,hasHelpText:E,setHasHelpText:I,id:i,labelId:j,feedbackId:x,helpTextId:u,htmlProps:f,getHelpTextProps:w,getErrorMessageProps:D,getRootProps:$,getLabelProps:M,getRequiredIndicatorProps:A}}var b=C(function(r,n){const t=J("Form",r),l=q(r),{getRootProps:s,htmlProps:f,...p}=oe(l),i=y("chakra-form-control",r.className);return e.jsx(se,{value:p,children:e.jsx(te,{value:t,children:e.jsx(F.div,{...s({},n),className:i,__css:t.container})})})});b.displayName="FormControl";var ae=C(function(r,n){const t=N(),l=T(),s=y("chakra-form__helper-text",r.className);return e.jsx(F.div,{...t==null?void 0:t.getHelpTextProps(r,n),__css:l.helperText,className:s})});ae.displayName="FormHelperText";var H=C(function(r,n){var t;const l=U("FormLabel",r),s=q(r),{className:f,children:p,requiredIndicator:i=e.jsx(B,{}),optionalIndicator:j=null,...x}=s,u=N(),k=(t=u==null?void 0:u.getLabelProps(x,n))!=null?t:{ref:n,...x};return e.jsxs(F.label,{...k,className:y("chakra-form__label",s.className),__css:{display:"block",textAlign:"start",...l},children:[p,u!=null&&u.isRequired?i:j]})});H.displayName="FormLabel";var B=C(function(r,n){const t=N(),l=T();if(!(t!=null&&t.isRequired))return null;const s=y("chakra-form__required-indicator",r.className);return e.jsx(F.span,{...t==null?void 0:t.getRequiredIndicatorProps(r,n),__css:l.requiredIndicator,className:s})});B.displayName="RequiredIndicator";function ne(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsxs(V,{spacing:"10",children:[e.jsx(g,{id:"nav-bar",variant:"underline",className:"justify-content-center",children:e.jsxs(G,{spacing:10,children:[e.jsx(W.Brand,{href:"/src/",children:e.jsx("img",{src:"/assets/NexusLogo.png",width:"60",height:"60",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),e.jsxs(g.Item,{children:[" ",e.jsx(g.Link,{id:"nav",href:"/roadmap/",children:"Updates"})]}),e.jsx(g.Item,{children:e.jsx(g.Link,{id:"nav",href:"/careers/",children:"Careers"})})]})}),e.jsx(z,{children:e.jsx("h1",{id:"headertxt",children:" Join Us"})}),e.jsxs(K,{spacing:"10",children:[e.jsxs(b,{isRequired:!0,children:[e.jsx(h.Label,{id:"txt",children:"Full Name"}),e.jsx(h.Control,{type:"email",placeholder:"John Doe"})]}),e.jsxs(b,{isRequired:!0,children:[e.jsx(h.Label,{id:"txt",children:"Email address"}),e.jsx(h.Control,{type:"email",placeholder:"johndoe@example.com"})]}),e.jsxs(b,{isRequired:!0,children:[e.jsxs(H,{id:"txt",children:[" ","Select which Job you are applying for"]}),e.jsxs(h.Select,{"aria-label":"Default select example",children:[e.jsx("option",{children:"Select Below"}),e.jsx("option",{value:"1",children:"Frontend Developer"}),e.jsx("option",{value:"2",children:"Backend Developer"}),e.jsx("option",{value:"3",children:"AI/ML Engineer (NLP, LLM)"}),e.jsx("option",{value:"3",children:"Cybersecurity Engineer"}),e.jsx("option",{value:"3",children:"Cloud Engineer (AWS)"})]})]}),e.jsxs(h.Group,{controlId:"formFile",className:"mb-3",children:[e.jsx(h.Label,{id:"txt",children:"Upload your resume:"}),e.jsx(h.Control,{type:"file"})]}),e.jsx(ee,{variant:"dark",type:"submit",children:" Submit "}),""]})]})}),e.jsx("footer",{id:"footer",children:"Copyright © 2024 Nexus."})]})}const le=Q({config:{initialColorMode:"dark",useSystemColorMode:!1}});X.createRoot(document.getElementById("root")).render(e.jsx(Y.StrictMode,{children:e.jsx(Z,{theme:le,children:e.jsx(ne,{})})}));