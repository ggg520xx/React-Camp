
import { view } from '../../../images/page/PageMange';
import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';



const PageOverview = (props) => {


    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { AllCampGet } = useMyContextSearch(MyContextSearch);



    // 首先導出id頁=id頁面 
    // 在這裡你可以使用 id 參數來取得你想要的項目資料
    // 例如：const item = getItemById(id);
    const id = props.itemId;




    // 創建一個函式，根據傳入的id參數取得特定的項目
    // 假設有一個名為items的陣列，其中包含許多不同的項目，每個項目都有一個唯一的id欄位
    function getItemById(id) {
        // console.log(AllCampGet) 確保陣列中有元素
        return AllCampGet?.find((item) => item.id == id);
    }
    // 使用 == 才抓的到資料   使用恆等運算子 === 導致結果為 undefined
    // 可能是因為您的陣列中的元素的 id 欄位的資料類型與您指定的搜尋值的資料類型不同
    const item = getItemById(id);

    console.log(item)
    // 得到該筆項目的資訊

    // viewPic 是打算做營區配置圖



    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border'>



                <div className='text-left'>

                    {/* <h5 className="font-bold text-xl">營區配置圖</h5> */}
                    <h5 className="font-bold text-xl">營區要點須知</h5>


                    <div className="pt-6">



                        {/* 有時候會出現錯誤 用我的require可以解決*/}

                        {/* ERROR in ./src/components/page/item/PageOverview.jsx 50:17-68
                        Module not found: Error: You attempted to import ../../../../assets/campPhoto/1/map/m.jpg which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
                        You can either move it inside src/, or add a symlink to it from project's node_modules/. */}


                        {/* 錯誤訊息是由於您在引入模塊時使用了相對於 src/ 目錄之外的路徑，這是由於 Create React App（CRA）設置的限制所導致的。CRA 對於模塊引入的限制是為了確保模塊只能引入 src/ 目錄內的文件，這樣可以更好地控制項目的結構並提高安全性 */}


                        {/* 拿掉了 max-h-[600px] */}
                        {/* 我既然寫了 object cover 限縮高度會造成圖片壓扁 */}
                        {item?.viewPic && <img src={require(`../../../../assets/campPhoto/${item.id}/map/${item.viewPic}`)} alt="" className="w-full object-cover rounded-[50px]" />}




                    </div>

                </div>


            </div>

        </>
    );

}

export default PageOverview;