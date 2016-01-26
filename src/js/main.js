
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
    $('#all-todos').append('<li>'+todo+'</li>');
    // update localStorage
    seedDataToLocalStorage(todo);
    // Clear input field on submission
    $('input').val('');
  });
});

// ** helper functions ** //

function seedDataToLocalStorage(todo) {
    if (todo) {
        var currentdata = getDataFromLocalStorage();
        currentdata.push(todo);
        localStorage.setItem('todos', JSON.stringify(currentdata));
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
        $('#all-todos').append('<li>'+todo+'</li>');
    });
}