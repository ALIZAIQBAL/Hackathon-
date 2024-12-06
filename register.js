import{auth,createUserWithEmailAndPassword}from "./firebase.js";
const signup =()=>{
    const name=document.getElementById('name');

const email=document.getElementById('email');


const password=document.getElementById('password');

const confirmPassword=document.getElementById('confirm-password');
  
   createUserWithEmailAndPassword(auth,name.value,email.value,password.value,confirmPassword.value)
  .then((userCredential) => {
   const user = userCredential.user;
   console.log("user",user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",error)
  });
}

let logRegBtn =document.getElementById("logRegBtn");
logRegBtn.addEventListener("click",signup);








