import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})