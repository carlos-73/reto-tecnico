'use strict';

const uuid = require('uuid');
const dao = require('../dao/VehicleDao');
const myGenericResponse = require('../models/MyGenericResponse');
const {
  STATUS_OK,
  HTTP_STATUS_CODE_SUCCESS,
  HTTP_STATUS_CODE_BAD_REQUEST,
  DEFAULT_NUMBER_OF_MANIPULATED_RECORDS,
  HTTP_STATUS_CODE_NOT_FOUND
} = require('../utils/Constants');

module.exports = {
  async createVehicle(request) {
    try {
      const { nombre } = request;
      const vehicle = await dao.getVehicleByName(nombre);
      if (vehicle.count > 0) {
        throw {
          statusCode: HTTP_STATUS_CODE_BAD_REQUEST,
          message: 'Vehiculo existente'
        };
      }
      request.id = uuid.v1();
      const result = await dao.createVehicle(request);
      return new myGenericResponse(
        STATUS_OK,
        HTTP_STATUS_CODE_SUCCESS,
        'Vehiculo creado satisfactoriamente',
        DEFAULT_NUMBER_OF_MANIPULATED_RECORDS,
        result
      );
    } catch (error) {
      throw error;
    }
  },
  async getVehicleById(request) {
    try {
      const { id } = request;
      const vehicle = await dao.getVehicleById(id);
      if (vehicle.count == 0) {
        throw {
          statusCode: HTTP_STATUS_CODE_NOT_FOUND,
          message: 'Vehiculo no encontrado'
        };
      }
      return new myGenericResponse(STATUS_OK, HTTP_STATUS_CODE_SUCCESS, 'Vehiculo encontrado', vehicle.count, vehicle);
    } catch (error) {
      throw error;
    }
  },
  async getAllVehicles(request) {
    try {
      if (request.fuente.toLowerCase() === 'externa') {
        const listVehicles = await dao.getAllVehiclesExternal();
        return new myGenericResponse(
          STATUS_OK,
          HTTP_STATUS_CODE_SUCCESS,
          'Vehiculos encontrados',
          listVehicles.count,
          listVehicles.results
        );
      }
      delete request.fuente;
      const vehicle = await dao.getAllVehicles(request);
      if (vehicle.count == 0) {
        throw {
          statusCode: HTTP_STATUS_CODE_NOT_FOUND,
          message: 'Vehiculos no encontrados'
        };
      }
      return new myGenericResponse(
        STATUS_OK,
        HTTP_STATUS_CODE_SUCCESS,
        'Vehiculos encontrados',
        vehicle.count,
        vehicle
      );
    } catch (error) {
      throw error;
    }
  },
  async updateVehicle(request) {
    try {
      const { nombre } = request;
      const vehicle = await dao.getVehicleByName(nombre);
      if (vehicle.count > 0) {
        throw {
          statusCode: HTTP_STATUS_CODE_BAD_REQUEST,
          message: 'Nombre de vehiculo existente'
        };
      }
      const result = await dao.updateVehicle(request);
      return new myGenericResponse(
        STATUS_OK,
        HTTP_STATUS_CODE_SUCCESS,
        'Vehiculo modificado satisfactoriamente',
        DEFAULT_NUMBER_OF_MANIPULATED_RECORDS,
        result
      );
    } catch (error) {
      throw error;
    }
  },
  async deleteVehicle(request) {
    try {
      const { id } = request;
      const vehicle = await dao.getVehicleById(id);
      if (vehicle.count == 0) {
        throw {
          statusCode: HTTP_STATUS_CODE_NOT_FOUND,
          message: 'Vehiculo no encontrado'
        };
      }
      const result = await dao.deleteVehicle(id);
      return new myGenericResponse(
        STATUS_OK,
        HTTP_STATUS_CODE_SUCCESS,
        'Vehiculo eliminado satisfactoriamente',
        DEFAULT_NUMBER_OF_MANIPULATED_RECORDS,
        result
      );
    } catch (error) {
      throw error;
    }
  }
};
