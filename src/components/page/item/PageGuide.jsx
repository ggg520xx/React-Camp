// 導覽頁面 引入滾動監控

import React, { useState } from "react";
import Scrollspy from 'react-scrollspy'
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { faSignOutAlt, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';


const PageGuide = (props) => {

    // 這是從失敗訂定傳過來的
    const { state } = useLocation();
    console.log(state)




    const navigate = useNavigate();
    const handleBack = () => {

        if (state) {
            navigate("/")
        }

        else {
            navigate(-1);
        }
    };










    return (
        <>

            {/* mx-auto 防止我寬度 改為 3/4 要置中 */}
            <div className="bg-my_black w-full min-h-[80px] p-5 mx-auto flex items-center mt-4 ">

                <div className='container'>

                    <div className="relative flex items-center justify-center">



                        {state ? <button className='absolute left-0 text-white text-lg' onClick={handleBack}>   <FontAwesomeIcon className="text-white" icon={faArrowLeft} />出現小問題,回首頁</button> : <button className='absolute left-0 text-white text-lg' onClick={handleBack}>   <FontAwesomeIcon className="text-white" icon={faArrowLeft} />上一頁</button>}

                        

                  



                    

                        {state ? null : <Scrollspy id="ul-link" items={['section-info', 'section-reserve', 'section-feedback', 'section-notice']} className="flex text-lg text-white" >

                            <li>
                                <a href="#section-info">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>營區資訊</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-reserve">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>營區預定</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-feedback">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>評價回饋</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-notice">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>營區須知</span>
                                    </h4>
                                </a>
                            </li>
                        </Scrollspy>}


                    </div>

                </div>
            </div>



        </>
    );

}

export default PageGuide;