<template>
  <div class="container">
    <h3>Formulaire</h3>
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nom</label>
        <input v-model='sneakers.name' type="text" class="form-control" id="validationCustom01" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Marque</label>
        <input v-model='sneakers.marque' type="text" class="form-control" id="validationCustom02" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <!-- <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Manga Type</label>
        <select v-model='manga.type' class="form-select" id="validationCustom04" required>
          <option selected value="">Choose...</option>
          <option v-for="type in mangaType" :key='type'>{{type}}</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div> -->

      <!-- <div class="col-12">
        <div class="form-check">
          <input v-model='manga.ebook' class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
          <label class="form-check-label" for="invalidCheck">
            Available in ebook
          </label>
        
        </div>
      </div> -->
      <div class="col-md-4">
        <label for="validationCustom03" class="form-label">Prix</label>
        <input v-model='sneakers.prix' type="text" class="form-control" id="validationCustom03" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom04" class="form-label">Description</label>
        <input v-model='sneakers.description' type="text" class="form-control" id="validationCustom04" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom05" class="form-label">Année</label>
        <input v-model='sneakers.annee' type="text" class="form-control" id="validationCustom05" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom06" class="form-label">Image</label>
        <input v-model='sneakers.image' type="text" class="form-control" id="validationCustom06" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-12">
        <button @click='handleSaveBtn' class="btn btn-primary" type="button">Create or Edit</button>
      </div>
    </form>
  </div>

</template>

<script>
 import axios from 'axios'

  const API_SNEAKERS = 'http://127.0.0.1:8000/sneakers';

  export default {
    name: 'CreateForm',
    data:()=>({
        onEdit:false,
        // mangaType:['Seinen','Josei','Shojo'],
        sneakers:{
          name:'',
          marque:'',
          prix:'Seinen',
          description:'true',
          annee:'',
          image:''
        }
    }),
    methods:{
     async handleSaveBtn(){
        if(this.onEdit){
          // > je vais faire mon PUT sur mon api  
          await this.editOneSneaker()
        }else{
          // > je vais faire mon POST sur mon api     
          await this.createNewSneaker()
        }
      },
      async createNewSneaker(){
        console.warn('ici en create')
        console.log(this.sneakers)

        const data = await axios.post(API_SNEAKERS,
          this.sneakers,
        {  headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          },
          
        });
        
        this.sneakers=data.data.message
        console.log(this.sneakers)
        
      },
      async editOneSneaker(){
        console.warn('ici en edit')
        const data = await axios.patch(API_SNEAKERS + '/' + this.$route.params.id,
          this.sneakers,
        {  headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          },
          
        });
        
        this.sneakers=data.data.message
        console.log(this.sneakers)
      }

    },
    async created(){

      let {id}= this.$route.params;
      if(id=="new"){
        this.onEdit=false;
      }else{
        this.onEdit=true;
      }
      console.log(this.onEdit,'🎅',this.$route.params)
    }
  }
  </script>