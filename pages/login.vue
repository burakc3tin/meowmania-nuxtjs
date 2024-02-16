<script setup lang="ts">
const uselogin = useLogin();
const username = ref('');
const password = ref('');

const loginUser = async () => {
    const success = await uselogin.login({ username: username.value, password: password.value });
    if (success) {
        // Kullanıcı giriş yaptığında yönlendirme
        await navigateTo('/main');
    } else {
        alert('Hatalı kullanıcı adı veya şifre');
    }
};
</script>

<template>
<div class="login-container">
    <div class="background-image"></div>

    <div class="login-form">
        <h2>Login</h2>
        <input v-model="username" placeholder="username: admin" />
        <input v-model="password" placeholder="password: admin" type="password" />
        <button @click="loginUser">Login</button>
    </div>
</div>
</template>

<style scoped>
.login-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.hizliresim.com/md9gxmb.jpg');
  background-size: cover;
  filter: brightness(30%); /* İstediğiniz parlaklık değerini kullanabilirsiniz */
}

.login-form {
  text-align: center;
  position: relative;
  z-index: 1; /* Formu öne çıkararak arka plan resminin üzerine gelmesini sağlar */
  max-width: 400px;
  width: 100%;
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(208, 186, 223, 0.8);  

   @media screen and (min-width: 1024px) {
    max-width: 600px; 
    padding: 3em;
 
  }
}

.login-form h2{
    font-family: "Architects Daughter", cursive;
    font-size: 3em;
    padding-bottom: 0.7em;
    color:#473a73;
    letter-spacing: 25px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: "Architects Daughter", cursive;
    background-color: rgba(239, 226, 247, 0.8);  

    box-sizing: border-box;
    color:#511da5;
    @media screen and (min-width: 1024px) {
        padding: 20px;
        font-size: 1.2em;
    
        
      }
}

button {
    width: 100%;
    padding: 10px;
    background-color: #2a1360;
    font-family: "Architects Daughter", cursive;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 1em;
    transition: background-color 0.3s ease, letter-spacing 0.3s ease; /* letter-spacing ekleniyor */

    @media screen and (min-width: 1024px) {
        font-size: 1.4em;
        font-weight: bold;
        padding: 20px;
      }
}

button:hover {
    background-color: rgb(45, 31, 148);
    letter-spacing: 2px;
}

</style>

