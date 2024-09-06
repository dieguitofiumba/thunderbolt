const express = require('express');
const router = express.Router();
const {fetchDocument, searchTerm, postDocument} = require('../controllers/libraryControllers')

router.get('/library/document', fetchDocument);
router.get('/library/search', searchTerm)
router.post('library/create', postDocument)



module.exports = router;