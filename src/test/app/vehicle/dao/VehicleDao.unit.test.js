'use strict';

const axios = require('axios');
const dao = require('../../../../main/app/vehicle/dao/VehicleDao');
const schema = require('../../../../main/app/vehicle/dao/schemas/VehicleSchema');

jest.mock('../../../../main/app/vehicle/dao/schemas/VehicleSchema');
jest.mock('axios');

describe('DAO', () => {
  describe('Crear vehiculo', () => {
    test('Caso exito', async () => {
      const request = {
        "nombre": "Snowspeeder2", "modelo": "t-47 airspeeder", "fabricante": "Incom corporation", "costo_en_creditos": "unknown", "longitud": "4.5", "maxima_velocidad_atmosferica": "650", "equipo": "2",
        "pasajeros": "0", "capacidad_carga": "10", "consumibles": "none", "clase_vehiculo": "airspeeder", "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"],
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "url": "https://swapi.py4e.com/api/vehicles/14/", "id": "074bf0b0-28d0-11ee-9d90-d53c52e09ab6"
      };
      const responseSchema = {
        "nombre": "Snowspeederw", "modelo": "t-47 airspeeder", "fabricante": "Incom corporation", "costo_en_creditos": "unknown", "longitud": "4.5", "maxima_velocidad_atmosferica": "650",
        "equipo": "2", "pasajeros": "0", "capacidad_carga": "10", "consumibles": "none", "clase_vehiculo": "airspeeder", "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"],
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "url": "https://swapi.py4e.com/api/vehicles/14/", "id": "d05ab190-28cf-11ee-957f-b325033060b9", "creado": 1690058351402, "editado": 1690058351402
      };
      const responseDao = {
        "nombre": "Snowspeederw", "modelo": "t-47 airspeeder", "fabricante": "Incom corporation", "costo_en_creditos": "unknown", "longitud": "4.5", "maxima_velocidad_atmosferica": "650",
        "equipo": "2", "pasajeros": "0", "capacidad_carga": "10", "consumibles": "none", "clase_vehiculo": "airspeeder", "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"],
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "url": "https://swapi.py4e.com/api/vehicles/14/", "id": "d05ab190-28cf-11ee-957f-b325033060b9", "creado": 1690058351402, "editado": 1690058351402
      };
      schema.create.mockResolvedValue(responseSchema);
      const result = await dao.createVehicle(request);
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const request = {
        "nombre": "Snowspeeder2", "modelo": "t-47 airspeeder", "fabricante": "Incom corporation", "costo_en_creditos": "unknown", "longitud": "4.5", "maxima_velocidad_atmosferica": "650", "equipo": "2",
        "pasajeros": "0", "capacidad_carga": "10", "consumibles": "none", "clase_vehiculo": "airspeeder", "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"],
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "url": "https://swapi.py4e.com/api/vehicles/14/", "id": "074bf0b0-28d0-11ee-9d90-d53c52e09ab6"
      };
      const responseSchema = { statusCode: 500, message: "No se pudo crear Vehiculo" };;
      const responseDao = { statusCode: 500, message: "No se pudo crear Vehiculo" };;
      schema.create.mockRejectedValue(responseSchema);
      try {
        await dao.createVehicle(request);
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Obtener todos los vehiculos fuente interna', () => {
    test('Caso exito sin filtros', async () => {
      const request = {};
      const responseSchema = [{
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      }, {
        "nombre": "Snowspeeder2", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T20:40:43.579Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T20:40:43.579Z", "id": "074bf0b0-28d0-11ee-9d90-d53c52e09ab6", "longitud": "4.5",
        "pasajeros": "0"
      }, {
        "nombre": "Snowspeederw", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T20:39:11.402Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T20:39:11.402Z", "id": "d05ab190-28cf-11ee-957f-b325033060b9", "longitud": "4.5",
        "pasajeros": "0"
      }];
      const responseDao = [{
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      }, {
        "nombre": "Snowspeeder2", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T20:40:43.579Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T20:40:43.579Z", "id": "074bf0b0-28d0-11ee-9d90-d53c52e09ab6", "longitud": "4.5",
        "pasajeros": "0"
      }, {
        "nombre": "Snowspeederw", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T20:39:11.402Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T20:39:11.402Z", "id": "d05ab190-28cf-11ee-957f-b325033060b9", "longitud": "4.5",
        "pasajeros": "0"
      }];
      schema.scan = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockResolvedValueOnce(responseSchema) }));
      const result = await dao.getAllVehicles(request);
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso exito con filtros', async () => {
      const request = { nombre: 'Snowspeeder' };
      const responseSchema = [{
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      }];
      const responseDao = [{
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      }];
      schema.scan = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockResolvedValueOnce(responseSchema) }));
      const result = await dao.getAllVehicles(request);
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const request = { nombre: 'Snowspeeder' };
      const responseSchema = { statusCode: 404, message: "Vehiculos no encontrados" };
      const responseDao = { statusCode: 404, message: "Vehiculos no encontrados" };
      schema.scan = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockRejectedValueOnce(responseSchema) }));
      try {
        await dao.getAllVehicles(request);
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Obtener todos los vehiculos fuente externa', () => {
    test('Caso exito', async () => {
      const responseSchema = {
        status: 200,
        statusText: 'OK',
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        path: '/api/vehicles/',
        _ended: true,
        _ended: true,
        _ending: true,
        _redirectCount: 1,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _currentUrl: 'https://swapi.py4e.com/api/vehicles/',
        _isRedirect: true,
        data: {
          "count": 39, "next": "https://swapi.py4e.com/api/vehicles/?page=2", "previous": null, "results": [{
            "name": "Sand Crawler", "model": "Digger Crawler",
            "length": "30", "max_atmosphering_speed": "100", "crew": "26", "passengers": "500", "cargo_capacity": "2000000", "consumables": "Live food tanks",
            "vehicle_class": "sail barge", "pilots": [], "films": ["https://swapi.py4e.com/api/films/3/"], "created": "2014-12-18T10:44:14.217000Z",
            "edited": "2014-12-20T21:30:21.684000Z", "url": "https://swapi.py4e.com/api/vehicles/24/"
          }]
        }
      };
      const responseDao = {
        "count": 39, "next": "https://swapi.py4e.com/api/vehicles/?page=2", "previous": null, "results": [{
          "name": "Sand Crawler", "model": "Digger Crawler",
          "length": "30", "max_atmosphering_speed": "100", "crew": "26", "passengers": "500", "cargo_capacity": "2000000", "consumables": "Live food tanks",
          "vehicle_class": "sail barge", "pilots": [], "films": ["https://swapi.py4e.com/api/films/3/"], "created": "2014-12-18T10:44:14.217000Z",
          "edited": "2014-12-20T21:30:21.684000Z", "url": "https://swapi.py4e.com/api/vehicles/24/"
        }]
      };
      axios.get.mockResolvedValue(responseSchema);
      const result = await dao.getAllVehiclesExternal();
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const responseSchema = { statusCode: 404, message: "Vehiculos no encontrados" };;
      const responseDao = { statusCode: 404, message: "Vehiculos no encontrados" };;
      axios.get.mockRejectedValue(responseSchema);
      try {
        await dao.getAllVehiclesExternal();
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Obtener vehiculo(s) por nombre', () => {
    test('Caso exito', async () => {
      const responseSchema = {
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      };
      const responseDao = {
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      };
      schema.query = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockResolvedValueOnce(responseSchema) }));
      const result = await dao.getVehicleByName('Snowspeeder');
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const responseSchema = { statusCode: 404, message: "Vehiculos no encontrados" };
      const responseDao = { statusCode: 404, message: "Vehiculos no encontrados" };
      schema.query = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockRejectedValueOnce(responseSchema) }));
      try {
        await dao.getVehicleByName('Snowspeeder');
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Obtener vehiculo por Id', () => {
    test('Caso exito', async () => {
      const responseSchema = {
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      };
      const responseDao = {
        "nombre": "Snowspeeder", "capacidad_carga": "10", "maxima_velocidad_atmosferica": "650", "url": "https://swapi.py4e.com/api/vehicles/14/", "equipo": "2", "consumibles": "none",
        "peliculas": ["https://swapi.py4e.com/api/films/2/"], "pilotos": ["https://swapi.py4e.com/api/people/1/", "https://swapi.py4e.com/api/people/18/"], "costo_en_creditos": "unknown", "modelo": "t-47 airspeeder",
        "editado": "2023-07-22T19:48:59.593Z", "fabricante": "Incom corporation", "clase_vehiculo": "airspeeder", "creado": "2023-07-22T19:48:59.593Z", "id": "cd2d1c80-28c8-11ee-b246-8d466e53189a", "longitud": "4.5",
        "pasajeros": "0"
      };
      schema.query = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockResolvedValueOnce(responseSchema) }));
      const result = await dao.getVehicleById('cd2d1c80-28c8-11ee-b246-8d466e53189a');
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const responseSchema = { statusCode: 404, message: "Vehiculo no encontrados" };
      const responseDao = { statusCode: 404, message: "Vehiculo no encontrados" };
      schema.query = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockRejectedValueOnce(responseSchema) }));
      try {
        await dao.getVehicleById('cd2d1c80-28c8-11ee-b246-8d466e53189a');
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Modificar vehiculo', () => {
    test('Caso exito', async () => {
      const request = {
        "nombre": "Sail barge", "modelo": "Modified Luxury Sail Barge", "fabricante": "Ubrikkian Industries Custom Vehicle Division", "costo_en_creditos": "285000", "longitud": "30",
        "maxima_velocidad_atmosferica": "100", "equipo": "26", "pasajeros": "500", "capacidad_carga": "2000000", "consumibles": "Live food tanks", "clase_vehiculo": "sail barge", "pilotos": [],
        "peliculas": ["https://swapi.py4e.com/api/films/3/"], "url": "https://swapi.py4e.com/api/vehicles/24/", "id": "6c0f6620-284f-11ee-92be-f1b1944acfa9"
      };
      const responseSchema = {
        "nombre": "Sail barge", "capacidad_carga": "2000000", "maxima_velocidad_atmosferica": "100", "url": "https://swapi.py4e.com/api/vehicles/24/", "equipo": "26",
        "consumibles": "Live food tanks", "peliculas": ["https://swapi.py4e.com/api/films/3/"], "pilotos": [], "costo_en_creditos": "285000", "modelo": "Modified Luxury Sail Barge",
        "editado": "2023-07-22T22:31:38.046Z", "fabricante": "Ubrikkian Industries Custom Vehicle Division", "clase_vehiculo": "sail barge", "id": "6c0f6620-284f-11ee-92be-f1b1944acfa9", "longitud": "30",
        "pasajeros": "500"
      };
      const responseDao = {
        "nombre": "Sail barge", "capacidad_carga": "2000000", "maxima_velocidad_atmosferica": "100", "url": "https://swapi.py4e.com/api/vehicles/24/", "equipo": "26",
        "consumibles": "Live food tanks", "peliculas": ["https://swapi.py4e.com/api/films/3/"], "pilotos": [], "costo_en_creditos": "285000", "modelo": "Modified Luxury Sail Barge",
        "editado": "2023-07-22T22:31:38.046Z", "fabricante": "Ubrikkian Industries Custom Vehicle Division", "clase_vehiculo": "sail barge", "id": "6c0f6620-284f-11ee-92be-f1b1944acfa9", "longitud": "30",
        "pasajeros": "500"
      };
      schema.update.mockResolvedValue(responseSchema);
      const result = await dao.updateVehicle(request);
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const request = {
        "nombre": "Sail barge", "modelo": "Modified Luxury Sail Barge", "fabricante": "Ubrikkian Industries Custom Vehicle Division", "costo_en_creditos": "285000", "longitud": "30",
        "maxima_velocidad_atmosferica": "100", "equipo": "26", "pasajeros": "500", "capacidad_carga": "2000000", "consumibles": "Live food tanks", "clase_vehiculo": "sail barge", "pilotos": [],
        "peliculas": ["https://swapi.py4e.com/api/films/3/"], "url": "https://swapi.py4e.com/api/vehicles/24/", "id": "6c0f6620-284f-11ee-92be-f1b1944acfa9"
      };
      const responseSchema = { statusCode: 500, message: "No se pudo modificar el Vehiculo" };;
      const responseDao = { statusCode: 500, message: "No se pudo modificar el Vehiculo" };;
      schema.update.mockRejectedValue(responseSchema);
      try {
        await dao.updateVehicle(request);
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
  describe('Eliminar vehiculo', () => {
    test('Caso exito', async () => {
      const responseSchema = undefined;
      const responseDao = undefined;
      schema.delete.mockResolvedValue(responseSchema);
      const result = await dao.deleteVehicle('cd2d1c80-28c8-11ee-b246-8d466e53189a');
      expect(result).toStrictEqual(responseDao);
    });
    test('Caso error', async () => {
      const responseSchema = { statusCode: 500, message: "No se pudo eliminar el Vehiculo" };;
      const responseDao = { statusCode: 500, message: "No se pudo eliminar el Vehiculo" };;
      schema.delete.mockRejectedValue(responseSchema);
      try {
        await dao.deleteVehicle('cd2d1c80-28c8-11ee-b246-8d466e53189a');
      } catch (error) {
        expect(error).toStrictEqual(responseDao);
      }
    });
  });
});
