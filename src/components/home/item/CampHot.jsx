// import indexIcon from '../../../images/index/indexIcon.png';
import { indexIcon, hot1, hot2, hot3, solidstar, halfstar, emptystar } from '../../../images/index/IndexMange';
// import Stars from './Stars';  //那個jsx -等之後知道評價取值再使用我引入的星星調整
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';





import React, { useState } from 'react';
import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';



const CampHot = (props) => {


    // 創造陣列數組 我記得第二週星星評價 用過類似 (這邊沒用到) 我原本想做loop但感覺麻煩算ㄌ
    // https://stackoverflow.com/questions/70213667/how-to-loop-react-elements-for-a-specific-amount-of-times
    // const round = [...Array(6).keys()];


    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { AllCampGet } = useMyContextSearch(MyContextSearch);

    // api get 的時間差會有延遲 且做時間較長放前面的排序
    const hotCamps = AllCampGet?.filter(item => item.hotday > 0).sort((a, b) => b.hotday - a.hotday);;
    console.log(hotCamps)



    try {
        // 在這裡放置可能發生錯誤的代碼
    } catch (error) {
        // 在這裡放置當錯誤發生時處理錯誤的代碼
    }



    return (
        <>



            <div className='pb-8'>



                <div className="flex p-5  justify-center items-end">
                    {/* <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                <FontAwesomeIcon icon={faAtom} className="w-12 h-12" /> */}
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                    <h2 className="font-semibold text-center text-4xl">熱門新增營區</h2>
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                </div>

                {/* 分配排版 三直列 和 間隔 */}
                <div className="grid grid-cols-3 gap-5">


                    {/* 單個 佔位1直列 以及點擊hook記錄 目的營區 */}


                    {hotCamps ? hotCamps.map((item, index) => (

                        <div className="relative col-span-1 mt-5 bg-white" onClick={() => { }}>


                            {/* <Link to="/about">About</Link> */}
                            <Link to={`/page/${item.id}`} key={item.id} className="block  ">

                                {/* 包裹img和文字欄 */}
                                <div>

                                    {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                                    {/* <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" /> */}

                                    {item?.showLogo ? <img src={require(`../../../../assets/showLogo/${item.showLogo}`)} className="hover:opacity-80 h-full min-h-[200px] max-h-[210px] w-full object-cover" alt="" /> : <img className='h-full max-h-[210px] w-full object-cover' src={require('../../../images/search/collect/404.png')} alt="" />}
                              



                                    {/* 此處包裹為下層文字區塊 */}
                                    <div className=" text-gray-900 min-h-[30px] text-left px-6 py-5">


                                        <div className='row items-center py-2'>

                                            <div className='col-6 p-0'>
                                                {/* 營區名稱和地點在哪 */}
                                                <h5 className="font-bold tracking-wider text-xl">{item.name}</h5>
                                            </div>

                                            <div className='col-6 p-0'>

                                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                                <div className='flex items-center justify-end'>
                                                    <p className="text-md flex">
                                                        {/* star 星星的map計算引入匯出 現在就用img */}
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                    </p>

                                                </div>
                                            </div>



                                        </div>







                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                            <strong className=''>地點：{item.address}</strong>
                                        </p>


                                        {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                        {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}

                                        <div className='py-2 flex flex-wrap'>

                                            {item.tag['小木屋營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">小木屋營區類</span>}

                                            {item.tag['露營車營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">露營車營區類</span>}
                                            {item.tag['其他遮蔽建物'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">其他遮蔽建物</span>}
                                            {item.tag['僅提供營地類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">僅提供營地類</span>}
                                            {item.tag['盥洗淋浴設施'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">盥洗淋浴設施</span>}
                                            {item.tag['提供租借裝備'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">提供租借裝備</span>}
                                            {item.tag['供早或晚餐點'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供早或晚餐點</span>}
                                            {item.tag['供導覽或活動'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供導覽或活動</span>}
                                            {item.tag['戲水區'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">戲水區</span>}
                                            {item.tag['可泡湯'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">可泡湯</span>}
                                            {item.tag['遮雨棚'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">遮雨棚</span>}
                                            {item.tag['停車位'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">停車位</span>}
                                            {item.tag['高海拔'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">高海拔</span>}
                                            {item.tag['森林內'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">森林內</span>}
                                            {item.tag['大草皮'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">大草皮</span>}
                                            {item.tag['近溪流'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">近溪流</span>}
                                            {item.tag['觀雲海'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">觀雲海</span>}
                                            {item.tag['看日出'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">看日出</span>}




                                        </div>







                                    </div>


                                </div>

                            </Link>




                            {/* 連結點擊外的地方有愛心收藏 */}

                            {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                            {/* rounded-full */}
                            {item.hotday > 0 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0 z-10" onClick={() => { }}>


                                <strong className="  text-lg font-bold text-my-green">New<span className='ml-2 italic'>!!</span></strong>

                                {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                {/* <FontAwesomeIcon icon={faBookmark} className="text-lg" /> */}


                                {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                            </div>}



                            {item.hotday >= 60 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0 z-20" onClick={() => { }}>


                                <strong className="  text-lg font-bold text-red-500">超人氣<span className='ml-2 italic'>!!</span></strong>

                                {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                {/* <FontAwesomeIcon icon={faBookmark} className="text-lg" /> */}

                            </div>}






                        </div>


                    )) : null}















                </div>





                {/* more */}
                <button className='mt-5 w-2/12 rounded-[30px] mx-auto  bg-p_color p-2 flex text-white justify-center items-center text-md text-grey-500 ' > <span className=''>看更多評價</span>   <FontAwesomeIcon icon={faCaretRight} className="ml-2" /></button>


            </div>


        </>
    )

}



export default CampHot;