import { Link, Outlet } from "react-router-dom";
import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../../images/search/SearchMange';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';

import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';


import Swal from 'sweetalert2'





const SearchResult = (props) => {


    // 控制重新抓取get的按鈕開關 給useEffect綁定 這個的set設定給 收藏按鈕上 他會去點擊開關 並執行對應的陣列抓取push或移除 然後patch
    const [conswitch, setConSwitch] = useState(true);
    // 如果這個設成全頁面狀態管理的話 可以點擊同時控制到所有的頁面重新get

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

                        
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'info',
                            title: "已從收藏清單中移除"
                        })


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


                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 5000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'info',
                            title: "已將此加入收藏清單"
                        })


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
    const { areaChoose, setAreaChoose, areaChooseId, setAreaChooseId, locationStatus, setlocationStatus, locationFilter, setlocationFilter, campDataFilter, setcampDataFilter, campDataResult, setcampDataResult, tagvalues, setTagValues, startFilters, searchResultFeedbackCon, setSearchResultFeedbackCon } = useMyTagShowHide(MyTagShowHide);



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
    setcampDataFilter(campData);
    // 將上面跑完判斷的 設為filter 值 去跑 特點挑選 回傳需要的組陣列結果

    // 最後才使用 篩選結果跑result
    // campDataResult, setcampDataResult
    // 結果 藉由執行搜尋 傳過來了

    // console.log(campData)
    // console.log(campDataResult)

    // if (campDataResult) {
    //     campDataResult.map((item, index) => {
    //         console.log(item)
    //         console.log(item.id)
    //     })
    // }


    // 抓取的id合併feedback的分數
    useEffect(() => {

        // 因為這裡本來就是有獲取陣列 傳進來使用 因此沒有多get 如果是其他例如訂單頁面membermain order like那邊 我把它合併 get全部和回饋資料


        // 取得回饋資料
        const fetchFeedbackData = async (campId) => {
            try {
                const response = await axios.get(`http://localhost:3000/feedbacks?campId=${campId}`);
                return response.data;
            } catch (error) {
                console.error(`Error fetching feedback data for campId ${campId}:`, error);
                return [];
            }
        };

        const getFeedbackDataForCamp = async () => {
            if (campDataResult && campDataResult.length > 0) {
                const feedbackDataPromises = campDataResult.map((campItem) =>
                    fetchFeedbackData(campItem.id)
                );
                const feedbackDataArray = await Promise.all(feedbackDataPromises);

                const campDataWithFeedback = campDataResult.map((campItem, index) => {
                    const feedbackDataForCamp = feedbackDataArray[index] || [];

                    const scores = feedbackDataForCamp.map((feedbackItem) => feedbackItem.totalScore);

                    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
                    const totalAverageScore = scores.length > 0 ? (totalScore / (scores.length * 5)).toFixed(1) : 0;
                    // toFixed(1); //只顯示到小數點後一位
                    const scoreNum = scores.length
                    // const averageScore = totalScore / scores.length;


                    return {
                        ...campItem,
                        totalScore,
                        totalAverageScore,
                        scoreNum,
                    };
                });

                console.log(campDataWithFeedback)
                setcampDataResult(campDataWithFeedback);
                // 或者根據您的需求，將結果存儲在其他狀態中
            }
        };

        getFeedbackDataForCamp();
    }, [searchResultFeedbackCon]);



    // 跑星星的函式 可放到外部func引入來元件內  在渲染處使用
    const renderStars = (averageScore) => {
        const fullStars = Math.floor(averageScore); // 完整實星數量
        const halfStar = averageScore - fullStars >= 0.5; // 是否有半星
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 空心星星數量
        const stars = [];

        // 根據完整實星數量添加實星圖片
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img key={i} className="h-4" src={solidstar} alt="" />);
        }

        // 如果有半星，添加半星圖片
        if (halfStar) {
            stars.push(<img key={fullStars} className="h-4" src={halfstar} alt="" />);
        }

        // 添加空心星星圖片
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={fullStars + i + 1} className="h-4" src={emptystar} alt="" />);
        }

        return stars;
    };


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
                            <div className="sm:col-4 col-12 px-0 sm:px-0">


                                {item?.showLogo ? <img className='h-full max-h-[210px] w-full object-cover' src={require(`../../../../assets/showLogo/${item.showLogo}`)} alt="" /> : <img className='h-full max-h-[210px] w-full object-cover' src={require('../../../images/search/collect/404.png')} alt="" />}


                                {item.hotday > 0 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0" onClick={() => { }}>

                                    <strong className="  text-lg font-bold text-my-green">New<span className='ml-2 italic'>!!</span></strong>
                                </div>}



                                {item.hotday >= 60 && <div className="rounded-r-3xl bg-white w-32 h-9 flex justify-center items-center absolute top-5 left-0" onClick={() => { }}>


                                    <strong className="  text-lg font-bold text-red-500">

                                        超人氣

                                        <span className='ml-2 italic'>!!</span>

                                    </strong>

                                    {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                    {/* <FontAwesomeIcon icon={faBookmark} className="text-lg" /> */}

                                </div>}


                            </div>



                            <div className="sm:col-8 col-12 relative">

                                <div className="flex flex-col justify-around items-start h-full py-3">

                                    <h5 className="font-bold text-xl">{item.name}</h5>

                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                        <span className="text-sm font-bold">地點：{item.address}</span>
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


                                    {/* <span>{item.totalScore}</span>
                                    <span>{item.scoreNum}</span> */}


                                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                    <div className='sm:flex block items-center justify-between w-full'>

                                        <div className="flex items-center font-bold">


                                            {/* star 星星的map計算引入匯出 現在就用img */}
                                            <strong className="text-xl px-2">{item.totalAverageScore !== undefined ? item.totalAverageScore : 'No data'}</strong>

                                            {renderStars(item.totalAverageScore)}
                                            {/* 多少分數 星星就跑幾顆樣子 */}


                                            <span className="text-sm">{item.scoreNum === 0 ? "(無資料)" : `(${item.scoreNum}筆)`}</span>
                                            {/* 有幾筆評價回饋抓feedbacks 用條件篩選抓 相關於id的筆數 同時平均值也能抓出來 */}



                                        </div>

                                        <div>

                                            <h6 className="text-right">
                                                <span className='text-p_color text-3xl font-bold'>${item.showLowPrice}</span>
                                                <span className='font-bold'> 起  /  每晚</span>
                                            </h6>

                                        </div>
                                    </div>
                                </div>



                                {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                                <div className="rounded-full bg-gray-200 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={(event) => handleClick(item.id, event)}>



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