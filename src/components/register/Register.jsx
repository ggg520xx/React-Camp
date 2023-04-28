import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt, faEnvelope, faKey, faArrowRight, faCaretRight, faUser, faCampground, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from "react-router-dom";

import './RegisterStyle.css'

import { useForm, useWatch } from 'react-hook-form'

import axios from 'axios';

import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';

const Register = (props) => {

    // const { onLogin, loginAlert, role, msgReg, setMsgReg } = props;
    // const [memberEmail, setMemberEmail] = useState("");
    // const [memberPassword, setMemberPassword] = useState("");

    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus } = useMyContextSearch(MyContextSearch);


    // 一定要這段
    const navigate = useNavigate();


    // 使用的哪些方法
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()




    useEffect(() => {
        if (loginStatus === true) {
            navigate('/')
            return
        }


    

    }, []);


    // // 監控二次密碼和第一次輸入相同 監控第一個輸入欄位的值到 錯誤訊息處測試 下面是失敗的
    const password = watch('register_password');

    // // 監控二次密碼和第一次輸入相同
    // const password = watch('member_password'); // 監控第一個輸入欄位的值
    // const checkPassword = watch('member_checkpassword'); // 監控第二個輸入欄位

    // // 當第二個輸入欄位的值改變時進行檢查
    // useWatch({
    //     name: 'member_checkpassword',
    //     onChange: () => {
    //         if (checkPassword !== password) {
    //             // 密碼不一致，請重新輸入
    //         }
    //     },
    // });

    // const password = watch('member_password');

    // const checkPasswordMatch = (value) => {
    //     if (value !== password) {
    //         return '两次输入的密码不一致';
    //     }
    // };







    // post/register
    // post/signup
    // post/users
    // 註冊的依照需要的欄位做要求

    const onSubmit = (data) => {
        // 輸入後彈現導向
        // 有抓取物件再轉換 頁面
        console.log(data);
        let formdata = JSON.stringify(data)
        console.log(formdata);

        axios.post(`http://localhost:3000/users`, {

            "name": `${data.register_name}`,
            "nickname": `${data.register_nickname}`,
            "email": `${data.register_email}`,
            "password": `${data.register_checkpassword}`

        })
            .then(function (response) {
                console.log(response.data)

                console.log(response.data.accessToken)
                console.log(response.data.user)

                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('nickname', response.data.user.nickname);
                localStorage.setItem('id', response.data.user.id);





                if (localStorage.getItem('prevpage')) {

                    setLoginStatus(true)

                    let id = localStorage.getItem('prevpage');
                    alert('註冊成功,將導向至先前頁面')
                    navigate(`/page/${id}`)
                    localStorage.removeItem('prevpage');
                }

                else {

                    setLoginStatus(true)

                    alert('註冊成功,將導向至會員頁面')
                    navigate("/member")
                }




            })
            .catch(function (error) {
                console.log(error.response)
                alert(`註冊失敗：${error.response.data}`)
            })

    }
















    // const hint = () => {
    //     if (loginAlert === '') {
    //         return
    //     } else if (loginAlert === '登入成功') {
    //         return
    //     } else {
    //         return (
    //             <div className="alert alert-warning" role="alert">
    //                 {loginAlert}
    //             </div>
    //         )
    //     }
    // }






    return (
        <>


            {/* 測試有回傳 */}
            {/* <button onClick={() => { signupApi() }}>555</button> */}


            {/* <!-- login_page --> */}
            <div className="h-screen container relative">

                <div className='h-full flex justify-center items-center'>


                    <div className="bg-soft_color w-7/12 p-0 rounded shadow-lg py-5  " >
                        {/* style={{ backgroundColor: "#dfe2dd" }} */}


                        {/* <div> 預備放個露營縮圖 </div> */}

                        <div className="py-5">
                            <h2 className="font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>會員註冊</h2>
                        </div>



                        <hr className="bg-my_green h-[1px] w-8/12 mx-auto" style={{ border: 'none' }} />


                        {/* 帳號密碼區塊 */}
                        <div className="py-5">

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="flex  justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faUser} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="text" placeholder="請輸入姓名"  {...register('register_name', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^(?!\s)([\u4e00-\u9fa5]{2,16}|[a-zA-Z]{2,16})(?!\s)$/g,
                                                message: '不可混用之中文或英文，2-16字，不可帶空格及符號'
                                            }
                                        })} style={{ letterSpacing: 1 }} />
                                        {/* required */}
                                    </div>
                                </div>

                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.register_name?.message}
                                    {/* {errors.register_name && <span>此欄位必填</span>} */}
                                </div>



                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faCampground} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="text" placeholder="請輸入暱稱" {...register('register_nickname', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^(?!\s)([\u4e00-\u9fa5]{2,10}|[a-zA-Z]{2,10})(?!\s)$/g,
                                                message: '不可混用之中文或英文，2-10字，不可帶空格及符號'
                                            }
                                        })} style={{ letterSpacing: 1 }} />
                                        {/* required */}
                                    </div>

                                </div>
                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.register_nickname?.message}
                                    {/* {errors.register_nickname && <span>此欄位必填</span>} */}
                                </div>



                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faEnvelope} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="text" placeholder="請輸入信箱" {...register('register_email', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                message: 'Email 不合規則'
                                            }
                                        })} style={{ letterSpacing: 1 }} />
                                        {/* required */}

                                    </div>
                                </div>

                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.register_email?.message}
                                </div>




                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faKey} className=" text-white" />
                                    </div>


                                    {/* 8-16個字符，至少1個大寫字母，1個小寫字母和1個數字，其他可以是任意字符 */}
                                    <div>
                                        <input className="border-transparent" type="password" placeholder="請輸入密碼" {...register('register_password', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/g,
                                                message: '密碼 8-16字，至少1大寫字母，1小寫字母，1數字'
                                            }
                                        })} style={{ letterSpacing: 1 }} />
                                        {/* required */}
                                    </div>

                                </div>
                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.register_password?.message}
                                    {/* {errors.register_password && <span>此欄位必填</span>} */}
                                </div>



                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faCheckDouble} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="password" placeholder="再確認密碼" {...register('register_checkpassword', { required: true, maxLength: 20, validate: value => value === password })} style={{ letterSpacing: 1 }} />
                                        {/* required */}
                                    </div>
                                </div>

                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {/* {errors.register_checkpassword && <span>此欄位必填</span>} */}
                                    {errors.register_checkpassword && <span>密碼不相符</span>}
                                </div>



                                {/* 點擊註冊會帶上hook form的物件 與資料庫內的信箱比對 api內是否有重複註冊 沒有重複才顯示成功且寫入 */}

                                <div className="flex justify-center py-5">



                                    {/* onLogin(memberEmail, memberPassword) */}
                                    <button type="" className="font-bold text-my_green button_effect" onClick={() => { console.log('註冊') }}
                                        style={{ fontSize: 18 }}>註 冊</button>

                                </div>


                                <hr className="bg-my_green h-[1px] w-8/12 mx-auto" style={{ border: 'none' }} />

                                <div className="flex justify-center py-5">

                                    <strong className="">按錯了
                                        <span className='text-sub_color mx-1'>我要回前頁</span>阿！
                                    </strong>

                                    <div className="px-3">
                                        <Link to="/login" className="text-sub_color hover:text-my_green font-bold" >
                                            現在去登入
                                            <FontAwesomeIcon icon={faCaretRight} className=" text-black" />
                                        </Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- 登入頁面到此 --> */}
        </ >
    );




}

export default Register;
// 匯出這個函式功能