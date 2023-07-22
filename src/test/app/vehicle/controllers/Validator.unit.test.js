'use strict';

const validator = require('../../../../main/app/vehicle/controllers/Validator');

describe('Validaciones', () => {
  describe('Validar request para crear vehiculo', () => {
    test('Caso exito', async () => {
      const request = {
        nombre: 'Snowspeeder6',
        modelo: 't-47 airspeeder',
        fabricante: 'Incom corporation',
        costo_en_creditos: 'unknown',
        longitud: '4.5',
        maxima_velocidad_atmosferica: '650',
        equipo: '2',
        pasajeros: '0',
        capacidad_carga: '10',
        consumibles: 'none',
        clase_vehiculo: 'airspeeder',
        pilotos: [
          'https://swapi.py4e.com/api/people/1/',
          'https://swapi.py4e.com/api/people/18/'
        ],
        peliculas: ['https://swapi.py4e.com/api/films/2/'],
        url: 'https://swapi.py4e.com/api/vehicles/14/'
      };
      const result = await validator.createVehicleValidator(request);
      expect(result).toStrictEqual(request);
    });
    test('Caso error', async () => {
      const request = {
        nombre: 'Snowspeeder6'
      };
      try {
        await validator.createVehicleValidator(request);
      } catch (error) {
        const errorResponse = {
          "details": [
            {
              "message": "\"modelo\" is required",
              "path": [
                "modelo"
              ],
              "type": "any.required",
              "context": {
                "label": "modelo",
                "key": "modelo"
              }
            }
          ],
          "statusCode": 400,
        };
        expect(error).toStrictEqual(errorResponse);
      };
    });
  });
  describe('Validar request para obtener vehiculo por id', () => {
    test('Caso exito', async () => {
      const request = {
        id: '5cc5e280-27f4-11ee-aa6d-6fb0f049eaa4'
      };
      const result = await validator.getVehicleByIdValidator(request);
      expect(result).toStrictEqual(request);
    });
    test('Caso error', async () => {
      const request = {
        id: '5cc5e280'
      };
      try {
        await validator.getVehicleByIdValidator(request);
      } catch (error) {
        const errorResponse = {
          "statusCode": 400,
          "details": [
            {
              "message": "\"id\" must be a valid GUID",
              "path": [
                "id"
              ],
              "type": "string.guid",
              "context": {
                "label": "id",
                "value": "5cc5e280",
                "key": "id"
              }
            }
          ]
        };
        expect(error).toStrictEqual(errorResponse);
      };
    });
  });
  describe('Validar request para obtener todos los vehiculos', () => {
    test('Caso exito', async () => {
      const request = {
        fuente: ''
      };
      const result = await validator.getAllVehiclesValidator(request);
      expect(result).toStrictEqual(request);
    });
    test('Caso error', async () => {
      const request = {
        nombre: 'R2'
      };
      try {
        await validator.getAllVehiclesValidator(request);
      } catch (error) {
        const errorResponse = {
          "statusCode": 400,
          "details": [
            {
              "message": "\"fuente\" is required",
              "path": [
                "fuente"
              ],
              "type": "any.required",
              "context": {
                "label": "fuente",
                "key": "fuente"
              }
            }
          ]
        };
        expect(error).toStrictEqual(errorResponse);
      };
    });
  });
  describe('Validar request para actualizar vehiculo', () => {
    test('Caso exito', async () => {
      const request = {
        'id': '4b2deb50-27f7-11ee-9531-c92103edf592',
        'nombre': 'Sail barge',
        'modelo': 'Modified Luxury Sail Barge',
        'fabricante': 'Ubrikkian Industries Custom Vehicle Division'
      };
      const result = await validator.updateVehicleValidator(request);
      expect(result).toStrictEqual(request);
    });
    test('Caso error', async () => {
      const request = {
        'id': '4b2deb50'
      };
      try {
        await validator.updateVehicleValidator(request);
      } catch (error) {
        const errorResponse = {
          "statusCode": 400,
          "details": [
            {
              "message": "\"id\" must be a valid GUID",
              "path": [
                "id"
              ],
              "type": "string.guid",
              "context": {
                "label": "id",
                "value": "4b2deb50",
                "key": "id"
              }
            }
          ]
        };
        expect(error).toStrictEqual(errorResponse);
      };
    });
  });
  describe('Validar request para eliminar vehiculo', () => {
    test('Caso exito', async () => {
      const request = {
        'id': '08a65f60-2806-11ee-a3e0-051b08752885'
      };
      const result = await validator.deleteVehicleValidator(request);
      expect(result).toStrictEqual(request);
    });
    test('Caso error', async () => {
      const request = {
        'id': '08a65f60'
      };
      try {
        await validator.deleteVehicleValidator(request);
      } catch (error) {
        const errorResponse = {
          "statusCode": 400,
          "details": [
            {
              "message": "\"id\" must be a valid GUID",
              "path": [
                "id"
              ],
              "type": "string.guid",
              "context": {
                "label": "id",
                "value": "08a65f60",
                "key": "id"
              }
            }
          ]
        };
        expect(error).toStrictEqual(errorResponse);
      };
    });
  });
});
