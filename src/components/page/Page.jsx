import PageGuide from './item/PageGuide';
import PagePic from './item/PagePic';
import PageInfo from './item/PageInfo';
import PageOverview from './item/PageOverview';
import PageReserve from './item/PageReserve';
import PageFeedback from './item/PageFeedback';
import PageNotice from './item/(未使用了)PageNotice';



import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from '../../plugins/particles/ParticlesConfig';



import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';



function Page(props) {



    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { canUsePageStatus, setCanUsePageStatus } = useMyContextSearch(MyContextSearch);
    console.log(canUsePageStatus)
    setCanUsePageStatus(true)

    // console.log(canUsePageStatus)

    const { id } = useParams();
    // 在這裡你可以使用 id 參數來取得你想要的項目資料
    // 例如：const item = getItemById(id);
    // 想在其他元件中使用id參數 可以將id作為一個 prop 傳遞給其他元件



    // 漂浮點狀特效 load func
    // ---------------------------------------------------------------
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    // -------------------------------- -------------------------------


    // 想在其他元件中使用id參數，你可以將id作為一個 prop 傳遞給其他元件
    // 在其他元件中，你可以使用props.id取得傳遞的參數








    const [feebackArrayInfo, setFeebackArrayInfo] = useState([]);



    function useFeedbackStarGet() {
        const [data, setData] = useState({
            totalScore: 0,
            totalAverageScore: 0,
            scoreNum: 0,
        });

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/feedbacks?campId=${id}`);

                    console.log(response.data);
                    const result = response.data;

                    // 抓出裡面的排列 越新的越前面
                    const sortedResult = result.sort((a, b) => b.jsDate - a.jsDate);
                    setFeebackArrayInfo(sortedResult)
                    // 賦值給他後 讓他設定 直接傳給我要用的評價 多人的評價陣列



                    // 計算各項目的平均值
                    const averages = ['giveservice', 'giveview', 'givedevice', 'giveclean', 'givetraffic'].reduce((acc, key) => {
                        const values = sortedResult.map((item) => item[key]);
                        const sum = values.reduce((total, value) => total + value, 0);
                        const average = values.length > 0 ? (sum / values.length) : 0;
                        acc[key] = average.toFixed(1);
                        return acc;
                    }, {});


                    const scores = result.map((feedbackItem) => feedbackItem.totalScore);
                    console.log(scores); //遍歷結果

                    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
                    const totalAverageScore = scores.length > 0 ? (totalScore / (scores.length * 5)).toFixed(1) : 0;
                    const scoreNum = scores.length;

                    setData({
                        totalScore,
                        totalAverageScore,
                        scoreNum,
                        ...averages, // 將各項目的平均值加入 data 物件中
                    });
                } catch (error) {
                    console.error('Error:', error);
                }
            };
            fetchData();
        }, []);

        return data;
    }
    const feedbackStar = useFeedbackStarGet();















    return (
        <>

            <Particles init={particlesInit} loaded={particlesLoaded} className="inset-0 w-full h-full absolute z-[-1] " params={ParticlesConfig} />


            <PageGuide />

            <div className="container wrapper py-5">
                <PagePic itemId={id} feedbackStar={feedbackStar} />
                <PageInfo itemId={id} />
                <PageReserve itemId={id} />
                <PageFeedback itemId={id} feedbackStar={feedbackStar} feebackArrayInfo={feebackArrayInfo} />
                <PageOverview itemId={id} />
                {/* <PageNotice itemId={id} /> */}
            </div>
        </>
    );
}

export default Page;
// 匯出這個函式功能