import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';
import firebaseAdmin from 'firebase-admin';

dotenv.config();

console.log(process.env.PORT);

const router = express();

/** Server Handling */
const server = http.createServer(router);

/** Connect to Firebase Admin */
import serviceAccount from './config/serviceAccountKey';

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as any)
});

/** Connect to MongoDB */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info('MongoDB is connected');
    })
    .catch((error: any) => {
        logging.error(error.message, error);
    });

/** Logging the request */
router.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    
    res.on('finish', () => {
        logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: ${res.statusCode}]`);
    });

    next();
});

/** Parse the body of the request */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of our API */
router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, DELETE, POST, PUT');
        return res.status(200).json({});
    }

    next();
});

/** Routes */

/** Error handling */
router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not found');

    return res.status(404).json({
        message: error.message
    });
});

/** Server Activation */
server.listen(config.server.port, () => {
    logging.info(`Server is running on ${config.server.url}:${config.server.port}`);
});
