const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

var db = require('./db');

const { v4: uuidv4 } = require('uuid');

const app = express()
const port = process.env.PORT || 8080

var uuid = uuidv4();
app.use(bodyParser.json());

app.post('/api/chatbot', function (req, res) {

    var csrf_token = 'c2a79270-a6ee-49e5-9cf4-2c114d733892'

    if(req.query.crsf!=csrf_token){
      res.send("Incorrect token");
    }

    var txt = handleResp(req.body.data.text)
    var output = [
        {
            author: 'them',
            type: 'text',
            data: {
              text: txt,
              uuid:uuid
            }
        }
    ]

    var user = new db;
    user.date = new Date;
    user.completedChat = txt.includes('goodbye')? true :false;
    user.useragent = req.get('user-agent')
    userInput = req.body.data.text,
    botOutput = txt
    user.csrfToken = uuid   // get uuid from user later

    user.save(function(err,data) {
      if (err) {
        console.log(err);
      }
        console.log('data from db',data)
        res.send(output);
    });

});


app.get('/api/dbData', function (req, res) {

    var csrf_token = 'c2a79270-a6ee-49e5-9cf4-2c114d733892'

    if(req.query.crsf==csrf_token){
        db.find({}, function(err, user){
          if(err) throw err;
          // console.log('view db data',user);
          res.send(user);
       });
    }else{
      res.send("Incorrect token");
    }
});




app.use(express.static(process.cwd() + '/build'));
app.get('/api', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function handleResp(text){
    var out = ''
    text = text.toLowerCase();
    if(text.includes('hi') || text.includes('hello') ){
        out = "How are you doing, how can I help you?"
    }
    else if( text.includes('check') || text.includes('balance')  ){
        out = "You have R200.\nAnything else I can help with?"
    }
    else if( text.includes('thanks') || text.includes('no') ){
        out = "Awesome, happy to assist, goodbye."
    }else{
      out = "You said :"+text
    }
    return out
}
