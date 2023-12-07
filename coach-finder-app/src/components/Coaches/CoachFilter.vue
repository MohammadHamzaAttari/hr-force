<template>
    <base-card>
       <h2>Find Your Coach</h2>
       <div class="flex">
       <span class="filterOptions">
         <input type="checkbox" name="frontend" id="frontend" checked @change="setFilter"/>
         <label for="frontend">Frontend</label>
       </span>
       <span class="filterOptions">
         <input type="checkbox" name="backend" id="backend" checked @change="setFilter"/>
         <label for="backend">Backend</label>
       </span>
       <span class="filterOptions">
         <input type="checkbox" name="career" id="career" checked @change="setFilter"/>
         <label for="career">Career</label>
       </span>
    </div>
    </base-card>
</template>
<script>
export default{
    name:'CoachFilter',
    emits:['change-filter'],
    data(){
        return{
            activeFilters:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    methods:{
        setFilter(event){
             const inputId=event.target.id;
             const isActive=event.target.checked;
             const updatedFilters={
                ...this.activeFilters,
                [inputId]:isActive,
             }
             this.activeFilters=updatedFilters
             this.$emit('change-filter',updatedFilters)
        }
    }

}
</script>
<style>
.flex{
    display: flex;
    flex-direction: row;
}
.filterOptions{
    margin: 5px;
}
</style>