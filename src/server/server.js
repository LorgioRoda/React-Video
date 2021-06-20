import express from "express";

const app = express()

app.get("*", (req, res) => {  // La llamada al servidot y el tipo de ruta con * agarramos toda la ruta
    res.send({hello: 'express'})
})

app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log('Server running on port 3000')
})