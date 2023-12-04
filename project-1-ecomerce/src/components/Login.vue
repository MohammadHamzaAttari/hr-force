<template>
    <div style="width: 70%; margin: auto;">
        <section class="vh-100" style="background-color: #080808;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <h3 class="mb-5">Sign in</h3>
                                <form @submit.prevent="signIn">
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="userName">Username</label>
                                        <input type="text" id="username" v-model="username"
                                            class="form-control form-control-lg" />

                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" id="password" v-model="password"
                                            class="form-control form-control-lg" />

                                    </div>
                                    <div v-if="inValidInput">
                                        <p style="color: red;">One or more fields are invalid. Please check username and
                                            password.</p>
                                    </div>


                                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { login } from '../../apiUrlsPath';
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
            inValidInput: false,
        };
    },
    methods: {
        signIn() {
            fetch(login, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: this.username,
                    password: this.password,

                })
            })
                .then(res => {
                    if (!res.ok) {
                        this.inValidInput = true;
                        throw new Error('network response')
                    }
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('username', data.username)
                    this.$router.push('/')
                }).catch(error => {

                    console.error('Fetch error:', error);
                })
        }
    }
}
</script>