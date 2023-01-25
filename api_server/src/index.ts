import { findRepeats } from "./modules/findRepeats";
import { firstLetter } from "./modules/firstLetter";

import express = require('express');
import { invalidRequest } from "./modules/invalidRequest";

const app = express();

app.use(express.json());

app.post('/repeat', (req: express.Request, res: express.Response) => {
    const error = invalidRequest(req);
    // If error is null, no error was found and request is valid
    if(error != null){
        res.status(406).json({
            status: 406,
            error: error
        });
        return;
    }
    res.status(200).json({
        status: 200,
        // findRepeats finds highest frequency letters, firstLetter returns first one alphabetically
        result: firstLetter(findRepeats(req.body.sentence))
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;