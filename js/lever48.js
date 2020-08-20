//Day 48
let apiUrl = "https://hexschool-tutorial.herokuapp.com/api/";
const data = {};
const signUp = document.querySelector('#signForm');
const logIn = document.querySelector('#loginForm');

let signBtn = document.querySelector("#signBtn");
let loginBtn = document.querySelector("#loginBtn");

//clean form
let clearMail = document.querySelectorAll(".mail");
let clearPw = document.querySelectorAll(".password");
let feedbackUser = document.querySelectorAll(".userFeedback");
let feedbackMail = document.querySelectorAll(".feedbackMail");
let feedbackPw = document.querySelectorAll(".feedbackPassword");

//Email驗證
const checkEmail = (value) => {
  let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  let isValid = document.querySelector(".isValid");
  let feedbackMail = isValid.querySelector(".feedbackMail");
  let isMail = isValid.querySelector(".mail");

  if (value === '') {
    isMail.classList.add('is-invalid');
    feedbackMail.innerHTML = `<p class="text-danger">Email不能為空</p>`;
    return true
  } else if (value.match(emailRule) === null) {
    isMail.classList.add('is-invalid');
    feedbackMail.innerHTML = `<p class="text-danger">Email格式錯誤</p>`
    return true
  } else {
    isMail.classList.remove('is-invalid')
    isMail.classList.add('is-valid');
    feedbackMail.innerHTML = '';
    return false
  }
};

//密碼驗證
const checkPw = (value) => {
  let pwRule = /^(?=.*\d)(?=.*[a-z]).{0,6}$/;
  let isValid = document.querySelector(".isValid");
  let feedbackPw = isValid.querySelector(".feedbackPassword");
  let isPw = isValid.querySelector(".password");

  if (value === '') {
    isPw.classList.add('is-invalid');
    feedbackPw.innerHTML = `<p class="text-danger">密碼不能為空</p>`;
    return true
  } else if (value.match(pwRule) === null) {
    isPw.classList.add('is-invalid');
    feedbackPw.innerHTML = `<p class="text-danger">密碼需包含英數，最多8個字元</p>`
    return true
  } else {
    isPw.classList.remove('is-invalid')
    isPw.classList.add('is-valid');
    feedbackPw.innerHTML = '';
    return false
  }
};

//狀態切換
const checkValid = (e) => {
  e.preventDefault();
  let formValid = e.target.parentElement;
  data.mail = formValid.querySelector("input[type='email']").value;
  data.pw = formValid.querySelector("input[type='password']").value;
  console.log(data)

  if (formValid.getAttribute("id") == 'signForm') {
    logIn.classList.remove('isValid');
    formValid.classList.add('isValid');

    checkEmail(data.mail);
    checkPw(data.pw);

    if (checkEmail(data.mail) || checkPw(data.pw)) {
      return false
    } else {
      postData('signup', data);
      cleanData();
    }
  } else if (formValid.getAttribute("id") == 'loginForm') {
    signUp.classList.remove('isValid');
    formValid.classList.add('isValid');

    checkEmail(data.mail);
    checkPw(data.pw);

    if (checkEmail(data.mail) || checkPw(data.pw)) {
      return false
    } else {
      postData('signin', data);
      cleanData();
    }
  } else {
    console.log('資料錯誤！');
  }
};


//清除資料
const cleanData = (e) => {
  // if (!signUp.classList.contains('isValid')) {
  //   logIn.querySelector("#loginEmail").value = '';
  //   logIn.querySelector("#loginEmail").classList.remove('is-valid');
  //   logIn.querySelector("#loginEmail").classList.remove('is-invalid');

  // } else if (!logIn.classList.contains('isValid')) {
  //   // feedbackUser.innerHTML = '';
  //   // feedbackMail.innerHTML = '';
  //   // feedbackPw.innerHTML = '';
  //   // clearMail.value = '';
  //   // clearMail.classList.remove('is-valid');
  //   // clearMail.classList.remove('is-invalid');
  //   // clearPw.value = '';
  //   // clearPw.classList.remove('is-valid');
  //   // clearPw.classList.remove('is-invalid');
  // } else {
  //   return false
  // }

};

// const signUp = document.querySelector('#signForm');
// const logIn = document.querySelector('#loginForm');

//送出資料
const postData = (action, data) => {
  // console.log(action, data);
  let isValid = document.querySelector(".isValid");
  let feedbackUser = isValid.querySelector(".userFeedback");
  const userData = {
    email: data.mail,
    password: data.pw
  }


  axios.post(`${apiUrl + action}`, userData).then((res) => {
    // console.log(res.data);
    if (res.data.success) {
      feedbackUser.innerHTML += `<div class="alert alert-success">${res.data.message}</div>`;
    } else {
      feedbackUser.innerHTML += `<div class="alert alert-danger">${res.data.message}</div>`;
    }
  }).catch((erroe) => {
    console.log('資料錯誤', error);
  });
  cleanData();
}


//註冊事件
signBtn.addEventListener("click", checkValid);
//登入事件
loginBtn.addEventListener("click", checkValid);

