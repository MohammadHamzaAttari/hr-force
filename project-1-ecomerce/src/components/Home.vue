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
                        <a class="nav-link dropdown-toggle " id="dropdown" data-bs-toggle="dropdown">New</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown">
                            <a class="dropdown-item" href="#">Build and Price</a>
                            <a class="dropdown-item" href="#">Deals</a>
                            <div class="dropdown-divider">
                            </div>
                            <a class="dropdown-item" href="#">New Car Listing</a>
                            <a class="dropdown-item" href="#">New EVS</a>
                            <a class="dropdown-item" href="#">New SUVs</a>
                            <a class="dropdown-item" href="#">New Vans</a>
                            <a class="dropdown-item" href="#">New Trucks</a>
                            <a class="dropdown-item" href="#">New Convertibles</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " id="dropdown" data-bs-toggle="dropdown">Used</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown">
                            <a class="dropdown-item" href="#">Buy Online</a>
                            <a class="dropdown-item" href="#">Used Cars Search</a>
                            <div class="dropdown-divider">
                            </div>
                            <a class="dropdown-item" href="#">Used Car Listing</a>
                            <a class="dropdown-item" href="#">Used EVS</a>
                            <a class="dropdown-item" href="#">Used SUVs</a>
                            <a class="dropdown-item" href="#">Used Vans</a>
                            <a class="dropdown-item" href="#">Used Trucks</a>
                            <a class="dropdown-item" href="#">Used Convertibles</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " id="dropdown" data-bs-toggle="dropdown">Electric</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown">
                            <a class="dropdown-item" href="#">EVs Hub</a>
                            <a class="dropdown-item" href="#">New EVs</a>
                            <a class="dropdown-item" href="#">Used EVs</a>
                            <a class="dropdown-item" href="#">New EVS</a>
                            <a class="dropdown-item" href="#">Used Teslas</a>
                            <a class="dropdown-item" href="#">EV incentives</a>
                            <a class="dropdown-item" href="#">EV Deals</a>
                            <a class="dropdown-item" href="#">Best EVs</a>
                        </div>
                    </li>


                </ul>
            </div>
            <div class="flex">
                <div v-if="authentication">
                    <div class="flex">
                    <div>
                        <h3 class="btn btn-dark  ml-5 my-2 my-sm-0">{{ username }}</h3>
                    </div>
                    <div>
                        <button class="btn btn-dark" v-on:click="signOut">Signout</button>
                    </div>
                </div>
                </div>
                <div v-else><button class="btn btn-outline-primary  ml-5 my-2 my-sm-0">
                        <router-link to="/login">Login</router-link>

                    </button>
                </div>
            </div>
        </div>
    </nav>
    <Categories/>
</template>

<script>
import Categories from './Categories.vue';

export default {
    name: 'HomePage',
    components:{
       Categories,
    }
,   
    data() {
        return {
            isAuthenticated: false,
            username: localStorage.getItem('username'),
        
        }
    },
    methods: {
        authentication() {
            if (localStorage.getItem('token')) {
                this.isAuthenticated = true
            }
        },
        signOut(){
            return localStorage.clear() , this.$router.push('/login');
            
        }
    }
}

</script>
