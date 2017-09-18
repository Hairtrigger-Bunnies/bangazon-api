'use strict';

const { Router } = require('express');
const router = Router();
const { getDepartments, getOneDepartment, postOneDepartment, putOneDepartment, deleteOneDepartment } = require('../controllers/departmentsCtrl');

router.delete('/departments/:id', deleteOneDepartment);
router.post('/departments', postOneDepartment);
router.put('/departments/:id', putOneDepartment);
router.get('/departments', getDepartments);
router.get('/departments/:id', getOneDepartment);

module.exports = router;