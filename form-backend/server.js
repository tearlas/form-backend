const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { ad, sifre, Cinsiyet } = req.body;
    const veri = `E-Posta: ${ad}, Şifre: ${sifre}, Cinsiyet: ${Cinsiyet}\n`;

    fs.appendFile('kullanicilar.txt', veri, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Hata oluştu.');
        }
        res.send('Veri başarıyla kaydedildi!');
    });
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor http://localhost:${port}`);
});
