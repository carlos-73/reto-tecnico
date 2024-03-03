"use strict";

const controller = require("../../../../main/app/vehicle/controllers/Vehicle");
const {
  createVehicle,
  getVehicleById,
  getAllVehicles,
  updateVehicle,
  deleteVehicle,
} = require("../../../../main/app/vehicle/services/VehicleService");

jest.mock("../../../../main/app/vehicle/services/VehicleService");

describe("Controladores", () => {
  describe("Crear vehiculo", () => {
    test("Caso exito", async () => {
      const event = {
        body: JSON.stringify({
          nombre: "Snowspeeder",
          modelo: "t-47 airspeeder",
          fabricante: "Incom corporation",
          costo_en_creditos: "unknown",
          longitud: "4.5",
          maxima_velocidad_atmosferica: "650",
          equipo: "2",
          pasajeros: "0",
          capacidad_carga: "10",
          consumibles: "none",
          clase_vehiculo: "airspeeder",
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          url: "https://swapi.py4e.com/api/vehicles/14/",
        }),
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo creado satisfactoriamente",
        number_records: 1,
        object: {
          nombre: "Snowspeeder",
          modelo: "t-47 airspeeder",
          fabricante: "Incom corporation",
          costo_en_creditos: "unknown",
          longitud: "4.5",
          maxima_velocidad_atmosferica: "650",
          equipo: "2",
          pasajeros: "0",
          capacidad_carga: "10",
          consumibles: "none",
          clase_vehiculo: "airspeeder",
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          url: "https://swapi.py4e.com/api/vehicles/14/",
          id: "a2f1f250-281a-11ee-99a8-779f47265d8d",
          creado: 1689980536309,
          editado: 1689980536309,
        },
      };
      const responseController = {
        statusCode: 200,
        body: '{"status":"success","code":200,"message":"Vehiculo creado satisfactoriamente","number_records":1,"object":{"nombre":"Snowspeeder","modelo":"t-47 airspeeder","fabricante":"Incom corporation","costo_en_creditos":"unknown","longitud":"4.5","maxima_velocidad_atmosferica":"650","equipo":"2","pasajeros":"0","capacidad_carga":"10","consumibles":"none","clase_vehiculo":"airspeeder","pilotos":["https://swapi.py4e.com/api/people/1/","https://swapi.py4e.com/api/people/18/"],"peliculas":["https://swapi.py4e.com/api/films/2/"],"url":"https://swapi.py4e.com/api/vehicles/14/","id":"a2f1f250-281a-11ee-99a8-779f47265d8d","creado":1689980536309,"editado":1689980536309}}',
      };
      createVehicle.mockResolvedValue(responseService);
      const result = await controller.createVehicle(event);
      expect(result).toStrictEqual(responseController);
    });
    test("Caso error", async () => {
      const event = {
        body: JSON.stringify({
          nombre: "Snowspeeder",
          modelo: "t-47 airspeeder",
          fabricante: "Incom corporation",
          costo_en_creditos: "unknown",
          longitud: "4.5",
          maxima_velocidad_atmosferica: "650",
          equipo: "2",
          pasajeros: "0",
          capacidad_carga: "10",
          consumibles: "none",
          clase_vehiculo: "airspeeder",
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          url: "https://swapi.py4e.com/api/vehicles/14/",
        }),
      };
      const responseService = {
        statusCode: 400,
        message: "Vehiculo existente",
      };
      const responseController = {
        statusCode: 400,
        message: "Vehiculo existente",
      };
      createVehicle.mockRejectedValue(responseService);
      try {
        await controller.createVehicle(event);
      } catch (error) {
        expect(error).toStrictEqual(responseController);
      }
    });
  });
  describe("Obtener vehiculo por Id", () => {
    test("Caso exito", async () => {
      const event = {
        body: JSON.stringify({
          id: "5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4",
        }),
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo encontrado",
        number_records: 1,
        object: [
          {
            nombre: "Snowspeeder",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-21T18:28:17.705Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-21T18:28:17.705Z",
            id: "5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4",
            longitud: "4.5",
            pasajeros: "0",
          },
        ],
      };
      const responseController = {
        statusCode: 200,
        body: '{"status":"success","code":200,"message":"Vehiculo encontrado","number_records":1,"object":[{"nombre":"Snowspeeder","capacidad_carga":"10","maxima_velocidad_atmosferica":"650","url":"https://swapi.py4e.com/api/vehicles/14/","equipo":"2","consumibles":"none","peliculas":["https://swapi.py4e.com/api/films/2/"],"pilotos":["https://swapi.py4e.com/api/people/1/","https://swapi.py4e.com/api/people/18/"],"costo_en_creditos":"unknown","modelo":"t-47 airspeeder","editado":"2023-07-21T18:28:17.705Z","fabricante":"Incom corporation","clase_vehiculo":"airspeeder","creado":"2023-07-21T18:28:17.705Z","id":"5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4","longitud":"4.5","pasajeros":"0"}]}',
      };
      getVehicleById.mockResolvedValue(responseService);
      const result = await controller.getVehicleById(event);
      expect(result).toStrictEqual(responseController);
    });
    test("Caso error", async () => {
      const event = {
        body: JSON.stringify({
          id: "5cc5e280-27f4-11ee-aa6d-6fb0f049eaa6",
        }),
      };
      const responseService = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      const responseController = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      getVehicleById.mockRejectedValue(responseService);
      try {
        await controller.getVehicleById(event);
      } catch (error) {
        expect(error).toStrictEqual(responseController);
      }
    });
  });
  describe("Obtener todos los vehiculos", () => {
    test("Caso exito", async () => {
      const event = {
        queryStringParameters: {
          fuente: "",
        },
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculos encontrados",
        number_records: 3,
        object: [
          {
            nombre: "Sail barge",
            capacidad_carga: "2000000",
            maxima_velocidad_atmosferica: "100",
            url: "https://swapi.py4e.com/api/vehicles/24/",
            equipo: "26",
            consumibles: "Live food tanks",
            peliculas: ["https://swapi.py4e.com/api/films/3/"],
            pilotos: [],
            costo_en_creditos: "285000",
            modelo: "Modified Luxury Sail Barge",
            editado: "2023-07-21T20:26:22.804Z",
            fabricante: "Ubrikkian Industries Custom Vehicle Division",
            clase_vehiculo: "sail barge",
            creado: "2023-07-21T18:49:16.678Z",
            id: "4b2deb50-27f7-11ee-9531-c92103edf592",
            longitud: "30",
            pasajeros: "500",
          },
          {
            nombre: "Snowspeeder2",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-21T23:02:16.309Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-21T23:02:16.309Z",
            id: "a2f1f250-281a-11ee-99a8-779f47265d8d",
            longitud: "4.5",
            pasajeros: "0",
          },
          {
            nombre: "Snowspeeder",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-21T18:28:17.705Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-21T18:28:17.705Z",
            id: "5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4",
            longitud: "4.5",
            pasajeros: "0",
          },
        ],
      };
      const responseController = {
        statusCode: 200,
        body: '{"status":"success","code":200,"message":"Vehiculos encontrados","number_records":3,"object":[{"nombre":"Sail barge","capacidad_carga":"2000000","maxima_velocidad_atmosferica":"100","url":"https://swapi.py4e.com/api/vehicles/24/","equipo":"26","consumibles":"Live food tanks","peliculas":["https://swapi.py4e.com/api/films/3/"],"pilotos":[],"costo_en_creditos":"285000","modelo":"Modified Luxury Sail Barge","editado":"2023-07-21T20:26:22.804Z","fabricante":"Ubrikkian Industries Custom Vehicle Division","clase_vehiculo":"sail barge","creado":"2023-07-21T18:49:16.678Z","id":"4b2deb50-27f7-11ee-9531-c92103edf592","longitud":"30","pasajeros":"500"},{"nombre":"Snowspeeder2","capacidad_carga":"10","maxima_velocidad_atmosferica":"650","url":"https://swapi.py4e.com/api/vehicles/14/","equipo":"2","consumibles":"none","peliculas":["https://swapi.py4e.com/api/films/2/"],"pilotos":["https://swapi.py4e.com/api/people/1/","https://swapi.py4e.com/api/people/18/"],"costo_en_creditos":"unknown","modelo":"t-47 airspeeder","editado":"2023-07-21T23:02:16.309Z","fabricante":"Incom corporation","clase_vehiculo":"airspeeder","creado":"2023-07-21T23:02:16.309Z","id":"a2f1f250-281a-11ee-99a8-779f47265d8d","longitud":"4.5","pasajeros":"0"},{"nombre":"Snowspeeder","capacidad_carga":"10","maxima_velocidad_atmosferica":"650","url":"https://swapi.py4e.com/api/vehicles/14/","equipo":"2","consumibles":"none","peliculas":["https://swapi.py4e.com/api/films/2/"],"pilotos":["https://swapi.py4e.com/api/people/1/","https://swapi.py4e.com/api/people/18/"],"costo_en_creditos":"unknown","modelo":"t-47 airspeeder","editado":"2023-07-21T18:28:17.705Z","fabricante":"Incom corporation","clase_vehiculo":"airspeeder","creado":"2023-07-21T18:28:17.705Z","id":"5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4","longitud":"4.5","pasajeros":"0"}]}',
      };
      getAllVehicles.mockResolvedValue(responseService);
      const result = await controller.getAllVehicles(event);
      expect(result).toStrictEqual(responseController);
    });
    test("Caso error", async () => {
      const event = {
        queryStringParameters: {
          fuente: "",
        },
      };
      const responseService = {
        statusCode: 404,
        message: "Vehiculos no encontrados",
      };
      const responseController = {
        statusCode: 404,
        message: "Vehiculos no encontrados",
      };
      getAllVehicles.mockRejectedValue(responseService);
      try {
        await controller.getAllVehicles(event);
      } catch (error) {
        expect(error).toStrictEqual(responseController);
      }
    });
  });
  describe("Modificar vehiculo", () => {
    test("Caso exito", async () => {
      const event = {
        pathParameters: {
          id: "4b2deb50-27f7-11ee-9531-c92103edf592",
        },
        body: JSON.stringify({
          nombre: "Sail barge",
          modelo: "Modified Luxury Sail Barge",
          fabricante: "Ubrikkian Industries Custom Vehicle Division",
          costo_en_creditos: "285000",
          longitud: "30",
          maxima_velocidad_atmosferica: "100",
          equipo: "26",
          pasajeros: "500",
          capacidad_carga: "2000000",
          consumibles: "Live food tanks",
          clase_vehiculo: "sail barge",
          pilotos: [],
          peliculas: ["https://swapi.py4e.com/api/films/3/"],
          url: "https://swapi.py4e.com/api/vehicles/24/",
        }),
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo modificado satisfactoriamente",
        number_records: 1,
        object: {
          nombre: "Sail barge",
          capacidad_carga: "2000000",
          maxima_velocidad_atmosferica: "100",
          url: "https://swapi.py4e.com/api/vehicles/24/",
          equipo: "26",
          consumibles: "Live food tanks",
          peliculas: ["https://swapi.py4e.com/api/films/3/"],
          pilotos: [],
          costo_en_creditos: "285000",
          modelo: "Modified Luxury Sail Barge",
          editado: "2023-07-22T00:04:03.822Z",
          fabricante: "Ubrikkian Industries Custom Vehicle Division",
          clase_vehiculo: "sail barge",
          id: "4b2deb50-27f7-11ee-9531-c92103edf592",
          longitud: "30",
          pasajeros: "500",
        },
      };
      const responseController = {
        statusCode: 200,
        body: '{"status":"success","code":200,"message":"Vehiculo modificado satisfactoriamente","number_records":1,"object":{"nombre":"Sail barge","capacidad_carga":"2000000","maxima_velocidad_atmosferica":"100","url":"https://swapi.py4e.com/api/vehicles/24/","equipo":"26","consumibles":"Live food tanks","peliculas":["https://swapi.py4e.com/api/films/3/"],"pilotos":[],"costo_en_creditos":"285000","modelo":"Modified Luxury Sail Barge","editado":"2023-07-22T00:04:03.822Z","fabricante":"Ubrikkian Industries Custom Vehicle Division","clase_vehiculo":"sail barge","id":"4b2deb50-27f7-11ee-9531-c92103edf592","longitud":"30","pasajeros":"500"}}',
      };
      updateVehicle.mockResolvedValue(responseService);
      const result = await controller.updateVehicle(event);
      expect(result).toStrictEqual(responseController);
    });
    test("Caso error", async () => {
      const event = {
        body: JSON.stringify({
          id: "5cc5e280-27f4-11ee-aa6d-6fb0f049eaa6",
        }),
      };
      const responseService = {
        statusCode: 400,
        message: "Nombre de vehiculo existente",
      };
      const responseController = {
        statusCode: 400,
        message: "Nombre de vehiculo existente",
      };
      updateVehicle.mockRejectedValue(responseService);
      try {
        await controller.updateVehicle(event);
      } catch (error) {
        expect(error).toStrictEqual(responseController);
      }
    });
  });
  describe("Eliminar vehiculo", () => {
    test("Caso exito", async () => {
      const event = {
        pathParameters: {
          id: "b6303e20-2825-11ee-9794-c53ac4c0b16c",
        },
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo eliminado satisfactoriamente",
        number_records: 1,
      };
      const responseController = {
        statusCode: 200,
        body: '{"status":"success","code":200,"message":"Vehiculo eliminado satisfactoriamente","number_records":1}',
      };
      deleteVehicle.mockResolvedValue(responseService);
      const result = await controller.deleteVehicle(event);
      expect(result).toStrictEqual(responseController);
    });
    test("Caso error", async () => {
      const event = {
        pathParameters: {
          id: "b6303e20-2825-11ee-9794-c53ac4c0b16c",
        },
      };
      const responseService = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      const responseController = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      deleteVehicle.mockRejectedValue(responseService);
      try {
        await controller.deleteVehicle(event);
      } catch (error) {
        expect(error).toStrictEqual(responseController);
      }
    });
  });
});
