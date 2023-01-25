import { findRepeats } from "./modules/findRepeats";
import { firstLetter } from "./modules/firstLetter";

const express = require('express');

const app = express();

app.use(express.json());

app.post('/repeat', (req: any, res: any) => {
    
    
    res.status(200).json({
        status: 200,
        result: firstLetter(findRepeats(req.body.sentence))
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;