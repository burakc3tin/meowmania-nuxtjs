import { fetchCatData } from '~/api/cat';

export const getCatImageUrl = async () => {
    try {
      const response = await fetchCatData();
      if (response && response.ok) {
        const data = await response.json();
        return data[0].url;
      } else {
        console.error('API isteği başarısız:');
        return null;
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu:', error);
      return null;
    }
  };
  