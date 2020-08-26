//Day 49+50
let roomUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";
const token = "CGgGz2y5DZ3xFQ5ubOt5S268uvKONejWTDZn5v2ISewAWaGdGWsA2vq07pPQ";
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}

let roomsData = [];
var roomsList = document.querySelector("#roomList");

//取得資料
axios.get(roomUrl, {
  headers
}).then((res) => {
  // console.log('res', res.data)
  roomsData = res.data.items;
  renderRooms();
}).catch((error) => {
  console.log('連線異常', error);
});


//渲染畫面
const renderRooms = () => {
  let roomElement = '';
  console.log('roomsData', roomsData)
  roomsData.forEach((item) => {
    roomElement += ` 
        <div class="card my-2">
          <img src = "${item.imageUrl}" class="card-img-top" alt="..." >
          <div class="card-body">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-text text-secondary">NT$ ${item.normalDayPrice}</p>
          </div>
        </div>`;
  });
  roomsList.innerHTML = roomElement;
};