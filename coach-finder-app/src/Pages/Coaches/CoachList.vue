<template>
    <section>
        <CoachFilter @change-filter="setFilters"></CoachFilter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button link to="/register">Click to Register as a Coach</base-button>
        </div>

        <ul v-if="hasCoaches">
            <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
                :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas">
            </CoachItem>
        </ul>
        <h3 v-else>No Coaches Found</h3>
    </base-card>
    </section>
</template>
<script>
import CoachItem from '../../components/Coaches/CoachItem.vue'
import CoachFilter from '../../components/Coaches/CoachFilter.vue'
export default {
    name: 'CoachList',
    components: {
        CoachItem,
        CoachFilter,
    },
    data(){
        return{
            activeFilters:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches= this.$store.getters['coaches/coaches']
            
            return coaches.filter(coaches=>{
                console.log(coaches.areas.includes('frontend'))
                if(this.activeFilters.frontend && coaches.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilters.backend && coaches.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilters.career&& coaches.areas.includes('career')){
                    return true;
                }
                return false;
            })
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    },
    methods:{
        setFilters(updatedFilters){
             this.activeFilters=updatedFilters
        }
    }
}
</script>
<style scoped>
.controls{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>