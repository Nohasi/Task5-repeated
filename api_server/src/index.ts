import { findRepeats } from "./modules/findRepeats";

const express = require('express');

const app = express();

app.use(express.json());

app.post('/repeat', (req: any, res: any) => {

    let resultObj = Object.fromEntries(findRepeats(req.body.sentence));
    console.log(resultObj);
    res.status(200).json({
        status: 200,
        result: resultObj
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;