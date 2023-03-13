import './PaymentStyle.css'
import { useForm } from 'react-hook-form'

import {
    searchDemo,
    searchDemo2,
    solidstar,
    halfstar,
    emptystar
} from '../../images/search/SearchMange'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBolt,
    faHeart,
    faMapMarkerAlt,
    faCaretRight,
    faBookmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLine
} from '@fortawesome/free-brands-svg-icons'


import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange'

import { Link, useNavigate } from "react-router-dom";


import CreditCardInput from './func/CreditCardInput';



function Payment() {


    // 一定要這段
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    // const { register, handleSubmit, formState: { errors } } = ReactHookForm.useForm();


    const onSubmit = (data) => {


        // 有抓取物件再轉換 頁面
        let formdata = JSON.stringify(data)
        alert(formdata);

        if (formdata !== '') {
            navigate("/")
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
                        <div className="step-list active now">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">填寫付款資料</div>
                            </div>
                        </div>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">確認訂單成立</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-7 mb-3 h-full w-full rounded-md border border-gray-200 bg-my_green px-8 py-8 shadow-xl">


                        <CreditCardInput />



                        {/* 要寫的 確認click執行後 要post的上 (專案內搜尋 */}


                        {/* <Link to="/order-create/created" className="btn m-btnBgColor text-white " style={{ width: "30%", fontSize: 18, letterSpacing: 2 }} onClick={handleOrderClick}>
                            確認付款
                        </Link> */}

                        <div>
                            <input onClick={() => {
                                navigate("/finish")
                            }}
                                className="text-md h-[50px] w-3/4 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                                type="submit"
                                value="結帳完成"
                            />
                        </div>



                        <hr className="mt-5 bg-white h-[1px]" style={{ border: 'none' }} />


                        <h4 className="py-4 text-left text-2xl font-bold text-white">
                            訂購資料確認
                        </h4>

                        <div className="border mb-3 w-full rounded-md border-gray-200 bg-gray-100 px-8 py-3 shadow-xl">

                            <div className="relative col-span-1 mt-5"
                            >


                                <div className="py-1">

                                    <div className="py-4">
                                        <strong>訂購人姓氏</strong>

                                        <input className="py-2 mt-2 block bg-white w-full" value='陳' type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>訂購人姓名</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='小寶' type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>手機確認</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='0912345678' type="button" />
                                    </div>

                                    <div className="py-4">
                                        <strong>電子信箱</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='abc123@gmail.com' type="button" />
                                    </div>
                                    <div className="py-4">
                                        <strong>付款方式</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='信用卡' type="button" />
                                    </div>

                                </div>





                            </div>

                        </div>


                    </div>




                    <div className="col-5 ">
                        <div className="border mb-3 w-full rounded-md border-gray-200 bg-gray-100 px-8 py-3 shadow-xl">



                            <div className="relative col-span-1 mt-5"
                                onClick={() => { }}>


                                <div className="text-start min-h-[30px] pb-5 text-gray-900">
                                    {/* 營區名稱和地點在哪 */}
                                    <h5 className="mt-2 mb-2 text-lg font-bold tracking-wider">
                                        安可休閒露營區
                                    </h5>



                                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                    <div className="flex items-center ">
                                        <p className="text-md flex">
                                            {/* star 星星的map計算引入匯出 現在就用img */}

                                            <img className="h-3.5" src={solidstar} alt="" />
                                            <img className="h-3.5" src={solidstar} alt="" />
                                            <img className="h-3.5" src={solidstar} alt="" />
                                            <img className="h-3.5" src={solidstar} alt="" />
                                            <img className="h-3.5" src={solidstar} alt="" />

                                            <span>4.7</span>
                                            <span>(45)</span>
                                        </p>


                                    </div>

                                    <p>
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            className="mr-2"
                                        />
                                        <span>地區：xxx</span>
                                    </p>



                                </div>




                                <img
                                    src={hot1}
                                    className="min-h-[200px] w-full object-cover hover:opacity-80"
                                    alt=""
                                />


                                {/* basic_input */}

                                <div className="py-1">


                                    <div className="py-4">
                                        <strong>入住日期</strong>

                                        <input className="py-2 mt-2 block bg-white w-full" value='2022 - 9 - 06' type="button" />

                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>退房日期</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='2022 - 9 - 06' type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>選擇區域</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='草皮A區' type="button" />
                                    </div>
                                </div>



                                <hr className="bg-my_green h-[1px]" style={{ border: 'none' }} />


                                <div className="py-1">


                                    <div className="py-4">
                                        <strong>付款明細</strong>

                                        <input className="py-2 mt-2 block bg-white w-full" value='7天 , 3晚平日 , 3晚假日' type="button" />

                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>帳數/間數</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='2' type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>折扣金額</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value='0' type="button" />
                                    </div>
                                </div>

                                <hr className="bg-my_green h-[1px]" style={{ border: 'none' }} />

                                <div className="py-1">


                                    <div className="py-4">
                                        <strong>總計金額</strong>

                                        <input className="py-2 mt-2 block bg-white w-full" value='12000' type="button" />

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

export default Payment
// 匯出這個函式功能







// {/* <Link to="/order-create/created" className="btn m-btnBgColor text-white " style={{ width: "30%", fontSize: 18, letterSpacing: 2 }} onClick={handleOrderClick}>
//                         確認付款
//                     </Link>

//                     確認付款onclick執行 */}




// {/* const handleOrderClick = () => {
//                         console.log('ok');
//                     createOrder();
//                              }

//                          const createOrder = async () => {
//                         axios.post(`http://localhost:5000/camps/api/order`, {
//                             purchaserName: purchaserName,
//                             purchaserPhone: purchaserPhone,
//                             purchaserEmail: purchaserEmail,
//                             memberId: user.MemberId,
//                             paymentMethodId: 1,
//                             paymentStatusId: 1,
//                             paymentAmount: 3000,
//                             orderStatusId: 1,
//                             start: start,
//                             end: end,
//                             areaId: orderInfo.areaInfo[0].areaId,
//                             campAmount: campAmount,
//                             dateCount: getDays(start, end),
//                         }).then((response) => {
//                             setOrderId(response.data);
//                             console.log(response);
//                             // setMsgReg(response.data);
//                         });
//     }; */}










// {/* <form onSubmit={handleSubmit(onSubmit)}>
//                                 名字：
//                                 <input type="text"  placeholder="First name" {...register("firstname", { required: true, maxLength: 10 })} />
//                                 {errors.firstname && <span>此欄位必填</span>}

//                                 <input type="text" placeholder="Last/Family Name" {...register("lastname", { required: true, maxLength: 10 })} />
//                                 {errors.lastname && <span>此欄位必填</span>}

//                                 <input type="text" placeholder="Mobile number" {...register("Mobile number", {
//                                     required: true, maxLength: 12, pattern: /^[09]{2}\d{8}$/i
//                                 })} />

//                                 <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

//                                 <input type="submit" />
//                             </form> */}
