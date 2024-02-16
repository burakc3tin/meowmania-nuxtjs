export async function fetchCatData() {
    try {
      const response = await fetch('/api'); // API endpoint'inizi uygun şekilde değiştirin
      return response; // Doğrudan response nesnesini döndürüyoruz
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu:', error);
      return null;
    }
  }