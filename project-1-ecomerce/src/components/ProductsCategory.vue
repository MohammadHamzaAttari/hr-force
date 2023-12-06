<template>
    <navBar />
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-3">
                <div v-for="item in Category" :key="item.id">
                    <div v-for="data in item.products" :key="data.id" class="card">
                        <img :src="data.thumbnail" class="card-img-top" :alt="data.title" />
                        <div class="card-body">
                            <h5 class="card-title">{{ data.title }}</h5>
                            <p class="card-text">{{ data.description }}</p>
                            <p class="card-text">${{ data.price }}</p>
                            
                            <a href="#" class="btn btn-dark" @click="specificProduct(data.id)">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
import { showProductCategory } from '../../apiUrlsPath';
import navBar from './navBar.vue';

export default {
    name: 'ProductsCategory',
    components: {
        navBar
    },
    data() {
        return {
            Category: [],
        }
    },
    methods: {

       async getSpecificCategory() {
            const CategoryId = this.$route.params.categoryId
            console.log(showProductCategory + CategoryId)
            await fetch(showProductCategory + '/' + CategoryId)
                .then(res => res.json())
                .then(data => {
                    this.Category.push(data);
                    console.log(this.Category)
                });
        },
        specificProduct(productId){
          this.$router.push({path:`/products/${productId}`})
        }


    },


    created() {
        this.getSpecificCategory()

    }
}
</script>
