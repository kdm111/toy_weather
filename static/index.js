
const weatherTitle = document.querySelector("#weatherTitle")
const weatherIcon = document.querySelector("#weatherIcon")
const weatherDescription = document.querySelector("#weatherDescription")

const regionsDom = document.querySelectorAll("path")
regionsDom.forEach((regionDom) => {
  regionDom.addEventListener("click", async function (e) {
    const region = e.target.getAttribute("name")
    try {
      let result = await axios({
        method : "get",
        url : "/get/weather",
        params : {"region" : region}
      })
      result = result.data
      weatherTitle.innerHTML = `오늘의 ${result.name}의 날씨는 ${result.weather}입니다.`
      weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${result.imgId}@2x.png`)
      weatherDescription.innerHTML = `${result.desc}`
    } catch (error) { 
      console.error(error)
    }
  })
})
