import React, { useState } from "react";
import { DivContentZone } from '../memberBasic/MemberBasicStyle'
import { campLike } from '../../images/member/MemberMange';

import axios from 'axios';
import MemberBasicLike from '../memberBasicLike/MemberBasicLike'


function MemberLike() {


    const [likeTab, setLikeTab] = useState(0); // 初始化活動的 tab
    // 藉由按鈕去更新 值狀態
    const handleLikeTabChange = (tabIndex) => {
        setLikeTab(tabIndex); // 更新活動的 tab
    };



    return (
        <>

            <DivContentZone className="py-5 ">
                {/* bg-soft_color */}

                {/* <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">1</span> 筆 行程待進行</h2>
                <strong>準備好開始您的行程了嗎</strong> */}



                <div className='h-[70px]'>
                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 1 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(1)}>北部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 2 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(2)}>中部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 3 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(3)}>南部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 4 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(4)}>東部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 5 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(5)}>外島營區</button>
                </div>



                <div>

                    {likeTab === 0 &&
                        <div className='py-10'>
                            <h3 className="mb-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>請選擇一個想查看的紀錄</h3>
                            <img className='mx-auto rounded-[40px]' src={campLike} alt="" />
                        </div>}


                    


                    {likeTab === 1 && <MemberBasicLike />}
                    {likeTab === 2 && <MemberBasicLike />}
                    {likeTab === 3 && <MemberBasicLike />}
                    {likeTab === 4 && <MemberBasicLike />}
                    {likeTab === 5 && <MemberBasicLike />}




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