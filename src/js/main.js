var rootRef = new Firebase('https://todo-app-basic.firebaseapp.com');


// ** globals ** //
var seed = [
    'Say happy birthday',
    'Wash the car',
    'Watch the broncos Win'
    ];


// ** dom manipulation ** //
$(document).on('ready', function() {




    // see data to local storage
    seedDataToLocalStorage();

    // grab data from local storage
    var allYourTodos = getDataFromLocalStorage();

    //append data to the dom
    appendToDom(allYourTodos);




  $('form').on('submit', function(event) {
    event.preventDefault();
    var todo = $('input').val();
    // add new Todos to the DOM
    $('#all-todos').append('<li><button class="btn btn-danger btn-sm">X</button>&nbsp;'+todo+'</li>');
    // update localStorage
    seedDataToLocalStorage(todo);
    // Clear input field on submission
    $('input').val('');
  });

  $(document).on('click', 'li', function() {
    $(this).remove();
    var strTodo = $(this).text().replace('X', '').trim();
    // remember to remove from local storage
    removeTodoFromLocalStorage(strTodo);

  });
});

// ** helper functions ** //

function seedDataToLocalStorage(todo) {
    if (todo) {
        var currentData = getDataFromLocalStorage();
        currentData.push(todo);
        localStorage.setItem('todos', JSON.stringify(currentData));
    }
    if (!getDataFromLocalStorage()) {
        localStorage.setItem('todos', JSON.stringify(seed));
    };
};

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos'));
};



function appendToDom(arr) {
    arr.forEach(function (todo) {
        $('#all-todos').append('<li><button class="btn btn-danger btn-sm">X</button>&nbsp;'+todo+'</li>');
    });
};

function removeTodoFromLocalStorage(todo) {
    /*
    1. get data from local storage
    2. find item in array and remove
    3. set data to local storage
    */

    var current = getDataFromLocalStorage();
    var startIndex = current.indexOf(todo);
    current.splice(startIndex, 1);
    localStorage.setItem('todos', JSON.stringify(current));

}

