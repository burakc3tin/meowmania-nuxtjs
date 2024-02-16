<template>
   <div class="welcome-container">
     <img src="https://i.hizliresim.com/r81qze6.jpg" alt="Background Image" class="background-image" />
     <div class="overlay"></div>
     <div class="welcome-text">
       <h2>Welcome to MeowMania</h2>
       <button @click="goToLogin">Login</button>
     </div>
   </div>
 </template>
 
 <script setup>
  
 const goToLogin = () => {
   navigateTo('/login');  
 };
 </script>
 
 <style scoped>
 .welcome-container {
   position: relative;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   font-family: "Architects Daughter", cursive;
 }
 
 .background-image {
   object-fit: cover;
   width: 100%;
   height: 100%;
   filter: brightness(60%) sepia(30%);  
 }
 
 .overlay {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5); 
 }
 
 .welcome-text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: center;
   color: white;
 }
 
 h2 {
   font-size: 2.5rem;
 }
 
 button {
   margin-top: 20px;
   padding-right: 2em;
   padding-left: 2em;
   padding-top: 0.5em;
   padding-bottom: 0.5em;
   font-size: 2rem;
   color: white;
   background-color: #e0684b;  
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-family: "Architects Daughter", cursive;
   transition: background-color 0.6s ease, font-size 0.6s ease; 
 }
 
 button:hover {
   background-color: #2980b9; 
   font-size: 2.5rem;  
 }
 
 /* Ekran boyutu 1024 pikselden büyükse */
 @media screen and (min-width: 370px) {
   button {
      font-size: 1.5rem;  
    }
 }
 @media screen and (min-width: 1024px) {
   h2 {
     font-size: 4rem;  
   }
 
   button {
     font-size: 2rem;  
   }
 
   button:hover {
     font-size: 3rem;  
     background-color: #292342;
     border-radius: 20px;
     cursor: pointer;
     font-family: "Architects Daughter", cursive;
   }
 }

 
 </style>
 
 