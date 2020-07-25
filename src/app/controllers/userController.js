const Queue = require('../lib/Queue')

async function store(req, res){

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const user = {
        name,
        email,
        password
    }

    await Queue.add({ user })

    return res.json({Ola: "Mundo"})
    
}

module.exports = store