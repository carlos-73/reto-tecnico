'use strict';
const planetService = require('../../services/PlanetService');
const planetModel = require('../../models/Planet');
const myGenericResponse = require('../../models/MyGenericResponse');

const STATUS_OK = "OK";
const STATUS_ERROR = "ERROR";

module.exports.createPlanet = async event => {
  const service = new planetService();
  const planet = new planetModel();
  Object.assign(planet, JSON.parse(event.body));
  var response = {};
  try {
    const result = await service.createPlanet(planet);
    response = new myGenericResponse(STATUS_OK, 201, "Planeta creado satisfactoriamente", 1, result);
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