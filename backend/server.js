const express=require('express');
const app=express();
const dotenv = require("dotenv")
dotenv.config()
const port=process.env.PORT
const notes=require("./data/notes")


app.get('/',(req,res)=>{
    res.send("Hello World");

}
);



app.get("/api/notes",(req,res)=>{
    res.json(notes);
})
app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id)
    res.send(note)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})