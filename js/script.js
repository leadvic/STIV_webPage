var loggedIn = false;

function enterKeyPressed(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    authenticate()
  }
}

function authenticate() {
  var password = document.getElementById('password').value;

  loggedIn = login(password);
  status();
}

function login(password) {
    var storedPassword = '1234';
    return password == storedPassword;
}

function status() {
  if(loggedIn) {
    location.href="code.html";
  } else {
    alert('Código Incorrecto');
  }
}
