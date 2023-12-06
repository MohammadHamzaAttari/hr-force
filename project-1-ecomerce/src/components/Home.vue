<template>
    <navBar/>
    <Products />
</template>

<script>
import Products from './Products.vue';
import navBar from './navBar.vue';
export default {
    name: 'HomePage',
    components: {
        Products,
        navBar,
    }
    ,
    data() {
        return {
            isAuthenticated: false,
            username: localStorage.getItem('username'),
            categories: []
        }
    },
    methods: {
        authentication() {
            if (localStorage.getItem('token')) {
                this.isAuthenticated = true
            }
        },
        signOut() {
            return localStorage.clear(), this.$router.push('/login');

        }, productsCategory() {
            fetch('https://dummyjson.com/products/categories')
                .then(res => res.json())
                .then(data => {
                    this.categories = [...this.categories, ...data];
                });
        },

    },

    created() {
        this.productsCategory()
    },
}

</script>
