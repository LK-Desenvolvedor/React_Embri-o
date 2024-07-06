const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem vindo' });
});


app.use('/auth', authRoutes);



module.exports = app;
