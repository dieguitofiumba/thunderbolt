const { getDocument, createDocument, search } = require('../services/firestore')


const fetchDocument = async (req, res) => {
    const docId = req.query.id
    try {
        console.log(docId)
        const response = await getDocument('library', docId)

        if(response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({error: 'Document not found'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}

const searchTerm = async (req, res) => {
    try {
        const term = req.query.q

        const response = await search('library', term)

        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res(500).json({error: 'Internal Server Error'})
    }
}

const postDocument = async (req, res) => {
    try {

        const documentData = req.body

        const data = {
            collection: 'library',
            fields: documentData
        }

        const documentCreated = await createDocument()
        if(documentCreated) {
            res.status(201).json(documentCreated)
        } else {
            res.status(500).json({error: 'Internal Server Error'})
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}

module.exports = {fetchDocument, searchTerm, postDocument}