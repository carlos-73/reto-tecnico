'use strict';
const { SWAPI_BASE_URL } = require('../utils/Constants');
const vehicleSchema = require('./schemas/VehicleSchema');
const axios = require('axios');

module.exports = {
  async getAllVehicles(filters) {
    try {
      if (Object.keys(filters).length === 0) {
        return await vehicleSchema.scan().exec();
      }
      const query = {};
      Object.entries(filters).forEach((entry) => {
        const [key, value] = entry;
        query[key] = { contains: value };
      })
      return await vehicleSchema.scan(query).exec();
    } catch (error) {
      throw error;
    }
  },
  async getAllVehiclesByFilters() {
    try {
      return await vehicleSchema.scan().exec();
    } catch (error) {
      throw error;
    }
  },
  async getAllVehiclesExternal() {
    try {
      const url = `${SWAPI_BASE_URL}vehicles`;
      const resultAxios = await axios.get(url);
      return resultAxios.data;
    } catch (error) {
      throw error;
    }
  },
  async createVehicle(request) {
    try {
      return await vehicleSchema.create(request);
    } catch (error) {
      throw error;
    }
  },
  async getVehicleByName(name) {
    try {
      return await vehicleSchema.query({ nombre: name }).exec();
    } catch (error) {
      throw error;
    }
  },
  async getVehicleById(id) {
    try {
      return await vehicleSchema.query({ id }).exec();
    } catch (error) {
      throw error;
    }
  },
  async updateVehicle(request) {
    try {
      return await vehicleSchema.update(request);
    } catch (error) {
      throw error;
    }
  },
  async deleteVehicle(id) {
    try {
      return await vehicleSchema.delete({ id });
    } catch (error) {
      throw error;
    }
  },
};
