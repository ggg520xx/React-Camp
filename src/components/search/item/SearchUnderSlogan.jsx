import { underDemo } from '../../../images/search/SearchMange';
import { Link, useNavigate } from "react-router-dom";

import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';

import Swal from 'sweetalert2'

const SearchUnderSlogan = (props) => {
    // 一定要這段
    const navigate = useNavigate();


    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus } = useMyContextSearch(MyContextSearch);


    const handleRegisterClick = () => {

        if (loginStatus === true) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'warning',
                title: '用戶已登入'
            })
        }
        else {
            navigate('/register');
        }
    };

    const handleLoginClick = () => {

        if (loginStatus === true) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'warning',
                title: '用戶已登入'
            })
        }
        else {
            navigate('/login');
        }
    };

    return (

        <>



            <div className="bg-my_green ">

                <div className='row'>

                    <div className='col-6 p-0'>

                        {/* <div className='h-full flex flex-col  justify-around items-center border'> */}






                        {/* flex flex-col justify-around items-center */}

                        <div className='row  h-full'>

                            {/* 造型的間隔 */}
                            <div className='col-4'>
                            </div>





                            <div className='col-8  flex flex-col justify-around items-start pt-10 pr-10'>


                                <div className=" text-white text-left">
                                    <h3 className=" text-4xl ">還沒加入會員嗎？
                                        <br />
                                        加入會員，使用各種服務
                                    </h3>

                                    <p className='mt-4'>現在就加入會員，馬上蒐藏喜歡的景點，即刻就準備出發，讓這個週末不再無趣</p>
                                </div>



                                <div className='w-full text-left text-white'>

                                    <button onClick={handleRegisterClick} className='font-semibold bg-my_black hover:bg-white hover:text-my_green w-3/4 h-[50px]'>註冊</button>


                                    <p className='text-lg mt-3'>或已是會員？
                                        <button onClick={handleLoginClick} className="hover:text-p_color">登入</button>
                                    </p>
                                </div>
                            </div>


                        </div>

                        {/* </div> */}
                    </div>

                    <div className='col-6 p-0'>
                        <div className="h-[400px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${underDemo})` }}>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );



}

export default SearchUnderSlogan;