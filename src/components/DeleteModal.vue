<script>
export default {
    methods: {
        deleteItemAndSwitchModal() {
            this.$emit("deleteItem")
            this.$emit("switch")
            this.$emit("updateBalance")
        }
    }
}
</script>
<template>
    <!-- Modal -->
    <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
 
        <!-- Card -->
        <div class="relative w-96 bg-white rounded-md px-8 py-12 flex flex-col justify-center items-center">
            <h2 class="text-3xl mb-8 text-primary font-bold">Sure to Delete?</h2>

            <!-- Delete Button -->
            <button
                @click="deleteItemAndSwitchModal"
                class="
                    bg-expense
                    py-2
                    px-6
                    rounded-md
                    text-white
                    text-sm
                    duration-300
                    hover:scale-105">
                Delete transaction
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