// https://vincentgarreau.com/particles.js/#default
// 自己製作匯出想要的樣式

const ParticlesConfig = {
  "particles": {
    "number": {
      // 原子線條數量多寡 數值越高越多 數值太大會LAG 預設100
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      // 原子連接點顏色 可設定單一顏色
      // "value": "#fff"
      "value": ["#019ccf", "#8fdbd9", "#ffc938"]
    },

    "shape": {
      // 原子連接點的樣式 circle(圓形)、edge(正方形)、triangle(三角形)、polygon(五邊形)、star(星星)、image(自訂圖片)
      // 如有設定圖片路徑 type改為image就會讀取圖片
      // 多種造型 一起設定 "type": ["circle", "triangle", "star"],
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        // 對應上方type為images時
        "src": "images/images.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      // 原子連接點透明度 預設0.6
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      // 原子連接點大小 數值越高越大 預設2
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      // 區塊密集度 數值越高越多 預設120
      "distance": 130,
      // 原子線條顏色
      "color": "#000",
      "opacity": 0.2,
      "width": 1
    },
    // 額外追加 參照codepen範例
    "move": {
      "enable": true,
      // 控制動畫速度 越低越慢
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

export default ParticlesConfig;


