var express = require("express");
var cors = require('cors');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose')
var Users = require ('./routes/Users');

const app = express()

let port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded(
        {
            extended: false
        }
    )
)

const mongoURI = 'mongodb://localhost:27017/isb_accoplished'

mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(()=> console.log('connect')
)
.catch(err => console.log(err)
)

app.use('/users', Users)
app.listen(port, () => {
    console.log('Server is running ' + port)
})
