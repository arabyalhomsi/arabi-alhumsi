const db = require('./database')

async function seed() {
    try {
        await db.client.findOrCreate({
            where: {
                id: 'arabi_web',
                grants: '["authorization_code","password","refresh_token"]'
            }
        })
    } catch (error) {
        console.error(error)
    }
} 

module.exports = seed