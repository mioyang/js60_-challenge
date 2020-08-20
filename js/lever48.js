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

//註冊欄位
let signMail = document.querySelector("#signEmail");
let signPw = document.querySelector("#signPassword");




//註冊事件
signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data.mail = signMail.value;
  data.pw = signPw.value;

  console.log(data);
  signUp.classList.add('is-validated');
  checkEmail(data.mail);
  // if (signUp.getAttribute("class") == 'is-invalid') {
  //   console.log('true');
  //   feedbackMail.innerHTML += `<p>hi</p>`
  // } else {
  //   console.log('nono')
  // }

});

//Email驗證
const checkEmail = (value) => {
  let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

  if (value === '') {
    signMail.classList.add('is-invalid');
    feedbackMail.innerHTML = `<p class="text-danger">Email不能為空</p>`;
    return true
  } else if (value.match(emailRule) === null) {
    signMail.classList.add('is-invalid');
    feedbackMail.innerHTML = `<p class="text-danger">Email格式錯誤</p>`
    return true
  } else {
    signMail.classList.remove('is-invalid')
    signMail.classList.add('is-valid');
    feedbackMail.innerHTML = '';
    return false
  }
};


//登入事件
// signBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let mail = document.querySelector("#signinEmail").value;
//   let pw = document.querySelector("#signinPassword").value;

// });



// Email 驗證
// function chkmail(item) {
//   let rule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
//   let isValue = item.value.trim()
//   if (isValue == '' || !rule.exec(isValue)) {
//     str.push('Email 格式錯誤')
//     chk[0] = false
//     item.classList.add('is-invalid')
//   } else {
//     chk[0] = true
//     item.classList.remove('is-invalid')
//   }
// }