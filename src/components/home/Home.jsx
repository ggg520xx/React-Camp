import SearchBar from './item/SearchBar';
import CampSearch from './item/CampSearch';
import CampHot from './item/CampHot';
import CampAboutUs from './item/CampAboutUs';

// 首頁兩個底部的灰色漸層
import { MyDivBottom } from './HomeStyle'
import { MyDivBottomShape } from '../../images/index/IndexMange';








function Home(props) {



    return (
        <>

            <SearchBar />



            {/* 營區搜尋 和 熱門營區 首先是灰色區塊的 style components */}
            <MyDivBottom  >

                <div className="container">
                    <CampSearch />
                    <CampHot />
                </div>


                {/* 鋸齒狀的 Cover */}
                <div className="w-full absolute ">
                    <picture >
                        <img src={MyDivBottomShape} alt="" className="w-full " />
                    </picture>
                </div>
            </MyDivBottom>


            <CampAboutUs />




        </>
    );
}

export default Home;
// 匯出這個函式功能