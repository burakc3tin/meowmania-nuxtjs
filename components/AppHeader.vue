<template>
    <div class="appheader">
      
      <NuxtLink to="/" class="title">
        <Icon name="maki:animal-shelter" color="white" />
        Meow
        <span class="subtitle">Mania</span>
      </NuxtLink>
   
    </div>
  </template>
 
  
  <style scoped>
  .appheader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    background-color: #201936;
    position: relative; /* Ekranın en üstüne yapışık olmasını önlemek için */
  }
  
  .title {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-family: "Architects Daughter", cursive;
    font-weight: 600;
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-weight: 400;
    font-size: 1.3rem;
  }
   
  </style>
  