import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const connectToDB = async () => {
    try {
        await pool.getConnection();
        console.log('Connected to the database');
    } catch (error) {
        console.log(error);
    }
};

export { pool, connectToDB };