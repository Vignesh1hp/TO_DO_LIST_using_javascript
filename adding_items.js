const user_input = document.getElementById('userInput');

const todoList = document.getElementById('todoList');

user_input.addEventListener('keypress', (e) => {
  if (e.code === "Enter" && e.target.value !== '') {
    console.log('hello');
    let todo = e.target.value;
    let list_item = document.createElement('li');
    let todoId = new Date().getTime();
    list_item.innerHTML = `
      <input type="checkbox" id="${todoId}"/>
      <label for="${todoId}">${todo}</label>
    `;
    todoList.appendChild(list_item);
    user_input.value = '';
  }


})