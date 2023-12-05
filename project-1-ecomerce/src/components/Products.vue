<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-around">
                <div v-for="item in allProducts" :key="item.id" class="col-12 col-sm-3 mt-4">
                    <div v-for="data in item.products" :key="data.id" class="card">
                        <img :src="data.thumbnail" class="card-img-top" :alt="data.title" />
                        <div class="card-body">
                            <h5 class="card-title">{{ data.title }}</h5>
                            <p class="card-text">{{ data.description }}</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
import {GetApi} from '../../Resources/ApiCall';
export default {
    name: 'ProductCategory',
    data() {
        return {
            allProducts: [],
        }
    },
    methods: {

        getAllProducts() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    this.allProducts.push(data);
                    console.log(this.allProducts)
                });
        }

    },
    

    created() {
        this.getAllProducts()
        GetApi('/products')
    }
}
</script>
