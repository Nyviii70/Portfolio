const CronJob = require("cron").CronJob
const mail = require("./mail")


const job = new CronJob({
  // default timer
  cronTime: "* * */1 * * *",
  onTick: mail.send
})

job.start()




// const PORT = 8080;

// const public_path = `http://localhost:${PORT}/`;

// app.get()



// let http = require('http')

// // utilisation de la méthode "creatserver"
// let server = http.createServer()
// // on indique que la fonction a besoin d'une requête et d'une réponse
// server.on('request', function (request, response) {
//   // le "writeHed" permet d'indiquer un code d'erreur
//   response.writeHead(200, {
//     // le "content-type" permet d'indiquer que ça doit être interprété en html
//     'Content-type': 'text/html; charset=utf-8'
//   })
//   response.end('salut, commet ça va ?')

// })

// server.listen(8080)




// const mailjet = require ('node-mailjet')
// .connect('****************************1234', '****************************abcd')
// const request = mailjet
// .post("send", {'version': 'v3.1'})
// .request({
//   "Messages":[
//     {
//       "From": {
//         "Email": "georgeslaurene70@gmail.com",
//         "Name": "Laurène"
//       },
//       "To": [
//         {
//           "Email": "georgeslaurene70@gmail.com",
//           "Name": "Laurène"
//         }
//       ],
//       "Subject": "Greetings from Mailjet.",
//       "TextPart": "My first Mailjet email",
//       "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//       "CustomID": "AppGettingStartedTest"
//     }
//   ]
// })
// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })
