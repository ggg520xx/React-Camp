// import { Link, useNavigate } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

// import indexLogo from '../../images/index/logo.png';
import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../images/layout/LayoutMange';

import React, { useState } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';


import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';

import ScrollLogo from './item/ScrollLogo';



// ---------------------------------------------------------------------------

// 可引入圖標 但我想用 svg component 因此暫時不用這個ㄌ
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"

// import { SocialMediaOutfit } from './LayoutStyle'   // 這個style comp暫時不用 顏色覆蓋太多了

// {/* https://medium.com/itsoktomakemistakes/react-create-react-app-svg-icons-styled-component-570b4e9f07b */ }

// ---------------------------------------------------------------------------





function Layout() {

    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus } = useMyContextSearch(MyContextSearch);

    const [isOpen, setIsOpen] = useState(false);





    let name = localStorage.getItem('name');
    let nickname = localStorage.getItem('nickname');





    // 一定要這段
    const navigate = useNavigate();
















    // 登出函式 和 會員頁面的登出一樣
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
            {/* <Header /> 拉出來寫外元件也可以*/}

            {/* Navbar 整體背景 沾粘不用Fixed 用 sticky  */}
            <nav className="z-30 min-h-[60px] px-2 sm:px-4 py-2.5  bg-my_black sticky top-0 right-0 left-0 ">
                {/* 內部控制 寬度 flex 置中 */}
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    {/* LOGO+文字 */}

                    {/* <Link to="/about">About</Link> */}
                    <Link to="/" id="menu-item-home" className="flex items-center">
                        <img src={indexLogo} className="h-6 mx-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hola Camp</span>
                    </Link>

                    {/* 編排該區塊的順位 order:2 */}
                    <div className="relative flex md:order-2">




                        {loginStatus ? <div>
                            {/* 大畫面時的 頭像按鈕 */}
                            <button id="need-share-button_member" onClick={() => setIsOpen(!isOpen)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" >
                                <img className='rounded-2xl' src="https://avatar2.bahamut.com.tw/avataruserpic/f/8/f853853/f853853_s.png?v=1669060152382" alt="" />
                            </button>


                            {isOpen && (
                                <div className="translate-x-[-58px] w-[160px] z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3">
                                        <strong className="block text-md text-gray-900 dark:text-white">{name}</strong>
                                        <span className="block text-sm text-gray-900 dark:text-white">{nickname}</span>
                                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">一般會員身分</span>
                                    </div>
                                    <ul className="py-1" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to="/member" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">會員頁面</Link>
                                        </li>



                                        <li>
                                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">成為營主</Link>
                                        </li>

                                        {/* 這裡要用button 用Link登出會出錯 沒辦法寫行內函式 或執行函式 */}
                                        <li >
                                            <button onClick={handleLogout} className="mx-auto w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">登出</button>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </div> : <button onClick={() => {
                            navigate("/login")
                        }} className="px-3">
                            <div className="flex items-center">
                                <FontAwesomeIcon className="text-white mx-1" icon={faUser} />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">登入 </span>
                            </div>
                        </button>}
















                    </div>
                </div>
            </nav>

            {/* 不一定要包main */}

            <Outlet />


            <div className="bg-my_black w-full min-h-[120px]  p-5  flex items-center">
                <div className='container'>

                    <div className="row  items-center justify-between">


                        <div className="col-5">

                            <div className="flex justify-around text-lg text-white">

                                <h4 id="menu-item-home" className=' p-2 hover:border-b'>
                                    <Link to="/">
                                        <span className='p-2'>首頁資訊</span>
                                    </Link>
                                </h4>

                                <hr className="border h-auto" />


                                <h4 id="menu-item-search" className=' p-2 hover:border-b'>
                                    <Link to="/search">
                                        <span className=' p-2'>營區搜尋</span>
                                    </Link>
                                </h4>
                                <hr className="border h-auto" />

                                <h4 id="need-share-button_member" className=' p-2 hover:border-b'>
                                    <Link to="/member">
                                        <span className=' p-2'>會員專區</span>
                                    </Link>
                                </h4>
                                <hr className="border h-auto" />

                                <h4 className=' p-2 hover:border-b'>
                                    <span className=' p-2'>成為營主</span>
                                </h4>


                            </div>

                        </div>

                        <div className="col-3 ">
                            <div className="flex">
                                {/* 這是icon fontawesome引入的 */}
                                {/* <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faLine} /> */}

                                {/* 以 Component 的方式匯入至 Template，可以保留 SVG 的特性，直接使用 stroke 來改變圖形外觀 或是 參入 style comp
                                 */}




                                {/* 這邊的className是綁live2d的對話程式 */}
                                <FbSvgComp className="need-share-button_facebook"></FbSvgComp>
                                <InsSvgComp className="need-share-button_ig"></InsSvgComp>
                                <TwiSvgComp className="need-share-button_twitter"></TwiSvgComp>
                                <LineSvgComp className="need-share-button_line"></LineSvgComp>


                            </div>
                        </div>



                    </div>



                </div>
            </div>



            {/* 滾動到頁面頂端的 旋轉彈跳跳動球 */}
            <ScrollLogo id="btnup_ball" />

            {/* <div className="footer">表尾2288544</div> */}
            {/* <Footer /> 拉出來寫外元件也可以*/}
        </>
    );
}

export default Layout;
// 匯出這個函式功能