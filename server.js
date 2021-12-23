const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
const { Season } = require('./models');
const app = express();

app.use(express.json());
app.get('/seasons', async (request, response)=> {
    try {
        const seasonArr = await Season.find({});
        response.json({ seasonArr });
    }
    catch(err) {
        response.status(500).send(err);
    }
});

app.listen(3000, ()=> {
    console.log("your In the server port 3000");
});