import { Link, useNavigate } from "react-router-dom";
import CreditCardInput from './func/CreditCardInput';

function ProcessLeftCard(props) {




    // 一定要這段
    const navigate = useNavigate();





    return (
        <>



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







        </>
    );
}

export default ProcessLeftCard;
// 匯出這個函式功能