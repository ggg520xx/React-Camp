import indexBanner from '../../../images/index/index.jpg';


const SearchBar = (props) => {


    // const inputStyle = {
    //     width: "66%",
    //     borderBottomLeftRadius: "40px",
    //     borderTopLeftRadius: "40px",
    //     borderTopRightRadius: "40px",
    //     borderBottomRightRadius: "40px",
    // }




    return (
        <>

            <img src={indexBanner} alt="" className="w-screen max-h-[900px] object-cover rounded-b-[100px]" />


            <form className="searchBarIndex" action="">

                <div className="d-flex justify-content-between " >
                    {/* <!-- input --> */}
                    <div className=" pl-3 d-flex " style={{ width: "90%" }} >

                        <div className=" p-2  pl-4 border-right" style={{ width: "35%", borderRight: "1px solid gray" }}>
                            <p className="mb-1 text-secondary" style={{ fontSize: 16 }}>
                                <label htmlFor="where" className="m-0">
                                    輸入地區或營區名稱 ...
                                </label>
                            </p>
                            <input
                                type="text"
                                id="where"
                                className="w-100 m-searchInput rounded-left font-weight-bold "
                                placeholder="Hi！想去哪裡？"
                                name="place"


                                style={{ fontSize: 16 }}
                            />
                        </div>

                        <div className="inputHome p-2 pl-4 border-right" style={{ width: "45%", borderRight: "1px solid gray" }}>
                            <p className=" mb-1 text-secondary " style={{ fontSize: 16 }}>
                                <label htmlFor="chooseDate" className="m-0">
                                    選擇入營及離營日期
                                </label>
                            </p>


                        </div>

                        <div className="inputHome p-2 pl-4" style={{ width: "20%" }}>
                            <p className="mb-1 text-secondary " style={{ fontSize: 16 }}>

                                選擇帳數
                            </p>

                            <select
                                name="campAmount"
                                className="w-100 border-0"
                                id="exampleFormControlSelect1"
                                style={{ outline: "none", fontSize: 16, cursor: "pointer" }}

                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>

                        </div>

                    </div>


                </div>


            </form>





        </>
    );



}

export default SearchBar;