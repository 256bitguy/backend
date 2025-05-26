const express = require('express')
// import express from 'express'; // Uncomment if using ES6 
require('dotenv').config()
const app = express()
 

// In your Express route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>For Soumya Mishra ❤️</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #ffdde1, #ee9ca7);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #3d3d3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }

        h1 {
          color: #e91e63;
          font-size: 3em;
          margin-bottom: 10px;
        }

        .poem {
          background: rgba(255, 255, 255, 0.85);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          max-width: 600px;
        }

        .line {
          margin: 15px 0;
          font-size: 1.4em;
          font-style: italic;
        }

        .signature {
          margin-top: 20px;
          font-weight: bold;
          font-size: 1.2em;
          color: #e91e63;
        }

        .heart {
          font-size: 2em;
          color: red;
          animation: beat 1.2s infinite;
        }

        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      </style>
    </head>
    <body>
      <h1>To My Love, Soumya Mishra ❤️</h1>
      <div class="poem">
        <div class="line">"Masum nahi ho magar bahut naadan ho tum"</div>
        <div class="line">"Aankho me basi hui humari ek pehchaan ho tum"</div>
        <div class="line">"Dhadhkte hue dil ki dhadkano se mai jinda nahi"</div>
        <div class="line">"Marta hu sirf tumpe magar humari jaan ho tum"</div>
        <div class="heart">💖</div>
        <div class="signature">— Tumhara Bikku</div>
      </div>
    </body>
    </html>
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
