const nodemailer = require('./../lib/mail')

const mailJob = {
    key: "RegistrationMail",
    async handle({ data }){
        const client = data.user

        const response = await nodemailer.sendMail({
                from: "John Doe <johnDoe@gmail.com>",
                to: `${client.name} <${client.email}>`,
                subject: 'cadastro de usuario',
                html: `Ola ${client.name}, mano deu certo dnovo Oloko....`
            })
    }
}

module.exports = mailJob

//3