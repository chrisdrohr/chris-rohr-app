"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer_1 = require("nodemailer");
exports.sendEmail = functions.database.ref('/contacts/{pushId}').onCreate((snapshot) => __awaiter(this, void 0, void 0, function* () {
    const contact = snapshot.val();
    const gmailEmail = functions.config().gmail.email;
    const gmailPassword = functions.config().gmail.password;
    const mailTransport = nodemailer_1.default.createTransport({
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
    };
    try {
        yield mailTransport.sendMail(mailOptions);
        console.log(`Message sent from`, contact.email);
    }
    catch (error) {
        console.error('There was an error sending the email:', error);
    }
    return null;
}));
//# sourceMappingURL=index.js.map