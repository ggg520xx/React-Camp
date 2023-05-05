import React, { useState } from "react";
import { DivContentZone } from '../memberBasic/MemberBasicStyle'
import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../images/search/SearchMange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange';




function MemberLike() {



    const [likeTab, setLikeTab] = useState(1); // 初始化活動的 tab
    // 藉由按鈕去更新 值狀態
    const handleLikeTabChange = (tabIndex) => {
        setLikeTab(tabIndex); // 更新活動的 tab
    };



    return (
        <>



            <DivContentZone className="py-3 bg-soft_color">
                {/* bg-soft_color */}

                {/* <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">1</span> 筆 行程待進行</h2>
                <strong>準備好開始您的行程了嗎</strong> */}




                <div>
                    <div className='h-[60px]'>
                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleLikeTabChange(1)}>北部營區</button>

                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleLikeTabChange(2)}>中部營區</button>

                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleLikeTabChange(3)}>南部營區</button>

                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleLikeTabChange(4)}>東部營區</button>

                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleLikeTabChange(5)}>外島營區</button>
                    </div>


                    <div>




                        {likeTab === 1 &&

                            <div className="row">

                                





                                

                                <div className="col-3">
                                    <div className="relative mt-5 bg-white h-full" onClick={() => { }}>


                                        {/* <Link to="/about">About</Link> */}
                                        <Link>

                                            {/* 包裹img和文字欄 */}
                                            <div>

                                                {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                                                <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                                                {/* 此處包裹為下層文字區塊 */}
                                                <div className=" text-gray-900 min-h-[30px] text-left px-6 py-5">


                                                    <div className='row items-center py-2'>

                                                        <div className='col-6 p-0'>
                                                            {/* 營區名稱和地點在哪 */}
                                                            <h5 className="font-bold tracking-wider text-xl">安可休閒露營區</h5>
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
                                                        <strong className=''>地區：xxx</strong>
                                                    </p>


                                                    {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                                    {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}

                                                    <div className='text-left py-2  flex flex-wrap'>
                                                        <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                                        
                                                    </div>







                                                </div>


                                            </div>

                                        </Link>




                                        {/* 連結點擊外的地方有愛心收藏 */}

                                        {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                                        <div className="rounded-full bg-white w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                                            {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                            <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                                            {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                                        </div>


                                    </div>

                                </div>





                                <div className="col-3">
                                    <div className="relative mt-5 bg-white h-full" onClick={() => { }}>


                                        {/* <Link to="/about">About</Link> */}
                                        <Link>

                                            {/* 包裹img和文字欄 */}
                                            <div>

                                                {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                                                <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                                                {/* 此處包裹為下層文字區塊 */}
                                                <div className=" text-gray-900 min-h-[30px] text-left px-6 py-5">


                                                    <div className='row items-center py-2'>

                                                        <div className='col-6 p-0'>
                                                            {/* 營區名稱和地點在哪 */}
                                                            <h5 className="font-bold tracking-wider text-xl">安可休閒露營區</h5>
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
                                                        <strong className=''>地區：xxx</strong>
                                                    </p>


                                                    {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                                    {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}

                                                    <div className='text-left py-2  flex flex-wrap'>
                                                        <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                                        <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                                        <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                                    </div>







                                                </div>


                                            </div>

                                        </Link>




                                        {/* 連結點擊外的地方有愛心收藏 */}

                                        {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                                        <div className="rounded-full bg-white w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                                            {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                            <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                                            {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                                        </div>


                                    </div>

                                </div>

                                






                            </div>
                        }


                        {likeTab === 2 && <p>This is the content for Tab 2.</p>}
                        {likeTab === 3 && <p>This is the content for Tab 3.</p>}
                        {likeTab === 4 && <p>This is the content for Tab 4.</p>}
                        {likeTab === 5 && <p>This is the content for Tab 5.</p>}




                    </div>






                </div>













            </DivContentZone>
        </>
    );
}

export default MemberLike;

// // 匯出這個函式功能
// {/* {likeTab === 1 ? <div> 1 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 2 ? <div> 2 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 3 ? <div> 3 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 4 ? <div> 4 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 5 ? <div> 5 </div> : <div> 目前並無記錄 </div>} */}