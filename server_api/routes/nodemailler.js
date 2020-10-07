var express = require('express');
const router = new express.Router();
const nodemailer = require("nodemailer");

/*PAGE CONTACT*/
router.post("/", (req, res, next) => {
    console.log(req.body.name)
    if (!req.body.name || !req.body.mail || !req.body.message) {
        // never trust user input !!!
        // si non : retourner message warning au client
        //req.flash("warning", "Attention, merci de remplir tous les champs requis !");
        res.redirect("/");
    }

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL, // generated ethereal user
                pass: process.env.PASSWORD, // generated ethereal password
                // user: testAccount.user, // generated ethereal user
                // pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `<p>${req.body.mail}</p>`, // sender address
            to: process.env.MAIL, // list of receivers
            subject: `Demande de contact de ${req.body.name}`, // Subject line
            html: `<p>Vous avez un nouveau message</p>
                   <p> Nom: ${req.body.name}</p>
                   <p> Mail: ${req.body.mail}</p>
                   <p> Subject: ${req.body.subject}</p>
                   <p> Message: ${req.body.message}</p>`,
            // html body


        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    };
    main().then(() => {
        // req.flash("success", "Votre message a bien été envoyé !");
        console.log("message envoyé")
        res.redirect("/");
    });
    main().catch(() => {
        // req.flash("error", "Une erreur est survenue, veuillez réessayer!");
        console.log("message non envoyé")
        res.redirect("/");
    });

});

/*PAGE REINITIALISER LE MOT DE PASSE*/
router.post("/reinitialisation_mdp", (req, res, next) => {
    console.log(req.body.name)
    if (!req.body.mail) {
        // never trust user input !!!
        // si non : retourner message warning au client
        //req.flash("warning", "Attention, merci de remplir tous les champs requis !");
        // res.redirect("/");
        res.status(401).json({
            msg: "Identifiants incorrects",
            level: "error",
        });
    }

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL, // generated ethereal user
                pass: process.env.PASSWORD, // generated ethereal password
                // user: testAccount.user, // generated ethereal user
                // pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `<p>${req.body.mail}</p>`, // sender address
            to: process.env.MAIL, // list of receivers
            subject: `Réinitialiser votre mot de passe`, // Subject line
            html: `<p>Bonjour, veuillez suivre le lien suivant afin de réinitialiser votre mot de passe</p>
                   `,
            // html body


        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    };
    main().then(() => {
        // req.flash("success", "Votre message a bien été envoyé !");
        console.log("message envoyé")
        res.redirect("/");
    });
    main().catch(() => {
        // req.flash("error", "Une erreur est survenue, veuillez réessayer!");
        console.log("message non envoyé")
        res.redirect("/");
    });

});

module.exports = router;