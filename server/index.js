const OpenAI = require("openai");

const express = require("express");
const bodyParser = require( 'body-parser');
const cors = require('cors');
const app = express();
const _router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); 
const _authrouter = require('./auth/index.js');

const openai = new OpenAI({
    apiKey:'', // need to add after creation 
    dangerouslyAllowBrowser: true
});



app.get('/', async function(req, res){    
    res.send("Hello world!");
});

app.get('/ai/', async function(req, res){    
    console.log(req.query);
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: req.query.query.toString() }],
        model: "gpt-3.5-turbo-1106",
      });
    res.json(completion.choices);
});

_router.use('/auth', _authrouter);
app.use(_router);
app.listen(8080);