import React, { useState } from "react";

import { DivContentZone, DivCoverStyled } from './MemberOrderStyle'

import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../images/search/SearchMange';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";









function MemberOrder() {


    // 本來寫在 func 但 return 部分是頁面的兩個區塊位置 不好拆 就乾脆寫在元件內了
    const [expanded, setExpanded] = useState(false);
    // Define a function to toggle the `expanded` state
    const handleClick = () => {
        setExpanded(prevExpanded => !prevExpanded);
    } // 設置狀態 不等於原先狀態




    // 點擊觸發顯示及隱藏區塊
    const [visible, setVisible] = useState(false);
    // 如果您想在 B 組件中使用這個 visible 值，您可以將它作為 prop 傳遞給 B 組件，然後在 B 組件內部使用它。
    const handleVisible = () => {
        setVisible(prevVisible => !prevVisible);
    };






    // 下拉選單
    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }



    // 星級評比 memberordercomment.    memberorder
    const [bathroomRanking, setBathroomRanking] = useState("")
    const [transportRanking, setTransportRanking] = useState("")
    const [facilityRanking, setFacilityRanking] = useState("")
    const [serviceRanking, setServiceRanking] = useState("")
    const [sceneryRanking, setSceneryRanking] = useState("")
    const [rankingText, setRankingText] = useState("")







    //     size: 20,
    //     count: 5,
    //     isHalf: false,
    //     value: 0,
    //     color: "gray",
    //     activeColor: "#eec749",
    //     // a11y: true,
    //     emptyIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     halfIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     filledIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     onChange: newValue => {
    //         setBathroomRanking(newValue);
    //         console.log(`setBathroomRanking: new value is ${newValue}`);
    //     }
    // };

    // const transportRankingStar = {
    //     size: 20,
    //     count: 5,
    //     isHalf: false,
    //     value: 0,
    //     color: "gray",
    //     activeColor: "#eec749",
    //     emptyIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     halfIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     filledIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     onChange: newValue => {
    //         setTransportRanking(newValue);
    //         console.log(`setTransportRanking: new value is ${newValue}`);
    //     }
    // };

    // const facilityRankingStar = {
    //     size: 20,
    //     count: 5,
    //     isHalf: false,
    //     value: 0,
    //     color: "gray",
    //     activeColor: "#eec749",
    //     emptyIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     halfIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     filledIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     onChange: newValue => {
    //         setFacilityRanking(newValue);
    //         console.log(`setFacilityRanking: new value is ${newValue}`);
    //     }
    // };

    // const serviceRankingStar = {
    //     size: 20,
    //     count: 5,
    //     isHalf: false,
    //     value: 0,
    //     color: "gray",
    //     activeColor: "#eec749",
    //     emptyIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     halfIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     filledIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     onChange: newValue => {
    //         setServiceRanking(newValue);
    //         console.log(`setServiceRanking: new value is ${newValue}`);
    //     }
    // };

    // const sceneryRankingStar = {
    //     size: 20,
    //     count: 5,
    //     isHalf: false,
    //     value: 0,
    //     color: "gray",
    //     activeColor: "#eec749",
    //     emptyIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     halfIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     filledIcon: <FontAwesomeIcon icon={["fas", "star"]} />,
    //     onChange: newValue => {
    //         setSceneryRanking(newValue)
    //         console.log(`setSceneryRanking: new value is ${newValue}`);
    //     }
    // };



    // const { user, start, end, campAmount } = props;

    const [data, setData] = useState({
        orders: [],
        orderCampTag: [],
        orderRanking: [],
        orderCampPhoto: [],
        pastOrders: [],
        pastOrderCampTag: [],
        pastOrderRanking: [],
        pastOrderCampPhoto: [],
        pastOrderCampRanked: [],
    })




    const [activeTab, setActiveTab] = useState(1); // 初始化活動的 tab
    // 藉由按鈕去更新 值狀態
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex); // 更新活動的 tab
    };


    return (
        <>



            <DivContentZone className="py-3 bg-soft_color">
                {/* bg-soft_color */}

                {/* <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">1</span> 筆 行程待進行</h2>
                <strong>準備好開始您的行程了嗎</strong> */}

                <div>
                    <div className='h-[60px]'>
                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleTabChange(1)}>過去完成記錄</button>
                        <button className='border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white' onClick={() => handleTabChange(2)}>取消訂單記錄</button>
                    </div>





                    {/* 原本的寫法是這個 */}
                    {/* {activeTab === 1 && <p>This is the content for Tab 1.</p>}
                    {activeTab === 2 && <p>This is the content for Tab 2.</p>}
                    {activeTab === 3 && <p>This is the content for Tab 3.</p>} */}



                    {/* 下面怪怪的 必須是 1號且同時有過去記錄 顯示過去記錄 否則顯示後者 */}
                    {/* 下面怪怪的 必須是 2號且同時有取消記錄 顯示取消記錄 否則顯示後者 */}



                    {/* 點選為1或2  並且同時有值  activeTab === 1 && XX = TRUE 之後補上資料*/}

                    {activeTab === 1 ?

                        <div>
                            <div className="mt-5 row border border-psub_color bg-white hover:shadow-xl hover:border-sub_color w-4/5 mx-auto">

                                {/* <div className="col-4 border border-red-100"> */}
                                <div className="col-3 py-3.5 border-r">


                                    <strong className='bg-p_color block text-white mb-2'>訂單編號：<span>2022120301</span></strong>


                                    <img className='h-[160px] w-full object-cover' src={searchDemo} alt="" />
                                </div>



                                <div className="col-4  relative py-3.5">

                                    <div className="flex flex-col justify-between items-start h-full ">



                                        <h5 className="font-bold text-xl">安安休閒露營區</h5>

                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                            <span>地區：xxx</span>
                                        </p>


                                        <div className="text-left">
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                            <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
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

                                            {/* <div>

                                    <h6 className="">
                                        <span className='text-blue-500 text-3xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>

                                </div> */}
                                        </div>






                                    </div>



                                    {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                                    {/* <div className="rounded-full bg-gray-300 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}> */}



                                    {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                    {/* <FontAwesomeIcon icon={faBookmark} className="text-lg" /> */}
                                    {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                                    {/* </div> */}



                                </div>


                                <div className="col-5 relative py-3.5">

                                    <div className="flex flex-col justify-between items-center h-full ">


                                        <div className="flex flex-col w-full">

                                            <div className='row'>
                                                <div className='col-5 text-left'>
                                                    <strong className='block mb-2'>入住日期：</strong>
                                                    <strong className='block mb-2'>退營日期：</strong>
                                                    <strong className='block mb-2'>住營天數：</strong>
                                                    <strong className='block mb-2'>區域：</strong>
                                                    <strong className='block mb-2'>數量：</strong>
                                                </div>

                                                <div className='col-7 text-left'>
                                                    <span className='block mb-2'>2022年12月30日</span>
                                                    <span className='block mb-2'>2022年12月31日</span>
                                                    <span className='block mb-2'>1 日</span>
                                                    <span className='block mb-2'>草皮A區</span>
                                                    <span className='block mb-2'>1 帳/間</span>
                                                </div>
                                            </div>
                                            {/* <strong className='block mb-2'>成立時間：<span>2022120301</span></strong> */}
                                            {/* <strong className='block mb-2'>入住日期：<span>2022年12月30日</span></strong>
                                <strong className='block mb-2'>退營日期：<span>2022年12月31日</span></strong>
                                <strong className='block mb-2'>住營天數：<span>1</span>日</strong>
                                <strong className='block mb-2'>區域：<span>草皮A區</span></strong>
                                <strong className='block mb-2'>數量：<span>1</span>帳/間</strong> */}
                                        </div>



                                        <button onClick={handleClick} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>

                                            {expanded ? "詳細收回" : "詳細展開"}

                                        </button>

                                    </div>

                                </div>




                                {expanded && (
                                    <div className=" bg-gray-100 w-full py-3 px-2">


                                        <div className='row '>


                                            {/* 詳細的左邊 */}
                                            <div className="col-7 ">

                                                <h4 className="py-4 text-xl font-bold text-left">營區資訊</h4>


                                                <div className="row">
                                                    <div className='col-4 text-left'>
                                                        <strong className='block mb-2'>營區名稱：</strong>
                                                    </div>
                                                    <div className='col-8 text-left'>
                                                        <strong className='block mb-2'>安可休閒露營區</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-4 text-left'>
                                                        <strong className='block mb-2'>營區主人：</strong>
                                                    </div>
                                                    <div className='col-8 text-left'>
                                                        <strong className='block mb-2'>安可休</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-4 text-left'>
                                                        <strong className='block mb-2'>營區地址：</strong>
                                                    </div>
                                                    <div className='col-8 text-left'>
                                                        <strong className='block mb-2'>台南市xxxx台南市xxxxx台南市xxxxx台南市xxxxx台南市xxxxx台南市xxxxxx</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-4 text-left'>
                                                        <strong className='block mb-2'>聯絡方式：</strong>
                                                    </div>
                                                    <div className='col-8 text-left'>
                                                        <strong className='block mb-2'>02-2222222</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-4 text-left'>
                                                        <strong className='block mb-2'>其他資訊：</strong>
                                                    </div>
                                                    <div className='col-8 text-left'>
                                                        <strong className='block mb-2'> <Link to='/'>
                                                            <FontAwesomeIcon className='mr-2' icon={faFacebook} />
                                                        </Link>
                                                            <Link to='/'>
                                                                <FontAwesomeIcon className='mr-2' icon={faInstagram} />
                                                            </Link>
                                                            <Link to='/'>
                                                                <FontAwesomeIcon className='mr-2' icon={faTwitter} />
                                                            </Link>
                                                            <Link to='/'>
                                                                <FontAwesomeIcon className='mr-2' icon={faLine} />
                                                            </Link></strong>
                                                    </div>
                                                </div>





                                            </div>




                                            {/* 詳細的右邊 */}
                                            <div className="col-5">

                                                <h4 className="py-4 text-xl font-bold text-left">訂單資訊</h4>





                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>成立日期：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>2022年12月28日</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>成立時間：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>14時20分38秒</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>訂購者：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>芝麻凜</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>付款日：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>2022年12月29日</strong>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>付款方式：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>刷卡</strong>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>付款金額：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'>1230 元</strong>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className='col-5 text-left'>
                                                        <strong className='block mb-2'>評價回饋：</strong>
                                                    </div>
                                                    <div className='col-7 text-left'>
                                                        <strong className='block mb-2'><button onClick={handleVisible}>三元運算子判斷 顯示已流 並disable按鈕 未流就可點</button></strong>
                                                    </div>
                                                </div>



                                            </div>



                                        </div>


                                    </div>
                                )}





                            </div>




                            <div>
                                {visible && (

                                    <DivCoverStyled className="py-5 px-5 z-50 mx-auto rounded-xl bg-gray-200 hover:shadow-2xl">

                                        <h4 className="text-xl font-bold">訂單反饋</h4>

                                        <div className='px-5 flex flex-col justify-around' style={{ height: "90%" }}>

                                            <div className="py-5 row items-start bg-white">
                                                <div className="col-5">
                                                    <strong>評價名稱</strong>
                                                </div>
                                                <div className="col-7">

                                                    <div>
                                                        <select className="w-3/4 " onChange={(e) => handleChange(e)}>
                                                            <option value="A">匿名</option>
                                                            <option value="B">個人名稱</option>
                                                        </select>
                                                    </div>


                                                </div>
                                            </div>


                                            <div className="py-5 row items-start bg-white">
                                                <div className="col-5">
                                                    <strong>營區評價</strong>
                                                </div>

                                                <div className="col-7">



                                                    {/* <span>服務</span>
                                <span>景觀</span>
                                <span>設施</span>
                                <span>交通</span> */}



                                                    <div className='row items-center mb-1'>
                                                        <div className="col-5">
                                                            <span>衛生</span>

                                                        </div>

                                                        <div className="col-7 flex">
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='row items-center mb-1'>
                                                        <div className="col-5">
                                                            <span>衛生</span>

                                                        </div>

                                                        <div className="col-7 flex">
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='row items-center mb-1'>
                                                        <div className="col-5">
                                                            <span>衛生</span>

                                                        </div>

                                                        <div className="col-7 flex">
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='row items-center mb-1'>
                                                        <div className="col-5">
                                                            <span>衛生</span>

                                                        </div>

                                                        <div className="col-7 flex">
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='row items-center mb-1'>
                                                        <div className="col-5">
                                                            <span>衛生</span>

                                                        </div>

                                                        <div className="col-7 flex">
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                            <img className="h-4" src={solidstar} alt="" />
                                                        </div>
                                                    </div>









                                                    {/* <div >
                                    <div class="">

                                        <div className="col-6">
                                            <p class="pl-1 mb-0">浴廁</p>
                                            <div class="rating">
                                                <ReactStars {...bathroomRankingStar} />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <p class="pl-1 mb-0">設施</p>
                                            <div class="rating">
                                                <ReactStars {...facilityRankingStar} />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row d-flex justify-content-between">
                                        <div className="col-6">
                                            <p class="pl-1 mb-0">服務</p>
                                            <div class="rating">
                                                <ReactStars {...serviceRankingStar} />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <p class="pl-1 mb-0">交通</p>
                                            <div class="rating">
                                                <ReactStars {...transportRankingStar} />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-between">
                                        <div className="col-6">
                                            <p class="pl-1 mb-0">景觀</p>
                                            <div class="rating">
                                                <ReactStars {...sceneryRankingStar} />
                                            </div>
                                        </div>
                                        <div className="col-6">

                                        </div>
                                    </div>
                                </div> */}






                                                </div>
                                            </div>
                                            <div className="py-5 row items-start bg-white">
                                                <div className="col-5">
                                                    <strong>給予評價</strong>
                                                </div>

                                                <div className="col-7">


                                                    <textarea class="w-3/4 form-control"
                                                        onChange={(e) => setRankingText(e.target.value)}
                                                        id="exampleFormControlTextarea1" rows="4" style={{ border: "1.5px solid black" }}
                                                        onFocus={(e) => setRankingText("草皮保養的不錯，而且離溪邊很近，可以玩水！！！超讚的露營體驗，推薦大家來玩喔。")}
                                                    ></textarea>



                                                </div>
                                            </div>
                                        </div>


                                        <div className='row justify-around'>

                                            <button className='col-4   my-1 border border-blue-800 rounded-sm py-1 px-3 text-md font-semibold hover:bg-my_blue hover:text-white'>送出評價</button>

                                            <button onClick={handleVisible} className='col-4   my-1 border border-red-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-red-800 hover:text-white'>取消離開</button>

                                        </div>
                                    </DivCoverStyled>
                                )}
                                {/* 我會使用相同的模版塊不同的資料流  來開啟這個區塊顯示 不同的 */}
                            </div>
                        </div> : <div> 無記錄 </div>}


                    {activeTab === 2 ? <div> 有取消 </div> : <div> 目前並無記錄 </div>}

                </div>

            </DivContentZone>
        </>
    );
}

export default MemberOrder;
// 匯出這個函式功能



// import React, { useState } from 'react';

// function Tab({ children, label }) {
//     return (
//         <div>
//             {label}
//             {children}
//         </div>
//     );
// }

// function Tabs({ children }) {
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const handleClick = (index) => {
//         setSelectedIndex(index);
//     };

//     return (
//         <div>
//             <div>
//                 {React.Children.map(children, (child, index) => (
//                     <button onClick={() => handleClick(index)}>
//                         {child.props.label}
//                     </button>
//                 ))}
//             </div>
//             <div>
//                 {React.Children.map(children, (child, index) => (
//                     index === selectedIndex ? child : null
//                 ))}
//             </div>
//         </div>
//     );
// }

// function App() {
//     return (
//         <Tabs>
//             <Tab label="Tab 1">Content of Tab 1</Tab>
//             <Tab label="Tab 2">Content of Tab 2</Tab>
//             <Tab label="Tab 3">Content of Tab 3</Tab>
//         </Tabs>
//     );
// }