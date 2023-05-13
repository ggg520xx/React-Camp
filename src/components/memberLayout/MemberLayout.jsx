// 這裡的 Layout 是管理左側的  內容是 Content
import { Link, Outlet, useNavigate } from "react-router-dom";


import './MemberLayoutStyle.css'

import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../images/layout/LayoutMange';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { faSignOutAlt, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';



import React, { useState, useEffect } from "react";
// import MemberMain from '../memberMain/MemberMain'



// 突然想放背景圖 來包裹所有元件
// import { indexBottomBg } from '../../images/search/SearchMange';

import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';


const MemberLayout = () => {
    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus } = useMyContextSearch(MyContextSearch);


    const navigate = useNavigate();
    const handleBack = () => {

        navigate(-1);

    };



    // ----------------------------------
    // 元件中定義一個狀態，表示是否載入完成
    const [isLoaded, setIsLoaded] = useState(true);

    // 延遲 3 秒後，將 isLoaded 設為 false
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    // ----------------------------------



    // 登出函式 和 前台頁面的登出一樣
    async function handleLogout() {
        try {
            // 同時執行多個非同步操作
            const [response1, response2] = await Promise.all([
                navigate("/"),
                localStorage.clear(),
            ]);
            // 在所有操作完成後再執行下一步程式碼
            setLoginStatus(false);
            alert('已進行登出');
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>

            {/* bg-soft_color bg-no-repeat bg-cover bg-center */}
            {/* style={{ backgroundImage: `url(${indexBottomBg})` }} */}



            {isLoaded ?

                <div className="h-screen container relative">

                    <div className='h-full flex flex-col justify-center items-center'>

                        <div className="py-5 bg-red">


                            <div className="music">

                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                              

                            </div>


                        </div>

                        <div className="bg-soft_color w-7/12 p-0 rounded shadow-lg py-5  " >


                            <div className="py-5">
                                <h2 className="font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>用戶資料更新中</h2>
                            </div>

                            <hr className="bg-my_green h-[1px] w-8/12 mx-auto" style={{ border: 'none' }} />

                            <div className="py-5">
                                <span className="font-bold">3秒後跳轉</span>
                            </div>


                            
                        </div>

                    </div>

                </div> : <div className="row h-screen " >

                    <div className='h-full col-2 bg-my_green sticky top-0 left-0 right-0 p-0 rounded-br-[70px]'>

                        <nav className="h-[63px] px-2 sm:px-4 py-2.5  bg-my_black ">
                            {/* 內部控制 寬度 flex 置中 */}
                            <div className="container flex flex-wrap items-center justify-center mx-auto">

                                {/* LOGO+文字 */}

                                <div className="flex items-center h-6 sm:h-9">
                                    {/* <img src={indexLogo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hola Camp 會員</span>
                                </div>


                            </div>
                        </nav>





                        {/* 不干涉到我上面自己修改 連結右側的 其實放在左側的 logo bar */}
                        {/* 以下這個區塊 為左側下半部 上面nav才是 左側上半部 */}
                        <div className="">



                            <Link to='' className="block">
                                <div className="hover:bg-white hover:text-my_black rounded-xl border-t  text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">會員主頁</div>
                            </Link>

                            <Link to='order' className="block">
                                <div className="hover:bg-white hover:text-my_black rounded-xl border-t text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">訂單記錄</div>
                            </Link>

                            <Link to='like' className="block">
                                <div className="hover:bg-white hover:text-my_black rounded-xl border-t text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">收藏清單</div>
                            </Link>


                            {/* <Link to='mange' className="block">
                            <div className=" text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">帳號管理</div>
                        </Link> */}






                        </div>

                    </div>




                    {/* onClick={() => props.history.goBack() */}



                    <div className='col-10 bg-grey-100 p-0'>

                        {/* <Header /> 拉出來寫外元件也可以*/}
                        {/* Navbar 整體背景 沾粘不用Fixed 用 sticky  */}
                        <nav className="px-2 sm:px-4 py-2.5  bg-my_black ">
                            {/* 內部控制 寬度 flex 置中 */}
                            <div className="container flex flex-wrap items-center justify-between mx-auto">


                                <div className="mx-auto">
                                    <Link to="/">
                                        <img src={indexLogo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                                    </Link>
                                </div>



                                <div className="flex  items-center">






                                    <button onClick={handleBack} className="px-3">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon className="text-white mx-1" icon={faArrowLeft} />
                                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">回上頁 </span>
                                        </div>
                                    </button>

                                    <hr className="border h-[20px]" />

                                    <button onClick={handleLogout} className="px-3">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon className="text-white mx-1" icon={faSignOutAlt} />
                                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">登出 </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </nav>



                        <Outlet />

                    </div>

                </div>}





        </>
    );
}

export default MemberLayout;
// 匯出這個函式功能