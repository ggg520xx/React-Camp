import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';


const MemberUsePast = (props) => {


    // 父層的位置 元件傳遞抓到的 值 告知是否此訂單留言過
    const { transmit, orderId } = props;
    console.log(transmit, orderId)
    

    // 抓出在留言板 留下的內容 並彈出
    const messageRef = useRef(null);
    
    const sendMessage = () => {
        const message = messageRef.current.value;
        if (message.trim() !== '') {
            alert(`留言內容：${message}`);
        }
    };








    let userTalkId = orderId
    console.log(userTalkId)


   

    function useData() {
        const [Data, setData] = useState(null);
        useEffect(() => {
            axios.get(`http://localhost:3000/talks?orderId=${orderId}`)
                .then(response => {

                    const userTalk = response.data
                    console.log(userTalk)
                    setData(userTalk);
            
                    
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return Data;
    }
    const userTalkInfo = useData();


    // console.log(userTalkInfo.hitokoto)
    // console.log(userTalkInfo.hitokoto)








    return (
        <>
            <button>
                <strong id="" className='block'>{transmit ? "留言給P醬了" : "給P醬留言"}</strong>
            </button>

            {userTalkInfo && userTalkInfo[0]?.hitokoto}

           {/* 1 */}


            <div className="py-3">
                <textarea ref={messageRef} id="message" className="w-full h-32 border border-gray-300 rounded-lg" style={{ maxHeight: '100px', overflow: 'auto' }} maxLength={30} disabled={transmit} defaultValue={transmit ? "你好" : ""} />
            </div>




            

            <div className="absolute bottom-0 left-0 w-full  flex flex-col">

                {transmit ? null : <button className="py-2 bg-my_black w-3/4 mb-3 text-white  hover:bg-white hover:text-my_green mx-auto" onClick={sendMessage} >發送留言</button> }

            </div>

        </>
    );
};

export default MemberUsePast;