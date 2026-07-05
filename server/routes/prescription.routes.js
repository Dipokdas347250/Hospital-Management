const express = require('express');
const router = express.Router();
const { getPrescriptions, createPrescription, getPrescription, updatePrescription, deletePrescription } = require('../controllers/prescription.controller');
const protect = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.route('/').get(protect, authorizeRoles('admin', 'doctor'), getPrescriptions).post(protect, authorizeRoles('admin', 'doctor'), createPrescription);
router.route('/:id').get(protect, authorizeRoles('admin', 'doctor', 'patient'), getPrescription).put(protect, authorizeRoles('admin', 'doctor'), updatePrescription).delete(protect, authorizeRoles('admin', 'doctor'), deletePrescription);

module.exports = router;
