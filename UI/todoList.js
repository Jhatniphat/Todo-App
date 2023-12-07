import { todoManagement } from './../lib/todoManagement.js'
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

function showTodoItem(newId , newDescription){
  let listTodoDiv = document.querySelector('#listTodo')
  //create new <div>
  const newTodoDiv = document.createElement('div')
  newTodoDiv.className = 'todoItem'
  newTodoDiv.setAttribute('id' , newId)

  //create <p>
  const newTodoItem = document.createElement('p')
  newTodoItem.textContent = newDescription
  newTodoDiv.appendChild(newTodoItem)

  //create <Button> Done
  const newDoneButton = document.createElement('button')
  newDoneButton.textContent = 'Not Done'
  newTodoDiv.appendChild(newDoneButton)

  //create <Button> Remove
  const newRemoveButton = document.createElement('button')
  newRemoveButton.textContent = 'Remove'
  newTodoDiv.appendChild(newRemoveButton)

  listTodoDiv.appendChild(newTodoDiv)
}

function showNumberOfDone(numberOfDone){
  const doneP = document.querySelector('#done')
  doneP.textContent = `Number Of Done : ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone){
  const NotdoneP = document.querySelector('#notDone')
  NotdoneP.textContent = `Number Of Not Done : ${numberOfNotDone}`
}

function removeTodoItem(removeId){
  let removedDiv = document.getElementById(removeId)
  removedDiv.remove()
}
export {showTodoItem , showNumberOfDone , showNumberOfNotDone , removeTodoItem}
