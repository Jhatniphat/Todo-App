import {
  todoManagement
} from "./lib/todoManagement.js"
const {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setDone,
    setItemToDone
  } = todoManagement()
import {showTodoItem , showNumberOfDone , showNumberOfNotDone , removeTodoItem} from "./UI/todoList.js"
import {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  beforeUnloadHandler
} from "./eventHandler/eventController.js"

const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoHandler()
})

