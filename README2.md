# 專題內容：森活營家-露營入口網站

一個方便尋找與預訂營地的平台，另可以購買商品、集點、參加活動等等，同時也提供營地主自行上架營地。

個人主要負責部分：營地細節頁、結帳流程，前端部分使用React和Bootstraps，後端則使用Node.js與資料庫做連結。



## 網站示意
### 首頁

![首頁](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/159330736-1b78f3c9-6612-4cec-b954-65e6500152fa.png)

### 營地列表

旁邊可以選擇不同地區做篩選

![營地列表](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/camplist.png)

### 營地細節
點擊小圖示可以更換大圖，也能直接進行滑動，這裡使用了一個react-slick的套件  
下方左邊，則用bootstrap4的頁籤作為設施介紹以及須知的切換  
右邊則是串接了leaflet的openstreetmap的地圖api，可以讓使用者查看營地周圍的其他景點等  
地圖下方則是應用一個react-calendar的套件，可以讓使用者選擇要入住的期間  
最下方則是讓顧客能選擇帳篷數量及種類  


![營地細節](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/campDetail.png)


### 訂房資訊

這頁的react-calendar的套件，可以讓使用者更改要入住的期間  
帳篷數量也能在此做更改  
還有加購活動也是在此頁面進行選購  
這裡有使用一個折扣碼的判斷，連結資料庫做確認，若折扣碼正確則會顯示使用成功  

![訂房資訊](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/booking.png)
![訂房資訊](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/bookingfInfo.png)
![訂房資訊](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/prePay.png)
![訂房資訊](https://github.com/HaoQQQQ/Camp-5/blob/c27e5baf6cefa53197679234e985408b255817ca/images/done.png)
