const Queue = require('bull');
const redisConf = require('../../config/redis')
const mailJob = require('./../jobs/RegistrationMail')

const mailQueue = new Queue(mailJob.key, redisConf)

module.exports = mailQueue