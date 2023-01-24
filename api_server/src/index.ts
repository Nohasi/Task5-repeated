const express = require('express');

const app = express();

app.use(express.json());

app.post('/repeat', (req: any, res: any) => {
    
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;