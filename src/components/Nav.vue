<script>
export default {
    props: ["balance"],
    data() {
        return {
            account: localStorage.getItem("account")
        }
    }
}
</script>
<template>
    <!-- Nav Area -->
    <div class="h-screen w-1/4 bg-primary flex flex-col items-center text-white">
        <h1 class="mt-32 text-2xl">Expense Tracker</h1>
        <h2 class="mt-32 text-xl">{{ account }}</h2>
        <div class="mt-16 text-center">
            <p class="text-sm">YOUR BALANCE</p>
            <h3 class="text-3xl mt-1">${{ balance }}</h3>
        </div>
    </div>
</template>