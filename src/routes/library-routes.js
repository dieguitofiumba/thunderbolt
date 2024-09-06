const express = require('express');
const router = express.Router();
const {fetchDocument, searchTerm, postDocument} = require('../controllers/libraryControllers')

router.get('/library/document', getDocument);
router.get('/library/search', search())
router.post('library/create', createDocument())



module.exports = router;