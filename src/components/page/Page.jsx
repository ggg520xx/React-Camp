import PageGuide from './item/PageGuide';
import PagePic from './item/PagePic';
import PageInfo from './item/PageInfo';
import PageOverview from './item/PageOverview';
import PageReserve from './item/PageReserve';
import PageFeedback from './item/PageFeedback';
import PageNotice from './item/PageNotice';



import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from '../../plugins/particles/ParticlesConfig';



import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';





function Page(props) {



    const { id } = useParams();
    // 在這裡你可以使用 id 參數來取得你想要的項目資料
    // 例如：const item = getItemById(id);
    // 想在其他元件中使用id參數 可以將id作為一個 prop 傳遞給其他元件



    // 漂浮點狀特效 load func
    // ---------------------------------------------------------------
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    // -------------------------------- -------------------------------


    // 想在其他元件中使用id參數，你可以將id作為一個 prop 傳遞給其他元件
    // 在其他元件中，你可以使用props.id取得傳遞的參數









    return (
        <>

            <Particles init={particlesInit} loaded={particlesLoaded} className="inset-0 w-full h-full absolute z-[-1] " params={ParticlesConfig} />


            <PageGuide />

            <div className="container wrapper py-5">
                <PagePic itemId={id} />
                <PageInfo itemId={id} />
                <PageOverview itemId={id} />
                <PageReserve itemId={id} />
                <PageFeedback itemId={id} />
                <PageNotice itemId={id} />
            </div>
        </>
    );
}

export default Page;
// 匯出這個函式功能