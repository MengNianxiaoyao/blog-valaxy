import{A as o,B as a}from"./app.BQ7MN7lB.js";import{u as r}from"./chunks/@vueuse/motion.BltUbIEt.js";import{H as t}from"./framework.Wgu5ILjI.js";import{c as u}from"./index.BRXJGymZ.js";function y(i){const e=t(!1),{top:n}=o(i);return a(i,([{isIntersecting:s}])=>{e.value=s}),{show:()=>{e.value||window.scrollTo(0,n.value)}}}function d(i,e){r(i,{initial:{opacity:0,y:e.y||40},enter:{opacity:1,y:0,transition:{delay:e.i*(e.delay||50),type:"spring",ease:u.easeIn,damping:8,duration:e.duration||400}}})}export{d as a,y as u};
