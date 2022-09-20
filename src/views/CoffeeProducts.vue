<template>
  <section class="page-section">
    <div class="container">

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Nos sneakers</h1>
            
            <button class="btn btn-primary btn-xl" @click="gotToUpdate('new')">Nouvel Article</button>
            <br>
            <br>
            <table class="table table-striped table-sm">
              <thead>
                  <tr>
                      <th scope="col">name</th>
                      <th scope="col">Marque</th>                       
                      <th scope="col">Prix</th>
                      <th scope="col">Image</th>
                      <th scope="col">Description</th>
                      <th scope="col">Annee</th>
                      <th scope="col">voir</th>
                      <th scope="col">edit</th>
                      <th scope="col">delete</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="sneakers in result" :key="sneakers.id">
                  <td>{{sneakers.name}}</td>
                  <td>{{sneakers.marque}}</td>
                  <td>{{sneakers.prix}} €</td>
                  <td><img :src="sneakers.image" height="150" alt=""></td>
                  <td>{{sneakers.description}}</td>
                  <td>{{sneakers.annee}}</td>
                  <td><button class="btn btn-primary btn" @click="gotToDetails(sneakers.id)">👀</button></td>
                  <td><button class="btn btn-primary btn" @click="gotToUpdate(sneakers.id)">✏</button></td>
                  <td><button class="btn btn-primary btn" @click="gotToDelete(sneakers.id)">🚮</button></td>
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

const API_SNEAKERS = 'http://127.0.0.1:8000/sneakers';

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
    this.$router.push({name:'ProductsDetails', params:{id:id}})
  },
  gotToUpdate(id){
    // this.$router.push('/products/'+coffeeId)
    this.$router.push({name:'create', params:{id:id}})
  },
  async gotToDelete(id){
    // this.$router.push('/products/'+coffeeId)
    console.log(id)

    await axios.delete(API_SNEAKERS + '/' + id );
    this.result = this.result.filter(function(f) { return f.id !== id })
  }
},
async created() {
  await this.getSneakers()
},
}
</script>
