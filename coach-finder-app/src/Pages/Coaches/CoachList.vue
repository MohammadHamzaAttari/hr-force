<template>
    <section>Filter</section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Click to Register as a Coach</router-link>
        </div>
        <ul>
            <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach.name }}</li>
        </ul>
    </section>
</template>
<script>
export default {
    name:'CoachList',
    computed:{
        filteredCoaches(){
            return this.$store.getters['coaches/coaches']
        }
    }    
    }
</script>