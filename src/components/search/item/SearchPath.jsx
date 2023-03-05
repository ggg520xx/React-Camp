import { Link, useNavigate } from "react-router-dom";

import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';
import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';

const SearchPath = (props) => {


    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { inputGlobal, setInputGlobal } = useMyContextSearch(MyContextSearch);

    const {areaChoose, setAreaChoose, areaChooseId, setAreaChooseId } = useMyTagShowHide(MyTagShowHide);


    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}


          
            <div className='py-5'>
            
                <div className="w-full  bg-soft_color text-left pl-5 py-1 rounded-[50px]" >
                    <p className="font-bold  text-my_blue" >
                        <Link to="/" className="font-bold" >
                            首頁
                        </Link>

                        &nbsp;&nbsp;

                        <span className="text-black">&gt;</span>

                        &nbsp;&nbsp;

                        <span>{inputGlobal === '' ? '全部' : inputGlobal}</span>

                        &nbsp;&nbsp;

                        <span className="text-black">&gt;</span>
                        
                        &nbsp;&nbsp;

                        <span>{areaChoose === null ? '不限地區' : areaChoose}</span>
                    </p>
                </div>

          
            </div>



        </>
    );



}

export default SearchPath;