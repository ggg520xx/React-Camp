


import React, { useState, useEffect } from "react";

import { DivContentZone, DivCoverStyled } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';

import { campOrder } from '../../images/member/MemberMange';







function MemberOrder() {


    // 過去和取消的選取
    const [uiTurn, setUiTurn] = useState(null);





    let userIdOrder = localStorage.getItem('id');
    console.log(userIdOrder)


    function useDataPast() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=true&orderCancel=false&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小
                   
                    console.log(sortedOrder)
                    setData(sortedOrder);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const dataPast = useDataPast();






    function useDataCancel() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderCancel=true&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小
                   
                    console.log(sortedOrder)
                    setData(sortedOrder);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const dataCancel = useDataCancel();





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
            <DivContentZone className="py-5">

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





                {uiTurn === null &&
                    <div className='py-10'>
                        <h3 className="mb-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>請選擇一個想查看的紀錄 （近期訂單會呈現於最上方）</h3>
                        
                        <img className='mx-auto rounded-[40px]' src={campOrder} alt="" />
                    </div>}

                {uiTurn === true && <MemberBasic getdata={dataPast} status='past' />}
                {uiTurn === false && <MemberBasic getdata={dataCancel} status='cancel' />}




            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



