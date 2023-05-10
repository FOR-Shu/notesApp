<script setup>
import { ref } from 'vue'
const showModal = ref(false)
const newNote = ref('')
const errorMessage = ref('')
const notes = ref([])

function getRandomColor() {
    return 'hsl(' + Math.random() * 360 + '100%, 75%'
}

const addNote = () => {
    if (newNote.value.length < 1) {
        return (errorMessage.value = '請輸入內容後再送出')
    }
    notes.value.push({
        id: Math.floor(Math.random() * 1000000),
        text: newNote.value,
        date: new Date(),
        backgroundColor: getRandomColor()
    })
    showModal.value = false
    newNote.value = ''
    errorMessage.value = ''
}
</script>

<template>
    <main class="h-full w-full flex flex-justify-center">
        <!-- 新增區塊 -->
        <div
            v-if="showModal"
            class="absolute h-full w-full flex flex-justify-center flex-items-center bg-black bg-op-70"
        >
            <div class="relative w-xl flex flex-col border-rd bg-light p-5">
                <textarea
                    id="note"
                    v-model.trim="newNote"
                    name="note"
                    cols="30"
                    rows="10"
                    class="mb-1 border-none"
                />
                <!-- 判斷字數輸入警告 -->
                <p v-if="errorMessage" class="ma-0 text-2 text-red-600">
                    {{ errorMessage }}
                </p>
                <div class="ml-60 flex flex-justify-between pt-1">
                    <button
                        class="mr-5 w-full cursor-pointer rounded border-none bg-orange px-1 py-2 text-4 text-dark hover:bg-red"
                        @click="addNote"
                    >
                        Add note
                    </button>
                    <button
                        class="w-full cursor-pointer border border-gray-500 rounded rounded px-1 py-2 text-4 text-dark hover:border-gray-700 focus:outline-none"
                        @click="showModal = false"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
        <!-- 主體 -->
        <div class="w-5xl">
            <header class="flex flex-justify-between grid-items-center">
                <h1 class="text-6xl font-700">NOTES</h1>
                <button
                    class="h-12 w-12 cursor-pointer rounded-full border-none bg-dark text-6 text-light"
                    @click="showModal = true"
                >
                    +
                </button>
            </header>
            <div class="grid grid-cols-4 gap-4">
                <div
                    v-for="note in notes"
                    :key="note.id"
                    class="h-50 w-50 flex flex-col justify-between rounded bg-amber p-5"
                >
                    <div>
                        <p class="ma-0 text-4 font-bold">
                            {{ note.date.toLocaleDateString('en-US') }}
                        </p>
                        <p class="line-clamp-8 ma-0 overflow-hidden">
                            {{ note.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
