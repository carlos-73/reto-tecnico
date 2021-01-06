'use strict';
const planetService = require('../../services/PlanetService');
const myGenericResponse = require('../../models/MyGenericResponse');

const STATUS_OK = "OK";
const STATUS_ERROR = "ERROR";

module.exports.getAllPlanets = async event => {
  const service = new planetService();
  var response = {};
  try {
    const result = await service.getAllPlanets();
    response = new myGenericResponse(STATUS_OK, 200, "Listado de planetas", result.length, result);
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