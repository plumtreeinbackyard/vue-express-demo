<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container">
        <div class="row justify-content-between">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="width: 100%">
            <router-link to="/" class="navbar-brand">Vue/Express Demo</router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin" class="nav-link">Admin</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/cart" class="nav-link">Cart</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
