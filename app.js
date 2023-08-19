const express = require("express")
const app = express()
const PORT = 8080

app.set("view engine", "ejs")
app.set("views", "./views")

app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})

app.get("/", (req, res) => {
  res.render("index")
})
