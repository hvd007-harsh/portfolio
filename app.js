const express = require('express')

const path = require('path')

const bodyParser = require('body-parser');

const output = require('./viewHtml/JSscreen/output')

const nodemailer = require('nodemailer')

const dotenv = require('dotenv');
const Router = require('./router/router');
const { json } = require('body-parser');


dotenv.config({ path : './config.env'})

const app = express()

const PORT = process.env.PORT || 5000;
//Parsing the Post
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/',Router)
app.post('/send',(req,res)=>{
  
   let mailTransport = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user: 'harshdixit1981@gmail.com',
          pass: 'Harsh@852'
          }
  })
  
  let info = mailTransport.sendMail({
      from: 'harshdixit1981@gmail.com',
      to:req.body.gmail,
      subject:req.body.Subject,
      text:req.body.message,
      html: output,
  });
  
  console.log('Email seny succesfully: %s',info.messageId)
})
app.listen(PORT,()=>{
   console.log(`Listening in the PORT ${PORT}`)
})
