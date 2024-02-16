<template>
  <div class="image-container">
    <div class="sign-out-bar">
      <button @click="changeImage">Change Image</button>
      <button @click="logoutUser">Sign Out</button>
    </div>
    <div class="image-change-content">
      <transition :name="transitionClass" mode="out-in">
        <img :key="catImage" :src="catImage" alt="Cat Image" />
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLogin } from '../stores/login';

export default {
  setup() {
    const uselogin = useLogin();
    const catImage = ref(null);
    const transitionClass = ref('');

    const logoutUser = async () => {
      uselogin.logout();
      await navigateTo('/');
    };

    const changeImage = async () => {
      try {
        const response = await fetch('/api');

        if (response.ok) {
          const data = await response.json();
          transitionClass.value = generateRandomTransitionClass();

          // Wait for the transition to complete before changing the image
          await new Promise(resolve => setTimeout(resolve, 500));

          catImage.value = data[0].url;
        } else {
          console.error('API isteği başarısız:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
    };

    const generateRandomTransitionClass = () => {
      const transitionClasses = ['fade', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out', 'rotate'];

      // Önceki efekti hariç tutarak rastgele bir efekti seç
      const availableEffects = transitionClasses.filter(effect => effect !== transitionClass.value);
      const randomIndex = Math.floor(Math.random() * availableEffects.length);

      return availableEffects[randomIndex];
    };

    onMounted(async () => {
      const response = await fetch('/api');
      const data = await response.json();
      catImage.value = data[0].url;

      if (localStorage.getItem('isAuthenticated') !== 'true') {
        navigateTo('/');
      }
    });

    return {
      catImage,
      logoutUser,
      changeImage,
      transitionClass,
    };
  },
};
</script>

<style scoped>
.image-container {
  background-color: #38576d;
  height: 100vh;
}

.sign-out-bar {
  background-color: #3b362a;
  display: flex;
  justify-content: space-around;
  padding-top: 1em;
  padding-bottom: 1em;
}

.sign-out-bar button {
  border: none;
  font-size: 1.5rem;
  font-family: 'Architects Daughter', cursive;
  background-color: #3b362a;
  color: white;
  text-decoration: underline;
  transition: color 0.4s ease;
}

.sign-out-bar button:hover {
  color: #38576d;
  cursor: pointer;
}

.image-change-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.image-change-content img {
  max-width: 80%;
  height: auto;
  margin: auto;
  border-radius: 10px;
}

.image-change-content button {
  background-color: orange;
  border: none;
  margin-bottom: 1em;
  color: white;
  font-family: 'Architects Daughter', cursive;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5em;
  border-radius: 10px;
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.zoom-in-enter-active,
.zoom-in-leave-active,
.zoom-out-enter-active,
.zoom-out-leave-active,
.rotate-enter-active,
.rotate-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to,
.slide-left-enter,
.slide-left-leave-to,
.slide-right-enter,
.slide-right-leave-to,
.zoom-in-enter,
.zoom-in-leave-to,
.zoom-out-enter,
.zoom-out-leave-to,
.rotate-enter,
.rotate-leave-to {
  opacity: 0;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}

.zoom-in-enter,
.zoom-out-enter,
.rotate-enter {
  transform: scale(1.2);
}

.zoom-in-enter,
.zoom-out-enter,
.rotate-enter {
  transform: scale(0.8);
}

.zoom-in-enter,
.zoom-out-enter,
.rotate-enter {
  transform: rotate(180deg);
}
</style>
