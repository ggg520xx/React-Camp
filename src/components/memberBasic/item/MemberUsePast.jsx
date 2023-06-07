import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

const MemberUsePast = (props) => {


    // 父層的位置 元件傳遞抓到的 值 告知是否此訂單留言過
    const { transmit, orderId } = props;

    // 抓值去偵測變化
    const [responseStatus, setResponseStatus] = useState(transmit);

    // 抓出當前登入帳戶的
    let userId = localStorage.getItem('id');
    let name = localStorage.getItem('name');
    let nickname = localStorage.getItem('nickname');


    // 抓出在留言板 留下的內容 並送出
    const messageRef = useRef(null);
    const fromWhoRef = useRef(null);
    const fromRef = useRef(null);

    const sendMessage = () => {
        const message = messageRef.current.value;
        const fromWho = fromWhoRef.current.value;
        const from = fromRef.current.value;

        if (message.trim() !== '' && fromWho.trim() !== '' && from.trim() !== '') {
            const messageLength = message.length;
            const talkInfoPost = {
                uuid: uuidv4(),
                hitokoto: message,
                from_who: fromWho,
                from: from,
                creator: name,
                creator_uid: userId,
                created_at: Date.now(),
                length: messageLength,
                orderId: orderId,
                type: "a", //我未用  //過去住宿的分類 未來若有使用到其他的對話選項分類為bc..
                reviewer: 0, //我未用 
                commit_from: "web", //我未用 
            };

            axios.post('http://localhost:3000/talks', talkInfoPost)
                .then(response => {
                    // post新的留言資料 就patch 更改訂單代表已使用留言
                    axios.patch(`http://localhost:3000/orders/${orderId}`, { "live2dMessage": true })
                        .then(response => {
                            setResponseStatus(!responseStatus);

                            // alert(`已送出${nickname}的留言，看板娘將隨機呈現於其他用戶查看`);
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
                                icon: 'success',
                                title: `已送出${nickname}的留言，看板娘將隨機呈現於其他用戶查看`
                            })

                            
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    // 禁用 textarea 元素的 Enter 鍵換行行為
    // 使用 enter 去換行斷行會增加很多無謂空白, 導致輸入到資料庫內異常
    // 該函式攔截該事件並呼叫 event.preventDefault() 阻止預設行為，從而禁用了 Enter 鍵的換行
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };


    // 取得留言資料的顯示 並去更動true false 重新 get
    const [userTalkInfo, setUserTalkInfo] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios.get(`http://localhost:3000/talks?orderId=${orderId}`)
                .then(response => {
                    const userTalk = response.data;
                    console.log(userTalk);
                    // 更新数据
                    setUserTalkInfo(userTalk); // 更新userTalkInfo的值
                })
                .catch(error => {
                    console.log(error);
                });
        };

        fetchData();
    }, [responseStatus, orderId]);



    return (
        <>
            <button>
                <strong id="" className='block'>{transmit ? "有給P醬留言囉" : "來給P醬留言吧"}</strong>
            </button>



            <div className="py-3">
                <textarea ref={messageRef} id="message" className="w-full h-32 border border-gray-300 rounded-lg" style={{ maxHeight: '100px', overflow: 'hidden' }} maxLength={30} disabled={transmit} placeholder={userTalkInfo && userTalkInfo[0]?.hitokoto ? userTalkInfo[0]?.hitokoto : '留下想說的心情，看板娘收集後會念給大家看哟'} onKeyDown={handleKeyDown}
                />
            </div>



            <div className="w-full h-32">

                <div className="mb-1">
                    <input className="border-gray-300 rounded-lg w-full"
                        type="text"
                        id="from"
                        maxLength={6}
                        disabled={transmit}
                        placeholder={userTalkInfo && userTalkInfo[0]?.from_who ? userTalkInfo[0]?.from_who : '留下暱稱或小名'} ref={fromWhoRef}
                    />
                </div>

                <div className="mb-1">
                    <input className="border-gray-300 rounded-lg w-full"
                        type="text"
                        id="author"
                        maxLength={6}
                        disabled={transmit}
                        placeholder={userTalkInfo && userTalkInfo[0]?.from ? userTalkInfo[0]?.from : '從哪裡來的呢？'} ref={fromRef}
                    />
                </div>

            </div>



            <div className="absolute bottom-0 left-0 w-full  flex flex-col">

                {responseStatus ? null : <button disabled={responseStatus} className="py-2 bg-my_black w-3/4 mb-3 text-white  hover:bg-white hover:text-my_green mx-auto" onClick={sendMessage} >發送留言</button>}
            </div>
        </>
    );
};

export default MemberUsePast;