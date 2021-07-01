"use strict"

const express = require('express');
const app = express();
const port = 8000;

var miArray = ["Dario", "Alex", "Maria", "Mireya", "Juan"];

app.get('/list', (req, res) => {
  let index = req.query.index;
  if(miArray[index] != undefined){
      res.send(miArray[index]);
  }else{
      res.send("la posicion no existe en la lista");
  }
});

app.get('/', (req, res) => {
    res.send("Bienvenido \n Ingrese la posicion por parametro: ej: /list?index=2");
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });