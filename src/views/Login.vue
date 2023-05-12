<script>
import { RouterLink } from "vue-router";
export default {
    data() {
        return {
            account: null,
            password: null
        }
    },
    methods: {
        login() {
            localStorage.setItem("account", this.account);
            localStorage.setItem("password", this.password);
        }
    }
}
</script>
<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-4xl mb-16 text-primary font-bold">Expense Tracker</h1>

        <!-- Form Area -->
        <form>
            <div class="account flex flex-col mb-3">
                <label for="account" class="text-sm text-gray-700">Account</label>
                <input
                    v-model="account"
                    id="account"
                    type="email"
                    class="border rounded-md pl-2 py-1"
                >
            </div>

            <div class="password flex flex-col mb-8">
                <label for="password" class="text-sm text-gray-700">Password</label>
                <input
                    v-model="password"
                    id="password"
                    type="password"
                    class="border rounded-md pl-2 py-1 w-96"
                >
            </div>
        </form>

        <!-- Button Area -->
        <div class="btn-group">
            <button class="bg-secondary py-2 px-8 rounded-md text-white text-sm mr-4">Sign up</button>
            <RouterLink @click="login" to="/personal-page" class="bg-primary py-2 px-8 rounded-md text-white text-sm">Log in</RouterLink>
        </div>
    </div>
</template>