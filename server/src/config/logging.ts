const DEFAULT_NAMESPACE = 'Server';

const getDate = () => {
    return new Date().toISOString();
};

const logging = {
    info: (message: any, namespace?: string) => {
        if (typeof message === 'string') {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
        } else {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
        }
    },
    warn: (message: any, namespace?: string) => {
        if (typeof message === 'string') {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`);
        } else {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`, message);
        }
    },
    error: (message: any, namespace?: string) => {
        if (typeof message === 'string') {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`);
        } else {
            console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message);
        }
    }
};

export default logging;
