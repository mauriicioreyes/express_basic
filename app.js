const express = require('express')
const app = express()
const port = 3000 // localhost:3000

// localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos mis explorers")
})

// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a LaunchX")
})

// app.get('/node', (req, res) => {
//     const explorer1 = { id: 1, name: "Explorer 1" }
//     const explorer2 = { id: 2, name: "Explorer 2" }
//     const explorer3 = { id: 3, name: "Explorer 3" }
//     res.send([explorer1, explorer2, explorer3])
// })

// Query Params
// localhost/explorers/mauriicioreyes
app.get('/explorers/:explorer', (req, res) => {
    console.log(req.params) // { explorer: 'mauricio' }
    res.send(req.params)
})

app.listen(port, () => {
    console.log("Server Listo!")
})