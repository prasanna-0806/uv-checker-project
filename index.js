import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

const app = express();
const port= 3000;
dotenv.config();
console.log("🔑 Loaded API key:", process.env.OPENUV_API_KEY);

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/check', async (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  try {
    if (!lat || !lng) return res.redirect('/');

    const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`, {
      headers: {
        'x-access-token': process.env.OPENUV_API_KEY
      }
    });

    const uvData = response.data;
    res.render('index.ejs', { uvData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});