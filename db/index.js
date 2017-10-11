const mysql = require('mysql');
const Promise = require('bluebird');

/**
 * A module that provides an interface to the database
 * @module db
 */

const DB_HOST = process.env.OGS_HOST || 'localhost';
const DB_USER = process.env.OGS_USER || 'root';
const DB_PASS = process.env.OGS_PASS || '';
const DB_DATABASE = process.env.OGS_DATABASE || 'trivia';

const databaseQueryString = `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}?reconnect=true`;

// connection pooling is used here to recycle and prevent dropped connections
const pool = mysql.createPool(databaseQueryString);

const db = {};

/** exports a database connection object */
module.exports = db;
