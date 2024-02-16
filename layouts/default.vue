<template>
    <div>
    <AppHeader/>
    <slot/>
    </div>
  </template>
  
  <style scoped>
  /* Stil tanımlamaları burada */
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  nav {
    margin-top: 1rem;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  
  main {
    padding: 2rem;
  }
  
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>