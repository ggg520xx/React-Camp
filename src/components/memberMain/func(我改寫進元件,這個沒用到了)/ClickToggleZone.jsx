import React, { useState } from "react";



// class ClickToggle extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             expanded: false
//         };


//         // 在這裡綁定 handleClick 方法
//         this.handleClick = this.handleClick.bind(this);


//     }

//     handleClick() {
//         this.setState({
//             expanded: !this.state.expanded
//         });
//     }


//     render() {
//         return (
//             <>
//                 <button onClick={this.handleClick}>
//                     {this.state.expanded ? "收回" : "展開"}
//                 </button>
//                 {this.state.expanded && (
//                     <div>這裡是區塊內容。</div>
//                 )}
//             </>
//         );
//     }
// }



// ---------------------------------------------

//  ai 改寫 原本的class components 改寫成 func components

const ClickToggle = () => {

    // Use the `useState` hook to initialize the `expanded` state
    const [expanded, setExpanded] = useState(false);


    // Define a function to toggle the `expanded` state
    const handleClick = () => {
        setExpanded(prevExpanded => !prevExpanded);
    }
    // 設置狀態 不等於原先狀態


    return (
        <>
            <button onClick={handleClick}>
                {expanded ? "收回" : "展開"}
            </button>
            {/* 從state 狀態判別 現在是收回還是展開 */}

            {/* 預設 為 false 也就是 顯現展開的按鈕(實際未展開 點擊後 使用 ＆＆條件判定 ) */}

            {/* true && expression 顯示收回的話(實際內容展開 顯示區塊的東西) 總是回傳 expression */}
            {/* false && expression 顯現展開的按鈕(實際未展開 不顯示東西) 總是回傳 false */}

            {expanded && (
                <div className="h-[100px] bg-red-500">這裡是區塊內容。</div>
            )}
        </>
    );
};




export default ClickToggle;
// 匯出這個函式功能