// import { Link, useNavigate } from "react-router-dom";

// function About() {
//     const navigate = useNavigate();  // 一定要這段

//     // 6秒後會導去Faq  這兩種寫法都可以

//     // (若是他登入錯誤, 或是他知道這網址 想去後台 但他權限不對 要把它轉到 Login頁面 navigate("/login")    )
//     // (如果抓他權限正確的話 就不需要移轉,, 判斷權限 可以用這個來寫 if else 有沒有權限 轉到 navigate("/login")  )

//     function transfer() {
//         navigate("/faq");
//         // navigate("../faq", { replace: true });
//     }
//     setTimeout(transfer, 4000)
//     return (
//         <>
//             <main>
//                 <h2>about 頁面</h2>
//                 <p>
//                     6秒後會導去Faq
//                 </p>
//             </main>
//             <nav>
//                 <Link to="/">Link 去首頁</Link>
//                 <input type="button" value='JS 回首頁' onClick={(e) => { navigate('/') }} />
//             </nav>
//         </>
//     );
// }



// function Faq() {
//   return (
//     <>
//       <main>
//         <h2 className="text-blue-500">My Faq</h2>
//         <p>
//           我新增自建的 由home進來
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }