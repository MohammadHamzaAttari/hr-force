<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-fixed-top bg-light navbar-light">
           
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-brand">
                    <router-link to="/">
                          <h2>Find a Coach</h2>
                    </router-link>
                </div>
                <div class="collapse navbar-collapse ml-auto" id="navbar">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/coaches">Couches</router-link>
                            
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/request">Request</router-link>
                        </li>

                    </ul>
                </div>
           
        </nav>
    </div>
</template>
<script>
export default{
    name:'TheHeader'
}
</script>