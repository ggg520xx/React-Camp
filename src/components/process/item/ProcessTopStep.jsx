import "./itemStyle/ProcessTopStepStyle.css";




function ProcessTopStep(props) {
    const { turnStatus } = props;


    return (
        <>

            {/* 要移動上方藍色進度條 移除第一個now 和 active 兩個css搬到下方的 step-list */}

            {turnStatus ? (
                <div className="step-wrap">
                    <div className="checkout-step">
                        <div className="step-list active now">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">填寫訂購資料</div>
                            </div>
                        </div>
                        <div className="step-list ">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">填寫付款資料</div>
                            </div>
                        </div>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="bar"></div>
                                <div className="step-name">確認訂單成立</div>
                            </div>
                        </div>

                    </div>
                </div>

            ): (
                    
                    <div className="step-wrap">
                        <div className="checkout-step">
                            <div className="step-list active">
                                <div className="step-item">
                                    <div className="bar"></div>
                                    <div className="step-name">填寫訂購資料</div>
                                </div>
                            </div>
                            <div className="step-list active now">
                                <div className="step-item">
                                    <div className="bar"></div>
                                    <div className="step-name">填寫付款資料</div>
                                </div>
                            </div>
                            <div className="step-list">
                                <div className="step-item">
                                    <div className="bar"></div>
                                    <div className="step-name">確認訂單成立</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    
                    
            )}



     






        </>
    );
}

export default ProcessTopStep;
// 匯出這個函式功能