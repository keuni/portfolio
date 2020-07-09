const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const participantsRouter = require('./routes/participants');
const cors = require('cors');

app.use((req, res, next) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      'http://keuni.github.io',
      'https://keuni.github.io',
      'http://localhost:3000',
    ],
    method: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/', participantsRouter);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
