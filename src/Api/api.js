const enviro = process.env.NODE_ENV === "development" ? "development" : "production"

export default {
  // 获取天气接口
  getWeather() {
    let url = "/tencent/weather/common?weather_type=observe&source=pc&province=上海&city=上海"
    if(enviro == 'production') url = "https://wis.qq.com/weather/common?weather_type=observe&source=pc&province=上海&city=上海"
    return new Promise((resolve,reject) => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        resolve(json.data.observe);
      })
      .catch((error) => console.log("error is", error));
    })
  }
}