const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({info: "API Root Route"})
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})