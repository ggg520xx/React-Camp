import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // 注意需要引入样式文件
import 'react-date-range/dist/theme/default.css'; // 可以使用默认的主题样式，也可以自定义样式


import './ReactDateRangeStyle.css';

import { format } from 'date-fns';


function MyDatePicker(props) {




    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const oneWeekLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const twoMonthLater = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
    // 例如，設置初始日期為一周前，最小日期為一個月之類的，最大日期為一個月後，你可以這樣寫
    //     const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    //     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    //     const oneMonthLater = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());



    // Range 預設要所指定範圍區間 chang 組的 state
    const [state, setState] = useState([
        {
            startDate: today,
            endDate: today,
            key: 'selection'
        }
    ]);


    // 轉換格式  目前時間 及顯示等
    const startDateShow = format(state[0].startDate, 'yyyy年MM月dd日');
    const endDateShow = format(state[0].endDate, 'yyyy年MM月dd日');
    // const FirstDateTransfer = format(state[0].startDate, 'yyyy/MM/dd');

    const startDateShowSimple = format(state[0].startDate, 'yyyy/MM/dd');
    const endDateShowSimple = format(state[0].endDate, 'yyyy/MM/dd');




    // 點擊顯示及隱藏hooks
    const [showCalendar, setShowCalendar] = useState(false);


    function toggleExpanded() {
        // 設置顯示及隱藏的按鈕 改變顯示狀態
        setShowCalendar(!showCalendar);

        handleStateChange(); // 改變就傳值不切實際 等有按鈕一次傳   使用切換來 做函式值傳遞
        // 呼叫函式 傳值給預定按鈕判定 我本來寫在 onChange 但會每改變就抓同值 會導致結果誤判 只好綁在點擊按鈕
    }



    // 定義一個函數來傳遞 state 值到 b 頁面,也就是說我想按預定按鈕 我要確認他已經選取正確區間 並去b頁面處理
    // 我把props 利用預定頁面那邊的屬性 傳過去給他 這三個值 讓那邊使用
    const handleStateChange = () => {

        props.callDate(state, startDateShow, endDateShow);

    }






    return (
        <>

            {/* 按鈕展示目前切換時間 */}
            {/* <input type="button" onClick={toggleExpanded} value={`${startDateShow} - ${endDateShow}`} /> */}


            <button onClick={toggleExpanded} >
                {showCalendar ? `選取 ${startDateShowSimple} - ${endDateShowSimple} 點擊關閉` : `${startDateShow} - ${endDateShow}`}
            </button>




            {showCalendar && (

                <DateRange

                    className="absolute z-10"


                    // 選取值的改變 每按一下就馬上更新一次
                    onChange={item => {
                        setState([item.selection]);
                    }}



                    moveRangeOnFirstSelection={false}
                    // 啟用 第一次選擇就決定了 當下日期範圍 , 禁用則是選擇了兩個日期才改變範圍
                    // 是否將日期範圍移動到用戶第一次選擇 也就是完全選擇完才決定區間
                    // 如果你將 moveRangeOnFirstSelection 設置為 false，則當用戶選擇第一個日期時，日期區間將不會移動  , 設置true很奇怪

                    editableDateInputs={false}//可否直接編輯時間

                    // 只可從今天開始訂定
                    minDate={today}
                    // 只可訂定1個月內預約 而不是固定日期的方式
                    maxDate={oneWeekLater}
                    // maxDate={new Date(2022, 6, 3)}



                    // 我在上面 設定的陣列區間 代表的是預設選了今明兩天
                    ranges={state} //一個包含一個或多個日期範圍的數組，用於初始化日期範圍選擇器。其中包含一或多個日期區間。在這個範例中，只有一個日期區間，其起始日期和結束日期分別為 startDate 和 endDate 變數   用來指定日期範圍的陣列。




                    format='YYYY/MM/DD' //指定日期的顯示格式。 日期的顯示格式。在這個範例中，日期將顯示為 YYYY/MM/DD 格式

                    firstOfWeek={0} // firstOfWeek：指定每周的第一天（0 表示周日，1 表示周一，以此類推）。

                    months={2} // months：指定要顯示的月份數。  要顯示的月數。在這個範例中，將顯示兩個月

                    direction="horizontal" // direction：指定日期範圍選擇器的方向（可能的值有 "horizontal" 和 "vertical"）垂直或水平


                    linkedCalendars={false} //如果設置為 true，則用戶可以在兩個日曆之間進行日期範圍選擇。 如果設置為 false，則用戶只能在單個日曆中選擇日期  , 其中一個日曆用於選擇起始日期，另一個日曆用於選擇結束日期。當它設置為 false 時，將只使用一個日曆

                    singleDateRange={false}//當它設置為 true 時，用戶只能選擇一個日期，而無法選擇日期區間。當它設置為 false 時，用戶可以選擇一個日期區間。

                    showSelectionPreview={true}//選擇日期時顯示預覽。當它設置為 true 時，在選擇日期範圍時將顯示一個半透明的覆蓋層，以預覽用戶選擇的日期區間。當它設置為 false 時，在選擇日期時將不會顯示
                />
            )}
        </>
    );
}

export default MyDatePicker;








// 你可以使用 onChange 屬性來指定選擇日期時要執行的回調函數，並使用 minDate 和 maxDate 屬性來設定可以選擇的日期範圍

// 我们使用了 React 的 useState Hook 来管理选择的日期范围的起始日期和结束日期。然后，我们使用 DateRangePicker 组件渲染日期范围选择器，并使用 onChange 回调来更新组件状态
// 使用了 DateRangePicker 组件来呈现日期選擇器，通过设置 ranges 属性来指定默认选中的日期范围，并通过设置 onChange 属性来监听用户选择的日期变化




// 當時我用原生日期換算 轉換的要死 三大時間格式套件 Moment.js  Day.js  date-fns   

// 裡面提到了另一個 library 叫做 Moment.js，可以簡單理解為「mutable 版本的 Day.js」，也算是上個時代用來處理日期時間的熱門 library，但因為目前已經算是 deprecated 狀態，因此這邊就不特別說明它了
// 官方停止维护的moment.js




