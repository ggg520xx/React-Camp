import React, { useState, useEffect } from "react";

import { DivCoverStyled, DivBlackCoverOutfit } from './MemberBasicStyle'

import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../images/search/SearchMange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";


// import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../images/layout/LayoutMange';
import ReactStars from "react-rating-stars-component";



import MemberEmptyStyle from './item/MemberEmptyStyle'


import MemberUseIng from './item/MemberUseIng'
import MemberUsePast from './item/MemberUsePast'
import MemberUseCancel from './item/MemberUseCancel'









// 這是呈現的版型 資料集結構相同 資料流進來後所擺放 只有日期是否已過的區別
const MemberBasic = function (props) {



    const { getdata, status } = props; // 從 props 取得 data
    console.log(getdata)
    console.log(status)







    // 開啟評價窗 禁止畫面滾動
    const [screenStop, setScreenStop] = useState(false);
    useEffect(() => {
        if (screenStop) {
            // 禁止滾動
            document.body.style.overflow = 'hidden';
        } else {
            // 恢復滾動
            document.body.style.overflow = 'auto';
        }
    }, [screenStop]);







    // 嘗試從 null 或 undefined 的值中讀取 length 屬性會出錯
    // 為解決問題 使用 length 屬性之前，先進行 null 或 undefined 的檢查
    // 三元運算符，如果 getdata 存在，則返回包含所有元素都是 false 的 expandedList 陣列，否則返回一個空陣列
    const [expandedList, setExpandedList] = useState(getdata ? Array.from({ length: getdata.length }, () => false) : []);

    const handleExpanded = (index) => {
        const newExpandedList = [...expandedList];
        newExpandedList[index] = !newExpandedList[index];
        // 抓出那一個設置狀態 不等於原先狀態
        setExpandedList(newExpandedList);
    };






    // 點擊觸發顯示及隱藏區塊
    const [visibleList, setVisibleList] = useState(getdata ? Array.from({ length: getdata.length }, () => false) : []);
    // 如果您想在 B 組件中使用這個 visible 值，您可以將它作為 prop 傳遞給 B 組件，然後在 B 組件內部使用它。
    const handleVisible = (index) => {
        const newVisibleList = [...visibleList];
        newVisibleList[index] = !newVisibleList[index];
        setVisibleList(newVisibleList);
        setScreenStop(!screenStop)
        // 使用時 就禁止畫面滾動
    };


    // 評價窗口的名字 選單
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




    // 轉為 優惠券 數字為中文的一二三數字樣子
    const numberToChinese = (number) => {
        const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        return number.toLocaleString('zh-Hans', { minimumIntegerDigits: 1 }).replace(/\d/g, (match) => digits[match]);
    }



    // const bathroomRankingStar = {
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






    return (
        <>


            {getdata ? getdata?.map((item, index) => (



                <div key={index} className="mb-4">
                    <div className="row border border-psub_color bg-white hover:shadow-xl hover:border-sub_color w-11/12 mx-auto">


                        <div className="col-3 py-3.5 border-r">

                            <strong className='py-2 bg-p_color block text-white mb-2'>訂單編號：<span>{item.code}</span></strong>



                            {/* <img className='h-[160px] w-full object-cover' src={searchDemo} alt="" /> */}
                            {item?.camp?.showLogo ? <img className='h-[190px] w-full object-cover' src={require(`../../../assets/showLogo/${item.camp.showLogo}`)} alt="" /> : <img className='h-[160px] w-full object-cover' src={require('../../images/search/collect/404.png')} alt="" />}

                        </div>



                        <div className="col-5 relative ">

                            <div className="flex flex-col justify-between items-start h-full py-3">



                                <h5 className="font-bold text-xl">{item.camp.name}</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：{item.camp.address}</span>
                                </p>


                                <div className='text-left py-2  flex flex-wrap'>

                                    {item.camp.tag['小木屋營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">小木屋營區類</span>}

                                    {item.camp.tag['露營車營區類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">露營車營區類</span>}
                                    {item.camp.tag['其他遮蔽建物'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">其他遮蔽建物</span>}
                                    {item.camp.tag['僅提供營地類'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">僅提供營地類</span>}
                                    {item.camp.tag['盥洗淋浴設施'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">盥洗淋浴設施</span>}
                                    {item.camp.tag['遊樂器材設施'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">遊樂器材設施</span>}
                                    {item.camp.tag['提供租借裝備'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">提供租借裝備</span>}
                                    {item.camp.tag['供早或晚餐點'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供早或晚餐點</span>}
                                    {item.camp.tag['供導覽或活動'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">供導覽或活動</span>}
                                    {item.camp.tag['戲水區'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">戲水區</span>}
                                    {item.camp.tag['可泡湯'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">可泡湯</span>}
                                    {item.camp.tag['遮雨棚'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">遮雨棚</span>}
                                    {item.camp.tag['停車位'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">停車位</span>}
                                    {item.camp.tag['高海拔'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">高海拔</span>}
                                    {item.camp.tag['森林內'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">森林內</span>}
                                    {item.camp.tag['大草皮'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">大草皮</span>}
                                    {item.camp.tag['近溪流'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">近溪流</span>}
                                    {item.camp.tag['觀雲海'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">觀雲海</span>}
                                    {item.camp.tag['看日出'] && <span className="mr-1 mt-2 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">看日出</span>}

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


                        <div className="col-4 relative py-3.5">

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
                                            <strong className='block mb-2'>{item.roomStart}</strong>
                                            <strong className='block mb-2'>{item.roomEnd}</strong>
                                            <strong className='block mb-2'>{item.roomDay} 日 ( {item.roomNight} 晚 )</strong>
                                            <strong className='block mb-2'>{item.campinfo.name}</strong>
                                            <strong className='block mb-2'>{item.roomNum} 帳/間</strong>
                                        </div>
                                    </div>
                                </div>



                                <button onClick={() => handleExpanded(index)} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>

                                    {expandedList[index] ? "詳細收回" : "詳細展開"}

                                </button>

                            </div>

                        </div>










                        {expandedList[index] && (
                            <div className=" bg-gray-100 w-full py-2 px-2">


                                <div className='row '>


                                    {/* 詳細的左邊 */}
                                    <div className="col-5 ">

                                        <h4 className="py-4 text-xl font-bold text-left">營區資訊</h4>


                                        <div className="row">
                                            <div className='col-4 text-left'>
                                                <strong className='block mb-2'>營區名稱：</strong>
                                            </div>
                                            <div className='col-8 text-left'>
                                                <strong className='block mb-2'>{item.camp.name}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-4 text-left'>
                                                <strong className='block mb-2'>營區主人：</strong>
                                            </div>
                                            <div className='col-8 text-left'>
                                                <strong className='block mb-2'>{item.ownerName}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-4 text-left'>
                                                <strong className='block mb-2'>營區地址：</strong>
                                            </div>
                                            <div className='col-8 text-left'>
                                                <strong className='block mb-2'>{item.camp.address}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-4 text-left'>
                                                <strong className='block mb-2'>聯絡方式：</strong>
                                            </div>
                                            <div className='col-8 text-left'>
                                                {item.camp.tel.map(tel => (
                                                    <strong key={tel} className='block mb-2'>{tel}</strong>

                                                ))}
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
                                                <strong className='block mb-2'>{item.bookDate}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>成立時間：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'>{item.bookTime}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>訂購者：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'>{item.bookName}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>付款方式：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'>
                                                    {(() => {
                                                        switch (item.payWay) {
                                                            case 'credit':
                                                                return '線上刷卡';
                                                            case 'cash':
                                                                return '現場付款';
                                                            case 'qrcode':
                                                                return '條碼付款';
                                                            // 可以繼續加入更多的付款方式
                                                            default:
                                                                return item.payWay;
                                                        }
                                                    })()}
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>付款金額：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'>{item.payPrice} 元</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>使用折扣：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'>{item.bonusUse === 1 ? "無" : numberToChinese(item.bonusUse * 10) + "折券"}</strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-5 text-left'>
                                                <strong className='block mb-2'>評價回饋：</strong>
                                            </div>
                                            <div className='col-7 text-left'>
                                                <strong className='block mb-2'><button onClick={() => handleVisible(index)}>操作-三元判斷顯示以留言並patch 後disable按鈕 未留言就可以點開</button></strong>
                                            </div>
                                        </div>



                                    </div>



                                    <div className="col-2 bg-soft_color">

                                        <div className="py-3 h-full">
                                            <strong className="text-xl font-bold">訂單操作</strong>

                                            <div className="py-5">


                                                {status === 'ing' && <MemberUseIng orderId={item.id} />}

                                                {status === 'past' && <MemberUsePast transmit={item.live2dMessage} orderId={ item.id } />}
                                                
                                           
                                                {status === 'cancel' && <MemberUseCancel reason={item.orderCancelReason} />}

                                            </div>
                                        </div>

                                    </div>






                                </div>


                            </div>
                        )}


                    </div>

                    {visibleList[index] && (


                        <DivBlackCoverOutfit>

                            <DivCoverStyled className="py-5 px-5 z-50 mx-auto rounded-xl bg-gray-200 hover:shadow-2xl">

                                <h4 className="text-xl font-bold">訂單反饋</h4>

                                <div className='py-5 px-5 flex flex-col justify-around' style={{ height: "100%" }}>

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
                                    <div className="">

                                        <div className="col-6">
                                            <p className="pl-1 mb-0">浴廁</p>
                                            <div className="rating">
                                                <ReactStars {...bathroomRankingStar} />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <p className="pl-1 mb-0">設施</p>
                                            <div className="rating">
                                                <ReactStars {...facilityRankingStar} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row d-flex justify-content-between">
                                        <div className="col-6">
                                            <p className="pl-1 mb-0">服務</p>
                                            <div className="rating">
                                                <ReactStars {...serviceRankingStar} />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <p className="pl-1 mb-0">交通</p>
                                            <div className="rating">
                                                <ReactStars {...transportRankingStar} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row d-flex justify-content-between">
                                        <div className="col-6">
                                            <p className="pl-1 mb-0">景觀</p>
                                            <div className="rating">
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


                                            <textarea className="w-3/4 form-control"
                                                onChange={(e) => setRankingText(e.target.value)}
                                                id="exampleFormControlTextarea1" rows="4" style={{ border: "1.5px solid black" }}
                                                onFocus={(e) => setRankingText("草皮保養的不錯，而且離溪邊很近，可以玩水！！！超讚的露營體驗，推薦大家來玩喔。")}
                                            ></textarea>



                                        </div>
                                    </div>
                                </div>


                                <div className='row justify-around'>

                                    <button className='col-4   my-1 border border-blue-800 rounded-sm py-1 px-3 text-md font-semibold hover:bg-my_blue hover:text-white'>送出評價</button>

                                    <button onClick={() => handleVisible(index)} className='col-4   my-1 border border-red-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-red-800 hover:text-white'>取消離開</button>

                                </div>






                            </DivCoverStyled>

                        </DivBlackCoverOutfit>



                    )}

                </div>




            )) : null}






            {/* 沒有行程記錄會顯示下面這個 */}
            {/* 首先檢查 getdata 是否為陣列且有值，如果是的話就顯示第一個 <div>，否則顯示第二個 NULL。這樣可以避免當 getdata 為 null 或 undefined 時引發錯誤 */}
            {Array.isArray(getdata) && getdata.length === 0 ? (
                <div className='py-10'>
                    <MemberEmptyStyle />
                    <h3 className="mt-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>
                        {(() => {
                            switch (status) {
                                case 'ing':
                                    return '當前無預定行程';
                                case 'past':
                                    return '過去無訂定紀錄';
                                case 'cancel':
                                    return '過去無取消紀錄';
                                // case '':  
                                //     return '';
                                // 根據你的需求補充空字串的情況
                                default:
                                    return '未知狀況紀錄，出現此訊息請來電告知';
                            }
                        })()}
                    </h3>
                </div>
            ) : null}



        </>
    );

}


export default MemberBasic;
// 匯出這個函式功能