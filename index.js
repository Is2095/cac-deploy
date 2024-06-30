
import express from 'express';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api', (req, res) => {
    res.send('ejecutando el deploy')
})

app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));