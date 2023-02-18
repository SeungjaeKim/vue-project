<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/event">Event Click</router-link> |
    <router-link to="/computed">Computed Click</router-link> |
    <router-link to="/watch">watch Click</router-link> |
    <router-link to="/api/list">Data Binding List Click</router-link> |
    <router-link to="/nested">Nested</router-link> |
    <router-link to="/store">Store</router-link> |
    <router-link to="/kakaologin">KakaoLogin</router-link> |
    <router-link to="/naverlogin">NaverLogin</router-link> |
    <router-link to="/googlelogin">GoogleLogin</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
