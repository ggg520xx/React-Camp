import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

import { Btn } from './demoStyle'


// import React, { Component }讓你做class Menu extends Component而不是class Menu extends React.Component。它減少了 React 命名空間的輸入和重複

// import React, { Component } from 'react';
// class SomeComponent extends Component { ... }

function Demo() {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="text-primary p-3 text-6xl">
                    TailwindCSS setup1231555
                </div>
                <div className="text-my p-3 text-sm lg:text-6xl hover:border-dashed hover:border-green-500">
                    TailwindCSS setup1231555
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1 className='ttt'>安安</h1>

                <button className='sm:hover:circle-blue'>滑過去的變化設定 太小不觸發</button>

                <Btn className="p-1">我的按鈕</Btn>


                {/*  grid   https://ithelp.ithome.com.tw/articles/10263724 */}
                {/*  flex   https://ithelp.ithome.com.tw/articles/10263325 */}
                {/* tailwind的group-hover語法 父層包裹group 過去要tailwind config設定variants 現在應該預設 然後編譯效果*/}
                {/* F12可以開啟元素狀態 右側可以看 active hover等測試 ,, 可以發現他是綁在group上的樣式範圍覆蓋 檢測變化 */}

                {/* group focus 很像心願清單的作法 svg很常用到focus的效果 */}
                <div className='group bg-white hover:bg-blue-500'>
                    <p className='text-gray-400 group-hover:text-red-600'>group-hover測試</p>
                    <p className='text-gray-400 group-hover:text-red-600'>group-hover測試</p>
                </div>


                <button className='group text-gray-700 focus:text-gray-900'>
                    <svg className='h-6 w-6 text-gray-400 group-focus:text-gray-500'>...</svg>
                </button>


                <div className='grid grid-cols-4 gap-4'>

                    {/* 使用 col-start-{n} 和 col-end-{n}，讓元素從第 n 條格線為起點或終點 */}
                    <button
                        className="banana-other transform motion-safe:hover:translate-y-3 motion-safe:hover:scale-150 px-4 sm:px-8 py-2 sm:py-3  hover:bg-red-800"
                    >變大</button>

                    <button
                        className=" col-span-3 col-start-2 col-end-7 banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>

                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                </div>

                <div className='grid grid-rows-4 gap-4'>
                    {/* 這邊注意不能只單寫行，因為 Tailwind 不知道你列要怎麼排，就會以為你只需要 1 列，那行數就會一直往下排，看起來就只會有一行。 */}
                    <button
                        className="banana-other transform motion-safe:hover:translate-y-3 motion-safe:hover:scale-150 px-4 sm:px-8 py-2 sm:py-3  hover:bg-red-800"
                    >變大</button>

                    <button
                        className=" banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>

                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                </div>


                <div className='grid grid-rows-4 grid-flow-col gap-4'>

                    <button
                        className="banana-other transform motion-safe:hover:translate-y-3 motion-safe:hover:scale-150 px-4 sm:px-8 py-2 sm:py-3  hover:bg-red-800"
                    >變大</button>

                    <button
                        className="row-start-1 row-end-5 banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>

                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="row-start-2 row-span-3 banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                </div>


                {/* col-span-3  我要跨越3列 */}
                <div className='grid grid-cols-4 gap-4 '>
                    <button
                        className="col-span-3 banana-other transform motion-safe:hover:translate-y-3 motion-safe:hover:scale-150 px-4 sm:px-8 py-2 sm:py-3  hover:bg-red-800"
                    >變大</button>

                    <button
                        className="banana px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                    >666</button>
                </div>


                {/* 三直列 二橫欄 */}
                <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4">

                    {/* 跨兩列起始1 */}
                    <div className="flex justify-center items-center bg-red-300 row-start-1 row-span-2">1</div>
                    <div className="h-16 flex justify-center items-center bg-red-300">2</div>
                    <div className="h-16 flex justify-center items-center bg-green-300">3</div>
                    <div className="h-16 flex justify-center items-center bg-red-300">4</div>
                    <div className="h-16 flex justify-center items-center bg-red-300">5</div>
                </div>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React111
                </a>
            </header>

            <main>
                <h2 className='ttt'>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>

            <nav>
                <Link to="/about">About</Link>
                <Link to="/faq">Faq</Link>
            </nav>
        </>
    );
}

export default Demo;
// 匯出這個函式功能