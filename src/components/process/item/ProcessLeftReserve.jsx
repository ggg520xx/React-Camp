import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

import axios from 'axios';

// 信用卡頁使用的
import CreditCardInput from './func/CreditCardInput';

import { v4 as uuidv4 } from 'uuid'; // 引入 uuid 套件

import { format, eachDayOfInterval, set, isAfter } from 'date-fns';


// import ProcessRightCamp from './ProcessRightCamp'








function ProcessLeftReserve(props) {



    // 傳id
    const { id, campinfoId } = useParams();




    // 通过 props.turnStatus 访问传递的 turnStatus 属性
    // 通过 props.setTurnSwitch 访问传递的 setTurnSwitch 属性

    // 這是頁面翻轉的狀態 true false 顯示
    // totalPriceFinal 是總金額的 物件合併傳遞到資料庫
    const { turnStatus, setTurnSwitch, totalPriceFinal } = props;



    // 一定要這段
    const navigate = useNavigate();






    // 使用  navigate(`/process/${id}/${campinfoId}`, { state: datePickerState }); 在此用useLocation抓出傳遞日期值
    const { state } = useLocation();
    console.log(state)




    // 從上層傳遞進來
    const { getInfo } = props;
    const getData = getInfo ? getInfo[0] : null;
    console.log(getData)









    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    // const { register, handleSubmit, formState: { errors } } = ReactHookForm.useForm();






    // 左頁 第一次填好的用戶資料 點擊onSubmit ReactForm導出的資料用set存進去到其他地方查看
    // 在翻轉頁面後顯示的為 此值取用
    // 在翻轉頁面確認資料處貼上的 value = { leftData.lastname && leftData.lastname }
    // 使用js條件渲染 &&
    const [leftData, setLeftData] = useState({});


    // 有點選才連到下個頁面
    const onSubmit = (data) => {

        // 有抓取物件再轉換成JSON格式的字串 顯示在頁面
        let formdata = JSON.stringify(data)
        alert(formdata);
        // console.log(formdata) 物件格式Json

        if (formdata !== '') {

            // 再次把它轉為物件格式 並存入外部state狀態 將值取用在翻轉頁面確認資料處
            let parsedData = JSON.parse(formdata);
            console.log(parsedData)
            console.log(parsedData.pay)
            setLeftData(parsedData)

            setTurnSwitch(false)  // 翻轉頁面
            // navigate("/payment") 本來的頁面設計 後來更改頁面排版為翻轉的想法 就捨棄跳轉元件
        }
    }









    const HandleClick = async () => {

        // 抓出網址帶過來的 營區id 和 區域id
        console.log(id)
        console.log(campinfoId)




        // 抓出我登入的 記住的 使用者id
        let userId = parseInt(localStorage.getItem('id'));



        // date-fns 做出的當下訂單時間
        const now = new Date();
        const bookDate = format(now, 'yyyy年MM月dd日');
        const bookTime = format(now, 'HH時mm分ss秒');




        // 寫入哪種付款方式
        const payWay = leftData.pay === 'payway2' ? 'credit' : 'cash';


        // 付款成功狀態（依照寫入成功或失敗判定）
        // 正常環境這邊應該會連結到綠界付款之類的成功扣款才寫入可以或不可以
        // let payStatus




        const campinfoIdTrans = parseInt(campinfoId)
        const roomNumTran = parseInt(state.roomNum)
        const dateRangeTran = state.dateRange


        try {
            const order = {
                code: Date.now() + uuidv4(), // 將時間戳記與 UUID 結合作為訂單編號,
                userId: userId,
                campId: parseInt(id),
                campinfoId: campinfoIdTrans,

                roomStart: state.start,
                roomEnd: state.end,
                dateRange: dateRangeTran,

                roomDay: state.dateRange.length,
                roomNight: (state.dateRange.length) - 1,

                roomNum: roomNumTran,
                bookDate: bookDate,
                bookTime: bookTime,

                payWay: payWay,
                payPrice: totalPriceFinal,

                // payDate: "2023年04月16日",
                // paySucess: payStatus,

                cardNum: creditCardInfo.number,
                cardName: creditCardInfo.name,
                cardExpired: creditCardInfo.expiry,
                cardBack: creditCardInfo.cvc,


                orderExpired: false,
                feedback: false,
                feedbackContent: "我喜歡這裡"


            };

            const response = await axios.post('http://localhost:3000/orders', order);
            console.log(response.data); // 打印儲存的數據



        
            const patchData = getData.reservation.map((r) => {
                const date = r.date;
                const originalNum = r.num;
                let num = originalNum;
                if (state.dateRange.includes(date)) {
                    num -= parseInt(state.roomNum);
                }
                return { date, num };
            });

            const patchResponse = await axios.patch(`http://localhost:3000/campinfos/${campinfoIdTrans}`, {
                reservation: patchData,
            });
            console.log(patchResponse.data);

            


            const bookingInfo = {
                status: true,
                order: order,
                camp: state.camp

            };

            navigate("/finish", { state: bookingInfo });





        } catch (error) {

            // console.error(error);
            // console.error(error.response.data);

            localStorage.setItem('prevpage', id);

            const bookingInfo = {

                status: false,
                // order: order,  
                // 失敗post 當然也沒有成立訂單發送
                camp: state.camp
            };

            navigate("/finish", { state: bookingInfo });

        }
    };


    // const [creditNum, setCreditNum] = useState('')

    // const handleCreditChange = (e) => {
    //     setCreditNum(e.target.value)
    //     console.log(e.target.value)
    //     console.log('成功')
    // }



    // ------------------------------------------------
    // 首先 這邊只是 建立一個useState 作為物件creditCardInfo提供位置

    // 物件包含四個屬性：name、number、expiry 和 cvc。handleCreditCardChange 函式用來更新 creditCardInfo 物件
    // 下面會抓取..其餘的去添加  從信用卡子元件傳遞來的 添加進去 組成可看的物件 
    const [creditCardInfo, setCreditCardInfo] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: ''
    });

    // 從信用卡元件 creditcardinput傳遞過來的 並用useState的空值建立可post的物件
    // 子元件 CreditCardInput 改變時，父元件就會調用這個函式

    // 我們使用 ES6 的物件展開語法 ...來創建一個新物件，其中舊的 creditCardInfo 物件被展開，同時在新物件中添加更新過的欄位值
    const handleCreditCardChange = (updatedField) => {
        setCreditCardInfo({ ...creditCardInfo, ...updatedField });
    };





    return (
        <>
            <div className="col-7 mb-3 h-full w-full rounded-md border border-gray-200 bg-my_green px-8 py-8 shadow-xl">


                {turnStatus ? (
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <h4 className="mb-3 text-left text-2xl font-bold text-white">
                            訂購人資料
                        </h4>

                        <hr />

                        <div className="row py-4 ">
                            <div className="col-6 text-left text-lg font-semibold text-white">
                                訂購人姓氏：
                                <input
                                    className="w-full text-my_black"
                                    type="text"
                                    placeholder="Last/Family Name"
                                    {...register('lastname', { required: true, maxLength: 10 })}
                                />
                                <div className="min-h-[30px] text-red-500">
                                    {errors.lastname && <span>此欄位必填</span>}
                                </div>
                            </div>

                            <div className="col-6 text-left text-lg font-semibold text-white">
                                訂購人名字：
                                <input
                                    className="w-full text-my_black"
                                    type="text"
                                    placeholder="First name"
                                    {...register('firstname', {
                                        required: true,
                                        maxLength: 10
                                    })}
                                />
                                <div className="min-h-[30px] text-red-500">
                                    {errors.firstname && <span>此欄位必填</span>}
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="py-4 pl-4 pr-4 text-left text-lg font-semibold text-white">
                            手機號碼：
                            <input
                                className="w-full text-my_black"
                                type="text"
                                placeholder="Mobile number"
                                {...register('mobile', {
                                    required: {
                                        value: true,
                                        message: '此欄位必填寫',
                                        maxLength: 12
                                    },

                                    pattern: {
                                        value: /^[09]{2}\d{8}$/i,
                                        message: '手機號碼 不合規則'
                                    }
                                })}
                            />
                            <div className="min-h-[30px] text-red-500">
                                {errors.mobile?.message}
                            </div>
                        </div>

                        <hr />

                        <div className="py-4 pl-4 pr-4 text-left text-lg font-semibold text-white">
                            {/* 先後順序偵測 */}
                            信箱：
                            <input
                                className="w-full text-my_black"
                                type="text"
                                placeholder="Email"
                                {...register('email', {
                                    required: { value: true, message: '此欄位必填寫' },
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        message: 'Email 不合規則'
                                    }
                                })}
                            />
                            <div className="min-h-[30px] text-red-500">
                                {errors.email?.message}
                            </div>
                        </div>

                        <hr />

                        <h4 className="mt-3 mb-3 text-left text-2xl font-bold text-white">
                            付款及優惠
                        </h4>

                        <div className="row py-4 ">
                            <div className="col-6 text-left text-lg font-semibold text-white">
                                付款方式：
                                <select
                                    className="w-full text-my_black"
                                    name="payway"
                                    id=""
                                    {...register('pay', {
                                        required: true,
                                        message: '此欄位必填寫'
                                    })}
                                >
                                    <option value="payway1">入住當下憑預訂付款</option>
                                    <option value="payway2">刷卡金流功能待開發</option>
                                </select>
                                <div className="min-h-[30px] text-red-500">
                                    {errors.pay && <span>此欄位必填</span>}
                                </div>
                            </div>

                            <div className="col-6 text-left text-lg font-semibold text-white">
                                優惠券折扣：
                                <select
                                    className="w-full text-my_black"
                                    name="bonus"
                                    id=""
                                    {...register('bonus', {
                                        required: true,
                                        message: '此欄位必填寫'
                                    })}
                                >
                                    <option value="bonus_none">無</option>
                                    {/* <option value="option2">刷卡金流功能待開發</option> */}
                                </select>
                                <div className="min-h-[30px] text-red-500">
                                    {errors.bonus && <span>此欄位必填</span>}
                                </div>
                            </div>
                        </div>

                        <div>
                            <input
                                className="text-md h-[50px] w-3/4  bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                                type="submit"
                                value="填寫結帳"
                            />
                        </div>

                    </form>




                ) : (




                    <div>

                        {leftData.pay === 'payway2' && <CreditCardInput onChange={handleCreditCardChange} />}
                        {/* <p>Number: {creditCardInfo.number}</p>
                            <p>Name: {creditCardInfo.name}</p>
                            <p>Expiry: {creditCardInfo.expiry}</p>
                            <p>CVC: {creditCardInfo.cvc}</p> */}




                        {/* 要寫的 確認click執行後 要post的上 (專案內搜尋 */}

                        {/* <Link to="/order-create/created" className="btn m-btnBgColor text-white " style={{ width: "30%", fontSize: 18, letterSpacing: 2 }} onClick={handleOrderClick}>
                            確認付款
                        </Link> */}





                        <div>
                            <strong className="text-white block py-5">請再次確認訂購資料後，點擊完成訂單</strong>
                        </div>


                        <div >
                            <input onClick={() => {
                                setTurnSwitch(true)
                            }}
                                className="text-md h-[50px] w-3/4 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
                                type="submit"
                                value="往回修改"
                            />

                        </div>

                        <hr className=" mt-2 mb-2" style={{ border: 'none' }} />


                        <div>
                            <input
                                onClick={HandleClick}
                                className="text-md h-[50px] w-3/4 bg-my_black py-1 px-3 font-semibold text-white hover:bg-white hover:text-my_green"
                                type="submit"
                                value="完成訂單"
                            />
                        </div>



                        <hr className="mt-5 bg-white h-[1px]" style={{ border: 'none' }} />



                        <h4 className="py-4 text-left text-2xl font-bold text-white">
                            訂購資料確認
                        </h4>

                        <div className="border mb-3 w-full rounded-md border-gray-200 bg-gray-100 px-8 py-3 shadow-xl">

                            <div className="relative col-span-1 mt-5">

                                <div className="py-1">

                                    <div className="py-4">
                                        <strong>訂購人姓氏</strong>


                                        {/* 使用JavaScript中的一個簡單的條件渲染寫法來避免顯示undefined，透過判斷leftData物件是否存在name屬性，若存在則顯示name，否則不顯示 */}

                                        {/* 用於檢查一個變量是否存在或為真，如果是，就顯示對應的內容，否則顯示空內容或其他預設值 */}

                                        {/* 在這個寫法中，leftData.lastname && leftData.lastname的意思是，如果leftData物件中存在lastname屬性且該屬性值為真，則顯示leftData.lastname的值。如果不存在lastname屬性或者該屬性值為假，則不顯示任何內容。

                                            這種寫法的好處在於可以避免在變量不存在或為假的情況下產生錯誤，同時也可以避免顯示空內容或其他不必要的內容 */}

                                        <input className="py-2 mt-2 block bg-white w-full" value={leftData.lastname && leftData.lastname} type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>訂購人姓名</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value={leftData.firstname && leftData.firstname} type="button" />
                                    </div>

                                    <hr />

                                    <div className="py-4">
                                        <strong>手機確認</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value={leftData.mobile && leftData.mobile} type="button" />
                                    </div>

                                    <div className="py-4">
                                        <strong>電子信箱</strong>
                                        <input className="py-2 mt-2 block bg-white w-full" value={leftData.email && leftData.email} type="button" />
                                    </div>
                                    <div className="py-4">
                                        <strong>付款方式</strong>



                                        {leftData.pay === 'payway2' ? <input className="py-2 mt-2 block bg-white w-full" value='信用卡或簽帳金融卡' type="button" /> : <input className="py-2 mt-2 block bg-white w-full" value='入住當下憑預訂付款' type="button" />}






                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>






        </>
    );
}

export default ProcessLeftReserve;
// 匯出這個函式功能