const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/temperature', (req, res) => {
    const location = req.query.location || 'unknown';
    const temp = (Math.random() * 50 - 10).toFixed(1);
    res.json({ location, temperature: temp, unit: "°C" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
