<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <a href="CoffeeHome.vue"><img src="../assets/img/S.png" height="120" alt=""></a>
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link text-uppercase text-expanded router-link-exact-path-active"
                :to="{ name: 'About' }">à propos</router-link>
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'products' }">Produits
              </router-link>
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'Store' }">Store</router-link>
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'create' }">Formulaire</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CoffeeNav'
}
</script>
<style scoped>

     li a .router-link-exact-path-active {
        color: #e6a756;
    }

</style>
