import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from "react-router-dom";


// 信用卡頁使用的
import CreditCardInput from './func/CreditCardInput';





function ProcessLeftReserve(props) {

    // 通过 props.turnStatus 访问传递的 turnStatus 属性
    // 通过 props.setTurnSwitch 访问传递的 setTurnSwitch 属性
    // 這是頁面翻轉的狀態 true false 顯示
    const { turnStatus, setTurnSwitch } = props;



    // 一定要這段
    const navigate = useNavigate();



    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    // const { register, handleSubmit, formState: { errors } } = ReactHookForm.useForm();


    // 有點選才連到下個頁面
    const onSubmit = (data) => {

        // 有抓取物件再轉換 頁面
        let formdata = JSON.stringify(data)
        alert(formdata);

        if (formdata !== '') {
            // navigate("/payment")
            setTurnSwitch(false)
        }
    }



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

                        <CreditCardInput />

                        {/* 要寫的 確認click執行後 要post的上 (專案內搜尋 */}

                        {/* <Link to="/order-create/created" className="btn m-btnBgColor text-white " style={{ width: "30%", fontSize: 18, letterSpacing: 2 }} onClick={handleOrderClick}>
                            確認付款
                        </Link> */}






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

                        <div >
                            <input onClick={() => {
                                navigate("/finish")
                            }}
                                className="text-md h-[50px] w-3/4 bg-my_black py-1 px-3 font-semibold text-white  hover:bg-white hover:text-my_green"
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
                )}


            </div>






        </>
    );
}

export default ProcessLeftReserve;
// 匯出這個函式功能