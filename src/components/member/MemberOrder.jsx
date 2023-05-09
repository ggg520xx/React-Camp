


import React, { useState, useEffect } from "react";

import { DivContentZone, DivCoverStyled } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';









function MemberOrder() {

    // const data = [/* 陣列物件資料 */];
    const dataPast = 2;
    const dataCancel = 3;



    // 過去和取消的選取
    const [uiTurn, setUiTurn] = useState(null);




    // const { user, start, end, campAmount } = props;

    // const [dataT, setDataT] = useState({
    //     orders: [],
    //     orderCampTag: [],
    //     orderRanking: [],
    //     orderCampPhoto: [],
    //     pastOrders: [],
    //     pastOrderCampTag: [],
    //     pastOrderRanking: [],
    //     pastOrderCampPhoto: [],
    //     pastOrderCampRanked: [],
    // })





    // const [activeTab, setActiveTab] = useState(1); // 初始化活動的 tab
    // // 藉由按鈕去更新 值狀態
    // const handleTabChange = (tabIndex) => {
    //     setActiveTab(tabIndex); // 更新活動的 tab
    // };



    // 用戶填寫介面的狀態傳入翻轉判定




    return (
        <>
            <DivContentZone className="py-5 bg-soft_color">

                <div className='h-[70px]'>

                    {/* <h2 className="text-xl font-bold">以下是你的 <span className="text-blue-500">1</span> 筆 訂單記錄</h2>
                    <strong>準備好開始您的行程了嗎</strong> */}


                    <button onClick={() => setUiTurn(true)}
                        className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${uiTurn && 'bg-my_green text-white'
                            }`}>過去完成記錄</button>


                    <button onClick={() => setUiTurn(false)}
                        className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${uiTurn === false && 'bg-my_green text-white'
                            }`}>取消訂單記錄</button>

                </div>





                {uiTurn === null && <p>請選擇一個想查看</p>}

                {uiTurn === true && <MemberBasic getdata={dataPast} />}
                {uiTurn === false && <MemberBasic getdata={dataCancel} />}

                {/* {uiTurn ? <MemberBasic getdata={dataPast} /> : <MemberBasic getdata={dataCancel} />} */}





















                {/* {activeTab === 1 ?<MemberBasic getdata={data} /> : <div> 無記錄 </div>} */}
                {/* {activeTab === 2 ? <div> 有取消 </div> : <div> 目前並無記錄 </div>} */}







            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



