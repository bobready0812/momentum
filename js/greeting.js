const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(aa) {
    aa.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add ("hidden");
   localStorage.setItem("username", username);
   paintGreetings(username);
  
}

function paintGreetings(username) {
    greeting.innerText =`Hello, ${username}`;
    greeting.classList.remove("hidden");
}


const savedUsername = localStorage.getItem("username");

if( savedUsername === null ) {
loginForm.classList.remove("hidden");
loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);
}