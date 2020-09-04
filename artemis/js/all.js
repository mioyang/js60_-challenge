//Day 51+52
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
            // console.log(newData)
            // renderRooms(newData);
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
    // let roomsData = newData;
    if (roomsData.length === 6) {
        roomsData.forEach((item) => {
            roomElement += ` 
            <div class="roomBox col-12 p-0 border-0 bg-cover" style="background: url(${item.imageUrl[0]});">
                <div class="roomInfo col-4 h-100">
                    <div class="title">客房介紹</div>
                    <div class="roomName">${item.name}</div>
                    <p class="normalPrice"><small>平日</small> NT$ ${item.normalDayPrice}</p>
                    <p class="roomDescription">${item.description}</p>
                    <a href="./room.html?id=${item.id}" class="moreBtn">LEARN MORE</a>
                </div>
            </div>`;
        });
    }
    roomsList.innerHTML = roomElement;
    // roomsList.appendChild(roomElement);
    // roomsList.insertAdjacentHTML('afterbegin', roomElement);

    if ( $('.roomBox').length === 6 ) {
        // console.log($('.roomBox').length)
        $('.roomWrap').slick({
            dots: true,
            autoplay: false,
            arrows: true,
            infinite: true,
            speed: 3000,
            fade: true,
            cssEase: 'linear'
        });
    }
};


//渲染畫面 - 單一房間
const renderRoomDetail = () => {
    console.log('roomInfo', roomInfo);
    let roomElement = '';
    
    roomElement +=`
        <div class="col-6">
            <div class="roomTitle">
                <div class="logo"><img src="images/flogo.svg" alt=""></div>
                <h1 class="font-weight-bold mb-3 pb-2">${roomInfo.name}</h1>
            </div>
            <div class="w-50 roomImg">
                <div class="bg-cover imgbox" style="background:url(${roomInfo.imageUrl[0]});"></div>
                <div class="bg-cover imgbox" style="background:url(${roomInfo.imageUrl[1]});"></div>
                <div class="bg-cover imgbox" style="background:url(${roomInfo.imageUrl[2]});"></div>
            </div>
        </div>
        <div class="col-6 offset-md-6 p-5" id="roomDetail">
            <div class="col-12 py-3">
                <div class="h3 title mt-5">房型介紹<span>Introduction</span></div>
                <div class="roomPrice mb-3">
                <div class="h4"><small>平日</small> NT$ ${roomInfo.normalDayPrice}</div>
                <div class="h4 ml-5"><small>假日</small> NT$ ${roomInfo.holidayPrice}</div>
                </div>
                <p>${roomInfo.description}</p>
            </div>
            <div class="col-12 py-3">
                <div class="h3 title mt-5">房間規格<span>Specifications</span></div>
                <ul class="list-none">
                <li>房客人數限制：${roomInfo.descriptionShort.GuestMin} - ${roomInfo.descriptionShort.GuestMax}</li>
                <li>床型：${roomInfo.descriptionShort.Bed[0]}</li>
                <li>衛浴數量：${roomInfo.descriptionShort["Private-Bath"]} 間</li>
                <li>房間大小：${roomInfo.descriptionShort.Footage}坪 </li>
                </ul>
            </div>
            <div class="col-12 py-3">
                <div class="h3 title mt-5">入住須知<span>Notice</span></div>
                <ol>
                    <li>平日：週日 ~ 週四 / 假日：週五 ~ 週六、國定假日。</li>
                    <li>入住時間${roomInfo.checkInAndOut.checkInEarly}後，退房時間${roomInfo.checkInAndOut.checkOut}前，入住最晚保留時間${roomInfo.checkInAndOut.checkInLate}。</li>
                    <li>若因交通或其他因素需延遲入住，請事先電話告知延遲入住時間，若無告知，超過時間將取消保留訂房。</li>
                    <li>小孩若不佔床，不另收取費用，恕不提供備品使用。</li>
                    <li>免費提供嬰兒床、嬰兒澡盆、奶瓶消毒鍋及嬰兒沐浴備品(須事先預定)。</li>
                    <li>依菸害防治法，本旅店全面禁菸。</li>
                    <li>除導盲犬外，旅店禁止攜帶寵物進入。</li>
                    <li>寧靜的氣氛是我們所追求的，故只招待當天已預約之住客，謝絕親友團、訪客等入園參觀。</li>
                    <li>價格及內容有所異動時，不再另行通知。</li>
                </ol>
            </div>
        </div>
    `;
    singleRoom.innerHTML = roomElement;

    if ($('.roomImg').length > 0) {
        $('.roomImg').slick({
            autoplay: true,
            swipe: false,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 3000,
            fade: true,
            cssEase: 'linear'
        });
    }
}

// {
//     id: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
//     name: "Single Room",
//     imageUrl: Array(3),
//     normalDayPrice: 1380,
//     holidayPrice: 1500,
//     …
// }
// amenities: {
//     Wi - Fi: true,
//     Breakfast: true,
//     Mini - Bar: false,
//     Room - Service: false,
//     Television: true,
//     …
// }
// checkInAndOut: {
//     checkInEarly: "15:00",
//     checkInLate: "19:00",
//     checkOut: "10:00"
// }
// description: "Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi."
// descriptionShort: {
//     GuestMin: 1,
//     GuestMax: 1,
//     Bed: Array(1),
//     Private - Bath: 1,
//     Footage: 18
// }
// holidayPrice: 1500 id: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu"
// imageUrl: (3)["https://images.unsplash.com/photo-1551776235-dde6d…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80", "https://images.unsplash.com/photo-1526880792616-42…2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", "https://images.unsplash.com/photo-1515511856280-7b…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"] name: "Single Room"
// normalDayPrice: 1380 __proto__: Object

// 房客人數限制: 1~1
// 床型: Single
// 衛浴數量: 1
// 房間大小: 18
// Single Room is only reserved
// for one guest.There is a bedroom with a single size bed and a private bathroom.Everything you need prepared
// for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided.In the room there is AC and of course WiFi.

// Check In
// 15: 00 - 19: 00

// Check Out
// 10: 00

// Wi - Fi
