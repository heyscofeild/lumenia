const router = require('express').Router();
const pool = require('../database/db.js');

// For setting learner profile
const setLearnerProfile = async (req, res) => {
    try {
        const { user_id, full_name, phone_number, goals, address, description } = req.body;

        // Check if user exist
        const userExists = await pool.query(
            'SELECT * FROM users WHERE user_id = $1', [user_id]);
        
        if (userExists.rows.length === 0) {
            return res.status(404).json("User not found ak t7arech go login a l7aj");
        }

        // does the profile exist
        const profileExists = await pool.query(
            'SELECT * FROM learners WHERE user_id = $1', [user_id]);
        
        if (profileExists.rows.length > 0) {//za3ma tanawou3 khatra > khatra ===
            return res.status(400).json(
                "Learner profile already exists");
        }

        // Insert new learner profile
        const newLearnerProfile = await pool.query(
            'INSERT INTO learners (user_id, full_name, phone_number, goals, address, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [user_id, full_name, phone_number, goals, address, description]
        );

        res.json(newLearnerProfile.rows[0]);
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

// For setting teacher profile
const setTeacherProfile = async (req, res) => {
    try {
        const { user_id, full_name, business_email, phone_number, address, description } = req.body;

       // user exist?
        const userExists = await pool.query(
            'SELECT * FROM users WHERE user_id = $1', [user_id]);
        
        if (userExists.rows.length === 0) {
            return res.status(404).json("User not found");
        }

        // profile exist?
        const profileExists = await pool.query(
            'SELECT * FROM teachers WHERE user_id = $1', [user_id]);
        
        if (profileExists.rows.length > 0) {
            return res.status(400).json(
                "Teacher profile already exists");
        }

        // Validating the fromat of the email
        function validEmail(business_email) { //to validate  the email format
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(business_email);
          }
          if (!validEmail(business_email)) { //check if the email have a valid format
            return res.status(401).json("invalid business email");
          }

        // Inserting the  profile

        const newTeacherProfile = await pool.query(
            'INSERT INTO teachers (user_id, full_name, business_email, phone_number, address, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [user_id, full_name, business_email, phone_number, address, description]
        );

        res.json(newTeacherProfile.rows[0]);
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

module.exports = { setLearnerProfile, setTeacherProfile };