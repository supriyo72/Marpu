const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const bodyparser =  require("body-parser")
const mongoose= require('mongoose');

const port = 8000;

// Define mongoose
var bookSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String
});
var Book = mongoose.model('Book',bookSchema)

// EXPRESS SPECEFIC STUFF
app.use('/static', express.static('static'))   //for serving static files
app.use(express.urlencoded({extended:true}))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')   //set the template engine as pug
app.set('views', path.join(__dirname,'views'))  // set the views directory

// END POINTS
app.get('/',(req,res)=>{
    const params = { }
    res.status(200).render('home.pug',params);
})
app.get('/call',(req,res)=>{
    const params = { }
    res.status(200).render('call.pug',params);
})
app.get('/book',(req,res)=>{
    const params = { }
    res.status(200).render('book.pug',params);
})
// app.post('/book',(req,res)=>{
//     var myData = new Book(req.body);
//     myData.save().then(()=>{
//         res.send("The items has been saved in data base successfully")
//     }).catch(()=>{
//         res.status(400).send("Item was not saved to the database ")
//     })
//     // res.status(200).render('contact.pug');
// })
//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
