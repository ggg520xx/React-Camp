// import { indexIcon, indexBottomBg } from '../../../images/index/IndexMange';
// 背景圖放到 搜尋頁使用了 這頁就不重複




const CampAboutUs = (props) => {










    return (
        <>

            {/* 限縮最外層 上下的內推  // 背景圖放到 搜尋頁使用了 這頁就不重複 引入style拔掉*/}
            <div className="py-24 w-full h-auto bg-no-repeat bg-cover bg-center bg-fixed" style={{}}>


                {/* <div id="particles-js"></div> */}
                {/* 標題區塊 */}


                <div className="container">

                    {/* 灰區塊 內推 影片和文字 的灰區塊 */}
                    <div className='py-12 px-12 relative bg-gray-300/30'>


                        <div className='row'>

                            <div className='col-12 col-lg-6 p-1'>

                                {/* <!-- 自適應縮放寫法  應該沒成立.. --> */}
                                <div className="relative w-full ">
                                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/7gaCnI-06fM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 p-1'>


                                {/* flex flex-col justify-around h-[300px] px-6 */}

                                <div className="px-7 ">

                                    <h4 className="mb-6">

                                        <strong className='text-my_green font-bold text-xl'>關於我們</strong>


                                    </h4>


                                    
                                    <p className="text-left text-md font-bold" style={{ letterSpacing: 1 }}>
                                        現在全球目前疫情穩定控制的情況下，國內外旅遊也逐漸回溫，在這大家出遊意願提升的時候，露營是不少人考慮的選項。

                                        <br />
                                        <br />
                                        台灣仍有營主是自己經營，使用傳統訂位及金流，往往耗時不方便且需時刻專注在回應詢問及需求上。以平台數位化後，只需從後台了解客戶下訂資訊及額外備註，便可大大節約人力

                                        我是露營地業者或營主，便能使用平台輕鬆上架放置圖片及露營資訊供消費者用戶，向更廣大的潛在群體推廣露營樂趣。
                                    </p>

                                </div>


                            </div>
                        </div>


                    </div>
                </div>


            </div>



        </>
    );



}

export default CampAboutUs;