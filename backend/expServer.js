const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
const PORT = 4000;

app.use(cors());                    
app.use(bodyParser.json());

app.use('/api/subject', require('./roustes/subject'));
app.use('/api/contact', require('./roustes/contact'));
app.use('/api/subscribe', require('./roustes/subscribe'));


app.listen(PORT, () => {
    console.log('Server runing at http://localhost:'+PORT);
})


