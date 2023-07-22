const Joi = require('joi');
const { HTTP_STATUS_CODE_BAD_REQUEST } = require('../utils/Constants');

module.exports = {
  async createVehicleValidator(body) {
    const schema = Joi.object({
      nombre: Joi.string()
        .required(),
      modelo: Joi.string()
        .required(),
      fabricante: Joi.string()
        .required(),
      costo_en_creditos: Joi.number()
        .allow('unknown')
        .integer()
        .positive()
        .cast('string')
        .required(),
      longitud: Joi.number()
        .positive()
        .cast('string')
        .required(),
      maxima_velocidad_atmosferica: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .required(),
      equipo: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .required(),
      pasajeros: Joi.number()
        .allow(0)
        .integer()
        .positive()
        .cast('string')
        .required(),
      capacidad_carga: Joi.number()
        .allow('none')
        .integer()
        .positive()
        .cast('string')
        .required(),
      consumibles: Joi.string()
        .required(),
      clase_vehiculo: Joi.string()
        .required(),
      pilotos: Joi.array()
        .items(Joi.string())
        .required(),
      peliculas: Joi.array()
        .items(Joi.string())
        .required(),
      url: Joi.string()
        .required(),
    });
    try {
      return await schema.validateAsync(body);
    }
    catch (err) {
      throw { statusCode: HTTP_STATUS_CODE_BAD_REQUEST, details: err.details };
    }
  },
  async getVehicleByIdValidator(body) {
    const schema = Joi.object({
      id: Joi.string()
        .uuid()
        .required(),
    });
    try {
      return await schema.validateAsync(body);
    }
    catch (err) {
      throw { statusCode: HTTP_STATUS_CODE_BAD_REQUEST, details: err.details };
    }
  },
  async getAllVehiclesValidator(body) {
    const schema = Joi.object({
      fuente: Joi.string()
        .allow('')
        .required(),
      nombre: Joi.string()
        .optional(),
      modelo: Joi.string()
        .optional(),
      fabricante: Joi.string()
        .optional(),
      costo_en_creditos: Joi.number()
        .allow('unknown')
        .integer()
        .positive()
        .cast('string')
        .optional(),
      longitud: Joi.number()
        .positive()
        .cast('string')
        .optional(),
      maxima_velocidad_atmosferica: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .optional(),
      equipo: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .optional(),
      pasajeros: Joi.number()
        .allow(0)
        .integer()
        .positive()
        .cast('string')
        .optional(),
      capacidad_carga: Joi.number()
        .allow('none')
        .integer()
        .positive()
        .cast('string')
        .optional(),
      consumibles: Joi.string()
        .optional(),
      clase_vehiculo: Joi.string()
        .optional(),
      url: Joi.string()
        .optional(),
    });
    try {
      return await schema.validateAsync(body);
    }
    catch (err) {
      throw { statusCode: HTTP_STATUS_CODE_BAD_REQUEST, details: err.details };
    }
  },
  async updateVehicleValidator(body) {
    const schema = Joi.object({
      id: Joi.string()
        .uuid()
        .required(),
      nombre: Joi.string()
        .optional(),
      modelo: Joi.string()
        .optional(),
      fabricante: Joi.string()
        .optional(),
      costo_en_creditos: Joi.number()
        .allow('unknown')
        .integer()
        .positive()
        .cast('string')
        .optional(),
      longitud: Joi.number()
        .positive()
        .cast('string')
        .optional(),
      maxima_velocidad_atmosferica: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .optional(),
      equipo: Joi.number()
        .integer()
        .positive()
        .cast('string')
        .optional(),
      pasajeros: Joi.number()
        .allow(0)
        .integer()
        .positive()
        .cast('string')
        .optional(),
      capacidad_carga: Joi.number()
        .allow('none')
        .integer()
        .positive()
        .cast('string')
        .optional(),
      consumibles: Joi.string()
        .optional(),
      clase_vehiculo: Joi.string()
        .optional(),
      pilotos: Joi.array()
        .items(Joi.string())
        .optional(),
      peliculas: Joi.array()
        .items(Joi.string())
        .optional(),
      url: Joi.string()
        .optional(),
    });
    try {
      return await schema.validateAsync(body);
    }
    catch (err) {
      throw { statusCode: HTTP_STATUS_CODE_BAD_REQUEST, details: err.details };
    }
  },
  async deleteVehicleValidator(body) {
    const schema = Joi.object({
      id: Joi.string()
        .uuid()
        .required(),
    });
    try {
      return await schema.validateAsync(body);
    }
    catch (err) {
      throw { statusCode: HTTP_STATUS_CODE_BAD_REQUEST, details: err.details };
    }
  },
};