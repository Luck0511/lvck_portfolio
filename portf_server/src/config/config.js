//import helper functions
import {getRequiredEnv, getBooleanEnv, getNumericEnv} from '../utils/envHelpers.js'

//dotenv loader import
import dotenv from 'dotenv';

dotenv.config();

//application config
export const appConfig = {
    //Application config options
    app: {
        name: 'PortfolioServer',
        env: getRequiredEnv('NODE_ENV'),
        port: getNumericEnv('PORT', 3000),
        host: process.env.HOST || 'localhost',
        url: process.env.APP_URL || `http://localhost:${getNumericEnv('PORT', 3000)}`,
    },
    //data persistence configuration
    data:{
        dataPath: getRequiredEnv('APP_DATA_PATH', './data/')
    },

    //Authentication and security
    auth: {
        jwtSecret: getRequiredEnv('JWT_SECRET', 'helloImARandomSecretKetCHANGEMEINPROD140720112005'),
        jwtExpires: getRequiredEnv('JWT_EXPIRES_IN', '1d'),
        cookieMaxAge: getNumericEnv('COOKIE_MAX_AGE', 86400000), //1 day
        bcryptRounds: getNumericEnv('BCRYPT_ROUNDS', 12),
        apiLimit: getNumericEnv('API_LIMIT', 1000),
        apiCooldown: getNumericEnv('API_COOLDOWN', 300000),
    }
}

/**
 * #### returns a flat version of the object passed on params
 **/
function flatObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        const fullKey = key;

        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.assign(acc, flatObject(value, fullKey));
        } else {
            acc[fullKey] = value;
        }
        return acc;
    }, {});
}

/**
 * #### Validates app configuration for production environment
 **/
export const validateConfig = () => {
    //minimum required keys with existing value for production environment
    const requiredInProd = [
        'env',
        'jwtSecret',
        'jwtExpires',
        'cookieMaxAge',
        'bcryptRounds',
        'apiLimit',
        'apiCooldown',
        'dataPath'
    ]
    //check if key value exist
    if (appConfig.app.env === 'production') {
        //flatten the object and cycle through the keys and values to search for required keys
        for (const key of requiredInProd) {
            if (!flatObject(appConfig)[key]) {
                throw new Error(`${key} config key is missing and is required for production environment`)
            }
        }
        //additional checks...
    }
};