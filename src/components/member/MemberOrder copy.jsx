


import React, { useState, useEffect } from "react";

import { DivContentZone, DivCoverStyled } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';

import { campOrder } from '../../images/member/MemberMange';







function MemberOrder() {


    // 過去和取消的選取
    const [uiTurn, setUiTurn] = useState(null);
    
    
    // 發送評價後的馬上刷新
    const [finFeedback, setFinFeedback] = useState(false);



    let userIdOrder = localStorage.getItem('id');
    console.log(userIdOrder)






    const [statusPast, setStatusPast] = useState(false);
    const [campDataResultPast, setCampDataResultPast] = useState([]);

    function useDataPast() {
        // 包函式抓不到是因為並沒有開關讓他重啟抓取
        useEffect(() => {

            const fetchCampData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=true&orderCancel=false&_expand=camp&_expand=campinfo`)

                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小

                    setCampDataResultPast(sortedOrder);

                } catch (error) {
                    console.error('Error fetching camp data:', error);
                }
            };



            // 取得回饋資料
            const fetchFeedbackData = async (campId) => {
                try {
                    const response = await axios.get(`http://localhost:3000/feedbacks?campId=${campId}`);
                    return response.data;
                } catch (error) {
                    console.error(`Error fetching feedback data for campId ${campId}:`, error);
                    return [];
                }
            };

            const getFeedbackDataForCamp = async () => {
                if (campDataResultPast && campDataResultPast.length > 0) {
                    const feedbackDataPromises = campDataResultPast.map((campItem) =>
                        // 這裡的跟搜尋頁的營區id抓取不一樣 這是訂單的所以依照訂單的 async fetch的物件格式來取得campId資料
                        fetchFeedbackData(campItem.campId)
                    );
                    const feedbackDataArray = await Promise.all(feedbackDataPromises);

                    const campDataWithFeedback = campDataResultPast.map((campItem, index) => {
                        const feedbackDataForCamp = feedbackDataArray[index] || [];

                        const scores = feedbackDataForCamp.map((feedbackItem) => feedbackItem.totalScore);

                        const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
                        const totalAverageScore = scores.length > 0 ? (totalScore / (scores.length * 5)).toFixed(1) : 0;
                        // toFixed(1); //只顯示到小數點後一位
                        const scoreNum = scores.length
                        // const averageScore = totalScore / scores.length;


                        return {
                            ...campItem,
                            totalScore,
                            totalAverageScore,
                            scoreNum,
                        };
                    });

                    console.log(campDataWithFeedback)
                    setCampDataResultPast(campDataWithFeedback);
                    // 或者根據您的需求，將結果存儲在其他狀態中
                }
            };
            fetchCampData()
            getFeedbackDataForCamp();
        }, [finFeedback]);
    }
    useDataPast()








    const [statusCancel, setStatusCancel] = useState(false);
    const [campDataResultCancel, setCampDataResultCancel] = useState([]);


    function useDataCancel() {
        useEffect(() => {


            const fetchCampData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderCancel=true&_expand=camp&_expand=campinfo`)


                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小
                    setCampDataResultCancel(sortedOrder);

                } catch (error) {
                    console.error('Error fetching camp data:', error);
                }
            };



            // 取得回饋資料
            const fetchFeedbackData = async (campId) => {
                try {
                    const response = await axios.get(`http://localhost:3000/feedbacks?campId=${campId}`);

                    return response.data;
                } catch (error) {
                    console.error(`Error fetching feedback data for campId ${campId}:`, error);
                    return [];
                }
            };

            const getFeedbackDataForCamp = async () => {
                if (campDataResultCancel && campDataResultCancel.length > 0) {
                    const feedbackDataPromises = campDataResultCancel.map((campItem) =>
                        // 這裡的跟搜尋頁的營區id抓取不一樣 這是訂單的所以依照訂單的 async fetch的物件格式來取得campId資料
                        fetchFeedbackData(campItem.campId)
                    );
                    const feedbackDataArray = await Promise.all(feedbackDataPromises);

                    const campDataWithFeedback = campDataResultCancel.map((campItem, index) => {
                        const feedbackDataForCamp = feedbackDataArray[index] || [];

                        const scores = feedbackDataForCamp.map((feedbackItem) => feedbackItem.totalScore);

                        const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
                        const totalAverageScore = scores.length > 0 ? (totalScore / (scores.length * 5)).toFixed(1) : 0;
                        // toFixed(1); //只顯示到小數點後一位
                        const scoreNum = scores.length
                        // const averageScore = totalScore / scores.length;


                        return {
                            ...campItem,
                            totalScore,
                            totalAverageScore,
                            scoreNum,
                        };
                    });

                    console.log(campDataWithFeedback)
                    setCampDataResultCancel(campDataWithFeedback);
                    // 或者根據您的需求，將結果存儲在其他狀態中
                }
            };
            fetchCampData()
            getFeedbackDataForCamp();
        }, [statusCancel]);

    }
    useDataCancel()







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

                {uiTurn === true && <MemberBasic getdata={campDataResultPast} status="past" reGetCon={statusPast} setReGetCon={setStatusPast} reGetFeedback={finFeedback} setReGetFeedback={setFinFeedback} userId={userIdOrder}  />}

                {uiTurn === false && <MemberBasic getdata={campDataResultCancel} status="cancel" reGetCon={statusCancel} setReGetCon={setStatusCancel} />}




            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



