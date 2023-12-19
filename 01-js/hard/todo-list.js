/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.array = []
  }

  clear() {
    this.array = []
  }

  getAll() {
    return this.array
  }
 
  get(indexOfTodo) {
    if(indexOfTodo>=0 && indexOfTodo< this.array.length){
      return this.array[indexOfTodo]
    } else return null
  }

  add(todo) {
    return this.array.push(todo)
  }

  remove(indexOfTodo) {
    if(indexOfTodo>=0 && indexOfTodo< this.array.length){
      return this.array.splice(indexOfTodo,1)
    }
  }

  update(indexOfTodo , task) {
    if(indexOfTodo>=0 && indexOfTodo< this.array.length){
      return this.array.splice(indexOfTodo,1,task)
    }
  }

}

module.exports = Todo;
