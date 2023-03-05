import React, { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";





const Login = (props) => { 

    const { onLogin, loginAlert, role, msgReg, setMsgReg } = props;
    const [memberEmail, setMemberEmail] = useState("");
    const [memberPassword, setMemberPassword] = useState("");




    const hint = () => {
        if (loginAlert === '') {
            return
        } else if (loginAlert === '登入成功') {
            return
        } else {
            return (
                <div className="alert alert-warning" role="alert">
                    {loginAlert}
                </div>
            )
        }
    }



    return (
        <>
            {/* <!-- login_page --> */}
            <div class="h-screen container relative">

                
                <div class="row justify-center relative">



                    <div class="w-6/12 p-0 rounded shadow-lg" style={{ backgroundColor: "#dfe2dd" }}>

                        <div className="col-8 m-auto pt-4">

                            <h2 className="text-center font-bold" style={{ color: "var(--darkColor)", letterSpacing: 1 }}>會員登入</h2>


                            {/* form */}
                            {/* Alert === true 顯示 */}
                            {hint()}
                            {/* 是否  用form ??*/}

                            <div class="mt-4 mb-2" >


                                <div class="input-group mb-2 h-[50px]">


                                    <div class="input-group-prepend ">
                                        {/* <span class="input-group-text bg-white" style={{ width: "50", border: "1px solid var(--priceColor)", paddingRight: 13 }}> */}
                                            {/* <FontAwesomeIcon icon={faEnvelope} className="m-auto" color="var(--priceColor)" style={{ fontSize: 20 }} /> */}
                                        {/* </span> */}
                                    </div>



                                    <input type="text" className="form-control h-100" placeholder="請輸入信箱" onChange={(e) => {
                                        setMemberEmail(e.target.value);
                                    }} style={{ letterSpacing: 1 }} required onFocus={(e) => setMemberEmail("test@gmail.com")} value={memberEmail} />

                                    
                                </div>

                                
                                <div class="input-group mb-2 h-[50px]" >
                                    {/* <div class="input-group-prepend">
                                        <span class="input-group-text bg-white" style={{ width: "50", paddingRight: "14px", border: "1.5px solid var(--priceColor)" }}>
                                            <FontAwesomeIcon icon={faUnlockAlt} className="m-auto" color="var(--priceColor)" style={{ fontSize: 20 }} />
                                        </span>
                                    </div> */}
                                    <input type="password" className="form-control h-100" placeholder="請輸入密碼" onChange={(e) => {
                                        setMemberPassword(e.target.value)
                                    }} style={{ letterSpacing: 1 }} required value={memberPassword} onFocus={(e) => setMemberPassword("1qaz!QAZ2")} />
                                </div>

                                <p className="text-muted text-right mb-1">
                                    {/* <a className="text-dark" href="forgotPassword01.html">
                                        忘記密碼?
                                    </a> */}
                                    {/* <Link to="/forget-password" className="text-dark">忘記密碼?</Link> */}
                                </p>
                                <button type="" class="btn myBtn w-100 text-white mt-0" onClick={() => onLogin(memberEmail, memberPassword)}
                                    style={{ backgroundColor: "var(--priceColor)", fontSize: 18 }}>登 入</button>
                            </div>


                            
                            <hr className="my-2" />

                            

                            <div className="d-flex justify-content-between mb-3">
                                <p className="text-muted">還不是會員嗎？</p>
                                <p className="">
                                    <Link to="/register" className="font-weight-bold" style={{ color: "var(--darkColor)" }}>
                                        立即註冊&nbsp;&nbsp;
                                    </Link>
                                </p>
                            </div>

                            

                        </div>

                    </div>

                </div>

            </div>
            {/* <!-- 登入頁面到此結束 --> */}
        </ >
    );




}

export default Login;
// 匯出這個函式功能