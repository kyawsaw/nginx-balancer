const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Testing nginx load-balancing - sever #1")
})

app.listen(7777, () => {
    console.log("listening on port 7777")
})