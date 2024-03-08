const express = require('express');
const app = express();

require('dotenv').config;

const dbConnect = require('./config/database');
dbConnect();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>This is Homepage</h1>')
})

app.use(express.json());

const blog = require('./routes/blog');

app.use('/api/v1', blog);

app.listen(PORT, () => {
    console.log(`app started at port ${PORT}`);
})