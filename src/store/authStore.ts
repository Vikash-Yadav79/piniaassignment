

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as any, // Adjust the type based on your user data structure
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        // Make an API call to authenticate the user
        // For demonstration purposes, simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Assuming successful authentication, set isAuthenticated to true and store user data
        this.isAuthenticated = true;
        this.user = { email }; // Placeholder for user data, adjust as needed

        // Return true to indicate successful login
        return true;
      } catch (error) {
        // Handle authentication error
        console.error('Login failed:', error);
        // Return false to indicate login failure
        return false;
      }
    },

    logout() {
          this.isAuthenticated = false;
      this.user = null;
    },
  },
});
