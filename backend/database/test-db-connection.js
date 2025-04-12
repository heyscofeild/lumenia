const pool = require('./db'); // Import the pool from db.js

(async () => {
    try {
        const client = await pool.connect(); // Try to connect to the database
        console.log('Database connected successfully!');
        client.release(); // Release the client back to the pool
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
    }
})();