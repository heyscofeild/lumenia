const express = require('express');
const validinfo = require('../middleware/valid.js');
const authorize = require('../middleware/authorization');
const { setLearnerProfile, setTeacherProfile } = require('../controllers/profileCcontroller');
const router = express.Router();
const { reguser, loguser, isverified } = require('../authent');

// Register, login and verify token routes
router.route('/register').post(validinfo, reguser);
router.route('/login').post(validinfo, loguser);
router.route('/isverified').get(authorize, isverified);

// Profile routes
router.route('/learner-profile').post(authorize, setLearnerProfile);
router.route('/teacher-profile').post(authorize, setTeacherProfile);

module.exports = router;