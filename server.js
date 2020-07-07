//dependencies
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements -- texting API

const accountSid = 'AC914967b1b596685c52ad515f8ad978ce';
const authToken = 'b26bae8a140670a31b25a8adaf589cda'
const client = new twilio(accountSid, authToken);

const app = express();
//cors blocks the browser from restricting any data
app.use(cors());

//home page for server

app.get('/', (req, res) => {
    res.send('Welcome to Express');
})
//twilio text
app.get('/send-text', (req, res) => {
    //_GET variables, passed via query string
    const { recipient, textMessage } = req.query
    //send text
    client.messages.create({
        body: textMessage,
        // setting to number to Octavio's number
        to: '+17082279303',
        from: '+12025190773' // this is my  twilio number
    }).then((message) => console.log(message.body))
})

app.listen(8000, () => console.log('App is running on port 8000'));