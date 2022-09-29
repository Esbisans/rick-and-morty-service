const express = require("express");
const fetch = require("node-fetch")


const PORT = process.env.PORT || 3003;
const app = express();


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
app.get("/:number", async (req, res) => {
    const url = "https://rickandmortyapi.com/api/character"
    var number = req.params.number
    const response = await fetch(url).then(
        res => res.json()
    ).then(data => data.results)
        
    //.then(results => results[number].name)
    .then(results => results[number])
    .catch(e => {
        console.error
    })
    console.log("response: ", response)
    //res.json("Objeto: " + response)

    try {
        res.json(  
                    {
                        "name: " : response.name,
                        "status: " : response.status,
                        "gender: " : response.gender,
                        "species: " : response.species,
                    }
                )
              
        } catch (e) {
            console.error;
        }
    
})



app.listen(3003, () => {
    console.log("servicio corriendo en puerto: ", PORT)
} )
