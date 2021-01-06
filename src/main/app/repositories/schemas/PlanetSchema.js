'use strict';
const dynamoose = require('dynamoose');

const PlanetSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
    },
    nombre: {
        type: String,
        required: true,
        index: {
            global: true,
        }
    },
    periodo_rotacion: {
        type: String,
        required: true,
    },
    periodo_orbital: {
        type: String,
        required: true,
    },
    diametro: {
        type: String,
        required: true,
    },
    clima: {
        type: String,
        required: true,
    },
    gravedad: {
        type: String,
        required: true,
    },
    terreno: {
        type: String,
        required: true,
    },
    superficie_agua: {
        type: String,
        required: true,
    },
    poblacion: {
        type: String,
        required: true,
    },
    residentes: {
        type: Array,
        required: true,
        schema:[String],
        default: []
    },
    peliculas: {
        type: Array,
        required: true,
        schema:[String],
        default: []
    },
    creado: {
        type: String,
        required: true,
    },
    editado: {
        type: String,
        required: true,
        default: new Date().toString()
    },
    url: {
        type: String,
        required: true,
    },
})

module.exports = dynamoose.model('PLANETAS', PlanetSchema);