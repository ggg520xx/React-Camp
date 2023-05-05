




import React, { useState } from "react";


import { DivContentZone, DivCoverStyled } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'










function MemberOrder() {




    // const { user, start, end, campAmount } = props;
    const [data, setData] = useState({
        orders: [],
        orderCampTag: [],
        orderRanking: [],
        orderCampPhoto: [],
        pastOrders: [],
        pastOrderCampTag: [],
        pastOrderRanking: [],
        pastOrderCampPhoto: [],
        pastOrderCampRanked: [],
    })




    const [activeTab, setActiveTab] = useState(1); // 初始化活動的 tab
    // 藉由按鈕去更新 值狀態
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex); // 更新活動的 tab
    };







    return (
        <>

            <DivContentZone className="py-3 bg-soft_color">


                <div className='h-[60px]'>

                    <h2 className="text-xl font-bold">以下是你的 <span className="text-blue-500">1</span> 筆 訂單記錄</h2>
                    <strong>準備好開始您的行程了嗎</strong>

                </div>


                












                <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleTabChange(1)}>過去完成記錄</button>
                <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleTabChange(2)}>取消訂單記錄</button>


                {/* 原本的寫法是這個 */}
                {/* {activeTab === 1 && <p>This is the content for Tab 1.</p>}
                    {activeTab === 2 && <p>This is the content for Tab 2.</p>}
                    {activeTab === 3 && <p>This is the content for Tab 3.</p>} */}


                {/* 下面怪怪的 必須是 1號且同時有過去記錄 顯示過去記錄 否則顯示後者 */}
                {/* 下面怪怪的 必須是 2號且同時有取消記錄 顯示取消記錄 否則顯示後者 */}

                {/* 點選為1或2  並且同時有值  activeTab === 1 && XX = TRUE 之後補上資料*/}

                {activeTab === 1 ?











                    <MemberBasic />











                    : <div> 無記錄 </div>}






                {activeTab === 2 ? <div> 有取消 </div> : <div> 目前並無記錄 </div>}







            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



