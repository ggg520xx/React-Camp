// 這個是管理 主右側的內容 左側是外資料夾的 Layout
// 目前這裡的 content 又分為 上下層分開的路徑 版面寫法  這個裡面 main like mange 只管理 右側下半內容而已 其他不會控制到
import React, { useState, useEffect } from "react";


import { DivContentZone } from '../memberBasic/MemberBasicStyle'

import MemberBasic from '../memberBasic/MemberBasic'
import axios from 'axios';
import { parse, compareAsc } from 'date-fns';



function MemberMain() {

    let userIdOrder = localStorage.getItem('id');
    console.log(userIdOrder)







    // 用於取消訂單 可以馬上刷新
    const [cancelOrder, setCancelOrder] = useState(false);

    // 延遲獲取星星的
    const [delayGetStar, setDelayGetStar] = useState(false);

    const [campDataResult, setCampDataResult] = useState([]);

    // 額外控制 訂單抓取星星 如下若我取消訂單cancelOrder刷新抓值 會導致星星疊不到正確id上抓不到資料 需要馬上合併一次資料 否則會跳為抓不到資料
    // 所以用這個控制 再次抓取合併的功能 放在合併陣列內物件的監測處
    const [otherCon, setOtherCon] = useState(false);



    
    function useDataIng() {

        // const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=false&orderCancel=false&_expand=camp&_expand=campinfo`)
                .then(response => {

                    const result = response.data;
                    console.log(result)

                    // date - fns引入 解析原本的 年月日 格式   转换为JavaScript日期对象，然后再进行排序
                    const sortedResult = result.sort((a, b) => {
                        const dateA = parse(a.roomStart, 'yyyy年MM月dd日', new Date());
                        const dateB = parse(b.roomStart, 'yyyy年MM月dd日', new Date());
                        return compareAsc(dateA, dateB);
                    });

                    setCampDataResult(sortedResult);

                    setOtherCon(!otherCon)

                })
                .catch(error => {
                    console.log(error);
                });
        }, [cancelOrder]);
        // return Data;
    }

    const dataIng = useDataIng();







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
            if (campDataResult && campDataResult.length > 0) {
                const feedbackDataPromises = campDataResult.map((campItem) =>
                    fetchFeedbackData(campItem.campId)
                );
                const feedbackDataArray = await Promise.all(feedbackDataPromises);

                const campDataWithFeedback = campDataResult.map((campItem, index) => {
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
                setCampDataResult(campDataWithFeedback);
                // 或者根據您的需求，將結果存儲在其他狀態中
            }
        };

        getFeedbackDataForCamp();
    }, [delayGetStar, otherCon]);













    // function useData() {
    //     // 包函式抓不到是因為並沒有開關讓他重啟抓取

    //     useEffect(() => {
    //         const fetchCampData = async () => {
    //             try {
    //                 const response = await axios.get(`http://localhost:3000/orders?userId=${userIdOrder}&orderExpired=false&orderCancel=false&_expand=camp&_expand=campinfo`)

    //                 const result = response.data;
    //                 console.log(result)

    //                 const sortedResult = result.sort((a, b) => {
    //                     const today = Date.now();
    //                     const diffA = Math.abs(today - a.jsDate);
    //                     const diffB = Math.abs(today - b.jsDate);
    //                     return diffA - diffB;
    //                 });



    //                 setCampDataResult(sortedResult);

    //             } catch (error) {
    //                 console.error('Error fetching camp data:', error);
    //             }
    //         };



    //         // 取得回饋資料
    //         const fetchFeedbackData = async (campId) => {
    //             try {
    //                 const response = await axios.get(`http://localhost:3000/feedbacks?campId=${campId}`);

    //                 return response.data;
    //             } catch (error) {
    //                 console.error(`Error fetching feedback data for campId ${campId}:`, error);
    //                 return [];
    //             }
    //         };

    //         const getFeedbackDataForCamp = async () => {
    //             if (campDataResult && campDataResult.length > 0) {
    //                 const feedbackDataPromises = campDataResult.map((campItem) =>
    //                     // 這裡的跟搜尋頁的營區id抓取不一樣 這是訂單的所以依照訂單的 async fetch的物件格式來取得campId資料
    //                     fetchFeedbackData(campItem.campId)
    //                 );
    //                 const feedbackDataArray = await Promise.all(feedbackDataPromises);

    //                 const campDataWithFeedback = campDataResult.map((campItem, index) => {
    //                     const feedbackDataForCamp = feedbackDataArray[index] || [];

    //                     const scores = feedbackDataForCamp.map((feedbackItem) => feedbackItem.totalScore);

    //                     const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
    //                     const totalAverageScore = scores.length > 0 ? (totalScore / (scores.length * 5)).toFixed(1) : 0;
    //                     // toFixed(1); //只顯示到小數點後一位
    //                     const scoreNum = scores.length
    //                     // const averageScore = totalScore / scores.length;


    //                     return {
    //                         ...campItem,
    //                         totalScore,
    //                         totalAverageScore,
    //                         scoreNum,
    //                     };
    //                 });

    //                 console.log(campDataWithFeedback)
    //                 setCampDataResult(campDataWithFeedback);
    //                 // 或者根據您的需求，將結果存儲在其他狀態中
    //             }
    //         };
    //         fetchCampData()
    //         getFeedbackDataForCamp();


    //     }, [delayGetStar]);

    // }
    // useData()





    return (
        <>
            <DivContentZone className="py-5">

                <div className='h-[100px]'>
                    <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">{campDataResult && campDataResult.length}</span> 筆 行程待進行或進行中</h2>
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





                <MemberBasic getdata={campDataResult} status="ing" delayGetStar={delayGetStar} setDelayGetStar={setDelayGetStar} cancelOrder={cancelOrder} setCancelOrder={setCancelOrder} />

















            </DivContentZone>
        </>
    );
}







export default MemberMain;
// 匯出這個函式功能


