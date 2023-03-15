const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from Techex!')
})

app.listen(port, () => {
    console.log(`Techex app listening on port ${port}`)
})