//Day 48
let apiUrl = "https://hexschool-tutorial.herokuapp.com/api/";
const data = {};
const signUp = document.querySelector('#signForm')
const signIn = document.querySelector('#loginForm')

let signBtn = document.querySelector("#signBtn");
let loginBtn = document.querySelector("#loginBtn");

//feedback
let feedbackMail = document.querySelector(".feedbackMail");
let feedbackPassword = document.querySelector(".feedbackPassword");




//註冊事件
signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data.mail = document.querySelector("#signEmail").value;
  data.pw = document.querySelector("#signPassword").value;

  console.log(data);
  signUp.classList.add('is-invalid');
  if (signUp.getAttribute("class") == 'is-invalid') {
    console.log('true');
    feedbackMail.innerHTML += `<p>hi</p>`
  } else {
    console.log('nono')
  }

});

//登入事件
// signBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let mail = document.querySelector("#signinEmail").value;
//   let pw = document.querySelector("#signinPassword").value;

// });




