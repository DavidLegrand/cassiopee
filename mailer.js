
const nodemailer = require('nodemailer')
const config = {
  host: 'mail.gandi.net',
  port: 587,

  auth: {
    user: "noreply@terre-des-arts.fr",
    pass: "QDXNHYn22UaMejC"
  },
  tls: {
    rejectUnauthorized: false
  }
}

const transporter = nodemailer.createTransport(config);

transporter.verify((err, success) => {
  if (err) console.log(err)
  else console.log("server ready to send messages")
})


function sanitizeString(str) {
  try {
    str = str ? str.replace(/[^a-z0-9áâäàéêèëíïîìóòôöúüùûñç@ +.,_-]/gim, "") : "";
    return str.trim();
  } catch (e) {
    console.error(e)
  }
}

const sanitizeBody = body => ({
  firstname: body.firstname ? sanitizeString(body.firstname) : "",
  lastname: body.lastname ? sanitizeString(body.lastname) : "",
  mobile_phone: body.mobile_phone ? sanitizeString(body.mobile_phone) : "",
  email: body.email ? sanitizeString(body.email) : "",
  address: body.address ? sanitizeString(body.address) : "",
  postal_code: body.postal_code ? sanitizeString(body.postal_code) : "",
  city: body.city ? sanitizeString(body.city) : "",
  achat: body.achat ? sanitizeString(body.achat) : "",
  bien: body.bien ? sanitizeString(body.bien) : "",
  origine: body.origine ? sanitizeString(body.origine) : "",

})


const getProspectInfo = (body) => {

  const text = `- Nom : ${body.firstname} ${body.lastname}
  - Contact : ${body.mobile_phone} ${body.email}
  - Adresse : ${body.address} ${body.postal_code} ${body.city}
  - Type d'achat envisagé : ${body.achat}
  - Type de bien recherché :  ${body.bien}`;

  const html = `<ul><li>Nom : ${body.firstname} ${body.lastname}</li>
  <li>Contact : ${body.mobile_phone} ${body.email}</li>
  <li>Adresse : ${body.address} ${body.postal_code} ${body.city}</li>
  <li>Type d'achat envisagé : ${body.achat}</li>
  <li>Type de bien recherché :  ${body.bien}</li></ul>`;

  return { text, html }
}
const getProspectMsg = (body, prospect) => {
  const text = `Bonjour ${body.firstname} ${body.lastname},
  Votre email a bien été envoyé. Une conseillère dédiée vous recontactera dans les plus brefs délais.
  Pour rappel, votre demande était :
  ${prospect.text}
  Ceci est un email automatique, merci de ne pas répondre.
  Cordialement,
  L'équipe Spy Cassiopée`;
  const html = `<p>Bonjour ${body.firstname} ${body.lastname},</p>
  <p>Votre email a bien été envoyé. Une conseillère dédiée vous recontactera dans les plus brefs délais.</p>
  <p>Pour rappel, votre demande était :</p>
  ${prospect.html}
  <p>Ceci est un email automatique, merci de ne pas répondre.</p>
  <p>Cordialement,</p>
  <p>L'équipe Spy Cassiopée</p>`;
  return { text, html }
}

const getConseillerMsg = (body, prospect) => {
  const text = `Un nouveau prospect a été enregistré sur la landing page Terre des Arts :
  Origine : ${body.origine}
  ${prospect.text}
  Ceci est un email automatique, merci de ne pas répondre`;
  const html = `<p>Un nouveau prospect a été enregistré sur la landing page Terre des Arts :</p>
  <strong>Origine : ${body.origine}</strong>
  ${prospect.html}
  <p>Ceci est un email automatique, merci de ne pas répondre</p>`;
  return { text, html }
}

const mailer = (body) => {
  body = sanitizeBody(body)
  const prospect = getProspectInfo(body)
  const prospectMsg = getProspectMsg(body, prospect)
  const conseillerMsg = getConseillerMsg(body, prospect)
  var messages = [{
    to: body.email,
    subject: 'Terre des Arts : Confirmation de demande',
    text: prospectMsg.text,
    html: prospectMsg.html,
  },
  {
    to: "contact@spycassiopee.fr",
    subject: 'Terre des Arts : Nouveau ' + (body.origine === "performance" ? 'CPL' : 'lead'),
    text: conseillerMsg.text,
    html: conseillerMsg.html,
  },
  {
    to: "dlegrand.pro@gmail.com",
    subject: 'Terre des Arts : Nouveau ' + (body.origine === "performance" ? 'CPL' : 'lead'),
    text: conseillerMsg.text,
    html: conseillerMsg.html,
  },
  {
    to: "ffischer@buenos-aires.fr",
    subject: 'Terre des Arts : Nouveau ' + (body.origine === "performance" ? 'CPL' : 'lead'),
    text: conseillerMsg.text,
    html: conseillerMsg.html,
  }];
  messages.forEach(message => {
    message.from = '"Terre des arts" noreply@terre-des-arts.fr'
    transporter.sendMail(message, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  })
}

module.exports = mailer

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// module.exports = nodemailer.createTestAccount((err, account) => {

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: account.user, // generated ethereal user
//       pass: account.pass  // generated ethereal password
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//     from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
//     to: 'dlegrand.pro@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   });
// });

