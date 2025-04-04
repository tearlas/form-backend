const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // CORS aktif!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Formdan gelen veriyi al
app.post('/submit', (req, res) => {
    const { ad, sifre, Cinsiyet } = req.body;

    console.log('Gelen veri:', req.body);

    res.send('Form başarıyla alındı!');
});

// Root test
app.get('/', (req, res) => {
    res.send('Sunucu çalışıyor!');
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
