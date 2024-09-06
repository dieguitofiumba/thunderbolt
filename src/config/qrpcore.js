const admin = require('./firebase')
const getInstance = async (clientId) => {
    try {
        if (clientId) {
            const response = await admin.firestore().collection('qrpcore').doc('instances').get()
            
            const instances = response.data()
            const match = instances.find(instance => instance.id === clientId)
            return match
        } else {
    
            const instances = await admin.firestore().collection('qrpcore').doc('instances').get()
            const result = instances.data()
            return result.instances
        }
        
    } catch(error) {
        console.log(error)
        throw new Error('Unable to get instances from database')
    }
    
}

module.exports = getInstance