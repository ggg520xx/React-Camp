import React from "react";
import { Link } from "react-router-dom";


import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../images/search/SearchMange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { indexIcon, hot1, hot2, hot3 } from '../../images/index/IndexMange';





const MemberBasicLike = function (props) {

    // 從MemberLike的父元件所傳遞給子元件使用
    const { sortItem, num } = props;

    // 未篩選分類營地的狀態
    console.log(sortItem)
    console.log(num)

    const filteredCamps = sortItem.filter(camp => camp.areaId === num);
    console.log(filteredCamps)


    return (
        <>

            <div className="row">



                {filteredCamps ? filteredCamps?.map((item, index) => (



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
                                                <div className='flex items-center justify-end'>
                                                    <p className="text-md flex">
                                                        {/* star 星星的map計算引入匯出 現在就用img */}
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                        <img className="h-3.5" src={solidstar} alt="" />
                                                    </p>

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




                            {/* 連結點擊外的地方有愛心收藏 */}

                            {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                            <div className="rounded-full bg-white w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                                {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                                <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                                {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                            </div>


                        </div>

                    </div>



                )) : null}











            </div>


        </>
    );

}


export default MemberBasicLike;