// import mysql from 'mysql2'
var mysql = require('mysql2')
var express = require('express');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'notes_app'
}).promise()

// const result = await pool.query("select * from notes")

var app = express();
let portcount = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', async function(req, res) {
    console.log(req.query);
    const result = await pool.query("select * from notes")
    res.render('index.ejs', {x: result[0]});
});

app.get('/addnote', async function(req, res) {
    console.log(req.query);
    const result = await pool.query("INSERT INTO notes (title, contents) VALUES ('"+req.query.title+"','"+req.query.contents+"')")
    res.redirect("/");
});

app.get('/updatenote', async function(req, res) {
    console.log(req.query);
    const result = await pool.query("UPDATE notes SET title='"+req.query.title+"', contents='"+req.query.contents+"' WHERE id="+req.query.id)
    res.redirect("/");
});

app.get('/deletenote', async function(req, res) {
    console.log(req.query);
    const result = await pool.query("DELETE FROM notes WHERE id="+req.query.id)
    res.redirect("/");
});

app.listen(8000);
console.log('Server is listening on port 8000');