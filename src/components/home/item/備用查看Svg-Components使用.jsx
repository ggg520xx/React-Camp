// import { indexBottomBg, IndexBg } from '../../../images/index/IndexMange';





const CampAboutUs = (props) => {





    return (
        <>

            {/* banner (background) tailwind JSX 難以用css 以下有解決方法 */}
            {/* https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js */}






            {/* <img src={indexBanner} alt="" className="w-full max-h-[70vh] object-cover rounded-b-[100px]" /> */}

            {/* 背景用到搜需頁面好了 */}
            {/* <div className="w-full min-h-[80vh] bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${indexBottomBg})` }}></div> */}
            {/* bg-fixed 固定背景 */}


            {/* <div className="w-full min-h-[80vh] bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${indexBottomBg})` }}>
            </div> */}

            {/* ------------------------------------- */}







            {/* https://medium.com/itsoktomakemistakes/react-create-react-app-svg-icons-styled-component-570b4e9f07b */}

            {/* svg component 做引入可以 動態改變 並保留svg特性 */}
            {/* <IndexBg className="w-full min-h-[80vh] bg-no-repeat bg-cover bg-center bg-fixed" stroke="#DB7290" strokeWidth="1rem"></IndexBg> */}


        </>
    );



}

// export default CampAboutUs;