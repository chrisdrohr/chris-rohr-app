import * as functions from 'firebase-functions';
import nodemailer from 'nodemailer';

exports.sendEmail = functions.database.ref('/contacts/{pushId}').onCreate(async snapshot => {
    const contact = snapshot.val(); 
    const gmailEmail = functions.config().gmail.email;
    const gmailPassword = functions.config().gmail.password;
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword,
        }
    });

    const mailOptions = {
        from: contact.email,
        subject: contact.name + " sent a message",
        text: contact.message,
        to: gmailEmail
    }

    try {
        await mailTransport.sendMail(mailOptions);
        console.log(`Message sent from`, contact.email)
    } catch(error) {
        console.error('There was an error sending the email:', error);
    }
    return null;
})