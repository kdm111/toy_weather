
const axios = require("axios")
const express = require("express")
const path = require("path")
const app = express()
const PORT = 8080
const regions = require("./data.js")["regions"]
const weather = require("./data.js")["weather"]

const APIkey = "60911a3e537e5525e59931e967aa520a"

app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/public", express.static(__dirname + "/static"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/get/weather",  async (req, res) => {
  const {name, lat, lon}= regions[req.query.region]
  const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
  const weatherData = result.data.weather[0]
  console.log(weatherData.main)
  const ret = {
    "name" : name,
    "weather" : weather[weatherData.main].title,
    "desc" : weather[weatherData.main].id[weatherData.id],
    "imgId" : weatherData.icon
  }
  res.send(ret)
})


