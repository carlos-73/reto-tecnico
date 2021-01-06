'use strict';
const getAllPlanets = require('../../../main/app/controllers/planets/GetAllPlanets');
const createPlanet = require('../../../main/app/controllers/planets/CreatePlanet');
const getPlanetByName = require('../../../main/app/controllers/planets/GetPlanetByName');

jest.mock(
    '../../../main/app/services/PlanetService.js',
    () => {
        return jest.fn().mockImplementation(() => {
            return {
                getAllPlanets: () => {
                    return [
                        {
                            diametro: "21428",
                            nombre: "Planeta 1",
                            clima: "arido",
                            residentes: [
                                "https://swapi.py4e.com/api/people/1/",
                                "https://swapi.py4e.com/api/people/2/",
                                "https://swapi.py4e.com/api/people/4/",
                                "https://swapi.py4e.com/api/people/6/",
                                "https://swapi.py4e.com/api/people/7/",
                                "https://swapi.py4e.com/api/people/8/",
                                "https://swapi.py4e.com/api/people/9/",
                                "https://swapi.py4e.com/api/people/11/",
                                "https://swapi.py4e.com/api/people/43/",
                                "https://swapi.py4e.com/api/people/62/"
                            ],
                            url: "https://swapi.py4e.com/api/planets/1/",
                            poblacion: "100000",
                            periodo_orbital: "632",
                            peliculas: [
                                "https://swapi.py4e.com/api/films/1/",
                                "https://swapi.py4e.com/api/films/3/",
                                "https://swapi.py4e.com/api/films/4/",
                                "https://swapi.py4e.com/api/films/5/",
                                "https://swapi.py4e.com/api/films/6/"
                            ],
                            superficie_agua: "2",
                            editado: "Wed Jan 06 2021 02:25:48 GMT-0500 (hora estándar de Perú)",
                            periodo_rotacion: "47",
                            gravedad: "2 estandar",
                            creado: "Wed Jan 06 2021 02:25:48 GMT-0500 (hora estándar de Perú)",
                            id: "65bf18e0-4ff0-11eb-b961-e51369ba98de",
                            terreno: "desertico"
                        },
                        {
                            diametro: "10465",
                            nombre: "Planeta 2",
                            clima: "calido",
                            residentes: [
                                "https://swapi.py4e.com/api/people/1/",
                                "https://swapi.py4e.com/api/people/2/",
                                "https://swapi.py4e.com/api/people/4/",
                                "https://swapi.py4e.com/api/people/6/",
                                "https://swapi.py4e.com/api/people/7/",
                                "https://swapi.py4e.com/api/people/8/",
                                "https://swapi.py4e.com/api/people/9/",
                                "https://swapi.py4e.com/api/people/11/",
                                "https://swapi.py4e.com/api/people/43/",
                                "https://swapi.py4e.com/api/people/62/"
                            ],
                            url: "https://swapi.py4e.com/api/planets/2/",
                            poblacion: "374000",
                            periodo_orbital: "126",
                            peliculas: [
                                "https://swapi.py4e.com/api/films/1/",
                                "https://swapi.py4e.com/api/films/3/",
                                "https://swapi.py4e.com/api/films/4/",
                                "https://swapi.py4e.com/api/films/5/",
                                "https://swapi.py4e.com/api/films/6/"
                            ],
                            superficie_agua: "5",
                            editado: "Wed Jan 06 2021 08:41:08 GMT+0000 (Coordinated Universal Time)",
                            periodo_rotacion: "87",
                            gravedad: "1 estandar",
                            creado: "Wed Jan 06 2021 08:41:09 GMT+0000 (Coordinated Universal Time)",
                            id: "ec53b820-4ffa-11eb-82f4-9151fdb0e62a",
                            terreno: "arenoso"
                        }
                    ]
                },
                createPlanet: () => {
                    return {
                        nombre: "Planeta N",
                        periodo_rotacion: "11",
                        periodo_orbital: "222",
                        diametro: "33333",
                        clima: "tropical",
                        gravedad: "4 estandar",
                        terreno: "arcilloso",
                        superficie_agua: "5",
                        poblacion: "600000",
                        residentes: [
                            "https://swapi.py4e.com/api/people/1/",
                            "https://swapi.py4e.com/api/people/2/",
                            "https://swapi.py4e.com/api/people/4/",
                            "https://swapi.py4e.com/api/people/6/",
                            "https://swapi.py4e.com/api/people/7/",
                            "https://swapi.py4e.com/api/people/8/",
                            "https://swapi.py4e.com/api/people/9/",
                            "https://swapi.py4e.com/api/people/11/",
                            "https://swapi.py4e.com/api/people/43/",
                            "https://swapi.py4e.com/api/people/62/"
                        ],
                        peliculas: [
                            "https://swapi.py4e.com/api/films/1/",
                            "https://swapi.py4e.com/api/films/3/",
                            "https://swapi.py4e.com/api/films/4/",
                            "https://swapi.py4e.com/api/films/5/",
                            "https://swapi.py4e.com/api/films/6/"
                        ],
                        url: "https://swapi.py4e.com/api/planets/1/"
                    }
                },
                getPlanetByName: () => {
                    return {
                        diametro: "21428",
                        nombre: "Planeta 1",
                        clima: "arido",
                        residentes: [
                            "https://swapi.py4e.com/api/people/1/",
                            "https://swapi.py4e.com/api/people/2/",
                            "https://swapi.py4e.com/api/people/4/",
                            "https://swapi.py4e.com/api/people/6/",
                            "https://swapi.py4e.com/api/people/7/",
                            "https://swapi.py4e.com/api/people/8/",
                            "https://swapi.py4e.com/api/people/9/",
                            "https://swapi.py4e.com/api/people/11/",
                            "https://swapi.py4e.com/api/people/43/",
                            "https://swapi.py4e.com/api/people/62/"
                        ],
                        url: "https://swapi.py4e.com/api/planets/1/",
                        poblacion: "100000",
                        periodo_orbital: "632",
                        peliculas: [
                            "https://swapi.py4e.com/api/films/1/",
                            "https://swapi.py4e.com/api/films/3/",
                            "https://swapi.py4e.com/api/films/4/",
                            "https://swapi.py4e.com/api/films/5/",
                            "https://swapi.py4e.com/api/films/6/"
                        ],
                        superficie_agua: "2",
                        editado: "Wed Jan 06 2021 02:25:48 GMT-0500 (hora estándar de Perú)",
                        periodo_rotacion: "47",
                        gravedad: "2 estandar",
                        creado: "Wed Jan 06 2021 02:25:48 GMT-0500 (hora estándar de Perú)",
                        id: "65bf18e0-4ff0-11eb-b961-e51369ba98de",
                        terreno: "desertico"
                    }
                }
            }
        })
    }
)

describe('Planet', () => {
    test('Get All Planets', async () => {
        const result = await getAllPlanets.getAllPlanets();
        console.log(result);
        expect(result.statusCode).toBe(200)
    })

    test('Create Planet', async () => {
        const request = {
            body: '{"nombre":"Tatooine","periodo_rotacion":"23","periodo_orbital":"304","diametro":"10465","clima":"arid","gravedad":"1 standard","terreno":"desert","superficie_agua":"1","poblacion":"200000","residentes":["https://swapi.py4e.com/api/people/1/","https://swapi.py4e.com/api/people/2/","https://swapi.py4e.com/api/people/4/","https://swapi.py4e.com/api/people/6/","https://swapi.py4e.com/api/people/7/","https://swapi.py4e.com/api/people/8/","https://swapi.py4e.com/api/people/9/","https://swapi.py4e.com/api/people/11/","https://swapi.py4e.com/api/people/43/","https://swapi.py4e.com/api/people/62/"],"peliculas":["https://swapi.py4e.com/api/films/1/","https://swapi.py4e.com/api/films/3/","https://swapi.py4e.com/api/films/4/","https://swapi.py4e.com/api/films/5/","https://swapi.py4e.com/api/films/6/"],"url":"https://swapi.py4e.com/api/planets/1/"}',
        }
        const result = await createPlanet.createPlanet(request);
        console.log(result);
        expect(result.statusCode).toBe(201)
    })

    test('Get By Name', async () => {
        const request = {
            pathParameters: {
                nombre: 'Tatooine'
            }
        }
        const result = await getPlanetByName.getPlanetByName(request);
        console.log(result);
        expect(result.statusCode).toBe(200)
    })
})