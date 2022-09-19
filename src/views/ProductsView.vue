<template>
    <section class="page-section">
      <div class="container">

          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Notre offre de cafés</h1>
              <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Marque</th>                       
                        <th scope="col">Prix</th>
                        <th scope="col">Détails</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="coffee in tableCoffee" :key='coffee.id'>
                        <td scope="row">{{coffee.id}}</td>
                        <td>{{coffee.titre}}</td>
                        <td>{{coffee.marque}}</td>                       
                        <td>{{coffee.prix}} €</td>
                        <td><button @click="goToProductDetails(coffee.id)" type="button" class="btn btn-secondary btn-sm">voir</button></td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>

      </div>
    </section>
</template>

<script>
import {coffee} from '@/assets/js/Coffee'
export default {
  name: 'ProductsView',
  data:()=>({
      tableCoffee:coffee
  }),
  methods:{
      goToProductDetails(productId){
          this.$router.push({name:'productsDetails',params:{productId}})
      }
  }
}
</script>