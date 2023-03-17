import ProcessTopStep from './item/ProcessTopStep';
import ProcessLeftReserve from './item/ProcessLeftReserve';
import ProcessRightCamp from './item/ProcessRightCamp';


import React, { useState, useEffect, useRef } from 'react';

import { Link, useNavigate, useParams } from "react-router-dom";








function Process(props) {


    // 傳id
    const { id } = useParams();



    const [turnLeft, setTurnLeft] = useState(true);


    return (
        <>


            <div className="container min-h-screen py-5">
                <ProcessTopStep turnStatus={turnLeft} />


                <div className="row">

                    <ProcessLeftReserve turnStatus={turnLeft} setTurnSwitch={setTurnLeft} />

                    <ProcessRightCamp />
                </div>

            </div>



        </>
    );
}

export default Process;
// 匯出這個函式功能