import { todos } from '../../../review1/todos.json';

interface MyTodo { 
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

let todo1: MyTodo = todos[0];

console.log("Hello world");

console.log(todo1);


function getMyTodos(userId: number) { 
  return todos.filter((todo: MyTodo) => todo.userId === userId);
}

console.log(todos.length);


enum USERS {
  "USER1",
  "USER2"
}

console.log(getMyTodos(USERS.USER1).length);

console.log(getMyTodos(USERS.USER2).length);