let toggleBtn = document.querySelector(".toggle");
let indicator = document.querySelector(".ball");
let counter = document.querySelector(".count");
let decreaseBtn = document.querySelector(".decrease-btn");
let resetBtn = document.querySelector(".reset-btn");
let increaseBtn = document.querySelector(".increase-btn");

let username = prompt("Hello,what's your name?");

let welcome = document.createElement("h1");
welcome.textContent = `Welcome ${username},thanks for using my counter`;
if (username === "" || typeof(username)!== "string") {
  welcome.textContent = "Welcome user,thanks for using my counter";
}
welcome.classList.add("welcome");
document.body.appendChild(welcome)

let count = 0;


toggleBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  indicator.classList.toggle("dark");
  welcome.classList.toggle("dark");
  toggleBtn.classList.toggle("dark")
})

decreaseBtn.addEventListener("click",()=>{
  count--;
  counter.textContent = count;
})

resetBtn.addEventListener("click",()=>{
  count=0;
  counter.textContent = count;
})

increaseBtn.addEventListener("click",()=>{
  count++;
  counter.textContent = count;
})







