// 該元件內 有寫的功能 也必須載入功能 import
// 然後 App 管理路由那的頁面 要引入這頁的元件的話 會需要引入這頁所匯出

import { Link } from "react-router-dom";

import cantFound from '../images/notFound/cant.png';




function NotFound() {
    return (
        <>


            <div className='min-h-screen'>
                {/* absolute w-full top-30 py-5 */}
                <div className="bg-my_green text-white pb-2 pt-2 ">
                    <h2 className="text-xl font-bold mb-3">找不到該頁面, 您的網址出錯了~</h2>
                    <Link to="/">
                        <span className="text-xl font-bold bg-blue-800 px-5 py-2 block rounded-xl">回到首頁</span>
                    </Link>
                </div>

                <img className='mx-auto py-32' src={cantFound} alt="" />


            </div>
        </>
    );
}



export default NotFound;
// 匯出這個函式功能