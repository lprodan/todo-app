import{j as s,L as o,s as l,a as c}from"./index-r8o4uK72.js";import{F as m,a as d}from"./index.esm--mIbDDzt.js";import{S as u,E as h}from"./SignupSchema-QdAmJgz4.js";import{P as p,A as b}from"./AlternativeAuth-I3nLhKlb.js";function w(){const r=({email:t,password:n},{setErrors:e})=>{l(c,t,n).then(a=>{const i=a.user;console.log(i)}).catch(a=>{switch(a.code){case"auth/invalid-credential":e({email:"Your login or password is incorrect"});break;case"auth/too-many-requests":e({email:"Too many attempts, please try again later"})}})};return s.jsx("div",{className:"auth-container",children:s.jsx(m,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:r,children:({values:t})=>s.jsxs(d,{className:"submit",children:[s.jsx(h,{}),s.jsx(p,{}),s.jsxs("div",{className:"btn-container",children:[s.jsx(o,{to:"/auth/reset-password",className:"btn btn-auth btn-forgot-pass",title:"ForgotPassword",state:t.email,children:"Forgot your password?"}),s.jsx("button",{className:"btn btn-submit",type:"submit",title:"Submit",children:"Log In"}),s.jsx("p",{children:"or"}),s.jsx(b,{}),s.jsxs("div",{className:"auth-container-footer",children:[s.jsx("span",{children:"Not registered yet?"}),s.jsx(o,{to:"/auth/signup",className:"btn btn-auth btn-login",title:"Sign Up",children:"Sign Up"})]})]})]})})})}export{w as default};