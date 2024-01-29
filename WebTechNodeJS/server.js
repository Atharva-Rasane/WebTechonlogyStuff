var express = require('express');
const mongoose = require('mongoose');


var app = express();
let portcount = 8000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

mongoose.connect('mongodb+srv://rratharva:SZnGhe6r9fxMmYlR@cluster0.gupicon.mongodb.net/').then(() => {
    console.log("MongoDB Connection Successful")
}).catch((err) => console.log(err))

const Product = require('./schema/product')

app.get('/', async function(req, res) {
    console.log(req.query);
    var x = await Product.find()
    res.render('index.ejs', {x: x});
});

app.get('/deleteproduct', async function(req, res) {
    console.log(req.query);
    
    await Product.findOneAndDelete({"pid":req.query.pid})
    res.redirect("/")
});

app.get('/addproduct',  async (req,res)    => {
    console.log("hello",req.query);
    const prod = Product({
        pid:await Date.now().valueOf(),
        pname:req.query.pname,
        pprice:req.query.pprice,
        pcategory:req.query.pcategory,
        pdiscription:req.query.pdesc,
        pquantity:req.query.pquantity
    })

    await prod.save().then(async () => {console.log("Product Created")})
    res.redirect("/")
})

app.get('/updateproduct',  async (req,res) => {
    console.log(req.body);
    await Product.updateOne({pid : req.query.pid},{
        pname:req.query.pname,
        pprice:req.query.pprice,
        pcategory:req.query.pcategory,
        pdiscription:req.query.pdesc,
        pquantity:req.query.pquantity
    }).then(() => console.log("Producted Updated"))
    res.redirect("/")
})



app.listen(5000);
console.log('Server is listening on port 5000');