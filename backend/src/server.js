const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/api', (req, res) => {
    res.send(`
        <h1>Hello Back-End.</h1>
    `);
});

app.listen(port, () => `Back-End Listening - (${port})`);