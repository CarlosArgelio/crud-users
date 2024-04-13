import dotenv from 'dotenv'

dotenv.config({
    path: './../.env'
});

const env = process.env.NODE_ENV;

export const config = {
    port: process.env.BACKEND_PORT_LISTEN,
    isDev: env === 'development',
    isProd: env === 'production',
}