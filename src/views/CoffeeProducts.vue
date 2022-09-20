<template>
  <section class="page-section">
    <div class="container">
  
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Notre Sélection</h1>
          <table class="table table-striped table-sm">
            <div class="card">
              <img src="sneakers.image" style="width:100%">
              <div class="container">
                <h4><b>Nom</b></h4>
                <p>Modèle</p>
              </div>
            </div>
            <tbody>
              <tr v-for="sneakers in result" :key="sneakers.id">
                <td>{{sneakers.name}}</td>
                <td>{{sneakers.marque}}</td>
                <td>{{sneakers.prix}}</td>
                <td><img :src="sneakers.image" ></td>
                <td>{{sneakers.description}}</td>
                <td>{{sneakers.annee}}</td>
                  <td><button @click="gotToDetails(sneakers.id)">👀</button></td>
              </tr>
              </tbody>
              </table>
          </div>
        </div>

    </div>
  </section>
</template>

<script>
import axios from 'axios'

const API_SNEAKERS = 'https://127.0.0.1:8000/sneakers';

export default {
name: 'ProductsView',
data:()=>({
  result:[]
}),

methods:{
  async getSneakers(){
    const sneakers = await axios.get(API_SNEAKERS);
    this.result=sneakers.data.message
    console.log(this.result);


  },
  gotToDetails(id){
    // this.$router.push('/products/'+coffeeId)
    this.$router.push({name:'CoffeeProductsDetails', params:{id:id}})
  }
},
async created() {
  await this.getSneakers()
},
}
</script>
