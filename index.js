const express = require('express')
// import express from 'express'; // Uncomment if using ES6 
require('dotenv').config()
const app = express()
 

// In your Express route
app.get('/', (req, res) => {
  res.send(`
  this is home page
  `);
});

app.get('/twiter',(req,res)=>{
    res.send('akalpitdotcom')
})
app.get('/login', (req, res) => {
  res.send('<h1>this is login page</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
