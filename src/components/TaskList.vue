<template>
  <div>
    <ol class="flex flex-wrap gap-4">
      <li v-for="task in tasksStore.tasks" :key="task.id" :class="isCompleteStyle(task)">
        <h3 class="font-semibold text-lg">{{ task.name }}</h3>
        <div class="w-full h-0.5 rounded-full bg-slate-200"></div>
        <p>{{ task.desc }}</p>
        <div
          class="h-full w-full rounded-lg flex justify-evenly items-center absolute bg-slate-900/70 left-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150"
        >
          <button :class="isCompleteStylebtn(task)" @click="isComplete(task.id)">✔</button>
          <button class="mini-btn" @click="removeTasks(task.id)">✖</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
//import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks.js'

const tasksStore = useTasksStore()

const removeTasks = (id) => {
  tasksStore.removeTask(id)
}

const isComplete = (id) => {
  console.log(id)
  tasksStore.completeTask(id)
}

const isCompleteStyle = (task) => {
  if (task.isDone === true) {
    return `task group grow min-w-custom isComplete`
  } else {
    return `task group grow min-w-custom`
  }
}

const isCompleteStylebtn = (task) => {
  if (task.isDone === true) {
    return `isCompleteBtn`
  } else {
    return `mini-btn`
  }
}
</script>

<style scoped>
.task {
  @apply relative bg-gradient-to-br from-blue-900 to-blue-600 p-3 rounded-lg shadow-2xl cursor-pointer border-2 border-indigo-300 flex flex-col gap-1 h-full w-1/4 transition-all ease-in-out delay-150;
}
.mini-btn {
  @apply bg-indigo-300 w-12 h-12 rounded-full mt-2 hover:scale-105;
}
.isComplete {
  @apply text-slate-400 line-through bg-gradient-to-br from-slate-700 to-slate-600;
}
.isCompleteBtn {
  @apply hidden;
}
</style>
