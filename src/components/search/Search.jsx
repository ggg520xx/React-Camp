import SearchPath from './item/SearchPath';
import SearchPickSide from './item/SearchPickSide';
import SearchPickSideRight from './item/SearchPickSideRight';
import SearchUnderSlogan from './item/SearchUnderSlogan';



// 突然想放背景圖 來包裹所有元件
import { indexBottomBg } from '../../images/search/SearchMange';


import React, { useState } from 'react';

function Search() {





    return (
        <>

            {/* // 突然想放背景圖 來包裹所有元件 */}
            <div className="w-full h-auto bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${indexBottomBg})` }}>



                {/* 元件引用 */}
                <div className="container pb-5 md:px-3">
                    <SearchPath />


                    <div className='row'>


                        <SearchPickSide />
                        <SearchPickSideRight />



                    </div>



                </div>
                <SearchUnderSlogan />




            </div>
        </>
    );
}

export default Search;
// 匯出這個函式功能