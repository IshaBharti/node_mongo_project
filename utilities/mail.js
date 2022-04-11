
const nodemailer = require('nodemailer');

module.exports.sendMailer = (data)=>{
    const transporter = nodemailer.createTransport({
        secure: false,
        port: 587,
        host: "smtp.gmail.com",
        auth: {
           user: "test.dev688@gmail.com",
           pass: "admin@1234",
        },
        tls: {
           rejectUnauthorized: false
        }
     });
   let mailOptions = {
      from: "test.dev688@gmail.com",
      to:data.email,
      subject: data.subject,
      text: 'Recallr',
      html:data.body,
   }
   transporter.sendMail(mailOptions, (error, result) => {
      if (error) {
         console.log(error);
      } else {
         console.log("That's wassup!");
      }
   });
    
}