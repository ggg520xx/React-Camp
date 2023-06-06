import './FinishStyle.css'
import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange'

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';










function Finish() {

    const navigate = useNavigate();



    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { canUsePageStatus, setCanUsePageStatus } = useMyContextSearch(MyContextSearch);
    setCanUsePageStatus(false)


    // 這邊的state true false值 是決定顯示成功或失敗的 失敗的不會post
    const { state } = useLocation();
    console.log(state)





    function goTarget() {
        if (localStorage.getItem('prevpage')) {
            let id = localStorage.getItem('prevpage');
            navigate(`/page/${id}`, { state: true })
            localStorage.removeItem('prevpage');
        }
        else {
            navigate("/member")
        }
    }






    return (
        <>

            <div className="container min-h-screen py-5">

                <div className="step-wrap">
                    <div className="checkout-step">
                        <div className="step-list active">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">填寫訂購資料</div>



                            </div>
                        </div>
                        <div className="step-list active">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">填寫付款資料</div>
                            </div>
                        </div>
                        <div className="step-list active now">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">確認訂單成立</div>
                            </div>
                        </div>
                    </div>
                </div>





                {state.status ? (<div id="need-process_sucess" className="mb-3 h-full w-full rounded-md border border-gray-200 bg-my_green px-8 py-8 shadow-xl">



                    <FontAwesomeIcon className="text-white text-3xl pb-6" icon={faCheck} />



                    <h3 className='text-2xl font-bold text-white'>此訂單已成功預訂,非常感謝使用我們的服務</h3>

                    <div className='py-3'>

                        <div className='row justify-center'>

                            <div className='col-3  text-center text-white'>
                                <strong className='block'>訂單成立日期</strong>
                                <strong className='block'>訂單成立時間</strong>
                                <strong className='block'>訂單編號</strong>
                            </div>

                            <div className='col-3  text-center text-white'>
                                <strong className='block'>{state.order.bookDate}</strong>
                                <strong className='block'>{state.order.bookTime}</strong>
                                <strong className='block'>{ state.order.code}</strong>
                            </div>
                        </div>
                    </div>

                    <h3 className='text-md font-bold text-my_yellow'>若對此次訂購有疑慮，請於營業時間致電本網客服 02-2222222</h3>

                    <div className='pt-8'>
                        <input
                            className="text-md h-[50px] w-3/6 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                            type="submit"
                            value="會員頁面"
                            onClick={goTarget}
                        />
                    </div>
                </div>)

                    :


                    (<div id="need-process_fail" className="mb-3 h-full w-full rounded-md border border-gray-200 bg-my_green px-8 py-8 shadow-xl">




                        <FontAwesomeIcon className="text-white text-3xl pb-6" icon={faTimes} />

                        <h3 className='text-2xl font-bold text-white'>此訂單未成功預訂,請再次嘗試或來電詢問</h3>

                        <div className='py-3'>

                            <div className='row justify-center'>

                                <div className='col-3  text-center text-white'>
                                    <strong className='block'>訂單成立日期</strong>
                                    <strong className='block'>訂單成立時間</strong>
                                    <strong className='block'>訂單編號</strong>
                                </div>

                                <div className='col-3  text-center text-white'>
                                    <strong className='block'>未成立訂單日期</strong>
                                    <strong className='block'>未成立訂單時間</strong>
                                    <strong className='block'>無效預訂</strong>
                                </div>
                            </div>
                        </div>

                        <h3 className='text-md font-bold text-my_yellow'>若對此次訂購有疑慮，請於營業時間致電本網客服 02-2222222</h3>

                        <div className='pt-8'>
                            <input
                                className="text-md h-[50px] w-3/6 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                                type="submit"
                                value="回營區頁"
                                onClick={goTarget}
                            />
                        </div>
                    </div>)}




                <div className="border min-h-[500px]  w-full rounded-md border-gray-200 bg-gray-100 px-8 py-5 shadow-xl">


                    <div className="text-start min-h-[30px] pb-5 text-gray-900">


                        <h5 className=" text-lg font-bold tracking-wider">
                            露營地資訊
                        </h5>

                        <hr className=" mt-2 mb-2 bg-my_green h-[1px]" style={{ border: 'none' }} />


                        <div className="row pt-5">

                            <div className="col-6 ">
                                
                                {/* hover:opacity-80 */}

                                {/* <img
                                    src={hot1}
                                    className="min-h-[200px] w-full object-cover"
                                    alt=""
                                /> */}

                                {state?.camp?.showLogo ? <img className="min-h-[200px] w-full object-cover" src={require(`../../../assets/showLogo/${state.camp.showLogo}`)} alt="" /> : <img className="min-h-[200px] w-full object-cover" src={require('../../images/search/collect/404.png')} alt="" />}

                            </div>



                            <div className="col-6">

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區名稱：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>{ state.camp.name}</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區主人：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>{state.camp.owner.name}</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區地址：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>{state.camp.address}</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>聯絡方式：</strong>
                                    </div>
                                    <div className='col-7 text-left'>

                                        {state.camp.tel.map(tel => (
                                            <strong key={tel} className='block mb-2'>{tel}</strong>

                                        ))}


                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>其他資訊：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'> <Link to='/'>
                                            <FontAwesomeIcon className='mr-2' icon={faFacebook} />
                                        </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon className='mr-2' icon={faInstagram} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon className='mr-2' icon={faTwitter} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon className='mr-2' icon={faLine} />
                                            </Link></strong>
                                    </div>
                                </div>









                            </div>


                        </div>




                    </div>
                </div>





            </div>


        </>
    )
}

export default Finish
// 匯出這個函式功能



