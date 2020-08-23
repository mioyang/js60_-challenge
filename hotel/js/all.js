//Day 49+50
let roomUrl = "https://challenge.thef2e.com/api/thef2e2019/stage6/";
let nowurl = location.search.split('=')[1];
const token = "CGgGz2y5DZ3xFQ5ubOt5S268uvKONejWTDZn5v2ISewAWaGdGWsA2vq07pPQ";
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

let roomsData = [];
let roomInfo = [];
let roomsList = document.querySelector("#roomList");
let singleRoom = document.querySelector("#singleRoom");

//判斷
window.onload = () => {
    getData(`${roomUrl}rooms`);
    // if (nowurl === undefined) {
    //     getData(`${roomUrl}rooms`);
    // } else {
    //     console.log('hello world');
    //     getData(`${roomUrl}room/${nowurl}`);
    // };
}

//取得所有房型資料
const getData = (apiUrl) => {
    axios.get(apiUrl, {
        headers
    }).then((res) => {
        newData = res.data.items;
        // console.log('list', newData);
        if (nowurl === undefined) {
            newData.forEach((item) => {
                let rid = item.id;
                getRoom(`${roomUrl}room/${rid}`);
            });
        } else {
            getRoom(`${roomUrl}room/${nowurl}`);
        }
    }).catch((error) => {
        console.log('連線異常', error);
    });
};


//取得所有單一房間資料
const getRoom = (apiUrl) => {
    axios.get(apiUrl, {
        headers
    }).then((res) => {
        if (nowurl === undefined) {
            roomsData.push(...res.data.room);
            roomsData.sort((a, b) => {
                return parseInt(a.normalDayPrice) - parseInt(b.normalDayPrice);
            });
            renderRooms();
        } else {
            roomInfo = res.data.room[0];
            // console.log(roomInfo);
            renderRoomDetail();
        }

        // console.log('newList', roomsData);

    }).catch((error) => {
        console.log('連線異常', error);
    });
};


//渲染畫面 - 房間列表
const renderRooms = () => {
    let roomElement = '';
    console.log('roomsData', roomsData);

    roomsData.forEach((item) => {
        roomElement += ` 
                <div class="card my-2">
                <a href="./room.html?id=${item.id}">
                <figure class="photo-hover"><img src = "${item.imageUrl[0]}" class="card-img-top" alt="${item.name}" ></figure>
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text text-secondary">NT$ ${item.normalDayPrice}</p>
                </div>
                </a>
                </div>`;
    });
    roomsList.innerHTML = roomElement;
};


//渲染畫面 - 單一房間
const renderRoomDetail = () => {
    // console.log('roomInfo', roomInfo);
    let roomElement = '';
    roomElement += `
        <h2 class="font-weight-bold border-bottom mb-3 pb-2 text-center">${roomInfo.name}</h1>
    `;
    singleRoom.innerHTML = roomElement;
}