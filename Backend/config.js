/* eslint-disable no-process-env */
import dotenv from 'dotenv';

dotenv.config();

export const port = parseInt(process.env.PORT, 10) || 3000;
export const dev = process.env.NODE_ENV !== 'production';
export const apiVersion = process.env.API_VERSION;
export const debugMode = process.env.DEBUG_MODE;
export const frontEndUri = process.env.FRONTEND_URL;
export const cld_cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
export const cld_api_key = process.env.CLOUDINARY_API_KEY;
export const cld_api_secret = process.env.CLOUDINARY_API_SECERET;
