// class Todo{
    
//     constructor(desc){
//         this.id = runningId++
//         this.description = desc 
//     }
//     getTodo(){
//         return{id , description}
//     }
//     setDescription(newDescription){
//         this.description = newDescription
//     }
// }
let runningId = 1;
class Todo {
  // static runningId = 1;
  constructor(id = undefined, description , done = false) {
    this.id = runningId++
    this.description = description;
    this.done = done
  }
  getTodo() {
    return { id: this.id, description: this.description , done : this.done};
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDone(done) {
    this.done = done;
  }
}
export { Todo }
// console.log()
// module.exports = Todo 
