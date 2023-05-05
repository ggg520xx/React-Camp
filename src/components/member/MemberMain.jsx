// 這個是管理 主右側的內容 左側是外資料夾的 Layout
// 目前這裡的 content 又分為 上下層分開的路徑 版面寫法  這個裡面 main like mange 只管理 右側下半內容而已 其他不會控制到

// 目前這個的路徑是 無分 其他的則是細部

import React, { useState } from "react";


import { DivContentZone } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'










function MemberMain() {



  



























    return (
        <>

            <DivContentZone className="py-3 bg-soft_color ">



                <div className='h-[60px]'>

                    <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">1</span> 筆 行程待進行或進行中</h2>
                    <strong>準備好開始您的行程了嗎</strong>

                </div>























                <MemberBasic />

















            </DivContentZone>
        </>
    );
}







export default MemberMain;
// 匯出這個函式功能


