const express = require("express");
const app = express();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    successStatus:200
}))

app.get("/", (req, res) => {
    res.send("I am working");
});

app.post("/", async (req, res) => {
    const { data } = req.body;
    try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: data,
          temperature: 0,
          max_tokens: 3000,
          top_p: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0,
        });
        res.send({message:"success", data: response.data.choices[0].text });
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
})



app.listen(8000, () => {
    console.log("port is running on 8000");
})