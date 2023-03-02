const express = require('express');
const {createReading,getAllReading,deleteReading,updateReading, getReadingByID} = require('../controllers/readingController');
const {verifyAdmin} = require('../utils/verifyToken');
const router = express.Router();

router.get('/',getAllReading);
router.get('/:id',getReadingByID);
router.post('/create',verifyAdmin,createReading);
router.delete('/:id',verifyAdmin,deleteReading);
router.put('/:id',verifyAdmin,updateReading);


module.exports = router;