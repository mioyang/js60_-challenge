// Day44
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let show = document.querySelector(".show");

btn1.addEventListener("click", () => {
  let str = `<p>目前網址：<span class="text-success"> ${location.href} </span></p>`;
  show.style.display = "block";
  show.innerHTML = str;
});

btn2.addEventListener("click", () => {
  let str = `<p>目前主機：<span class="text-success"> ${location.host} </span></p>`;
  show.style.display = "block";
  show.innerHTML = str;
});

btn3.addEventListener("click", () => {
  let str = `<p>目前網域：<span class="text-success"> ${location.hostname} </span></p>`;
  show.style.display = "block";
  show.innerHTML = str;
});

btn4.addEventListener("click", () => {
  let str = `<p>目前路徑：<span class="text-success"> ${location.pathname} </span></p>`;
  show.style.display = "block";
  show.innerHTML = str;
});

btn5.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});



//Day 45
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");

btn6.addEventListener("click", () => {
  let google = "https://www.google.com/";
  window.location = google;
});

btn7.addEventListener("click", () => {
  let yahoo = "https://tw.yahoo.com/";
  window.location = yahoo;
});



//Day 46-1
let btnTom = document.querySelector("#btnTom");
let btnJohn = document.querySelector("#btnJohn");
let hexschool = "https://www.hexschool.com";

btnTom.addEventListener("click", () => {
  let id = btnTom.getAttribute('data-id');
  location.href = `${hexschool}/?recommend=${id}`;
});

btnJohn.addEventListener("click", () => {
  let id = btnJohn.getAttribute('data-id');
  location.href = `${hexschool}/?recommend=${id}`;
});



//Day 46-2
let btnTom2 = document.querySelector("#btnTom2");
let btnJohn2 = document.querySelector("#btnJohn2");

btnTom2.addEventListener("click", () => {
  let id = btnTom2.getAttribute('data-id');
  let newUrl = location.pathname + `?recommend=${id}`;
  location.href = newUrl;
});

btnJohn2.addEventListener("click", () => {
  let id = btnJohn2.getAttribute('data-id');
  let newUrl = location.pathname + `?recommend=${id}&like=1&login=true`;
  location.href = newUrl;
});


