<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to">
    <slot></slot>
    </router-link>
</template>

<script>
export default {
    props:{
        link:{
            type:Boolean,
            default:false,
            required:false
        },
        to:{
            default:'/',
            required:false,
            type:String
        },
        mode:{
            required:false,
            type:String,
            default:null
        }
    }
}
</script>
<style scoped>
a,button{
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    color: white;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
}
.outline{
    background-color:transparent;
    border-color:#270041;
    color:#270041;
}
.flat{
    background-color:transparent;
    color:#3a0061;
    border:none;
}
</style>