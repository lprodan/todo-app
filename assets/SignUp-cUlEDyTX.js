import{u as c,j as e,c as m,a as d}from"./index-1uVZhOT0.js";import{F as u,a as h}from"./index.esm-Th-CwHT1.js";import{S as b,E as g}from"./SignupSchema-AD2pP8Tl.js";import{P as x,A as j}from"./AlternativeAuth-qHr_5AGJ.js";function N(){const t=c(),i=({email:n,password:o},{setErrors:l})=>{m(d,n,o).then(s=>{const a=s.user;console.log(a)}).catch(s=>{switch(s.code){case"auth/email-already-in-use":l({email:"You are already registered"});break}})},r=()=>{t("/auth/login")};return e.jsx("div",{className:"auth-container",children:e.jsx(u,{initialValues:{email:"",password:""},validationSchema:b,onSubmit:i,children:e.jsxs(h,{className:"submit",children:[e.jsx(g,{}),e.jsx(x,{}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{className:"btn btn-submit",type:"submit",title:"Submit",children:"Sign Up"}),e.jsx("p",{children:"or"}),e.jsx(j,{}),e.jsxs("div",{className:"auth-container-footer",children:[e.jsx("span",{children:"Are you already registered?"}),e.jsx("button",{className:"btn btn-auth btn-login",type:"button",title:"Login",onClick:r,children:"Log In"})]})]})]})})})}export{N as default};
