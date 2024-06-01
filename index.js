import express from "express"

import path from "path"


const app = express()



app.use(express.static(path.join(path.resolve(),"public")))

 //setting for the ejs 

 app.set("view engine", "ejs")

app.get("/", (req,res)=>{

    
res.sendFile("index.html")
   
   
})

app.listen(5000,()=>{
    console.log("app IS WORKING !!!!!")
})