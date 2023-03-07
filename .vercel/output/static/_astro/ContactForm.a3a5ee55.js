import{r as p,R as m}from"./index.f1bc5ebf.js";var e={},b={get exports(){return e},set exports(r){e=r}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=p,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(r,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)y.call(t,o)&&!g.hasOwnProperty(o)&&(a[o]=t[o]);if(r&&r.defaultProps)for(o in t=r.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:f,type:r,key:s,ref:l,props:a,_owner:j.current}}d.Fragment=h;d.jsx=c;d.jsxs=c;(function(r){r.exports=d})(b);function N(){const[r,t]=m.useState(!1),n=async o=>{o.preventDefault();const{name:a,phoneNumber:s,postCode:l,subject:i,message:u}=o.target;await fetch("/api/contact",{method:"POST",body:JSON.stringify({name:a.value,phoneNumber:s.value,postCode:l.value,subject:i.value,message:u.value})}),t(!0)};return r?e.jsx("p",{className:"text-primary text-sans font-bold tracking-wide text-2xl px-10 text-center",children:"Thank you for getting in contact, I will get back to you at the earliest possible convenience."}):e.jsxs("form",{className:"grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-4 justify-start",name:"contact",onSubmit:n,children:[e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-secondary",htmlFor:"name",children:"Name"}),e.jsx("input",{"aria-label":"name",id:"name",type:"text",name:"name",required:!0,className:"shadow appearance-none border border-secondary border-opacity-60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-secondary",htmlFor:"phoneNumber",children:"Phone Number"}),e.jsx("input",{"aria-label":"phoneNumber",id:"phoneNumber",type:"tel",name:"phoneNumber",required:!0,className:"shadow appearance-none border border-secondary border-opacity-60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-secondary",htmlFor:"postCode",children:"Post Code"}),e.jsx("input",{"aria-label":"postCode",id:"postCode",type:"text",name:"postCode",placeholder:"6000",required:!0,className:"shadow appearance-none border border-secondary border-opacity-60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"})]}),e.jsxs("div",{class:"col-span-3",children:[e.jsx("label",{className:"font-bold text-secondary",htmlFor:"subject",children:"Subject"}),e.jsx("input",{"aria-label":"subject",id:"subject",type:"text",name:"subject",required:!0,className:"shadow appearance-none border border-secondary border-opacity-60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline mt-1"})]}),e.jsxs("div",{class:"col-span-3",children:[e.jsx("label",{className:"font-bold text-secondary",htmlFor:"message",children:"Message"}),e.jsx("textarea",{"aria-label":"message",id:"message",required:!0,name:"message",className:"shadow appearance-none border border-secondary border-opacity-60 rounded w-full py-3 px-4 text-black focus:outline-none focus:shadow-outline leading-relaxed mt-1 h-48",placeholder:"A descriptive message helps us diagnose the issue quicker so we can give you more information when we contact you. Don't forget to include brands, model names or anything you think might be relevant."})]}),e.jsx("div",{className:"flex items-baseline",children:e.jsx("button",{type:"submit",className:"bg-primary text-white font-bold px-6 py-4 rounded hover:bg-opacity-75",children:"Send Message"})})]})}export{N as default};