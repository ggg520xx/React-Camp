import ProcessTopStep from './item/ProcessTopStep';
import ProcessLeftReserve from './item/ProcessLeftReserve';
import ProcessRightCamp from './item/ProcessRightCamp';

import ProcessLeftCard from './item/ProcessLeftCard';




import { Link, useNavigate, useParams } from "react-router-dom";








function Process(props) {


    // 傳id
    const { id } = useParams();






    return (
        <>


            <div className="container min-h-screen py-5">
                <ProcessTopStep />


                <div className="row">
                    <ProcessLeftReserve />
                    <ProcessLeftCard />


                    <ProcessRightCamp />
                </div>

            </div>



        </>
    );
}

export default Process;
// 匯出這個函式功能