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

    //Authentication and security
    auth: {
        apiLimit: getNumericEnv('API_LIMIT', 1000),
        apiCooldown: getNumericEnv('API_COOLDOWN', 300000),
    }
}

/**
 * #### Validates app configuration for production environment
 **/
export const validateConfig = () => {
    //minimum required keys with existing value
    const requiredInProd = [
        'NODE_ENV',
        'API_LIMIT',
        'API_COOLDOWN'
    ]
    //check if key value exist
    if (appConfig.app.env === 'production') {
        for (const key of requiredInProd) {
            if (!process.env[key]) {
                throw new Error(`${key} is required in production environment`)
            }
        }
        //additional checks...
    }
};