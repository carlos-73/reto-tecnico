'use strict';
const planetService = require('../../services/PlanetService');
const planetModel = require('../../models/Planet');
const myGenericResponse = require('../../models/MyGenericResponse');

const STATUS_OK = "OK";
const STATUS_ERROR = "ERROR";

module.exports.getPlanetByName = async event => {
  const service = new planetService();
  const planet = new planetModel();
  var response = {};
  try {
    planet.nombre = event.pathParameters.nombre;
    const result = await service.getPlanetByName(planet);
    response = new myGenericResponse(STATUS_OK, 200, "Planeta encontrado", 1, result);
  } catch (e) {
    var err = e.error ? e.error : (e.message ? e.message : e);
    delete e.error;
    let httpStatus = e.httpStatus ? e.httpStatus : (e.statusCode ? e.statusCode : 500);
    response = new myGenericResponse(STATUS_ERROR, httpStatus, err, 0, e);
  }
  return {
    statusCode: response.code,
    body: JSON.stringify(response, null, 2),
  };
};