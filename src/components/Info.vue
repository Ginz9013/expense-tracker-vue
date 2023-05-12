<script>
import AddModal from "../components/AddModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
export default {
    components: {
        AddModal,
        DeleteModal
    },
    props:["income", "expense"],
    data() {
        return {
            expenseList:[],
            addModal: false,
            deleteModal: false,
            deleteIndex: 0
        }
    },
    methods: {
        switchAddModal() {
            this.addModal = !this.addModal;
        },
        switchDeleteModal(index) {
            this.deleteModal = !this.deleteModal;
            this.deleteIndex = index;
        },
        updateList(item) {
            console.log("update")
            this.expenseList.push(item);
        },
        deleteItem(){
            this.expenseList.splice(this.deleteIndex, 1);
            localStorage.setItem("expense-list", JSON.stringify(this.expenseList));
        },
        updateBalance() {
            const status = {
                expense: 0,
                income: 0,
                balance: 0
            }

            this.expenseList.forEach((item) => {
                if(item.amount < 0) {
                    status.expense -= item.amount;
                }

                if(item.amount > 0) {
                    status.income += item.amount;
                }

                status.balance += item.amount
            });
            this.$emit("setStatus", status);
        }
    },
    mounted() {
        this.expenseList = JSON.parse(localStorage.getItem("expense-list"));
    }
}
</script>
<template>
    <!-- Main Area -->
    <div class="grow flex flex-col justify-center items-center">

        <!-- Result Area -->
        <div class="flex mb-16">
            <!-- INCOME -->
            <div class="text-income font-bold text-xl text-center mr-24">
                <h3>INCOME</h3>
                <p>${{ income }}</p>
            </div>

            <!-- EXPENSE -->
            <div class="text-expense font-bold text-xl text-center">
                <h3>EXPENSE</h3>
                <p>${{ expense }}</p>
            </div>
        </div>

        <!-- Button Area -->
        <div class="mb-6">
            <button
                @click="switchAddModal"
                type="button"
                class="
                    bg-primary
                    py-2
                    px-6
                    rounded-md
                    text-white
                    text-sm
                    mr-4
                    duration-300
                    hover:scale-105
                    hover:bg-darker
                "
            >
                Add transaction
            </button>
        </div>

        <!-- List Area -->
        <ul>
            <li
                v-for="(item, index) in expenseList"
                :key="index"
                class="flex justify-between px-4 py-2 border-primary border-2 w-96 my-2 rounded-md font-bold hover:cursor-pointer"
            >
                <p class="text-primary">{{ item.text }}</p>
                <div class="flex">
                    <p
                        class="text-expense mr-2"
                        :class="{
                            'text-expense': item.amount < 0 ,
                            'text-income': item.amount > 0
                        }"
                    >
                        ${{ item.amount }}
                    </p>
                    <button
                        @click="switchDeleteModal(index)"
                        type="button"
                        class="text-xs bg-primary text-white py-1 px-2 rounded hover:bg-expense duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </li>
        </ul>

        <AddModal
            v-if="addModal"
            @switch="switchAddModal"
            @updateList="updateList"
            @updateBalance="updateBalance"
        />
        <DeleteModal
            v-if="deleteModal"
            @switch="switchDeleteModal"
            @deleteItem="deleteItem"
            @updateBalance="updateBalance"
        />
    </div>
</template>