'use strict';
require('dotenv').config();

class AppConfig {
    constructor() {
        this.proyect = class {
            constructor() {
                this.constants = {
                    swapiUrl: process.env.SWAPI_URL
                };
            };
        };
    };
    getConstants() {
        return new this.proyect().constants;
    };
}

module.exports = AppConfig;