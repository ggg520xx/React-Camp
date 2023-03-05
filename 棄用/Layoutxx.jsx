// import { Link, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import 'flowbite';

function Layout() {
    return (
        <div>
            {/* <Header /> 拉出來寫外元件也可以*/}

         





            {/* 不一定要包main */}
            <main>
                <Outlet />
            </main>


            <div classNameName="footer">表尾22</div>
            {/* <Footer /> 拉出來寫外元件也可以*/}
        </div>
    );
}

export default Layout;
// 匯出這個函式功能