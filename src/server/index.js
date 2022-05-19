const express = require('express')
const axios = require('axios').default;
const dotenv = require('dotenv')

dotenv.config();
const API_KEY = process.env.API_KEY;
if (!API_KEY) throw new Error(`API_KEY is missing. Please add it to enviroment variables!`);

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('dist'))

if(process.env.ENV == 'dev') {
    console.log('Running in Development Mode')
    const cors = require('cors');
    app.use(cors());
}
if(process.env.ENV != 'test'){
    const port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log(`Running on http://localhost:${port}`)
    })
}


app.post('/sentiment-text', async function (req, res) {
    const required = ['article']
    for (const param of required) {
        if(!req.body[param]) return res.status(400).send(`Missing parameter: '${param}'`);
    }
    try {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('key', API_KEY);
        data.append('lang', 'auto');
        data.append('txt', req.body.article);
        var config = {
            method: 'post',
            url: 'https://api.meaningcloud.com/sentiment-2.1',
            headers: data.getHeaders(),
            data : data
        };
        
        const response = await axios(config);
        res.send(response.data)
    } catch (error) {
        res.status(500).send('Internal Error');
        console.log(error);
    }
});

app.post('/sentiment-url', async function (req, res) {
    const required = ['url']
    for (const param of required) {
        if(!req.body[param]) return res.status(400).send(`Missing parameter: '${param}'`);
    }
    try {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('key', API_KEY);
        data.append('lang', 'auto');
        data.append('url', req.body.url);
        var config = {
            method: 'post',
            url: 'https://api.meaningcloud.com/sentiment-2.1',
            headers: data.getHeaders(),
            data : data
        };

        const response = await axios(config);
        res.send(response.data)
    } catch (error) {
        res.status(500).send('Internal Error');
        console.log(error);
    }
});

module.exports = app;