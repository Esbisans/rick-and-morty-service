const express = require("express");
const fetch = require("node-fetch")
const cors = require('cors')


const PORT = process.env.PORT || 3003;
const app = express();

app.use(cors());
/*
fetch(url).then(
    (respuesta) => {
        return respuesta.json()
    }
).then(
    (resp) => 
    console.log(resp)
)

*/

app.get("/", async (req, res) => {
    res.send("Api de personajes, para usar use un número en la url ejemplo: url/12")
})

app.get("/:number", async (req, res) => {
    const url = "https://rickandmortyapi.com/api/character"
    var number = req.params.number
    const response = await fetch(url).then(
        res => res.json()
    ).then(data => data.results)
        
    //.then(results => results[number].name)

    /*
    .then(results => results[number].name)
    .catch(e => {
        console.error
    })
    console.log("response: ", response)
    res.json("persona: " + response)
    */

    .then(results => 
      results[number]  
    ).catch(e => {console.error})

    const resobj = {
                    name: response?.name,
                    status: response?.status,
                    gender: response?.gender,
                    species: response?.species
                    }  

    console.log(resobj);
    res.json(resobj);
})



app.listen(3003, () => {
    console.log("servicio corriendo en puerto: ", PORT)
} )
