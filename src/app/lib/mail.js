//Criando Transporter

const nodemailer = require('nodemailer')
const mailConf = require('../../config/mailConf')

module.exports = nodemailer.createTransport(mailConf)

//2