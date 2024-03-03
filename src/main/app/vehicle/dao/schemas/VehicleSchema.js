'use strict';
const dynamoose = require('dynamoose');
const { VEHICLE_DYNAMODB_TABLE } = require('../../utils/Constants');

const VehicleSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true
    },
    nombre: {
      type: String,
      required: true,
      index: {
        global: true
      }
    },
    modelo: {
      type: String,
      required: true
    },
    fabricante: {
      type: String,
      required: true
    },
    costo_en_creditos: {
      type: String,
      required: true
    },
    longitud: {
      type: String,
      required: true
    },
    maxima_velocidad_atmosferica: {
      type: String,
      required: true
    },
    equipo: {
      type: String,
      required: true
    },
    pasajeros: {
      type: String,
      required: true
    },
    capacidad_carga: {
      type: String,
      required: true
    },
    consumibles: {
      type: String,
      required: true
    },
    clase_vehiculo: {
      type: String,
      required: true
    },
    pilotos: {
      type: Array,
      required: true,
      schema: [String],
      default: []
    },
    peliculas: {
      type: Array,
      required: true,
      schema: [String],
      default: []
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'creado',
      updatedAt: 'editado'
    }
  }
);

module.exports = dynamoose.model(VEHICLE_DYNAMODB_TABLE, VehicleSchema);
