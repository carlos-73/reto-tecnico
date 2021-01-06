'use strict';
const planetDao = require('../repositories/PlanetDao');
const uuid = require('uuid');
const axios = require('axios');

class PlanetDao {
    constructor() { }
    async getAllPlanets() {
        try {
            const dao = new planetDao();
            return await dao.getAllPlanets();
        } catch (error) {
            throw error;
        }
    };
    async createPlanet(planet) {
        try {
            const dao = new planetDao();
            const valPlanet = await dao.getPlanetByName({ nombre: planet.nombre });
            if (valPlanet.count > 0) {
                throw { httpStatus: 400, message: "Ya existe un planeta con ese nombre" }
            }
            planet.id = uuid.v1();
            planet.creado = new Date().toString();
            return await dao.createPlanet(planet);
        } catch (error) {
            throw error;
        }
    };
    async getPlanetByName(planet) {
        try {
            const dao = new planetDao();
            const result = await dao.getPlanetByName(planet);
            if (result.count < 1) {
                throw { httpStatus: 404, message: "Planeta no encontrado" }
            }
            return result;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = PlanetDao;