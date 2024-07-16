import { create, deleteProduct, find, findById, update } from "../db/queries.js";
import { getValue, setValue } from "../redis.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while fetching data from the database" });
    }
};
export const getProduct = async (req, res) => {
    try {
        const value = await getValue(req.params.id);
        if (value) {
            return res.status(200).json(value);
        }
        const product = await findById(req.params.id);

        await setValue(req.params.id, product[0]);

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while fetching data from the database" });
    }
};
export const createProduct = async (req, res) => {
    const { title, des, price } = req.body;
    if (!title || !des || !price) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }
    try {
        const product = await create(title, des, price);
        return res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while fetching data from the database" });
    }
};
export const updateProduct = async (req, res) => {
    const { title, des, price } = req.body;
    const id = req.params.id;
    if (!id || !title || !des || !price) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }
    try {
        const product = await update(id, title, des, price);
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while fetching data from the database" });
    }
};
export const delete_Product = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await deleteProduct(id);
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while fetching data from the database" });
    }
};
