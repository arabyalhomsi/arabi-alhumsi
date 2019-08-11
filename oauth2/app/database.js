"use strict";
const { Client } = require('pg')
const Sequelize = require('sequelize')


// create database schema
// create methods in this file
// create the model for oauth
// make the endpoints

module.exports = class Database {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.PGDATABASE,
            process.env.PGUSER,
            process.env.PGPASSWORD
        ,{
            host: process.env.PGHOST,
            dialect: 'postgres'
        })

        this.user = this.sequelize.define('user', {
            username: Sequelize.STRING,
            password: Sequelize.DATE
        }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'auth_user'
        })
    }

    getUser() {
        return this.user
    }


}