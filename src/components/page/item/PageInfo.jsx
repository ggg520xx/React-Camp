
import "./itemStyle/PageInfoStyle.css";


import React, { useState, useEffect } from 'react';
import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';

import axios from 'axios';





const PageInfo = (props) => {


    // 首先導出id頁=id頁面 

    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { AllCampGet } = useMyContextSearch(MyContextSearch);

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







    // 全露營地高度
    function useAllCampHigh() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/highs`)
                .then(response => {
                    // 抓到高度的
                    // console.log(response.data)
                    // console.log(item.highId)

                    const allhigh = response.data
                    const singleHigh = allhigh?.filter(newItem => newItem.id == item.highId);

                    // console.log(singleHigh[0].name)
                    setData(singleHigh[0].name);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const campHigh = useAllCampHigh();




    // 其實可以單一展開導出 http://localhost:3000/camps/4/?_expand=owner
    // http://localhost:3000/camps/{id}/?_expand=owner
    // 我後來才知道 使用id去 api那個就好 可以省略比對項目的步驟

    // 全露營地主人
    function useAllCampOwner() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/owners`)
                .then(response => {
    
                    const allowners = response.data
                    const singleOwners = allowners?.filter(newItem => newItem.id == item.ownerId);

                    // console.log(singleOwners[0].name)
                    setData(singleOwners[0].name);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const campOwner = useAllCampOwner();




    return (
        <>


            {/* <button onClick={(e) => { console.log(filteredItems)}}>555</button> */}

            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-info">


                <div className='text-left'>

                    <h5 className="font-bold text-xl">營區資訊</h5>

                    <div className="pt-6">

                        <div className="row mb-4">
                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營業時間</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>

                                            {item.open['平日'] && <div className="text-con">平日</div>}

                                            {item.open['假日'] && <div className="text-con">假日</div>}

                                            {item.open['可一日遊'] && <div className="text-con">可一日遊</div>}

                                            {item.open['不接受一日遊'] && <div className="text-con">不接受一日遊</div>}

                                            {item.open['接待訪客'] && <div className="text-con">接待訪客</div>}

                                            {item.open['不接待訪客'] && <div className="text-con">不接待訪客</div>}


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">
                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營區海拔</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con" >
                                                {campHigh}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="row mb-4">

                            <div className="col-6 border-b ">
                                <div className='row  '>
                                    <div className='col-3 font-bold text-lg'>營區電話</div>
                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>

                                            {item.tel.map(tel => (
                                                <div key={tel} className="text-con">{tel}</div>

                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">
                                <div className='row  '>
                                    <div className='col-3 font-bold text-lg'>營區地址</div>
                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">{item.address}</div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="row mb-4 ">




                            <div className="col-6 border-b">
                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營區主人</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con" >
                                                {campOwner}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div className="col-6 border-b">
                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營區特色</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>

                                            {item.tag['高海拔'] && <div className="text-con">高海拔</div>}
                                            {item.tag['森林內'] && <div className="text-con">森林內</div>}
                                            {item.tag['大草皮'] && <div className="text-con">大草皮</div>}
                                            {item.tag['近溪流'] && <div className="text-con">近溪流</div>}
                                            {item.tag['觀雲海'] && <div className="text-con">觀雲海</div>}
                                            {item.tag['看日出'] && <div className="text-con">看日出</div>}


                                        </div>
                                    </div>
                                </div>
                            </div>








                        </div>



                        <div className="row mb-4 ">


                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>附屬設施</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>

                                            {item.tag['戲水區'] && <div className="text-con">戲水區</div>}
                                            {item.tag['停車位'] && <div className="text-con">停車位</div>}
                                            {item.tag['可泡湯'] && <div className="text-con">可泡湯</div>}
                                            {item.tag['遮雨棚'] && <div className="text-con">遮雨棚</div>}

                                            {item.tag['盥洗淋浴設施'] && <div className="text-con">盥洗淋浴設施</div>}

                                            {item.tag['遊樂器材設施'] && <div className="text-con">遊樂器材設施</div>}

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>附屬服務</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>



                                            {item.tag['提供租借裝備'] && <div className="text-con">提供租借裝備</div>}


                                            {item.tag['供早或晚餐點'] && <div className="text-con">供早或晚餐點</div>}


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="row mb-4 ">



                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>攜帶寵物</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>



                                            {item.pet ? <div className="text-con">可攜帶寵物</div> : <div className="text-con">不可攜帶寵物(導盲犬可)</div>}



                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>園區關鍵字</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>







                                            {item.keyword.map(item => (
                                                <div key={item} className="text-con">{item}</div>

                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                    </div>

                </div>


            </div>

        </>
    );

}

export default PageInfo;