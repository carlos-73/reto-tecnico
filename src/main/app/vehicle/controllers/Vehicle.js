'use strict';

const validator = require('./Validator');
const service = require('../services/VehicleService');

module.exports = {
  async createVehicle(event) {
    try {
      const request = await validator.createVehicleValidator(JSON.parse(event.body));
      const result = await service.createVehicle(request);
      return {
        statusCode: result.code,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error),
      };
    }
  },
  async getVehicleById(event) {
    try {
      const request = await validator.getVehicleByIdValidator(event.pathParameters);
      const result = await service.getVehicleById(request);
      return {
        statusCode: result.code,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error),
      };
    }
  },
  async getAllVehicles(event) {
    try {
      const request = await validator.getAllVehiclesValidator(event.queryStringParameters);
      const result = await service.getAllVehicles(request);
      return {
        statusCode: result.code,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error),
      };
    }
  },
  async updateVehicle(event) {
    try {
      const request = await validator.updateVehicleValidator({...JSON.parse(event.body), id: event.pathParameters.id});
      const result = await service.updateVehicle(request);
      return {
        statusCode: result.code,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error),
      };
    }
  },
  async deleteVehicle(event) {
    try {
      const request = await validator.deleteVehicleValidator(event.pathParameters);
      const result = await service.deleteVehicle(request);
      return {
        statusCode: result.code,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: error.statusCode,
        body: JSON.stringify(error),
      };
    }
  },
}