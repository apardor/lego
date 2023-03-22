import dotenv from 'dotenv';
dotenv.config()

const API_KEY = process.env.API_KEY || '';
const THEME_URL = process.env.THEME_URL || '';
const THEME_PAGE_SIZE = process.env.THEME_PAGE_SIZE || '';
const THEME_URL_API = `${THEME_URL}?key=${API_KEY}&page_size=${THEME_PAGE_SIZE}`;


export const config = {
        url: THEME_URL_API
}