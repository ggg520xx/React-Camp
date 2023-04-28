import ProcessTopStep from './item/ProcessTopStep';
import ProcessLeftReserve from './item/ProcessLeftReserve';
import ProcessRightCamp from './item/ProcessRightCamp';


import React, { useState, useEffect, useRef } from 'react';

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';







function Process(props) {



    // 傳id
    const { id, campinfoId } = useParams();






    // 抓取使用者到這個頁面 右側可以get的營區和區域 從區域去展開營區資訊
    function useGetRightCamp() {

        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/campinfos?id=${campinfoId}&_expand=camp`)
                .then(response => {
                    // console.log(response.data)
                    setData(response.data);
                    return response.data;
                })
                // .then(data => {
                //     bbb(data)
                // })
                .catch(error => {
                    console.log(error);
                })
        }, []);
        return Data;
    }
    const processRightInfo = useGetRightCamp();  

    
    console.log(processRightInfo)



    // 用戶填寫介面的狀態傳入翻轉判定
    const [turnLeft, setTurnLeft] = useState(true);

    return (
        <>


            <div className="container min-h-screen py-5">
                <ProcessTopStep turnStatus={turnLeft} />


                <div className="row">

                    <ProcessLeftReserve turnStatus={turnLeft} setTurnSwitch={setTurnLeft} getInfo={processRightInfo} />

                    <ProcessRightCamp getInfo={processRightInfo} />
                </div>

            </div>



        </>
    );
}

export default Process;
// 匯出這個函式功能