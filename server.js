import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';

const app = express();
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://admin:admin1234@ds127851.mlab.com:27851/netflix-b21')
const db = mongoose.connection;
db.on('error',() => console.log("Error al conectar a la BD"))
    .once('open',() => console.log("Conectado a la BD!!"))

app.use(bodyParser.json());


app.post('/signup',(req,res) => {
    let user = req.body
    User.create(user).then((user) => {
        return res.status(201).json({"message":"Usuario Creado",
            "id":user._id})
    }).catch((err) =>{
        console.log(err);
        return res.json(err);
    })
});

app.get('/',(req,res) => {
    //req = request
    //res = response
    res.send("Estoy funcionando :)");
})



app.listen(PORT,() =>{
    console.log("Magic Happens in port: "+PORT)
})

