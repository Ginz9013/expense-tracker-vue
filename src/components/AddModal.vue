<script>
export default {
    data() {
        return {
            text: null,
            amount: null
        }
    },
    methods: {
        closeModal() {
            this.$emit("switch")
        },
        addExpenseList() {
            const existList = JSON.parse(localStorage.getItem("expense-list"))

            let newList = existList !== null ? existList : [];

            const newItem = {
                text: this.text,
                amount: this.amount
            }
            
            newList.push(newItem);

            localStorage.setItem("expense-list", JSON.stringify(newList));

            this.$emit("switch");
            this.$emit("updateList", newItem);
            this.$emit("updateBalance")
        }
    }
}
</script>
<template>
    <!-- Modal -->
    <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
 
        <!-- Card -->
        <div class="relative w-96 bg-white rounded-md p-8 flex flex-col justify-center items-center">

            <!-- Input Area -->
            <form class="w-full">
                <div class="flex flex-col mb-3">
                    <label for="text" class="text-sm text-gray-700">Text</label>
                    <input
                        v-model="text"
                        id="text"
                        type="text"
                        placeholder="Breakfast"
                        class="border rounded-md pl-2 py-1"
                    >
                </div>

                <div class="flex flex-col mb-8">
                    <label for="amount" class="text-sm text-gray-700">Amount</label>
                    <input
                        v-model="amount"
                        id="amount"
                        type="number"
                        placeholder="100"
                        class="border rounded-md pl-2 py-1"
                    >
                </div>
            </form>

            <!-- Add Button -->
            <button
                @click="addExpenseList"
                class="
                    bg-primary
                    py-2
                    px-8
                    rounded-md
                    text-white
                    text-sm
                    duration-300
                    hover:scale-105
                    hover:bg-darker">
                Add transaction
            </button>

            <!-- Close Button -->
            <div
                @click="closeModal"
                class="absolute top-4 right-4 font-black text-primary hover:scale-105 hover:cursor-pointer duration-200"
            >
                X
            </div>
        </div>

        <!-- Background -->
        <div class="fixed top-0 left-0 w-full h-full bg-darker opacity-80 z-bg"></div>
    </div>
</template>