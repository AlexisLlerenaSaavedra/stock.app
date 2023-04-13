const express=require('express');
require('dotenv').config()

const app=express();

app.get('/',(req,res)=>{
    console.log("Peticion recibida");
    res.status(200).send("<h1>Hola beba como tu te llamas</h1>")

})

const PORT=process.env.PORT 

app.listen(PORT,()=>{
    console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${PORT}`)
})
