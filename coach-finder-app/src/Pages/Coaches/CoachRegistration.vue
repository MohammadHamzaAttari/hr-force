<template>
    <section>
        <form action="">
            <div class="form-control">
                <label for="firstname">FirstName</label>
                <input type="text" id="firstname"/>
            </div>
            <div class="form-control">
                <label for="lastname">LastName</label>
                <input type="text" id="lastname"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" rows="3"></textarea>
            </div>
           
            <div class="form-control">
                <label for="rate">hourlyRate</label>
                <input type="number" id="rate"/>
            </div>
            <div class="form-control">
                <h3>Area of Expertise</h3>
                <div>
                <label for="frontend">Frontend</label>
                <input type="checkbox" id="frontend"/>
            </div>
            <div>
                <label for="backend">backend</label>
                <input type="checkbox" id="backend"/>
            </div>
            <div>
                <label for="career">Career</label>
                <input type="checkbox" id="career"/>
            </div>
            </div>
            <base-button>Register</base-button>
        </form>
    </section>
</template>
<script>
export default {name:'CoachRegistration',}
</script>