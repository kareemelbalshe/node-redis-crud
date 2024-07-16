import express from 'express';
import productRouter from './routes/index.js';
import { connectToDB } from './db/index.js';

import dotenv from 'dotenv';
import { initRedisClient } from './redis.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRouter);

const initApp = async () => {
    await connectToDB();
    await initRedisClient();
}
initApp().then(() => {
    app.listen(port, () => {
        console.log(`Server is running ^_^ http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
    console.log('Unable to connect to the database');
    process.exit(0);
});

// app.get('/', (req, res, next) => {
//     res.send('Hello World!');
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// connectToDB().then(() => {
//     app.listen(port, () => {
//         console.log(`Server is running ^_^ http://localhost:${port}`);
//     });
// }).catch((error) => {
//     console.log(error);
//     console.log('Unable to connect to the database');
//     process.exit(0);
// });