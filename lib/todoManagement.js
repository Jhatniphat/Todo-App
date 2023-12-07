// const Todo = require('./todo.js')
import { Todo } from './todo.js'

function todoManagement() {
  let todos = []
  function addTodo(id , desc , done) {
    let newTodo = new Todo(id , desc , done)
    todos.push(newTodo)
    return newTodo.id
  }
  
  function findTodo(searchId) {
    return todos.findIndex((Todo) => Todo.id === searchId)
  }

  function removeTodo(removeId) {
    return todos.splice(
      findTodo(removeId), 1
    )[0]
  }

  function getTodos() {
    return todos
  }

  function getNumberOfDone() {
    return todos.reduce((sum, Todo) => sum + Todo.done === true ? 1 : 0, 0)
  }
  
  function getNumberOfNotDone() {
    return todos.reduce((sum, Todo) => sum + Todo.done === true ? 0 : 1, 0)
  }

  function clearTodo() {
    todos = []
  }

  function setDone(id , value){
    console.log(todos[findTodo(id)])
    todos[findTodo(id)].done = value
  }

  function setItemToDone(doneId){
    const doneItem = todos.find((todo) => todo.id === Number(doneId))
    console.log(doneItem)
    if (doneItem !== undefined) doneItem.setDone(true)
    else console.log(doneId)
  }
  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setDone,
    setItemToDone
  }
}

export { todoManagement }
