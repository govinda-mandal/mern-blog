const config = {
    mongo: {
        options: {
            socketTimeoutMS: 30000,
            autoIndex: false,
            maxPoolSize: 50,
            dbName: 'blog',
            retryWrites: false
        },
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/blog'
    },
    server: {
        url: 'localhost',
        port: process.env.PORT || 1337
    }
};

export default config;
