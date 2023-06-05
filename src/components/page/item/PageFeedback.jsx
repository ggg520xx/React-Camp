import { p1, p2, p3, p4, p5, solidstar, halfstar, emptystar } from '../../../images/page/PageMange';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';



import "./itemStyle/PageFeedbackStyle.css";

const PageFeedback = (props) => {

    const { feedbackStar, feebackArrayInfo } = props;

    console.log(feedbackStar)
    console.log(feebackArrayInfo)


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
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-feedback">



                <div className='text-left' >

                    <h5 className="font-bold text-xl">評價回饋</h5>


                    <div className="pt-6 ">



                        <div className="row min-h-[660px] ">




                            <div className="col-3  ">

                                <div className="h-2/5 bg-soft_color p-8 flex justify-around items-center flex-col">


                                    <div className='dark:bg-gray-700 h-[60px] w-[70px] text-white rounded-xl flex justify-center items-center'><strong className='text-2xl'>{feedbackStar.totalAverageScore}</strong><sub>&nbsp;/&nbsp;5</sub></div>


                                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                    <div className='flex items-center justify-center w-full'>
                                        <div className="text-md flex items-center ">

                                            {/* star 星星的map計算引入匯出 現在就用img */}

                                            {renderStars(feedbackStar.totalAverageScore)}
                                            {/* 多少分數 星星就跑幾顆樣子 */}
                                        </div>
                                    </div>

                                    <strong>共<span className="text-2xl text-blue-500 mx-1">{feedbackStar.scoreNum}</span>則評價</strong>



                                </div>


                                <div className="h-3/5 bg-white p-8 flex justify-around items-center flex-col">



                                    <div className='text-center'>

                                        <strong>服務</strong>
                                        <strong className="text-md px-2">{feedbackStar.giveservice}</strong>

                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">


                                               
                                                
                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                {renderStars(feedbackStar.giveservice)}
                                                {/* 多少分數 星星就跑幾顆樣子 */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='text-center'>

                                        <strong>景觀</strong>
                                        <strong className="text-md px-2">{feedbackStar.giveview}</strong>

                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                {renderStars(feedbackStar.giveview)}
                                                {/* 多少分數 星星就跑幾顆樣子 */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                   
                                    <div className='text-center'>

                                        <strong>設施</strong>
                                        <strong className="text-md px-2">{feedbackStar.givedevice}</strong>

                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                {renderStars(feedbackStar.givedevice)}
                                                {/* 多少分數 星星就跑幾顆樣子 */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-center'>

                                        <strong>衛生</strong>
                                        <strong className="text-md px-2">{feedbackStar.giveclean}</strong>

                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                {renderStars(feedbackStar.giveclean)}
                                                {/* 多少分數 星星就跑幾顆樣子 */}
                                            </div>
                                        </div>
                                    </div>



                                    <div className='text-center'>

                                        <strong>交通</strong>
                                        <strong className="text-md px-2">{feedbackStar.givetraffic}</strong>

                                        <div className='flex items-center justify-center w-full'>
                                            <div className="text-md flex items-center ">

                                                {/* star 星星的map計算引入匯出 現在就用img */}

                                                {renderStars(feedbackStar.givetraffic)}
                                                {/* 多少分數 星星就跑幾顆樣子 */}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>



                            <div className="col-9  p-8 flex justify-start items-center flex-col bg-white">
                                {feebackArrayInfo ? feebackArrayInfo?.map((item, index) => (
                                    <div className='bg-gray-100 rounded-2xl mb-2 w-full p-5'>
                                        <div className='row'>
                                            <div className="col-10">
                                                <strong className="text-xl px-3 py-2  text-white bg-my_green rounded-xl  block">
                                                    {item.name}
                                                </strong>

                                                <p className="px-4 pt-4 text-md font-bold">{item.comment}</p>
                                            </div>

                                            <div className="col-2">


                                                <div className='flex flex-col justify-between 0 h-full items-center'>



                                                    <div className='dark:bg-gray-700 h-[30px] w-[50px] text-white rounded-xl flex justify-center items-center'>

                                                        <strong className='text-md'>{item.totalAverage}</strong>

                                                    </div>

                                                    <strong>{item.commentDate}</strong>

                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                )) : null}












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