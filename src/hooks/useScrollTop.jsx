import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


// 轉spa頁面元件 不會跟隨上一頁的位置 會導至 win 0.0 頂部

// 詳情頁面回到上一頁搜尋頁 也不會回到最頂部 是最好的 這個方法可以解決

function useScrollTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    return window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
}


export default useScrollTop;






// ------------------------

// function useScrollTop({ children }): JSX.Element {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     return window.scrollTo(0, 0);
//   }, [pathname]);

//   return <div>{children}</div>;
// }

// ------------------------



// tsx 可以這樣寫

// interface Props {
//   children: JSX.Element;
// }

// function useScrollTop({ children }: Props): JSX.Element {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     return window.scrollTo(0, 0);
//   }, [pathname]);

//   return <div>{children}</div>;
// }