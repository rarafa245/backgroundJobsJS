const mailQueue = require('./app/lib/Queue')
const RegistrationMail = require('./app/jobs/RegistrationMail')

mailQueue.process(RegistrationMail.handle)
