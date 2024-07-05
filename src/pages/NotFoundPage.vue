<!-- src/views/NotFound.vue -->
<template>
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Requested URL: {{ fullUrl }}</p>
      <p>Requested PATH: {{ requestedUrl }}</p>
      <p>Client IP: {{ clientIp }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
    data() {
      return {
        fullUrl: window.location.href,
        requestedUrl: this.$route.fullPath,
        clientIp: ""
      };
    },
    created() {
      this.getClientIp();
    },
    methods: {
      async getClientIp() {
        try {
          const response = await fetch('https://api64.ipify.org?format=json'); // Sử dụng API bên ngoài để lấy IP của client
          const data = await response.json();
          this.clientIp = data.ip;
        } catch (error) {
          console.error("Failed to fetch client IP:", error);
        }
      }
    }
  };
  </script>
<style lang="">
    
</style>