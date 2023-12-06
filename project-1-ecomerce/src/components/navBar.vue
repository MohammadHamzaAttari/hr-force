<template>
    <nav class="navbar navbar-expand-sm navbar-fixed-top bg-dark navbar-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-brand">
                <a href="">
                    <img src="https://consumer.tcimg.net/assets/_next/static/images/tc-logo-white-500-4f595f7ed8d0cc657d151b089a9bd452.png?auto=format&amp;h=39&amp;w=133"
                        alt="Logo">
                </a>
            </div>
            <div class="collapse navbar-collapse ml-auto" id="navbar">
                <ul class="navbar-nav ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " id="dropdown" data-bs-toggle="dropdown">Category</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown">
                            <button class="dropdown-item" v-for="(item, index) in categories" :key="index"
                            @click="passCategoryId(item)">
                                {{ item }}
                            </button>

                        </div>
                    </li>
                </ul>
            </div>
            <div class=" w-25">
                <div v-if="authentication">
                    <div class="flex">

                        <h3 class="btn btn-dark  ml-5 my-2 my-sm-0">{{ username }}</h3>

                        <button class="btn btn-dark" v-on:click="signOut">Signout</button>
                    </div>
                </div>
                <div v-else>
                    <button class="btn btn-outline-primary  ml-5 my-2 my-sm-0">
                        <router-link to="/login">Login</router-link>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { getProductCategory } from '../../apiUrlsPath';

export default {
    name: 'navBar',


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
            return;
        },
        signOut() {
            return localStorage.clear(), this.$router.push('/login');

        }, async productsCategory() {
            await fetch(getProductCategory)
                .then(res => res.json())
                .then(data => {
                    this.categories = [...this.categories, ...data];
                });
        }, passCategoryId(categoryId) {
            this.$router.push({ path: `/products/category/${categoryId}` })
        }

    },

    mounted() {
        this.productsCategory()
    },
}

</script>
