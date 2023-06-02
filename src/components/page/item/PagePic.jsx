// 基本核心和css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from 'swiper'


// -------------------------------------

import { p1, p2, p3, p4, p5, solidstar, halfstar, emptystar } from '../../../images/page/PageMange';
import "./itemStyle/PagePicStyle.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';



import React, { useState, useEffect } from 'react';
import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';


import axios from 'axios';



const PagePic = (props) => {


    // 控制重新抓取get的按鈕開關 給useEffect綁定 這個的set設定給 收藏按鈕上 他會去點擊開關 並執行對應的陣列抓取push或移除 然後patch
    const [conswitch, setConSwitch] = useState(true);
    // 如果這個設成全頁面狀態管理的話 可以點擊同時控制到所有的頁面重新get

    // 這是抓取後設定的用戶喜歡的數字陣列 這個數字陣列會拿去跟當前跑出來的campId做比較 判斷是否為喜歡的收藏
    const [likeArray, setLikeArray] = useState([]);

    // 抓出用戶登入的id
    let userId = localStorage.getItem('id');
    const useUserData = () => {
        // const [Data, setData] = useState([]);
        useEffect(() => {
            if (userId) {
                console.log('有登入');
                axios.get(`http://localhost:3000/users/${userId}`)
                    .then((response) => {

                        const userData = response.data;
                        console.log(userData);

                        if (userData && userData.name && userData.like) {
                            const likeArray = userData.like;
                            console.log(likeArray);
                            // setData(likeArray)
                            setLikeArray(likeArray)

                        } else {
                            console.log('Something is not available');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log('無登入');
            }
        }, [conswitch]); // 將 conswitch 加入作為 useEffect 的相依 點擊收藏的開關
        // return Data; 如果需要回傳值，可以在這裡回傳
        return null;
    };
    // 在組件渲染時調用 useUserData 賦予給他
    // const userLikeData = useUserData();
    useUserData(); //改成執行一次




    const handleClick = (campId, event) => {

        event.preventDefault(); //防止觸發父層
        // event.stopPropagation();  //這還是會觸發父層元素的冒泡

        if (loginStatus) {
            if (likeArray.includes(campId)) {
                // 如果陣列中已經有 campId，則從陣列中移出
                const updatedLikeArray = likeArray.filter((id) => id !== campId);
                // 使用 axios.patch 將更新後的陣列傳送至伺服器
                axios.patch(`http://localhost:3000/users/${userId}`, { like: updatedLikeArray })
                    .then((response) => {
                        console.log('喜歡的營區已更新', response.data);
                        // 在此處執行適當的操作，例如更新狀態或重新載入資料等
                        // setLikeArray(updatedLikeArray);
                        setConSwitch(!conswitch) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
                    })
                    .catch((error) => {
                        console.log('更新喜歡的營區時發生錯誤', error);
                    });
            } else {
                // 如果陣列中沒有 campId，則將其加入陣列
                const updatedLikeArray = [...likeArray, campId];
                // 使用 axios.patch 將更新後的陣列傳送至伺服器
                axios.patch(`http://localhost:3000/users/${userId}`, { like: updatedLikeArray })
                    .then((response) => {
                        console.log('喜歡的營區已更新', response.data);
                        // 在此處執行適當的操作，例如更新狀態或重新載入資料等
                        // setLikeArray(updatedLikeArray);
                        setConSwitch(!conswitch) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
                    })
                    .catch((error) => {
                        console.log('更新喜歡的營區時發生錯誤', error);
                    });
            }
        }
    };











    // 首先導出id頁=id頁面 

    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { AllCampGet, loginStatus } = useMyContextSearch(MyContextSearch);

    // 在這裡你可以使用 id 參數來取得你想要的項目資料
    // 例如：const item = getItemById(id);
    const id = props.itemId;


    // 創建一個函式，根據傳入的id參數取得特定的項目
    // 假設有一個名為items的陣列，其中包含許多不同的項目，每個項目都有一個唯一的id欄位
    function getItemById(id) {
        // console.log(AllCampGet) 確保陣列中有元素
        return AllCampGet?.find((item) => item.id == id);
    }
    // 使用 == 才抓的到資料   使用恆等運算子 === 導致結果為 undefined
    // 可能是因為您的陣列中的元素的 id 欄位的資料類型與您指定的搜尋值的資料類型不同
    const item = getItemById(id);
    console.log(item)







    // 抓營區主人和高度時 我忘記能直接針對需要的資料來抓取不用比對 那邊多打了api 也不用比對
    // 所以那邊可能比較耗能且麻煩不好寫

    // 因此這邊我直接針對 id 需要的那筆photo來跑就好


    // 全露營地照片5張
    function useAllCampPhoto() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/photos?campId=${id}`)
                .then(response => {
                    console.log(response.data)


                    // const allhigh = response.data
                    // const singleHigh = allhigh?.filter(newItem => newItem.id == item.highId);


                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const campPhoto = useAllCampPhoto();

















    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <>
            <div className='relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border'>


                <div className="flex flex-col justify-around items-start py-3">

                    <h5 className="font-bold text-2xl mb-3">{item.name}</h5>

                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        <strong>地點：{item.address}</strong>
                    </p>




                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                    <div className='flex items-center justify-between w-full'>


                        <div className="text-md flex items-center ">

                            {/* star 星星的map計算引入匯出 現在就用img */}

                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />

                            <span>4.7</span>
                            <span>(45)</span>
                        </div>

                        {/* <div>

                            <h6 className="">
                                <span className='text-p_color text-3xl font-bold'>$1300</span>
                                <span className='font-bold'>/ 晚</span>
                            </h6>

                        </div> */}
                    </div>

                </div>


                
               


                {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                <div className="rounded-full bg-gray-200 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={(event) => handleClick(item.id, event)}>



                    {/* 有登入的話 再來進行 是不是喜歡的喜歡的為黃色 不是喜歡的灰色 */}
                    {/* 有登入的狀態 點擊觸發 變換 */}
                    {loginStatus ? (
                        <>
                            {likeArray.includes(item.id) ? (
                                <FontAwesomeIcon icon={faBookmark} className="text-lg text-my_yellow" style={{ cursor: "pointer" }} />
                            ) : (
                                <FontAwesomeIcon icon={faBookmark} className="text-lg text-soft_color" style={{ cursor: "pointer" }} />
                            )}
                        </>
                    ) : (
                        // 而未登入一律全跑灰色
                        <FontAwesomeIcon icon={faBookmark} className="text-lg text-soft_color" style={{ cursor: "pointer" }} />
                    )}




                </div>






                


                <div className="h-[800px]">

                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        grabCursor={true}

                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

                        style={{
                            "--swiper-navigation-color": "#FFF",
                            "--swiper-pagination-color": "#FFF",
                        }}

                        className='relative overflow-hidden h-4/5 w-full object-cover '
                    >


                        {campPhoto ? campPhoto?.map((item, index) => (



                            <SwiperSlide key={index}>
                                <img  src={require(`../../../../assets/campPhoto/${id}/${item.image}`)} alt="product images" className='block h-full w-full object-cover ' />
                            </SwiperSlide>



                        )) : null}







                        {/* <SwiperSlide >
                            <img src={p1} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p2} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p3} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p4} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p5} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide> */}











                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}

                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[FreeMode, Navigation, Thumbs]}

                        freeMode={true}
                        watchSlidesProgress={true}
                        className='mySwiper h-1/5 py-2.5'
                    >

                        {campPhoto ? campPhoto?.map((item, index) => (


                            <SwiperSlide key={index}>
                                <img src={require(`../../../../assets/campPhoto/${id}/${item.image}`)} alt="product images" className='block h-full w-full object-cover ' />
                            </SwiperSlide>


                        )) : null}


                    </Swiper>

                </div>

            </div>

        </>
    );

}

export default PagePic;