<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      balance: null,
      income: null,
      expense: null,
      expenseList: null
    }
  },
  methods: {
    setStatus(status) {
      this.balance = status.balance;
      this.income = status.income;
      this.expense = status.expense;
    }
  }
}
</script>

<template>
  <RouterView
    :balance="balance"
    :income="income"
    :expense="expense"
    :expenseList="expenseList"
    @setStatus="setStatus"
  />
</template>
