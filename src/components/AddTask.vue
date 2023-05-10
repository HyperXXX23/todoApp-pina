<template>
  <form
    class="flex flex-col items-center gap-2 w-full h-auto p-6 rounded-xl shadow-2xl absolute z-50 bg-slate-900/90 top-1/4 md:w-2/4 xl:w-1/4"
    @submit.prevent="addTask"
  >
    <h2 class="text-center font-bold text-xl">Añadir una tarea</h2>
    <input
      type="text"
      v-model="taskName"
      required
      class="bg-transparent border-2 border-indigo-200 rounded-md w-full py-1"
    />
    <textarea
      rows="3"
      v-model="taskDesc"
      class="bg-transparent border-2 border-indigo-200 rounded-md resize-none w-full py-1"
    ></textarea>
    <button
      @click="$emit('close')"
      type="submit"
      class="bg-gradient-to-br from-blue-900 to-blue-600 w-32 py-2 rounded-lg"
    >
      Añadir
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks.js'
import { v4 as uuid } from 'uuid'

//const showModal = ref(false)

const tasksStore = useTasksStore()

const taskName = ref('')
const taskDesc = ref('')

const addTask = () => {
  const task = {
    id: uuid(),
    name: taskName.value,
    desc: taskDesc.value,
    isDone: false
  }
  console.log(task)
  tasksStore.addTask(task)
  //props.showModal = false
  taskName.value = ''
  taskDesc.value = ''
}
</script>

<style scoped></style>
