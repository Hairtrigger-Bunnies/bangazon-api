'use strict';

const { Router } = require('express');
const router = Router();
const { getEmployees, getOneEmployee, postOneEmployee, putOneEmployee, deleteOneEmployee } = require('../controllers/employeesCtrl');

router.delete('/employees/:id', deleteOneEmployee);
router.post('/employees', postOneEmployee);
router.put('/employees/:id', putOneEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:id', getOneEmployee);

module.exports = router;