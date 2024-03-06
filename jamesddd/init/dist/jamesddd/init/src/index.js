"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_json_1 = require("../../../review1/todos.json");
let todo1 = todos_json_1.todos[0];
console.log("Hello world");
console.log(todo1);
function getMyTodos(userId) {
    return todos_json_1.todos.filter((todo) => todo.userId === userId);
}
console.log(todos_json_1.todos.length);
var USERS;
(function (USERS) {
    USERS[USERS["USER1"] = 0] = "USER1";
    USERS[USERS["USER2"] = 1] = "USER2";
})(USERS || (USERS = {}));
console.log(getMyTodos(USERS.USER1).length);
console.log(getMyTodos(USERS.USER2).length);
