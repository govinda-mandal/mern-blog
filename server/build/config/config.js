"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/blog'
    },
    server: {
        url: 'localhost',
        port: process.env.PORT || 1337
    }
};
exports.default = config;
