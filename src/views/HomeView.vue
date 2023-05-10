<template>
  <main
    class="flex flex-col w-full h-full justify-start items-center px-6 py-10 max-w-6xl my-0 mx-auto"
  >
    <button
      @click="showModal = true"
      class="bg-gradient-to-br from-blue-900 to-blue-600 w-44 py-2 rounded-lg mb-16"
    >
      Agregar Tarea
    </button>
    <AddTask v-show="showModal" @close="showModal = false" />
    <TaskList />
  </main>
</template>

<script setup>
import AddTask from '../components/AddTask.vue'
import TaskList from '../components/TaskList.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>
