<template>
    <div>
        <section class="page-section">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="jumbotron jumbotron-fluid" style="border-radius: 10px">
                            <img :src="sneakers.image" style="height:250px;" alt="">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="jumbotron jumbotron-fluid" style=" border-radius: 10px">
                            <h2>{{sneakers.name}}</h2>
                            <br>
                            <ul class="list-group">
                                <li class="list-group-item">{{sneakers.marque}}</li>
                                <li class="list-group-item">{{sneakers.prix}} €</li>
                                <li class="list-group-item">{{sneakers.description}}</li>
                                <li class="list-group-item">{{sneakers.annee}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

const API_SNEAKERS = 'http://127.0.0.1:8000/sneakers';



export default {
  name: 'ProductsDetails',
  data:()=>({
	sneakers:[]
  }),
  methods: {

  },
  async created() {
	let {id}= this.$route.params;
	const data = await axios.get(API_SNEAKERS + '/' + id);
    this.sneakers=data.data.message
  },
}
</script>
