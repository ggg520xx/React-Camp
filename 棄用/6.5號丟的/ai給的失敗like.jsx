import React, { useState, useEffect } from "react";
import { DivContentZone } from '../../src/components/memberBasic/MemberBasicStyle'
import { campLike } from '../../src/images/member/MemberMange';

import axios from 'axios';
import MemberBasicLike from '../../src/components/memberBasicLike/MemberBasicLike'


function MemberLike() {


    const [likeTab, setLikeTab] = useState(0);
    const userId = localStorage.getItem('id');

    const handleLikeTabChange = (tabIndex) => {
        setLikeTab(tabIndex);
    };

    function useData() {
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/users/${userId}`);
                    const userData = response.data;
                    console.log(userData);
                    setData(userData);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchData();
        }, [userId]);

        return data;
    }

    const userInfo = useData();
    console.log(userInfo);

    let userLike = [];

    if (userInfo && userInfo.name && userInfo.like) {
        userLike = userInfo.like;
        console.log(userLike);
    } else {
        console.log('Something is not available');
    }

    console.log(userLike);

    useEffect(() => {
        const fetchLikedCamps = async () => {
            try {
                const response = await axios.get('http://localhost:3000/camps');
                const campsData = response.data;

                // 使用者喜歡的營區id陣列 過濾出使用者喜歡的營區
                const likedCamps = campsData?.filter(camp => userLike.includes(camp.id));

                console.log(likedCamps); // 在此處顯示結果
            } catch (error) {
                console.log(error);
            }
        };

        fetchLikedCamps();
    }, []);




    return (
        <>

            <DivContentZone className="py-5 ">
                {/* bg-soft_color */}

                {/* <h2 className="text-xl font-bold">歡迎，您尚有 <span className="text-blue-500">1</span> 筆 行程待進行</h2>
                <strong>準備好開始您的行程了嗎</strong> */}



                <div className='h-[70px]'>
                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 1 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(1)}>北部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 2 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(2)}>中部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 3 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(3)}>南部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 4 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(4)}>東部營區</button>

                    <button className={`border border-sub_color rounded-sm py-2 px-3 text-md font-semibold hover:bg-p_color hover:text-white ${likeTab === 5 && 'bg-my_green text-white'
                        }`} onClick={() => handleLikeTabChange(5)}>外島營區</button>
                </div>



                <div>

                    {likeTab === 0 &&
                        <div className='py-10'>
                            <h3 className="mb-3 font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>請選擇一個想查看的紀錄</h3>
                            <img className='mx-auto rounded-[40px]' src={campLike} alt="" />
                        </div>}



                    {likeTab === 1 && <MemberBasicLike />}
                    {likeTab === 2 && <MemberBasicLike />}
                    {likeTab === 3 && <MemberBasicLike />}
                    {likeTab === 4 && <MemberBasicLike />}
                    {likeTab === 5 && <MemberBasicLike />}


                </div>


            </DivContentZone>
        </>
    );
}

export default MemberLike;

// // 匯出這個函式功能
// {/* {likeTab === 1 ? <div> 1 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 2 ? <div> 2 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 3 ? <div> 3 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 4 ? <div> 4 </div> : <div> 目前並無記錄 </div>}
// {likeTab === 5 ? <div> 5 </div> : <div> 目前並無記錄 </div>} */}.