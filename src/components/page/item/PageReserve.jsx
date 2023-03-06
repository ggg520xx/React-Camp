import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { ga1, ga2 } from '../../../images/page/PageMange';


import MyDatePicker from './func/ReactDateRange';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';
import axios from 'axios';




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
                    console.log(response.data)

                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const campInfo = useAllCampReserve();

    console.log(campInfo)









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

    }

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

        // 存下點擊的時間到下一個頁面展示 和下下頁 並在最後成功預定發送api
        console.log('有選取時間');
        console.log(datePickerState);
        navigate("/reserve")
    }





    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-reserve">



                <div className='text-left' >

                    <h5 className="font-bold text-xl">營區預定</h5>


                    <div className="pt-6">

                        {campInfo ? campInfo?.map((item, index) => (


                            // 單個
                            <div className="row mb-2 border border-psub_color bg-white hover:shadow-xl hover:border-sub_color">



                                {/* <div className="col-4 border border-red-100"> */}

                                <div className="col-3 pl-0">


                                    {/* 原本的架構路徑 */}
                                    {/* <img className='h-[160px] w-full object-cover' src={ga1} alt="" /> */}

                                    
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
                                                <span className='mr-2 text-my_green text-lg font-bold'>10</span>
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

                                            <select id="quantity" className="w-full px-5 border border-psub_color ">
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
                                            <span className='text-p_color text-3xl font-bold'>$1300</span>
                                            <span className='font-bold'>/ (平日價)1晚</span>
                                        </h6>

                                        {/* disabled={pageReserveDisable === true} */}
                                        <button onClick={() => {
                                            pageReserveBtn()
                                        }} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>預訂</button>


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