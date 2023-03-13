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



    // 首先導出id頁=id頁面 

    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { AllCampGet } = useMyContextSearch(MyContextSearch);

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
                <div className="rounded-full bg-gray-300 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                    {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                    <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                    {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
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