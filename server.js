const CronJob = require("cron").CronJob
const mail = require("./mail")


const job = new CronJob({
  // default timer
  cronTime: "* * */1 * * *",
  onTick: mail.send
})

job.start()




// const express = require('express');
// const app = express();

// const nodemailer = require("nodemailer");

// const PORT = process.env.PORT || 5000;
// // middleware
// app.use(express.static('public'));
// app.use(express.json())


// app.get('/', (req, res)=>{
//   res.sendFile(__dirname + '/app/src/contact.component.html')
// })

// app.post('/', (req,res)=>{
//   console.log(req.body);
//   // const transporter = nodemailer.createTransport({
//   //   service: "gmail",
//   //   auth: {
//   //     user: "georgeslaurene70@gmail.com",
//   //     pass: "oiedgltgzepvgnul",
//   //   }

//   const transport = nodemailer.createTransport({
//     port: 5000,
//     auth: {
//           user: "georgeslaurene70@gmail.com",
//           pass: "oiedgltgzepvgnul",
//     }
//   });


//   const mailOptions = {
//     fro: req.body.email,
//     to: "georgeslaurene70@gmail.com",
//     subject: `Message de ${req.name}: provenant du portfolio`,
//     text: req.body.message
//   }

//   transporter.sendMail(mailOptions, (error, info)=>{
//     if(error){
//       console.log(error);
//       res.send('error');
//     }else{
//       console.log('Email sent: ' + info.response)
//       res.send('success')
//     }
//   })
// })

// app.listen,(PORT, ()=>{
//   console.log(`server running on port ${PORT}`)
// })

// console.log ("ok")
