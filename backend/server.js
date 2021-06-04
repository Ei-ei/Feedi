const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('This is the backend of feedi')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})