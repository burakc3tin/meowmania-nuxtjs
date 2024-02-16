// Vuex store cat.ts
import { defineStore } from 'pinia';
import { fetchCatData } from '~/api/cat';

export const useCat = defineStore('cat', {
  state: () => ({
    catImageUrl: 'https://i.pinimg.com/originals/73/cb/c3/73cbc30178dde442812a34b8db91e3f1.jpg'
  }),
  
  actions: {
    async getCatImage() {
      try {
        const imageUrl = await getCatImageUrl();
        if (imageUrl) {
          this.catImageUrl = imageUrl;
          console.log('Success Cat Image Change');
        } else {
          console.error('API isteği başarısız: Geçerli bir resim URL alınamadı.');
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
    },
  },
});

import { getCatImageUrl } from '~/repositories/cat';

export { getCatImageUrl };
