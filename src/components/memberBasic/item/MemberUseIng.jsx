import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'




const MemberUseIng = (props) => {
    // 一定要這段
    const navigate = useNavigate();

    // 父層的位置 元件傳遞抓到的 值 告知是否此訂單留言過   campInfoId要用來補回取消的帳棚位置
    const { orderId, campInfoId ,cancelOrder, setCancelOrder } = props;

    // 抓出當前登入帳戶的
    let userId = localStorage.getItem('id');

    // 點擊打開訂單
    const [cancelClick, setCancelClick] = useState(false);
    const cancelButton = () => {
        setCancelClick(true)
    };

    // 點擊關閉訂單
    const closeButton = () => {
        setCancelClick(false)
    };


    // 選項的抓取 然後送出
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // 確定取消 抓取選擇送出
    const handleSubmit = () => {
        if (selectedOption && selectedOption !== '') {

            // alert(`已送出${selectedOption}此選項取消訂單`);
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
                title: `已送出 " ${selectedOption} " ，以此選項取消訂單`
            })


            axios.patch(`http://localhost:3000/orders/${orderId}`, { orderCancel: true, orderCancelReason: selectedOption })
                .then(response => {
                    axios.get(`http://localhost:3000/users/${userId}`)
                        .then(response => {

                            // 取消訂單成功后，更新用户数据
                            axios.patch(`http://localhost:3000/users/${userId}`, {
                                cancel: response.data.cancel + 1
                            })
                                .then(userResponse => {
                                    // 用户数据更新成功
                                    console.log('用户取消次數已更新');
                                    navigate('/member')
                                })
                                .catch(userError => {
                                    // 用户数据更新失败
                                    console.error('更新用戶取消次數時出錯:', userError);
                                });
                        })

                        .catch(error => {
                            console.error('獲取用户資料進行更新出現問題:', error);
                        });


                })
                .catch(error => {
                    console.log(error);
                });




            
            // 取消訂單按鈕按下 會將此訂單的帳棚位置數量補回去
            // 獲取訂單資訊
            axios.get(`http://localhost:3000/orders/${orderId}`)
                .then(response => {

                    console.log(response.data)
                    const { roomStart, roomEnd, dateRange, roomNum } = response.data;

                    // 獲取營地資訊
                    axios.get(`http://localhost:3000/campinfos/${campInfoId}`)
                        .then(response => {
                            const campInfo = response.data;
                            console.log(campInfo)

                            // 找到對應日期區間的房間數量並進行補回
                            const reservation = campInfo.reservation.map(item => {
                                if (dateRange.includes(item.date)) {
                                    item.num += roomNum;
                                }
                                return item;
                            });
                            console.log(reservation)

                            // // 更新營地資訊
                            axios.patch(`http://localhost:3000/campinfos/${campInfoId}`, { reservation })
                                .then(response => {
                                    console.log('房間數量已成功補回！');




                                    setTimeout(() => {
                                        setCancelOrder(!cancelOrder)
                                    }, 500);

                                   

                                })
                                .catch(error => {
                                    console.error('更新營地資訊時發生錯誤：', error);
                                });
                        })
                        .catch(error => {
                            console.error('獲取營地資訊時發生錯誤：', error);
                        });
                })
                .catch(error => {
                    console.error('獲取訂單資訊時發生錯誤：', error);
                });
            
           
            


            



        } else {

            // alert('請選擇一個選項');
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
                icon: 'question',
                title: '請選擇一個選項'
            })


        }
    };









    return (
        <>


            <button onClick={cancelButton}>
                <strong id="cancelOrder" className='block'>取消訂單</strong>
            </button>




            {cancelClick &&

                <div className="py-3">
                    <select className="w-full border border-gray-300 rounded-lg" value={selectedOption} onChange={handleOptionChange}>
                        <option selected value=''>請先選擇原因</option>
                        <option value="行程安排變更">行程安排變更</option>
                        <option value="天氣狀況不佳">天氣狀況不佳</option>
                        <option value="成員突發因素">成員突發因素</option>
                        <option value="其他更優選擇">其他更優選擇</option>
                        <option value="其他原因">其他原因</option>
                    </select>
                </div>}



            {cancelClick &&
                <div className="absolute bottom-0 left-0 w-full  flex flex-col">

                    <button className="py-2 bg-my_black w-3/4 mb-3 text-white  hover:bg-white hover:text-my_green mx-auto" onClick={closeButton}>關閉</button>

                    <button className="py-2 bg-my_black w-3/4 mb-3 text-white  hover:bg-white hover:text-my_green mx-auto" onClick={handleSubmit} id="submit_cancel" disabled={selectedOption === ''}>確定取消</button>

                </div>}

        </>
    );
};

export default MemberUseIng;