//Day 48
let apiUrl = "https://hexschool-tutorial.herokuapp.com/api/";
const data = {};

//註冊事件元素
const signUp = document.querySelector('#signForm');
let signBtn = document.querySelector("#signBtn");
let signMail = signUp.querySelector(".mail");
let signPw = signUp.querySelector(".password");
let signMailmsg = signUp.querySelector(".feedbackMail");
let signPwmsg = signUp.querySelector(".feedbackPassword");
let signUsermsg = signUp.querySelector(".userFeedback");

//登入事件元素
const logIn = document.querySelector('#loginForm');
let loginBtn = document.querySelector("#loginBtn");
let loginMail = logIn.querySelector(".mail");
let loginPw = logIn.querySelector(".password");
let loginMailmsg = logIn.querySelector(".feedbackMail");
let loginPwmsg = logIn.querySelector(".feedbackPassword");
let loginUsermsg = logIn.querySelector(".userFeedback");



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
  //註冊表單清空
  signMail.value = '';
  signMail.classList.remove('is-valid');
  signMail.classList.remove('is-invalid');
  signPw.value = '';
  signPw.classList.remove('is-valid');
  signPw.classList.remove('is-invalid');
  signMailmsg.innerHTML = '';
  signPwmsg.innerHTML = '';
  signUsermsg.innerHTML = '';

  //登入表單清空
  loginMail.value = '';
  loginMail.classList.remove('is-valid');
  loginMail.classList.remove('is-invalid');
  loginPw.value = '';
  loginPw.classList.remove('is-valid');
  loginPw.classList.remove('is-invalid');
  loginMailmsg.innerHTML = '';
  loginPwmsg.innerHTML = '';
  loginUsermsg.innerHTML = '';
};


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
  }).catch((error) => {
    console.log('資料錯誤', error);
  });
  cleanData();
}


//註冊事件
signBtn.addEventListener("click", checkValid);
//登入事件
loginBtn.addEventListener("click", checkValid);

