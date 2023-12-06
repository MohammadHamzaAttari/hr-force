<template>
    <section>Filter</section>
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
export default {
    name: 'CoachList',
    components: {
        CoachItem,
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
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