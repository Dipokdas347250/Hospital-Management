const express = require('express');
const router = express.Router();
const { getDepartments, createDepartment, getDepartment, updateDepartment, deleteDepartment } = require('../controllers/department.controller');
const protect = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.route('/').get(getDepartments).post(protect, authorizeRoles('admin'), createDepartment);
router.route('/:id').get(getDepartment).put(protect, authorizeRoles('admin'), updateDepartment).delete(protect, authorizeRoles('admin'), deleteDepartment);

module.exports = router;
