import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 1', isDone: true },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 2', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 3', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 3', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 4', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 5', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 6', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 7', isDone: false },
    { id: uuid(), name: 'Hacer', desc: 'Hacer tal cosa de las que.. 8', isDone: false }
  ])

  const getTaskById = (id) => {
    const find = tasks.value.filter((el) => el.id == id)
    console.log('el elemento es ' + find)
    return find
  }

  const addTask = (task) => {
    tasks.value.push(task)
  }

  const removeTask = (id) => {
    const del = tasks.value.filter((el) => el.id !== id)
    tasks.value = del
    console.log(tasks.value)
    return del
  }

  const completeTask = (id) => {
    const newTasks = tasks.value.map((el) => {
      if (el.id === id) {
        el.isDone = true
        return el
      }
      return el
    })
    tasks.value = newTasks
  }

  return { tasks, getTaskById, addTask, removeTask, completeTask }
})
