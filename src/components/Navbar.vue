<template>
    <nav class="nav">
      <RouterLink to="/">About Us</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </template>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: #e0e0e0;
    padding: 15px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  .router-link-active {
    color: #0077cc;
  }
  </style>
  