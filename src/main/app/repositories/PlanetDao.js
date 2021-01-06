'use strict';
const planetSchema = require('./schemas/PlanetSchema');

class PlanetDao {
    constructor() { };
    async getAllPlanets() {
        try {
            return await planetSchema.scan().exec();
        } catch (error) {
            throw error;
        }
    };
    async createPlanet(planet) {
        try {
            return await planetSchema.create(planet);
        } catch (error) {
            throw error;
        }
    };
    async getPlanetByName(planet) {
        try {
            return await planetSchema.query(planet).exec();
        } catch (error) {
            throw error;
        }
    };
}

module.exports = PlanetDao;