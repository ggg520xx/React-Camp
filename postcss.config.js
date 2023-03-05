module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// 處理tailwind 做轉換 及 auto加入前綴處理相容

// 我們使用 tailwindcss 和 @tailwind 語法時 我們同時也會使用到了 postcss 所以一樣要裝 postcss 這兩個是要一同安裝的
// 安裝 PostCSS 去處理轉換 CSS 樣式


// https://www.cythilya.tw/2018/08/10/postcss/
// PostCSS 用 JavaScript 轉換 CSS 的工具，它可以做的事情很多
// 加入各家瀏覽器的前綴詞 先進的功能轉為目前主流瀏覽器所能支援的語法 語法檢查和報錯 支援 Grid System  SASS 的功能，例如：變數


// precss: { }, // 使用類似 SASS 的功能，例如：變數