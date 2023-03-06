const express = require('express');
const axios = require('axios');




const app = express();
const port = 80;


//get
//url=[url]&ua=[User-Agent]
app.get('/get', async (req, res) => {
    var ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0';
    if (req.query.ua != undefined) {
        ua = req.query.ua;
    }
    var config = {
        headers: { 'User-Agent': ua }
    };
    var response = await axios.get(req.query.url, config);
    res.send(response.data)
})



app.get('/ip', async (req, res) => {
    var response = await axios.get('https://ipinfo.io/json');
    res.send(response.data);
})


app.listen(port, () => {
    console.log(`App @guid@ listening on port ${port}`)
})

//@guid@