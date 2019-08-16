<template>
    <div class="Login">

        <input type="text" v-model="username">
        <input type="text" v-model="password">

        <button @click="login">login</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Login',
    data: () => ({
        username: '',
        password: ''
    }),
    computed: {
        ...mapGetters({
            auth: 'auth/auth'
        })
    },
    methods: {
        ...mapActions({
            getAuthValues: 'auth/getAuthValues'
        }),
        async login () {
            await this.getAuthValues({
                username: this.username,
                password: this.password
            })

        }
    }
}
</script>