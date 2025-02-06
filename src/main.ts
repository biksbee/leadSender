import cors from 'cors';
import express, {Application} from "express";
import 'dotenv/config';
import {HandlingErrorMiddleware} from "./middleware/handling-error.middleware";

const main: Application = express();
const port = process.env.PORT || 3502;

(async () => {
    try {
        main.use(cors())
        main.use(express.json());

        main.get('/', (req, res) => {
            res.send('hello world')
        });

        // @ts-ignore
        main.use(HandlingErrorMiddleware);
        main.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.error("Application failed to start:", error);
    }
})()