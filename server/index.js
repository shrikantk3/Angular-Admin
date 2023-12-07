import OpenAI from "openai";
import express, { json } from "express";
import bodyParser from  'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); 
const openai = new OpenAI({
    apiKey:'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',
    dangerouslyAllowBrowser: true
});



app.get('/', async function(req, res){    
    res.send("Hello world!");
})
app.get('/ai/', async function(req, res){    
    console.log(req.query);
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: req.query.query.toString() }],
        model: "gpt-3.5-turbo-1106",
      });
    res.json(completion.choices);
})
app.post('/query', async function(req, res){    
    console.log(req);
    // const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: req.body }],
    //     model: "gpt-3.5-turbo-1106",
    //   });
    res.json("completion.choices");
    // res.json(req);
});

app.listen(8080);