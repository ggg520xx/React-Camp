import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../images/search/SearchMange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange';
import axios from 'axios';




const MemberBasicLike = function (props) {

    // 從MemberLike的父元件所傳遞給子元件使用
    const { sortItem, num, conCollect, setCollect, likeArray, userId } = props;

    // 未篩選分類營地的狀態
    console.log(sortItem)
    console.log(num)

    const filteredCamps = sortItem.filter(camp => camp.areaId === num);
    console.log(filteredCamps)





    const handleClick = (campId, event) => {

        event.preventDefault(); //防止觸發父層
        // event.stopPropagation();  //這還是會觸發父層元素的冒泡

        console.log(campId)

        if (likeArray.includes(campId)) {
            // 如果陣列中已經有 campId，則從陣列中移出
            const updatedLikeArray = likeArray.filter((id) => id !== campId);
            // 使用 axios.patch 將更新後的陣列傳送至伺服器
            axios.patch(`http://localhost:3000/users/${userId}`, { like: updatedLikeArray })
                .then((response) => {
                    console.log('喜歡的營區已更新', response.data);
                    // 在此處執行適當的操作，例如更新狀態或重新載入資料等
                    // setLikeArray(updatedLikeArray);
                    setCollect(!conCollect) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
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
                    setCollect(!conCollect) //開關讓他重新get畫面 並即時判斷要不要顯示收藏與否的開關
                })
                .catch((error) => {
                    console.log('更新喜歡的營區時發生錯誤', error);
                });
        }
    }







    const [campDataResult, setCampDataResult] = useState([]);




    useEffect(() => {
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
            if (filteredCamps && filteredCamps.length > 0) {
                const feedbackDataPromises = filteredCamps.map((campItem) =>
                    fetchFeedbackData(campItem.id)
                );
                const feedbackDataArray = await Promise.all(feedbackDataPromises);

                const campDataWithFeedback = filteredCamps.map((campItem, index) => {
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
                setCampDataResult(campDataWithFeedback);
                // 或者根據您的需求，將結果存儲在其他狀態中
            }
        };

        getFeedbackDataForCamp();
    }, [filteredCamps]);



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

            <div className="row">



                {campDataResult ? campDataResult?.map((item, index) => (



                    <div key={index} className="col-3 mb-4">

                        <div className="relative bg-white h-full" onClick={() => { }}>


                            {/* <Link to="/about">About</Link> */}
                            <Link to={`/page/${item.id}`}>

                                {/* 包裹img和文字欄 */}
                                <div>


                                    {item?.showLogo ? <img className="hover:opacity-80 h-[250px] min-h-[200px] w-full object-cover" src={require(`../../../assets/showLogo/${item.showLogo}`)} alt="" /> : <img className="hover:opacity-80 h-[250px] min-h-[200px] w-full object-cover" src={require('../../images/search/collect/404.png')} alt="" />}



                                    {/* 此處包裹為下層文字區塊 */}
                                    <div className=" text-gray-900 min-h-[30px] text-left px-6 py-5">


                                        <div className='row items-center py-2'>

                                            <div className='col-6 p-0'>
                                                {/* 營區名稱和地點在哪 */}
                                                <h5 className="font-bold tracking-wider text-xl">{item.name}</h5>
                                            </div>

                                            <div className='col-6 p-0'>


                                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                                <div className='flex items-center justify-end w-full'>
                                                    <div className="text-md flex items-center font-bold">

                                                        <strong className="text-xl px-2">{item.totalAverageScore !== undefined ? item.totalAverageScore : 'No data'}</strong>

                                                        {renderStars(item.totalAverageScore)}
                                                        {/* 多少分數 星星就跑幾顆樣子 */}


                                                        <span className="text-sm">{item.scoreNum === 0 ? "(無資料)" : `(${item.scoreNum}筆)`}</span>
                                                        {/* 有幾筆評價回饋抓feedbacks 用條件篩選抓 相關於id的筆數 同時平均值也能抓出來 */}
                                                    </div>

                                                </div>
                                            </div>



                                        </div>







                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                            <strong className=''>地區：{item.address}</strong>
                                        </p>


                                        {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                        {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}

                                        <div className='text-left py-2 flex flex-wrap'>
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
                                    </div>
                                </div>
                            </Link>


                            

                            {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                            <div className="rounded-full bg-gray-200 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={(event) => handleClick(item.id, event)}>
                                {/* { item.id} */}
                                <FontAwesomeIcon icon={faBookmark} className="text-lg text-my_yellow" style={{ cursor: "pointer" }} />
                            </div>

                            


                        </div>

                    </div>



                )) : null}











            </div>


        </>
    );

}


export default MemberBasicLike;