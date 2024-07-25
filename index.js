const express= require("express");
const app= express();
const sendMail= require("./controllers/sendMail")
const port=4000;



app.get("/",(req,res)=>{
    res.send("Hello whats up")
});


app.get("/mail",sendMail);

app.listen(port,(error)=>{
    if(!error){
    console.log("Server running on Port"+ port);
    }
    else{
        console.log("error"+error);
    }
})
