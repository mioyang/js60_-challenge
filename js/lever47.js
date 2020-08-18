//Day 47
let apiUrl = "https://hexschool-tutorial.herokuapp.com/api/signup";
let registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener( "click", () => {
  let mail = document.querySelector("#registerEmail").value;
  let pw = document.querySelector("#registerPassword").value;
  checkData(mail, pw);
  mail.value = "";
});



function checkData(mail, pw) {
  const data = {
    email: mail,
    password: pw
  }
  let feedback = document.querySelector(".feedback");

  axios.post(apiUrl, data).then((res) => {
    // console.log(res.data)
    if (res.data.success) {
      feedback.innerHTML += `<div class="alert alert-info">${res.data.message}</div>`;
    } else {
      feedback.innerHTML += `<div class="alert alert-danger">${res.data.message}</div>`;
    }
  }).catch((error) => {
    console.log('資料錯誤', error);
  });
  
};


