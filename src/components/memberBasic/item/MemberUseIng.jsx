import React, { useState, useEffect } from "react";



const MemberUseIng = (props) => {



    // 點擊打開訂單
    const [cancelClick, setCancelClick] = useState(false);
    const cancelButton = () => {
        setCancelClick(true)
    };




    // 選項的選擇 然後送出
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption) {
            alert(`已送出${selectedOption}此選項`);
        } else {
            alert('請選擇一個選項');
        }
    };




    const closeButton = () => {
        setCancelClick(false)
    };





    return (
        <>


            <button onClick={cancelButton}>
                <strong id="cancelOrder" className='block'>取消訂單</strong>
            </button>




            {cancelClick &&

                <div className="py-3">
                    <select className="w-full border border-gray-300 rounded-lg" value={selectedOption} onChange={handleOptionChange}>
                        <option selected value="">請先選擇原因</option>
                        <option value="option1">行程安排變更</option>
                        <option value="option2">天氣狀況不佳</option>
                        <option value="option3">成員突發因素</option>
                        <option value="option4">其他更優選擇</option>
                        <option value="option5">其他原因</option>
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