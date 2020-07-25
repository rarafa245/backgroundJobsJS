const Mail = require('./../lib/mail')

const mailJob = {
    key: "RegistrationMail",
    async handle({ data }){
        const client = data.user

        const response = await Mail.sendMail({
                from: "John Doe <johnDoe@gmail.com>",
                to: `${client.name} <${client.email}>`,
                subject: 'cadastro de usuario',
                html: `Ola ${client.name}, bem vindo ao sistema de filas :D`
            })
    }
}

module.exports = mailJob