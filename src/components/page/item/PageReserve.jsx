import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { ga1, ga2, pic404 } from '../../../images/page/PageMange';


import MyDatePicker from './func/ReactDateRange';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';
import axios from 'axios';
import { format, eachDayOfInterval, set, isAfter } from 'date-fns';



// http://localhost:3000/camps/4/campinfos
// 一樣是可以抓單一id 下的 關於他連結的關連

// http://localhost:3000/camps/4/campinfos?_expand=type
// 甚至可以對 選中的 該項 做展開


// http://localhost:3000/camps?_expand=high&&_expand=owner
// http://localhost:3000/camps?_expand=high&&_expand=owner&&_expand=area
// 同時開展項目的展開...... 早知道可以 當初跑搜尋項目search 也不用那麼麻煩了 還多打幾隻api
// 直接從全露營搜尋處 拉陣列來比對就好 




const PageReserve = (props) => {
    // 首先導出id頁=id頁面 

    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus, AllCampGet } = useMyContextSearch(MyContextSearch);

    const navigate = useNavigate();



    // 在這裡你可以使用 id 參數來取得你想要的項目資料
    // 例如：const item = getItemById(id);
    const id = props.itemId;


    // 創建一個函式，根據傳入的id參數取得特定的項目
    // 假設有一個名為items的陣列，其中包含許多不同的項目，每個項目都有一個唯一的id欄位
    function getItemById(id) {
        // console.log(AllCampGet) 確保陣列中有元素
        return AllCampGet?.find((item) => item.id == id);
    }
    // 使用 == 才抓的到資料   使用恆等運算子 === 導致結果為 undefined
    // 可能是因為您的陣列中的元素的 id 欄位的資料類型與您指定的搜尋值的資料類型不同
    const item = getItemById(id);

    console.log(item)
    // 得到該筆項目的資訊

    // viewPic 是打算做營區配置圖






    // 露營地預約
    function useAllCampReserve() {


        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/camps/${id}/campinfos?_expand=type`)
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
    const campInfo = useAllCampReserve();
    console.log(campInfo)





    // 本來是不想寫在 app.js 想作為點擊進來才更新 但因為spa沒有刷新 就算我抓到點擊頁面id也沒用
    // 又不是在首頁一開始就有 id值
    // 因此最後還是 app.js 讓他在一開始執行此網站去刷寫每一天的剩餘
    // 正常那份資料 不應該由客戶端去patch更新就是 那是伺服端控制的資料庫

    // 失敗了 並沒有執行到 因為spa 只是元件提供轉換 並不能刷新 除非我讓他點擊什麼而patch
    // 而寫在appjs 則是一口氣進行全部的更新  我寫在這個因為spa 根本沒有patch的功能

    // function bbb(data) {

    //     console.log(data)
    //     console.log('看什麼時候執行的')

    //     // -------------------------
    //     const today = new Date();
    //     const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    //     const oneWeekLaterReduce1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);
    //     const oneWeekLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    //     // 轉換格式  目前時間 及顯示等
    //     const todayDate = format(today, 'yyyy-MM-dd');
    //     const tomorrowDate = format(tomorrow, 'yyyy-MM-dd');
    //     const oneWeekDate = format(oneWeekLater, 'yyyy-MM-dd');
    //     const oneWeekDateReduce1 = format(oneWeekLaterReduce1, 'yyyy-MM-dd');

    //     const todayString = todayDate.toString();  // 標準的日期字串
    //     const tomorrowString = tomorrowDate.toString();
    //     const oneWeekString = oneWeekDate.toString();  // 標準的日期字串
    //     const oneWeekStringReduce1 = oneWeekDateReduce1.toString();  // 標準的日期字串



    //     data.forEach((info, index) => {

    //         const reservation = info.reservation;

    //         if (reservation[0].date !== todayString) {


    //             if (reservation[1].date == todayString) {
    //                 reservation.shift()  // 不是今日的拔除
    //                 reservation.push({    // 增添一個新日期的都拔除直到沒有
    //                     "date": oneWeekString,
    //                     "num": 10
    //                 })
    //                 axios.patch(`http://localhost:3000/campinfos/${id}`, {
    //                     reservation
    //                 });
    //             }
    //             if (reservation[2].date == todayString) {

    //                 reservation.shift()  // 不是今日的拔除
    //                 reservation.shift()  // 不是今日的拔除

    //                 reservation.push({    // 增添一個新日期的都拔除直到沒有
    //                     "date": oneWeekStringReduce1,
    //                     "num": 10
    //                 })

    //                 reservation.push({    // 增添一個新日期的都拔除直到沒有
    //                     "date": oneWeekString,
    //                     "num": 10
    //                 })


    //                 axios.patch(`http://localhost:3000/campinfos/${id}`, {
    //                     reservation
    //                 });
    //             }
    //             else {

    //                 for (let i = 0; i < 8; i++) {
    //                     console.log(i);  // 會跑8次 01234567
    //                     reservation.shift()

    //                     const datePush = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    //                     const datePushFormat = format(datePush, 'yyyy-MM-dd');
    //                     const datePushString = datePushFormat.toString();

    //                     reservation.push({    // 增添一個新日期的都拔除直到沒有
    //                         "date": datePushString,
    //                         "num": 10
    //                     })
    //                 }
    //                 axios.patch(`http://localhost:3000/campinfos/${id}`, {
    //                     reservation
    //                 });
    //             }
    //         }
    //         else {
    //             return
    //         }

    //     })

    // }





















    // const [startRange, setStartRange] = useState('');
    // const [endRange, setEndRange] = useState('');
    // const [pickReady, setPickReady] = useState(false);

    // 處理 a 元件 日期點擊 處理過來的 操作change的狀態改變
    // 定義一個 state 來存儲 MyDatePicker 元件的 state
    const [datePickerState, setDatePickerState] = useState();

    const [startDateChooseProp, setStartDateChooseProp] = useState();
    const [endDateChooseProp, setEndDateChooseProp] = useState();


    // 定義一個函數來處理 MyDatePicker 元件傳遞過來的 state
    const handleStateChange = (state, startDateFromShow, endDateFromShow) => {

        setStartDateChooseProp(startDateFromShow)
        setEndDateChooseProp(endDateFromShow)

        setDatePickerState(state);



        // 從選取日期氣 傳過來的 state 選取 我在這裡經由點選轉換格式 並算出區間
        const startRangePick = format(state[0].startDate, 'yyyy-MM-dd');
        const endRangePick = format(state[0].endDate, 'yyyy-MM-dd');
        // 使用 new Date() 來建立兩個日期物件，分別代表開始日期和結束日期
        const startRangeDate = new Date(startRangePick);
        const endRangeDate = new Date(endRangePick);
        // 使用 eachDayOfInterval 方法來產生包含兩個日期間所有日期的陣列
        const allDates = eachDayOfInterval({ start: startRangeDate, end: endRangeDate });
        // 最後，我們使用 map 方法和 format 函數將所有日期格式化為 'yyyy-MM-dd' 格式的字串，並存入一個新的陣列 formattedDates
        const formattedDates = allDates.map(date => format(date, 'yyyy-MM-dd'));
        console.log(formattedDates);
        setPickRange(formattedDates)


        // setStartRange(startRangePick)
        // setEndRange(endRangePick)

        // 下面這兩個是提供給用戶網頁看的格式 我這邊沒用到 僅僅是顯示這個函式的 console
        console.log(startDateFromShow)
        console.log(endDateFromShow)

    }






    const [pickRange, setPickRange] = useState([]);


    // ---------------------------------------
    // 前往預定的按鈕判斷 如果還沒選會是UNDEFINED 
    const pageReserveBtn = () => {

        if (loginStatus !== true) {

            localStorage.setItem('prevpage', id);

            alert('未登入,請先登入後使用')
            navigate("/login")
            return
        }


        if (datePickerState === undefined) {
            console.log('不正確時間或尚未選取');
            alert('不正確時間或尚未選取')
            return
        }

        if (startDateChooseProp === endDateChooseProp) {
            console.log('時間重複或未正確選取');
            alert('時間重複或未正確選取')
            return
        }



        // 如果选择的日期范围包含今天，并且当前时间超过晚上7点，提示不能预定今天
        const now = new Date();
        const today = format(now, 'yyyy-MM-dd');
        if (pickRange.includes(today)) {
            const evening7pm = set(now, { hours: 19, minutes: 0, seconds: 0 });
            if (isAfter(now, evening7pm)) {
                alert('今日訂房時間已過晚上7點，日期無法包含今天');
                return;
            }
        }
        // 使用了 date - fns 库中的 format 和 set 函数来操作日期时间，其中 format 将一个日期时间格式化为指定格式的字符串，而 set 可以用来设置一个日期时间对象的年、月、日、时、分、秒等属性
        // isAfter 是 date - fns 套件提供的函數之一，用於比較兩個日期的先後順序，可以判斷一個日期是否在另一個日期之後







        // ------------------------------------------
        // 最早的版本 只告知 選取區間滿房 不曉得哪一天
        // 判斷每個日期是否還有房間可以預訂
        // const availableDates = pickRange.filter(date => {
        //     return campInfo[0].reservation.some(reserve => {
        //         return reserve.date === date && reserve.num > 1;
        //     });
        // });
        // // 如果有任何一個日期沒有房間可以預訂，就顯示提示訊息
        // if (availableDates.length !== pickRange.length) {
        //     alert('選取日期區間已滿房');
        //     return;
        // }

        // 第二版版本 告知哪一天已滿房 沒告知剩餘間數
        // const fullDates = pickRange.filter(date => {
        //     return campInfo[0].reservation.some(reserve => {
        //         return reserve.date === date && reserve.num === 0;
        //     });
        // });
        // // 如果有任何一個日期已滿房，就顯示提示訊息
        // if (fullDates.length > 0) {
        //     alert('以下日期已滿房: ' + fullDates.join(', '));
        //     return;
        // }

        // 第三個版本 告知哪一天已滿房 並告知剩餘房間數量
        const insufficientDates = pickRange.filter(date => {
            return campInfo[0].reservation.some(reserve => {
                return reserve.date === date && reserve.num < quantity;
            });
        });
        // 如果有任何一天的房間數量不足，就顯示提示訊息
        if (insufficientDates.length > 0) {
            const message = insufficientDates.map(date => `${date}: 營區位置不足，僅剩 ${campInfo[0].reservation.find(reserve => reserve.date === date).num} 帳 / 間`);
            alert(message.join('\n'));
            return;
        }
        // ------------------------------------------


        // 存下點擊的時間到下一個頁面展示 和下下頁 並在最後成功預定發送api
        console.log('有選取時間');
        console.log(datePickerState);
        navigate("/reserve")
    }




    // 顯示平日還是假日價格
    const today = new Date().getDay();
    const isWeekday = today > 0 && today < 6; // 0 是星期日，6 是星期六




    // 選取的房間數量
    const [quantity, setQuantity] = useState(1);
    function handleQuantityChange(event) {
        setQuantity(Number(event.target.value));
    }
    console.log(quantity)





    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-reserve">



                <div className='text-left' >

                    <div>
                        <h5 className="font-bold text-xl">營區預定</h5>
                        <span className="text-base text-red-500">晚上7點後不可預訂今日，僅可從明日起預訂</span>

                        {/* <span className="text-base text-blue-500"> 你選取{startRange}到{endRange}  </span> */}

                        {/* {pickReady ? <span className="text-base text-blue-500"> 尚未選定 </span> : <span className="text-base text-blue-500"> 你選取{startRange}到{endRange} </span>} */}



                    </div>


                    <div className="pt-6">

                        {campInfo ? campInfo?.map((item, index) => (


                            // 單個
                            <div key={index} className="row mb-2 border border-psub_color bg-white hover:shadow-xl hover:border-sub_color">



                                {/* <div className="col-4 border border-red-100"> */}

                                <div className="col-3 pl-0">

                                    {/* 原本的html jsx架構路徑 */}
                                    {/* <img className='h-[160px] w-full object-cover' src={ga1} alt="" /> */}


                                    {/* 原本讓他跑true或false 但一定有此欄位否則會造成空白一片  */}
                                    {/* ${item.zonePic} 一定有欄位 因此他不會跑 ：後面的false段落 ,他一定跑前面那段 true段落 要怎麼做才能在API JSON資料夾 跑true該欄位 卻不會因沒有該檔名檔案 而造成一片空白 */}

                                    {/* 如果創建一欄卻未傳上圖片 預設給予 default.jpg post欄位解決 */}

                                    {/* 這段是我一直常用的寫法 但資料夾會沒有同檔名圖片就一片空白 */}
                                    {item?.zonePic ? <img className='h-[160px] w-full object-cover' src={require(`../../../../assets/campPhoto/${id}/zone/${item.zonePic}`)} alt="" /> : <img className='h-[160px] w-full object-cover' src={pic404} alt="" />}


                                </div>

                                <div className="col-3  relative ">

                                    <div className="flex flex-col justify-around items-start h-full py-3">

                                        <h5 className="font-bold text-xl">{item.name}</h5>



                                        <div className='row items-baseline w-full'>
                                            <div className='col-6 '>
                                                <strong>地區型態：</strong>
                                            </div>
                                            <div className='col-6 '>
                                                <span className='mr-2 text-my_green text-base font-bold'>{item.type.name}</span>
                                            </div>
                                        </div>

                                        <div className='row items-baseline  w-full'>
                                            <div className='col-6 '>
                                                <strong>今日剩餘：</strong>
                                            </div>
                                            <div className='col-6 '>
                                                <span className='mr-2 text-my_green text-lg font-bold'>{item.reservation[0].num}</span>
                                                <span className='mr-2'>帳(間)</span>
                                            </div>
                                        </div>



                                        <div className='row items-baseline  w-full'>
                                            <div className='col-6 '>
                                                <strong>明日剩餘：</strong>
                                            </div>
                                            <div className='col-6 '>
                                                <span className='mr-2 text-my_green text-lg font-bold'>{item.reservation[1].num}</span>
                                                <span className='mr-2'>帳(間)</span>
                                            </div>
                                        </div>








                                    </div>

                                </div>

                                <div className="col-4  pl-0  relative ">

                                    <div className="flex flex-col justify-around items-center h-full py-3">



                                        <div className='border border-psub_color w-full py-2.5 px-5'>


                                            <MyDatePicker callDate={handleStateChange} />

                                        </div>




                                        <div className="w-full">

                                            {/* <label htmlFor="quantity">Quantity:</label> */}

                                            <select id="quantity" value={quantity} onChange={handleQuantityChange} className="w-full px-5 border border-psub_color ">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                            </select>
                                        </div>


                                        {/* <input className='w-3/4' type="text" value='選擇入營及離營日期' />
                                    <input className='w-3/4' type="text" value='帳數' /> */}
                                    </div>

                                </div>

                                <div className="col-2 relative ">

                                    <div className="flex flex-col justify-around items-center h-full py-3">


                                        <h6 className="flex flex-col">

                                            {isWeekday ? <span className='text-p_color text-3xl font-bold'>${item.price}</span> : <span className='text-p_color text-3xl font-bold'>${item.holiday}</span>}

                                            <span className='font-bold'>/ 1晚 ({isWeekday ? '平日' : '假日'}價) </span>
                                        </h6>

                                        {/* disabled={pageReserveDisable === true} */}




                                        {loginStatus ? <button onClick={() => {
                                            pageReserveBtn()
                                        }} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>預訂</button> : <button onClick={() => {
                                            pageReserveBtn()
                                        }} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>登入後預訂</button>}



                                    </div>

                                </div>

                            </div>

                        )) : null}

                    </div>
                </div>
            </div>
        </>
    );

}

export default PageReserve;