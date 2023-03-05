import './FinishStyle.css'
import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange'


import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"

function Finish() {





    return (
        <>

            <div className="container min-h-screen py-5">

                <div class="step-wrap">
                    <div class="checkout-step">
                        <div class="step-list active">
                            <div class="step-item">
                                <div class="bar"></div>
                                <div class="step-name">填寫訂購資料</div>
                            </div>
                        </div>
                        <div class="step-list active">
                            <div class="step-item">
                                <div class="bar"></div>
                                <div class="step-name">填寫付款資料</div>
                            </div>
                        </div>
                        <div class="step-list active now">
                            <div class="step-item">
                                <div class="bar"></div>
                                <div class="step-name">確認訂單成立</div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="mb-3 h-full w-full rounded-md border border-gray-200 bg-my_green px-8 py-8 shadow-xl">



                    <h3 className='text-2xl font-bold text-white'>此訂單已成功預訂,非常感謝使用我們的服務</h3>


                    <div className='py-3'>

                        <div className='row justify-center'>

                            <div className='col-3  text-center text-white'>

                                <strong className='block'>訂單編號</strong>
                                <strong className='block'>訂單成立時間</strong>

                            </div>

                            <div className='col-3  text-center text-white'>
                                <strong className='block'>202212201234</strong>
                                <strong className='block'>2022年12月20號</strong>

                            </div>

                        </div>


                    </div>


                    <h3 className='text-md font-bold text-my_yellow'>若對此次訂購有疑慮，請來電 02-2222222</h3>



                    <div className='pt-8'>
                        <input
                            className="text-md h-[50px] w-3/6 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                            type="submit"
                            value="會員頁面"
                        />
                    </div>


                </div>


                <div className="border min-h-[500px]  w-full rounded-md border-gray-200 bg-gray-100 px-8 py-5 shadow-xl">


                    <div className="text-start min-h-[30px] pb-5 text-gray-900">


                        <h5 className=" text-lg font-bold tracking-wider">
                            露營地資訊
                        </h5>

                        <hr className=" mt-2 mb-2 bg-my_green h-[1px]" style={{ border: 'none' }} />


                        <div className="row pt-5">

                            <div className="col-6 ">


                                {/* hover:opacity-80 */}

                                <img
                                    src={hot1}
                                    className="min-h-[200px] w-full object-cover"
                                    alt=""
                                />
                            </div>



                            <div className="col-6">

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區名稱：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>安可休閒露營區</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區主人：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>安可休</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>營區地址：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>台南市xxxx台南市xxxxx台南市xxxxx台南市xxxxx台南市xxxxx台南市xxxxxx</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-5 text-left'>
                                        <strong className='block mb-2'>聯絡方式：</strong>
                                    </div>
                                    <div className='col-7 text-left'>
                                        <strong className='block mb-2'>02-2222222</strong>
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



