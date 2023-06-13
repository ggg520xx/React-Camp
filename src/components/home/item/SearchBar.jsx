// import indexBanner from '../../../images/index/index.jpg';
import { indexBanner, indexBanner2, indexBanner3, indexBanner4, coverBanner } from '../../../images/index/IndexMange';
import { Link, useNavigate } from "react-router-dom";


import { SearchBarGlowColor1, SearchBarGlowColor2, SearchBarGlowColor3, SearchBarGlowColor4, SearchBarShadow, SearchBarShadow2, Searchtext } from './itemStyle/SearchBarStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


// 基本核心和css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// 其他效果 required modules
// Swiper想要調整一些API，例如：要加入導覽箭頭、頁數...等。都會把相關的參數寫到物件之中
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

import "swiper/css/autoplay";
// import "swiper/css/zoom";
// import 'swiper/css/scrollbar';

import "./itemStyle/sup.css";



// ----------------------------------

import React, { useState } from 'react';
import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';

import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';




function SearchBar(props) {





    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { inputGlobal, setInputGlobal } = useMyContextSearch(MyContextSearch);

    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { areaChoose, setAreaChoose, areaChooseId, setAreaChooseId } = useMyTagShowHide(MyTagShowHide);

    // // 新增輸入想改變
    const [inputChange, setInputChange] = useState("");


    // 一定要這段
    const navigate = useNavigate();



    const inputStyle = {
        width: "66%",
        borderBottomLeftRadius: "40px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
    }




    return (
        <>


            {/* 看到以下error 把Ally徹底拔掉*/}
            {/* https://ithelp.ithome.com.tw/articles/10302581?sc=iThelpR */}


            {/* banner (background) tailwind JSX 難以用css 以下有解決方法 */}
            {/* https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js */}




            {/* <img src={indexBanner} alt="" className="w-full max-h-[70vh] object-cover rounded-b-[100px]" /> */}

            {/* <div className="w-full h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBanner})` }}> </div> */}


            <div className="w-full h-full relative coverBanner">

                <Swiper
                    // 告訴 Swiper 這個會用到多少module
                    modules={[Pagination, Navigation, EffectFade, Autoplay]} // 引入module 

                    slidesPerView={1} //一頁顯示幾個slide 
                    spaceBetween={30} //Slide之間的距離 


                    autoplay={{
                        delay: 1000,   // 停留此照片時間
                        disableOnInteraction: false,
                    }}
                    loop={true} // 循环模式选项
                    // zoom={{ maxRatio: 3 }}
                    speed={1000} // 轉換下一張的速度 快或慢

                    pagination={{
                        // clickable: true, //頁數 
                        dynamicBullets: true,
                    }}
                    effect={"fade"}
                    // navigation={true} //左右箭頭導航 
                    // scrollbar={{ draggable: true }} //滾動條

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="flex flex-col justify-center !z-[-3] "
                >

                    {/* scale-125 transition-transform ease-in delay-1000 duration-1000 */}
                    {/* ease-in-out transform scale-125 transition duration-500 */}
                    {/* className="flex flex-col justify-center w-6/12" */}


                    <SwiperSlide>
                        <div className='item'>
                            <picture>
                                <img src={indexBanner} alt="" className="w-full h-[80vh] sm:h-[90vh] md:h-[95vh] lg:h-screen object-cover " />
                            </picture>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item'>
                            <picture>
                                <img src={indexBanner2} alt="" className="w-full h-[80vh] sm:h-[90vh] md:h-[95vh] lg:h-screen object-cover " />
                            </picture>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <picture>
                                <img src={indexBanner3} alt="" className="w-full h-[80vh] sm:h-[90vh] md:h-[95vh] lg:h-screen object-cover " />
                            </picture>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <picture>
                                <img src={indexBanner4} alt="" className="w-full h-[80vh] sm:h-[90vh] md:h-[95vh] lg:h-screen object-cover " />
                            </picture>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* style={{ background-color: rgba(0, 0, 0, 0.6) }} */}

                {/* ------------------------------------------------------ */}

                {/* 搜尋框的陰影遮罩 外容器的75％ 及控制位置 */}
                <SearchBarShadow className="flex flex-col justify-center sm:w-3/5 md:w-3/5 lg:w-7/12 xl:w-2/4 2xl:w-2/4">

                    {/* 控制內部搜尋框 的最大大小 2xl以上範圍為 外容器的80％ 2xl:max-w-[80%]拿掉 */}
                    <div className="relative p-6 w-full  mx-auto">

                        {/* 彩色邊框 的外型內推 搜尋框*/}
                        <div className="overflow-hidden z-0 rounded-full relative p-1">

                            {/* 最中間白色搜尋框樣式  input_search 這是live2d對話用*/}
                            <form action="" className="relative xs:block flex z-50 bg-white rounded-full">
                                <input id="input_search" value={inputChange} onChange={(e) => { setInputChange(e.target.value) }} type="text" placeholder="立即開啟你的行程，這次想去哪呢？(e.g. 地區、任一關鍵字或相關活動)" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" />

                                {/* 點擊後執行寫入 瞬間把input值 拿去使用 */}
                                <button disabled={inputChange === ''} className="bg-p_color text-white rounded-full font-semibold px-8 py-4 text-xs md:text-sm lg:text-md xl:text-lg hover:bg-my_green focus:bg-sub_color focus:outline-none" onClick={() => {

                                    setAreaChooseId(null)
                                    setAreaChoose(null)

                                    setInputGlobal(inputChange)
                                    navigate(`/search`)

                                }}>{inputChange ? '就找這個' : '隨意看看'}</button>
                            </form>
                            <SearchBarGlowColor1 className="z-10 bg-p_color absolute"></SearchBarGlowColor1>
                            <SearchBarGlowColor2 className="z-20 bg-sub_color absolute"></SearchBarGlowColor2>
                            <SearchBarGlowColor3 className="z-30 bg-my_yellow absolute"></SearchBarGlowColor3>
                            <SearchBarGlowColor4 className="z-40 bg-soft_color absolute"></SearchBarGlowColor4>
                        </div>
                    </div>
                </SearchBarShadow>





                <Searchtext className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-extrabold">
                    搜尋想去的地區，直接出發吧
                </Searchtext>


                {/* 第二搜尋框 之後調整 */}
                {/* <SearchBarShadow2 className="bg-white border" style={inputStyle}>
                    <div className="d-flex justify-content-between " >



                        <div className=" pl-3 d-flex " style={{ width: "90%" }} >

                            <div className=" p-2  pl-4 border-right" style={{ width: "35%", borderRight: "1px solid gray" }}>
                                <p className="mb-1 text-secondary" style={{ fontSize: 16 }}>
                                    <label htmlFor="where" className="m-0">
                                        <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                                        輸入地區或營區名稱 ...
                                    </label>
                                </p>
                                <input
                                    type="text"
                                    id="where"
                                    className="w-100 m-searchInput rounded-left font-weight-bold "
                                    placeholder="Hi！想去哪裡？"
                                    name="place"
                                    style={{ fontSize: 16 }}
                                />
                            </div>

                            <div className="inputHome p-2 pl-4 border-right" style={{ width: "45%", borderRight: "1px solid gray" }}>
                                <p className=" mb-1 text-secondary " style={{ fontSize: 16 }}>
                                    <label htmlFor="chooseDate" className="m-0">
                                        選擇入營及離營日期
                                    </label>
                                </p>


                            </div>

                            <div className="inputHome p-2 pl-4" style={{ width: "20%" }}>
                                <p className="mb-1 text-secondary " style={{ fontSize: 16 }}>

                                    選擇帳數
                                </p>

                                <select
                                    name="campAmount"
                                    className="w-100 border-0"
                                    id="exampleFormControlSelect1"
                                    style={{ outline: "none", fontSize: 16, cursor: "pointer" }}

                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>

                            </div>

                        </div>


                    </div>

                </SearchBarShadow2> */}



                {/* 樹林的cover白色區塊 */}
                <div className="w-full absolute -translate-y-[calc(100%-1%)]">
                    <picture >
                        <img src={coverBanner} alt="" className="w-full" />
                    </picture>
                </div>



            </div>


            {/* bg-fixed 固定背景 */}

            {/* <div className="relative border border-red-500 z-2">
                <div className="w-full absolute">
                    <picture >
                        <img src={coverBanner} alt="" className="w-full" />
                    </picture>
                </div>
            </div> */}









        </>
    );



}

export default SearchBar;