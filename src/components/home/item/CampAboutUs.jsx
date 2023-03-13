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

                                        <strong className='text-my_green font-bold text-2xl'>關於我們</strong>


                                    </h4>


                                    <p className="text-left text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam porro eveniet ipsam quos perspiciatis, nemo quia? Quae consequuntur assumenda sit aliquam asperiores. Dolore natus molestiae nobis sit explicabo distinctio?
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