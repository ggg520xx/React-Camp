import React, { useState, useEffect } from "react";
import { DivContentZone } from '../memberBasic/MemberBasicStyle'
import { campLike } from '../../images/member/MemberMange';

import axios from 'axios';
import MemberBasicLike from '../memberBasicLike/MemberBasicLike'


function MemberLike() {

    // ------------------------------------------------
    // 初始為0的頁面 藉由按鈕去更新值 和點擊的tab值狀態
    const [likeTab, setLikeTab] = useState(0); 
    
    // 點擊抓到值 去set 改變 likeTab 便可以提供顯示的元件
    const handleLikeTabChange = (tabIndex) => {   
        setLikeTab(tabIndex); // 更新活動的 tab
    };
    // ------------------------------------------------
    
    
    
    // ------------------------------------------------
    // 1.抓出這個userId 進行用戶資料抓出來 他裡面有個like的陣列例如[1, 3, 7, 8, 12]是用戶訂閱喜歡的營區   我藉由userLike = userInfo.like; 將他擺放到這個變數上
    
    // 2.然後我去抓營區資料, 藉由includ只抓出用戶喜歡的那幾個營區組為一個新陣列likedCamps
    // 這裡面的幾個營區就是用戶喜歡的

    // 抓出user
    let userId = localStorage.getItem('id');
    console.log(userId)

    function useData() {
        const [Data, setData] = useState(null); 
        useEffect(() => {
            axios.get(`http://localhost:3000/users/${userId}`)


                .then(response => {
                    // 到這邊是抓出用戶資料
                    const userData = response.data
                    console.log(userData)

                    // 如果有值
                    if (userData && userData.name && userData.like) {
                        const likeArray = userData.like
                        return likeArray
                        // setData(userData.like);   // 本來用 現在不需要
                    } else {
                        console.log('Something is not available');
                    }
                })
                .then(responseLike => {
                    // 這是剛剛上面的 喜歡的項目陣列
                    console.log(responseLike)

                    axios.get('http://localhost:3000/camps')
                        .then(responseCamp => {

                            // 這是全營區的資料賦予
                            const campAllInfo = responseCamp.data

                            // 全營區資料 藉由filter 抓出包含的id項目賦予到陣列
                            const likeCamps = campAllInfo?.filter(camp => responseLike.includes(camp.id));

                            // 產生出用戶喜歡的那幾個營區資料陣列
                            console.log(likeCamps);
                            setData(likeCamps)
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });

        }, []);
        return Data; 
    }
    const dataLike = useData();
    // ------------------------------------------------



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



                    {likeTab === 1 && <MemberBasicLike sortItem={dataLike} num={1} />}
                    {likeTab === 2 && <MemberBasicLike sortItem={dataLike} num={2} />}
                    {likeTab === 3 && <MemberBasicLike sortItem={dataLike} num={3} />}
                    {likeTab === 4 && <MemberBasicLike sortItem={dataLike} num={4} />}
                    {likeTab === 5 && <MemberBasicLike sortItem={dataLike} num={5} />}



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