const express = require('express')
const app = express()
const port = process.env.PORT || 8080 || 5000 || 3000
__path = process.cwd()
app.use(express.static("views"))

app.get('/', (req, res) => {
  res.sendFile(__path + '/views/dashboard.html')
})

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})