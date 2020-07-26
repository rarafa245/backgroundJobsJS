const Queue = require('bull');
const redisConf = require('../../config/redis')
const mailJob = require('./../jobs/RegistrationMail')

const mailQueue = new Queue(mailJob.key, redisConf)

mailQueue.on("failed", (job, err) => {
    console.log('job failed', job.name, job.data)
    console.log(err)
})

module.exports = mailQueue

//4