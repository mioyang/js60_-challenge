//Day 48
let apiUrl = "https://hexschool-tutorial.herokuapp.com/api/"; 
const data = {};
const signUp = document.querySelector('#signForm')
const signIn = document.querySelector('#loginForm')

let signBtn = document.querySelector("#signBtn");
let loginBtn = document.querySelector("#loginBtn");

//feedback-註冊
let feedback1 = document.querySelector(".feedbacksMail");
let feedback2 = document.querySelector(".feedbacksPassword");

//feedback-登入
let feedback3 = document.querySelector(".feedbacklMail");
let feedback4 = document.querySelector(".feedbacklPassword");


//註冊事件
signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data.mail = document.querySelector("#signEmail").value;
  data.pw = document.querySelector("#signPassword").value;

  console.log(data);
  signUp.classList.add('is-invalid');

});

//登入事件
// signBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let mail = document.querySelector("#signinEmail").value;
//   let pw = document.querySelector("#signinPassword").value;

// });




