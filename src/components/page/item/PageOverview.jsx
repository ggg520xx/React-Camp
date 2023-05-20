
import { view } from '../../../images/page/PageMange';

const PageOverview = (props) => {




    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border'>



                <div className='text-left'>

                    {/* <h5 className="font-bold text-xl">營區配置圖</h5> */}
                    <h5 className="font-bold text-xl">營區要點須知</h5>


                    <div className="pt-6">



                        <img src={view} alt="" className="w-full max-h-[600px] object-cover rounded-[50px]" />

                    </div>

                </div>


            </div>

        </>
    );

}

export default PageOverview;