import { p1, p2, p3, p4, p5, solidstar, halfstar, emptystar } from '../../../images/page/PageMange';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';



import "./itemStyle/PageFeedbackStyle.css";

const PageFeedback = (props) => {




    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-feedback">



                <div className='text-left' >

                    <h5 className="font-bold text-xl">評價回饋</h5>


                    <div className="pt-6 ">



                        <div className="row min-h-[600px] ">




                            <div className="col-3  ">

                                <div className="h-2/5 bg-soft_color p-8 flex justify-around items-center flex-col">


                                    <div className='dark:bg-gray-700 h-[60px] w-[70px] text-white rounded-xl flex justify-center items-center'><strong className='text-3xl'>3.8</strong><sub>/5</sub></div>


                                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                    <div className='flex items-center justify-center w-full'>
                                        <div className="text-md flex items-center ">

                                            {/* star 星星的map計算引入匯出 現在就用img */}

                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={solidstar} alt="" />
                                            <img className="h-4" src={halfstar} alt="" />
                                            <img className="h-4" src={emptystar} alt="" />
                                        </div>
                                    </div>

                                    <strong>共<span className="text-2xl text-blue-500 mx-1">4</span>則評價</strong>



                                </div>


                                <div className="h-3/5 bg-white p-8 flex justify-around items-center flex-col">

                                    <div className='text-center'>
                                        <strong>衛生</strong>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={halfstar} alt="" />
                                                <img className="h-4" src={emptystar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <strong>服務</strong>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={halfstar} alt="" />
                                                <img className="h-4" src={emptystar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <strong>景觀</strong>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={halfstar} alt="" />
                                                <img className="h-4" src={emptystar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <strong>設施</strong>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={halfstar} alt="" />
                                                <img className="h-4" src={emptystar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <strong>交通</strong>
                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={solidstar} alt="" />
                                                <img className="h-4" src={halfstar} alt="" />
                                                <img className="h-4" src={emptystar} alt="" />
                                            </div>
                                        </div>
                                    </div>






                                </div>




                            </div>






                            {/* <div className="h-5/6 bg-green-800 w-full flex justify-around items-center flex-col">
                                <div className='bg-gray-100 rounded-2xl h-1/4 mb-2 w-full'>12</div>
                                <div className='bg-gray-100 rounded-2xl h-1/4 mb-2 w-full'>33</div>
                                <div className='bg-gray-100 rounded-2xl h-1/4 mb-2 w-full'>55</div>
                                <div className='bg-gray-100 rounded-2xl h-1/4 mb-2 w-full'>66</div>
                            </div>

                            <div className="h-1/6 bg-red-800 w-full">
                            </div> */}



                            <div className="col-9  p-8 flex justify-around items-center flex-col bg-white">





                                <div className='bg-gray-100 rounded-2xl mb-2 w-full p-5'>

                                    <div className='row'>
                                        <div className="col-10">

                                            <strong className="text-xl pl-3 text-white bg-my_green rounded-xl py-1 mb-2 block">匿名</strong>
                                            <p>新留言需要排序自動為最上.</p>
                                            <p>新留言需要排序自動為最上.</p>

                                        </div>

                                        <div className="col-2">


                                            <div className='flex flex-col justify-between 0 h-full items-center'>



                                                <div className='dark:bg-gray-700 h-[30px] w-[50px] text-white rounded-xl flex justify-center items-center'>

                                                    <strong className='text-md'>4</strong>

                                                </div>

                                                <strong>2022-12-02</strong>

                                            </div>

                                        </div>
                                    </div>

                                </div>



                                <div className='bg-gray-100 rounded-2xl mb-2 w-full p-5'>

                                    <div className='row'>
                                        <div className="col-10">

                                            <strong className="text-xl pl-3 text-white bg-my_green rounded-xl py-1 mb-2 block">賽特</strong>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae amet ipsum expedita ad quisquam odit voluptatem repellendus soluta explicabo voluptatum laudantium vitae, ratione itaque a reiciendis inventore minus ea recusandae esse eum! Itaque corrupti quo amet tempora quia eos corporis?</p>

                                        </div>

                                        <div className="col-2">


                                            <div className='flex flex-col justify-between 0 h-full items-center'>



                                                <div className='dark:bg-gray-700 h-[30px] w-[50px] text-white rounded-xl flex justify-center items-center'>

                                                    <strong className='text-md'>4.5</strong>

                                                </div>

                                                <strong>2022-12-01</strong>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='bg-gray-100 rounded-2xl mb-2 w-full p-5'>

                                    <div className='row'>
                                        <div className="col-10">

                                            <strong className="text-xl pl-3 text-white bg-my_green rounded-xl py-1 mb-2 block">米哈遊</strong>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ratione maxime aperiam earum officia aliquid cumque culpa, eligendi tempore atque saepe reiciendis beatae nisi voluptatibus dolores deleniti. Itaque, eaque nesciunt.</p>

                                        </div>

                                        <div className="col-2">


                                            <div className='flex flex-col justify-between 0 h-full items-center'>



                                                <div className='dark:bg-gray-700 h-[30px] w-[50px] text-white rounded-xl flex justify-center items-center'>

                                                    <strong className='text-md'>4</strong>

                                                </div>

                                                <strong>2022-11-28</strong>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='bg-gray-100 rounded-2xl mb-2 w-full p-5'>

                                    <div className='row'>
                                        <div className="col-10">

                                            <strong className="text-xl pl-3 text-white bg-my_green rounded-xl py-1 mb-2 block">匿名</strong>
                                            <p>orem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ratione maxime aperiam earum officia aliquid cumque culpa, eligendi tempore atque saepe reiciendis beatae nisi voluptatibus dolores deleniti. Itaque, eaque nesciunt.</p>

                                        </div>

                                        <div className="col-2">


                                            <div className='flex flex-col justify-between 0 h-full items-center'>



                                                <div className='dark:bg-gray-700 h-[30px] w-[50px] text-white rounded-xl flex justify-center items-center'>

                                                    <strong className='text-md'>4</strong>

                                                </div>

                                                <strong>2022-11-25</strong>

                                            </div>

                                        </div>
                                    </div>

                                </div>




                                {/* more */}
                                <button className='mt-5 w-2/12 rounded-[30px] mx-auto  bg-p_color p-2 flex text-white justify-center items-center text-md text-grey-500 ' > <span className=''>看更多評價</span>   <FontAwesomeIcon icon={faCaretRight} className="ml-2" /></button>







                            </div>









                        </div>








                    </div>

                </div>


            </div>

        </>
    );

}

export default PageFeedback;