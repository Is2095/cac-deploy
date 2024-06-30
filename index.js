
// const express = require('express');
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('ejecutando el deploy')
})

app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));