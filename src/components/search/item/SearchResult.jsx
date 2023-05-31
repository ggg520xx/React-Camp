import { Link, Outlet } from "react-router-dom";
import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../../images/search/SearchMange';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';



import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';










const SearchResult = (props) => {


    // 控制重新抓取get的按鈕開關 給useEffect綁定 這個的set設定給 收藏按鈕上 他會去點擊開關 並執行對應的陣列抓取push或移除 然後patch
    const [conswitch, setConSwitch] = useState(true);

    // 這是抓取後設定的用戶喜歡的數字陣列 這個數字陣列會拿去跟當前跑出來的campId做比較 判斷是否為喜歡的收藏
    const [likeArray, setLikeArray] = useState([]);


    // 抓出用戶登入的id
    let userId = localStorage.getItem('id');
    const useUserData = () => {
        // const [Data, setData] = useState([]);
        useEffect(() => {
            if (userId) {
                console.log('有登入');
                axios.get(`http://localhost:3000/users/${userId}`)
                    .then((response) => {

                        const userData = response.data;
                        console.log(userData);

                        if (userData && userData.name && userData.like) {
                            const likeArray = userData.like;
                            console.log(likeArray);
                            // setData(likeArray)
                            setLikeArray(likeArray)

                        } else {
                            console.log('Something is not available');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log('無登入');
            }
        }, [conswitch]); // 將 conswitch 加入作為 useEffect 的相依 點擊收藏的開關
        // return Data; 如果需要回傳值，可以在這裡回傳
        return null;
    };
    // 在組件渲染時調用 useUserData 賦予給他
    // const userLikeData = useUserData();
    useUserData(); //改成執行一次






    const handleClick = (campId, event) => {

        event.preventDefault(); //防止觸發父層
        // event.stopPropagation();  //這還是會觸發父層元素的冒泡

        if (loginStatus) {
            if (likeArray.includes(campId)) {
                // 如果陣列中已經有 campId，則從陣列中移出
                const updatedLikeArray = likeArray.filter((id) => id !== campId);
                // 使用 axios.patch 將更新後的陣列傳送至伺服器
                axios.patch(`http://localhost:3000/users/${userId}`, { like: updatedLikeArray })
                    .then((response) => {
                        console.log('喜歡的營區已更新', response.data);
                        // 在此處執行適當的操作，例如更新狀態或重新載入資料等
                        // setLikeArray(updatedLikeArray);
                        setConSwitch(!conswitch) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
                    })
                    .catch((error) => {
                        console.log('更新喜歡的營區時發生錯誤', error);
                    });
            } else {
                // 如果陣列中沒有 campId，則將其加入陣列
                const updatedLikeArray = [...likeArray, campId];
                // 使用 axios.patch 將更新後的陣列傳送至伺服器
                axios.patch(`http://localhost:3000/users/${userId}`, { like: updatedLikeArray })
                    .then((response) => {
                        console.log('喜歡的營區已更新', response.data);
                        // 在此處執行適當的操作，例如更新狀態或重新載入資料等
                        // setLikeArray(updatedLikeArray);
                        setConSwitch(!conswitch) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
                    })
                    .catch((error) => {
                        console.log('更新喜歡的營區時發生錯誤', error);
                    });
            }
        }
    };










    // 這頁也可以藉由 改變值 改變全域 我也可以放到篩選處
    const { inputGlobal, setInputGlobal, loginStatus } = useMyContextSearch(MyContextSearch);

    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { areaChoose, setAreaChoose, areaChooseId, setAreaChooseId, locationStatus, setlocationStatus, locationFilter, setlocationFilter, campDataFilter, setcampDataFilter, campDataResult, setcampDataResult, tagvalues, setTagValues, startFilters } = useMyTagShowHide(MyTagShowHide);



    function useData() {

        // 提供跑陣列模型的
        const [data, setData] = useState(null);


        useEffect(() => {

            if (areaChoose !== null && areaChooseId >= 1) {
                // 调用另一个 API 进行数据获取
                // 例如：${areaChoose}
                axios.get(`http://localhost:3000/camps?_expand=location`)
                    .then(response => {

                        let locationSearch = response.data
                        let locationCamp = locationSearch?.filter(item => item.location['name'] === areaChoose);


                        // locationFilter != null && 
                        if (locationStatus === true) {
                            // 原陣列中有 地區 等同 我點擊的 的 id項目 就再次篩選的結果
                            // 利用點擊捕獲到的id
                            const clickSetChoose = locationFilter?.filter(camp => camp.locationId === areaChooseId)

                            setData(clickSetChoose);
                            // 導出原搜尋的 進階篩選地區

                            // setValueAttr(clickSetChoose?.length); 拉回陣列數量 計算停用
                            setlocationStatus(true)
                        } else {
                            setData(locationCamp);
                            // setValueAttr(locationCamp.length); 拉回陣列數量 計算停用
                        }
                        return
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }

            else if (inputGlobal === '北部營區' || inputGlobal === '中部營區' || inputGlobal === '南部營區' || inputGlobal === '東部營區' || inputGlobal === '外島營區') {

                axios.get(`http://localhost:3000/camps?_expand=area`)
                    .then(response => {

                        let areaSearch = response.data
                        const areaCamp = areaSearch?.filter(item => item.area['name'] === inputGlobal);

                        // setlocationFilter 這個很重要 另外存放 到全域 才能在篩選處做調整
                        setlocationFilter(areaCamp)
                        setData(areaCamp);
                        // 賦予與當前一樣選擇的結果 下面回傳出去

                        // setValueAttr(areaCamp.length); 拉回陣列數量 計算停用

                    })
                    .catch(error => {
                        console.log(error);
                    });

            } else if (areaChoose === null || areaChooseId === 0) {
                // 原本寫 areaChoose =''
                // inputGlobal !== null && areaChoose === ''

                axios.get(`http://localhost:3000/camps?q=${inputGlobal}`)
                    .then(response => {

                        // setlocationFilter 這個很重要 另外存放 到全域 才能在篩選處做調整
                        setlocationFilter(response.data)
                        setData(response.data);

                        // setValueAttr(response.data.length);拉回陣列數量 計算停用

                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }, [inputGlobal, areaChoose]);

        return data;
    }

    // 如果你希望在 inputGlobal 发生变化时才调用 useData 函数，你可以将第二个参数设置为 [inputGlobal]
    // [inputGlobal] 当 inputGlobal 发生变化时，才会调用 useData 函数并发送 HTTP 请求


    let campData = useData();

    // 將上面跑完判斷的 設為filter 值 去跑 特點挑選 回傳需要的組陣列結果
    setcampDataFilter(campData);

    // 最後才使用 篩選結果跑result
    // campDataResult, setcampDataResult
    // 結果 藉由執行搜尋 傳過來了
    console.log(campData)
    console.log(campDataResult)



    return (
        <>
            {/* 全列表範圍 */}
            <div className=' w-full'>


                {/* campDataFilter */}

                {campDataResult ? campDataResult?.map((item, index) => (

                    // 連結中使用帶參數的連結
                    <Link id="search_result" to={`/page/${item.id}`} key={item.id} className="block mb-5">

                        <div className="row min-h-[210px] border-psub_color bg-white hover:shadow-xl border  hover:border-sub_color">

                            {/* <div className="col-4 border border-red-100"> */}
                            <div className="col-4 pl-0">







                                {item?.showLogo ? <img className='h-full max-h-[210px] w-full object-cover' src={require(`../../../../assets/showLogo/${item.showLogo}`)} alt="" /> : <img className='h-full max-h-[210px] w-full object-cover' src={require('../../../images/search/collect/404.png')} alt="" />}




                                {item.hotday > 0 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0 z-10" onClick={() => { }}>

                                    <strong className="  text-lg font-bold text-my-green">New<span className='ml-2 italic'>!!</span></strong>
                                </div>}



                                {item.hotday >= 60 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0 z-20" onClick={() => { }}>


                                    <strong className="  text-lg font-bold text-red-500">

                                        超人氣

                                        <span className='ml-2 italic'>!!</span>

                                    </strong>

                                    {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                    {/* <FontAwesomeIcon icon={faBookmark} className="text-lg" /> */}

                                </div>}


                            </div>



                            <div className="col-8  relative">

                                <div className="flex flex-col justify-around items-start h-full py-3">

                                    <h5 className="font-bold text-xl">{item.name}</h5>

                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                        <span>地點：{item.address}</span>
                                    </p>


                                    <div className='text-left py-2  flex flex-wrap'>

                                        {item.tag['小木屋營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">小木屋營區類</span>}

                                        {item.tag['露營車營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">露營車營區類</span>}
                                        {item.tag['其他遮蔽建物'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">其他遮蔽建物</span>}
                                        {item.tag['僅提供營地類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">僅提供營地類</span>}
                                        {item.tag['盥洗淋浴設施'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">盥洗淋浴設施</span>}
                                        {item.tag['遊樂器材設施'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">遊樂器材設施</span>}
                                        {item.tag['提供租借裝備'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">提供租借裝備</span>}
                                        {item.tag['供早或晚餐點'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供早或晚餐點</span>}
                                        {item.tag['供導覽或活動'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供導覽或活動</span>}
                                        {item.tag['戲水區'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">戲水區</span>}
                                        {item.tag['可泡湯'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">可泡湯</span>}
                                        {item.tag['遮雨棚'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">遮雨棚</span>}
                                        {item.tag['停車位'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">停車位</span>}
                                        {item.tag['高海拔'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">高海拔</span>}
                                        {item.tag['森林內'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">森林內</span>}
                                        {item.tag['大草皮'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">大草皮</span>}
                                        {item.tag['近溪流'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">近溪流</span>}
                                        {item.tag['觀雲海'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">觀雲海</span>}
                                        {item.tag['看日出'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">看日出</span>}




                                    </div>



                                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                    <div className='flex items-center justify-between w-full'>

                                        <div className="text-md flex items-center ">

                                            {/* star 星星的map計算引入匯出 現在就用img */}

                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />

                                            <span>4.7</span>
                                            <span>(45)</span>
                                        </div>

                                        <div>

                                            <h6 className="">
                                                <span className='text-p_color text-3xl font-bold'>${item.showLowPrice}</span>
                                                <span className='font-bold'> 起  /  每晚</span>
                                            </h6>

                                        </div>
                                    </div>
                                </div>



                                {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                                <div className="rounded-full bg-gray-300 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={(event) => handleClick(item.id, event)}>



                                    {/* 有登入的話 再來進行 是不是喜歡的喜歡的為黃色 不是喜歡的灰色 */}
                                    {/* 有登入的狀態 點擊觸發 變換 */}
                                    {loginStatus ? (
                                        <>
                                            {likeArray.includes(item.id) ? (
                                                <FontAwesomeIcon icon={faBookmark} className="text-lg text-my_yellow" style={{ cursor: "pointer" }} />
                                            ) : (
                                                <FontAwesomeIcon icon={faBookmark} className="text-lg text-soft_color" style={{ cursor: "pointer" }} />
                                            )}
                                        </>
                                    ) : (
                                        // 而未登入一律全跑灰色
                                        <FontAwesomeIcon icon={faBookmark} className="text-lg text-soft_color" style={{ cursor: "pointer" }} />
                                    )}




                                </div>



                            </div>
                        </div>
                    </Link>

                )) : null}
                {/* 当 campData 不存在时，你可以使用 && 运算符判断来确保不会渲染空元素 或者你也可以使用 ternary operator 来进行判断  { ?  : null} 这两种方法都能在 campData 不存在时防止渲染空元素 */}










            </div>

        </>




    );

}

export default SearchResult;