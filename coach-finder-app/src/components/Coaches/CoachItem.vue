<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div class="alignment">
            <div>
                <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</base-badge>
            </div>
            <div>
                <base-button mode="outline" :to="coachContactLink">Contact</base-button>
                <base-button link :to="coachDetailLink">Details</base-button>
            </div>
        </div>
    </li>
</template>
<script>
export default {

    props: ['id', 'firstName', 'lastName', 'areas', 'rate'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink() {
            return this.$route.path + '/' + this.id + '/' + 'contact'
        },
        coachDetailLink() {
            return this.$route.path + '/' + this.id;
        }
    }
}
</script>
<style scoped>
li {
    margin: 1rem 0;
  
    border: 1px solid #424242;
    border-radius: 12px;
    list-style: none;
}
li a:hover{
    background-color: blueviolet;
}

.alignment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>