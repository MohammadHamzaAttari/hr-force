<template>
    <div class="container">
    <TheHeader/>
 <router-view></router-view>
 </div>
</template>
<script>
import TheHeader from './components/Layout/TheHeader.vue'
export default{
    components:{
        TheHeader,
    }
}
</script>