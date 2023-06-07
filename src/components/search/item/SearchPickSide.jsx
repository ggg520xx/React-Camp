
import { Link, useNavigate } from "react-router-dom";


import React, { useState } from 'react';
import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';



const SearchPickSide = (props) => {





    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const {  buildWood, setBuildWood, buildTruck, setBuildTruck, buildOther, setBuildOther, buildNone, setBuildNone, providShower, setProvidShower, providPlay, setProvidPlay, providRentEquip, setProvidRentEquip, providMeal, setProvidMeal, providGuide, setProvidGuide, providPool, setProvidPool, providSpring, setProvidSpring, providRainCover, setProvidRainCover, providCarArea, setProvidCarArea, viewHigh, setViewHigh, viewForest, setViewForest, viewGrass, setViewGrass, viewKawa, setViewKawa, viewCloudSea, setViewCloudSea, viewSunrise, setviewSunrise, areaChoose, setAreaChoose, areaChooseId, setAreaChooseId, locationStatus, setlocationStatus, tagvalues, setTagValues } = useMyTagShowHide(MyTagShowHide);


    // 這頁也可以藉由 改變值 改變全域 我也可以放到篩選處
    const { inputGlobal, setInputGlobal } = useMyContextSearch(MyContextSearch);


    

    // 組成自己點擊自己的陣列 其他有相關的也都有綁定上按鈕 改變陣列 setTagValues 更改 tagvalues 陣列
    const handleClick = (e) => {
        const newValues = tagvalues.includes(e.target.value)
            ? tagvalues.filter(v => v !== e.target.value)
            : tagvalues.concat(e.target.value);
        setTagValues(newValues);
    }


    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>
                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>
            </div> */}

            
            <div className="lg:col-3 block row">

                <div className='bg-gray-100 w-full px-5 py-3 shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>查看全部</p>

                    <div className="py-5">

                        {/* 點擊不限 清空所有篩選條件 */}
                        <div className="">
                            <div className='row'>
                                <button onClick={() => { 
                                    setAreaChooseId(0)
                                    setAreaChoose(null)
                                    setInputGlobal('')
                                    
                                    
                                     }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>不限地區</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-100 w-full px-5 py-3 shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>營區位置選擇</p>

                    <div className="py-5 row">

                        <div className="lg:col-12 md:col-3 col-6 pb-5">
                            <p className="my-1">北部營地區</p>
                            <div className='row'>
                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(1)
                                    setAreaChoose('雙北')
                                }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>雙北</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(2)
                                    setAreaChoose('基隆') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>基隆</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(3)
                                    setAreaChoose('宜蘭') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>宜蘭</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(4)
                                    setAreaChoose('桃竹') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>桃竹</button>
                            </div>
                        </div>

                        <div className="lg:col-12 md:col-3 col-6 pb-5">
                            <p className="my-1">中部營地區</p>

                            <div className='row'>
                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(5)
                                    setAreaChoose('苗栗') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>苗栗</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(6)
                                    setAreaChoose('中彰') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>中彰</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(7)
                                    setAreaChoose('南投') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>南投</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(8)
                                    setAreaChoose('雲林') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>雲林</button>
                            </div>
                        </div>

                        <div className="lg:col-12 md:col-3 col-6 pb-5">
                            <p className="my-1">南部營地區</p>
                            <div className='row'>
                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(9)
                                    setAreaChoose('嘉義') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>嘉義</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(10)
                                    setAreaChoose('台南') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>台南</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(11)
                                    setAreaChoose('高雄') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>高雄</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(12)
                                    setAreaChoose('屏東') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>屏東</button>
                            </div>
                        </div>

                        <div className="lg:col-12 md:col-3 col-6">
                            <p className="my-1">東部及外島</p>
                            <div className='row'>
                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(13)
                                    setAreaChoose('花蓮') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>花蓮</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(14)
                                    setAreaChoose('台東') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>台東</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(15)
                                    setAreaChoose('澎湖') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>澎湖</button>

                                <button onClick={() => {
                                    setlocationStatus(true) 
                                    setAreaChooseId(16)
                                    setAreaChoose('金馬') }} className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>金馬</button>
                            </div>
                        </div>

                    </div>


                </div>



                <div className='bg-gray-100 w-full px-5 py-3  shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>營區特點挑選</p>

                    <div className="py-5 row">


                        <div className="pb-5 lg:col-12 sm:col-4 col-12">
                            <p className="my-1">營區種類</p>
                            <div className='row'>

                                <button onClick={(e) => { setBuildWood(!buildWood); handleClick(e) }} value="小木屋營區類" className='sm:col-11 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>小木屋營區類</button>
                                <button onClick={(e) => { setBuildTruck(!buildTruck); handleClick(e) }} value="露營車營區類" className='sm:col-11 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>露營車營區類</button>
                                <button onClick={(e) => { setBuildOther(!buildOther); handleClick(e) }} value="其他遮蔽建物" className='sm:col-11 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>其他遮蔽建物</button>
                                <button onClick={(e) => { setBuildNone(!buildNone); handleClick(e) }} value="僅提供營地類" className='sm:col-11 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>僅提供營地類</button>
                            </div>
                        </div>


                        <div className="pb-5 lg:col-12 sm:col-4 col-12">
                            <p className="my-1">設施服務</p>
                            <div className='row'>
                                <button onClick={(e) => { setProvidShower(!providShower); handleClick(e) }} value="盥洗淋浴設施" className='sm:col-11 col-12  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>盥洗淋浴設施</button>
                                <button onClick={(e) => { setProvidPlay(!providPlay); handleClick(e) }} value="遊樂器材設施" className='sm:col-11 col-12  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遊樂器材設施</button>
                                <button onClick={(e) => { setProvidRentEquip(!providRentEquip); handleClick(e) }} value="提供租借裝備" className='sm:col-11 col-12  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>提供租借裝備</button>

                                <button onClick={(e) => { setProvidMeal(!providMeal); handleClick(e) }} value="供早或晚餐點" className='sm:col-11 col-12 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供早或晚餐點</button>
                                <button onClick={(e) => { setProvidGuide(!providGuide); handleClick(e) }} value="供導覽或活動" className='sm:col-11 col-12 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供導覽或活動</button>
                                <button onClick={(e) => { setProvidPool(!providPool); handleClick(e) }} value="戲水區" className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>戲水區</button>
                                <button onClick={(e) => { setProvidSpring(!providSpring); handleClick(e) }} value="可泡湯" className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>可泡湯</button>
                                <button onClick={(e) => { setProvidRainCover(!providRainCover); handleClick(e) }} value="遮雨棚" className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遮雨棚</button>

                                <button onClick={(e) => { setProvidCarArea(!providCarArea); handleClick(e) }} value="停車位" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>停車位</button>
                            </div>
                        </div>


                        <div className="lg:col-12 sm:col-4 col-12">
                            <p className="my-1">特色景觀</p>
                            <div className='row'>
                                <button onClick={(e) => { setViewHigh(!viewHigh); handleClick(e) }} value="高海拔" className='sm:col-5 col-6 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>高海拔</button>

                                <button onClick={(e) => { setViewForest(!viewForest); handleClick(e) }} value="森林內" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>森林內</button>


                                <button onClick={(e) => { setViewGrass(!viewGrass); handleClick(e) }} value="大草皮" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>大草皮</button>

                                <button onClick={(e) => { setViewKawa(!viewKawa); handleClick(e) }} value="近溪流" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>近溪流</button>

                                <button onClick={(e) => { setViewCloudSea(!viewCloudSea); handleClick(e) }} value="觀雲海" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>觀雲海</button>

                                <button onClick={(e) => { setviewSunrise(!viewSunrise); handleClick(e) }} value="看日出" className='sm:col-5 col-6  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>看日出</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </>
    );



}

export default SearchPickSide;