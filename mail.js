const { info } = require ("console")
const nodemailer = require("nodemailer")
const express = require('express')
const app = express()

const PORT = process.env.port || 5000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', async(req,res)=>{
    res.sendFile(__dirname + '/app/src/contact.component.html')
    
})

// "send" function cration in async (wait send's request and its response)
module.exports.send = async function(){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "georgeslaurene70@gmail.com",
      pass: "oiedgltgzepvgnul",
    }
  });
  const mailOption = {
    from: req.body.email,
    to: "georgeslaurene70@gmail.com",
    subject: `Message de ${req.name}: provenant du portfolio`,
    text: req.body.message,
  }
    transporter.sendMail(mailOption, function(err, info){
    if (err) {
        console.log(err)
    } else {
      console.log("email sent: " + info.response)
    }
  })
}

app.listen,(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

console.log('ceci est la fin du script')