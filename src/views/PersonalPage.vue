<script>
import NavView from "../components/Nav.vue";
import InfoView from "../components/Info.vue";
export default {
    components: {
        NavView,
        InfoView
    },
    props:[
        "balance",
        "income",
        "expense",
        "expenseList"
    ],
    methods: {
        setStatus(status) {
            this.$emit("setStatus", status);
        }
    },
    mounted() {
        if(localStorage.getItem("balance") === null) {
            localStorage.setItem("balance", 0)
        }

        if(localStorage.getItem("income") === null) {
            localStorage.setItem("income", 0)
        }

        if(localStorage.getItem("expense") === null) {
            localStorage.setItem("expense", 0)
        }

        const status = {
            balance: localStorage.getItem("balance"),
            income: localStorage.getItem("income"),
            expense: localStorage.getItem("expense")
        }

        this.$emit("setStatus", status);
    }
}
</script>
<template>
    <div class="flex">
        <NavView :balance="balance" />
        <InfoView
            :income="income"
            :expense="expense"
            @setStatus="setStatus"
        />
    </div>
</template>