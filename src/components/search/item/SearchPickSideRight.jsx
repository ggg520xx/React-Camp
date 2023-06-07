import SearchResult from './SearchResult';



import React, { useState } from 'react';
import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';


const SearchPickSideRight = (props) => {

    // 傳給
    // const [campDataLength, setCampDataLength] = useState(0); 拉回陣列數量 計算停用

    // 傳給子元件地區選擇
    const [areaChoose, setAreaChoose] = useState();





    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { buildWood, setBuildWood, buildTruck, setBuildTruck, buildOther, setBuildOther, buildNone, setBuildNone, providShower, setProvidShower, providPlay, setProvidPlay, providRentEquip, setProvidRentEquip, providMeal, setProvidMeal, providGuide, setProvidGuide, providPool, setProvidPool, providSpring, setProvidSpring, providRainCover, setProvidRainCover, providCarArea, setProvidCarArea, viewHigh, setViewHigh, viewForest, setViewForest, viewGrass, setViewGrass, viewKawa, setViewKawa, viewCloudSea, setViewCloudSea, viewSunrise, setviewSunrise, tagvalues, setTagValues, campDataFilter, setcampDataFilter, campDataResult, setcampDataResult, startFilters, campDataNum, setcampDataNum, campDataPrice, setcampDataPrice } = useMyTagShowHide(MyTagShowHide);







    const clearFilters = () => {


        setBuildWood(false);
        setBuildTruck(false);
        setBuildOther(false);
        setBuildNone(false);
        setProvidShower(false);
        setProvidPlay(false);
        setProvidRentEquip(false);
        setProvidMeal(false);
        setProvidGuide(false);
        setProvidPool(false);
        setProvidSpring(false);

        setProvidRainCover(false);
        setProvidCarArea(false);
        setViewHigh(false);
        setViewForest(false);
        setViewGrass(false);
        setViewKawa(false);
        setViewCloudSea(false);
        setviewSunrise(false);

        setTagValues([]);

        // 原本按清空會跳回預設 因為我寫了改變數值 會去 執行搜尋的useEffect 
        // 但我要讓使用者回到原本所選的排序 才是正常的
        // setcampDataResult(campDataFilter)

        setcampDataNum(campDataFilter?.length)

    }










    // 組成自己點擊自己的陣列 其他有相關的也都有綁定上按鈕 改變陣列 setTagValues 更改 tagvalues 陣列
    const handleClick = (e) => {
        const newValues = tagvalues.includes(e.target.value)
            ? tagvalues.filter(v => v !== e.target.value)
            : tagvalues.concat(e.target.value);
        setTagValues(newValues);
    }



    // 點擊排序讀取出來的值 點擊到的value set出去
    const handleChange = (e) => {

        console.log(e.target.value)

        if (e.target.value === 'hotFilter') {
            setcampDataPrice('hotFilter')
        }
        if (e.target.value === 'price_hightolow') {
            setcampDataPrice('price_hightolow')
        }

        if (e.target.value === 'price_lowtohigh') {
            setcampDataPrice('price_lowtohigh')
        }
    }





    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}


            <div className="lg:col-9 w-full">



                {/* bg-gray-100 w-full px-8 py-3  shadow-xl rounded-3xl mb-3 */}
                <div className='bg-gray-100 w-full px-8 py-5 shadow-xl rounded-md border-gray-200 border'>

                    {/* <h3 className='font-bold text-xl'>
                        找到 <span>{ }</span>  <span className="text-blue-500">0</span> 個 相關搜尋結果
                    </h3> */}

                    {/* <hr className="my-3" /> */}

                    <div className='flex items-center'>

                        <h3 className='font-bold text-xl text-left whitespace-nowrap'>
                            條件篩選：
                        </h3>

                        <div className="flex flex-wrap">






                            {buildWood && <button onClick={(e) => { setBuildWood(!buildWood); handleClick(e) }} value="小木屋營區類" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>小木屋營區類</button>}

                            {buildTruck && <button onClick={(e) => { setBuildTruck(!buildTruck); handleClick(e) }} value="露營車營區類" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>露營車營區類</button>}

                            {buildOther && <button onClick={(e) => { setBuildOther(!buildOther); handleClick(e) }} value="其他遮蔽建物" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>其他遮蔽建物</button>}

                            {buildNone && <button onClick={(e) => { setBuildNone(!buildNone); handleClick(e) }} value="僅提供營地類" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>僅提供營地類</button>}

                            {providShower && <button onClick={(e) => { setProvidShower(!providShower); handleClick(e) }} value="盥洗淋浴設施" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>盥洗淋浴設施</button>}

                            {providPlay && <button onClick={(e) => { setProvidPlay(!providPlay); handleClick(e) }} value="遊樂器材設施" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遊樂器材設施</button>}

                            {providRentEquip && <button onClick={(e) => { setProvidRentEquip(!providRentEquip); handleClick(e) }} value="提供租借裝備" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>提供租借裝備</button>}

                            {providMeal && <button onClick={(e) => { setProvidMeal(!providMeal); handleClick(e) }} value="供早或晚餐點" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供早或晚餐點</button>}

                            {providGuide && <button onClick={(e) => { setProvidGuide(!providGuide); handleClick(e) }} value="供導覽或活動" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供導覽或活動</button>}


                            {providPool && <button onClick={(e) => { setProvidPool(!providPool); handleClick(e) }} value="戲水區" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>戲水區</button>}
                            {providSpring && <button onClick={(e) => { setProvidSpring(!providSpring); handleClick(e) }} value="可泡湯" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>可泡湯</button>}



                            {providRainCover && <button onClick={(e) => { setProvidRainCover(!providRainCover); handleClick(e) }} value="遮雨棚" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遮雨棚</button>}
                            {providCarArea && <button onClick={(e) => { setProvidCarArea(!providCarArea); handleClick(e) }} value="停車位" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>停車位</button>}

                            {viewHigh && <button onClick={(e) => { setViewHigh(!viewHigh); handleClick(e) }} value="高海拔" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>高海拔</button>}
                            {viewForest && <button onClick={(e) => { setViewForest(!viewForest); handleClick(e) }} value="森林內" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>森林內</button>}
                            {viewGrass && <button onClick={(e) => { setViewGrass(!viewGrass); handleClick(e) }} value="大草皮" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>大草皮</button>}
                            {viewKawa && <button onClick={(e) => { setViewKawa(!viewKawa); handleClick(e) }} value="近溪流" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>近溪流</button>}
                            {viewCloudSea && <button onClick={(e) => { setViewCloudSea(!viewCloudSea); handleClick(e) }} value="觀雲海" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>觀雲海</button>}
                            {viewSunrise && <button onClick={(e) => { setviewSunrise(!viewSunrise); handleClick(e) }} value="看日出" className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>看日出</button>}





                            {/* 要能再次被點選取消 */}
                            {/* {searchFilterTag.map((item, index) => <button key={index} type="button" className="m-searchTag3 rounded" onClick={handleTagClick}>{item}</button>)} */}

                        </div>
                    </div>

                    <hr className="my-3" />


                    {/* 執行再次搜尋條件 或清除條件 */}
                    <div className='row justify-around'>

                        <button onClick={startFilters} className='sm:col-4 col-5   my-1 border border-blue-800 rounded-sm py-1 px-3 text-md font-semibold hover:bg-my_blue hover:text-white'>執行搜尋</button>

                        <button onClick={clearFilters} className='sm:col-4 col-5   my-1 border border-red-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-red-800 hover:text-white'>清空篩選</button>

                    </div>


                </div>





                {/* 搜尋結果排序 */}
                <div className="py-5 w-full flex justify-between items-center px-2">


                    <h3 className='font-bold text-xl'>
                        找到  <span className="text-blue-500">{campDataNum}</span> 個 相關搜尋結果
                    </h3>



                    <label htmlFor="underline_filter" className="sr-only">Underline select</label>

                    <select defaultValue="hotFilter" onChange={(e) => { handleChange(e) }} id="underline_filter" className="text-center block py-2.5 px-0 w-1/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">

                        {/* 我想想一點也不需要預設 誰會看預設id的 */}
                        {/* <option selected value="default_filter">預設推薦</option> */}

                        <optgroup label="預設推薦">
                            <option value="hotFilter">熱門推薦</option>
                        </optgroup>

                        <optgroup label="評價排序">
                            <option value="like_hightolow">評價-高到低</option>
                            <option value="like_lowtohigh">評價-低到高</option>
                        </optgroup>

                        <optgroup label="價格排序">
                            <option value="price_hightolow">價格-高到低</option>
                            <option value="price_lowtohigh">價格-低到高</option>
                        </optgroup>

                    </select>


                </div>




                {/* 搜尋結果  引入子層的props */}
                <SearchResult />

                {/* <SearchResult setValueAttr={setCampDataLength} 傳props停用 /> */}




            </div>




        </>
    );



}

export default SearchPickSideRight;