<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div class="col-4 text-left logo">
            <router-link to="/">Vue/Express Demo</router-link>
          </div>
          <div class="col-8 text-right menu-item">
            <router-link to="/">Home</router-link> |
            <router-link to="/admin">Admin</router-link> |
            <router-link to="/cart">Cart</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .logo {
  font-size: 1.25em;
  font-weight: bold;
}
#nav .menu-item {
  font-size: 0.9em;
  color: grey;
}
</style>
