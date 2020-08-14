// Day44
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let show = document.querySelector(".show");

btn1.addEventListener("click", getHref);
btn2.addEventListener("click", getHost);
btn3.addEventListener("click", getHostname);
btn4.addEventListener("click", getPathname);
btn5.addEventListener("click", pageReload);

function getHref () {
  let str = `<p>目前網址：<span class="text-success"> ${location.href} </span></p>`;
  show.style.display="block";
  show.innerHTML = str;
};

function getHost() {
  let str = `<p>目前主機：<span class="text-success"> ${location.host} </span></p>`;
  show.style.display="block";
  show.innerHTML = str;
};

function getHostname() {
  let str = `<p>目前網域：<span class="text-success"> ${location.hostname} </span></p>`;
  show.style.display="block";
  show.innerHTML = str;
};

function getPathname() {
  let str = `<p>目前路徑：<span class="text-success"> ${location.pathname} </span></p>`;
  show.style.display="block";
  show.innerHTML = str;
};

function pageReload() {
  e.preventDefault();
  window.location.reload();
};



//Day 45
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");

btn6.addEventListener("click", toGoogle);
btn7.addEventListener("click", toYahoo);

function toGoogle() {
  let google = "https://www.google.com/";
  window.location = google;
};

function toYahoo() {
  let yahoo = "https://tw.yahoo.com/";
  window.location = yahoo;
};



//Day 46
let btnTom = document.querySelector("#btnTom");
let btnJohn = document.querySelector("#btnJohn");
let hexschool = "https://www.hexschool.com";

btnTom.addEventListener("click", recommendTom);
btnJohn.addEventListener("click", recommendJohn);

function recommendTom() {
  let id = btnTom.getAttribute('data-id');
  location.href = `${hexschool}/?recommend=${id}`;
}

function recommendJohn() {
  let id = btnJohn.getAttribute('data-id');
  location.href = `${hexschool}/?recommend=${id}`;
}



