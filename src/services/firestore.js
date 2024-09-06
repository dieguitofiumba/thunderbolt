const admin = require('../config/firebase')

/** 
 * Gets a document from Firebase
 *@param {string} collection - The document collection in Firestore
 *@param {string} docId - The document id reference in Firestore
 *@returns {Promise<Object>} The Firestore document object
 */
const getDocument = async (collection, docId) => {
    try {

        const doc = await admin.firestore().collection(collection).doc(docId).get()

        if(!doc.exist) {
            return null
        } else {
            return doc.data()
        }


    } catch(error) {
        
        throw error
    }
}

/**
 * 
 * @param {string} collectionRef - The collection reference
 * @param {string} query - The search term to return
 * @returns {Primise<Array>} An array with the matches
 */



const search = async (collectionRef, query) => {
    try {
        const term = query.toLowerCase();
        const collection = await admin.firestore().collection(collectionRef).get();

        const titleSnapshot = collection;
        let matches = [];

        let titleResults = titleSnapshot.docs
            .map(doc => ({
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content.substring(0, 100)
            }))
            .filter(doc => doc.title.toLowerCase().includes(term))
            .slice(0, 10);

        const found = new Set(titleResults.map(doc => doc.id));

        if (titleResults.length < 10) {
            const contentSnapshot = collection;
            const contentResults = contentSnapshot.docs
                .map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content.substring(0, 100)
                }))
                .filter(doc => doc.content.toLowerCase().includes(term) && !found.has(doc.id))
                .slice(0, 10 - titleResults.length);

            matches = titleResults.concat(contentResults);
        } else {
            matches = titleResults;
        }

        return matches;

    } catch (error) {
        
        throw error;
    }
};


/**
 * Creates a new Firestore Document with the data provided
 * @param {Object} data - The data used for create the Firestore document
 * @param {string} data.collection - The collection reference for the document
 * @param {number} [data.id] - The ID for the document, default Firestore generated
 * @param {object} data.fields - The document structure
 * @returns {Promise<Object>} - The Firebastore created document
 */


const createDocument = async(data) => {
    try {

        const docRef = data.id
        ? admin.firestore().collection(data.collection).doc(data.id)
        : admin.firestore().collection(data.collection).doc()

        await docRef.set(data.fields)
        const created = await docRef.get()
        return created.data()


    } catch(error) {
        
        throw error
    }


}

module.exports = {getDocument, search, createDocument}