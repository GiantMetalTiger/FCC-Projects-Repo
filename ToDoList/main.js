//on user click add an item to the list
document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('item').value;
    if(value) addItemTodo(value);


});

function addItemTodo(item){
    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    
}
