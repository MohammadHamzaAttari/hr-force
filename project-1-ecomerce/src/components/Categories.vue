<template>
<h1>helloworld</h1>
</template>
<script>
export default{
    name:'ProductCategory',
data(){
    return;
},
productsCategory(){
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
}
}
</script>
