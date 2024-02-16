// Vuex store login.ts

export const useLogin = defineStore('login', {
    state: () => ({
      isAuthenticated: process.client ? localStorage.getItem('isAuthenticated') === 'true' || false : false,
      username: process.client ? localStorage.getItem('username') || '' : ''
    }),
    
    actions: {
      login({ username, password }: { username: string; password: string }) {
        // Kullanıcı adı ve şifre kontrolü
        if (username === 'admin' && password === 'admin') {
          this.isAuthenticated = true;
          this.username = username;
          
          if (process.client) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', username);
          }
          
          return true;
        } else {
          return false;
        }
      },
  
      logout() {
        this.isAuthenticated = false;
        this.username = '';
        
        if (process.client) {
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('username');
        }
      }
    },
  });
  