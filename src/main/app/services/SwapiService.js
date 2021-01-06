'use strict';
const axios = require('axios');
const appConfig = require('../configs/AppConfig');

class SwapiServie {
    constructor() { }
    async getStarWarsPlanets() {
        try {
            const constants = new appConfig().getConstants();
            const url = `${constants.swapiUrl}/planets`
            const resultAxios = await axios.get(url);
            return resultAxios.data;
        } catch (error) {
            var err = error.response && error.response.data ? error.response.data : error;
            err.httpStatus = error.response && error.response.status ? error.response.status : 500;
            err.error = "SWAPI error";
            throw err;
        }
    }
}

module.exports = SwapiServie;