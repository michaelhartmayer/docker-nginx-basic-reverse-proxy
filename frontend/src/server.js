const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello Front-End.</h1>
    `);
});

app.listen(port, () => `Front-End Listening - (${port})`);