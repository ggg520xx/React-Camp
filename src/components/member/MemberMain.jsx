// 這個是管理 主右側的內容 左側是外資料夾的 Layout
// 目前這裡的 content 又分為 上下層分開的路徑 版面寫法  這個裡面 main like mange 只管理 右側下半內容而已 其他不會控制到
import React, { useState, useEffect } from "react";


import { DivContentZone } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';


// import MemberEmptyStyle from './MemberStyle'



function MemberMain() {


    let userIdOrder = localStorage.getItem('id');
    console.log(userIdOrder)

    function useData() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=false&orderCancel=false&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const userOrder = response.data
                    console.log(userOrder)
                    setData(userOrder);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const dataIng = useData();


  


    let status = 'ing'


    return (
        <>
            <DivContentZone className="py-5">

                <div className='h-[70px]'>
                    <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">{dataIng && dataIng.length}</span> 筆 行程待進行或進行中</h2>
                    <strong>準備好開始您的行程了嗎</strong>
                </div>





                {/* 我把沒有行程記錄 的相關顯示 也寫在統一模版 這樣可以寫一次就好 */}
                {/* {!dataIng || dataIng.length === 0 ?
                    <div className='py-10'>
                        <MemberEmptyStyle  />
                        <h3 className="mt-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>當前並無行程
                        </h3>  
                    </div>
                    : null} */}




                <MemberBasic getdata={dataIng} status='ing' />

















            </DivContentZone>
        </>
    );
}







export default MemberMain;
// 匯出這個函式功能


