import { pool } from "./index.js";

export const find = async () => {
    const QUERY = `SELECT * FROM products`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    }
    catch (error) {
        console.log("Error occurred while fetching data from the database", error);
        throw error;
    }
}

export const findById = async (id) => {
    const QUERY = `SELECT * FROM products WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        return result[0];
    }
    catch (error) {
        console.log("Error occurred while fetching data from the database", error);
        throw error;
    }
}

export const create = async (title, des, price) => {
    const QUERY = `INSERT INTO products (title, des, price) VALUES (?, ?, ?)`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [title, des, price]);
        return result[0];
    }
    catch (error) {
        console.log("Error occurred while creating data in the database", error);
        throw error;
    }
}

export const update = async (id, title, des, price) => {
    const QUERY = `UPDATE products SET title = ?, des = ?, price = ? WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [title, des, price, id]);
        return result[0];
    }
    catch (error) {
        console.log("Error occurred while creating data in the database", error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    const QUERY = `DELETE FROM products WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        return result[0];
    }
    catch (error) {
        console.log("Error occurred while creating data in the database", error);
        throw error;
    }
}