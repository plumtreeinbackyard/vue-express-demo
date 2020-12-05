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
