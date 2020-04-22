const express = require('express')
const app = express();
const PORT = 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
 
app.use((req,res,next) => {
  console.log("Serving request type " + req.method + " for url " + req.url)
  if(req.method !== 'POST' && req.method !== 'OPTIONS') {
    res.status(400).send('invalid request')
  } 
  next();
})
app.use(express.json());

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

let messageArr = [];

app.post('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  messageArr.push(req.body);
  res.send('Sent well, Thank you');
})

app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}`)
 })