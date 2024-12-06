
import{auth,signInWithEmailAndPassword}from "./firebase.js";


const login =()=>{
  let username = document.getElementById("username");
  let password= document.getElementById("password");
  
  signInWithEmailAndPassword(auth,username.value, password.value)
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
logRegBtn.addEventListener("click",login)

;







