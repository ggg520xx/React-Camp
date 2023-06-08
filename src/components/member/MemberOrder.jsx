


import React, { useState, useEffect } from "react";

import { DivContentZone, DivCoverStyled } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';

import { campOrder } from '../../images/member/MemberMange';







function MemberOrder() {

    let userIdOrder = localStorage.getItem('id');
    console.log(userIdOrder)


    // 過去和取消的選取
    const [uiTurn, setUiTurn] = useState(null);





    // 用於完成訂單 可以使用評價功能 的馬上刷新
    const [finFeedback, setFinFeedback] = useState(false);


    // 延遲獲取星星的
    const [delayGetStar, setDelayGetStar] = useState(false);


    const [campDataResultPast, setCampDataResultPast] = useState([]);


    // 額外控制 訂單抓取星星 如下若我完成評價finFeedback刷新抓值 會導致星星疊不到正確id上抓不到資料 需要馬上合併一次資料 否則會跳為抓不到資料
    // 所以用這個控制 再次抓取合併的功能 放在合併陣列內物件的監測處
    const [otherCon, setOtherCon] = useState(false);



    
    function useDataPast() {
        // const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=true&orderCancel=false&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小

                    console.log(sortedOrder)
                    // setData(sortedOrder);
                    setCampDataResultPast(sortedOrder)

                    setOtherCon(!otherCon)

                })
                .catch(error => {
                    console.log(error);
                });
        }, [finFeedback]);
        // return Data;
    }
    const dataPast = useDataPast();


    useEffect(() => {

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

        getFeedbackDataForCamp();
    }, [delayGetStar, otherCon]);
















    const [campDataResultCancel, setCampDataResultCancel] = useState([]);



    function useDataCancel() {
        // const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderCancel=true&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const userOrder = response.data
                    const sortedOrder = userOrder.sort((a, b) => b.id - a.id); // 根据id排序，由大到小

                    console.log(sortedOrder)
                    // setData(sortedOrder);
                    setCampDataResultCancel(sortedOrder)
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        // return Data;
    }
    const dataCancel = useDataCancel();



    useEffect(() => {

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

        getFeedbackDataForCamp();
    }, [delayGetStar]);
















    return (
        <>
            <DivContentZone className="py-5">

                <div className='h-[100px]'>

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
                    <div className='py-10 px-3'>
                        <h3 className="mb-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>請選擇一個想查看的紀錄 （近期訂單會呈現於最上方）</h3>

                        <img className='mx-auto rounded-[40px]' src={campOrder} alt="" />
                    </div>}

                {uiTurn === true && <MemberBasic getdata={campDataResultPast} status="past" delayGetStar={delayGetStar} setDelayGetStar={setDelayGetStar} reGetFeedback={finFeedback} setReGetFeedback={setFinFeedback} userId={userIdOrder} />}

                {uiTurn === false && <MemberBasic getdata={campDataResultCancel} status="cancel" delayGetStar={delayGetStar} setDelayGetStar={setDelayGetStar} />}




            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



