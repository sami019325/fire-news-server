const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const catagories = require('./Data/catagories.json')
const news = require('./Data/news.json')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/catagories', (req, res) => {
    res.send(catagories)
})
app.get('/news', (req, res) => {
    res.send(news)
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})