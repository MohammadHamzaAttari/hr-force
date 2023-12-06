<template>
    <navBar />
    <div class="container">
        <div class="row pt-5">
            <div v-for="items in specificProducts" :key="items.id">
                <div class="col-12 col-sm-5">
                    <h1>{{ items.title }}</h1>
                    <p>{{ items.description }}</p>
                    <div class="row">
                    <p class="col-6">Price</p>
                    <h5 class="col-6">${{ items.price }}</h5>
                    <div class="row">
                        <p class="col-6">Discount Percentage</p>
                        <h4 class="col-6"> {{ items.discountPercentage }}</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>Rating</p>
                        </div>
                        <div class="col-6">
                        <h5>{{ items.rating }}</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-12 col-sm-5">
                    <img :src="items.thumbnail" :alt="thumbnail" class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
import { getProducts } from '../../apiUrlsPath';
import navBar from './navBar.vue';

export default {
    name: 'ProductDetails',
    components: {
        navBar,
    },
    data() {
        return {
            specificProducts: [],
        }
    },
    methods: {

        getSpecificProducts() {
            const productId = this.$route.params.productId
            console.log(getProducts + productId)
            fetch(getProducts + '/' + productId)
                .then(res => res.json())
                .then(data => {
                    this.specificProducts.push(data);
                    console.log(this.specificProducts)
                });
        }


    },


    created() {
        this.getSpecificProducts()

    }
}
</script>
