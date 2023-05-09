import {
    searchDemo,
    searchDemo2,
    solidstar,
    halfstar,
    emptystar
} from '../../../images/search/SearchMange'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBolt,
    faHeart,
    faMapMarkerAlt,
    faCaretRight,
    faBookmark
} from '@fortawesome/free-solid-svg-icons'

import { indexIcon, hot1, hot2, hot3 } from '../../../images/index/IndexMange'


import { useLocation } from 'react-router-dom';







function ProcessRightCamp(props) {



    // 使用  navigate(`/process/${id}/${campinfoId}`, { state: datePickerState }); 在此用useLocation抓出傳遞日期值
    const { state } = useLocation();
    console.log(state)




    // getInfo從上層傳遞進來使用的資料  setTotalPriceFinal則是要把做好的金額帶出去給左側的元件
    const { getInfo, setTotalPriceFinal, discountPublicTrans } = props;

    
    // let discount = parseFloat(leftData.bonus) || 1;
    // 當 parseFloat(leftData.bonus) 為 NaN 或是 undefined 或是 null，它會被判斷成 false，所以會回傳後面的 1，否則就會回傳轉換後的浮點數

    const getData = getInfo ? getInfo[0] : null;
    console.log(getData)

    // 顯示紅字, 原因在於傳進來的時候 是null 在這裡下判定
    // 因為無法讀取 null屬性 這裡有一瞬間會是null 把這裡處理一下

    // 如果 getInfo 是 null 或 undefined，
    // 可以返回一個預設的元件或 null。使用 if 或三元運算子 ?
    if (!getData) {
        return null;
    }





    // 欲算出幾天 幾晚平日 幾晚假日
    // 兩個日期中間間隔的所有日期每一天 先導出一個陣列 用兩個日期 算出間隔數天的陣列
    // 詳細可以看我的 飯店預訂 或是 使用套件 這邊我在PageReserve 已經用套件算出並藉由url傳遞state到這
    console.log(state.dateRange)  //.length 就是幾天

    // 然後我使用另一組state進來的日期算 getDay 總共幾個平日 幾個假日
    const startDate = state.dateStatus[0].startDate;
    const endDate = state.dateStatus[0].endDate;

    console.log(startDate)
    console.log(endDate)

    const nights = (endDate - startDate) / (24 * 60 * 60 * 1000); // 總共幾晚
    const weekdays = [];
    const weekends = [];

    for (let i = 0; i < nights; i++) {

        const date = new Date(startDate.getTime() + i * (24 * 60 * 60 * 1000));
        if (date.getDay() === 5 || date.getDay() === 6) {
            weekends.push(date);
        } else {
            weekdays.push(date);
        }
    }
    // 幾晚跑幾次迴圈 塞入陣列內的個數 去push後計算有幾個
    console.log(`總共 ${nights} 晚，其中平日 ${weekdays.length} 晚，假日 ${weekends.length} 晚`);
    console.log(`平日晚上日期： ${weekdays.map(d => d.toLocaleDateString()).join(', ')}`);
    console.log(`假日晚上日期： ${weekends.map(d => d.toLocaleDateString()).join(', ')}`);

    // 下面是 幾晚平日＊平日價  幾晚假日＊假日價
    const totalWeekdaysPrice = weekdays.length * getData.price; //幾晚平日＊平日價
    const totalWeekendsPrice = weekends.length * getData.holiday; //幾晚假日＊假日價
    const totalPrice = totalWeekdaysPrice + totalWeekendsPrice; // 平日總價＋假日總價 就是總金額

    // 但我還有 訂購者定了幾間 所以總金額要＊我選了幾間 同時預訂
    const totalPriceRoom = totalPrice * state.roomNum;
    
    // 總計金額再乘上折扣優惠
    const totalPriceFinal = totalPriceRoom * discountPublicTrans;
    setTotalPriceFinal(totalPriceFinal)


   
    
    console.log(`平日房價總共 ${weekdays.length} 晚，共 ${totalWeekdaysPrice} 元`);
    console.log(`假日房價總共 ${weekends.length} 晚，共 ${totalWeekendsPrice} 元`);
    console.log(` ${totalPrice} 元 , 僅選取房型房間日期 還未乘上住戶選購間數`);
    console.log(` ${totalPriceRoom} 元 , 總金額 , 選取房型房間日期 乘上住戶間數 , 但未乘上折扣`);
    console.log(`真正總計金額(乘上折扣) 共 ${totalPriceFinal} 元 `);





    return (
        <>

            <div className="col-5 ">
                <div className="</div>border mb-3 w-full rounded-md border-gray-200 bg-gray-100 px-8 py-3 shadow-xl">


                    <div className="relative col-span-1 mt-5"
                        onClick={() => { }}>

                        <div className="text-start min-h-[30px] pb-5 text-gray-900">
                            {/* 營區名稱和地點在哪 */}
                            {getData ? (
                                <div>
                                    <h5 className="mt-2 mb-2 text-lg font-bold tracking-wider">
                                        {getData?.camp?.name}
                                    </h5>
                                </div>
                            ) : (
                                <div>
                                    <h5 className="mt-2 mb-2 text-lg font-bold tracking-wider">
                                        無資料
                                    </h5>
                                </div>
                            )}




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


                            {getData ? (
                                <p>
                                    <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="mr-2" />
                                    <span>地點：{getData?.camp?.address}</span>
                                </p>
                            ) : (
                                <p>
                                    <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="mr-2" />
                                    <span>地點：無資料</span>
                                </p>
                            )}

                        </div>



                        
                        {getData?.camp?.showLogo ? <img className="min-h-[200px] w-full object-cover hover:opacity-80" src={require(`../../../../assets/showLogo/${getData.camp.showLogo}`)} alt="" /> : <img className="min-h-[200px] w-full object-cover hover:opacity-80" src={require('../../../images/search/collect/404.png')} alt="" />}
                        {/* <img
                            src={hot1}
                            className="min-h-[200px] w-full object-cover hover:opacity-80"
                            alt=""
                        /> */}

                        

                        {/* basic_input */}

                        <div className="py-1">


                            <div className="py-4">
                                <strong>入住日期</strong>

                                {/* <input className="py-2 mt-2 block bg-white w-full" value={state[0].startDate} type="button" /> */}
                                <input className="py-2 mt-2 block bg-white w-full" value={state.start} type="button" />
                            </div>


                            <hr />


                            <div className="py-4">
                                <strong>退房日期</strong>

                                {/* <input className="py-2 mt-2 block bg-white w-full" value={state[0].endDate} type="button" /> */}
                                <input className="py-2 mt-2 block bg-white w-full" value={state.end} type="button" />
                            </div>


                            <hr />



                            <div className="py-4">
                                <strong>選擇區域</strong>

                                {getData ? (
                                    <div>
                                        <input className="py-2 mt-2 block bg-white w-full" value={getData?.name} type="button" />
                                    </div>
                                ) : (
                                    <div>
                                        <input className="py-2 mt-2 block bg-white w-full" value='無資料' type="button" />
                                    </div>
                                )}

                            </div>
                        </div>



                        <hr className="bg-my_green h-[1px]" style={{ border: 'none' }} />


                        <div className="py-1">


                            <div className="py-4">
                                <strong>付款明細</strong>


                                <input className="py-2 mt-2 block bg-white w-full"
                                    value={`共計 ${state.dateRange.length} 天 ${nights} 晚 ( 平日 ${weekdays.length} 晚，假日 ${weekends.length} 晚 )`} type="button" />

                            </div>

                            <hr />


                            <div className="py-4">
                                <strong>此 區域/房型 單價</strong>

                                <input className="py-2 mt-2 block bg-white w-full"
                                    value={`平日晚單價 ${getData.price}，假日晚單價 ${getData.holiday}`} type="button" />

                            </div>

                            <hr />


                            <div className="py-4">
                                <strong>帳數/間數</strong>
                                <input className="py-2 mt-2 block bg-white w-full" value={state.roomNum} type="button" />
                            </div>

                            <hr />

                            <div className="py-4">
                                <strong>折扣金額</strong>
                                <input className="py-2 mt-2 block bg-white w-full" value={totalPriceRoom-totalPriceFinal} type="button" />
                            </div>
                        </div>

                        <hr className="bg-my_green h-[1px]" style={{ border: 'none' }} />

                        <div className="py-1">


                            <div className="py-4">
                                <strong>總計金額</strong>

                                <input className="py-2 mt-2 block bg-white w-full" value={totalPriceFinal} type="button" />

                            </div>

                        </div>

                    </div>

                </div>
            </div>






        </>
    );
}

export default ProcessRightCamp;
// 匯出這個函式功能