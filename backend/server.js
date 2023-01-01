const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("I am working");
});

app.post("/", async (req, res) => {
    try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: 'Write a code to check a number is a prime or not',
          temperature: 0,
          max_tokens: 3000,
          top_p: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0,
        });
        res.send({ data: response.data.choices[0].text });
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
})



app.listen(8000, () => {
    console.log("port is running on 8000");
})