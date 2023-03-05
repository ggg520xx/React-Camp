// 這個是管理 主右側的內容 左側是外資料夾的 Layout
// 目前這裡的 content 又分為 上下層分開的路徑 版面寫法

import { Routes, Route } from "react-router-dom";

import AdminTopBar from './adminTopBar/AdminTopBar'
import AdminMain from './adminMain/AdminMain'









function AdminContent() {


    return (
        <>
            <Routes>
                <Route path='/' element={<AdminTopBar />} >
                    <Route index element={<AdminMain />} />
                </Route>
            </Routes>

        </>
    );
}

export default AdminContent;
// 匯出這個函式功能