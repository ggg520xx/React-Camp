import { indexIcon, indexBottomBg } from '../../../images/index/IndexMange';


import { NoticeLi } from './itemStyle/PageNoticeStyle'


const PageNotice = (props) => {


    return (
        <>

            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-notice">

                <div className='text-left' >

                    <h5 className="font-bold text-xl">營區須知</h5>


                    <div className="pt-6">




                        <div className="rounded-[50px] min-h-[300px] w-full bg-no-repeat bg-cover bg-center py-6" style={{ backgroundImage: `url(${indexBottomBg})` }}>




                            <div className=" rounded-[50px] min-h-[300px] w-3/4 mx-auto bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>




                                <div className='w-full p-8'>


                                    <ol className="list-decimal pl-6 text-md font-medium">
                                        <NoticeLi>晚上10點至隔日上午7點為管制時段(主要照明燈會進行熄燈)請降低您的音量、勿大聲喧嘩，以免影響其他露友或鄰近鄰居的休息。</NoticeLi>
                                        <NoticeLi>為預防火災發生，嚴禁燃放炮竹，請勿亂丟菸蒂。</NoticeLi>
                                        <NoticeLi>嚴禁於草皮上直接生火，烤肉、煮食請離地架高30公分，並且將灰燼燃燒完全放置塑膠袋，以免草皮乾死。</NoticeLi>

                                        <NoticeLi>請將垃圾分類為一般垃圾、資源回收、廚餘。放置於指定的集中區，勿任意丟棄以維護營地整潔。</NoticeLi>

                                        <NoticeLi>營區內禁止使用發電機與高耗電之電器，如電磁爐、電暖爐、電鍋、電冰箱、烤箱…等，以免造成跳電、線路燒毀。</NoticeLi>

                                        <NoticeLi>營區內孩童玩耍，皆需家長自行全程陪同。</NoticeLi>

                                        <NoticeLi>為安全起見，進出營區車輛請放慢車速，夜晚勿單獨行動以免危險，也不要餵食野生動物。</NoticeLi>
                                        <NoticeLi>本營區屬開放空間，個人安全、用品、財務應自行負責，若有遺失營區不負賠償責任。</NoticeLi>


                                        <NoticeLi>露營野炊，請特別留意食物衛生與保存，若食用自備餐飲而身體不適，請自行負責。</NoticeLi>
                                        <NoticeLi>請尊重大自然之生態共生，勿任意破壞營區環境，延續眼前美麗景致。</NoticeLi>




                                    </ol>


                                    {/* <p>晚上10點至隔日上午7點為管制時段(主要照明燈會進行熄燈)請降低您的音量、勿大聲喧嘩，以免影響其他露友或鄰近鄰居的休息。</p> */}

                                </div>

                                {/* flex flex-col justify-center items-center flex-wrap */}











                            </div>





                        </div>







                    </div>




                </div>
            </div>

        </>
    );

}

export default PageNotice;